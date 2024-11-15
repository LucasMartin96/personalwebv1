import FadeIn from './ui/FadeIn'
import { siteConfig } from '@/config'

export default function EmailLink() {
  return (
    <div className="fixed bottom-0 right-6 left-auto">
      <FadeIn delay={1800} direction="left">
        <div className="flex flex-col items-center space-y-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-300 [writing-mode:vertical-rl]"
          >
            {siteConfig.email}
          </a>
          <div className="w-px h-24 bg-light-slate"></div>
        </div>
      </FadeIn>
    </div>
  )
} 