export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* System Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="font-mono text-cyan-400 font-bold text-xl tracking-wider">FE</div>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="font-mono text-slate-400">System Online</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-slate-400">Accepting Clients</span>
            </div>
          </div>
          <nav className="flex items-center gap-8">
            <a href="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Home</a>
            <a href="/faq" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">FAQ</a>
            <a href="/#contact" className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded text-sm font-semibold transition-colors">
              INITIATE CONTACT
            </a>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border-b border-slate-800 pt-24 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// Company Background</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">About First Epic</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Built by a founder who learned the hard way, for founders ready to do it the right way.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        {/* Davis's Story */}
        <section className="mb-24">
          <div className="mb-12">
            <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// Founder Profile</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Davis's Story</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </div>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              I've been building tech companies for over 20 years. Started my first company in college (UC Santa Barbara, Computer Engineering). Since then: <strong className="text-cyan-400">SaaS platforms, Web3/crypto ventures, consumer apps, mobile gaming, marketplace platforms</strong>, and more.
            </p>
            <p>
              Along the way, I contracted with <strong className="text-cyan-400">hundreds of freelancers</strong>. Some were great. Most weren't. I learned <strong className="text-cyan-400">hundreds of thousands of dollars</strong> worth of lessons about what doesn't work:
            </p>
            <div className="bg-slate-900/50 border-l-4 border-red-500 p-8 rounded-r-lg">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 flex-shrink-0 font-bold text-xl font-mono">-</span>
                  <span>Contractors juggling five other clients - you're never their priority</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 flex-shrink-0 font-bold text-xl font-mono">-</span>
                  <span>Constant churn - every project starts from zero, tribal knowledge lost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 flex-shrink-0 font-bold text-xl font-mono">-</span>
                  <span>Communication breakdowns - timezone chaos, language barriers, disappearing acts, endless follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 flex-shrink-0 font-bold text-xl font-mono">-</span>
                  <span>Quality lottery - great profile, mediocre work</span>
                </li>
              </ul>
            </div>
            
            <p>
              I got tired of starting every project from scratch. So I built First Epic to solve my own problem: full-time embedded talent from emerging markets with actual professional oversight. Physical workspace. HR. IT. Career development and training.
            </p>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-500 p-8 rounded-r-lg">
              <p className="text-lg text-white font-semibold mb-3">Not a marketplace. A dedicated team with real infrastructure.</p>
              <p className="text-slate-300 leading-relaxed">
                Real workspace with real operational support. Not random contractors working from coffee shops.
              </p>
            </div>
            
            <p>
              Then my colleagues wanted it. Now I've built this into a company.
            </p>
          </div>
        </section>

        {/* Why First Epic Exists */}
        <section className="mb-24">
          <div className="mb-12">
            <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// Mission Statement</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Why First Epic Exists</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </div>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              There are hundreds of outsourcing companies. Most of them position the same way: "Top 1-3% talent," "vetted developers," "cost savings."
            </p>
            <p>
              <strong className="text-white">That's noise. Everyone says that.</strong>
            </p>
            <p className="mb-8">
              What makes First Epic different is <strong className="text-cyan-400">physical infrastructure with professional oversight</strong>. We're not a marketplace connecting you to random contractors. We run an actual workspace with HR, IT, career development, and on-site operational management.
            </p>
            
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-10">
              <p className="text-2xl font-semibold mb-4 text-white">Your dedicated remote team office.</p>
              <p className="text-slate-300 leading-relaxed">
                You manage the work (like any remote employee). We handle everything else.
              </p>
            </div>
          </div>
        </section>

        {/* The Mission */}
        <section className="mb-20">
          <div className="mb-12">
            <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// Primary Objective</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">The Mission</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </div>

          <div className="text-lg text-slate-300 leading-relaxed space-y-6">
            <p>
              Help tech founders graduate from Upwork. Stop churning through freelancers. Build your first embedded remote team without the headaches of going direct.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-cyan-500/30 rounded-2xl p-12 text-center">
          <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// Contact Protocol</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Want to talk?</h3>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book 30 minutes with me. Founder-to-founder.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-10 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/20 font-mono tracking-wide"
          >
            INITIATE CONTACT
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg inline-flex items-center gap-2 transition-colors font-mono">
            <span>←</span> RETURN TO HOME
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <p className="font-mono font-bold text-2xl text-cyan-400 mb-2">FIRST EPIC</p>
              <p className="text-sm text-slate-500 max-w-md">Full-time embedded talent with professional oversight.</p>
            </div>
            <div className="flex gap-8">
              <a href="/" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">Home</a>
              <a href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">About</a>
              <a href="/faq" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">FAQ</a>
              <a href="/#contact" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">Contact</a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-600 text-sm font-mono">© 2026 First Epic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
