import { Project, Job, Language, Skill } from './config'

export interface SectionHeadingProps {
  number: string
  title: string
}

export type ProjectCardProps = Project

export type JobPanelProps = Job

export interface SkillBadgeProps {
  name: string
  icon: Skill['icon']
}

export interface LanguageBadgeProps {
  language: Language
} 