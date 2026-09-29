// Collier.Simon AI Filmmaking Studio - v2 (Arslan-led).
//
// MEDIA is the single place to drop in video URLs + posters. Any entry with
// src: null renders a clearly marked PLACEHOLDER tile (must never ship live).
// vertical: true = 9:16 source; the tile pillarboxes it cleanly (objectFit contain).

type Media = { src: string | null; poster: string | null; vertical?: boolean };

const BLOB = 'https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments';
const ASSETS = '/c/f106140cf026/assets';

const MEDIA: Record<string, Media> = {
  // Arslan's work (existing blob URL reused for the short film)
  shortfilm: { src: `${BLOB}/ac7f9a3dbfba53de/collier-shortfilm-n.mp4.mp4`, poster: `${ASSETS}/shortfilm.jpg` },
  horror: { src: `${BLOB}/2f1bf8ccbc072f52/collier-horror.mp4.mp4`, poster: `${ASSETS}/horror.jpg` },
  stagKing: { src: `${BLOB}/f7af73fcf2dbd2f7/collier-stagKing.mp4.mp4`, poster: `${ASSETS}/stagKing.jpg`, vertical: true },
  xpotential: { src: `${BLOB}/6a3ac3260eb6d594/collier-xpotential.mp4.mp4`, poster: `${ASSETS}/xpotential.jpg` },

  // More from our AI filmmakers
  standoff: { src: `${BLOB}/f2a98f3b8d432c71/collier-standoff-n.mp4.mp4`, poster: `${ASSETS}/ad-standoff.jpg` },
  fastFoodSizzle: { src: `${BLOB}/493a9a700849dcb7/collier-fastFoodSizzle.mp4.mp4`, poster: `${ASSETS}/fastFoodSizzle.jpg` },
  crumble: { src: `${BLOB}/440d8a6909250a06/collier-crumble.mp4.mp4`, poster: `${ASSETS}/crumble.jpg`, vertical: true },
  kurkure: { src: `${BLOB}/99f565505afedd2d/collier-kurkure.mp4.mp4`, poster: `${ASSETS}/kurkure.jpg` },
  goldSnow: { src: `${BLOB}/bb2afe1319b1e245/collier-goldSnow.mp4.mp4`, poster: `${ASSETS}/goldSnow.jpg` },
  lightbulb: { src: `${BLOB}/65ddef3711a848b1/collier-lightbulb.mp4.mp4`, poster: `${ASSETS}/lightbulb.jpg` },
  haval: { src: `${BLOB}/6b41eb447cd9b3e7/collier-haval-n.mp4.mp4`, poster: `${ASSETS}/ad-havel.jpg` },
  kiaSorento: { src: `${BLOB}/6fe60376e3d6fb44/collier-kiaSorento.mp4.mp4`, poster: `${ASSETS}/kiaSorento.jpg` },
  chalDilMerey: { src: `${BLOB}/a6d6ccf479129df3/collier-chaldilmerey-n.mp4.mp4`, poster: `${ASSETS}/mv-chaldilmerey.jpg` },
};

const FILMS: { key: string; title: string; kind: string; cap: string }[] = [
  { key: 'shortfilm', title: 'AI Short Film', kind: 'Narrative', cap: 'A short film carried by performance, period detail, and mood, made end to end with AI by Arslan, from first concept to final cut.' },
  { key: 'horror', title: 'Horror Series, Episode One', kind: 'Short episode, under a minute', cap: 'A grieving mother cooks for her son, five years after he vanished in the woods.' },
  { key: 'stagKing', title: 'The Stag King', kind: 'Vertical series episode', cap: "A hunter tracks a stag through the snow and finds something she didn't expect." },
  { key: 'xpotential', title: 'Xpotential', kind: 'Brand film', cap: 'A brand and recruiting film for a dental-services company, walking through its services and its AI voice assistant.' },
];

const TILES: { key: string; title: string; kind: string }[] = [
  { key: 'standoff', title: 'The Standoff', kind: 'Concept ad' },
  { key: 'fastFoodSizzle', title: 'Fast Food Sizzle', kind: 'Food' },
  { key: 'crumble', title: 'Crumble', kind: 'Food' },
  { key: 'kurkure', title: 'Kurkure', kind: 'Snack' },
  { key: 'goldSnow', title: 'Gold Snow', kind: 'Product' },
  { key: 'lightbulb', title: 'Lightbulb', kind: 'Claymation' },
  { key: 'haval', title: 'Haval', kind: 'Vehicle' },
  { key: 'kiaSorento', title: 'Kia Sorento', kind: 'Vehicle' },
  { key: 'chalDilMerey', title: 'Chal Dil Merey', kind: 'Music video' },
];

const FIT: { h: string; p: string }[] = [
  { h: "He brings the idea, not just the hands.", p: "Years as a creative director mean Arslan starts with the objective: who it's for, what they should feel, and what they should do next. Then he builds the character and story around it before he generates a single frame. You'll see it in the Xpotential film below, a brand and recruiting film that walks through what the company does and why you'd want to work there." },
  { h: "He's made ads for years, and he tells a story fast.", p: "He's directed 100+ campaigns, including commercials for real estate, restaurant, and consumer brands, and healthcare marketing that's reached millions of viewers. The horror episode below shows the storyteller's side of the same skill: a complete emotional arc in under a minute." },
  { h: "He can lead a team and still execute.", p: "He's led an agency creative team of 20 across eight real estate developments, and most recently headed a team of screenwriters, designers, videographers, editors, and photographers. He's also a one-person pipeline who can take a piece from concept to final cut on his own. He could direct your production editors and step in on the work himself." },
  { h: "He has both sides: ad discipline and a storyteller's instincts.", p: "It's rare to find both in one person. The four pieces below cover an AI short film, a short horror episode, a vertical series episode for mobile, and a brand and recruiting film for a dental-services company." },
];

function Vid({ k, title }: { k: string; title: string }) {
  const m = MEDIA[k];
  if (!m || !m.src) {
    return (
      <div className="ph-media" data-placeholder={k}>
        <span>PLACEHOLDER</span>
        <code>MEDIA.{k}</code>
      </div>
    );
  }
  return (
    <video controls preload="metadata" playsInline poster={m.poster ?? undefined}
      data-media-title={title}
      controlsList="nodownload noremoteplayback noplaybackrate"
      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
      <source src={m.src} type="video/mp4" />
    </video>
  );
}

export default function CollierSimonStudio() {
  return (
    <div>
      <style>{`
  :root{--bg:#0a0a0a;--card:#111214;--line:#262626;--line2:#1c1c1c;--ink:#e8eaed;--ink2:#9aa2ac;--ink3:#6b7280;
    --indigo:#818cf8;--indigo2:#6366f1;--purple:#a855f7;--green:#6ee7b7;--amber:#fcd34d;
    --pad:clamp(72px,9vw,104px);}
  *{box-sizing:border-box;}html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
    -webkit-font-smoothing:antialiased;line-height:1.65;font-size:16px;}
  ::selection{background:var(--indigo2);color:#fff;}
  .accent{background:linear-gradient(135deg,#6366f1 0%,#a855f7 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;}
  .wrap{max-width:1080px;margin:0 auto;padding:0 24px;}
  a{color:var(--indigo);text-decoration:none;}
  img{max-width:100%;display:block;}
  nav{position:sticky;top:0;z-index:50;backdrop-filter:blur(12px);background:rgba(10,10,10,.82);border-bottom:1px solid var(--line);}
  nav .wrap{display:flex;align-items:center;justify-content:space-between;height:62px;gap:16px;}
  .brand{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.14em;font-size:.72rem;text-transform:uppercase;white-space:nowrap;}
  .fe{width:25px;height:25px;display:grid;place-items:center;background:#fff;color:#0a0a0a;border-radius:6px;font-weight:900;font-size:.7rem;}
  .prep{color:var(--ink3);font-size:.76rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .lbl{font-size:.7rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--indigo);margin:0 0 24px;}
  section{padding:calc(var(--pad)*.62) 0;border-bottom:1px solid rgba(38,38,38,.55);}
  section.spaced{padding-top:calc(var(--pad)*1.15);}
  h1{font-size:clamp(2.7rem,6.2vw,4.6rem);line-height:1.0;letter-spacing:-.035em;font-weight:800;margin:0 0 10px;}
  .role{font-size:clamp(1.3rem,2.7vw,1.85rem);font-weight:300;margin:0 0 22px;line-height:1.15;}
  .headline{font-size:clamp(1.08rem,1.6vw,1.22rem);color:var(--ink2);max-width:62ch;margin:0 0 16px;}
  .who{color:var(--ink3);font-size:.96rem;max-width:62ch;margin:0 0 26px;}
  .pill{display:inline-block;font-size:.7rem;font-weight:600;letter-spacing:.06em;color:#c7d2fe;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.22);border-radius:999px;padding:6px 12px;margin-bottom:22px;}
  .prep-line{border-top:1px solid var(--line);padding-top:16px;color:var(--ink3);font-size:.84rem;max-width:520px;}
  .hero{padding-top:clamp(48px,7vw,76px);padding-bottom:clamp(40px,5vw,56px);}
  .herorow{display:flex;align-items:center;gap:clamp(22px,3vw,32px);margin:0 0 22px;}
  .avatar{width:96px;height:96px;border-radius:16px;object-fit:cover;flex:none;border:1px solid #374151;box-shadow:0 10px 26px rgba(0,0,0,.45);}
  .avatar.mono{display:grid;place-items:center;font-weight:800;font-size:2.2rem;letter-spacing:.02em;color:#fff;
    background:linear-gradient(135deg,#6366f1 0%,#a855f7 100%);border-color:rgba(129,140,248,.5);}
  @media(min-width:768px){.avatar{width:128px;height:128px;}.avatar.mono{font-size:2.9rem;}}
  h3{font-size:1.1rem;font-weight:700;margin:0 0 10px;}
  p{margin:0 0 14px;color:var(--ink2);}.prose{max-width:64ch;}
  .stats{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:0 0 26px;}
  @media(min-width:720px){.stats{grid-template-columns:repeat(4,1fr);}}
  .stat{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 18px;}
  .stat .n{font-size:1.55rem;font-weight:800;letter-spacing:-.02em;line-height:1.1;}
  .stat .l{font-size:.74rem;color:var(--ink3);margin-top:5px;line-height:1.4;}
  .video{position:relative;border:1px solid var(--line);border-radius:16px;overflow:hidden;aspect-ratio:16/9;margin:8px 0 12px;background:#000;}
  .cap{color:var(--ink3);font-size:.85rem;margin:0 0 28px;max-width:70ch;}
  .dgrid{display:grid;grid-template-columns:1fr;gap:16px;}@media(min-width:720px){.dgrid{grid-template-columns:1fr 1fr;}}
  .card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:22px 24px;transition:border-color .18s,transform .18s;}
  .card:hover{border-color:rgba(99,102,241,.45);transform:translateY(-2px);}
  .card .ct{font-weight:700;margin-bottom:7px;line-height:1.4;}.card p{font-size:.9rem;margin:0;}
  .codeview{grid-column:1/-1;border:1px solid rgba(99,102,241,.4);border-radius:16px;overflow:hidden;
    background:linear-gradient(135deg,rgba(99,102,241,.08),transparent 55%),var(--card);transition:border-color .18s;}
  .codeview:hover{border-color:rgba(129,140,248,.65);}
  .codeview .top{display:flex;align-items:center;gap:16px;padding:22px 24px;}
  .cv-arrow{width:46px;height:46px;border-radius:12px;background:rgba(99,102,241,.2);border:1px solid rgba(129,140,248,.5);display:grid;place-items:center;color:#fff;font-size:1.2rem;flex:none;}
  .codeview .top .ct{font-weight:700;font-size:1.06rem;margin-bottom:4px;}
  .codeview .top p{margin:0;font-size:.9rem;max-width:64ch;}
  .cv-stretch{display:block;text-decoration:none;color:inherit;}
  .cv-stretch::after{content:"";position:absolute;inset:0;z-index:0;}
  .filestrip{display:flex;border-top:1px solid var(--line);background:#0c0d0f;overflow-x:auto;scrollbar-width:thin;position:relative;z-index:1;}
  .filestrip span,.filestrip a{padding:10px 14px;font-family:"SF Mono",Menlo,Consolas,monospace;font-size:.75rem;color:var(--ink3);border-right:1px solid var(--line2);white-space:nowrap;text-decoration:none;}
  .filestrip a:hover{color:#c7d2fe;background:rgba(99,102,241,.16);}
  .filestrip span.on,.filestrip a.on{color:#a5b4fc;background:rgba(99,102,241,.1);}
  .fitgrid{display:grid;grid-template-columns:1fr;gap:18px;}@media(min-width:840px){.fitgrid{grid-template-columns:repeat(3,1fr);}}
  .fit{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:26px;display:flex;flex-direction:column;}
  .badge{align-self:flex-start;font-size:.64rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase;border-radius:6px;padding:5px 9px;margin-bottom:15px;}
  .b-proven{color:var(--green);background:rgba(110,231,183,.1);border:1px solid rgba(110,231,183,.28);}
  .b-credible{color:var(--indigo);background:rgba(129,140,248,.1);border:1px solid rgba(129,140,248,.28);}
  .b-ramp{color:var(--amber);background:rgba(252,211,77,.1);border:1px solid rgba(252,211,77,.28);}
  .fit>p{font-size:.92rem;}
  .light{margin-top:auto;padding-top:14px;border-top:1px dashed var(--line);font-size:.9rem;}
  .light .t{color:var(--ink);font-weight:600;}.light .r{color:var(--ink2);}
  .twocol{display:grid;grid-template-columns:1fr;gap:18px;}@media(min-width:840px){.twocol{grid-template-columns:1fr 1.05fr;}}
  .panel{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:28px;}
  .panel .ph{font-size:.68rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--ink3);margin:0 0 22px;}
  .exp{border-left:2px solid rgba(129,140,248,.5);padding:0 0 0 18px;margin:0 0 20px;}
  .exp:last-child{margin-bottom:0;}
  .exp .tag{display:inline-block;font-size:.58rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#a5b4fc;background:rgba(99,102,241,.12);border-radius:5px;padding:2px 7px;margin-bottom:7px;}
  .exp .r{color:var(--ink);font-weight:600;font-size:.98rem;line-height:1.4;}
  .exp .d{color:var(--ink3);font-size:.86rem;margin-top:3px;line-height:1.5;}
  .group{margin:0 0 20px;}.group:last-child{margin-bottom:0;}
  .group .gl{font-size:.64rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#a5b4fc;margin:0 0 10px;}
  .chip{display:inline-block;font-size:.8rem;color:var(--ink);background:#0f1012;border:1px solid var(--line);border-radius:999px;padding:5px 12px;margin:0 8px 9px 0;}
  .cta{max-width:640px;margin:0 auto;text-align:center;padding:clamp(40px,6vw,64px) 0;}
  .cta h2{font-size:clamp(1.7rem,3.5vw,2.1rem);margin:0 0 16px;font-weight:700;letter-spacing:-.02em;}
  .cta p{color:var(--ink2);max-width:56ch;margin:0 auto;}
  footer{color:var(--ink3);font-size:.79rem;text-align:center;padding:32px 0 48px;}
  .films{display:grid;grid-template-columns:1fr;gap:34px;margin-top:6px;}
  .film-meta{display:flex;justify-content:space-between;align-items:baseline;gap:16px;margin:18px 0 8px;flex-wrap:wrap;}
  .film-title{font-size:1.28rem;font-weight:700;letter-spacing:-.01em;color:var(--ink);}
  .film-kind{font-size:.74rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink3);}
  .adgrid{display:grid;grid-template-columns:1fr;gap:16px;margin-top:8px;}
  @media(min-width:620px){.adgrid{grid-template-columns:1fr 1fr;}}
  @media(min-width:980px){.adgrid{grid-template-columns:1fr 1fr 1fr;}}
  .adtile{background:var(--card);border:1px solid var(--line);border-radius:14px;overflow:hidden;}
  .adtile .thumb{position:relative;aspect-ratio:16/9;background:#000;}
  .adtile figcaption{margin:0;padding:12px 14px;display:flex;justify-content:space-between;align-items:baseline;gap:10px;}
  .adtile .an{font-weight:600;color:var(--ink);font-size:.95rem;}
  .adtile .ak{font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink3);white-space:nowrap;}
  .who-row{display:flex;align-items:center;gap:28px;margin:0 0 26px;}
  .headshot{width:140px;height:140px;border-radius:50%;object-fit:cover;object-position:center 30%;flex:none;border:1px solid #374151;box-shadow:0 8px 20px rgba(0,0,0,.4);}
  @media(min-width:768px){.headshot{width:200px;height:200px;}}
  .facts{margin-top:22px;}@media(min-width:720px){.facts{grid-template-columns:repeat(3,1fr);}}
  .stat .f{font-size:1rem;font-weight:700;color:var(--ink);line-height:1.4;}
  .fitprose{max-width:64ch;}
  .fitblock{margin:0 0 26px;}.fitblock:last-child{margin-bottom:0;}
  .fitblock h3{margin-bottom:6px;}
  .video.vert{aspect-ratio:16/9;}
  @media(max-width:619px){.video.vert{aspect-ratio:9/16;width:min(100%,calc(78vh * 9 / 16));margin-left:auto;margin-right:auto;}}
  .ph-media{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;
    background:repeating-linear-gradient(45deg,#15161a 0 12px,#101114 12px 24px);border:2px dashed rgba(252,211,77,.55);border-radius:inherit;}
  .ph-media span{font-size:.72rem;font-weight:800;letter-spacing:.2em;color:var(--amber);}
  .ph-media code{font-family:"SF Mono",Menlo,Consolas,monospace;font-size:.78rem;color:var(--ink2);}
`}</style>
<nav><div className="wrap"><div className="brand"><span className="fe">FE</span> First Epic</div><div className="prep">Prepared exclusively for Collier.Simon</div></div></nav>

<header className="wrap hero">
  <span className="pill">AI Filmmaking &middot; Capabilities</span>
  <h1>Story first.</h1>
  <div className="role accent">AI filmmaking for Collier.Simon</div>
  <p className="headline">{"Meet Arslan, an AI filmmaker who could join your team remotely, plus a range of ad work from other filmmakers we've sourced, across food, vehicles, product, and animation."}</p>
  <div className="prep-line">Prepared exclusively for Matt, Julien, Tucker, and the Collier.Simon team.</div>
</header>

<section className="wrap">
  <div className="who-row">
    <img className="headshot" src="/c/f106140cf026/assets/arslan.jpg" alt="Arslan M." width={200} height={200} />
    <p className="lbl" style={{ margin: 0 }}>/// Arslan M., AI Filmmaker</p>
  </div>
  <p className="prose">{"Arslan brings a rare mix. He's spent eight years as a creative director making marketing films for brands and agencies, and today he writes and directs episodic AI drama. He's directed commercials for real estate, restaurant, and consumer brands, plus corporate and healthcare clients, led an agency creative team of 20, and most recently headed a team of screenwriters, designers, videographers, and editors. His films have won festival awards. He takes a piece from the first idea through script, generation, edit, sound, and color himself. He's available to join your team October 1."}</p>
  <div className="stats facts">
    <div className="stat"><div className="f">8 years directing marketing and brand films</div></div>
    <div className="stat"><div className="f">100+ brand campaigns</div></div>
    <div className="stat"><div className="f">Available October 1</div></div>
  </div>

  <p className="lbl" style={{ marginTop: '44px' }}>{"/// Why he fits what you're looking for"}</p>
  <div className="fitprose">
    {FIT.map((b) => (
      <div className="fitblock" key={b.h}>
        <h3>{b.h}</h3>
        <p className="prose">{b.p}</p>
      </div>
    ))}
  </div>

  <p className="lbl" style={{ marginTop: '44px' }}>/// His work</p>
  <div className="films">
    {FILMS.map((f) => (
      <div className="film" key={f.key}>
        <div className={MEDIA[f.key]?.vertical ? 'video vert' : 'video'}><Vid k={f.key} title={f.title} /></div>
        <div className="film-meta"><span className="film-title accent">{f.title}</span><span className="film-kind">{f.kind}</span></div>
        <p className="cap">{f.cap}</p>
      </div>
    ))}
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// More AI filmmakers we've sourced</p>
  <p className="prose" style={{ marginBottom: '24px' }}>{"A range of ad work from other filmmakers we've sourced, across food, vehicles, product, and animation. These are concept pieces, not commercials made for or sanctioned by the brands shown. The brands appear only to demonstrate what these makers can produce. A few are older, where small defects would be cleaned up in generation or a quick post pass. They're here to show range and the quality bar."}</p>
  <div className="adgrid">
    {TILES.map((t) => (
      <figure className="adtile" key={t.key}>
        <div className={MEDIA[t.key]?.vertical ? 'thumb vert' : 'thumb'}><Vid k={t.key} title={`${t.title} (${t.kind.toLowerCase()})`} /></div>
        <figcaption><span className="an">{t.title}</span><span className="ak">{t.kind}</span></figcaption>
      </figure>
    ))}
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Two ways to work with us</p>
  <div className="twocol">
    <div className="panel"><div className="ph">Option one</div>
      <h3>Full-stack AI filmmakers</h3>
      <p>We source full-stack AI filmmakers who join your team remotely, each a one-person pipeline covering the whole job: pre-production (concept, script, and storyboard), generation, and post (editing, sound design, color, and final delivery). One maker does what a whole team usually would, working to your direction, exactly like the work above.</p>
    </div>
    <div className="panel"><div className="ph">Option two</div>
      <h3>A studio pod</h3>
      <p>A coordinated group joins your team remotely, with one of them as the point person, and your team directs the work. The pod can run as full-stack makers working in parallel, or split the pipeline into specialized roles, one person on pre-production, another on generation, another on post and final cut, so more gets done at once. You can scale up or down as your slate changes.</p>
    </div>
  </div>
</section>

<section><div className="cta"><h2 className="accent">Collier.Simon&#x27;s AI filmmaking studio</h2>
  <p>This could be where your studio begins, whether you start with a single filmmaker or a full pod. The same caliber of work you just watched, talent we source and vet, working remotely as part of your team, directed by you and backed by our infrastructure, built to grow at the pace you set.</p></div></section>

<footer>&copy; 2026 First Epic. Confidential and proprietary. Prepared exclusively for Collier.Simon.</footer>
    </div>
  );
}
