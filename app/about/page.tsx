export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">About First Epic</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
            Built by a founder who learned the hard way, for founders ready to do it the right way.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        {/* Davis's Story */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900 tracking-tight">Davis&apos;s Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              I&apos;ve been building tech companies for over 20 years. Started my first company in college (UC Santa Barbara, Computer Engineering). Since then: medical diagnostics, life science instruments, veterinary tech, mobile gaming, marketplace apps, and more.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Along the way, I contracted with <strong className="text-slate-900">hundreds of freelancers</strong>. Some were great. Most weren&apos;t. I learned <strong className="text-slate-900">hundreds of thousands of dollars</strong> worth of lessons about what doesn&apos;t work:
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-8 rounded-r-lg mb-8 shadow-sm">
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0 font-bold text-xl">✗</span>
                  <span className="text-lg">Contractors juggling five other clients—you&apos;re never their priority</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0 font-bold text-xl">✗</span>
                  <span className="text-lg">Constant churn—every project starts from zero, tribal knowledge lost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0 font-bold text-xl">✗</span>
                  <span className="text-lg">Communication breakdowns—timezone chaos, disappearing acts, endless follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0 font-bold text-xl">✗</span>
                  <span className="text-lg">Quality lottery—great profile, mediocre work</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              I got tired of starting every project from scratch. So I built First Epic to solve my own problem: full-time embedded talent from emerging markets with actual adult supervision. Physical workspace. HR. IT. Performance management.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-8 shadow-sm">
              <p className="text-lg text-slate-900 font-semibold mb-3">Not a marketplace. A dedicated team with real infrastructure.</p>
              <p className="text-slate-700 text-lg leading-relaxed">
                Real workspace with real oversight. Not random contractors working from coffee shops.
              </p>
            </div>
            
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Then my colleagues wanted it. Now I&apos;m building this into a company.
            </p>
          </div>
        </section>

        {/* Why First Epic Exists */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900 tracking-tight">Why First Epic Exists</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              There are hundreds of outsourcing companies. Most of them position the same way: &quot;Top 1-3% talent,&quot; &quot;vetted developers,&quot; &quot;cost savings.&quot;
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              <strong className="text-slate-900">That&apos;s noise. Everyone says that.</strong>
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              What makes First Epic different is <strong className="text-blue-600">physical infrastructure with professional oversight</strong>. We&apos;re not a marketplace connecting you to random contractors. We run an actual workspace with HR, IT, performance management, and daily supervision.
            </p>
            
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-10 rounded-2xl mb-8 shadow-lg">
              <p className="text-2xl font-semibold mb-4">Your dedicated remote team office.</p>
              <p className="text-slate-200 text-lg leading-relaxed">
                You manage the work (like any remote employee). We handle everything else.
              </p>
            </div>
          </div>
        </section>

        {/* The Mission */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900 tracking-tight">The Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Help tech founders graduate from Upwork. Stop churning through freelancers. Build your first embedded remote team without the headaches of going direct.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-12 text-center shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">Want to talk?</h3>
          <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book 30 minutes with me. Founder-to-founder.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
          >
            Get in Touch
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
