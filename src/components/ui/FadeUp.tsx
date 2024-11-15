'use client'
import { useEffect, useRef } from 'react'

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
}

export default function FadeUp({ children, delay = 0 }: FadeUpProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (element) {
      element.style.opacity = '0'
      element.style.transform = 'translateY(20px)'
      
      setTimeout(() => {
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, delay)
    }
  }, [delay])

  return (
    <div ref={elementRef} className="will-change-transform">
      {children}
    </div>
  )
} 