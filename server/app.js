import { fileURLToPath } from 'node:url'
import path from 'node:path'
import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

// Load server/.env regardless of the directory this is run from. On Vercel this file
// won't exist — these come from the project's Environment Variables instead, and
// dotenv silently no-ops when there's nothing to load.
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

const { SESSION_SECRET } = process.env

if (!SESSION_SECRET) {
  console.warn('[auth] SESSION_SECRET is not set — using an insecure default. Set one for real deployments.')
}

// Reused as the JWT signing secret (name kept for continuity — it's no longer tied
// to express-session, just "the app's secret").
const JWT_SECRET = SESSION_SECRET ?? 'dev-only-insecure-secret'
const COOKIE_NAME = 'frp_session'

const app = express()
app.use(cookieParser())

// Sign-in is temporarily disabled — there's no login route issuing session cookies,
// so this always reports no user. Kept so the frontend's AuthContext keeps working
// unchanged once a login provider is added back.
app.get('/auth/me', (req, res) => {
  const token = req.cookies?.[COOKIE_NAME]
  if (!token) return res.status(401).json({ user: null })

  try {
    const { displayName, avatar } = jwt.verify(token, JWT_SECRET)
    res.json({ user: { displayName, avatar } })
  } catch {
    res.status(401).json({ user: null })
  }
})

app.post('/auth/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME, { path: '/' })
  res.status(204).end()
})

export default app
