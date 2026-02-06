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

          {/* Stats - Revised */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-300 mb-3">20+</div>
              <div className="text-slate-300 font-medium text-lg">Years Building Tech Companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-300 mb-3">100%</div>
              <div className="text-slate-300 font-medium text-lg">Referral-Based Growth</div>
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
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-10 md:p-12 mb-10 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">I Built This to Solve My Own Problem</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 mb-5 leading-relaxed text-lg">
                  Over 20 years as a tech entrepreneur, I&apos;ve hired <strong className="text-slate-900">hundreds of freelancers</strong> across every platform you can name. Upwork, Toptal, Fiverr, direct contractors — you name it, I&apos;ve tried it.
                </p>
                <p className="text-slate-700 mb-5 leading-relaxed text-lg">
                  The lessons cost me <strong className="text-slate-900">hundreds of thousands of dollars</strong> in failed projects, missed deadlines, and talent that disappeared mid-sprint.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg">
                  First Epic is what I wish existed when I started. Not another marketplace. Not another agency. A better way to build a remote team that actually works.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-8 bg-gradient-to-r from-blue-50 to-slate-50 border-2 border-blue-200 rounded-xl shadow-sm">
              <div className="flex-shrink-0">
                <img 
                  src="/davis-headshot.jpg" 
                  alt="Davis Brimer"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div>
                <div className="font-bold text-2xl text-slate-900 mb-1">Davis Brimer</div>
                <div className="text-blue-600 font-semibold text-lg mb-2">Founder & CEO</div>
                <div className="text-slate-600 leading-relaxed">Serial entrepreneur • 20+ years in tech • BS Computer Engineering, UC Santa Barbara</div>
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
            <p className="text-2xl text-slate-700 font-semibold max-w-3xl mx-auto">The Freelancer Fatigue is Real</p>
            <p className="text-lg text-slate-500 mt-3">Sound familiar?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-xl p-10 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Constant Churn</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Every project starts from zero. New freelancer, new onboarding, new trust-building. Again and again.</p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">No Ownership</h3>
              <p className="text-lg text-slate-700 leading-relaxed">They&apos;re juggling 5 other clients. Your project is just another ticket in their queue.</p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Communication Chaos</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Timezone roulette, disappearing acts, and &quot;I&apos;ll get to it tomorrow&quot; that lasts a week.</p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
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
            <p className="text-2xl text-slate-700 font-semibold max-w-3xl mx-auto">The First Epic Difference</p>
            <p className="text-lg text-slate-500 mt-3">Not a marketplace. Not an agency. Your dedicated remote team with adult supervision.</p>
          </div>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-white rounded-r-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Physical Workspace with Daily Oversight</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Your team works from a real office with HR, IT support, and daily management. Not a bedroom with spotty WiFi.</p>
            </div>

            <div className="border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-white rounded-r-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Dedicated to You</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Full-time, embedded in your workflow. Not splitting attention across five other clients.</p>
            </div>

            <div className="border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-white rounded-r-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">AI-Enabled Team Members</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Your team gets access to cutting-edge AI tools to supercharge their productivity. Modern workflows, not legacy processes.</p>
            </div>

            <div className="border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-white rounded-r-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Timezone Flexibility</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Full US business hours overlap available, or async overnight work. Your choice.</p>
            </div>

            <div className="border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-white rounded-r-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">No Per-Hire Fees</h3>
              <p className="text-lg text-slate-700 leading-relaxed">Unlike Arc or Toptal, you don&apos;t pay thousands just to start. Recruiting is included in your monthly rate.</p>
            </div>

            <div className="border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-white rounded-r-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Free Replacements</h3>
              <p className="text-lg text-slate-700 leading-relaxed">If someone isn&apos;t working out, we replace them. No questions, no fees. That&apos;s on us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">How It Works</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-10 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <div className="text-blue-600 text-lg font-bold mb-4">STEP 1</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">We Source & Screen</h3>
              <p className="text-slate-700 leading-relaxed">Tell us what you need. We find, vet, and shortlist candidates. No per-hire fees.</p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <div className="text-blue-600 text-lg font-bold mb-4">STEP 2</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">You Interview & Approve</h3>
              <p className="text-slate-700 leading-relaxed">You make the final call. Interview your candidates, pick your team.</p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <div className="text-blue-600 text-lg font-bold mb-4">STEP 3</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">We Hire & Onboard</h3>
              <p className="text-slate-700 leading-relaxed">We handle employment, payroll, workspace, equipment — all the overhead.</p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <div className="text-blue-600 text-lg font-bold mb-4">STEP 4</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">You Manage Day-to-Day</h3>
              <p className="text-slate-700 leading-relaxed">They&apos;re your team. You assign work, run standups, set priorities.</p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-200">
              <div className="text-blue-600 text-lg font-bold mb-4">STEP 5</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Is This Right For You?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-10 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-green-900">Great Fit</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-green-600 font-bold flex-shrink-0 text-xl">✓</span>
                  <span>Startups ready to move beyond freelancers</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-green-600 font-bold flex-shrink-0 text-xl">✓</span>
                  <span>Founders scaling their first remote team</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-green-600 font-bold flex-shrink-0 text-xl">✓</span>
                  <span>Companies with hard-to-fill creative + AI roles</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-green-600 font-bold flex-shrink-0 text-xl">✓</span>
                  <span>Teams that want ownership, not outsourcing</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-10 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-red-900">Not For</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-red-600 font-bold flex-shrink-0 text-xl">✗</span>
                  <span>Enterprise procurement processes</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-red-600 font-bold flex-shrink-0 text-xl">✗</span>
                  <span>One-off project work</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-red-600 font-bold flex-shrink-0 text-xl">✗</span>
                  <span>Managed services buyers</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="text-red-600 font-bold flex-shrink-0 text-xl">✗</span>
                  <span>Lowest-cost-only shoppers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Build Your Team?</h2>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Book 30 minutes with Davis. Founder-to-founder.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 border-2 border-transparent focus:border-blue-500 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 border-2 border-transparent focus:border-blue-500 focus:outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 border-2 border-transparent focus:border-blue-500 focus:outline-none"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your hiring needs</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 border-2 border-transparent focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="What roles are you looking to fill?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
            <p className="text-slate-400 text-sm text-center mt-6">
              Or connect on{' '}
              <a href="https://linkedin.com/in/davisbrimer" className="text-blue-400 hover:text-blue-300 underline transition-colors">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <p className="font-bold text-xl text-white mb-2">First Epic</p>
              <p className="text-sm max-w-md">Full-time embedded talent with adult supervision.</p>
            </div>
            <div className="flex gap-8">
              <a href="/about" className="hover:text-blue-400 transition-colors font-medium">About</a>
              <a href="/faq" className="hover:text-blue-400 transition-colors font-medium">FAQ</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors font-medium">Contact</a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            <p>© 2026 First Epic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
