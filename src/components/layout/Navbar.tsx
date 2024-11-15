'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config'
import FadeIn from '../ui/FadeIn'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScroll, setLastScroll] = useState(0)

  // Handle navbar background and scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setIsScrolled(currentScroll > 0)

      // Handle scroll direction
      if (currentScroll > lastScroll && !isMenuOpen && currentScroll > 50) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll, isMenuOpen])

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-navy/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}
      ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <nav className="px-6 lg:px-24 mx-auto max-w-7xl h-20 flex items-center justify-between">
        <FadeIn delay={100} direction="down">
          <Link 
            href="/" 
            className="text-green font-mono text-2xl hover:text-green/80 transition-colors"
          >
            Lucas Martin
          </Link>
        </FadeIn>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map(({ name, url }, i) => (
            <FadeIn key={i} delay={100 + ((i + 1) * 100)} direction="down">
              <Link
                href={url}
                className="text-light-slate hover:text-green transition-colors duration-300"
              >
                <span className="font-mono text-green text-sm">{`0${i + 1}.`}</span>
                <span className="ml-1">{name}</span>
              </Link>
            </FadeIn>
          ))}
          <FadeIn delay={600} direction="down">
            <a
              href={siteConfig.resumeUrl}
              className="border border-green text-green px-4 py-2 rounded hover:bg-green/10 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              download="Lucas_Martin_Resume.pdf"
            >
              Resume
            </a>
          </FadeIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light-slate"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Menu</span>
          {/* Hamburger Icon */}
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-green transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-green transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-green transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-light-navy/98 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {siteConfig.navLinks.map(({ name, url }, i) => (
              <Link
                key={i}
                href={url}
                onClick={() => setIsMenuOpen(false)}
                className="text-light-slate hover:text-green transition-colors duration-300 text-xl"
              >
                <span className="font-mono text-green text-sm block text-center">{`0${i + 1}.`}</span>
                <span className="ml-1">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
} 