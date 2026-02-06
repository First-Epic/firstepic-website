export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8 text-slate-900">About First Epic</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-4 text-slate-900">Davis&apos;s Story</h2>
          <p className="text-slate-700 mb-4">
            I&apos;ve been building tech companies for over 20 years. Started my first company in college (UC Santa Barbara, Computer Engineering). Since then: medical diagnostics, life science instruments, veterinary tech, mobile gaming, marketplace apps, and more.
          </p>
          <p className="text-slate-700 mb-4">
            Along the way, I contracted with 100+ freelancers. Some were great. Most weren&apos;t. I learned $50,000 worth of lessons about what doesn&apos;t work:
          </p>
          <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
            <li>Contractors juggling five other clients—you&apos;re never their priority</li>
            <li>Constant churn—every project starts from zero, tribal knowledge lost</li>
            <li>Communication breakdowns—timezone chaos, disappearing acts, endless follow-ups</li>
            <li>Quality lottery—great profile, mediocre work</li>
          </ul>
          
          <p className="text-slate-700 mb-4">
            I got tired of starting every project from scratch. So I built First Epic to solve my own problem: full-time embedded talent from emerging markets with actual adult supervision. Physical workspace. HR. IT. Performance management.
          </p>
          
          <p className="text-slate-700 mb-4">
            Not a marketplace. Your Pakistan office.
          </p>
          
          <p className="text-slate-700 mb-4">
            Then my colleagues wanted it. Now I&apos;m building this into a company.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4 text-slate-900">Why First Epic Exists</h2>
          <p className="text-slate-700 mb-4">
            There are hundreds of outsourcing companies. Most of them position the same way: "Top 1-3% talent," "vetted developers," "cost savings."
          </p>
          <p className="text-slate-700 mb-4">
            That&apos;s noise. Everyone says that.
          </p>
          <p className="text-slate-700 mb-4">
            What makes First Epic different is <strong>physical studio supervision</strong>. We&apos;re not a marketplace connecting you to random contractors. We run an actual workspace in Pakistan with HR, IT, performance management, and daily oversight.
          </p>
          <p className="text-slate-700 mb-4">
            Think of us as your Pakistan office. You manage the work (like any remote employee). We handle everything else.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4 text-slate-900">The Mission</h2>
          <p className="text-slate-700 mb-4">
            Help tech founders graduate from Upwork. Stop churning through freelancers. Build your first embedded remote team without the headaches of going direct.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Current goal:</strong> 100 placements by end of 2026.
          </p>
        </div>

        <div className="mt-12 p-8 bg-slate-50 rounded-lg border border-slate-200">
          <h3 className="text-2xl font-bold mb-4 text-slate-900">Want to talk?</h3>
          <p className="text-slate-700 mb-6">
            Book 30 minutes with me. Founder-to-founder.
          </p>
          <a 
            href="mailto:davis@firstepic.studio" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Email Davis
          </a>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
