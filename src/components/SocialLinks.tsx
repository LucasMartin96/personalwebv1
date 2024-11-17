import { siteConfig } from '@/config'
import Animate from './ui/Animate'

export default function SocialLinks() {
  return (
    <div className="fixed bottom-0 left-6 right-auto hidden md:flex flex-col items-center space-y-6">
      {siteConfig.socialLinks.map(({ url, icon: Icon }, i) => (
        <Animate key={i} animation="fadeRight" delay={1300 + (i * 100)}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-300"
          >
            <Icon className="w-5 h-5" />
          </a>
        </Animate>
      ))}
      <Animate animation="fadeRight" delay={1800}>
        <div className="w-px h-24 bg-light-slate"></div>
      </Animate>
    </div>
  )
} 