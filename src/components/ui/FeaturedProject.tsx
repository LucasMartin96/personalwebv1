import { GithubIcon, ExternalLinkIcon } from '@/components/ui/icons'

interface FeaturedProjectProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  highlights: string[];
  keyFeatures?: {
    backend: string[];
    frontend: string[];
  };
  performance?: string[];
  architecture?: {
    backend: string[];
    frontend: string[];
  };
}

export default function FeaturedProject({
  title,
  description,
  tech,
  github,
  external,
  highlights,
}: FeaturedProjectProps) {
  return (
    <div className="relative grid gap-4 md:grid-cols-12 items-center mb-24 opacity-0 translate-y-4 animate-fadeIn">
      {/* Project Content */}
      <div className="md:col-span-7 md:col-start-1 relative z-10 bg-light-navy/90 p-6 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
        <p className="font-mono text-green mb-2">Featured Project</p>
        <h3 className="text-2xl font-semibold text-lightest-slate mb-4">
          <a href={external} 
             target="_blank" 
             rel="noopener noreferrer"
             className="hover:text-green transition-colors">
            {title}
          </a>
        </h3>

        <div className="text-light-slate mb-4">{description}</div>

        <ul className="mb-4 space-y-2">
          {highlights.map((highlight, i) => (
            <li 
              key={i}
              className="flex items-start gap-2 text-light-slate"
              style={{
                animation: `fadeInRight 0.5s ease forwards ${i * 0.1}s`,
                opacity: 0
              }}
            >
              <span className="text-green mt-1">▹</span>
              {highlight}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-3 mb-6 font-mono text-sm">
          {tech.map((item, i) => (
            <li key={i} className="text-slate">{item}</li>
          ))}
        </ul>

        <div className="flex gap-4">
          {github && (
            <a href={github} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-light-slate hover:text-green transition-colors group">
              GitHub <span className="inline-block group-hover:rotate-12 transition-transform">
                <GithubIcon className="inline w-5 h-5 ml-1" />
              </span>
            </a>
          )}
          {external && (
            <a href={external} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-light-slate hover:text-green transition-colors group">
              Live Demo <span className="inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ExternalLinkIcon className="inline w-5 h-5 ml-1" />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 