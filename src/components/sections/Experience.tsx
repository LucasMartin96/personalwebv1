'use client'
import { useState } from 'react'
import FadeUp from '../ui/FadeUp'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  // Find the job with the most description items
  const maxDescriptionLength = Math.max(...siteConfig.jobs.map(job => job.description.length))
  // Calculate minimum height (roughly 100px per description item)
  const minHeight = maxDescriptionLength * 100

  return (
    <section id="experience" className="py-20 max-w-3xl mx-auto">
      <FadeUp delay={300}>
        <SectionHeading number="02." title="Where I've Worked" />
      </FadeUp>
      
      <div className="mt-10 md:flex gap-4">
        {/* Tab List */}
        <FadeUp delay={500}>
          <div className="relative flex md:flex-col overflow-x-auto mb-8 md:mb-0 md:w-32">
            {siteConfig.jobs.map((job, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3 font-mono text-sm text-left whitespace-nowrap hover:bg-light-navy hover:text-green transition-all
                  ${activeTab === i ? 'text-green' : 'text-slate'}`}
              >
                <div className="w-fit">
                  {job.company}
                </div>
              </button>
            ))}
            <motion.div 
              className="absolute left-0 h-0.5 md:w-0.5 md:h-[var(--tab-height)] bg-green md:top-0"
              style={{ 
                '--tab-height': '42px',
              } as React.CSSProperties}
              animate={{
                y: `calc(${activeTab} * var(--tab-height))`,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 0.5
              }}
            />
          </div>
        </FadeUp>

        {/* Tab Panels */}
        <FadeUp delay={700}>
          <div className="relative" style={{ minHeight: `${minHeight}px` }}>
            {siteConfig.jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeTab === i ? 1 : 0,
                  x: activeTab === i ? 0 : 20
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 0.5,
                  duration: 0.5 
                }}
                className={`absolute top-0 left-0 w-full
                  ${activeTab === i ? 'relative' : 'pointer-events-none'}`}
              >
                <div className="space-y-4">
                  <h3 className="text-xl text-lightest-slate">
                    {siteConfig.jobs[i].title}{" "}
                    <span className="text-green">
                      @{" "}
                      <a 
                        href={siteConfig.jobs[i].url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline inline-block"
                      >
                        {siteConfig.jobs[i].company}
                      </a>
                    </span>
                  </h3>
                  
                  <p className="font-mono text-sm text-light-slate">
                    {siteConfig.jobs[i].period}
                  </p>

                  <ul className="space-y-4">
                    {siteConfig.jobs[i].description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: i * 0.1,
                          ease: "easeOut"
                        }}
                        className="flex gap-2 text-light-slate"
                      >
                        <span className="text-green mt-1">▹</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
} 