import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import { notFound } from 'next/navigation';
import { CLIENTS } from '../_registry';
import AetherLightCraft from '../_clients/aether-lightcraft';
import CollierSimon from '../_clients/collier-simon';
import SiegelGupta from '../_clients/siegel-gupta';
import CandidateLyra01 from '../_clients/lyra-01';
import CandidateLyra02 from '../_clients/lyra-02';
import CandidateLyra03 from '../_clients/lyra-03';
import VisitBeacon from '../_visit-beacon';

// token -> content component. Keep in sync with _registry.tsx.
const COMPONENTS: Record<string, ComponentType> = {
  'f1e5691bd491': AetherLightCraft,
  'c5f085d1a2c0': CollierSimon,
  '86846dc081c6': SiegelGupta,
  '79bb44c4e853': CandidateLyra01,
  'ca86bfd06ed5': CandidateLyra02,
  'b5b49ff29fe5': CandidateLyra03,
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
  return (
    <>
      <VisitBeacon client={client} token={params.token} />
      <Comp />
    </>
  );
}
