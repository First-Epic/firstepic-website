'use client'

export default function FAQ() {
  const faqs =[
    {
      question: "How is this different from Upwork/Toptal/Arc/Turing?",
      answer: "Those are fragmented freelance marketplaces that force talent into silos, creating IP risks and destroying institutional memory when short-term contracts end. First Epic is infrastructure. We provide dedicated, embedded talent working from our highly secure, managed 24/7 physical studio. We handle the HR, IT, and cross-border compliance so you just manage the day-to-day work."
    },
    {
      question: "Where is the talent located?",
      answer: "First Epic contracts entirely through our US-based LLC, but our talent operates from our flagship physical studio in Islamabad/Rawalpindi, Pakistan. This allows us to bypass the saturated LATAM nearshore market—avoiding severe wage inflation, unreliable middleman agencies, and hidden Employer-of-Record (EOR) taxes—while delivering elite, 100% dedicated talent at a fraction of the cost."
    },
    {
      question: "What does 'AI-enabled' actually mean?",
      answer: "Every team member we place is trained on the latest AI tools relevant to their role—Cursor, Copilot, Claude, Midjourney, ComfyUI, and more. But the tools are commoditized; everyone has access to them. The difference is the person behind them. An AI-enabled Software Engineer or Creative Technologist with deep product context can cover ground that used to require a small team. We test for their judgment, their process, and their ability to ship under real constraints."
    },
    {
      question: "How do you vet talent when AI makes every portfolio look the same?",
      answer: "AI makes portfolios unreliable—that's the trap. The traditional resume screen is dead. We put every engineer, designer, and filmmaker through rigorous, live technical challenges. We test for process: how they handle revisions, manage version control across dozens of assets, recover when tools break mid-project, and ship under real deadlines. We vet for actual workflow speed and competence, not just presentation."
    },
    {
      question: "Do you offer managed services?",
      answer: "Our core model is Embedded Talent. Your team works exclusively for you, integrated directly into your Slack and Jira. Crucially, we use Client-Provisioned Tooling—you provision and own the software seats. This guarantees you retain 100% ownership of your proprietary code and brand assets, with zero risk of 'Shadow AI' bleeding your IP into public models."
    },
    {
      question: "What if it doesn't work out?",
      answer: "Free replacements. If someone isn't the perfect fit, we replace them immediately with zero additional fees. We offer month-to-month flexibility with no long-term lock-in."
    },
    {
      question: "How long does hiring take?",
      answer: "Typically 2-4 weeks for a new client, but as fast as a few days for straightforward roles. We ask for your JD, we source, we screen via technical challenge, you interview, and we handle the onboarding. The timeline depends on role specificity and your availability for interviews."
    },
    {
      question: "What roles can you fill?",
      answer: "We fill roles across three core sectors. For Tech: AI-Enabled Software Engineers, Full-Stack, and Backend/DevOps. For Agencies: AI Production Designers, Digital/Social Video Editors, and Automation PMs. For Studios: AI Filmmakers, Narrative Video Editors, and VFX/Motion Graphics. If it requires AI fluency and strategic execution, our bench runs deep."
    },
    {
      question: "Do you charge per-hire fees?",
      answer: "No placement fees, no hourly billing surprises, and no middleman markups. Recruiting, screening, and onboarding are completely included. You pay one flat, all-inclusive monthly rate for the embedded talent you hire. Pure margin expansion."
    },
    {
      question: "What timezone options do you offer?",
      answer: "We operate 24 hours a day. We can accommodate a 100% US business hours overlap for real-time collaboration, a partial overlap for daily standups, or a 'follow-the-sun' async overnight schedule where tasks are completed while you sleep. You dictate the operational rhythm."
    },
    {
      question: "Who is your typical customer?",
      answer: "Mid-Market Agencies moving to decoupled production to expand margins, Production Studios scaling high-volume AI-native content pipelines, and Tech Companies looking to accelerate engineering roadmaps without the bloated overhead of LATAM EORs."
    },
    {
      question: "How much does it cost?",
      answer: "We charge one flat, all-inclusive monthly rate based on the role and experience level. Because you contract through our US LLC, there are no hidden cross-border compliance fees or EOR taxes. It is significantly more affordable than local hiring, allowing you to scale output and drastically expand your gross margins. Get in touch with Davis for specifics."
    },
    {
      question: "Can I visit the office?",
      answer: "Yes, though most clients don't need to. We handle the physical infrastructure—highly secure workspace, enterprise-grade internet, HR, and operational oversight. You manage the work remotely like any other embedded team."
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
            <span className="text-gray-500 text-sm">Embedded AI talent and cross-functional teams for Agencies, Studios, and Tech.</span>
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