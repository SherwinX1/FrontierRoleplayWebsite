import { useEffect, useState } from 'react'
import { DISCORD_INVITE_URL } from '../data/socialLinks'

const INVITE_CODE = DISCORD_INVITE_URL.split('/').pop()
const REFRESH_INTERVAL = 5 * 60 * 1000

// Live member / online counts from Discord's public invite endpoint — no bot or token
// needed, and Discord allows it cross-origin. Returns null until loaded (or if the
// invite is invalid/expired), so callers can simply hide the stats.
export function useDiscordStats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch(`https://discord.com/api/v10/invites/${INVITE_CODE}?with_counts=true`)
        if (!res.ok) throw new Error(`Discord responded with ${res.status}`)
        const data = await res.json()
        if (!cancelled) setStats({ members: data.approximate_member_count, online: data.approximate_presence_count })
      } catch {
        if (!cancelled) setStats(null)
      }
    }

    load()
    const id = setInterval(load, REFRESH_INTERVAL)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  return stats
}
