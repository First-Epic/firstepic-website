export default function FAQ() {
  const faqs = [
    {
      question: "How is this different from Upwork/Toptal/Arc/Turing?",
      answer: "Upwork is freelancers juggling multiple clients. Toptal/Arc/Turing are marketplaces connecting you to individual contractors. First Epic provides a physical workspace with HR, IT, performance management, and daily oversight. Your talent is dedicated to you full-time, not splitting attention across projects."
    },
    {
      question: "Where is the talent located?",
      answer: "We operate a physical studio in Islamabad/Rawalpindi with workspace, internet, IT support, HR, and daily supervision in a secure location. This gives you professional infrastructure with adult oversight - not random contractors working from coffee shops."
    },
    {
      question: "Do you offer managed services?",
      answer: "No. We provide embedded talent who work as part of your remote team. You manage the work day-to-day (Slack, Jira, your workflow). We handle recruiting, HR, payroll, workspace, and performance management. Think: remote employee, not outsourced project."
    },
    {
      question: "What if it doesn't work out?",
      answer: "Free replacements. If someone isn't working out, we'll find someone who will. No additional fees."
    },
    {
      question: "How long does hiring take?",
      answer: "Typically 2-4 weeks for a new client. We source, screen, you interview, we hire and onboard. Timeline depends on role specificity and your availability for interviews."
    },
    {
      question: "What roles can you fill?",
      answer: "We specialize in technical and creative roles: software engineers (full-stack, frontend, backend, mobile), designers (UI/UX, product), AI specialists, and hybrid creative+technical roles. If you're looking for dedicated remote talent in these areas, we can help."
    },
    {
      question: "Do you charge per-hire fees?",
      answer: "No. Recruiting, screening, and onboarding are included. You pay a monthly fee for the talent, not separate placement fees."
    },
    {
      question: "What timezone options do you offer?",
      answer: "We operate 24/7 and can accommodate your preferred schedule: (1) Overnight work for US teams - tasks completed while you sleep, (2) Partial overlap - available during your afternoon hours, (3) Full US business hours overlap - real-time collaboration during your 9-5. You choose what works best for your workflow."
    },
    {
      question: "How do you enable team members with AI tools?",
      answer: "Your team gets access to cutting-edge AI development and productivity tools based on their role and your requirements. We equip them with what they need to work efficiently in modern workflows."
    },
    {
      question: "Who is your typical customer?",
      answer: "Tech startup founders ready to graduate from Upwork/freelancer churn. Companies scaling their first remote team. NOT enterprise buyers. NOT companies looking for fully managed services."
    },
    {
      question: "How much does it cost?",
      answer: "Custom quotes based on role, timezone, and experience level. Dramatically cheaper than US hiring, with zero headaches of going direct. Get in touch with Davis for specifics."
    },
    {
      question: "Can I visit the office?",
      answer: "Yes, though most clients don't need to. We handle the physical infrastructure (workspace, IT, HR, daily oversight). You manage the work remotely like any other distributed team."
    }
  ]

  return (
    <main className="min-h-screen bg-[#050505] text-gray-200">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 p-4 md:p-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold font-mono text-sm rounded-sm group-hover:scale-105 transition shadow-[0_0_15px_rgba(255,255,255,0.3)]">FE</div>
          <div className="hidden md:block">
            <div className="font-bold tracking-tight text-sm leading-none text-white">FIRST EPIC</div>
            <div className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mt-1">GLOBAL STUDIO</div>
          </div>
        </a>
        <nav className="flex items-center gap-6">
          <a href="/about" className="text-gray-400 hover:text-white transition text-sm">About</a>
          <a href="/faq" className="text-white font-medium text-sm">FAQ</a>
          <a href="/#contact" className="bg-white/10 border border-white/10 px-5 py-2 rounded-sm hover:bg-white hover:text-black transition text-sm font-mono">CONTACT</a>
        </nav>
      </header>

      {/* Hero */}
      <div className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="font-mono text-xs text-blue-500 mb-4 tracking-widest uppercase">/// FAQ</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Frequently Asked<br />Questions</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            Everything you need to know about working with First Epic.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-8 last:border-b-0">
              <h3 className="text-xl font-bold mb-4 text-white flex items-start gap-4">
                <span className="text-blue-500 font-mono text-sm bg-blue-500/10 px-3 py-1 rounded flex-shrink-0">Q{String(index + 1).padStart(2, '0')}</span>
                <span>{faq.question}</span>
              </h3>
              <div className="pl-16">
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-xl p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Still have questions?</h3>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book 30 minutes with Davis. Founder-to-founder.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-white text-black font-bold px-10 py-4 rounded-sm text-lg transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a href="/" className="text-blue-400 hover:text-blue-300 font-semibold text-lg inline-flex items-center gap-2 transition-colors">
            <span>←</span> Back to Home
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold font-mono text-xs rounded-sm">FE</div>
            <span className="text-gray-500 text-sm">Full-time embedded talent with on-site management.</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="/about" className="text-gray-400 hover:text-white transition">About</a>
            <a href="/faq" className="text-white font-medium">FAQ</a>
            <a href="/#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
          <div className="text-gray-600 text-xs font-mono">© 2026 First Epic</div>
        </div>
      </footer>
    </main>
  )
}
