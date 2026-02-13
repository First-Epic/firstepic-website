export default function About() {
  return (
    <main className="min-h-screen bg-[#050505] text-gray-200">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 p-4 md:p-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold font-mono text-sm rounded-sm group-hover:scale-105 transition shadow-[0_0_15px_rgba(255,255,255,0.3)]">FE</div>
          <div className="hidden md:block">
            <div className="font-bold tracking-tight text-sm leading-none text-white">FIRST EPIC</div>
            <div className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mt-1">GLOBAL STUDIO</div>
          </div>
        </a>
        <nav className="flex items-center gap-6">
          <a href="/about" className="text-white font-medium text-sm">About</a>
          <a href="/faq" className="text-gray-400 hover:text-white transition text-sm">FAQ</a>
          <a href="/#contact" className="bg-white/10 border border-white/10 px-5 py-2 rounded-sm hover:bg-white hover:text-black transition text-sm font-mono">CONTACT</a>
        </nav>
      </header>

      {/* Hero */}
      <div className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="font-mono text-xs text-blue-500 mb-4 tracking-widest uppercase">/// About</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">About First Epic</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            Talent infrastructure for tech founders and studio heads who want to build great remote teams - without the overhead.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        {/* What We Do */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-tight">What We Do</h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              First Epic provides <strong className="text-white">full-time, embedded team members</strong> - developers, designers, PMs - who work exclusively for you, from our professional studio.
            </p>
            <p>
              We handle recruiting, hiring, payroll, HR, workspace, IT, and replacements. You manage the day-to-day work, just like any remote team member.
            </p>

            <div className="bg-gradient-to-r from-slate-800 to-blue-900/50 p-10 rounded-xl my-8 border border-white/10">
              <p className="text-2xl font-semibold text-white mb-4">Your dedicated remote team office.</p>
              <p className="text-gray-300">
                Not a marketplace. Not an agency. Full-time people, real infrastructure.
              </p>
            </div>

            <p>
              Our team members train on modern AI tools - Cursor, Copilot, Claude, and more - because AI multiplies the output of people with deep product context. A small, committed team with the right tools outperforms a large team with shallow knowledge every time.
            </p>
          </div>
        </section>

        {/* Davis's Story */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-tight">Davis&apos;s Story</h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              I&apos;ve been building tech companies for over 20 years. Started my first company in college (UC Santa Barbara, Computer Engineering). Since then: SaaS, Web3, consumer apps, mobile gaming, and more.
            </p>
            <p>
              Along the way, I hired <strong className="text-white">hundreds of freelancers</strong> across every platform. Some were great. Most relationships didn&apos;t last. I spent <strong className="text-white">over $100K</strong> learning what doesn&apos;t work:
            </p>
            
            <div className="bg-red-500/10 border-l-4 border-red-500 p-8 rounded-r-lg my-8">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 font-bold">✗</span>
                  <span>Contractors splitting attention across five clients — you&apos;re never the priority</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 font-bold">✗</span>
                  <span>Constant churn - every few months, new person, new onboarding, context lost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 font-bold">✗</span>
                  <span>Management overhead - hours per week supervising, re-explaining, reviewing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 font-bold">✗</span>
                  <span>No ownership - work treated as a transaction, not a mission</span>
                </li>
              </ul>
            </div>
            
            <p>
              The problem was never the talent - it was the model. Freelance platforms incentivize short-term behavior. I needed people who went deep on one product, with infrastructure supporting them.
            </p>
            
            <div className="bg-blue-500/10 border-l-4 border-blue-500 p-8 rounded-r-lg my-8">
              <p className="text-white font-semibold mb-3">So I built it.</p>
              <p className="text-gray-400">
                A physical studio with HR, IT, and professional oversight. Dedicated team members who work full-time for one client. The infrastructure I wish existed when I started.
              </p>
            </div>
            
            <p>Then my colleagues wanted it. Now it&apos;s a company.</p>
          </div>
        </section>

        {/* Why First Epic Exists */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-tight">Why First Epic Is Different</h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              There are hundreds of outsourcing companies. Most position the same way: &quot;Top 1-3% talent,&quot; &quot;vetted developers,&quot; &quot;cost savings.&quot;
            </p>
            <p className="text-white font-semibold">
              That&apos;s noise. Everyone says that.
            </p>
            <p>
              What makes First Epic different is <strong className="text-blue-400">we own the infrastructure</strong>. We&apos;re not a marketplace connecting you to contractors. We run the studio, employ the people, provide the tools, and handle everything that isn&apos;t your day-to-day work management.
            </p>
            <p>
              The result: team members who stick around, build deep context on your product, and perform like in-house hires - at a fraction of the cost of local hiring.
            </p>
          </div>
        </section>

        {/* The Mission */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-tight">The Mission</h2>
          <div className="text-lg text-gray-400 leading-relaxed">
            <p>
              Help tech founders and studio heads build world-class remote teams with real infrastructure behind them. Small teams, deep context, AI-enabled - the future of how great companies get built.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Want to talk?</h3>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book 30 minutes with Davis. Founder-to-founder.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-white text-black font-bold px-10 py-4 rounded-sm text-lg transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a href="/" className="text-blue-400 hover:text-blue-300 font-semibold text-lg inline-flex items-center gap-2 transition-colors">
            <span>←</span> Back to Home
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold font-mono text-xs rounded-sm">FE</div>
            <span className="text-gray-500 text-sm">Full-time embedded talent with professional infrastructure.</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="/about" className="text-white font-medium">About</a>
            <a href="/faq" className="text-gray-400 hover:text-white transition">FAQ</a>
            <a href="/#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
          <div className="text-gray-600 text-xs font-mono">© 2026 First Epic</div>
        </div>
      </footer>
    </main>
  )
}