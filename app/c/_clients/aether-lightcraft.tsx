// Client content component for the dynamic /c/<token> route (no metadata here — the
// route page.tsx owns title + noindex). Registered in app/c/_registry.tsx.
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export default function AetherLightCraft() {
  return (
    <div className={`${inter.className} bg-[#0a0a0a] text-gray-200 antialiased selection:bg-indigo-500 selection:text-white`}>
      <style>{`
        .accent-gradient {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-widest text-white flex items-center gap-2">
            <span className="bg-white text-black w-8 h-8 inline-flex items-center justify-center text-sm font-black">FE</span> FIRST EPIC
          </div>
          <div className="text-sm text-gray-400 hidden sm:block">
            Prepared exclusively for Aether / Lightcraft
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-16 border-b border-gray-800/50">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
          Partnership Proposal
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Engineering &amp; creative firepower<br />
          for the shots <span className="accent-gradient">no one else can get.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-10">
          Across Aether and Lightcraft, you&apos;ve built a rare operation - original production and in-house post, plus the capture and AR systems that put cameras where they&apos;ve never been. The bottleneck now isn&apos;t know-how - it&apos;s time. First Epic embeds dedicated, vetted engineers, creative technologists, and post talent who work exclusively for you - so your team can keep creating instead of getting buried in execution.
        </p>
        <div className="flex gap-4 items-center text-sm font-medium text-gray-500 mb-8">
          <span>Prepared for: Davis DiLillo &amp; Kyle Bullington</span>
        </div>
        <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-800/50">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            Embedded, Not Freelance
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block"></span>
            US-Time-Zone Overlap
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
            IP-Secure by Design
          </div>
        </div>
      </header>

      {/* Why First Epic */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-8">/// The First Epic Difference</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Embedded, With<br />Real Oversight.</h3>
            <p className="text-gray-400 leading-relaxed">
              Not home-based contractors with split attention. Our talent works exclusively for you from our managed studio - on First Epic-provided hardware and fiber internet, in-office, no moonlighting - fully embedded in your stack and your standards.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Engineers Who<br />Speak Your Stack</h3>
            <p className="text-gray-400 leading-relaxed">
              Unreal Engine, custom plugins, NVIDIA Jetson and ROS, NDI pipelines, modern AI tooling (local and cloud) - plus the post and creative pipeline (editorial, color, VFX, motion). Engineers and creative technologists matched to the exact problem in front of you, whether on the capture side or in post.
            </p>
          </div>
        </div>
      </section>

      {/* Roles / Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">/// Where We&apos;d Start</h2>
        <p className="text-gray-400 leading-relaxed mb-10 max-w-3xl">This works two ways: it <strong className="text-white">frees your team&apos;s time</strong> to take on more clients - and it turns what you&apos;ve built into <strong className="text-white">products and services you can sell.</strong> Here&apos;s where we&apos;d start:</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Unreal / AR Systems Engineer */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Unreal / AR Systems Engineer</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Harden the on-set AR system into something bulletproof and simple to run. Unreal plugin development, the middle-tier software around Jetson/ROS sensor fusion, NDI streaming to director and DP, and the alignment dashboard - so the system just works, on a drone or anywhere, with no markers, and becomes solid enough to be a product you can sell, not just an in-house rig.
            </p>
          </div>

          {/* Card 2 - Creative Tooling / Product Engineer */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM12 7v4m-2-2h4"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Creative-Tooling Product Engineer</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Turn the scrappy prompt scaffolds into a polished, visual product suite your team actually wants to use - bid, award, planning, pre-production, shoot, notes. Dashboard workflows with per-step AI plus manual override, storyboards, treatments, pitch decks and quoting. Quote more, with less.
            </p>
          </div>

          {/* Card 3 - Unreal Animator / VFX Finishing */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Unreal Animator / VFX Finishing</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Tied to the AR module: build the launch demo - a short film with first-class Unreal animation plus post/VFX finishing - then offer it as a full-time, productized service to your clients. The recurring-revenue layer on top of the AR system, brought in as the module nears production-ready.
            </p>
          </div>

          {/* Card 4 - Post & Editorial (Aether-facing) */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Post &amp; Editorial Support</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Embedded editors, colorists, motion, and VFX-finishing talent to absorb Aether&apos;s post overflow - so the in-house post house can take on more work without stretching the core team. Same exclusivity, oversight, and US-time-zone overlap.
            </p>
          </div>

          {/* Card 5 - Catch-all */}
          <div className="bg-[#111] border border-gray-800 border-dashed rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Beyond These Four</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              These reflect where we&apos;d suggest starting, based on our conversations with you so far - and your most pressing need is always yours to define. Our bench runs deep across software, AI/ML, pipeline, and creative engineering. If it&apos;s technical or creative and AI-enabled, we can source it.
            </p>
          </div>
        </div>
      </section>

      {/* Economics */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">/// A Mutual Partnership</h2>
            <h3 className="text-3xl font-bold text-white mb-6">Built to be mutual.</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our talent is globally based - working exclusively for you from our managed overseas studio - which is exactly how First Epic comes in at <strong className="text-white">half, or less than half, the all-in cost of a comparable US hire</strong>. The same embedded, vetted, IP-secure model - at a fraction of the price, with none of the usual offshore downsides.
            </p>
            <p className="text-gray-400 leading-relaxed">
              And because we believe partnerships only work when they&apos;re mutual, we&apos;ll structure a further discount on top in exchange for Aether / Lightcraft becoming a flagship case study - the proof point that opens the next ten doors for both of us.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 border border-indigo-500/30 rounded-2xl p-8 lg:p-12 text-center">
            <div className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Half the cost.<br/>None of the compromises.</div>
          <ul className="text-left text-sm text-gray-300 space-y-3 max-w-xs mx-auto">
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> One flat monthly rate per team member</li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> No recruiting, placement, or platform fees</li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> No payroll taxes or HR overhead</li>
          </ul>
        </div>
      </div>
    </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3 text-center">/// How We Start</h2>
        <p className="text-center text-gray-500 text-sm mb-12">Month-to-month. No long-term commitment required.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative">
            <div className="text-5xl font-black text-gray-800 absolute -top-6 -left-4 -z-10">01</div>
            <h4 className="text-lg font-bold text-white mb-2">Define the Roles</h4>
            <p className="text-sm text-gray-400 leading-relaxed">We turn each role you want to fill into a clear, detailed spec - in whatever order you prioritize - and work through them with you.</p>
          </div>
          <div className="relative">
            <div className="text-5xl font-black text-gray-800 absolute -top-6 -left-4 -z-10">02</div>
            <h4 className="text-lg font-bold text-white mb-2">We Source</h4>
            <p className="text-sm text-gray-400 leading-relaxed">We recruit specifically for each role&apos;s stack - whether that&apos;s Unreal and Jetson/ROS, creative tooling, or post and editorial - and present highly qualified finalists.</p>
          </div>
          <div className="relative">
            <div className="text-5xl font-black text-gray-800 absolute -top-6 -left-4 -z-10">03</div>
            <h4 className="text-lg font-bold text-white mb-2">You Interview</h4>
            <p className="text-sm text-gray-400 leading-relaxed">You interview finalists directly to confirm the technical bar and the personality and communication fit you care about.</p>
          </div>
          <div className="relative">
            <div className="text-5xl font-black text-gray-800 absolute -top-6 -left-4 -z-10">04</div>
            <h4 className="text-lg font-bold text-white mb-2">Embed &amp; Iterate</h4>
            <p className="text-sm text-gray-400 leading-relaxed">They plug into your tools with US-time-zone overlap for live deploys. We stay hands-on, with free replacements if the fit isn&apos;t right.</p>
          </div>
        </div>
      </section>

      {/* Risk reversal */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3 text-center">/// Why It&apos;s Low-Risk</h2>
        <p className="text-center text-gray-500 text-sm mb-12">The hard part is deciding to start. After that, we&apos;ve taken the downside off the table.</p>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-7 max-w-4xl mx-auto">
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">You choose every hire.</strong> You interview and approve each person before they start - nobody lands on your team you didn&apos;t pick.</p>
          </div>
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">No lock-in.</strong> Month-to-month - scale up, pause, or stop whenever. No long-term contract.</p>
          </div>
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">Free, fast replacements.</strong> If a fit isn&apos;t right, we swap them at no cost - the risk of a bad hire is on us, not you.</p>
          </div>
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">Your IP stays yours.</strong> US LLC, vetted talent, in-office on our infrastructure - your footage, code, and pipeline stay protected.</p>
          </div>
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">We&apos;re invested too.</strong> We&apos;re staking our own reputation on you as a flagship case study - your success is our proof.</p>
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Let&apos;s agree where to <span className="accent-gradient">start.</span></h2>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">One role or several - whichever match your priorities right now. Once we pick where to begin, we turn it into a clear spec and have qualified, vetted people in front of you within weeks - fully embedded, at half the cost, with the guarantees above behind it.</p>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-600 text-sm">© First Epic Studio</p>
      </footer>
    </div>
  );
}
