import { siteConfig } from '@/config'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import FadeUp from '../ui/FadeUp'

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-3xl mx-auto">
      <FadeUp delay={300}>
        <SectionHeading number="03." title="Some Things I've Built" />
      </FadeUp>
      
      <div className="grid grid-cols-1 gap-6">
        {siteConfig.projects.map((project, i) => (
          <FadeUp key={project.title} delay={500 + (i * 200)}>
            <ProjectCard 
              {...project} 
              icon={project.icon as "mate" | "algo" | undefined} 
            />
          </FadeUp>
        ))}
      </div>
    </section>
  )
} 