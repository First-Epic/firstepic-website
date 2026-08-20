export default function CandidateOrion01() {
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
  .mock{background:rgba(252,211,77,.08);border-bottom:1px solid rgba(252,211,77,.25);color:var(--amber);font-size:.74rem;text-align:center;padding:6px 12px;letter-spacing:.02em;}
  .lbl{font-size:.7rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--indigo);margin:0 0 24px;}
  section{padding:calc(var(--pad)*.62) 0;border-bottom:1px solid rgba(38,38,38,.55);}
  section.spaced{padding-top:calc(var(--pad)*1.15);}
  h1{font-size:clamp(2.7rem,6.2vw,4.6rem);line-height:1.0;letter-spacing:-.035em;font-weight:800;margin:0 0 10px;}
  .role{font-size:clamp(1.3rem,2.7vw,1.85rem);font-weight:300;margin:0 0 22px;line-height:1.15;}
  .headline{font-size:clamp(1.08rem,1.6vw,1.22rem);color:var(--ink2);max-width:60ch;margin:0 0 16px;}
  .who{color:var(--ink3);font-size:.96rem;max-width:62ch;margin:0 0 26px;}
  .pill{display:inline-block;font-size:.7rem;font-weight:600;letter-spacing:.06em;color:#c7d2fe;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.22);border-radius:999px;padding:6px 12px;margin-bottom:22px;}
  .prep-line{border-top:1px solid var(--line);padding-top:16px;color:var(--ink3);font-size:.84rem;max-width:520px;}
  /* hero with avatar */
  .hero{padding-top:clamp(48px,7vw,76px);padding-bottom:clamp(40px,5vw,56px);}
  .herorow{display:flex;align-items:center;gap:clamp(22px,3vw,32px);margin:0 0 22px;}
  .avatar{width:96px;height:96px;border-radius:16px;object-fit:cover;flex:none;border:1px solid #374151;box-shadow:0 10px 26px rgba(0,0,0,.45);}
  @media(min-width:768px){.avatar{width:128px;height:128px;}}
  h3{font-size:1.1rem;font-weight:700;margin:0 0 10px;}
  p{margin:0 0 14px;color:var(--ink2);}.prose{max-width:64ch;}
  /* stats */
  .stats{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:0 0 26px;}
  @media(min-width:720px){.stats{grid-template-columns:repeat(4,1fr);}}
  .stat{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 18px;}
  .stat .n{font-size:1.55rem;font-weight:800;letter-spacing:-.02em;line-height:1.1;}
  .stat .l{font-size:.74rem;color:var(--ink3);margin-top:5px;line-height:1.4;}
  /* video */
  .video{position:relative;border:1px solid var(--line);border-radius:16px;overflow:hidden;aspect-ratio:16/9;margin:8px 0 12px;background:#000;}
  .video img{width:100%;height:100%;object-fit:cover;opacity:.6;}
  .voverlay{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;padding:0 20px;
    background:linear-gradient(180deg,rgba(10,10,10,.12),rgba(10,10,10,.58));}
  .play{width:72px;height:72px;border-radius:999px;background:rgba(99,102,241,.3);border:1px solid rgba(129,140,248,.7);display:grid;place-items:center;color:#fff;font-size:1.5rem;backdrop-filter:blur(3px);}
  .vlabel{color:#fff;font-weight:600;font-size:1.05rem;text-shadow:0 1px 14px rgba(0,0,0,.75);}
  .vsub{color:#dbe0e6;font-size:.84rem;max-width:52ch;text-shadow:0 1px 14px rgba(0,0,0,.75);}
  .cap{color:var(--ink3);font-size:.85rem;margin:0 0 28px;max-width:70ch;}
  /* cards grid */
  .dgrid{display:grid;grid-template-columns:1fr;gap:16px;}@media(min-width:720px){.dgrid{grid-template-columns:1fr 1fr;}}
  .card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:22px 24px;transition:border-color .18s,transform .18s;}
  .card:hover{border-color:rgba(99,102,241,.45);transform:translateY(-2px);}
  .card .ct{font-weight:700;margin-bottom:7px;line-height:1.4;}.card p{font-size:.9rem;margin:0;}
  /* code viewer */
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
  /* fit */
  .fitgrid{display:grid;grid-template-columns:1fr;gap:18px;}@media(min-width:840px){.fitgrid{grid-template-columns:repeat(3,1fr);}}
  .fit{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:26px;display:flex;flex-direction:column;}
  .badge{align-self:flex-start;font-size:.64rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase;border-radius:6px;padding:5px 9px;margin-bottom:15px;}
  .b-proven{color:var(--green);background:rgba(110,231,183,.1);border:1px solid rgba(110,231,183,.28);}
  .b-credible{color:var(--indigo);background:rgba(129,140,248,.1);border:1px solid rgba(129,140,248,.28);}
  .b-ramp{color:var(--amber);background:rgba(252,211,77,.1);border:1px solid rgba(252,211,77,.28);}
  .fit>p{font-size:.92rem;}
  .light{margin-top:auto;padding-top:14px;border-top:1px dashed var(--line);font-size:.9rem;}
  .light .t{color:var(--ink);font-weight:600;}.light .r{color:var(--ink2);}
  /* profile */
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
  /* cta */
  .cta{max-width:640px;margin:0 auto;text-align:center;padding:clamp(40px,6vw,64px) 0;}
  .cta h2{font-size:clamp(1.7rem,3.5vw,2.1rem);margin:0 0 16px;font-weight:700;letter-spacing:-.02em;}
  .cta p{color:var(--ink2);max-width:56ch;margin:0 auto;}
  footer{color:var(--ink3);font-size:.79rem;text-align:center;padding:32px 0 48px;}
`}</style>
<nav><div className="wrap"><div className="brand"><span className="fe">FE</span> First Epic</div><div className="prep">Prepared exclusively for Lightcraft</div></div></nav>

<header className="wrap hero">
  <span className="pill">Candidate Presentation &middot; Orion-01</span>
  <div className="herorow">
    <img className="avatar" src="/c/e4b91c7a2f60/assets/avatar.jpg" alt="Asad" />
    <div>
      <h1>Asad Z.</h1>
      <div className="role accent">Senior 3D Vision &amp; Real-Time Graphics Engineer</div>
    </div>
  </div>
  <p className="headline">We gave candidates your camera-pose coordinate problem as a timed challenge. Asad solved it - a fused pose held to <b style={{color: '#e8eaed'}}>2.17&nbsp;cm</b> at 30&nbsp;Hz, origin stable through signal dropouts - and he walks you through it on camera.</p>
  <p className="who">A 3D-vision and real-time sensor-fusion engineer: multi-view reconstruction, coordinate-frame math, and degraded-mode design in modern C++ and CUDA on Linux and NVIDIA hardware.</p>
  <div className="prep-line">Prepared exclusively for Lightcraft.</div>
</header>

<section className="wrap">
  <p className="lbl">/// The workflow challenge</p>
  <p className="prose">Every First Epic candidate runs the same standardized, timed challenge. For this role it's your coordinate-origin problem in miniature: fuse a drifting pose source with RTK, keep the camera locked to a coordinate origin through signal loss, and prove the result on a held-out run.</p>
  <div className="stats">
    <div className="stat"><div className="n accent">2.17&nbsp;cm</div><div className="l">median position error (target: under 3&nbsp;cm)</div></div>
    <div className="stat"><div className="n accent">30&nbsp;Hz</div><div className="l">sustained, monotonic through both dropouts</div></div>
    <div className="stat"><div className="n accent">3 / 3</div><div className="l">injected faults rejected, with the right reason</div></div>
    <div className="stat"><div className="n accent">origin held</div><div className="l">last-good position, never fresh state from stale input</div></div>
  </div>
  <div className="video">
    <video controls preload="metadata" playsInline poster="/c/e4b91c7a2f60/assets/poster.jpg"
      controlsList="nodownload noremoteplayback noplaybackrate"
      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
      <source src="https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments/35332fbb8ad8b5af/wf-walkthrough.mp4" type="video/mp4" />
    </video>
  </div>
  <p className="cap" style={{ marginTop: '-16px' }}>17-minute walkthrough - he narrates the problem and runs the code live: tests passing, faults rejected, latency measured. He also walked our founder through it live, file by file, under direct questioning.</p>
  <p className="cap">Frame shown: his live run on camera - unit tests pass, 3240 observations accepted with 3 rejected, 30&nbsp;Hz achieved, per-tick latency measured. The numbers on his screen match our independent re-run of his code.</p>
  <div className="dgrid">
    <div className="card"><div className="ct"><span className="accent">Part 1 - The pose-stream service</span> (code + config)</div><p>Fuses pose, IMU, and RTK into a 30&nbsp;Hz coordinate-correct stream. The coordinate transform's proven to floating-point precision, every fault's rejected, and the origin holds through both dropouts.</p></div>
    <div className="card"><div className="ct"><span className="accent">Part 2 - Reconstruction range-check + gate</span></div><p>He caught a planted 14.3% metric-scale defect in a reconstruction he didn't build - with no solver run - and wrote a fail-closed gate to block a bad solve before it reaches training.</p></div>
    <div className="codeview" style={{position: 'relative'}}>
      <a className="cv-stretch" href="/c/e4b91c7a2f60/assets/code-walkthrough.html#f=service.py" target="_blank" rel="noopener noreferrer" aria-label="Browse his actual code">
        <div className="top"><div className="cv-arrow">&#9658;</div>
          <div><div className="ct">Browse his actual code &rarr;</div>
            <p>The full submission, file-by-file &mdash; every script, config, and report he delivered, syntax-highlighted. Click a file below to jump straight to it. Opens in a new tab, nothing to install.</p></div></div>
      </a>
      <div className="filestrip">
        <a className="on" href="/c/e4b91c7a2f60/assets/code-walkthrough.html#f=service.py" target="_blank" rel="noopener noreferrer">service.py</a>
        <a href="/c/e4b91c7a2f60/assets/code-walkthrough.html#f=fusion.py" target="_blank" rel="noopener noreferrer">fusion.py</a>
        <a href="/c/e4b91c7a2f60/assets/code-walkthrough.html#f=transform.py" target="_blank" rel="noopener noreferrer">transform.py</a>
        <a href="/c/e4b91c7a2f60/assets/code-walkthrough.html#f=test_transform.py" target="_blank" rel="noopener noreferrer">test_transform.py</a>
        <a href="/c/e4b91c7a2f60/assets/code-walkthrough.html#f=run_eval.py" target="_blank" rel="noopener noreferrer">run_eval.py</a>
        <a href="/c/e4b91c7a2f60/assets/code-walkthrough.html#f=part2_qualification_gate.py" target="_blank" rel="noopener noreferrer">part2_qualification_gate.py</a>
        <a href="/c/e4b91c7a2f60/assets/code-walkthrough.html#f=REPORT.md" target="_blank" rel="noopener noreferrer">REPORT.md</a>
        <span>+ 20 more</span>
      </div>
    </div>
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Fit across your three projects</p>
  <p className="prose" style={{marginBottom: '30px'}}>You need one engineer across Pandora-AR, Avata360, and Shark Guardian. Here's where Asad's proven today, where he's light, and why we're confident he closes the gap quickly.</p>
  <div className="fitgrid">
    <div className="fit"><span className="badge b-proven">Pandora-AR &middot; Proven</span>
      <p>Your first project's his strongest, and we can show it. He solved your origin-reset problem in the challenge above, and he's currently leading a live UAV avionics integration fusing inertial, visual, and GNSS - the same sensor world as Pandora's backend.</p>
      <div className="light"><span className="t">Where he's light:</span> <span className="r">engine-level Unreal 5.8 C++ (his Unreal's via CARLA). <b style={{color: '#e8eaed'}}>Why we're confident:</b> he's already solved the hard half - the GPS-to-Unreal coordinate transform - has deep real-time C++, and gets oriented fast in large codebases he didn't write. The Unreal API surface is the part he picks up on the job.</span></div>
    </div>
    <div className="fit"><span className="badge b-credible">Avata360 &middot; Credible</span>
      <p>Real reconstruction depth: COLMAP structure-from-motion of full buildings, a custom stereo dense-matcher, and hands-on ORB-SLAM. In Part 2 he caught a metric-scale defect and wrote the gate to block it.</p>
      <div className="light"><span className="t">Where he's light:</span> <span className="r">training Gaussian splats at production scale. <b style={{color: '#e8eaed'}}>Why we're confident:</b> splat training sits right on top of the SfM solves he already runs, and he's got the CUDA and VRAM discipline - he took a stereo pipeline from ~10 minutes down to a few seconds on a 24&nbsp;GB card.</span></div>
    </div>
    <div className="fit"><span className="badge b-ramp">Shark Guardian &middot; Ramp area</span>
      <p>The lightest fit today, and the project you've slated last. He brings the transferable core - CUDA, computer vision, and vision-language model deployment - plus GNSS-denial fallback exposure from the avionics work.</p>
      <div className="light"><span className="t">Where he's light:</span> <span className="r">YOLO edge training, TensorRT-on-Jetson, MAVLink, and RF specifics. <b style={{color: '#e8eaed'}}>Why we're confident:</b> the detection-and-edge stack's a well-trodden ramp for an engineer who already owns the GPU and computer-vision foundation.</span></div>
    </div>
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Who he is</p>
  <p className="prose" style={{marginBottom: '28px'}}>A systems engineer who works where camera geometry meets production reliability - and who measures the whole path rather than the happy one. In our founder interview he took blunt technical correction without defensiveness and flagged his own gaps plainly rather than bluffing.</p>
  <div className="twocol">
    <div className="panel"><div className="ph">Experience &amp; background</div>
      <div className="exp"><span className="tag">Now</span><div className="r">Real-time sensor-fusion &amp; UAV avionics integration</div><div className="d">Leading an inertial / visual / GNSS integration on a multirotor platform.</div></div>
      <div className="exp"><span className="tag">Production</span><div className="r">3D reconstruction - subsea stereo pipeline</div><div className="d">CUDA-accelerated stereo reconstruction for an offshore-scanning client.</div></div>
      <div className="exp"><span className="tag">Ongoing</span><div className="r">Computer-vision &amp; vision-language model deployment</div><div className="d">Detector plus open-weight VLM pipelines served on GPU.</div></div>
      <div className="exp"><span className="tag">Education</span><div className="r">MS, Electrical Engineering</div></div>
    </div>
    <div className="panel"><div className="ph">Core strengths</div>
      <div className="group"><div className="gl">Systems &amp; software</div>
        <span className="chip">Modern C++</span><span className="chip">Python</span><span className="chip">Real-time systems</span><span className="chip">Degraded-mode design</span><span className="chip">Measurement discipline</span></div>
      <div className="group"><div className="gl">3D vision &amp; reconstruction</div>
        <span className="chip">Multi-view geometry</span><span className="chip">Coordinate-frame math</span><span className="chip">SfM / COLMAP</span><span className="chip">Stereo &amp; depth</span><span className="chip">ORB-SLAM</span></div>
      <div className="group"><div className="gl">Sensors &amp; GPU</div>
        <span className="chip">Sensor fusion (IMU / RTK)</span><span className="chip">CUDA</span><span className="chip">TensorRT</span><span className="chip">VLM / Qwen</span><span className="chip">Linux / NVIDIA</span></div>
    </div>
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Beyond the challenge</p>
  <p className="prose">The same skills in production, under NDA - so he can walk you through the architecture and the hard calls on a live call rather than share the code.</p>
  <div className="dgrid">
    <div className="card"><div className="ct"><span className="accent">Subsea stereo reconstruction pipeline</span></div><p>A CUDA-accelerated stereo reconstruction pipeline built for an offshore-scanning client - camera calibration, dense matching, and metric scale at production quality.</p></div>
    <div className="card"><div className="ct"><span className="accent">UAV avionics sensor-fusion integration</span></div><p>His current work: fusing inertial, visual, and GNSS on a multirotor, including flight-controller communication and the design of GNSS-denial fallback test cases - directly adjacent to Pandora's backend.</p></div>
  </div>
</section>

<section><div className="cta"><h2>Next step with Asad</h2>
  <p>If he looks like a fit for your team, let us know and we'll coordinate scheduling. If you'd like to see anything specific first - a deeper code walk, a live run of the pose service, or the reconstruction work - we'll set it up.</p></div></section>

<footer>&copy; 2026 First Epic - Confidential. Prepared exclusively for Lightcraft.</footer>
    </div>
  );
}
