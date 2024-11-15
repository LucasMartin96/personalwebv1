import { siteConfig } from '@/config'

export default function Footer() {
  return (
    <footer className="py-6 text-center text-light-slate">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          {siteConfig.socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green transition-colors duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="text-sm font-mono">
          <a
            href="https://github.com/LucasMartin96"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green transition-colors duration-300"
          >
            Built by Lucas Martin
          </a>
        </p>
      </div>
    </footer>
  )
} 