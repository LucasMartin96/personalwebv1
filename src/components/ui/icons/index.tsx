import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { VscSymbolMisc } from 'react-icons/vsc'

interface IconProps {
  className?: string;
}

export const GithubIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <FiGithub className={className} />
);

export const ExternalLinkIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <FiExternalLink className={className} />
);

export const MateIcon = ({ className = "text-3xl" }: IconProps) => (
  <span className={className}>🧉</span>
);

export const AlgoIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <VscSymbolMisc className={className} />
); 