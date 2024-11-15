import { Project, Job, Language, Skill } from './config'

export interface SectionHeadingProps {
  number: string
  title: string
}

export interface FadeProps {
  children: React.ReactNode
  delay?: number
}

export interface FadeInProps extends FadeProps {
  direction?: 'down' | 'up' | 'left' | 'right'
}

export interface ProjectCardProps extends Project {}

export interface JobPanelProps extends Job {}

export interface SkillBadgeProps {
  name: string
  icon: Skill['icon']
}

export interface LanguageBadgeProps {
  language: Language
} 