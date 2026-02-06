export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">About First Epic</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl">
            Built by a founder who learned the hard way, for founders ready to do it the right way.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        {/* Davis's Story */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 tracking-tight">Davis&apos;s Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              I&apos;ve been building tech companies for over 20 years. Started my first company in college (UC Santa Barbara, Computer Engineering). Since then: medical diagnostics, life science instruments, veterinary tech, mobile gaming, marketplace apps, and more.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Along the way, I contracted with <strong className="text-slate-900">100+ freelancers</strong>. Some were great. Most weren&apos;t. I learned <strong className="text-slate-900">$50,000</strong> worth of lessons about what doesn&apos;t work:
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-6">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0">✗</span>
                  <span>Contractors juggling five other clients—you&apos;re never their priority</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0">✗</span>
                  <span>Constant churn—every project starts from zero, tribal knowledge lost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0">✗</span>
                  <span>Communication breakdowns—timezone chaos, disappearing acts, endless follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0">✗</span>
                  <span>Quality lottery—great profile, mediocre work</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              I got tired of starting every project from scratch. So I built First Epic to solve my own problem: full-time embedded talent from emerging markets with actual adult supervision. Physical workspace. HR. IT. Performance management.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <p className="text-lg text-slate-900 font-semibold mb-2">Not a marketplace. Your Pakistan office.</p>
              <p className="text-slate-700">
                Real workspace with real oversight. Not random contractors working from coffee shops.
              </p>
            </div>
            
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Then my colleagues wanted it. Now I&apos;m building this into a company.
            </p>
          </div>
        </section>

        {/* Why First Epic Exists */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 tracking-tight">Why First Epic Exists</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              There are hundreds of outsourcing companies. Most of them position the same way: &quot;Top 1-3% talent,&quot; &quot;vetted developers,&quot; &quot;cost savings.&quot;
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              <strong className="text-slate-900">That&apos;s noise. Everyone says that.</strong>
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              What makes First Epic different is <strong className="text-blue-600">physical studio supervision</strong>. We&apos;re not a marketplace connecting you to random contractors. We run an actual workspace in Pakistan with HR, IT, performance management, and daily oversight.
            </p>
            
            <div className="bg-slate-900 text-white p-8 rounded-xl mb-6">
              <p className="text-xl font-semibold mb-3">Think of us as your Pakistan office.</p>
              <p className="text-slate-300 text-lg">
                You manage the work (like any remote employee). We handle everything else.
              </p>
            </div>
          </div>
        </section>

        {/* The Mission */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 tracking-tight">The Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Help tech founders graduate from Upwork. Stop churning through freelancers. Build your first embedded remote team without the headaches of going direct.
            </p>
            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <p className="text-sm uppercase tracking-wide mb-2 text-blue-200">Current Goal</p>
              <p className="text-3xl md:text-4xl font-bold">100 placements by end of 2026</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-10 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Want to talk?</h3>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            Book 30 minutes with me. Founder-to-founder.
          </p>
          <a 
            href="mailto:davis@firstepic.studio" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
          >
            Email Davis
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg inline-flex items-center gap-2 transition-colors">
            <span>←</span> Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
