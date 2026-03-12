import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'First Epic x Collier.Simon | AI-Enabled Creative Talent',
};

export default function CollierSimonPage() {
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
            Prepared exclusively for Collier.Simon
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-16 border-b border-gray-800/50">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
          Partnership Proposal
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Supercharging <span className="accent-gradient">Performance Creative</span><br />
          with AI-Enabled Talent.
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-10">
          Agencies running high-volume performance creative - like 8,000+ monthly ads across Tier-3 Auto - need global talent that actually sticks. First Epic provides dedicated creatives who work exclusively for you, from our managed studio, at a fraction of what a US hire costs. PDT-aligned, English-vetted, and AI-enabled.
        </p>
        <div className="flex gap-4 items-center text-sm font-medium text-gray-500 mb-8">
          <span>Prepared for: Matt Seigel, Rachael Erdmann, and Cara Joven</span>
        </div>
        <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-800/50">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            24/7 Managed Studio
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block"></span>
            Dedicated, Not Freelance
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
            100% PDT Alignment Available
          </div>
        </div>
      </header>

      {/* Why First Epic */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-8">/// The First Epic Difference</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Not What You&apos;ve<br />Tried Before.</h3>
            <p className="text-gray-400 leading-relaxed">
              If you&apos;ve worked with global creative partners and had it fall apart, the failure point is almost always the same: home-based contractors with split attention and no real oversight. Our talent works exclusively from our 24/7 managed studio facility - fully embedded, with real infrastructure behind them.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Native AI &amp;<br />Cloud Expertise</h3>
            <p className="text-gray-400 leading-relaxed">
              Our creatives don&apos;t just use the standard Adobe Creative Suite. They&apos;re fluent in modern collaborative workflows (Figma, Weavy, Frame.io, Airtable) and AI generation (Runway, Kling, Veo, Seedance, Higgsfield, Nano Banana).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Guaranteed<br />PDT Alignment</h3>
            <p className="text-gray-400 leading-relaxed">
              100% US-time zone overlap available. We conduct rigorous English comprehension vetting and strict quality control before we put a candidate in front of you.
            </p>
          </div>
        </div>
      </section>

      {/* Roles / For Cara */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-8">/// Roles We Are Ready To Source</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - AI Video Editor */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI Video Editor</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Storytellers who cut natively in Premiere, apply motion design and VFX in After Effects, and build AI generation pipelines in Weavy for rapid A/B testing and massive-scale performance social ads. Traditional editorial skills first - AI-enabled on accounts where it&apos;s approved.
            </p>
          </div>

          {/* Card 2 - AI Production Designer */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI Production Designer</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Perfect for high-volume accounts (Tier-3 Auto, QSR). Fluent in Figma components, auto layout, design tokens, and ad sizes and format variations. Uses AI generative fill to scale asset delivery.
            </p>
          </div>

          {/* Card 3 - Technical Project Manager */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Technical Project Manager</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              AI automators who can build custom GPTs, manage API integrations, and automate internal workflows to push thousands of deliverables efficiently.
            </p>
          </div>

          {/* Card 4 - Creative Technologist */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Creative Technologist</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Bridges creative vision and AI tooling. Builds agentic workflows, maintains prompt libraries, and scales cross-account production systems - the force multiplier behind every other role.
            </p>
          </div>

          {/* Card 5 - Art Director */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-rose-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Art Director</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Concept and execute multi-channel campaigns across paid social, digital, and connected TV. AI-fluent for concepting and production, with a strong visual sensibility and understanding of performance creative.
            </p>
          </div>

          {/* Card 6 - Catch-all */}
          <div className="bg-[#111] border border-gray-800 border-dashed rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Beyond These Five</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The five roles listed here reflect where we&apos;d suggest starting - but every agency&apos;s most pressing need is different. Our bench runs deep across art direction, production design, and more. If it&apos;s creative or technical and AI-enabled, we can source it.
            </p>
          </div>
        </div>
      </section>

      {/* Economics / For Rachel */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">/// The Economics</h2>
            <h3 className="text-3xl font-bold text-white mb-6">Zero Overhead. Pure Margin.</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              You already know what a US-based creative costs. Add taxes, healthcare, 401k, and PTO on top, and the true cost of that headcount is significantly higher than the salary line suggests.
            </p>
            <p className="text-gray-400 leading-relaxed">
              By utilizing First Epic&apos;s flat-rate infrastructure, you immediately recapture margin on massive retainer accounts without compromising on speed or quality.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 border border-indigo-500/30 rounded-2xl p-8 lg:p-12 text-center">
            <div className="text-gray-400 font-medium mb-2">Flat, All-Inclusive Rate</div>
          <div className="text-3xl font-black text-white mb-4">One flat rate per team member.<br/>No platform fees.</div>
          <div className="mb-8"></div>
          <ul className="text-left text-sm text-gray-300 space-y-3 max-w-xs mx-auto">
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> No SaaS subscription required</li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> No recruiting or placement fees</li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> No payroll taxes or HR overhead</li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> Month-to-month flexibility</li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> Free, immediate replacements</li>
          </ul>
        </div>
      </div>
    </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3 text-center">/// The Pilot Process</h2>
        <p className="text-center text-gray-500 text-sm mb-12">Month-to-month. No long-term commitment required.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative">
            <div className="text-5xl font-black text-gray-800 absolute -top-6 -left-4 -z-10">01</div>
            <h4 className="text-lg font-bold text-white mb-2">Share the JDs</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Send us the exact requirements for your most pressing roles (e.g., AI Video Editor, AI Production Designer).</p>
          </div>
          <div className="relative">
            <div className="text-5xl font-black text-gray-800 absolute -top-6 -left-4 -z-10">02</div>
            <h4 className="text-lg font-bold text-white mb-2">We Source</h4>
            <p className="text-sm text-gray-400 leading-relaxed">We review our active bench and recruit specifically for your stack, presenting you with highly qualified candidates.</p>
          </div>
          <div className="relative">
            <div className="text-5xl font-black text-gray-800 absolute -top-6 -left-4 -z-10">03</div>
            <h4 className="text-lg font-bold text-white mb-2">You Interview</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Your team can interview them directly to ensure a perfect cultural, technical, and storytelling fit.</p>
          </div>
          <div className="relative">
            <div className="text-5xl font-black text-gray-800 absolute -top-6 -left-4 -z-10">04</div>
            <h4 className="text-lg font-bold text-white mb-2">Plug &amp; Play</h4>
            <p className="text-sm text-gray-400 leading-relaxed">They plug directly into your Slack, Asana/Jira, and Figma from day one. 30 days notice to cancel, and free replacements if someone isn&apos;t working out.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-600 text-sm">© First Epic Studio</p>
      </footer>
    </div>
  );
}
