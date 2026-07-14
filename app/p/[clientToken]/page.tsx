import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { getPosition } from '../../c/_registry'
import CandidateTile from '../_candidate-tile'

// CLIENT DASHBOARD - /p/<clientToken>
// A per-POSITION landing page: one branded grid of the candidate presentations
// we're putting in front of a client. Each tile deep-links to the existing
// /c/<candidateToken> page (unchanged). Best-first ordering is registry order.
//
// AUTH: gated in middleware.ts. /p/<clientToken> requires the client cookie
// (p_auth_<clientToken>); one client login also unlocks that position's
// /c/<candidateToken> pages, while the existing per-candidate /c/ cookie gate is
// left untouched. This page itself needs no auth code - the gate lives upstream.

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export async function generateMetadata(
  { params }: { params: { clientToken: string } },
): Promise<Metadata> {
  const pos = getPosition(params.clientToken)
  return {
    title: pos ? `First Epic x ${pos.clientName}` : 'First Epic',
    robots: { index: false, follow: false }, // gated client surface - never index
  }
}

export default function ClientDashboard(
  { params }: { params: { clientToken: string } },
) {
  const pos = getPosition(params.clientToken)
  if (!pos) notFound()

  const candidates = pos.candidates

  return (
    <div
      className={`${inter.className} min-h-screen bg-[#0a0a0a] text-gray-200 antialiased selection:bg-indigo-500 selection:text-white overflow-x-clip`}
    >
      {/* .accent-gradient is page-local (matches the candidate pages' style). */}
      <style>{`
        .accent-gradient {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <nav className="border-b border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-widest text-white flex items-center gap-2">
            <span className="bg-white text-black w-8 h-8 inline-flex items-center justify-center text-sm font-black">
              FE
            </span>{' '}
            FIRST EPIC
          </div>
          <div className="text-sm text-gray-400 hidden sm:block">
            Prepared exclusively for {pos.clientName}
          </div>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-6 pt-20 pb-12 border-b border-gray-800/50">
        <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
          Candidate Shortlist
          <span className="text-gray-600">&nbsp;&middot;&nbsp;</span>
          <span className="text-gray-500">{candidates.length} candidates</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tight mb-4">
          {pos.position}
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
          The candidates we're putting forward for this role. Open any card for
          the full presentation, then just let Davis know how you'd like to
          proceed with each.
        </p>
        <div className="mt-8 pt-6 border-t border-gray-800/50 text-sm font-medium text-gray-500">
          Prepared exclusively for{' '}
          <span className="text-gray-300">{pos.clientName}</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-8">
          /// Candidates
        </h2>
        {candidates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {candidates.map((card) => (
              <CandidateTile key={card.token} card={card} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No candidates to show yet.</p>
        )}
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-600 text-sm">
          &copy; 2026 First Epic - Confidential. Prepared exclusively for{' '}
          {pos.clientName}.
        </p>
      </footer>
    </div>
  )
}
