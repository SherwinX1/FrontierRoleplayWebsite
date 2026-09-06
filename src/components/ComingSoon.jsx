// Shared placeholder body for pages that don't have content yet (Rules, Wiki, Support).
function ComingSoon() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/60 px-8 py-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Coming Soon</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            We're still putting this page together. Check back soon.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon
