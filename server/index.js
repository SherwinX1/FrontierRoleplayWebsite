// Local dev entry point — runs the shared Express app (server/app.js) as a normal
// long-lived server. On Vercel, api/auth.js imports the same app and runs it as a
// serverless function instead; this file isn't used there.
import app from './app.js'

const { PORT = 3001 } = process.env

app.listen(PORT, () => {
  console.log(`Auth server listening on http://localhost:${PORT}`)
})
