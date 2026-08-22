import CountdownTimer from './CountdownTimer'
import { LAUNCH_DATE } from '../data/launch'

function DevelopmentBanner() {
  return (
    <div className="flex h-9 items-center justify-center gap-2 overflow-x-auto whitespace-nowrap border-b border-amber-400/20 bg-amber-400/10 px-4 text-center text-[11px] font-semibold text-amber-300 sm:text-xs">
      <span>🚧 In development — launching in</span>
      <CountdownTimer target={LAUNCH_DATE} className="text-amber-400" />
    </div>
  )
}

export default DevelopmentBanner
