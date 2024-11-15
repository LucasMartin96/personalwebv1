import { siteConfig } from '@/config'
import SectionHeading from '../ui/SectionHeading'
import Animate from '../ui/Animate'
import LanguageBadge from '../ui/LanguageBadge'

export default function Languages() {
  return (
    <section className="py-20 max-w-3xl mx-auto">
      <Animate animation="fadeUp" delay={300}>
        <SectionHeading number="05." title="Languages" />
      </Animate>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {siteConfig.languages.map((language, i) => (
          <Animate key={i} animation="fadeUp" delay={500 + (i * 200)}>
            <LanguageBadge language={language} />
          </Animate>
        ))}
      </div>
    </section>
  )
} 