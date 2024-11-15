import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar  from '../components/layout/Navbar'
import SocialLinks from '@/components/SocialLinks'
import EmailLink from '@/components/EmailLink'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas Martin',
  description: 'Software Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="bg-navy min-h-screen text-slate">
          <Navbar />
          <main className="px-6 lg:px-24 mx-auto max-w-7xl">
            {children}
          </main>
          <SocialLinks />
          <EmailLink />
        </div>
      </body>
    </html>
  )
}
