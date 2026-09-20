import { useEffect, useMemo, useState } from 'react'
import { FRONTIER_STANDARD, MOST_IMPORTANT_RULE, RULEBOOK_INTRO, RULEBOOK_SECTIONS } from '../data/rulebook'

const GOLDEN_RULE_ID = 'play-the-story'

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

// Flattens a rule's summary + detail blocks into one lowercase string for search matching.
function ruleSearchText(rule) {
  const detailText = (rule.details || [])
    .map((block) => (block.type === 'ul' ? block.items.join(' ') : block.text))
    .join(' ')
  return `${rule.title} ${rule.summary} ${detailText}`.toLowerCase()
}

function DetailBlocks({ blocks }) {
  return (
    <div className="space-y-3">
      {blocks.map((block, i) =>
        block.type === 'ul' ? (
          <ul key={i} className="grid gap-1.5 sm:grid-cols-2">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-400">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400/60" />
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className="text-sm leading-relaxed text-slate-400 sm:text-[15px]">
            {block.text}
          </p>
        ),
      )}
    </div>
  )
}

function RuleCard({ rule, forceOpen, isOpen, onToggle }) {
  const open = forceOpen || isOpen
  const hasDetails = rule.details && rule.details.length > 0

  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 transition-colors hover:border-amber-400/30 sm:p-7">
      <div className="flex gap-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-sm font-bold text-amber-400">
          {rule.number}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-white sm:text-lg">{rule.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-300 sm:text-[15px]">{rule.summary}</p>

          {hasDetails && (
            <>
              {open && <div className="mt-4 border-t border-white/10 pt-4">
                <DetailBlocks blocks={rule.details} />
              </div>}

              {!forceOpen && (
                <button
                  onClick={onToggle}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 transition hover:text-amber-300"
                >
                  {isOpen ? 'Hide details' : 'Show details'}
                  <ChevronIcon className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// The section wrapper stays mounted at all times (even with zero visible rules while
// searching) and is only ever CSS-hidden — never removed from the DOM. The sidebar's
// scrollspy grabs each section element once by id on mount, so unmounting it here would
// leave that observer watching a detached node after the section reappears.
function SectionBlock({ section, visibleRules, hidden, expandedIds, onToggleRule, forceOpen }) {
  return (
    <section id={section.id} className={`scroll-mt-36 ${hidden ? 'hidden' : ''}`}>
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-bold text-amber-400">{section.number}</span>
        <h2 className="text-xl font-bold text-white sm:text-2xl">{section.title}</h2>
      </div>
      {section.intro && <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{section.intro}</p>}

      <div className="mt-6 space-y-4">
        {visibleRules.map((rule) => (
          <RuleCard
            key={rule.number}
            rule={rule}
            forceOpen={forceOpen}
            isOpen={expandedIds.has(rule.number)}
            onToggle={() => onToggleRule(rule.number)}
          />
        ))}
      </div>
    </section>
  )
}

function FrontierStandardBlock({ hidden }) {
  return (
    <section id={FRONTIER_STANDARD.id} className={`scroll-mt-36 ${hidden ? 'hidden' : ''}`}>
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-bold text-amber-400">{FRONTIER_STANDARD.number}</span>
        <h2 className="text-xl font-bold text-white sm:text-2xl">{FRONTIER_STANDARD.title}</h2>
      </div>

      <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 sm:p-7">
        <p className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">{FRONTIER_STANDARD.intro}</p>
        <ul className="mt-4 space-y-2.5">
          {FRONTIER_STANDARD.questions.map((q) => (
            <li key={q} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
              <span className="mt-0.5 text-amber-400">?</span>
              {q}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-[15px]">{FRONTIER_STANDARD.outro}</p>
      </div>
    </section>
  )
}

function GoldenRuleBanner({ hidden }) {
  return (
    <section
      id={GOLDEN_RULE_ID}
      className={`scroll-mt-36 rounded-2xl border border-amber-400/30 bg-linear-to-b from-amber-400/10 to-transparent p-8 text-center sm:p-12 ${hidden ? 'hidden' : ''}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
        {MOST_IMPORTANT_RULE.eyebrow}
      </span>
      <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-bold text-white sm:text-3xl">{MOST_IMPORTANT_RULE.title}</h2>
      <div className="mx-auto mt-5 max-w-2xl space-y-3">
        {MOST_IMPORTANT_RULE.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}

// Highlights the sidebar entry for whichever section heading is currently nearest the top
// of the viewport, using a thin observation band so only one heading is "active" at a time.
function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}

function Sidebar({ tocEntries, activeId }) {
  return (
    <nav className="hidden lg:block">
      <div className="sticky top-36 max-h-[calc(100vh-10rem)] overflow-y-auto pr-2">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Contents</span>
        <ul className="mt-4 space-y-1 border-l border-white/10">
          {tocEntries.map((entry) => (
            <li key={entry.id}>
              <a
                href={`#${entry.id}`}
                className={`block border-l-2 py-1.5 pl-4 text-sm font-semibold transition ${
                  activeId === entry.id
                    ? 'border-amber-400 text-amber-400'
                    : 'border-transparent text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {entry.number ? `${entry.number}. ${entry.title}` : entry.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function Rulebook() {
  const [query, setQuery] = useState('')
  const [expandedIds, setExpandedIds] = useState(() => new Set())
  const [allExpanded, setAllExpanded] = useState(false)

  const searchActive = query.trim().length > 0

  // Sections/rules that don't match are hidden via CSS, never unmounted — see the
  // SectionBlock comment for why (the scrollspy observer depends on stable DOM nodes).
  const sectionsWithVisibleRules = useMemo(() => {
    const q = query.trim().toLowerCase()
    return RULEBOOK_SECTIONS.map((section) => ({
      section,
      visibleRules: q ? section.rules.filter((rule) => ruleSearchText(rule).includes(q)) : section.rules,
    }))
  }, [query])

  const resultCount = useMemo(
    () => sectionsWithVisibleRules.reduce((sum, s) => sum + s.visibleRules.length, 0),
    [sectionsWithVisibleRules],
  )

  const tocEntries = useMemo(
    () => [
      ...RULEBOOK_SECTIONS.map((s) => ({ id: s.id, number: s.number, title: s.title })),
      { id: FRONTIER_STANDARD.id, number: FRONTIER_STANDARD.number, title: FRONTIER_STANDARD.title },
      { id: GOLDEN_RULE_ID, number: null, title: MOST_IMPORTANT_RULE.title },
    ],
    [],
  )
  const activeId = useActiveSection(useMemo(() => tocEntries.map((e) => e.id), [tocEntries]))

  function toggleRule(number) {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(number)) next.delete(number)
      else next.add(number)
      return next
    })
  }

  function toggleExpandAll() {
    setAllExpanded((prev) => !prev)
  }

  return (
    <div className="border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Search + expand-all toolbar */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the rules…"
              className="w-full rounded-full border border-white/10 bg-neutral-900/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-amber-400/50"
            />
          </div>
          <button
            onClick={toggleExpandAll}
            disabled={searchActive}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 transition hover:border-amber-400/40 hover:text-amber-400 disabled:opacity-40"
          >
            {allExpanded ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {searchActive && (
          <p className="mt-4 text-sm text-slate-500">
            {resultCount} result{resultCount === 1 ? '' : 's'} for "{query}"
          </p>
        )}

        <div className="mt-10 grid gap-12 lg:grid-cols-[240px_1fr]">
          <Sidebar tocEntries={tocEntries} activeId={activeId} />

          <div className="min-w-0 space-y-16">
            {searchActive && resultCount === 0 && (
              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 px-8 py-16 text-center">
                <p className="text-slate-400">No rules matched your search.</p>
              </div>
            )}

            {sectionsWithVisibleRules.map(({ section, visibleRules }) => (
              <SectionBlock
                key={section.id}
                section={section}
                visibleRules={visibleRules}
                hidden={searchActive && visibleRules.length === 0}
                expandedIds={expandedIds}
                onToggleRule={toggleRule}
                forceOpen={allExpanded || searchActive}
              />
            ))}

            <FrontierStandardBlock hidden={searchActive} />
            <GoldenRuleBanner hidden={searchActive} />
          </div>
        </div>
      </div>
    </div>
  )
}

function RulebookHero() {
  return (
    <section className="border-b border-white/10 bg-black pt-48 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
          {RULEBOOK_INTRO.eyebrow}
        </span>
        <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">{RULEBOOK_INTRO.title}</h1>
        <p className="mt-3 text-lg font-semibold text-amber-400 sm:text-xl">{RULEBOOK_INTRO.tagline}</p>
      </div>
    </section>
  )
}

Rulebook.Hero = RulebookHero

export default Rulebook
