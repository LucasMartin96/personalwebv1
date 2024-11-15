import { IconType } from 'react-icons'

export interface Personal {
  name: string
  role: string
  email: string
  location: string
  bio: string
  resumeUrl: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string | {
    frontend: string
    backend: string
  }
  external?: string
  highlights: string[]
  icon?: 'mate' | 'algo'
}

export interface Job {
  title: string
  company: string
  url: string
  period: string
  description: string[]
}

export interface Skill {
  name: string
  icon: IconType
}

export interface Language {
  name: string
  flag: string
  level: string
  certification: string
  isNative: boolean
}

export interface SocialLink {
  name: string
  url: string
  icon: IconType
}

export interface NavLink {
  name: string
  url: string
}

export interface Contact {
  title: string
  email: string
  message: string
} 