'use client'

import { useState, useEffect } from 'react'

export default function Agencies() {
  const[formData, setFormData] = useState({ name: '', email: '', message: '' })
  const[status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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
      <div className="grid-bg" />
      
{/* Header */}
<header className="fixed top-0 w-full z-40 p-4 md:p-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5">
        {/* Changed href="/" to href="#" to stay on page */}
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
            <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">For Creative & Digital Agencies - Accepting Clients</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            <div>DECOUPLE PRODUCTION.</div>
            <div className="text-gray-500">EXPAND YOUR MARGINS.</div>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            We provide mid-market agencies with dedicated, AI-enabled execution pods. Scale your high-volume creative output with pre-vetted talent working from our secure 24/7 physical studio for one flat monthly rate.
          </p>

          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 hover-card hover-glow text-center">
              <div className="text-4xl font-bold text-white mb-2 font-mono">0%</div>
              <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">Hidden EOR Taxes</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 hover-card hover-glow text-center">
              <div className="text-4xl font-bold text-white mb-2 font-mono">100%</div>
              <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">IP Security & Context</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why First Epic */}
      <section id="why" className="scroll-mt-32 min-h-screen flex items-center py-24 relative border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="font-mono text-xs text-blue-500 mb-6 tracking-widest uppercase">/// Built by a Founder Who's Been In Your Shoes</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              AI makes portfolios unreliable.<br />
              <span className="text-gray-600">We vet for process, not presentation.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>Clients are demanding more volume for less budget. But finding creatives who can actually execute complex AI pipelines (not just type prompts) is nearly impossible. Every candidate's portfolio looks perfect.</p>
              <p className="text-white">We put every Production Designer and Video Editor through <strong className="text-blue-400">rigorous, live technical challenges.</strong> You don't have to guess if they can handle your agency's actual workflow speed - we prove it before you ever meet them.</p>
              <p>Stop paying high local salaries for execution-heavy tasks. Keep the strategy in-house, and let our embedded talent act as your dedicated AI production engine.</p>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-lg"></div>
              <div className="relative bg-[#050505] border border-white/10 p-8 rounded-sm shadow-2xl">
                <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">The Agency Trap vs. First Epic</div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">✗</div>
                    <div>
                      <div className="text-white font-bold text-sm">The Marketplace Trap</div>
                      <div className="text-gray-500 text-sm">Fragmented gig platforms force talent into silos and destroy institutional memory when contracts end.</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-500">?</div>
                    <div>
                      <div className="text-white font-bold text-sm">The Nearshore Reliability Trap</div>
                      <div className="text-gray-500 text-sm">Hidden EOR compliance fees, wage inflation, and unreliable middlemen draining your margins.</div>
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
            <p className="text-gray-400 text-lg">Stop relying on scattered freelancers. Build a cohesive execution pod.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">The Studio Advantage</div>
              <h4 className="text-xl font-bold text-white mb-3">Real Office, Real Oversight</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Our talent operates from a highly secure, managed 24/7 physical facility. You get 100% dedicated focus.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Absolute IP Security</div>
              <h4 className="text-xl font-bold text-white mb-3">Client-Provisioned Tooling</h4>
              <p className="text-gray-400 text-sm leading-relaxed">You provision the software seats. You retain 100% ownership of your clients' brand assets. Zero "Shadow AI".</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Pure Margin Expansion</div>
              <h4 className="text-xl font-bold text-white mb-3">One Flat Monthly Rate</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Contracted through our US LLC. No hourly billing surprises, no EOR taxes, and no cross-border compliance headaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="scroll-mt-32 py-32 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-mono text-xs text-blue-500 mb-4 tracking-widest uppercase">/// The Roster</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">A Glimpse of<br /><span className="text-gray-600">Our Agency Bench.</span></h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Design & UI</div>
              <h4 className="text-xl font-bold text-white mb-4">AI Production Designers</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>High-Volume Asset Scaling</li>
                <li>Figma Component Libraries</li>
                <li>Digital & Social Ad Layouts</li>
                <li>Web & App UI Design</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Motion & Video</div>
              <h4 className="text-xl font-bold text-white mb-4">Digital Video Editors</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Performance Marketing Ads</li>
                <li>Social Video Resizing</li>
                <li>AI Video Generation pipelines</li>
                <li>Motion Graphics & After Effects</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition">
              <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">Operations</div>
              <h4 className="text-xl font-bold text-white mb-4">Creative Technologists</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>AI Tool Integration & Prompt Libraries</li>
                <li>Automation Project Managers</li>
                <li>Workflow Optimization</li>
                <li>Custom API Integrations</li>
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
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"/>
                </div>
                <div>
                  <input type="email" placeholder="Work Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"/>
                </div>
                <div>
                  <textarea placeholder="What role are you trying to fill?" rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition resize-none"/>
                </div>
                <button type="submit" disabled={status === 'loading'} className="w-full bg-white text-black font-bold py-4 hover:bg-gray-200 transition duration-300 uppercase tracking-wider disabled:opacity-50">
                  {status === 'loading' ? 'Sending...' : 'Send to Davis \u2192'}
                </button>
                </form>
            )}
          </div>
        </div>
      </section>

      {/* Minimal Landing Page Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold font-mono text-sm rounded-sm">FE</div>
            <span className="text-gray-600 text-xs font-mono tracking-widest uppercase">© 2026 FIRST EPIC</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="/" className="text-gray-600 hover:text-gray-400 transition font-mono text-xs tracking-widest uppercase">Main Website</a>
          </div>
        </div>
      </footer>

    </main>
  )
}