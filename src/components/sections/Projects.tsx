import { siteConfig } from '@/config'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import Animate from '../ui/Animate'

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-3xl mx-auto">
      <Animate animation="fadeUp" delay={300}>
        <SectionHeading number="03." title="Some Things I've Built" />
      </Animate>
      
      <div className="grid grid-cols-1 gap-6">
        {siteConfig.projects.map((project, i) => (
          <Animate key={project.title} animation="fadeUp" delay={500 + (i * 200)}>
            <ProjectCard 
              {...project} 
              icon={project.icon as "mate" | "algo" | undefined} 
            />
          </Animate>
        ))}
      </div>
    </section>
  )
} 