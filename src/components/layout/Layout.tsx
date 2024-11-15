import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <main className="px-6 lg:px-24 mx-auto max-w-7xl">
        {children}
      </main>
      <Footer />
    </div>
  )
} 