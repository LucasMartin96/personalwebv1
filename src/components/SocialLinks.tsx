import FadeIn from './ui/FadeIn'
import { siteConfig } from '@/config'

export default function SocialLinks() {
  return (
    <div className="fixed bottom-0 left-6 right-auto">
      <div className="flex flex-col items-center space-y-6">
        {siteConfig.socialLinks.map(({ url, icon: Icon }, i) => (
          <FadeIn key={i} delay={1300 + (i * 100)} direction="right">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          </FadeIn>
        ))}
        <FadeIn delay={1800} direction="right">
          <div className="w-px h-24 bg-light-slate"></div>
        </FadeIn>
      </div>
    </div>
  )
} 