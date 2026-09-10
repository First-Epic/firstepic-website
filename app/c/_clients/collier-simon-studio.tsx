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
`}</style>
<nav><div className="wrap"><div className="brand"><span className="fe">FE</span> First Epic</div><div className="prep">Prepared exclusively for Collier.Simon</div></div></nav>

<header className="wrap hero">
  <span className="pill">AI Filmmaking &middot; Capabilities</span>
  <h1>Story first.</h1>
  <div className="role accent">AI filmmaking for Collier.Simon</div>
  <p className="headline">The AI-film talent we source and place for you. Two original films, each made end to end by a single filmmaker, plus a range of ad and music-video work from finalists we&#x27;ve sourced for other clients.</p>
  <div className="prep-line">Prepared exclusively for Matt and the Collier.Simon team.</div>
</header>

<section className="wrap">
  <p className="lbl">/// Original films</p>
  <p className="prose">These aren&#x27;t ad samples. They&#x27;re here to show the level of craft and storytelling the filmmakers we place can reach, each working solo with AI from first concept to final cut. Watch them the way your clients would.</p>
  <div className="films">
    <div className="film">
      <div className="video">
        <video controls preload="metadata" playsInline poster="/c/f106140cf026/assets/shortfilm.jpg"
          data-media-title="Award-Winning Short Film"
          controlsList="nodownload noremoteplayback noplaybackrate"
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
          <source src="https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments/ac7f9a3dbfba53de/collier-shortfilm-n.mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="film-meta"><span className="film-title">Award-Winning Short Film</span><span className="film-kind">Narrative</span></div>
      <p className="cap">A short narrative film carried by performance, period detail, and mood. One filmmaker, concept through final cut.</p>
      <div><span className="chip">Narrative</span><span className="chip">One full-stack filmmaker</span><span className="chip">Concept to final cut</span></div>
    </div>
    <div className="film">
      <div className="video">
        <video controls preload="metadata" playsInline poster="/c/f106140cf026/assets/project-horizon.jpg"
          data-media-title="Project Horizon (Trailer)"
          controlsList="nodownload noremoteplayback noplaybackrate"
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
          <source src="https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments/79b016ecb38e59e2/collier-projecthorizon-n.mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="film-meta"><span className="film-title">Project Horizon (Trailer)</span><span className="film-kind">Trailer</span></div>
      <p className="cap">A cinematic trailer moving across sci-fi worlds, action, and character. The same craft, a different genre and register.</p>
      <div><span className="chip">Trailer</span><span className="chip">Sci-fi and action</span><span className="chip">One full-stack filmmaker</span></div>
    </div>
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// The two filmmakers</p>
  <p className="prose">Each film was made by one filmmaker using their own AI credits. What you&#x27;re seeing already stands on its own, and there&#x27;s clear room to push it further with a professional credits budget behind the work. The quality is theirs. Our job, which you&#x27;ve already experienced with your video editor and motion designer placement, is to find that filmmaker, vet them, and give them the infrastructure and support to do their best work for you.</p>
  <p className="prose" style={{marginTop: '16px', color: 'var(--ink)'}}>Both filmmakers whose work you&#x27;re seeing here are available now for a trial project, and full time beginning October 1 (subject to change).</p>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Ad work and a music video</p>
  <p className="prose" style={{marginBottom: '24px'}}>Beyond original films, here are concept ads and a music video from finalists we&#x27;ve sourced for other clients. These are concept pieces, not commercials made for or sanctioned by the brands shown. The brands appear only to demonstrate what these makers can produce. A few are older, where small defects would be cleaned up in generation or a quick post pass. They&#x27;re here to show range and the quality bar.</p>
  <div className="adgrid">
    <figure className="adtile">
      <div className="thumb">
        <video controls preload="metadata" playsInline poster="/c/f106140cf026/assets/ad-standoff.jpg"
          data-media-title="The Standoff (concept ad)"
          controlsList="nodownload noremoteplayback noplaybackrate"
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
          <source src="https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments/f2a98f3b8d432c71/collier-standoff-n.mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <figcaption><span className="an">The Standoff</span><span className="ak">Concept ad</span></figcaption>
    </figure>
    <figure className="adtile">
      <div className="thumb">
        <video controls preload="metadata" playsInline poster="/c/f106140cf026/assets/ad-havel.jpg"
          data-media-title="Haval (concept ad)"
          controlsList="nodownload noremoteplayback noplaybackrate"
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
          <source src="https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments/6b41eb447cd9b3e7/collier-haval-n.mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <figcaption><span className="an">Haval</span><span className="ak">Concept ad</span></figcaption>
    </figure>
    <figure className="adtile">
      <div className="thumb">
        <video controls preload="metadata" playsInline poster="/c/f106140cf026/assets/ad-calvinklein.jpg"
          data-media-title="Calvin Klein (concept ad)"
          controlsList="nodownload noremoteplayback noplaybackrate"
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
          <source src="https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments/d842d9b62afd1033/collier-calvinklein-n.mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <figcaption><span className="an">Calvin Klein</span><span className="ak">Concept ad</span></figcaption>
    </figure>
    <figure className="adtile">
      <div className="thumb">
        <video controls preload="metadata" playsInline poster="/c/f106140cf026/assets/ad-meowlicious.jpg"
          data-media-title="Meowlicious (concept ad)"
          controlsList="nodownload noremoteplayback noplaybackrate"
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
          <source src="https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments/def161ebaf6ab41a/collier-meowlicious-n.mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <figcaption><span className="an">Meowlicious</span><span className="ak">Concept ad</span></figcaption>
    </figure>
    <figure className="adtile">
      <div className="thumb">
        <video controls preload="metadata" playsInline poster="/c/f106140cf026/assets/ad-balloonplanet.jpg"
          data-media-title="Balloon Planet (concept ad)"
          controlsList="nodownload noremoteplayback noplaybackrate"
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
          <source src="https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments/4d8631ed8c0ed9fc/collier-balloonplanet-n.mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <figcaption><span className="an">Balloon Planet</span><span className="ak">Concept ad</span></figcaption>
    </figure>
    <figure className="adtile">
      <div className="thumb">
        <video controls preload="metadata" playsInline poster="/c/f106140cf026/assets/mv-chaldilmerey.jpg"
          data-media-title="Chal Dil Merey (music video)"
          controlsList="nodownload noremoteplayback noplaybackrate"
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
          <source src="https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments/a6d6ccf479129df3/collier-chaldilmerey-n.mp4.mp4" type="video/mp4" />
        </video>
      </div>
      <figcaption><span className="an">Chal Dil Merey</span><span className="ak">Music video</span></figcaption>
    </figure>
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Two ways to work with us</p>
  <div className="twocol">
    <div className="panel"><div className="ph">Option one</div>
      <h3>Full-stack AI filmmakers</h3>
      <p>We source and place full-stack AI filmmakers, each a one-person pipeline covering the whole job: pre-production (concept, script, and storyboard), generation, and post (editing, sound design, color, and final delivery). One maker does what a whole team usually would, working to your direction, exactly like the work above.</p>
    </div>
    <div className="panel"><div className="ph">Option two</div>
      <h3>A studio pod</h3>
      <p>We place a coordinated team with one of them as the point person, and you and your team direct the work. The pod can run as full-stack makers working in parallel, or split the pipeline into specialized roles, one person on pre-production, another on generation, another on post and final cut, so more gets done at once. You can scale up or down as your slate changes.</p>
    </div>
  </div>
</section>

<section><div className="cta"><h2 className="accent">Collier.Simon&#x27;s AI filmmaking studio</h2>
  <p>This could be where your studio begins, whether you start with a single filmmaker or a full pod. The same caliber of work you just watched, talent we source and vet, directed by your team and backed by our infrastructure, built to grow at the pace you set.</p></div></section>

<footer>&copy; 2026 First Epic. Confidential and proprietary. Prepared exclusively for Collier.Simon.</footer>
    </div>
  );
}
