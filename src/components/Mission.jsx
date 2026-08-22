import { useReveal } from '../hooks/useReveal'

function BookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 6.5c-1.8-1.3-4.3-2-7-2v13c2.7 0 5.2.7 7 2 1.8-1.3 4.3-2 7-2v-13c-2.7 0-5.2.7-7 2Z" />
      <path d="M12 6.5v13" />
    </svg>
  )
}

function CompassIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-6 2 2-6 6-2Z" />
    </svg>
  )
}

const PILLARS = [
  {
    title: 'Stories That Matter',
    Icon: BookIcon,
    description:
      "We play roleplay seriously — not because it isn't fun, but because that's how the fun lasts. Every character, every choice, and every consequence is treated as real, because that's what turns a server into a story worth telling.",
  },
  {
    title: 'Forge Your Path',
    Icon: CompassIcon,
    description:
      "Discipline shouldn't need a hundred rules to exist. We trust our players to hold themselves and each other accountable, so the community stays fair and free — never boxed in.",
  },
]

function PillarCard({ title, description, Icon, delay }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`rounded-2xl border border-white/10 bg-neutral-900/60 p-8 transition-all duration-700 hover:-translate-y-1 hover:border-amber-400/40 sm:p-10 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10 text-amber-400">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{description}</p>
    </div>
  )
}

function Mission() {
  const [headerRef, headerVisible] = useReveal()

  return (
    <section id="mission" className="relative overflow-hidden border-t border-white/10 bg-black py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <div
          ref={headerRef}
          className={`text-center transition-all duration-1000 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            🇵🇭 Baguhin ang Nakasanayan
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Rewriting the <span className="text-amber-400">Filipino RedM</span> Community
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We're not here to be another server, running on the same habits everyone's grown
            used to. Frontier Roleplay was built to change that standard — a community where
            roleplay is taken seriously enough to matter, and freedom is protected by respect,
            not by a rulebook.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {PILLARS.map((pillar, index) => (
            <PillarCard key={pillar.title} {...pillar} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission
