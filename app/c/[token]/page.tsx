import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { CLIENTS, getPositionForCandidate } from '../_registry';
import AetherLightCraft from '../_clients/aether-lightcraft';
import CollierSimon from '../_clients/collier-simon';
import SiegelGupta from '../_clients/siegel-gupta';
import CandidateLyra01 from '../_clients/lyra-01';
import CandidateLyra02 from '../_clients/lyra-02';
import CandidateLyra03 from '../_clients/lyra-03';
import CandidateLyra04 from '../_clients/lyra-04';
import VisitBeacon from '../_visit-beacon';
import Tracker from '../../_tracker';
import IdentifyPrompt from '../../_identify-prompt';

// token -> content component. Keep in sync with _registry.tsx.
const COMPONENTS: Record<string, ComponentType> = {
  'f1e5691bd491': AetherLightCraft,
  'c5f085d1a2c0': CollierSimon,
  '86846dc081c6': SiegelGupta,
  '79bb44c4e853': CandidateLyra01,
  'ca86bfd06ed5': CandidateLyra02,
  'b5b49ff29fe5': CandidateLyra03,
  'b9d108639e10': CandidateLyra04,
};

export async function generateMetadata(
  { params }: { params: { token: string } }
): Promise<Metadata> {
  const c = CLIENTS[params.token];
  return {
    title: c ? `First Epic x ${c.name}` : 'First Epic',
    robots: { index: false, follow: false }, // gated client page - never index
  };
}

export default function ClientPage({ params }: { params: { token: string } }) {
  const Comp = COMPONENTS[params.token];
  if (!Comp) notFound();
  const client = CLIENTS[params.token]?.name ?? params.token;

  // Show an on-page "Back to dashboard" link only when this candidate belongs to
  // a position AND the viewer is a portal-authenticated client (has the client
  // cookie). Legacy per-token viewers (no dashboard) never see it.
  const position = getPositionForCandidate(params.token);
  const showBack =
    !!position &&
    cookies().get(`p_auth_${position.clientToken}`)?.value === 'granted';

  return (
    <>
      {/* Existing page-view beacon (unchanged): fires the owner-excluded,
          1h-throttled visit ping to /api/visit. */}
      <VisitBeacon client={client} token={params.token} />
      {/* Part C: granular click-stream (dwell, sections, deck/lightbox/video
          opens) to /api/track. Best-effort; cannot break the page. */}
      <Tracker token={params.token} surface="candidate" />
      {/* Part C: optional, dismissable self-identification (attribution only). */}
      <IdentifyPrompt token={params.token} surface="candidate" clientName={client} />
      {showBack && (
        <a
          href={`/p/${position!.clientToken}`}
          data-track="back-to-dashboard"
          className="fixed bottom-5 left-5 z-[100] inline-flex items-center gap-2 rounded-full border border-gray-700 bg-black/80 px-4 py-2.5 text-sm font-medium text-gray-200 shadow-lg backdrop-blur transition-colors hover:border-indigo-500 hover:text-white"
        >
          <span aria-hidden="true">&larr;</span> Back to dashboard
        </a>
      )}
      <Comp />
    </>
  );
}
