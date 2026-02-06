export default function FAQ() {
  const faqs = [
    {
      question: "How is this different from Upwork/Toptal/Arc/Turing?",
      answer: "Upwork is freelancers juggling multiple clients. Toptal/Arc/Turing are marketplaces connecting you to individual contractors. First Epic is your Pakistan office—we provide a physical workspace with HR, IT, performance management, and daily oversight. Your talent is dedicated to you full-time, not splitting attention across projects."
    },
    {
      question: "Where is the talent located?",
      answer: "Pakistan. We run a physical studio in Karachi with workspace, internet, IT support, HR, and daily supervision. We reframe this as 'emerging markets with infrastructure advantage'—not just cheap labor, but professional workspace with adult oversight."
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
      answer: "Typically about 1 month for a new client. We source, screen, you interview, we hire and onboard. Timeline depends on role specificity and your availability for interviews."
    },
    {
      question: "What roles can you fill?",
      answer: "Engineers (full-stack, frontend, backend, mobile), designers (UI/UX, product), AI specialists, and creative+AI hybrid roles. If it's a hard-to-fill remote tech role, we can probably help."
    },
    {
      question: "Do you charge per-hire fees?",
      answer: "No. Recruiting, screening, and onboarding are included. You pay a monthly fee for the talent, not separate placement fees."
    },
    {
      question: "What timezone options do you offer?",
      answer: "We operate 24/7. Options: (1) Daytime Pakistan (async/overnight work for US), (2) Partial overlap (~2pm-midnight Pakistan time), (3) Night shift (~6pm-3am Pakistan time for US afternoon overlap), or (4) Graveyard (~9pm-6am Pakistan time for full US overlap)."
    },
    {
      question: "How do you train people on AI tools?",
      answer: "We train team members on Cursor, GitHub Copilot, and Claude Code. The goal: AI-enabled talent who work more efficiently. Monthly fee (vs hourly) incentivizes speed, not slow billing."
    },
    {
      question: "Who is your typical customer?",
      answer: "Tech startup founders ready to graduate from Upwork/freelancer churn. Companies scaling their first remote team. NOT enterprise buyers. NOT companies looking for fully managed services."
    },
    {
      question: "How much does it cost?",
      answer: "Custom quotes based on role, timezone, and experience level. Dramatically cheaper than US hiring, with zero headaches of going direct. Book a call with Davis for specifics."
    },
    {
      question: "Can I visit the Pakistan office?",
      answer: "Yes, though most clients don't need to. We handle the physical infrastructure (workspace, IT, HR, daily oversight). You manage the work remotely like any other distributed team."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl">
            Everything you need to know about working with First Epic.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 pb-8 last:border-b-0">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-start gap-3">
                <span className="text-blue-600 flex-shrink-0">Q{index + 1}.</span>
                <span>{faq.question}</span>
              </h3>
              <div className="pl-10">
                <p className="text-lg text-slate-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-10 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Still have questions?</h3>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            Book 30 minutes with Davis. Founder-to-founder.
          </p>
          <a 
            href="mailto:davis@firstepic.studio" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
          >
            Email Davis
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg inline-flex items-center gap-2 transition-colors">
            <span>←</span> Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
