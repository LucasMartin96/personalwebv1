import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="pt-24">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
