'use client'

import { useState } from 'react'
import type { CandidateDisplay } from '../c/_registry'

// A single, fixed-size candidate tile for the /p/<clientToken> dashboard grid.
// CLIENT component so the hero image can fall back gracefully at runtime: we
// use the registry `hero` path when present, and if it (or a candidate without
// one) fails to load we render a branded placeholder instead of crashing.
//
// The hook line comes from the registry (a short, clearly-generic one-liner,
// not a fabricated claim). A later pass can replace it with real per-candidate
// copy.
export default function CandidateTile({ card }: { card: CandidateDisplay }) {
  const [broken, setBroken] = useState(false)
  const showImage = Boolean(card.hero) && !broken

  const label = card.name ? `${card.codename} - ${card.name}` : card.codename

  return (
    <a
      href={`/c/${card.token}`}
      className="group block bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      {/* Uniform hero: every tile is the same aspect so the grid stays even. */}
      <div className="relative aspect-[4/3] bg-[#0a0a0a] overflow-hidden">
        {showImage ? (
          <img
            src={card.hero}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setBroken(true)}
          />
        ) : (
          // Branded placeholder - the codename over the FE gradient.
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/15 to-purple-500/10">
            <span className="text-2xl font-bold tracking-widest text-gray-400 group-hover:text-indigo-300 transition-colors">
              {card.codename}
            </span>
          </div>
        )}
        {/* Status chip - a neutral, honest state for now. */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-gray-100 text-xs font-medium rounded-full px-3 py-1 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          Ready for review
        </div>
      </div>
      <div className="px-5 py-4 border-t border-gray-800">
        <div className="font-bold text-base mb-0.5 truncate accent-gradient">{label}</div>
        {card.role ? (
          <div className="text-sm text-gray-400 truncate">{card.role}</div>
        ) : null}
        {card.hook ? (
          <p className="text-sm text-gray-500 leading-relaxed mt-2 line-clamp-2">{card.hook}</p>
        ) : null}
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
          View presentation
          <span aria-hidden="true">&rarr;</span>
        </div>
      </div>
    </a>
  )
}
