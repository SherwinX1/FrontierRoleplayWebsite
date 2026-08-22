// Shared intro block for simple content pages (Rules, Gallery, Wiki, Support) —
// keeps the badge/heading/description treatment consistent with the landing page.
function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-white/10 bg-black pt-48 pb-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  )
}

export default PageHero
