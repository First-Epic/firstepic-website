export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Graduate from Upwork?
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Stop churning through freelancers. Build your remote team with embedded talent that actually sticks around.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Talk to Davis
            </a>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">The Founder Story</h2>
            <div className="prose prose-lg text-slate-700">
              <p className="mb-4">
                I&apos;m Davis Brimer. Over 20 years building tech companies, I contracted 100+ freelancers and learned $50,000 worth of lessons the hard way.
              </p>
              <p className="mb-4">
                The constant churn. The communication breakdowns. The quality lottery. I got tired of starting every project from zero.
              </p>
              <p className="mb-4">
                So I built First Epic to solve my own problem — and then my colleagues wanted it too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem (Freelancer Fatigue) */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-900">The Problem: Freelancer Fatigue</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Constant Churn</h3>
              <p className="text-slate-700">Every project starts from zero. Onboarding. Context. Tribal knowledge lost.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">No Ownership Mentality</h3>
              <p className="text-slate-700">They&apos;re juggling 5 other clients. You&apos;re not their priority.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Communication Overhead</h3>
              <p className="text-slate-700">Timezone chaos. Disappearing acts. Endless follow-ups.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Quality Lottery</h3>
              <p className="text-slate-700">Great profile, mediocre work. You never know what you&apos;ll get.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The First Epic Difference */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">The First Epic Difference</h2>
          <p className="text-xl text-slate-700 mb-12 max-w-3xl">
            Think of us as <strong>your Pakistan office</strong> — not a marketplace, an actual workspace with adult supervision.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Physical Studio with Adult Supervision</h3>
              <p className="text-slate-700">HR. IT. Performance management. Internet. Workspace. Daily oversight. Not just a profile on a marketplace.</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-slate-900">AI-Enabled Team Members</h3>
              <p className="text-slate-700">Trained on Cursor, Copilot, Claude Code. Monthly fee incentivizes efficiency, not slow hourly work.</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-slate-900">No Per-Hire Fees</h3>
              <p className="text-slate-700">Recruiting and screening included. Free replacements if it&apos;s not working.</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-slate-900">24/7 Timezone Flexibility</h3>
              <p className="text-slate-700">Graveyard shift for full US overlap, or async overnight work — you choose.</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Dedicated to You</h3>
              <p className="text-slate-700">Not splitting attention across projects like Upwork contractors. Your team, full-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">We Source & Screen</h3>
              <p className="text-slate-700">No per-hire fees. Recruiting and screening included.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">You Interview & Approve</h3>
              <p className="text-slate-700">Talk to candidates. Make the final call. It&apos;s your team.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">We Hire & Onboard</h3>
              <p className="text-slate-700">We provide workspace, handle payroll, HR, local compliance.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-4">04</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">You Manage Day-to-Day</h3>
              <p className="text-slate-700">Like any other remote employee. Slack, Jira, your workflow.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-4">05</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">We Handle the Infrastructure</h3>
              <p className="text-slate-700">HR, payroll, IT, workspace, performance management.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-4">06</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Free Replacements</h3>
              <p className="text-slate-700">If it&apos;s not working, we&apos;ll find someone who will.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Who This Is For</h2>
          <div className="max-w-3xl">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-2xl">✓</span>
                <span className="text-slate-700">Startups ready to move beyond Upwork/Toptal</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-2xl">✓</span>
                <span className="text-slate-700">Tech founders scaling their first remote team</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-2xl">✓</span>
                <span className="text-slate-700">Companies with hard-to-fill creative+AI hybrid roles</span>
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-slate-700 font-semibold mb-2">NOT for:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">✗</span>
                  <span className="text-slate-600">Enterprise buyers looking for managed services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">✗</span>
                  <span className="text-slate-600">Companies wanting someone else to manage the team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Pricing Philosophy</h2>
          <div className="max-w-3xl">
            <p className="text-xl text-slate-700 mb-6">
              We provide custom quotes based on role, timezone, and experience level.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Dramatically cheaper than US hiring, with zero headaches of going direct.
            </p>
            <p className="text-lg text-slate-700">
              No cost comparisons. No margin exposure. Just honest pricing for real value.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Current Scale</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">3</div>
              <p className="text-slate-700">Active Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">10</div>
              <p className="text-slate-700">Managed Talent</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-slate-700">From Referrals</p>
            </div>
          </div>
          <p className="text-slate-600 mt-8 max-w-3xl">
            Real traction, not aspirational numbers. Every client came from trusted referrals.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Talk to Davis</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Book 30 minutes to discuss your hiring needs. Founder-to-founder.
          </p>
          <a 
            href="mailto:davis@firstepic.studio" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Email Davis
          </a>
          <p className="text-slate-400 mt-4 text-sm">
            Or connect on{' '}
            <a href="https://linkedin.com/in/davisbrimer" className="text-blue-400 hover:text-blue-300 underline">
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-semibold text-white">First Epic</p>
              <p className="text-sm">Your Pakistan office. Full-time embedded talent with adult supervision.</p>
            </div>
            <div className="flex gap-6">
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-800 text-center text-sm">
            © 2025 First Epic. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
