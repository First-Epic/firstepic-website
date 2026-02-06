'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] text-gray-200 antialiased">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 p-4 md:p-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold font-mono text-sm rounded-sm group-hover:scale-105 transition shadow-[0_0_15px_rgba(255,255,255,0.3)]">FE</div>
          <div className="hidden md:block">
            <div className="font-bold tracking-tight text-sm leading-none text-white">FIRST EPIC</div>
            <div className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mt-1">GLOBAL STUDIO</div>
          </div>
        </a>
        <a href="#contact" className="flex items-center gap-3 group bg-white/10 border border-white/10 px-5 py-3 rounded-sm hover:bg-white hover:text-black transition duration-300">
          <span className="font-mono text-xs font-bold tracking-wide">TALK TO DAVIS</span>
          <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#050505] to-blue-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">Accepting Clients • Founder-to-Founder</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            <div>READY TO GRADUATE</div>
            <div className="text-gray-500">FROM UPWORK?</div>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Stop churning through freelancers. Build your remote team with embedded talent that actually sticks around.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2 font-mono">20+</div>
              <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Years Building Tech</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2 font-mono">100%</div>
              <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Referral Growth</div>
            </div>
          </div>

          <div>
            <a href="#origin" className="inline-block border-b border-white pb-1 text-lg hover:text-blue-400 hover:border-blue-400 transition">
              The Origin Story ↓
            </a>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section id="origin" className="scroll-mt-32 min-h-screen flex items-center py-24 relative border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="font-mono text-xs text-blue-500 mb-6 tracking-widest uppercase">/// Built by a Builder</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              I Built This to Solve<br />
              <span className="text-gray-600">My Own Problem.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>Over 20 years as a tech entrepreneur, I&apos;ve hired <strong className="text-white">hundreds of freelancers</strong> across every platform you can name. Upwork, Toptal, Fiverr, direct contractors — you name it, I&apos;ve tried it.</p>
              <p className="text-white">The lessons cost me <strong className="text-blue-400">hundreds of thousands of dollars</strong> in failed projects, missed deadlines, and talent that disappeared mid-sprint.</p>
              <p>First Epic is what I wish existed when I started. Not another marketplace. Not another agency. A better way to build a remote team that actually works.</p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <img src="/davis-headshot.jpg" alt="Davis Brimer" className="w-16 h-16 rounded-full border border-white/20 object-cover" />
              <div>
                <div className="text-white font-bold text-base">Davis Brimer</div>
                <div className="text-gray-500 text-xs font-mono uppercase">Founder & CEO • 20+ Years in Tech</div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-lg"></div>
              <div className="relative bg-[#050505] border border-white/10 p-8 rounded-sm shadow-2xl">
                <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">The Freelancer Fatigue</div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">✗</div>
                    <div>
                      <div className="text-white font-bold text-sm">Constant Churn</div>
                      <div className="text-gray-500 text-sm">Every project starts from zero. New freelancer, new onboarding, new trust-building.</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 text-yellow-500">!</div>
                    <div>
                      <div className="text-white font-bold text-sm">No Ownership</div>
                      <div className="text-gray-500 text-sm">They&apos;re juggling 5 other clients. Your project is just another ticket.</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-500">?</div>
                    <div>
                      <div className="text-white font-bold text-sm">Quality Lottery</div>
                      <div className="text-gray-500 text-sm">Great portfolio, mediocre delivery. The profile never matches the work.</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 text-green-500">✓</div>
                    <div>
                      <div className="text-white font-bold text-sm">First Epic</div>
                      <div className="text-gray-500 text-sm">Dedicated talent. Physical workspace. Adult supervision.</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="solution" className="scroll-mt-32 py-32 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-mono text-xs text-blue-500 mb-4 tracking-widest uppercase">/// The First Epic Difference</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Not a Marketplace.<br /><span className="text-gray-600">Not an Agency.</span></h3>
            <p className="text-gray-400 text-lg">Your dedicated remote team with real infrastructure and adult supervision.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Physical Workspace</div>
              <h4 className="text-xl font-bold text-white mb-3">Real Office, Real Oversight</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Your team works from a professional workspace with HR, IT support, and daily management.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Dedicated to You</div>
              <h4 className="text-xl font-bold text-white mb-3">Full-Time, Embedded</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Your team members work exclusively for you. Not splitting attention across other clients.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">AI-Enabled</div>
              <h4 className="text-xl font-bold text-white mb-3">Modern Tools</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Your team gets access to cutting-edge AI tools to supercharge their productivity.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Timezone Flexibility</div>
              <h4 className="text-xl font-bold text-white mb-3">Your Schedule</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Full US business hours overlap available, or async overnight work. You decide.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">No Per-Hire Fees</div>
              <h4 className="text-xl font-bold text-white mb-3">Recruiting Included</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Unlike Arc or Toptal, you don&apos;t pay thousands just to start.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Free Replacements</div>
              <h4 className="text-xl font-bold text-white mb-3">Risk-Free Hiring</h4>
              <p className="text-gray-400 text-sm leading-relaxed">If someone isn&apos;t working out, we replace them. No questions, no fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="scroll-mt-32 py-32 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-mono text-xs text-blue-500 mb-4 tracking-widest uppercase">/// The Process</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h3>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-5xl font-mono font-bold text-white/10 mb-4">01</div>
              <h4 className="text-lg font-bold text-white mb-2">We Source & Screen</h4>
              <p className="text-gray-500 text-sm">Tell us what you need. We find, vet, and shortlist candidates.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-mono font-bold text-white/10 mb-4">02</div>
              <h4 className="text-lg font-bold text-white mb-2">You Interview</h4>
              <p className="text-gray-500 text-sm">You make the final call. Interview candidates, pick your team.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-mono font-bold text-white/10 mb-4">03</div>
              <h4 className="text-lg font-bold text-white mb-2">We Hire & Onboard</h4>
              <p className="text-gray-500 text-sm">We handle employment, payroll, workspace, equipment.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-mono font-bold text-white/10 mb-4">04</div>
              <h4 className="text-lg font-bold text-white mb-2">You Manage</h4>
              <p className="text-gray-500 text-sm">They&apos;re your team. You assign work, run standups.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-mono font-bold text-white/10 mb-4">05</div>
              <h4 className="text-lg font-bold text-white mb-2">We Handle the Rest</h4>
              <p className="text-gray-500 text-sm">HR, compliance, performance support, replacements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fit Check */}
      <section id="fit" className="scroll-mt-32 py-32 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-mono text-xs text-blue-500 mb-4 tracking-widest uppercase">/// Fit Check</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Is This Right For You?</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-green-500/5 border border-green-500/20 p-10 rounded-sm">
              <h4 className="text-2xl font-bold text-green-400 mb-6">Great Fit</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300"><span className="text-green-500 font-bold">✓</span><span>Startups ready to move beyond freelancers</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-green-500 font-bold">✓</span><span>Founders scaling their first remote team</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-green-500 font-bold">✓</span><span>Companies with hard-to-fill creative + AI roles</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-green-500 font-bold">✓</span><span>Teams that want ownership, not outsourcing</span></li>
              </ul>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 p-10 rounded-sm">
              <h4 className="text-2xl font-bold text-red-400 mb-6">Not For</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300"><span className="text-red-500 font-bold">✗</span><span>Enterprise procurement processes</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-red-500 font-bold">✗</span><span>One-off project work</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-red-500 font-bold">✗</span><span>Managed services buyers</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-red-500 font-bold">✗</span><span>Lowest-cost-only shoppers</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="scroll-mt-32 min-h-[80vh] flex flex-col justify-center items-center py-24 px-6 relative border-t border-white/5 bg-[#030303]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">
            Ready to Build<br />
            <span className="text-gray-700">Your Team?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
            Book 30 minutes with Davis. Founder-to-founder.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-10 rounded-sm max-w-lg mx-auto backdrop-blur-sm">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Davis will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Work Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="What are you building?" 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-white text-black font-bold py-4 hover:bg-gray-200 transition duration-300 uppercase tracking-wider disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send to Davis →'}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
            <p className="text-gray-500 text-sm mt-6 text-center">
              Or connect on{' '}
              <a href="https://linkedin.com/in/davisbrimer" className="text-blue-400 hover:text-blue-300 underline transition">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold font-mono text-xs rounded-sm">FE</div>
            <span className="text-gray-500 text-sm">Full-time embedded talent with adult supervision.</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="/about" className="text-gray-400 hover:text-white transition">About</a>
            <a href="/faq" className="text-gray-400 hover:text-white transition">FAQ</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
          <div className="text-gray-600 text-xs font-mono">© 2026 First Epic</div>
        </div>
      </footer>
    </main>
  )
}
