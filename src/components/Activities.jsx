import { useReveal } from '../hooks/useReveal'

function BriefcaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path strokeLinecap="round" d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  )
}

function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="9" cy="8" r="3" />
      <path strokeLinecap="round" d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path strokeLinecap="round" d="M15.5 14.2c2.5.4 4.5 2.6 4.5 5.8" />
    </svg>
  )
}

function LandmarkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-6 9 6" />
      <path strokeLinecap="round" d="M5 10v9M9 10v9M15 10v9M19 10v9" />
      <path strokeLinecap="round" d="M3 21h18" />
    </svg>
  )
}

function BadgeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" {...props}>
      <path strokeLinecap="round" d="M12 2l2.2 4.4 4.9.7-3.5 3.4.8 4.9-4.4-2.3-4.4 2.3.8-4.9-3.5-3.4 4.9-.7L12 2Z" />
    </svg>
  )
}

function BarnIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10 12 4l9 6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10v10h16V10" />
      <path d="M12 4v16" />
      <path strokeLinecap="round" d="M8 20v-5a4 4 0 0 1 8 0v5" />
    </svg>
  )
}

function MedicalBagIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path strokeLinecap="round" d="M12 11v6M9 14h6" />
    </svg>
  )
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 8v8M8 12h8" />
    </svg>
  )
}

const ACTIVITIES = [
  {
    title: 'Business',
    description: 'Open a shop, run a saloon, or build a trade empire from the ground up.',
    Icon: BriefcaseIcon,
  },
  {
    title: 'Factions & Groups',
    description: 'Form a gang, join a posse, or rally a crew and make your mark together.',
    Icon: UsersIcon,
  },
  {
    title: 'Rule the Government',
    description: 'Climb the ranks of town leadership and help shape the laws of Calhoun.',
    Icon: LandmarkIcon,
  },
  {
    title: 'Sheriffs',
    description: 'Pin on a badge, enforce the law, and keep the peace across the territory.',
    Icon: BadgeIcon,
  },
  {
    title: 'Ranches',
    description: 'Raise livestock, work the land, and build a homestead to call your own.',
    Icon: BarnIcon,
  },
  {
    title: 'Doctors',
    description: 'Patch up the wounded, run the clinic, and keep the folk of Calhoun alive.',
    Icon: MedicalBagIcon,
  },
  {
    title: 'And More',
    description: 'Hunting, crafting, outlawing, railroads — if you can dream it, you can live it.',
    Icon: PlusIcon,
  },
]

function ActivityCard({ title, description, Icon, delay }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group rounded-2xl border border-white/10 bg-neutral-900/60 p-8 transition-all duration-700 hover:-translate-y-1 hover:border-amber-400/40 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-black">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
  )
}

function Activities() {
  const [headerRef, headerVisible] = useReveal()

  return (
    <section id="activities" className="relative border-t border-white/10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What Can You Do <span className="text-amber-400">on the Server?</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">You can do anything on the server.</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((activity, index) => (
            <ActivityCard key={activity.title} {...activity} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities
