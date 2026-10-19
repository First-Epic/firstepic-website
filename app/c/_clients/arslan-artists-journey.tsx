// Arslan M. for The Artist's Journey (Wilfred Lee) - candidate presentation.
//
// Ported from the static source of truth:
//   FirstEpic-Sales/prospects/wilfred-lee/Arslan-for-Artists-Journey.html
// To re-apply copy edits from that HTML, edit ONLY the COPY block below (every
// client-visible string lives there). CSS is a straight copy of the source <style>.
// Posters/headshot were extracted from the source's base64 data URIs into
// public/c/76828a1e8865/assets/. Video URLs are the existing Vercel Blob files.

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const ASSETS = '/c/76828a1e8865/assets'
const BLOB = 'https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments'

// ---------------------------------------------------------------------------
// COPY - single place for all page text (mirror edits from the source HTML here)
// ---------------------------------------------------------------------------
const COPY = {
  navPrep: "Prepared exclusively for The Artist's Journey",
  pill: 'Candidate Presentation',
  name: 'Arslan M.',
  role: 'AI Filmmaker and Director',
  lede: "A director at heart who writes and directs episodic AI drama. We're sharing him as an option to keep in mind for your recreation footage, someone available to add to the team or step in whenever the motion side of the work needs more hands.",
  prepFor: "Wilfred Lee, The Artist's Journey",
  facts: [
    { v: '~8 years', l: 'in film and AI production' },
    { v: 'Director first', l: 'writes and directs episodic AI drama' },
    { v: 'Available now', l: 'open since October 1' },
  ],
  profileTitle: '/// Profile',
  profile: [
    "Arslan is a trained director with around eight years in production, spent largely as a creative director, who moved fully into AI filmmaking over the last two to three years. He's drawn to tools that let one person own the whole pipeline, and he takes a piece from the first idea through script, generation, edit, sound, and color himself.",
    "He works pre-production first, studying a character's background, age, and purpose before he generates anything, on the principle that he can't direct a character he doesn't know. He treats sound design, color grading, and shot-to-shot cutting as core craft, and he has led creative teams of up to 20.",
  ],
  skills: [
    'Directing and story development',
    'Pre-production and character work',
    'AI video generation',
    'AI image generation',
    'Character consistency',
    'Editing and color grading',
    'Sound design',
  ],
  tools: ['Veo 3.1', 'Runway', 'MidJourney', 'Nano Banana', 'LTX Studio', 'Premiere Pro'],
  fitTitle: '/// Why Arslan fits your recreation work',
  fitIntro: "Recreation footage lives or dies on cinematic motion: footage that moves with a natural rhythm, scenes built from several cuts and perspectives instead of a single clip, and smooth flow from one moment to the next. That is where Arslan's instincts sit.",
  fit: [
    { h: 'He thinks in shots, not single clips.', p: "Arslan is a trained director first. He treats shot-to-shot cutting as core craft, so he builds a moment the way a director covers a scene: several shots that work together, not one isolated clip. When he auditioned with us, he carried one recurring character across five scene shots, and around eight years across drama, documentary, commercial, corporate, and music video have trained him to plan coverage before he generates anything." },
    { h: 'He feels the rhythm and pacing of a scene.', p: 'His horror episode below lands a complete emotional arc in under a minute, with a setup, a turn, and a final beat. As a creative director on 100+ media campaigns, he learned to make a story work inside a fixed length. He treats sound design and color grading as part of the same craft, so the timing of a scene is something he directs, not something left to chance.' },
    { h: 'He holds characters and worlds consistent across episodes.', p: "Today he writes and directs episodic AI drama, where the same people and places have to read the same from one episode to the next. He works pre-production first, studying a character's background, age, and purpose before he generates a frame, and he uses LTX Studio to keep characters consistent. That audition held a deliberately consistent look: a cold blue-gray palette, sharp shadows, and a repeating motif." },
    { h: 'He is at home in a dark, cinematic tone.', p: 'His taste runs to realism and drama, where story and character lead. The horror and drama work below is restrained and moody rather than flashy, the same register as a serious documentary recreation.' },
  ],
  fitPlus: { h: 'He takes direction and works inside your pipeline.', p: "From late 2025 through September he delivered for another of our clients month after month, turning out a finished short episode most working days from a script and a character reference. He runs a current stack (Veo 3.1, Runway, MidJourney, Nano Banana, LTX Studio, Premiere) and plugs into the tools and review process a team already uses." },
  workTitle: '/// Selected Work',
  workIntro: 'Three pieces chosen for the qualities your footage calls for: performance, period detail, mood, and consistent characters.',
  films: [
    { src: `${BLOB}/ac7f9a3dbfba53de/collier-shortfilm-n.mp4.mp4`, poster: `${ASSETS}/short-film.jpg`, vertical: false, title: 'Short Film', kind: 'Narrative, 2:36', cap: 'A short film from Arslan carried by performance, period detail, and mood. Watch how the scene is built across shots and how long he lets each moment breathe.' },
    { src: `${BLOB}/2f1bf8ccbc072f52/collier-horror.mp4.mp4`, poster: `${ASSETS}/horror-episode.jpg`, vertical: false, title: 'Horror Series, Episode One', kind: 'Short episode, under a minute', cap: 'A grieving mother cooks for her son, five years after he vanished in the woods. A dark, restrained mood, with the same characters held steady from shot to shot.' },
    { src: `${BLOB}/f7af73fcf2dbd2f7/collier-stagKing.mp4.mp4`, poster: `${ASSETS}/stag-king.jpg`, vertical: true, title: 'The Stag King', kind: 'Vertical series episode', cap: "A hunter tracks a stag through the snow and finds something she didn't expect. An episodic micro-drama set in a cold, natural world." },
  ],
  award: "Recognition: Arslan took first place at Imagine Art's AI film competition, a shared win on a co-created film.",
  ctaLead: 'Next step with',
  ctaBefore: 'No decision needed now. If he sounds useful, just ',
  ctaStrong: 'reply to set up a short intro call',
  ctaAfter: ", and we'll find a time that suits you.",
  footer: "© 2026 First Epic. Confidential. Prepared exclusively for The Artist's Journey.",
}

// Straight copy of the source HTML <style> (body font resolves via next/font on the wrapper).
const CSS = `
  :root { color-scheme: dark; --bg:#0a0a0a; --card:#111; --line:#1f2937; --ink:#e5e7eb; --ink2:#9ca3af; --ink3:#6b7280; --indigo:#818cf8; }
  html{scrollbar-width:thin;scrollbar-color:#3a3a4a #0a0a0a}
  ::-webkit-scrollbar{width:11px;height:11px} ::-webkit-scrollbar-track{background:#0a0a0a}
  ::-webkit-scrollbar-thumb{background:#33333f;border-radius:8px;border:2px solid #0a0a0a}
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);-webkit-font-smoothing:antialiased;overflow-x:clip;line-height:1.6}
  .accent{background:linear-gradient(135deg,#6366f1 0%,#a855f7 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
  .wrap{max-width:72rem;margin:0 auto;padding:0 24px}
  @media(max-width:480px){.wrap{padding:0 16px}}
  nav{position:sticky;top:0;z-index:50;border-bottom:1px solid var(--line);background:rgba(10,10,10,.8);backdrop-filter:blur(12px)}
  nav .wrap{display:flex;justify-content:space-between;align-items:center;padding-top:16px;padding-bottom:16px}
  .brand{font-size:1.25rem;font-weight:700;letter-spacing:.1em;color:#fff;display:flex;align-items:center;gap:8px}
  .fe{background:#fff;color:#000;width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:900;border-radius:6px}
  .prep{font-size:.875rem;color:var(--ink2)} @media(max-width:640px){.prep{display:none}}
  header{padding-top:96px;padding-bottom:64px;border-bottom:1px solid rgba(31,41,55,.5)}
  .pill{display:inline-flex;align-items:center;padding:4px 12px;margin-bottom:32px;border-radius:9999px;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2);color:var(--indigo);font-size:.875rem;font-weight:500}
  .who{display:flex;align-items:center;gap:28px}
  .who img{width:128px;height:128px;border-radius:16px;object-fit:cover;border:1px solid #374151;box-shadow:0 10px 15px rgba(0,0,0,.4);flex-shrink:0}
  @media(max-width:640px){.who img{width:96px;height:96px} .who{gap:20px}}
  h1{font-size:clamp(2.75rem,8vw,4.5rem);font-weight:700;color:#fff;line-height:1;letter-spacing:-.02em;margin:0 0 4px}
  .role{font-size:clamp(1.4rem,3.5vw,1.875rem);font-weight:300;color:#d1d5db;margin:12px 0 0}
  .lede{font-size:1.25rem;color:var(--ink2);max-width:48rem;line-height:1.65;margin:32px 0 0}
  .prepline{margin-top:40px;padding-top:32px;border-top:1px solid rgba(31,41,55,.5);font-size:.875rem;font-weight:500;color:var(--ink3)}
  .prepline span{color:#d1d5db}
  .facts{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(31,41,55,.6);border-bottom:1px solid rgba(31,41,55,.6);margin-top:40px}
  .facts>div{padding:20px 32px} .facts>div:first-child{padding-left:0} .facts>div+div{border-left:1px solid rgba(31,41,55,.6)}
  .fv{font-size:1.25rem;font-weight:600;color:#fff} .fl{font-size:.75rem;color:var(--ink3);margin-top:4px;text-transform:uppercase;letter-spacing:.05em}
  @media(max-width:640px){.facts{grid-template-columns:1fr} .facts>div{padding:20px 0} .facts>div+div{border-left:0;border-top:1px solid rgba(31,41,55,.6)}}
  section.blk{padding-top:80px;padding-bottom:80px;border-bottom:1px solid rgba(31,41,55,.5)}
  h2{font-size:.75rem;font-weight:700;letter-spacing:.1em;color:var(--indigo);text-transform:uppercase;margin:0 0 32px}
  .prose{max-width:48rem} .prose p{font-size:1.125rem;color:#d1d5db;line-height:1.7;margin:0 0 20px}
  .intro{color:var(--ink2);max-width:48rem;margin:0 0 48px;line-height:1.65}
  .chiprow{margin-top:28px;display:flex;flex-wrap:wrap;align-items:center;gap:8px}
  .chiplbl{color:var(--ink3);font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;margin-right:4px}
  .chip{display:inline-block;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2);color:#a5b4fc;font-size:.75rem;border-radius:9999px;padding:4px 12px}
  .fitgrid{display:grid;grid-template-columns:1fr 1fr;gap:48px}
  @media(max-width:768px){.fitgrid{grid-template-columns:1fr}}
  .fit h3{font-size:1.25rem;font-weight:600;color:#fff;margin:0 0 12px} .fit p{color:var(--ink2);line-height:1.7;margin:0}
  .plus{margin-top:56px;padding-top:40px;border-top:1px solid rgba(31,41,55,.5);max-width:48rem}
  .films{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:start}
  @media(max-width:1024px){.films{grid-template-columns:1fr 1fr}} @media(max-width:640px){.films{grid-template-columns:1fr}}
  .film{background:var(--card);border:1px solid var(--line);border-radius:12px;overflow:hidden}
  .video{position:relative;aspect-ratio:16/9;background:#000}
  .video video{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#000;display:block}
  .video.vert{aspect-ratio:9/16;max-width:340px;margin:0 auto}
  .meta{padding:16px 20px 0;display:flex;flex-wrap:wrap;align-items:baseline;gap:8px}
  .ftitle{font-weight:700} .fkind{font-size:.75rem;color:var(--ink2)}
  .cap{padding:6px 20px 18px;margin:0;font-size:.875rem;color:#e5e7eb;line-height:1.6}
  .award{margin-top:32px;color:var(--ink2);max-width:48rem;font-size:.95rem}
  .cta{max-width:48rem;margin:0 auto;padding:96px 24px;text-align:center}
  .cta h2{font-size:clamp(1.9rem,4vw,2.25rem);font-weight:700;color:#fff;letter-spacing:normal;text-transform:none;margin:0 0 20px}
  .cta p{font-size:1.125rem;color:var(--ink2);line-height:1.65;margin:0} .cta strong{color:#e5e7eb;font-weight:500}
  footer{max-width:56rem;margin:0 auto;padding:64px 24px;text-align:center;color:#4b5563;font-size:.875rem}
`

export default function ArslanArtistsJourney() {
  const c = COPY
  return (
    <div className={inter.className} style={{ background: 'var(--bg)', color: 'var(--ink)', lineHeight: 1.6 }}>
      <style>{CSS}</style>

      <nav><div className="wrap">
        <div className="brand"><span className="fe">FE</span> FIRST EPIC</div>
        <div className="prep">{c.navPrep}</div>
      </div></nav>

      <header className="wrap">
        <div className="pill">{c.pill}</div>
        <div className="who">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${ASSETS}/headshot.jpg`} alt={c.name} />
          <div>
            <h1>{c.name}</h1>
            <p className="role">{c.role}</p>
          </div>
        </div>
        <p className="lede">{c.lede}</p>
        <div className="prepline">Prepared exclusively for <span>{c.prepFor}</span></div>
      </header>

      <section className="wrap">
        <div className="facts">
          {c.facts.map((f) => (
            <div key={f.v}><div className="fv">{f.v}</div><div className="fl">{f.l}</div></div>
          ))}
        </div>
      </section>

      <section id="sec-profile" className="wrap blk">
        <h2>{c.profileTitle}</h2>
        <div className="prose">
          {c.profile.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
        </div>
        <div className="chiprow"><span className="chiplbl">Skills</span>{c.skills.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
        <div className="chiprow"><span className="chiplbl">Tools</span>{c.tools.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
      </section>

      <section id="sec-fit" className="wrap blk">
        <h2>{c.fitTitle}</h2>
        <p className="intro">{c.fitIntro}</p>
        <div className="fitgrid">
          {c.fit.map((f) => (
            <div className="fit" key={f.h}><h3>{f.h}</h3><p>{f.p}</p></div>
          ))}
        </div>
        <div className="plus fit"><div className="fit"><h3>{c.fitPlus.h}</h3><p>{c.fitPlus.p}</p></div></div>
      </section>

      <section id="sec-work" className="wrap blk">
        <h2>{c.workTitle}</h2>
        <p className="intro">{c.workIntro}</p>
        <div className="films">
          {c.films.map((f) => (
            <div className="film" key={f.title}>
              <div className={f.vertical ? 'video vert' : 'video'}>
                <video controls preload="metadata" playsInline poster={f.poster}
                  data-media-title={f.title}
                  controlsList="nodownload noremoteplayback noplaybackrate">
                  <source src={f.src} type="video/mp4" />
                </video>
              </div>
              <div className="meta"><span className="ftitle accent">{f.title}</span><span className="fkind">{f.kind}</span></div>
              <p className="cap">{f.cap}</p>
            </div>
          ))}
        </div>
        <p className="award">{c.award}</p>
      </section>

      <section id="sec-next" className="cta">
        <h2>{c.ctaLead} <span className="accent">{c.name}</span></h2>
        <p>{c.ctaBefore}<strong>{c.ctaStrong}</strong>{c.ctaAfter}</p>
      </section>

      <footer>{c.footer}</footer>
    </div>
  )
}
