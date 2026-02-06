export default function FAQ() {
  const faqs = [
    {
      question: "How is this different from Upwork/Toptal/Arc/Turing?",
      answer: "Upwork is freelancers juggling multiple clients. Toptal/Arc/Turing are marketplaces connecting you to individual contractors. First Epic provides a physical workspace with HR, IT, career development, and on-site operational support. Your talent is dedicated to you full-time, not splitting attention across projects."
    },
    {
      question: "Where is the talent located?",
      answer: "First Epic is a US Company with subsidiaries around the world. We currently operate our flagship studio in Islamabad/Rawalpindi with professional workspace, high-speed fiber internet, IT support, HR, on-site operational management, backup power systems, and 24/7 security in a secure location. This infrastructure gives you enterprise-grade reliability without enterprise overhead."
    },
    {
      question: "Do you offer managed services?",
      answer: "Our core offering is embedded talent - team members who work as part of your remote team. You manage the work day-to-day, we handle infrastructure and support. That said, we occasionally partner on the right project with the right fit. If you have something specific in mind, let's talk - we're flexible with founders building something great."
    },
    {
      question: "What if it doesn't work out?",
      answer: "Two options: (1) Free replacements - if someone isn't working out, we'll find someone who will at no additional cost. (2) Cancel anytime - we don't lock you into long-term contracts. If First Epic isn't the right fit, you're free to move on."
    },
    {
      question: "How long does hiring take?",
      answer: "Typically 2-4 weeks for a new client - we source, screen, you interview, we hire and onboard. In some cases, we can move as fast as a few days if we already have pre-vetted candidates that match your needs. Timeline depends on role specificity and your availability for interviews."
    },
    {
      question: "What roles can you fill?",
      answer: "We specialize in technical and creative roles: software engineers (full-stack, frontend, backend, mobile), designers (UI/UX, product), AI specialists, and hybrid creative+technical positions. We also provide business operations support: project managers, executive assistants, business analysts, operations coordinators, and other back-office roles that startups need but don't want to pay US salaries for. (We don't handle US legal or tax work, but most other G&A functions are fair game.)"
    },
    {
      question: "Do you charge per-hire fees?",
      answer: "No. You pay a monthly fee for each team member - that's it. Recruiting, screening, and onboarding are included in your monthly rate. No upfront placement fees, no per-hire charges. You only pay if you decide to bring someone on board, which means there's zero financial risk to exploring this as an option."
    },
    {
      question: "What timezone options do you offer?",
      answer: "We operate 24 hours a day and can accommodate your preferred schedule: (1) Overnight work - assign tasks at end of day, wake up to completed work. (2) Partial overlap - team available during your afternoon hours for real-time collaboration. (3) Full business hours overlap - your team works alongside you during your 9-5. You choose what works best for your workflow."
    },
    {
      question: "How do you enable team members with AI tools?",
      answer: "Your team gets access to cutting-edge AI development and productivity tools based on their role and your requirements. We equip them with what they need to work efficiently in modern workflows - whether that's AI coding assistants, design tools, or productivity platforms."
    },
    {
      question: "Who is your typical customer?",
      answer: "Tech startup founders ready to graduate from Upwork/freelancer churn. Companies scaling their first remote team. Founders who want dedicated talent without the overhead of international hiring. NOT enterprise buyers looking for RFPs and procurement. NOT companies looking for fully managed services by default."
    },
    {
      question: "How much does it cost?",
      answer: "Custom quotes based on role, timezone preference, and experience level. Dramatically cheaper than US hiring, with zero headaches of going direct. Book a call with Davis for specifics - we'll walk through exactly what you need and what it costs."
    },
    {
      question: "Can I visit the office?",
      answer: "Yes, though most clients don't need to. We handle the physical infrastructure (workspace, IT, HR, operational oversight) so you can focus on managing the work remotely like any other distributed team. If you want to visit, we're happy to arrange it."
    }
  ]

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
            <a href="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Home</a>
            <a href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">About</a>
            <a href="/#contact" className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded text-sm font-semibold transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border-b border-slate-800 pt-24 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// FAQ</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Everything you need to know about working with First Epic.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-slate-800 pb-10 last:border-b-0">
              <h3 className="text-2xl font-bold mb-5 text-white flex items-start gap-4">
                <span className="text-cyan-400 flex-shrink-0 bg-cyan-500/10 px-4 py-2 rounded-lg font-mono border border-cyan-500/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{faq.question}</span>
              </h3>
              <div className="pl-20">
                <p className="text-lg text-slate-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-cyan-500/30 rounded-2xl p-12 text-center">
          <div className="font-mono text-sm text-cyan-400 mb-4 tracking-widest uppercase">/// Still have questions?</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Talk to Davis</h3>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book 30 minutes. Founder-to-founder. No sales pitch - just real talk about what you need and whether we're the right fit.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-10 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/20 font-mono tracking-wide"
          >
            Contact
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg inline-flex items-center gap-2 transition-colors font-mono">
            <span>←</span> ← Back to Home
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <p className="font-mono font-bold text-2xl text-cyan-400 mb-2">FIRST EPIC</p>
              <p className="text-sm text-slate-500 max-w-md">Full-time embedded talent with professional oversight.</p>
            </div>
            <div className="flex gap-8">
              <a href="/" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">Home</a>
              <a href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">About</a>
              <a href="/faq" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">FAQ</a>
              <a href="/#contact" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">Contact</a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-600 text-sm font-mono">© 2026 First Epic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
