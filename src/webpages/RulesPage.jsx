import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

const RULES = [
  {
    title: 'Roleplay Quality',
    description: 'Stay in character. Type and act as your character would, not as yourself.',
  },
  {
    title: 'Respect Above All',
    description: 'No harassment, hate speech, or real-world discrimination — in or out of character.',
  },
  {
    title: 'No Metagaming',
    description: "Don't use out-of-character information (Discord, streams, forums) to gain an in-character advantage.",
  },
  {
    title: 'No Powergaming',
    description: "Don't force outcomes on other players — give them a fair chance to react in the roleplay.",
  },
  {
    title: 'Fair Play',
    description: 'No cheating, exploiting, or third-party tools that give you an unfair edge over other players.',
  },
]

function RulesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PageHero
        eyebrow="Community Guidelines"
        title="Server Rules"
        description="A short list of ground rules that keep Calhoun fun and fair for everyone. The full rulebook is covered in detail on the FRP Wiki."
      />

      <section className="bg-black py-16">
        <div className="mx-auto max-w-3xl space-y-4 px-6">
          {RULES.map((rule, i) => (
            <div
              key={rule.title}
              className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 transition hover:border-amber-400/40"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-sm font-bold text-amber-400">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{rule.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{rule.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RulesPage
