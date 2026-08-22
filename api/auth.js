// Vercel serverless function — wraps the same Express app used for local dev.
// vercel.json rewrites every /auth/* request to this one function; Express's own
// routing (see server/app.js) dispatches from there based on the original path.
import app from '../server/app.js'

export default function handler(req, res) {
  return app(req, res)
}
