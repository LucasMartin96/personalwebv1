import { Personal, Project, Job, Skill, Language, SocialLink, NavLink, Contact } from '@/types/config'

import { personal } from './personal'
import { navLinks } from './navigation'
import { socialLinks } from './social'
import { projects } from './projects'
import { jobs } from './jobs'
import { contact } from './contact'
import { languages } from './languages'
import { secondarySkills, mainSkills } from './skills'  

export const siteConfig = {
  ...personal,
  navLinks,
  socialLinks,
  projects,
  jobs,
  contact,
  languages,
  secondarySkills,
  mainSkills
} as const

export type SiteConfig = typeof siteConfig