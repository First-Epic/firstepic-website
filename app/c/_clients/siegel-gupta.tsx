// Client content component for the dynamic /c/<token> route (no metadata here — the
// route page.tsx owns title + noindex). Registered in app/c/_registry.tsx.
// Audience: Paul Siegel + Sanjee Gupta — a BD-channel / partner pitch (NOT a talent client).
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export default function SiegelGupta() {
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
            Prepared exclusively for Paul Siegel &amp; Sanjee Gupta
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-16 border-b border-gray-800/50">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
          Partnership Proposal
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          The photo-realistic AI-film team<br />
          <span className="accent-gradient">behind your next deal.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-10">
          You see the AI-film opportunities everywhere - the bottleneck is a team that can actually deliver photoreal, on time, without a soundstage. First Epic is that team: a sovereign, fully-local AI-film pipeline plus vetted talent, ready to sit behind the deals you bring. You bring the rooms; we bring the work.
        </p>
        <div className="flex gap-4 items-center text-sm font-medium text-gray-500 mb-8">
          <span>Prepared for: Paul Siegel &amp; Sanjee Gupta</span>
        </div>
        <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-800/50">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            Photoreal - no actors, no mocap
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block"></span>
            Sovereign &amp; IP-secure
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
            Your network, monetized
          </div>
        </div>
      </header>

      {/* The capability */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">/// The Team That Actually Delivers</h2>
        <p className="text-gray-400 leading-relaxed mb-10 max-w-3xl">Most AI-film talk is demos. First Epic runs a working, end-to-end pipeline - and pairs it with vetted talent - so it ships finished film, not slideware.</p>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">A Real<br />Pipeline</h3>
            <p className="text-gray-400 leading-relaxed">
              A character is generated, given exact facial performances frame by frame, then animated into photoreal shots - no actors, no mocap, no soundstage. The hard part of AI film, solved as a repeatable process.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">A Real<br />Team</h3>
            <p className="text-gray-400 leading-relaxed">
              Vetted, embedded First Epic talent runs the pipeline and the craft around it - direction, edit, finishing. Not a one-person shop you have to babysit; a team that owns delivery.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Sovereign<br />&amp; IP-Secure</h3>
            <p className="text-gray-400 leading-relaxed">
              Fully local - no third-party model lock-in, nothing leaking to a vendor. Human-authored then AI-enhanced, so the work is copyrightable. The footage, the IP, the pipeline stay with the deal.
            </p>
          </div>
        </div>
      </section>

      {/* The two models */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">/// Two Ways We Work Together</h2>
        <p className="text-gray-400 leading-relaxed mb-10 max-w-3xl">Both let you monetize your network and AI-film deal flow - without building or owning a studio or a team.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="text-indigo-400 text-sm font-bold mb-2">Model A</div>
            <h3 className="text-lg font-bold text-white mb-3">We&apos;re the team behind your deal-makers</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bring us someone out winning AI-film work, and First Epic becomes their production team - embedded as a service, or delivering finished films. They keep pitching their ideas; we make them real. You&apos;ve connected a creator to the team that ships.
            </p>
          </div>
          <div className="bg-[#111] border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors">
            <div className="text-indigo-400 text-sm font-bold mb-2">Model B</div>
            <h3 className="text-lg font-bold text-white mb-3">You open the door, we pitch, you earn</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Put us in front of the studios and decision-makers you already know. We pitch and deliver First Epic&apos;s AI-film capability directly; you take a business-development commission on what closes. Your relationships, working for you.
            </p>
          </div>
        </div>
      </section>

      {/* Why First Epic */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-800/50">
        <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3 text-center">/// Why Put First Epic Behind Your Name</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
          <div className="text-center">
            <h4 className="text-lg font-bold text-white mb-2">Real delivery, not demos</h4>
            <p className="text-sm text-gray-400 leading-relaxed">A working pipeline + a real team. You can put your reputation behind it.</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-bold text-white mb-2">IP-secure by design</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Fully local, copyright-first - the kind of AI a studio can actually use without the headlines.</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-bold text-white mb-2">You stay the connector</h4>
            <p className="text-sm text-gray-400 leading-relaxed">We carry the team, the tech, and the delivery. You keep doing what you do best - opening doors.</p>
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Let&apos;s pick the model that <span className="accent-gradient">fits how you work.</span></h2>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">You&apos;ve got the relationships and the deal flow; we&apos;ve got the team that delivers. Let&apos;s figure out which way to start - and put First Epic behind your next AI-film conversation.</p>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-600 text-sm">© 2026 First Epic</p>
      </footer>
    </div>
  );
}
