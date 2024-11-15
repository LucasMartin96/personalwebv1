'use client'
import { useEffect, useRef } from 'react'

interface AnimateProps {
  children: React.ReactNode
  animation: 'fadeIn' | 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight'
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

const getInitialStyles = (animation: AnimateProps['animation']) => {
  const baseStyles = {
    opacity: '0',
    transform: '',
  }

  switch (animation) {
    case 'fadeUp':
      baseStyles.transform = 'translateY(20px)'
      break
    case 'fadeDown':
      baseStyles.transform = 'translateY(-20px)'
      break
    case 'fadeLeft':
      baseStyles.transform = 'translateX(20px)'
      break
    case 'fadeRight':
      baseStyles.transform = 'translateX(-20px)'
      break
    case 'fadeIn':
    default:
      baseStyles.transform = 'scale(0.95)'
  }

  return baseStyles
}

export default function Animate({ 
  children, 
  animation = 'fadeIn', 
  delay = 0, 
  duration = 500,
  className = '',
  once = true
}: AnimateProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Set initial styles
    const initialStyles = getInitialStyles(animation)
    Object.assign(element.style, initialStyles)

    // Optional: Add intersection observer for "on scroll" animations
    if (!once) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`
              element.style.opacity = '1'
              element.style.transform = 'translate(0) scale(1)'
            }, delay)
          } else {
            Object.assign(element.style, initialStyles)
          }
        },
        { threshold: 0.1 }
      )

      observer.observe(element)
      return () => observer.disconnect()
    }

    // For single animation
    setTimeout(() => {
      element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`
      element.style.opacity = '1'
      element.style.transform = 'translate(0) scale(1)'
    }, delay)
  }, [animation, delay, duration, once])

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
} 