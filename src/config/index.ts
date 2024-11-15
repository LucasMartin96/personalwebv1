import { personal } from './site/personal'
import { navLinks } from './site/navigation'
import { contact } from './site/contact'

import { projects } from './content/projects'
import { jobs } from './content/jobs'

import { mainSkills, secondarySkills } from './skills/skills'
import { languages } from './skills/languages'

import { socialLinks } from './social'

export const siteConfig = {
  ...personal,
  navLinks: navLinks,
  projects,
  jobs,
  mainSkills,
  secondarySkills,
  languages,
  contact,
  socialLinks,
} as const

export type SiteConfig = typeof siteConfig

export * from './site/personal'
export * from './site/navigation'
export * from './site/contact'
export * from './content/projects'
export * from './content/jobs'
export * from './skills/skills'
export * from './skills/languages'
export * from './social'