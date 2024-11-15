import { GithubIcon, ExternalLinkIcon, MateIcon, AlgoIcon } from './icons'

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string | { frontend: string; backend: string };
  external?: string;
  highlights: string[];
  icon?: "mate" | "algo";
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  external,
  highlights = [],
  icon
}: ProjectCardProps) {
  const githubLinks = typeof github === 'string' 
    ? [{ url: github, label: 'GitHub' }]
    : github 
      ? [
          { url: github.frontend, label: 'Frontend' },
          { url: github.backend, label: 'Backend' }
        ] 
      : [];

  return (
    <div className="w-full bg-light-navy rounded-lg p-8 hover:translate-y-[-5px] transition-all duration-300">
      <div className="flex flex-col h-full">
        {/* Header */}
        <header className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            {/* Icon */}
            {icon === 'mate' ? (
              <MateIcon className="text-4xl" />
            ) : (
              <AlgoIcon className="text-green w-12 h-12" />
            )}
            <h3 className="text-2xl font-semibold text-lightest-slate">
              <a href={external} target="_blank" rel="noopener noreferrer"
                 className="hover:text-green transition-colors">
                {title}
              </a>
            </h3>
          </div>
          <div className="flex gap-4">
            {githubLinks.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-slate hover:text-green"
              >
                <span className="sr-only">{link.label}</span>
                <GithubIcon className="w-5 h-5" />
              </a>
            ))}
            {external && (
              <a
                href={external}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-slate hover:text-green"
              >
                <span className="sr-only">External Link</span>
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </header>

        {/* Description */}
        <p className="text-light-slate mb-4">{description}</p>

        {/* Highlights */}
        <ul className="mb-4 space-y-2">
          {highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-light-slate">
              <span className="text-green mt-1">▹</span>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <footer className="mt-auto pt-4">
          <ul className="flex flex-wrap gap-3 font-mono text-sm">
            {tech.map((item, i) => (
              <li key={i} className="text-slate">{item}</li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  )
} 