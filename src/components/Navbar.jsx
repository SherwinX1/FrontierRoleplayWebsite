import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useAuth } from '../context/AuthContext'
import { DISCORD_INVITE_URL } from '../data/socialLinks'
import DevelopmentBanner from './DevelopmentBanner'
import UserMenu from './UserMenu'

const NAV_LINKS = [
  { label: 'Home', to: '/', reload: true },
  { label: 'Rules', to: '/rules' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'FRP Wiki', to: '/wiki' },
  { label: 'Discord', href: DISCORD_INVITE_URL, external: true },
  { label: 'Support', to: '/support' },
]

// Renders as an in-app <Link> for internal routes, a real <a> (new tab) for external ones,
// or a plain <a> for links that should force a full page reload (e.g. Home).
function NavLink({ link, className, onClick, children }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
        {children}
      </a>
    )
  }
  if (link.reload) {
    return (
      <a href={link.to} onClick={onClick} className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link to={link.to} onClick={onClick} className={className}>
      {children}
    </Link>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, loading, logout } = useAuth()

  // Lock page scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 animate-fade-in-down border-b border-white/10 bg-black/40 backdrop-blur-md">
        <DevelopmentBanner />
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <img src={logo} alt="Frontier Roleplay" className="h-10 w-auto" />
          </a>

          <ul className="hidden items-center gap-6 text-sm font-semibold tracking-wide text-slate-200 lg:flex xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink link={link} className="group relative py-1 transition hover:text-amber-400">
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Steam sign-in is temporarily disabled — only render this once a session exists. */}
          {!loading && user && (
            <div className="hidden lg:flex lg:items-center">
              <UserMenu user={user} onLogout={logout} />
            </div>
          )}

          {/* Animated hamburger ↔ close icon */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span className={`h-0.5 w-6 rounded-full bg-white transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu — kept out from under <header> deliberately: header has
          backdrop-blur, and a backdrop-filter on an ancestor creates a new containing block
          for `fixed` descendants, which would shrink this overlay down to the header's own
          (tiny) height instead of the full viewport. */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-black/97 backdrop-blur-xl transition-opacity duration-500 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-8 overflow-y-auto px-6 py-24">
          <ul className="flex flex-col items-center gap-5 text-center">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.label}
                className={`transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: open ? `${150 + i * 75}ms` : '0ms' }}
              >
                <NavLink
                  link={link}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-bold text-white transition hover:text-amber-400"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            className={`flex flex-col items-center gap-6 transition-all duration-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: open ? '600ms' : '0ms' }}
          >
            {/* Steam sign-in is temporarily disabled — only render this once a session exists. */}
            {user && (
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  <img src={user.avatar} alt="" className="h-10 w-10 rounded-full border border-white/20" />
                  <span className="text-base font-semibold text-slate-200">{user.displayName}</span>
                </div>
                <button
                  onClick={() => {
                    setOpen(false)
                    logout()
                  }}
                  className="rounded-full border border-white/30 px-6 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 transition hover:border-amber-400 hover:text-amber-400"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
