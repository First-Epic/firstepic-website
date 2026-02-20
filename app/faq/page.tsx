export default function FAQ() {
  const faqs = [
    {
      question: "How is this different from Upwork/Toptal/Arc/Turing?",
      answer: "Those are marketplaces connecting you to individual contractors who work from home, often across multiple clients. First Epic is infrastructure — a physical studio with HR, IT, and professional oversight. Your talent works from our facility full-time, dedicated exclusively to you, trained on AI tools like Cursor, Copilot, and Claude. We handle the entire employment lifecycle so you just manage the day-to-day work."
    },
    {
      question: "Where is the talent located?",
      answer: "First Epic is a US company with subsidiaries around the world. We currently operate our flagship studio in Islamabad/Rawalpindi — a professional workspace with high-speed internet, IT support, HR, operational management, power backup, and secure facilities. Real infrastructure, not contractors working from home."
    },
    {
      question: "What does 'AI-enabled' actually mean?",
      answer: "Every team member we place is trained on the AI tools relevant to their role — Cursor, Copilot, Claude, Midjourney, and more. This isn't a checkbox. We test for it during vetting. An AI-enabled full-stack developer with deep product context can genuinely cover ground that used to require a small team. The tools are commoditized — everyone has access to them. The difference is the person behind them: their judgment, their process, and their ability to ship under real constraints."
    },
    {
      question: "How do you vet talent when AI makes every portfolio look the same?",
      answer: "We stopped looking at portfolios first. AI tools made everyone's output look professional — that's the trap. Instead, we test for process. Walk me through a project that went sideways. How do you handle a client who rejects the first three outputs? What's your system when the model won't generate what you need? The candidates with real production backgrounds answer in systems and workflows. The ones who learned the tools last quarter answer in vibes and aesthetics. We hire for process, not portfolio."
    },
    {
      question: "Do you offer managed services?",
      answer: "Occasionally, with the right partner and project. Our core model is embedded talent who work as part of your remote team — you manage the work day-to-day (Slack, Jira, your workflow) while we handle recruiting, HR, payroll, and workspace. Get in touch and we can discuss what works best for your situation."
    },
    {
      question: "What if it doesn't work out?",
      answer: "Free replacements — if someone isn't the right fit, we find someone who is, no additional fees. And there's no long-term lock-in. You can cancel anytime if things aren't working for you."
    },
    {
      question: "How long does hiring take?",
      answer: "Typically 2-4 weeks for a new client, but as fast as a few days for straightforward roles. We source, screen, you interview, we hire and onboard. Timeline depends on role specificity and your availability for interviews."
    },
    {
      question: "What roles can you fill?",
      answer: "Technical roles (full-stack, frontend, backend, mobile, AI/ML), creative roles (AI filmmakers, creative technologists, UI/UX, product design, motion graphics), and business support roles (project managers, operations, admin). We help founders and studio heads build out multiple functions without paying premium local rates."
    },
    {
      question: "Do you charge per-hire fees?",
      answer: "No placement fees. Recruiting, screening, and onboarding are included. You pay a monthly fee only for talent you actually hire. Zero risk to explore — you only pay if you decide to move forward."
    },
    {
      question: "What timezone options do you offer?",
      answer: "We operate 24 hours a day and can accommodate your preferred schedule: overnight async (tasks completed while you sleep), partial overlap (available during your morning/evening), or full business hours overlap (real-time collaboration). You choose what works best for your workflow."
    },
    {
      question: "Who is your typical customer?",
      answer: "Founders and studio heads who need AI-enabled talent but can't find or afford it locally. Whether you're a tech startup scaling past freelancers, a studio building an AI-native creative production team, or a non-technical founder who needs a dedicated developer — First Epic provides the talent and the infrastructure to make it work."
    },
    {
      question: "How much does it cost?",
      answer: "Custom quotes based on role, timezone, and experience level. Significantly more affordable than US/UK/Canada hiring, with none of the headaches of going direct in emerging markets. One AI-enabled developer from our studio can do the work of three traditional hires — the math changes fast. Get in touch with Davis for specifics."
    },
    {
      question: "Can I visit the office?",
      answer: "Yes, though most clients don't need to. We handle the physical infrastructure — workspace, IT, HR, operational oversight. You manage the work remotely like any other distributed team."
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
            <span className="text-gray-500 text-sm">AI-enabled remote teams with professional infrastructure.</span>
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