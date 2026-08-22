import { useEffect, useState } from 'react'

function getTimeLeft(target) {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
    done: diff <= 0,
  }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

// Live countdown to `target` (a Date), ticking every second.
function CountdownTimer({ target, className = '' }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  if (timeLeft.done) {
    return <span className={className}>we&apos;re live!</span>
  }

  return (
    <span className={`font-mono tabular-nums ${className}`}>
      {timeLeft.days}d {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
    </span>
  )
}

export default CountdownTimer
