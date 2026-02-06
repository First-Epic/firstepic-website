export default function FAQ() {
  const faqs = [
    {
      question: "How is this different from Upwork/Toptal/Arc/Turing?",
      answer: "Upwork is freelancers juggling multiple clients. Toptal/Arc/Turing are marketplaces connecting you to individual contractors. First Epic provides a physical workspace with HR, IT, performance management, and daily oversight. Your talent is dedicated to you full-time, not splitting attention across projects."
    },
    {
      question: "Where is the talent located?",
      answer: "We operate a physical studio in Islamabad/Rawalpindi with workspace, internet, IT support, HR, and daily supervision in a secure location. This gives you professional infrastructure with adult oversight—not random contractors working from coffee shops."
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
      answer: "We operate 24/7 and can accommodate your preferred schedule: (1) Overnight work for US teams—tasks completed while you sleep, (2) Partial overlap—available during your afternoon hours, (3) Full US business hours overlap—real-time collaboration during your 9-5. You choose what works best for your workflow."
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
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
            Everything you need to know about working with First Epic.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-slate-200 pb-10 last:border-b-0">
              <h3 className="text-2xl font-bold mb-5 text-slate-900 flex items-start gap-4">
                <span className="text-blue-600 flex-shrink-0 bg-blue-50 px-4 py-2 rounded-lg font-mono">Q{index + 1}</span>
                <span>{faq.question}</span>
              </h3>
              <div className="pl-20">
                <p className="text-lg text-slate-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-12 text-center shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">Still have questions?</h3>
          <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book 30 minutes with Davis. Founder-to-founder.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
          >
            Get in Touch
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
