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
            Built by a founder who learned the hard way, for founders ready to do it the right way.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        {/* Davis's Story */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-tight">Davis&apos;s Story</h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              I&apos;ve been building tech companies for over 20 years. Started my first company in college (UC Santa Barbara, Computer Engineering). Since then: medical diagnostics, life science instruments, veterinary tech, mobile gaming, marketplace apps, and more.
            </p>
            <p>
              Along the way, I contracted with <strong className="text-white">hundreds of freelancers</strong>. Some were great. Most weren&apos;t. I learned <strong className="text-white">hundreds of thousands of dollars</strong> worth of lessons about what doesn&apos;t work:
            </p>
            
            <div className="bg-red-500/10 border-l-4 border-red-500 p-8 rounded-r-lg my-8">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 font-bold">✗</span>
                  <span>Contractors juggling five other clients—you&apos;re never their priority</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 font-bold">✗</span>
                  <span>Constant churn—every project starts from zero, tribal knowledge lost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 font-bold">✗</span>
                  <span>Communication breakdowns—timezone chaos, disappearing acts, endless follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 font-bold">✗</span>
                  <span>Quality lottery—great profile, mediocre work</span>
                </li>
              </ul>
            </div>
            
            <p>
              I got tired of starting every project from scratch. So I built First Epic to solve my own problem: full-time embedded talent with actual adult supervision. Physical workspace. HR. IT. Performance management.
            </p>
            
            <div className="bg-blue-500/10 border-l-4 border-blue-500 p-8 rounded-r-lg my-8">
              <p className="text-white font-semibold mb-3">Not a marketplace. A dedicated team with real infrastructure.</p>
              <p className="text-gray-400">
                Real workspace with real oversight. Not random contractors working from coffee shops.
              </p>
            </div>
            
            <p>Then my colleagues wanted it. Now I&apos;m building this into a company.</p>
          </div>
        </section>

        {/* Why First Epic Exists */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-tight">Why First Epic Exists</h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              There are hundreds of outsourcing companies. Most of them position the same way: &quot;Top 1-3% talent,&quot; &quot;vetted developers,&quot; &quot;cost savings.&quot;
            </p>
            <p className="text-white font-semibold">
              That&apos;s noise. Everyone says that.
            </p>
            <p>
              What makes First Epic different is <strong className="text-blue-400">physical infrastructure with professional oversight</strong>. We&apos;re not a marketplace connecting you to random contractors. We run an actual workspace with HR, IT, performance management, and daily supervision.
            </p>
            
            <div className="bg-gradient-to-r from-slate-800 to-blue-900/50 p-10 rounded-xl my-8 border border-white/10">
              <p className="text-2xl font-semibold text-white mb-4">Your dedicated remote team office.</p>
              <p className="text-gray-300">
                You manage the work (like any remote employee). We handle everything else.
              </p>
            </div>
          </div>
        </section>

        {/* The Mission */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-tight">The Mission</h2>
          <div className="text-lg text-gray-400 leading-relaxed">
            <p>
              Help tech founders graduate from Upwork. Stop churning through freelancers. Build your first embedded remote team without the headaches of going direct.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Want to talk?</h3>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book 30 minutes with me. Founder-to-founder.
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
            <span className="text-gray-500 text-sm">Full-time embedded talent with adult supervision.</span>
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
