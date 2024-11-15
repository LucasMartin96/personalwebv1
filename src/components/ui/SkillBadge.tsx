import { IconType } from 'react-icons'

interface SkillBadgeProps {
  name: string
  icon: IconType
}

export default function SkillBadge({ name, icon: Icon }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-navy text-slate font-mono text-sm
                     hover:text-green hover:translate-y-[-2px] transition-all duration-300">
      <Icon className="text-base" />
      {name}
    </span>
  )
} 