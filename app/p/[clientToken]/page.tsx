import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { getPosition, getHub } from '../../c/_registry'
import CandidateTile from '../_candidate-tile'
import Tracker from '../../_tracker'
import PositionChallenge from '../_position-challenge'

// Positions that carry a Workflow-Challenge section under the candidate grid. The
// section's decks/assets are position-specific, so it renders only for a listed
// clientToken (CARINA today). Add a token here when a position gets its own challenge
// island + assets under public/p/<clientToken>/assets/.
const POSITIONS_WITH_CHALLENGE = new Set<string>(['a6dfec43b882'])

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
  // Hub landing pages carry their own neutral title; positions keep theirs.
  const hub = getHub(params.clientToken)
  if (hub) {
    return {
      title: 'Candidate review - First Epic',
      robots: { index: false, follow: false }, // gated client surface - never index
    }
  }
  const pos = getPosition(params.clientToken)
  return {
    title: pos ? `First Epic x ${pos.clientName}` : 'First Epic',
    robots: { index: false, follow: false }, // gated client surface - never index
  }
}

export default function ClientDashboard(
  { params }: { params: { clientToken: string } },
) {
  // HUB VIEW: if this token is a hub, render the multi-position landing page and
  // return before the position/candidate path. The hub is gated identically in
  // middleware (p_auth_<hubToken> cookie); a hub login also set each child
  // position cookie, so the position links below never re-prompt.
  const hub = getHub(params.clientToken)
  if (hub) {
    return (
      <div
        className={`${inter.className} min-h-screen bg-[#0a0a0a] text-gray-200 antialiased selection:bg-indigo-500 selection:text-white overflow-x-clip`}
      >
        {/* Click-stream tracking for the hub surface. Best-effort; cannot break the page. */}
        <Tracker token={hub.hubToken} surface="dashboard" />
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
              Prepared exclusively for {hub.clientName}
            </div>
          </div>
        </nav>

        <header className="max-w-6xl mx-auto px-6 pt-20 pb-12 border-b border-gray-800/50">
          <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
            Open positions
            <span className="text-gray-600">&nbsp;&middot;&nbsp;</span>
            <span className="text-gray-500">{hub.positions.length} live</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tight mb-4">
            Candidate review
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
            Your open roles with First Epic, each with a curated shortlist ready
            for review. Open a position to see the candidates, then just let
            Davis know how you'd like to proceed.
          </p>
          <div className="mt-8 pt-6 border-t border-gray-800/50 text-sm font-medium text-gray-500">
            Prepared exclusively for{' '}
            <span className="text-gray-300">{hub.clientName}</span>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-16" data-section="hub-positions">
          <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-8">
            /// Positions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hub.positions.map((p) => (
              <a
                key={p.clientToken}
                href={`/p/${p.clientToken}`}
                data-track="position"
                data-track-token={p.clientToken}
                data-track-label={`${p.codename} - ${p.role}`}
                className="group flex flex-col bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-indigo-500/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">
                  Open position
                </div>
                <div className="text-2xl font-bold text-white leading-tight mb-6">
                  {p.role}
                </div>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {p.avatars.map((a) => (
                        <img
                          key={a}
                          src={`/p/${hub.hubToken}/assets/${a}`}
                          alt=""
                          className="w-8 h-8 rounded-full object-cover border-2 border-[#111]"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {p.count} finalist{p.count !== 1 ? 's' : ''} ready
                    </span>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  View shortlist
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </a>
            ))}

            {hub.comingSoon.map((c) => (
              <div
                key={c.codename}
                className="flex flex-col bg-[#0d0d0d] border border-dashed border-gray-800 rounded-xl p-6 opacity-60"
              >
                <div className="text-xs font-bold tracking-widest text-gray-600 uppercase mb-3">
                  Coming soon
                </div>
                <div className="text-2xl font-bold text-gray-500 leading-tight mb-6">
                  {c.role}
                </div>
                <div className="mt-auto pt-4 border-t border-gray-800/60 text-sm text-gray-600">
                  Shortlist in progress
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2026 First Epic - Confidential. Prepared exclusively for{' '}
            {hub.clientName}.
          </p>
        </footer>
      </div>
    )
  }

  const pos = getPosition(params.clientToken)
  if (!pos) notFound()

  const candidates = pos.candidates

  return (
    <div
      className={`${inter.className} min-h-screen bg-[#0a0a0a] text-gray-200 antialiased selection:bg-indigo-500 selection:text-white overflow-x-clip`}
    >
      {/* Part C: click-stream + optional self-identify on the dashboard surface.
          Best-effort; cannot break the page. */}
      <Tracker token={pos.clientToken} surface="dashboard" clientToken={pos.clientToken} />
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

      <main className="max-w-6xl mx-auto px-6 py-16" data-section="dashboard-candidates">
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

      {/* Workflow-Challenge section (approved position_page.py design): the exact
          materials every candidate received, each opening in the shared deck viewer /
          lightbox (arrows + swipe). Only for positions that have their own challenge. */}
      {POSITIONS_WITH_CHALLENGE.has(pos.clientToken) && <PositionChallenge />}

      <footer className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-600 text-sm">
          &copy; 2026 First Epic - Confidential. Prepared exclusively for{' '}
          {pos.clientName}.
        </p>
      </footer>
    </div>
  )
}
