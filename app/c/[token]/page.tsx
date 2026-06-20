import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import { notFound } from 'next/navigation';
import { CLIENTS } from '../_registry';
import AetherLightCraft from '../_clients/aether-lightcraft';

// token -> content component. Keep in sync with _registry.tsx.
const COMPONENTS: Record<string, ComponentType> = {
  'f1e5691bd491': AetherLightCraft,
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
  return <Comp />;
}
