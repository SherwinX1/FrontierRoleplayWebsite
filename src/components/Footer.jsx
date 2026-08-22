import logo from '../assets/Gemini_Generated_Image_ss4dvzss4dvzss4d-removebg-preview.png'
import { SOCIAL_LINKS, DISCORD_INVITE_URL } from '../data/socialLinks'
import { useReveal } from '../hooks/useReveal'

// Plain <a> tags (not <Link>) on purpose: these mix routes with in-page hashes
// ("/#welcome"), which only works correctly as a real browser navigation.
const EXPLORE_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Welcome', href: '/#welcome' },
  { label: 'Our Vision', href: '/#mission' },
  { label: 'Activities', href: '/#activities' },
]

const COMMUNITY_LINKS = [
  { label: 'Join our Discord', href: DISCORD_INVITE_URL, external: true },
  { label: 'Sign in with Steam', href: '/auth/steam' },
]

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm font-semibold text-slate-300">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="transition hover:text-amber-400"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  const [ref, visible] = useReveal()

  return (
    <footer className="hidden border-t border-white/10 bg-black sm:block">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl gap-12 px-6 py-16 transition-all duration-1000 sm:grid-cols-2 lg:grid-cols-4 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="sm:col-span-2 lg:col-span-2">
          <img src={logo} alt="Frontier Roleplay" className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
          RedM Server | Philippines
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {SOCIAL_LINKS.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:scale-110 hover:bg-amber-400 hover:text-black"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Explore" links={EXPLORE_LINKS} />
        <FooterColumn title="Community" links={COMMUNITY_LINKS} />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center sm:flex-row sm:text-left">
          <div className="text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Frontier Roleplay. All rights reserved.</p>
            <p className="mt-1">Not affiliated with Rockstar Games or Take-Two Interactive.</p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-bold uppercase tracking-widest text-slate-400 transition hover:text-amber-400"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
