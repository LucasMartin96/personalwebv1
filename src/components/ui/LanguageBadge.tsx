import { LanguageBadgeProps } from '@/types/components'

export default function LanguageBadge({ language }: LanguageBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-navy text-slate font-mono text-sm
                     hover:text-green hover:translate-y-[-2px] transition-all duration-300">
      <span>{language.flag}</span>
      {language.name}
      <span className={`px-1.5 py-0.5 rounded-full text-xs 
        ${language.isNative 
          ? 'bg-green/20 text-green' 
          : 'bg-slate/20'}`}>
        {language.isNative ? 'Native' : language.certification}
      </span>
    </span>
  )
} 