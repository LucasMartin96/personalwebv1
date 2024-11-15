'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config'
import SectionHeading from '@/components/ui/SectionHeading'
import JobPanel from '@/components/experience/JobPanel'
import Animate from '../ui/Animate'

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const maxDescriptionLength = Math.max(...siteConfig.jobs.map(job => job.description.length))
  const minHeight = maxDescriptionLength * 100

  return (
    <section id="experience" className="py-20 max-w-3xl mx-auto">
      <Animate animation="fadeUp" delay={300}>
        <SectionHeading number="02." title="Where I've Worked" />
      </Animate>
      
      <div className="mt-10 md:flex gap-4">
        {/* Tab List */}
        <Animate animation="fadeUp" delay={500}>
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
        </Animate>

        {/* Tab Panels */}
        <div className="flex-1" style={{ minHeight }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <JobPanel {...siteConfig.jobs[activeTab]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 