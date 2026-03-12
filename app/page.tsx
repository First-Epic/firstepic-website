'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  },[])


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
    <main className="min-h-screen bg-[#050505] text-gray-200 antialiased relative">
      {/* Animated Grid Background */}
      <div className="grid-bg" />
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
            <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">For Agencies, Studios & Tech - Accepting Clients</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            <div>SCALE YOUR OUTPUT.</div>
            <div className="text-gray-500">EXPAND YOUR MARGINS.</div>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          We provide Agencies, Studios, and Tech with dedicated, AI-enabled embedded talent. Whether you need a single <strong className="text-white font-semibold">&quot;permalancer&quot;</strong> or a cross-functional team, our talent acts as a <strong className="text-white font-semibold">direct extension of your bench</strong>. No platform fees or SaaS subscriptions - you just pay a flat monthly rate for the talent you hire.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 hover-card hover-glow text-center">
              <div className="text-4xl font-bold text-white mb-2 font-mono">20+</div>
              <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Years Building Tech</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 hover-card hover-glow text-center">
              <div className="text-4xl font-bold text-white mb-2 font-mono">3x</div>
              <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Output vs. Traditional Hires</div>
            </div>
          </div>

          <div>
            <a href="#why" className="inline-block border-b border-white pb-1 text-lg hover:text-blue-400 hover:border-blue-400 transition">
              Why First Epic ↓
            </a>
          </div>
        </div>
      </section>

      {/* Why First Epic */}
      <section id="why" className="scroll-mt-32 min-h-screen flex items-center py-24 relative border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="font-mono text-xs text-blue-500 mb-6 tracking-widest uppercase">/// Built by a Founder Who&apos;s Been In Your Shoes</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              AI makes portfolios unreliable.<br />
              <span className="text-gray-600">We vet for process, not presentation.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>Generative AI tools have made it impossible to evaluate candidates based on past work alone. The traditional resume screen is dead. Every candidate&apos;s portfolio looks perfect, making traditional vetting impossible.</p>
              <p className="text-white">We put every engineer, designer, and filmmaker through <strong className="text-blue-400">rigorous, live technical challenges.</strong> You don&apos;t have to guess if they can handle your actual workflow speed and volume - we prove it before you ever meet them.</p>
              <p>No split attention. No contractor churn. No &quot;Shadow AI&quot; IP leaks. Just dedicated professionals with deep context on your product, backed by a secure 24/7 studio.</p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <img src="/davis-headshot.jpg" alt="Davis Brimer" className="w-16 h-16 rounded-full border border-white/20 object-cover" />
              <div>
                <div className="text-white font-bold text-base">Davis Brimer</div>
                <div className="text-gray-500 text-xs font-mono uppercase">Founder & CEO - 20+ Years in Tech</div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-lg"></div>
              <div className="relative bg-[#050505] border border-white/10 p-8 rounded-sm shadow-2xl">
                <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">The Old Way vs. First Epic</div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">✗</div>
                    <div>
                      <div className="text-white font-bold text-sm">The Marketplace Trap</div>
                      <div className="text-gray-500 text-sm">Fragmented gig platforms force talent into silos and destroy institutional memory when contracts end.</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 text-yellow-500">!</div>
                    <div>
                      <div className="text-white font-bold text-sm">The Overemployment Epidemic</div>
                      <div className="text-gray-500 text-sm">Remote contractors moonlighting on your dime. Your project is just another ticket.</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-500">?</div>
                    <div>
                      <div className="text-white font-bold text-sm">The Nearshoring Reliability Trap</div>
                      <div className="text-gray-500 text-sm">Hidden compliance fees, wage inflation, and unreliable middlemen draining your margins.</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 text-purple-500">◎</div>
                    <div>
                      <div className="text-white font-bold text-sm">The Vetting Problem</div>
                      <div className="text-gray-500 text-sm">AI tools make output look professional. You need to test for actual workflow speed.</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 text-green-500">✓</div>
                    <div>
                      <div className="text-white font-bold text-sm">First Epic</div>
                      <div className="text-gray-500 text-sm">Dedicated AI-enabled talent. Absolute IP security. Professionally managed studio. One flat monthly rate.</div>
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
            <h2 className="font-mono text-xs text-blue-500 mb-4 tracking-widest uppercase">/// The Moat</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">The End of the<br /><span className="text-gray-600">Marketplace Trap.</span></h3>
            <p className="text-gray-400 text-lg">Fragmented freelance marketplaces and unreliable nearshore middlemen are broken. Here is how we do it differently.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">The Studio Advantage</div>
              <h4 className="text-xl font-bold text-white mb-3">Premium Office, Unmatched Retention</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
              Fragmented freelance marketplaces force talent into silos. We do the opposite. Our talent operates from a premium, managed 24/7 physical studio. <strong className="text-white font-semibold">Because we provide highly competitive local salaries, full HR support, and premium infrastructure, our retention is unmatched.</strong> You get 100% dedicated focus, custom time zone alignment (from full US overlap to overnight async delivery), and zero transient gig-worker churn.
                </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Dedicated to You</div>
              <h4 className="text-xl font-bold text-white mb-3">Zero Gig-Worker Churn</h4>
              <p className="text-gray-400 text-sm leading-relaxed">You get seamless Slack/Asana/Jira integration and unbroken institutional memory. No split attention across other clients.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Absolute IP Security</div>
              <h4 className="text-xl font-bold text-white mb-3">Client-Provisioned Tooling</h4>
              <p className="text-gray-400 text-sm leading-relaxed">You provision and own the software seats. You retain 100% ownership of your proprietary code and brand assets.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Zero &quot;Shadow AI&quot;</div>
              <h4 className="text-xl font-bold text-white mb-3">Data Privacy Guaranteed</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Because our talent uses your tools within our secure studio, there is zero risk of your IP bleeding into public AI models.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Pure Margin Expansion</div>
              <h4 className="text-xl font-bold text-white mb-3">One Flat Rate Per Seat</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Contracted through our US LLC. You pay a flat rate solely for the talent you hire. No platform subscriptions, no hourly surprises, and no hidden EOR taxes.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">No HR Headaches</div>
              <h4 className="text-xl font-bold text-white mb-3">Zero Cross-Border Compliance</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Bypass the hidden EOR taxes and labor risks of nearshoring. We handle the infrastructure, you manage the work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="scroll-mt-32 py-32 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-mono text-xs text-blue-500 mb-4 tracking-widest uppercase">/// The Roster</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">A Glimpse of<br /><span className="text-gray-600">Our Bench.</span></h3>
            <p className="text-gray-400 text-lg">Need a custom role? If it requires AI fluency and strategic execution, we can securely source and vet it.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Agencies</div>
              <h4 className="text-xl font-bold text-white mb-4">Creative & Production Roles</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>AI Production Designers</li>
                <li>Digital & Social Video Editors</li>
                <li>Automation Project Managers</li>
                <li>Creative Technologists</li>
                <li>UI/UX Designers</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Studios</div>
              <h4 className="text-xl font-bold text-white mb-4">Narrative & VFX Roles</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>AI Filmmakers</li>
                <li>Narrative Video Editors</li>
                <li>Motion Graphics & VFX</li>
                <li>Post-Production Specialists</li>
                <li>3D Artists & Generalists</li>
                <li>Prompt Engineers</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Tech</div>
              <h4 className="text-xl font-bold text-white mb-4">Engineering Roles</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>AI-Enabled Software Engineers</li>
                <li>Full-Stack Engineers</li>
                <li>Backend & DevOps</li>
                <li>AI Integrations & Workflow Automation</li>
                <li>Mobile Developers (iOS/Android)</li>
                <li>QA & Test Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="scroll-mt-32 py-32 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-mono text-xs text-blue-500 mb-4 tracking-widest uppercase">/// The Process</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h3>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-5xl font-mono font-bold text-white/10 mb-4">01</div>
              <h4 className="text-lg font-bold text-white mb-2">We Source & Screen</h4>
              <p className="text-gray-500 text-sm">
                Tell us what you need. We ask for your most pressing JD and design a custom technical challenge for your exact tech stack. <strong className="text-blue-400 font-semibold">There is no cost to open a search or review candidates.</strong>
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-mono font-bold text-white/10 mb-4">02</div>
              <h4 className="text-lg font-bold text-white mb-2">You Interview</h4>
              <p className="text-gray-500 text-sm">You make the final call. Interview candidates, review their challenge workflows, pick your team.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-mono font-bold text-white/10 mb-4">03</div>
              <h4 className="text-lg font-bold text-white mb-2">Plug & Play Pilot</h4>
              <p className="text-gray-500 text-sm">We guarantee Day-1 integration. Your team works in your time zone, inside your Slack, managing tickets in your Asana/Jira.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-mono font-bold text-white/10 mb-4">04</div>
              <h4 className="text-lg font-bold text-white mb-2">You Manage</h4>
              <p className="text-gray-500 text-sm">They&apos;re your embedded team. You assign work, run standups, and own the IP.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-mono font-bold text-white/10 mb-4">05</div>
              <h4 className="text-lg font-bold text-white mb-2">We Handle the Rest</h4>
              <p className="text-gray-500 text-sm">One flat monthly rate <strong className="text-white">per team member</strong>. No SaaS access fees, no hidden HR costs. Month-to-month flexibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section id="origin" className="scroll-mt-32 py-32 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="font-mono text-xs text-blue-500 mb-4 tracking-widest uppercase">/// The Origin Story</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-10">Why I Built This</h3>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>After 20+ years as a tech entrepreneur, I realized the traditional outsourcing model is fundamentally broken in the AI era. Fragmented freelance marketplaces force talent to operate in silos, creating severe IP security risks.</p>
            <p>Nearshore markets are saturated - plagued by severe wage inflation, unreliable middleman agencies, and the &apos;overemployment&apos; epidemic (unmonitored contractors moonlighting on your dime).</p>
            <p>Most critically, AI tools like Midjourney and Cursor have made every candidate&apos;s portfolio and GitHub look perfect. Traditional vetting is dead. The resume screen no longer works.</p>
            <p className="text-white">So I built First Epic. We provide Agencies, Studios, and Tech with dedicated, pre-vetted AI Creative Technologists and Software Engineers. We don&apos;t sell hours, and we aren&apos;t a middleman network. We sell margin expansion and operational velocity.</p>
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
                <li className="flex items-start gap-3 text-gray-300"><span className="text-green-500 font-bold">✓</span><span>Mid-Market Agencies moving to decoupled production to expand margins</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-green-500 font-bold">✓</span><span>Production Studios scaling high-volume, AI-native content pipelines</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-green-500 font-bold">✓</span><span>Tech Companies looking to accelerate engineering roadmaps without EOR bloat</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-green-500 font-bold">✓</span><span>Teams tired of contractor churn who want committed, embedded team members</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-green-500 font-bold">✓</span><span>Companies with hard-to-fill AI-forward creative or technical roles</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-green-500 font-bold">✓</span><span>Leaders who want ownership, absolute IP security, and deep context</span></li>
              </ul>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 p-10 rounded-sm">
              <h4 className="text-2xl font-bold text-red-400 mb-6">Not For</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300"><span className="text-red-500 font-bold">✗</span><span>Enterprise procurement processes (6-month bureaucracies)</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-red-500 font-bold">✗</span><span>Short-term, one-off gig seekers (we build long-term infrastructure)</span></li>
                <li className="flex items-start gap-3 text-gray-300"><span className="text-red-500 font-bold">✗</span><span>Companies looking for legacy, low-tier &quot;call center&quot; BPO</span></li>
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
            Stop renting hours.<br />
            <span className="text-gray-700">Start scaling output.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
            Drop a dedicated, pre-vetted AI professional into your Slack by next week. Book a discovery call with Davis.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-10 rounded-sm hover-card max-w-lg mx-auto backdrop-blur-sm">
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
                  {status === 'loading' ? 'Sending...' : 'Send to Davis \u2192'}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
            <p className="text-gray-500 text-sm mt-6 text-center">
              Or connect on{' '}
              <a href="https://linkedin.com/in/davisbrimer" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition">
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
            <span className="text-gray-500 text-sm">Embedded AI talent and cross-functional teams for Agencies, Studios, and Tech.</span>
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