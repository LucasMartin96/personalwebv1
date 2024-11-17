import { siteConfig } from '@/config'
import Animate from './ui/Animate'

export default function EmailLink() {
  return (
    <div className="fixed bottom-0 right-6 left-auto hidden md:flex">
      <Animate animation="fadeLeft" delay={1800}>
        <div className="flex flex-col items-center space-y-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-300 [writing-mode:vertical-rl]"
          >
            {siteConfig.email}
          </a>
          <div className="w-px h-24 bg-light-slate"></div>
        </div>
      </Animate>
    </div>
  )
} 