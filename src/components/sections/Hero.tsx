import FadeUp from '../ui/FadeUp'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6">
      <div className="space-y-5">
        <FadeUp delay={300}>
          <p className="font-mono text-green text-md">Hi, my name is</p>
        </FadeUp>
        
        <FadeUp delay={500}>
          <h1 className="text-7xl font-semibold text-lightest-slate">
            Lucas Martin.
          </h1>
        </FadeUp>
        
        <FadeUp delay={700}>
          <h2 className="text-7xl font-semibold text-light-slate">
            I build robust backend solutions.
          </h2>
        </FadeUp>

        <FadeUp delay={900}>
          <p className="text-light-slate text-lg max-w-lg py-5">
            I&apos;m a software engineer specializing in building scalable server-side applications 
            and APIs. Currently focused on creating efficient backend architectures that power 
            exceptional digital experiences.
          </p>
        </FadeUp>

        <FadeUp delay={1100}>
          <div className="pt-5">
            <a
              href="#projects"
              className="inline-block border-2 border-green text-green px-8 py-4 rounded hover:bg-green/10 transition-colors duration-300 font-mono text-sm"
            >
              Check out my work!
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
} 