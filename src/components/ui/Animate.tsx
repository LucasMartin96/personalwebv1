'use client'

interface AnimateProps {
  children: React.ReactNode
  animation: 'fadeIn' | 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight'
  delay?: number
  className?: string
}

export default function Animate({ 
  children, 
  animation = 'fadeIn', 
  delay = 0,
  className = ''
}: AnimateProps) {
  const animationClass = {
    fadeIn: 'animate-fadeIn',
    fadeUp: 'animate-fadeUp',
    fadeDown: 'animate-fadeDown',
    fadeLeft: 'animate-fadeLeft',
    fadeRight: 'animate-fadeRight',
  }[animation]

  return (
    <div 
      className={`${animationClass} ${className}`}
      style={{ 
        opacity: 0,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  )
} 