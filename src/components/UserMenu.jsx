import { useEffect, useRef, useState } from 'react'

function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  )
}

// Avatar + display name pill that opens a small dropdown with the sign-out action.
function UserMenu({ user, onLogout }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pl-2 pr-3 transition hover:border-amber-400/50"
      >
        <img src={user.avatar} alt="" className="h-7 w-7 rounded-full" />
        <span className="text-sm font-semibold text-slate-200">{user.displayName}</span>
        <ChevronIcon className={`h-4 w-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-xl border border-white/10 bg-neutral-900 py-1.5 shadow-2xl"
        >
          <button
            role="menuitem"
            onClick={() => {
              setOpen(false)
              onLogout()
            }}
            className="block w-full px-4 py-2 text-left text-sm font-semibold text-slate-300 transition hover:bg-amber-400 hover:text-black"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default UserMenu
