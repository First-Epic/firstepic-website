export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* System Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="font-mono text-cyan-400 font-bold text-xl tracking-wider">FE</div>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="font-mono text-slate-400">Online</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-slate-400">Taking New Clients</span>
            </div>
          </div>
          <nav className="flex items-center gap-8">
            <a href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">About</a>
            <a href="/faq" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">FAQ</a>
            <a href="#contact" className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded text-sm font-semibold transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="mb-6 inline-block">
            <div className="font-mono text-sm text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-4 py-2 rounded bg-cyan-500/5">
              For founders tired of the freelancer treadmill
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
            <span className="text-white">Ready to Graduate</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              from Upwork?
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop churning through freelancers. Build your remote team with embedded talent that actually sticks around.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-10 py-5 rounded-lg text-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/20 font-mono tracking-wide"
            >
              Get Started
            </a>
            <a 
              href="#origin" 
              className="border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white font-semibold px-10 py-5 rounded-lg text-lg transition-all"
            >
              Read the Origin Story
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 max-w-3xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-lg p-8 transition-all">
              <div className="text-5xl font-bold text-cyan-400 mb-3 font-mono">20+</div>
              <div className="text-slate-400 font-medium">Years Building Tech Companies</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 rounded-lg p-8 transition-all">
              <div className="text-5xl font-bold text-cyan-400 mb-3 font-mono">100%</div>
              <div className="text-slate-400 font-medium">Client Retention Rate</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section id="origin" className="relative py-32 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// Built by Builders</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">The Origin Story</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-10">
              <h3 className="text-3xl font-bold mb-6 text-white">I Built This to Solve My Own Problem</h3>
              <div className="space-y-5 text-slate-300 leading-relaxed">
                <p>
                  For over 20 years as a tech entrepreneur, I've hired <strong className="text-cyan-400">hundreds of freelancers</strong> across every platform you can name. Upwork, Toptal, Fiverr, direct contractors - you name it, I've tried it.
                </p>
                <p>
                  The lessons cost me <strong className="text-cyan-400">hundreds of thousands of dollars</strong> in failed projects, missed deadlines, and talent that disappeared mid-sprint.
                </p>
                <p>
                  First Epic is what I wish existed when I started. Not another marketplace. Not another agency. A better way to build a remote team that actually works.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8">
                <img 
                  src="/davis-headshot.jpg" 
                  alt="Davis Brimer"
                  className="w-24 h-24 rounded-full object-cover border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                />
                <div>
                  <div className="font-bold text-2xl text-white mb-1">Davis Brimer</div>
                  <div className="text-cyan-400 font-semibold mb-2">Founder & CEO</div>
                  <div className="text-slate-400 text-sm leading-relaxed">
                    Serial entrepreneur • 20+ years in tech<br />
                    BS Computer Engineering, UC Santa Barbara
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-8">
                <div className="font-mono text-cyan-400 text-sm mb-4">THE STANDARD</div>
                <p className="text-slate-300 leading-relaxed">
                  If we wouldn't hire them for our own stack, we won't send them to yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-32 border-t border-slate-800 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// The Problem</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">The Problem</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-2xl text-slate-400 font-semibold max-w-3xl mx-auto">The Freelancer Fatigue is Real</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-10 transition-all hover:shadow-xl hover:shadow-cyan-500/5">
              <div className="w-12 h-1 bg-cyan-500 mb-6"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">Constant Churn</h3>
              <p className="text-slate-400 leading-relaxed">
                Every project starts from zero. New freelancer, new onboarding, new trust-building. Again and again.
              </p>
            </div>

            <div className="group bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-10 transition-all hover:shadow-xl hover:shadow-cyan-500/5">
              <div className="w-12 h-1 bg-cyan-500 mb-6"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">No Ownership</h3>
              <p className="text-slate-400 leading-relaxed">
                They're juggling 5 other clients. Your project is just another ticket in their queue.
              </p>
            </div>

            <div className="group bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-10 transition-all hover:shadow-xl hover:shadow-cyan-500/5">
              <div className="w-12 h-1 bg-cyan-500 mb-6"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">Communication Chaos</h3>
              <p className="text-slate-400 leading-relaxed">
                Timezone roulette, language barriers, disappearing acts, and "I'll get to it tomorrow" that lasts a week.
              </p>
            </div>

            <div className="group bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-10 transition-all hover:shadow-xl hover:shadow-cyan-500/5">
              <div className="w-12 h-1 bg-cyan-500 mb-6"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">Quality Lottery</h3>
              <p className="text-slate-400 leading-relaxed">
                Great portfolio, mediocre delivery. The profile never matches the actual work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="relative py-32 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// The Solution</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">The Solution</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-2xl text-slate-400 font-semibold max-w-3xl mx-auto">The First Epic Difference</p>
            <p className="text-lg text-slate-500 mt-3">Not a marketplace. Not an agency. Build your own dedicated team - we handle the infrastructure and professional oversight.</p>
          </div>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="group border-l-4 border-cyan-500 bg-gradient-to-r from-slate-900/80 to-slate-900/40 rounded-r-xl p-8 hover:from-slate-900 hover:to-slate-800 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-white">Physical Workspace with Professional Oversight</h3>
              <p className="text-slate-400 leading-relaxed">
                Your team works from a real office with HR, IT support, and on-site operational management. Not a bedroom with spotty WiFi.
              </p>
            </div>

            <div className="group border-l-4 border-cyan-500 bg-gradient-to-r from-slate-900/80 to-slate-900/40 rounded-r-xl p-8 hover:from-slate-900 hover:to-slate-800 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-white">Dedicated to You</h3>
              <p className="text-slate-400 leading-relaxed">
                Full-time, embedded in your workflow. Not splitting attention across five other clients.
              </p>
            </div>

            <div className="group border-l-4 border-cyan-500 bg-gradient-to-r from-slate-900/80 to-slate-900/40 rounded-r-xl p-8 hover:from-slate-900 hover:to-slate-800 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-white">AI-Enabled Team Members</h3>
              <p className="text-slate-400 leading-relaxed">
                Your team gets access to cutting-edge AI tools to supercharge their productivity. Modern workflows, not legacy processes.
              </p>
            </div>

            <div className="group border-l-4 border-cyan-500 bg-gradient-to-r from-slate-900/80 to-slate-900/40 rounded-r-xl p-8 hover:from-slate-900 hover:to-slate-800 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-white">Timezone Flexibility</h3>
              <p className="text-slate-400 leading-relaxed">
                Full US business hours overlap available, or async overnight work. Your choice.
              </p>
            </div>

            <div className="group border-l-4 border-cyan-500 bg-gradient-to-r from-slate-900/80 to-slate-900/40 rounded-r-xl p-8 hover:from-slate-900 hover:to-slate-800 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-white">No Per-Hire Fees</h3>
              <p className="text-slate-400 leading-relaxed">
                Unlike Arc or Toptal, you don't pay thousands just to start. Recruiting is included in your monthly rate.
              </p>
            </div>

            <div className="group border-l-4 border-cyan-500 bg-gradient-to-r from-slate-900/80 to-slate-900/40 rounded-r-xl p-8 hover:from-slate-900 hover:to-slate-800 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-white">Free Replacements</h3>
              <p className="text-slate-400 leading-relaxed">
                If someone isn't working out, we replace them. No questions, no fees. That's on us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-32 border-t border-slate-800 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// How It Works</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">How It Works</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-10 transition-all group">
              <div className="font-mono text-cyan-400 text-3xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-3 text-white">We Source & Screen</h3>
              <p className="text-slate-400 leading-relaxed">Tell us what you need. We find, vet, and shortlist candidates. No per-hire fees.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-10 transition-all group">
              <div className="font-mono text-cyan-400 text-3xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-3 text-white">You Interview & Approve</h3>
              <p className="text-slate-400 leading-relaxed">You make the final call. Interview your candidates, pick your team.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-10 transition-all group">
              <div className="font-mono text-cyan-400 text-3xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-3 text-white">We Hire & Onboard</h3>
              <p className="text-slate-400 leading-relaxed">We handle employment, payroll, workspace, equipment - all the overhead.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-10 transition-all group">
              <div className="font-mono text-cyan-400 text-3xl font-bold mb-4">04</div>
              <h3 className="text-xl font-bold mb-3 text-white">You Manage Day-to-Day</h3>
              <p className="text-slate-400 leading-relaxed">They're your team. You assign work, run standups, set priorities.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-10 transition-all group">
              <div className="font-mono text-cyan-400 text-3xl font-bold mb-4">05</div>
              <h3 className="text-xl font-bold mb-3 text-white">We Handle the Rest</h3>
              <p className="text-slate-400 leading-relaxed">HR, compliance, performance support, replacements if needed. You focus on building.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative py-32 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// Is This Right For You?</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Is This Right For You?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/30 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-6 text-green-400 font-mono">Great Fit</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0 text-xl font-mono">+</span>
                  <span className="text-slate-300">Startups ready to move beyond freelancers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0 text-xl font-mono">+</span>
                  <span className="text-slate-300">Founders scaling their first remote team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0 text-xl font-mono">+</span>
                  <span className="text-slate-300">Companies with hard-to-fill or hybrid positions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0 text-xl font-mono">+</span>
                  <span className="text-slate-300">Teams that want ownership, not outsourcing</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/30 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-6 text-red-400 font-mono">INGreat Fit</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold flex-shrink-0 text-xl font-mono">-</span>
                  <span className="text-slate-300">Enterprise procurement processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold flex-shrink-0 text-xl font-mono">-</span>
                  <span className="text-slate-300">One-off project work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold flex-shrink-0 text-xl font-mono">-</span>
                  <span className="text-slate-300">Managed services buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold flex-shrink-0 text-xl font-mono">-</span>
                  <span className="text-slate-300">Lowest-cost-only shoppers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="relative py-32 border-t border-slate-800 bg-gradient-to-b from-transparent to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// Ready to Talk?</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Ready to Build Your Team?</h2>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
              Book 30 minutes with Davis. Founder-to-founder.
            </p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-10 max-w-2xl mx-auto">
            <form id="contact-form" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-cyan-400 mb-2 uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border-2 border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-cyan-400 mb-2 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border-2 border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-cyan-400 mb-2 uppercase tracking-wider">Hiring Needs</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border-2 border-slate-700 focus:border-cyan-500 focus:outline-none resize-none transition-colors"
                  placeholder="What roles are you looking to fill?"
                ></textarea>
              </div>
              <div id="form-status" className="text-center"></div>
              <button 
                type="submit" 
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/20 font-mono tracking-wider"
              >
                SEND TO DAVIS →
              </button>
            </form>
            <p className="text-slate-500 text-sm text-center mt-6 font-mono">
              Or connect on{' '}
              <a href="https://linkedin.com/in/davisbrimer" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <p className="font-mono font-bold text-2xl text-cyan-400 mb-2">FIRST EPIC</p>
              <p className="text-sm text-slate-500 max-w-md">Full-time embedded talent with professional oversight.</p>
            </div>
            <div className="flex gap-8">
              <a href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">About</a>
              <a href="/faq" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">FAQ</a>
              <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">Contact</a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-600 text-sm font-mono">© 2026 First Epic. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{__html: `
        document.getElementById('contact-form').addEventListener('submit', async function(e) {
          e.preventDefault();
          const form = e.target;
          const status = document.getElementById('form-status');
          const button = form.querySelector('button[type="submit"]');
          const originalText = button.textContent;
          
          button.disabled = true;
          button.textContent = 'TRANSMITTING...';
          status.textContent = '';
          status.className = 'text-center';
          
          try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
              })
            });
            
            if (response.ok) {
              status.textContent = '✓ Message received. Davis will be in touch.';
              status.className = 'text-center text-green-400';
              form.reset();
            } else {
              throw new Error('Failed to send');
            }
          } catch (error) {
            status.textContent = 'Something went wrong. Please try again.';
            status.className = 'text-center text-red-400';
          } finally {
            button.disabled = false;
            button.textContent = originalText;
          }
        });
      `}} />
    </main>
  )
}
