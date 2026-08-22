import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import { DISCORD_INVITE_URL } from '../data/socialLinks'

const ACTION_CLASS =
  'inline-flex shrink-0 items-center justify-center rounded-full border border-white/70 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white transition hover:border-amber-400 hover:text-amber-400'

const OPTIONS = [
  {
    title: 'Open a Ticket on Discord',
    description: 'The fastest way to reach staff — head to the #support channel and open a ticket.',
    action: { label: 'Join the Discord', href: DISCORD_INVITE_URL, external: true },
  },
  {
    title: 'Report In-Game',
    description: 'Use the /report command in-game to flag an issue directly to on-duty staff.',
  },
  {
    title: 'Check the FRP Wiki',
    description: 'Most common questions — rules, jobs, getting started — are already answered there.',
    action: { label: 'Visit the Wiki', to: '/wiki' },
  },
]

function SupportPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PageHero
        eyebrow="We're Here to Help"
        title="Support"
        description="Stuck on something, or need to reach staff? Here's the fastest way to get help."
      />

      <section className="bg-black py-16">
        <div className="mx-auto max-w-3xl space-y-4 px-6">
          {OPTIONS.map((option) => (
            <div
              key={option.title}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white">{option.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{option.description}</p>
              </div>

              {option.action &&
                (option.action.external ? (
                  <a href={option.action.href} target="_blank" rel="noopener noreferrer" className={ACTION_CLASS}>
                    {option.action.label}
                  </a>
                ) : (
                  <Link to={option.action.to} className={ACTION_CLASS}>
                    {option.action.label}
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SupportPage
