import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

const CATEGORIES = [
  {
    title: 'Getting Started',
    description: 'New to Calhoun? Character creation, controls, and your first day in-game.',
  },
  {
    title: 'Jobs & Businesses',
    description: 'Every legal (and not-so-legal) way to make a living on the frontier.',
  },
  {
    title: 'Factions & Law',
    description: 'Gangs, posses, the Sheriff’s Office, and how the local government works.',
  },
  {
    title: 'Ranching & Trades',
    description: 'Livestock, crafting, and building a homestead from scratch.',
  },
]

function WikiPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PageHero
        eyebrow="Knowledge Base"
        title="FRP Wiki"
        description="Everything you need to know to play Frontier Roleplay, organized in one place."
      />

      <section className="bg-black py-16">
        <div className="mx-auto grid max-w-4xl gap-6 px-6 sm:grid-cols-2">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 transition hover:-translate-y-1 hover:border-amber-400/40"
            >
              <h3 className="text-lg font-bold text-white">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WikiPage
