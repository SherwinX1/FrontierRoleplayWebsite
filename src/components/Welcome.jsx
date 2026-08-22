import townImage from '../assets/thumb-1920-1278679.png'
import { useReveal } from '../hooks/useReveal'

const STATS = [
  { value: 'In Dev', label: 'Current Status' },
  { value: 'PH', label: 'Based & Hosted' },
  { value: 'Active', label: 'Community & Staff' },
]

function Welcome() {
  const [imgRef, imgVisible] = useReveal()
  const [textRef, textVisible] = useReveal()

  return (
    <section id="welcome" className="relative overflow-hidden bg-black py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center md:gap-16">
        <div
          ref={imgRef}
          className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-1000 ${
            imgVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
          <img src={townImage} alt="Riders on the trail into Calhoun" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div
          ref={textRef}
          className={`transition-all duration-1000 ${
            textVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            🇵🇭 Proudly based in the Philippines
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Welcome to <span className="text-amber-400">Frontier Roleplay</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            Frontier Roleplay is a RedM roleplay community proudly built and run out of the
            Philippines, with an active team and a story that keeps moving day and night.
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            To every settler, outlaw, and dreamer who rides into Calhoun — welcome. Whether
            you're chasing the law, running from it, or simply looking to build a life of your
            own, there's a place waiting for you here. Saddle up, stake your claim, and start
            writing your legacy.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 text-center sm:text-left">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-amber-400">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
