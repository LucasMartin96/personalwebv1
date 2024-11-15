import { siteConfig } from '@/config'
import SectionHeading from '@/components/ui/SectionHeading'
import SkillBadge from '../ui/SkillBadge'
import Animate from '../ui/Animate'

export default function About() {
  const paragraphs = siteConfig.bio.split('\n').filter(p => p.trim())

  return (
    <section id="about" className="py-20 max-w-3xl mx-auto">
      <Animate animation="fadeUp" delay={300}>
        <SectionHeading number="01." title="About Me" />
      </Animate>

      <div className="space-y-8 text-light-slate">
        <Animate animation="fadeUp" delay={500}>
          <div className="space-y-4">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph.trim()}</p>
            ))}
          </div>
        </Animate>

        <Animate animation="fadeUp" delay={700}>
          <div className="space-y-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-lightest-slate font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green">▹</span> Main Technologies
                </h3>
                <div className="flex flex-wrap gap-3 ml-6">
                  {siteConfig.mainSkills.map((skill) => (
                    <SkillBadge 
                      key={skill.name} 
                      name={skill.name} 
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lightest-slate font-semibold mb-4 flex items-center gap-2">
                  <span className="text-slate">▹</span> Other Technologies
                </h3>
                <div className="flex flex-wrap gap-3 ml-6">
                  {siteConfig.secondarySkills.map((skill) => (
                    <SkillBadge 
                      key={skill.name} 
                      name={skill.name} 
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  )
} 