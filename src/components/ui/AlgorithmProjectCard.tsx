import { GithubIcon, ExternalLinkIcon } from './icons'

interface AlgorithmProjectProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  external: string;
  highlights: string[];
}

export default function AlgorithmProjectCard({
  title,
  description,
  tech,
  github,
  external,
  highlights
}: AlgorithmProjectProps) {
  return (
    <div className="col-span-full lg:col-span-2 bg-light-navy rounded-lg p-6 hover:translate-y-[-5px] transition-all duration-300">
      <div className="flex flex-col h-full">
        {/* Header */}
        <header className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="2" />
              <path d="M8 8h8v8H8V8z" stroke="currentColor" strokeWidth="2" />
              <path d="M12 4v16" stroke="currentColor" strokeWidth="2" />
              <path d="M4 12h16" stroke="currentColor" strokeWidth="2" />
            </svg>
            <h3 className="text-xl font-semibold text-lightest-slate">{title}</h3>
          </div>
          <div className="flex gap-3">
            <a href={github} target="_blank" rel="noopener noreferrer" 
               className="text-light-slate hover:text-green transition-colors">
              <GithubIcon />
            </a>
            <a href={external} target="_blank" rel="noopener noreferrer"
               className="text-light-slate hover:text-green transition-colors">
              <ExternalLinkIcon />
            </a>
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
  );
} 