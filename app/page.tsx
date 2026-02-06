export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <p className="text-blue-300 text-sm md:text-base font-medium mb-4 tracking-wide uppercase">
              For founders tired of the freelancer treadmill
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Ready to Graduate<br />from Upwork?
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop churning through freelancers. Build your remote team with embedded talent that actually sticks around.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-5 rounded-xl text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Talk to Davis
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">3</div>
              <div className="text-slate-300 font-medium">Active Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">10+</div>
              <div className="text-slate-300 font-medium">Managed Talent</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">20+</div>
              <div className="text-slate-300 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">The Origin Story</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">I Built This to Solve My Own Problem</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Over 20 years as a tech entrepreneur, I&apos;ve hired 100+ freelancers across every platform you can name. Upwork, Toptal, Fiverr, direct contractors — you name it, I&apos;ve tried it.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  The lessons cost me over <strong className="text-slate-900">$50,000</strong> in failed projects, missed deadlines, and talent that disappeared mid-sprint.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  First Epic is what I wish existed when I started. Not another marketplace. Not another agency. A better way to build a remote team that actually works.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="text-5xl">👨‍💻</div>
              <div>
                <div className="font-bold text-xl text-slate-900">Davis Brimer</div>
                <div className="text-slate-600 font-medium">Founder & CEO</div>
                <div className="text-sm text-slate-500 mt-1">Serial entrepreneur • 20+ years in tech • BS Computer Engineering, UC Santa Barbara</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">The Problem</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">The Freelancer Fatigue is Real</p>
            <p className="text-lg text-slate-500 mt-2">Sound familiar?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">🔄</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Constant Churn</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Every project starts from zero. New freelancer, new onboarding, new trust-building. Again and again.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">🎭</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">No Ownership</h3>
              <p className="text-lg text-slate-700 leading-relaxed">They&apos;re juggling 5 other clients. Your project is just another ticket in their queue.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Communication Chaos</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Timezone roulette, disappearing acts, and &quot;I&apos;ll get to it tomorrow&quot; that lasts a week.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">🎰</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Quality Lottery</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Great portfolio, mediocre delivery. The profile never matches the actual work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">The Solution</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-semibold">The First Epic Difference</p>
            <p className="text-lg text-slate-500 mt-2">Not a marketplace. Not an agency. Your dedicated remote team with adult supervision.</p>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">🏢</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Physical Workspace</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">Your team works from a real office with HR, IT support, and daily oversight. Not a bedroom with spotty WiFi.</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Dedicated to You</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">Full-time, embedded in your workflow. Not splitting attention across five other clients.</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">AI-Enabled</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">Every team member is trained on Cursor, Copilot, and Claude Code. Modern tools, not legacy workflows.</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">🌐</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Timezone Flexibility</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">Full US overlap with day shift, or async overnight work. Your choice.</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">💰</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">No Per-Hire Fees</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">Unlike Arc or Toptal, you don&apos;t pay thousands just to start. Recruiting is included.</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">🔄</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Free Replacements</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">If it&apos;s not working, we replace them. No questions, no fees. That&apos;s on us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Process</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600">How It Works</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="text-6xl font-bold text-blue-600/20 mb-4">01</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">We Source & Screen</h3>
              <p className="text-slate-700 leading-relaxed">Tell us what you need. We find, vet, and shortlist candidates. No per-hire fees.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="text-6xl font-bold text-blue-600/20 mb-4">02</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">You Interview & Approve</h3>
              <p className="text-slate-700 leading-relaxed">You make the final call. Interview your candidates, pick your team.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="text-6xl font-bold text-blue-600/20 mb-4">03</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">We Hire & Onboard</h3>
              <p className="text-slate-700 leading-relaxed">We handle employment, payroll, workspace, equipment — all the overhead.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="text-6xl font-bold text-blue-600/20 mb-4">04</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">You Manage Day-to-Day</h3>
              <p className="text-slate-700 leading-relaxed">They&apos;re your team. You assign work, run standups, set priorities.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="text-6xl font-bold text-blue-600/20 mb-4">05</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">We Handle the Rest</h3>
              <p className="text-slate-700 leading-relaxed">HR, compliance, performance support, replacements if needed. You focus on building.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Fit Check</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600">Is This Right For You?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-900 flex items-center gap-3">
                <span className="text-3xl">✓</span> Great Fit
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-green-600 flex-shrink-0">→</span>
                  <span>Startups ready to move beyond freelancers</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-green-600 flex-shrink-0">→</span>
                  <span>Founders scaling their first remote team</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-green-600 flex-shrink-0">→</span>
                  <span>Companies with hard-to-fill creative + AI roles</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-green-600 flex-shrink-0">→</span>
                  <span>Teams that want ownership, not outsourcing</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-900 flex items-center gap-3">
                <span className="text-3xl">✗</span> Not For
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-red-600 flex-shrink-0">→</span>
                  <span>Enterprise procurement processes</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-red-600 flex-shrink-0">→</span>
                  <span>One-off project work</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-red-600 flex-shrink-0">→</span>
                  <span>Managed services buyers</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-red-600 flex-shrink-0">→</span>
                  <span>Lowest-cost-only shoppers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Talk to Davis</h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book 30 minutes to discuss your hiring needs. Founder-to-founder.
          </p>
          <a 
            href="mailto:davis@firstepic.studio" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-5 rounded-xl text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl mb-6"
          >
            Email Davis
          </a>
          <p className="text-slate-400 text-sm">
            Or connect on{' '}
            <a href="https://linkedin.com/in/davisbrimer" className="text-blue-400 hover:text-blue-300 underline transition-colors">
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <p className="font-bold text-xl text-white mb-2">First Epic</p>
              <p className="text-sm max-w-md">Your Pakistan office. Full-time embedded talent with adult supervision.</p>
            </div>
            <div className="flex gap-8">
              <a href="/about" className="hover:text-blue-400 transition-colors font-medium">About</a>
              <a href="/faq" className="hover:text-blue-400 transition-colors font-medium">FAQ</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors font-medium">Contact</a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            <p>© 2025 First Epic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
