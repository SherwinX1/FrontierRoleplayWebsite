import { useEffect, useState } from 'react'
import { CFX_JOIN_URL } from '../data/socialLinks'

const JOIN_CODE = CFX_JOIN_URL.split('/').pop()
const REFRESH_INTERVAL = 60 * 1000

// Live player count for the RedM server from the Cfx.re server list. Querying the
// server directly doesn't work — its players.json is firewalled, and an http:// IP
// would be blocked as mixed content on the https site anyway. Returns null until
// loaded (or if the server isn't listed), so callers can simply hide the stats.
export function useServerStats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch(`https://frontend.cfx-services.net/api/servers/single/${JOIN_CODE}`)
        if (!res.ok) throw new Error(`Cfx.re responded with ${res.status}`)
        const { Data: data } = await res.json()
        if (!cancelled) setStats({ players: data.clients, maxPlayers: data.sv_maxclients })
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
