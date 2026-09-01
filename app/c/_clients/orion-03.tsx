import TaliaViewer from './_talia-viewer'

export default function CandidateOrion03() {
  return (
    <div>
      <style>{`
  :root{--bg:#0a0a0a;--card:#111214;--line:#262626;--line2:#1c1c1c;--ink:#e8eaed;--ink2:#9aa2ac;--ink3:#6b7280;
    --indigo:#818cf8;--indigo2:#6366f1;--purple:#a855f7;--green:#6ee7b7;--amber:#fcd34d;--pad:clamp(72px,9vw,104px);}
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
  .prep-line{border-top:1px solid var(--line);padding-top:16px;color:var(--ink3);font-size:.84rem;max-width:560px;}
  .hero{padding-top:clamp(48px,7vw,76px);padding-bottom:clamp(40px,5vw,56px);}
  .herorow{display:flex;align-items:center;gap:clamp(22px,3vw,32px);margin:0 0 22px;}
  .avatar{width:96px;height:96px;border-radius:16px;object-fit:cover;flex:none;border:1px solid #374151;box-shadow:0 10px 26px rgba(0,0,0,.45);}
  @media(min-width:768px){.avatar{width:128px;height:128px;}}
  h3{font-size:1.1rem;font-weight:700;margin:0 0 10px;}
  p{margin:0 0 14px;color:var(--ink2);}.prose{max-width:66ch;}
  .stats{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:0 0 26px;}
  @media(min-width:720px){.stats{grid-template-columns:repeat(4,1fr);}}
  .stat{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 18px;}
  .stat .n{font-size:1.55rem;font-weight:800;letter-spacing:-.02em;line-height:1.1;}
  .stat .l{font-size:.74rem;color:var(--ink3);margin-top:5px;line-height:1.4;}
  .video{position:relative;border:1px solid var(--line);border-radius:16px;overflow:hidden;aspect-ratio:16/9;margin:8px 0 12px;background:#000;}
  .video video{width:100%;height:100%;object-fit:contain;background:#000;display:block;}
  .cap{color:var(--ink3);font-size:.85rem;margin:0 0 28px;max-width:72ch;}
  .dgrid{display:grid;grid-template-columns:1fr;gap:16px;}@media(min-width:720px){.dgrid{grid-template-columns:1fr 1fr;}}
  .card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:22px 24px;transition:border-color .18s,transform .18s;}
  .card:hover{border-color:rgba(99,102,241,.45);transform:translateY(-2px);}
  .card .ct{font-weight:700;margin-bottom:7px;line-height:1.4;}.card p{font-size:.9rem;margin:0;}
  .codeview{grid-column:1/-1;border:1px solid rgba(99,102,241,.4);border-radius:16px;overflow:hidden;
    background:linear-gradient(135deg,rgba(99,102,241,.08),transparent 55%),var(--card);}
  .codeview .top{display:flex;align-items:center;gap:16px;padding:22px 24px;position:relative;}
  .cv-arrow{width:46px;height:46px;border-radius:12px;background:rgba(99,102,241,.2);border:1px solid rgba(129,140,248,.5);display:grid;place-items:center;color:#fff;font-size:1.2rem;flex:none;}
  .codeview .top .ct{font-weight:700;font-size:1.06rem;margin-bottom:4px;}.codeview .top p{margin:0;font-size:.9rem;max-width:64ch;}
  .cv-stretch{display:block;text-decoration:none;color:inherit;}.cv-stretch::after{content:"";position:absolute;inset:0;z-index:0;}
  .filestrip{display:flex;border-top:1px solid var(--line);background:#0c0d0f;overflow-x:auto;scrollbar-width:thin;position:relative;z-index:1;}
  .filestrip span,.filestrip a{padding:10px 14px;font-family:"SF Mono",Menlo,Consolas,monospace;font-size:.75rem;color:var(--ink3);border-right:1px solid var(--line2);white-space:nowrap;text-decoration:none;}
  .filestrip a:hover{color:#c7d2fe;background:rgba(99,102,241,.16);}.filestrip a.on,.filestrip span.on{color:#a5b4fc;background:rgba(99,102,241,.1);}
  .recon{display:grid;grid-template-columns:1fr;gap:16px;margin:2px 0 20px;}@media(min-width:720px){.recon{grid-template-columns:1fr 1fr;}}
  .recon figure{margin:0;background:var(--card);border:1px solid var(--line);border-radius:14px;overflow:hidden;}
  .recon img{width:100%;height:230px;object-fit:cover;display:block;background:#000;border-bottom:1px solid var(--line);}
  .recon video{width:100%;height:230px;object-fit:contain;display:block;background:#000;border-bottom:1px solid var(--line);}
  .recon figcaption{padding:14px 18px;font-size:.9rem;color:var(--ink2);}
  .recon figcaption b{color:var(--ink);font-weight:700;}
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
  .exp{margin:0 0 16px;}.exp:last-child{margin-bottom:0;}
  .exp .tag{display:inline-block;font-size:.6rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#a5b4fc;background:rgba(129,140,248,.1);border:1px solid rgba(129,140,248,.24);border-radius:5px;padding:3px 7px;margin-bottom:7px;}
  .exp .r{color:var(--ink);font-weight:600;font-size:.94rem;}.exp .d{color:var(--ink3);font-size:.86rem;margin-top:3px;}
  .group{margin:0 0 20px;}.group:last-child{margin-bottom:0;}.group .gl{font-size:.64rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#a5b4fc;margin:0 0 10px;}
  .chip{display:inline-block;font-size:.8rem;color:var(--ink);background:#0f1012;border:1px solid var(--line);border-radius:999px;padding:5px 12px;margin:0 8px 9px 0;}
  .cta{max-width:640px;margin:0 auto;text-align:center;padding:clamp(40px,6vw,64px) 24px;}
  .cta h2{font-size:clamp(1.7rem,3.5vw,2.1rem);margin:0 0 16px;font-weight:700;letter-spacing:-.02em;}
  .cta p{color:var(--ink2);max-width:58ch;margin:0 auto;}
  footer{color:var(--ink3);font-size:.79rem;text-align:center;padding:32px 0 48px;}
`}</style>
<nav><div className="wrap"><div className="brand"><span className="fe">FE</span> First Epic</div><div className="prep">Prepared exclusively for Lightcraft</div></div></nav>

<header className="wrap hero">
  <span className="pill">Candidate Presentation &middot; Orion-03</span>
  <div className="herorow">
    <img className="avatar" src="/c/9f2b1a7c/assets/avatar.jpg" alt="Sultan M." />
    <div>
      <h1>Sultan M.</h1>
      <div className="role accent">Senior 3D Vision &amp; Real-Time Graphics Engineer</div>
    </div>
  </div>
  <p className="headline">We gave candidates your camera-pose coordinate problem as a timed challenge. Sultan got the <b style={{color: '#e8eaed'}}>hard fundamentals</b> right, orientation locked to 0.12&deg;, the coordinate frames correct, fusion holding through signal dropouts at 48&nbsp;Hz, and came up just short on two of the six checks. He's a sharp, fast-learning engineer and a clear communicator, and he walks you through all of it on camera. <b style={{color: '#e8eaed'}}>We recommend a conversation.</b></p>
  <p className="who">A 3D-vision and sensor-fusion engineer working in coordinate-frame math, EKF-based fusion, real-time systems in Python, and 3D reconstruction.</p>
  <div className="prep-line">Prepared exclusively for Lightcraft.</div>
</header>

<section className="wrap">
  <p className="lbl">/// The workflow challenge</p>
  <p className="prose">Every First Epic candidate runs the same standardized, timed challenge. For this role it's your coordinate-origin problem in miniature: fuse a drifting pose source, hold the camera to a coordinate origin through signal loss, and prove the result on a held-out run. Here's what he got right, where he fell short, and his own walkthrough of it on camera.</p>
  <div className="stats">
    <div className="stat"><div className="n accent">0.12&deg;</div><div className="l">median orientation error (target: under 0.8&deg;)</div></div>
    <div className="stat"><div className="n accent">48&nbsp;Hz</div><div className="l">sustained publish rate (target: 24&nbsp;Hz+)</div></div>
    <div className="stat"><div className="n accent">fusion held</div><div className="l">no invented pose through source dropouts</div></div>
    <div className="stat"><div className="n accent">frames correct</div><div className="l">coordinate frame, handedness &amp; quaternion order clean</div></div>
  </div>
  <div className="video">
    <video controls preload="metadata" playsInline poster="/c/9f2b1a7c/assets/poster.jpg"
      data-media-title="Workflow challenge walkthrough"
      controlsList="nodownload noremoteplayback noplaybackrate"
      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
      <source src="https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments/5d1b8de70a440be2/orion03-walkthrough-norm.mp4" type="video/mp4" />
    </video>
  </div>
  <p className="cap">~12-minute walkthrough, he narrates the problem and runs his code live, and is straight about the two checks he didn't clear.</p>
  <div className="dgrid">
    <div className="card"><div className="ct"><span className="accent">Part 1: The pose-fusion service (code + tests)</span></div><p>An EKF-based pose-fusion service in clean Python with its own test suite. Orientation locks to 0.12&deg;, the coordinate transforms are correct end to end, fusion holds through signal dropouts, and it publishes at 48 Hz. Position accuracy landed at 3.4 cm, just over our 3 cm bar, and he didn't flag the planted faults in the held-out run. He's candid about both in the walkthrough.</p></div>
    <div className="card"><div className="ct"><span className="accent">Part 2: Reconstruction range-check</span></div><p>A reconstruction metric-scale artifact and reasoning, the same 3D-reconstruction world as Avata360, delivered under the same timed conditions.</p></div>
    <div className="codeview" style={{position: 'relative'}}>
      <a className="cv-stretch" href="/c/9f2b1a7c/assets/code-walkthrough.html#f=part1/service/orion/service.py" target="_blank" rel="noopener noreferrer" aria-label="Browse the actual code">
        <div className="top"><div className="cv-arrow">&#9658;</div>
          <div><div className="ct">Browse the actual code &rarr;</div>
            <p>The full submission, file-by-file, every script, config, and report delivered, syntax-highlighted. Click a file below to jump straight to it. Opens in a new tab, nothing to install.</p></div></div>
      </a>
      <div className="filestrip">
        <a className="on" href="/c/9f2b1a7c/assets/code-walkthrough.html#f=part1/service/orion/service.py" target="_blank" rel="noopener noreferrer">service.py</a>
        <a href="/c/9f2b1a7c/assets/code-walkthrough.html#f=part1/service/orion/ekf.py" target="_blank" rel="noopener noreferrer">ekf.py</a>
        <a href="/c/9f2b1a7c/assets/code-walkthrough.html#f=part1/service/orion/frames.py" target="_blank" rel="noopener noreferrer">frames.py</a>
        <a href="/c/9f2b1a7c/assets/code-walkthrough.html#f=part1/service/orion/validate.py" target="_blank" rel="noopener noreferrer">validate.py</a>
        <a href="/c/9f2b1a7c/assets/code-walkthrough.html#f=part1/service/orion/selfcheck.py" target="_blank" rel="noopener noreferrer">selfcheck.py</a>
        <a href="/c/9f2b1a7c/assets/code-walkthrough.html#f=part1/service/orion/report.py" target="_blank" rel="noopener noreferrer">report.py</a>
        <a href="/c/9f2b1a7c/assets/code-walkthrough.html#f=part1/service/tests/test_ekf_stationary.py" target="_blank" rel="noopener noreferrer">test_ekf_stationary.py</a>
        <a href="/c/9f2b1a7c/assets/code-walkthrough.html#f=part1/MEASURED_REPORT.md" target="_blank" rel="noopener noreferrer">MEASURED_REPORT.md</a>
        <span>+ 19 more</span>
      </div>
    </div>
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Fit across your three projects</p>
  <p className="prose" style={{marginBottom: '30px'}}>You need one engineer across Pandora-AR, Avata360, and Shark Guardian. Here's an honest read of where Sultan is strong today and where he's light, and why we recommend you meet him.</p>
  <div className="fitgrid">
    <div className="fit"><span className="badge b-credible">Pandora-AR &middot; Credible</span>
      <p>The closest fit. In the challenge he built the pose-fusion core cleanly, correct coordinate frames, EKF fusion that holds through dropouts, orientation to 0.12&deg;, real-time at 48 Hz. Those are the parts that are hard to get right.</p>
      <div className="light"><span className="t">Where he's light:</span> <span className="r">the last centimetre of position-accuracy tuning (3.4 cm vs the 3 cm bar), defensive fault-catching (he missed the planted faults in the held-out run), and engine-level Unreal C++. <b style={{color: '#e8eaed'}}>Why we're confident:</b> he got the hard invariants right, frames, quaternion order, fusion-through-dropouts, and the near-miss is tuning and rigor, the kind of gap a strong, fast-learning engineer closes on the job.</span></div>
    </div>
    <div className="fit"><span className="badge b-credible">Avata360 &middot; Credible</span>
      <p>He delivered the Part-2 reconstruction range-check under the same timed conditions, the 3D-reconstruction and metric-scale world Avata360 lives in. His own portfolio (below) is full of real Gaussian-splat reconstruction work.</p>
      <div className="light"><span className="t">Where he's light:</span> <span className="r">production-scale reconstruction inside an Unreal pipeline. <b style={{color: '#e8eaed'}}>Why we're confident:</b> the reconstruction reasoning sits on the same geometry he already handles in the pose work and his splat portfolio.</span></div>
    </div>
    <div className="fit"><span className="badge b-ramp">Shark Guardian &middot; Ramp area</span>
      <p>The lightest fit today, and the project you have slated last. He brings the transferable core, Python, real-time systems, and computer-vision fundamentals, plus production experience with real-time detection pipelines.</p>
      <div className="light"><span className="t">Where he's light:</span> <span className="r">edge detection, on-device inference, and the RF/telemetry specifics. <b style={{color: '#e8eaed'}}>Why we're confident:</b> a well-trodden ramp for an engineer who already owns the CV and real-time foundation.</span></div>
    </div>
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Who he is</p>
  <p className="prose" style={{marginBottom: '28px'}}>An engineer who works where camera geometry meets real-time reliability. In our founder interview he came across as a clear, candid communicator, he took blunt technical questioning without defensiveness and was straightforward about what he had and had not proven, rather than overselling, including that he leaned on AI tooling for parts of the challenge's filter math and wants to deepen his own hands-on command of it. That honesty, plus how quickly he orients, is a large part of why we're recommending a conversation.</p>
  <div className="twocol">
    <div className="panel"><div className="ph">Core strengths (shown in the challenge)</div>
      <div className="group"><div className="gl">3D vision &amp; fusion</div>
        <span className="chip">Coordinate-frame math</span><span className="chip">EKF sensor fusion</span><span className="chip">Quaternion / handedness rigor</span><span className="chip">Degraded-mode design</span></div>
      <div className="group"><div className="gl">Systems &amp; software</div>
        <span className="chip">Python</span><span className="chip">Real-time (48 Hz)</span><span className="chip">Test-backed code</span><span className="chip">Measurement discipline</span></div>
    </div>
    <div className="panel"><div className="ph">Experience &amp; background</div>
      <div className="exp"><span className="tag">Now</span><div className="r">Real-time computer-vision engineering (production)</div><div className="d">Works on real-time detection-and-tracking pipelines that run over live camera feeds in production.</div></div>
      <div className="exp"><span className="tag">Portfolio</span><div className="r">3D Gaussian-splat reconstruction</div><div className="d">Multi-view reconstruction of real buildings, captured and cleaned in-editor.</div></div>
      <div className="exp"><span className="tag">What we'd confirm</span><div className="r">Position-accuracy tuning, fault-injection rigor, native Unreal C++</div><div className="d">None are foundational gaps, they're what a first call would pressure-test.</div></div>
    </div>
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Beyond the challenge</p>
  <p className="prose" style={{marginBottom: '26px'}}>The timed challenge is a narrow slice. His own portfolio shows both halves of this role in his day-to-day work: 3D reconstruction, and real-time computer-vision systems he works on in production.</p>
  <div className="recon">
    <figure>
      <video controls preload="metadata" playsInline poster="/c/9f2b1a7c/assets/splat-tower-poster.jpg"
        data-media-title="3D Gaussian-splat reconstruction"
        controlsList="nodownload noremoteplayback noplaybackrate" disablePictureInPicture>
        <source src="/c/9f2b1a7c/assets/splat-tower.mp4" type="video/mp4" />
      </video>
      <figcaption><b>3D Gaussian-splat reconstruction.</b> A real building rebuilt as a Gaussian-splat scene and orbited in-editor, the same reconstruction core Avata360 is built on.</figcaption>
    </figure>
    <figure>
      <video controls preload="metadata" playsInline poster="/c/9f2b1a7c/assets/pointcloud-poster.jpg"
        data-media-title="Structure-from-motion capture"
        controlsList="nodownload noremoteplayback noplaybackrate" disablePictureInPicture>
        <source src="/c/9f2b1a7c/assets/pointcloud.mp4" type="video/mp4" />
      </video>
      <figcaption><b>Structure-from-motion capture.</b> The reconstruction pipeline a step earlier, a sparse point cloud recovered from real-world imagery before the dense splat pass.</figcaption>
    </figure>
    <figure>
      <img src="/c/9f2b1a7c/assets/arch-diagram.jpg" alt="Real-time monitoring pipeline he works on" data-tvw-kind="image" data-tvw-src="/c/9f2b1a7c/assets/arch-diagram.jpg" data-tvw-label="A real-time monitoring pipeline he works on" style={{ cursor: 'zoom-in' }} />
      <figcaption><b>A real-time monitoring pipeline he works on.</b> The system design of a production computer-vision service on his team: config plus live camera into an orchestrator, detect-and-track, zone timing, and an alerting / annotated-stream output. The full-stack, real-time systems thinking Pandora-AR's backend needs.</figcaption>
    </figure>
    <figure>
      <img src="/c/9f2b1a7c/assets/prod-detection.jpg" alt="Live vehicle detection and segmentation" data-tvw-kind="image" data-tvw-src="/c/9f2b1a7c/assets/prod-detection.jpg" data-tvw-label="Production detection running live" style={{ cursor: 'zoom-in' }} />
      <figcaption><b>Production detection running live.</b> Per-vehicle detection boxes and a segmented drivable lane on a real-world road feed at real-time frame rates, the perception layer of that pipeline in production.</figcaption>
    </figure>
    <figure>
      <img src="/c/9f2b1a7c/assets/prod-traffic-dashboard.jpg" alt="Operator dashboard for a production service he works on" data-tvw-kind="image" data-tvw-src="/c/9f2b1a7c/assets/prod-traffic-dashboard.jpg" data-tvw-label="The production service, end to end" style={{ cursor: 'zoom-in' }} />
      <figcaption><b>The production service, end to end.</b> The operator-facing dashboard on top of the detector: a live camera feed with real-time congestion occupancy and duration metrics and an alert log, running against a real site.</figcaption>
    </figure>
  </div>
  <div className="dgrid">
    <div className="card"><div className="ct"><span className="accent">Real-time CV monitoring systems, in production</span></div><p>Beyond the diagram, he works on real-time computer-vision pipelines that run continuously over live camera feeds, detection and tracking with the orchestration to keep them up. He can walk you through how it works and the hard calls on a call.</p></div>
    <div className="card"><div className="ct"><span className="accent">Reconstruction end to end</span></div><p>From real-world capture and structure-from-motion through to dense Gaussian-splat reconstruction, the geometry and metric-scale reasoning your Avata360 work runs on.</p></div>
  </div>
</section>

<section><div className="cta"><h2>Next step with Sultan</h2>
  <p>He got the hard part of the challenge right, and he's a sharp, honest, fast-learning engineer, the kind of person a short conversation reads far better than a scorecard. We recommend you meet with him. If it would help, we can set up a deeper code walk or a live run of the pose service first.</p></div></section>

<footer>&copy; 2026 First Epic, Confidential. Prepared exclusively for Lightcraft.</footer>

{/* Universal TaliaViewer lightbox: any element with data-tvw-src opens it (event-delegated),
    so the portfolio and workflow images zoom. Videos stay inline with their own controls. */}
<TaliaViewer />
    </div>
  );
}
