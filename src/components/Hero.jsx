import { useEffect, useState } from 'react'
import slide1 from '../assets/image-1.png'
import slide2 from '../assets/image-2.png'
import slide3 from '../assets/image-3.png'
import slide4 from '../assets/image-4.png'
import slide5 from '../assets/image-5.jpeg'
import { CFX_JOIN_URL, DISCORD_INVITE_URL, SOCIAL_LINKS } from '../data/socialLinks'
import { DiscordIcon } from './icons/SocialIcons'
import { useDiscordStats } from '../hooks/useDiscordStats'
import { useServerStats } from '../hooks/useServerStats'

const STAT_LINK_CLASS = 'inline-flex items-center gap-1.5 transition hover:text-amber-400'

function PlayersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7.5 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM9 13c-4 0-7 2-7 4.5V20h14v-2.5C16 15 13 13 9 13Zm7.5 0c-.5 0-1 .04-1.47.12A5.6 5.6 0 0 1 18 17.5V20h4v-2.5c0-2.5-2.5-4.5-5.5-4.5Z" />
    </svg>
  )
}

const SLIDES = [slide1, slide2, slide3, slide4, slide5]
const SLIDE_DURATION = 6000

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0)
  const discordStats = useDiscordStats()
  const serverStats = useServerStats()

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % SLIDES.length)
    }, SLIDE_DURATION)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {SLIDES.map((src, i) => {
        const active = i === slideIndex
        return (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 h-full w-full origin-center object-cover"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? 'scale(1.12)' : 'scale(1)',
              transition: `opacity ${SLIDE_DURATION * 0.3}ms ease-in-out, transform ${SLIDE_DURATION}ms ease-out`,
            }}
          />
        )
      })}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-0 px-6 py-16 text-center">
        <h1 className="animate-fade-in-up text-2xl font-bold text-white sm:text-4xl">
          Your story begins in the <span className="text-amber-400">State of Calhoun</span>
        </h1>

        <p
          className="mt-5 max-w-md animate-fade-in-up text-sm leading-relaxed text-slate-300 sm:text-base"
          style={{ animationDelay: '150ms' }}
        >
          An immersive 1890s Wild West roleplay experience where you build your life on the
          frontier as a lawman, outlaw, rancher, gunslinger, or businessman, with your story,
          your choices, your legacy.
        </p>

        <div
          className="mt-10 flex flex-wrap animate-fade-in-up items-center justify-center gap-4"
          style={{ animationDelay: '300ms' }}
        >
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

        {(serverStats || discordStats) && (
          <div className="mt-5 flex animate-fade-in-up items-center justify-center gap-3 text-xs text-slate-400 sm:text-sm">
            {serverStats && (
              <a
                href={CFX_JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Players in-game — click to join"
                aria-label={`${serverStats.players} of ${serverStats.maxPlayers} players in-game`}
                className={STAT_LINK_CLASS}
              >
                <PlayersIcon className="h-4 w-4 text-green-400" />
                <span className="font-semibold text-slate-200">
                  {serverStats.players}/{serverStats.maxPlayers}
                </span>
              </a>
            )}

            {serverStats && discordStats && <span className="text-slate-600">·</span>}

            {discordStats && (
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Discord members"
                aria-label={`${discordStats.members.toLocaleString()} Discord members`}
                className={STAT_LINK_CLASS}
              >
                <DiscordIcon className="h-4 w-4" />
                <span className="font-semibold text-slate-200">{discordStats.members.toLocaleString()}</span>
              </a>
            )}
          </div>
        )}
      </div>

      <a
        href="#welcome"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/70 transition hover:text-amber-400"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}

export default Hero
