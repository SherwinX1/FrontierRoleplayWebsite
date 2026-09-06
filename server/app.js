import { fileURLToPath } from 'node:url'
import path from 'node:path'
import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import passportSteam from 'passport-steam'

const { Strategy: SteamStrategy } = passportSteam

// Load server/.env regardless of the directory this is run from. On Vercel this file
// won't exist — these come from the project's Environment Variables instead, and
// dotenv silently no-ops when there's nothing to load.
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

const {
  FRONTEND_URL = 'http://localhost:5173',
  STEAM_API_KEY,
  SESSION_SECRET,
  NODE_ENV,
} = process.env

if (!STEAM_API_KEY) {
  console.warn(
    '[auth] STEAM_API_KEY is not set — Steam login will fail until you add one.\n' +
      '        Get a free key at https://steamcommunity.com/dev/apikey.',
  )
}

if (!SESSION_SECRET) {
  console.warn('[auth] SESSION_SECRET is not set — using an insecure default. Set one for real deployments.')
}

// Reused as the JWT signing secret (name kept for continuity — it's no longer tied
// to express-session, just "the app's secret").
const JWT_SECRET = SESSION_SECRET ?? 'dev-only-insecure-secret'
const COOKIE_NAME = 'frp_session'
const isProduction = NODE_ENV === 'production'

// passport-steam fetches the profile itself via the `steam-web` package, which hardcodes
// a plain-HTTP (port 80) request to Steam's API — Steam now rejects those with a 403,
// regardless of how valid the key is. `profile: false` skips that broken call, and we
// fetch the same data ourselves over HTTPS below instead.
async function fetchSteamProfile(steamId) {
  const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${steamId}&format=json`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Steam API responded with ${res.status}`)
  const player = (await res.json())?.response?.players?.[0]
  if (!player) throw new Error("Steam API returned no player data")

  return {
    id: player.steamid,
    displayName: player.personaname,
    photos: [{ value: player.avatar }, { value: player.avatarmedium }, { value: player.avatarfull }],
  }
}

passport.use(
  new SteamStrategy(
    {
      returnURL: `${FRONTEND_URL}/auth/steam/return`,
      realm: FRONTEND_URL,
      apiKey: STEAM_API_KEY,
      // Verifies each login with a direct check back to Steam instead of caching an
      // association in memory between the two request legs — required on serverless,
      // where nothing guarantees the same instance handles both of them.
      stateless: true,
      profile: false,
    },
    // Steam has already verified the login by the time this runs — `identifier` is the
    // claimed OpenID URL, e.g. https://steamcommunity.com/openid/id/<steamID64>.
    (identifier, _profile, done) => {
      const steamId = identifier.match(/\/id\/(\d+)$/)?.[1]
      if (!steamId) return done(new Error('Could not parse Steam ID from identifier'))
      fetchSteamProfile(steamId).then((profile) => done(null, profile)).catch(done)
    },
  ),
)

const app = express()
app.use(cookieParser())
app.use(passport.initialize())

// Step 1: kick off the Steam login — the button in the navbar/hero just links here.
app.get('/auth/steam', passport.authenticate('steam', { session: false }))

// Step 2: Steam redirects back here after the user approves the login. passport-steam
// verifies the response came from Steam before this handler ever runs, and populates
// req.user with their public profile. We sign that into a JWT and hand it back as a
// cookie instead of keeping server-side session state.
app.get(
  '/auth/steam/return',
  passport.authenticate('steam', { session: false, failureRedirect: '/' }),
  (req, res) => {
    const { id, displayName, photos } = req.user
    const token = jwt.sign(
      { steamId: id, displayName, avatar: photos?.[2]?.value ?? photos?.[0]?.value ?? null },
      JWT_SECRET,
      { expiresIn: '30d' },
    )

    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/',
    })

    res.redirect(FRONTEND_URL)
  },
)

// The frontend polls this on load to find out if there's already a logged-in session.
app.get('/auth/me', (req, res) => {
  const token = req.cookies?.[COOKIE_NAME]
  if (!token) return res.status(401).json({ user: null })

  try {
    const { steamId, displayName, avatar } = jwt.verify(token, JWT_SECRET)
    res.json({ user: { steamId, displayName, avatar } })
  } catch {
    res.status(401).json({ user: null })
  }
})

app.post('/auth/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME, { path: '/' })
  res.status(204).end()
})

export default app
