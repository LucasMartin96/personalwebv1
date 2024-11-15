'use client'
import { useEffect, useRef } from 'react'
import { FadeInProps } from '@/types/components'

export default function FadeIn({ children, delay = 0, direction = 'down' }: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (element) {
      element.style.opacity = '0'
      element.style.transform = direction === 'down' ? 'translateY(-10px)' 
        : direction === 'up' ? 'translateY(10px)'
        : direction === 'left' ? 'translateX(10px)'
        : 'translateX(-10px)'
      
      setTimeout(() => {
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
        element.style.opacity = '1'
        element.style.transform = 'translate(0)'
      }, delay)
    }
  }, [delay, direction])

  return (
    <div ref={elementRef} className="will-change-transform">
      {children}
    </div>
  )
} 