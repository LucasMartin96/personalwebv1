import { siteConfig } from '@/config'
import SectionHeading from '../ui/SectionHeading'
import FadeUp from '../ui/FadeUp'
import LanguageBadge from '../ui/LanguageBadge'

export default function Languages() {
  return (
    <section id="languages" className="py-20 max-w-2xl mx-auto">
      <FadeUp delay={300}>
        <SectionHeading number="05." title="Languages" />
      </FadeUp>
      
      <div className="mt-8 flex flex-wrap gap-4">
        {siteConfig.languages.map((language, i) => (
          <FadeUp key={language.name} delay={500 + (i * 100)}>
            <LanguageBadge language={language} />
          </FadeUp>
        ))}
      </div>
    </section>
  )
} 