import { siteConfig } from '@/config'
import SectionHeading from '../ui/SectionHeading'
import Animate from '../ui/Animate'

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-2xl mx-auto text-center">
      <Animate animation="fadeUp" delay={300}>
        <SectionHeading number="04." title="What's Next?" />
      </Animate>

      <Animate animation="fadeUp" delay={500}>
        <h2 className="text-5xl font-semibold text-lightest-slate mb-8">
          {siteConfig.contact.title}
        </h2>
      </Animate>

      <Animate animation="fadeUp" delay={700}>
        <p className="text-light-slate mb-12">
          {siteConfig.contact.message}
        </p>
      </Animate>

      <Animate animation="fadeUp" delay={900}>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="inline-block border-2 border-green text-green px-8 py-4 rounded hover:bg-green/10 transition-colors duration-300 font-mono text-sm"
        >
          Say Hello
        </a>
      </Animate>
    </section>
  )
} 