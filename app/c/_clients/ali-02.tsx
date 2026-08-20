export default function CandidateOrion02() {
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
`}</style>
<nav><div className="wrap"><div className="brand"><span className="fe">FE</span> First Epic</div><div className="prep">Prepared exclusively for Lightcraft</div></div></nav>

<header className="wrap hero">
  <span className="pill">Candidate Presentation &middot; Orion-02</span>
  <div className="herorow">
    <img className="avatar" src="/c/c9a4e7b2d1f6/assets/avatar.jpg" alt="Ali M." />
    <div>
      <h1>Ali M.</h1>
      <div className="role accent">Senior 3D Vision &amp; Real-Time Graphics Engineer</div>
    </div>
  </div>
  <p className="headline">We gave candidates your camera-pose coordinate problem as a timed challenge. Ali built a filter that fuses camera, IMU, GPS and RTK into a steady <b style={{color: '#e8eaed'}}>48&nbsp;Hz</b> pose stream held to <b style={{color: '#e8eaed'}}>2.67&nbsp;cm</b> - then wrote and unit-tested the exact transform into an Unreal Engine camera frame, verified to round-trip to <b style={{color: '#e8eaed'}}>0.0&nbsp;cm</b>.</p>
  <p className="who">A 3D-reconstruction and perception engineer with years of production photogrammetry and digital-twin work, sensor-fusion state estimation, and real-time detection on edge hardware - the three lanes your projects sit in.</p>
  <div className="prep-line">Prepared exclusively for Lightcraft.</div>
</header>

<section className="wrap">
  <p className="lbl">/// The workflow challenge</p>
  <p className="prose">Every First Epic candidate runs the same standardized, timed challenge. For this role it mirrors your Pandora backend: fuse a drifting pose source with IMU and RTK, hold a coordinate-correct camera through signal loss, and prove the result on a held-out run the candidate never sees while building.</p>
  <div className="stats">
    <div className="stat"><div className="n accent">2.67&nbsp;cm</div><div className="l">median position error (target: under 3&nbsp;cm)</div></div>
    <div className="stat"><div className="n accent">48&nbsp;Hz</div><div className="l">fixed output clock (contract floor: 24&nbsp;Hz)</div></div>
    <div className="stat"><div className="n accent">3 / 3</div><div className="l">injected sensor faults rejected, each with the right reason</div></div>
    <div className="stat"><div className="n accent">0.0&nbsp;cm</div><div className="l">Unreal-frame transform round-trip vs. his intended pose</div></div>
  </div>
  <div className="video">
    <video controls preload="metadata" playsInline poster="/c/c9a4e7b2d1f6/assets/poster.jpg"
      controlsList="nodownload noremoteplayback noplaybackrate"
      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}>
      <source src="https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments/5494137236a723c6/wf-walkthrough.mp4" type="video/mp4" />
    </video>
  </div>
  <p className="cap" style={{ marginTop: '-16px' }}>An 18-minute walkthrough - he narrates each part and runs it live: the fusion service publishing at 48&nbsp;Hz, faults being rejected, and the pose-to-Unreal-frame conversion for a game camera. He also walked our founder through the same work live, under direct questioning.</p>
  <p className="cap">His measured numbers reproduce exactly on our side: we re-ran his pipeline and got byte-for-byte identical output, all 25 of his tests pass, and the self-check accuracy gate lands at the same 2.67&nbsp;cm.</p>
  <div className="dgrid">
    <div className="card"><div className="ct"><span className="accent">Part 1 - The sensor-fusion pose service</span></div><p>A 15-dimensional error-state Kalman filter fusing pose, IMU, GPS and RTK. When his first filter passed orientation but drifted on position, he traced it to the source data and added a bias state - fixing the cause, not tuning the symptom. Holds last-good pose through dropouts, never inventing fresh state from stale input.</p></div>
    <div className="card"><div className="ct"><span className="accent">Part 2 - Reconstruction range-check + gate</span></div><p>Handed a reconstruction that <i>claimed</i> it was clean, he proved from its own numbers it was 14.3% undersized - three RTK baselines all off by the same ratio - and wrote a fail-closed gate that blocks a mis-scaled solve before it ever reaches splat training.</p></div>
    <div className="card"><div className="ct"><span className="accent">Bonus - Unreal camera bridge</span></div><p>Not required - he did it anyway. He wrote the full pose-to-Unreal-frame conversion - a C++ CineCamera actor plus an Editor-Python version - unit-tested, with a per-frame readback that round-trips to 0.0&nbsp;cm across all 1,440 frames, dropout-hold and re-sync included. Written against UE5's documented APIs; not yet run in a live project - an integration step, not a capability gap.</p></div>
    <div className="codeview" style={{position: 'relative'}}>
      <a className="cv-stretch" href="/c/c9a4e7b2d1f6/assets/code-walkthrough.html#f=orion-pose-py/orion/ekf.py" target="_blank" rel="noopener noreferrer" aria-label="Browse his actual code">
        <div className="top"><div className="cv-arrow">&#9658;</div>
          <div><div className="ct">Browse his actual code &rarr;</div>
            <p>The full submission, file-by-file &mdash; the filter, the transform, the fault validator, the tests, and the Unreal bridge, syntax-highlighted. Click a file below to jump straight to it. Opens in a new tab, nothing to install.</p></div></div>
      </a>
      <div className="filestrip">
        <a className="on" href="/c/c9a4e7b2d1f6/assets/code-walkthrough.html#f=orion-pose-py/orion/ekf.py" target="_blank" rel="noopener noreferrer">ekf.py</a>
        <a href="/c/c9a4e7b2d1f6/assets/code-walkthrough.html#f=orion-pose-py/orion/fusion.py" target="_blank" rel="noopener noreferrer">fusion.py</a>
        <a href="/c/c9a4e7b2d1f6/assets/code-walkthrough.html#f=orion-pose-py/orion/transform.py" target="_blank" rel="noopener noreferrer">transform.py</a>
        <a href="/c/c9a4e7b2d1f6/assets/code-walkthrough.html#f=orion-pose-py/orion/dropout.py" target="_blank" rel="noopener noreferrer">dropout.py</a>
        <a href="/c/c9a4e7b2d1f6/assets/code-walkthrough.html#f=orion-pose-py/orion/validator.py" target="_blank" rel="noopener noreferrer">validator.py</a>
        <a href="/c/c9a4e7b2d1f6/assets/code-walkthrough.html#f=part2-reconstruction-range-check/qualification_gate.py" target="_blank" rel="noopener noreferrer">qualification_gate.py</a>
        <a href="/c/c9a4e7b2d1f6/assets/code-walkthrough.html#f=orion-pose-py/unreal_bridge/OrionCameraDriver.cpp" target="_blank" rel="noopener noreferrer">OrionCameraDriver.cpp</a>
        <a href="/c/c9a4e7b2d1f6/assets/code-walkthrough.html#f=orion-pose-py/report.md" target="_blank" rel="noopener noreferrer">report.md</a>
        <span>+ 32 more</span>
      </div>
    </div>
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Fit across your three projects</p>
  <p className="prose" style={{marginBottom: '30px'}}>You need one engineer across Pandora-AR, Avata360, and Shark Guardian. Ali is unusual in that he has touched all three lanes in real work. Here's where he's proven, where he's light, and why we're confident.</p>
  <div className="fitgrid">
    <div className="fit"><span className="badge b-proven">Pandora-AR &middot; Proven</span>
      <p>Your top project is his strongest, and the challenge is a near-copy of it: multi-sensor fusion, the coordinate-frame conversion, real-time reliability - and a unit-tested transform of his pose stream into Unreal's camera frame. The hard center of Pandora is work he's already done and had graded.</p>
      <div className="light"><span className="t">Where he's light:</span> <span className="r">deep Unreal engine internals - tick order, threading, plugin architecture. <b style={{color: '#e8eaed'}}>Why we're confident:</b> he already closes the pose-into-engine loop and owns the fusion and coordinate math underneath it; the engine's deeper API surface is the part he picks up on the job.</span></div>
    </div>
    <div className="fit"><span className="badge b-credible">Avata360 &middot; Credible</span>
      <p>Genuinely hands-on reconstruction: years of production photogrammetry and digital-twin work from drone data, plus a COLMAP structure-from-motion project he validated to real-world scale (40.07&nbsp;m reconstructed vs. 41.22&nbsp;m ground truth). He owns capture, calibration, metric scale and validation end-to-end.</p>
      <div className="light"><span className="t">Where he's light:</span> <span className="r">training Gaussian splats at production scale - so far studied, not shipped. <b style={{color: '#e8eaed'}}>Why we're confident:</b> splat training sits directly on the SfM solves he already runs, and in Part 2 he reasoned correctly about the splat-training input gate - he understands where it fits before ever training one.</span></div>
    </div>
    <div className="fit"><span className="badge b-credible">Shark Guardian &middot; Credible</span>
      <p>The lane most candidates are blank on, he has actually shipped: real-time human detection and identity-preserving tracking on a Jetson edge device (YOLO + DeepSORT), with inference optimized through TensorRT. That's the Shark Guardian shape - detection and tracking on constrained hardware.</p>
      <div className="light"><span className="t">Where he's light:</span> <span className="r">rigorous GPU profiling - VRAM budgets, before/after latency numbers. <b style={{color: '#e8eaed'}}>Why we're confident:</b> he can build and deploy the edge stack today; instrumenting and quantifying it is a habit he adds, not a capability he lacks.</span></div>
    </div>
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Who he is</p>
  <p className="prose" style={{marginBottom: '28px'}}>A reconstruction-and-perception engineer whose whole career has been turning messy sensor data - drone point clouds, camera streams, IMU and RTK - into reliable geometry, and shipping it. In our founder interview he reasoned through his fusion pipeline, EKF states, and dropout logic in real time under unscripted probing - fluent and unrehearsed - and named his own open items plainly rather than overselling them.</p>
  <div className="twocol">
    <div className="panel"><div className="ph">Experience &amp; background</div>
      <div className="exp"><span className="tag">Now</span><div className="r">Computer-vision engineer, production pipelines</div><div className="d">Building an automated estimation pipeline at a CV software company - detection and segmentation over technical drawings, served from a scalable cloud backend.</div></div>
      <div className="exp"><span className="tag">~5 years</span><div className="r">3D reconstruction &amp; digital twins</div><div className="d">At a US drone-mapping company: high-precision 3D models, ground-truth wireframes and digital twins from photogrammetry and point-cloud data, plus systematic reconstruction failure-mode QA.</div></div>
      <div className="exp"><span className="tag">Prior</span><div className="r">Electronics reliability engineer</div><div className="d">Sensor-performance validation and ISO-9001 quality systems for a national engineering body.</div></div>
      <div className="exp"><span className="tag">Education</span><div className="r">MS, Electrical Engineering (AI &amp; Autonomous Systems) - 3.90&nbsp;GPA</div><div className="d">Thesis on vision-language-model-guided SLAM.</div></div>
    </div>
    <div className="panel"><div className="ph">Core strengths</div>
      <div className="group"><div className="gl">3D reconstruction &amp; SLAM</div>
        <span className="chip">SfM / COLMAP</span><span className="chip">Photogrammetry</span><span className="chip">Digital twins</span><span className="chip">Metric-scale calibration</span><span className="chip">VLM-guided SLAM</span></div>
      <div className="group"><div className="gl">Sensor fusion &amp; estimation</div>
        <span className="chip">Error-state EKF</span><span className="chip">Camera / IMU / GPS / RTK</span><span className="chip">Drift diagnosis</span><span className="chip">Degraded-mode design</span><span className="chip">Coordinate-frame math</span></div>
      <div className="group"><div className="gl">Edge &amp; real-time AI</div>
        <span className="chip">Jetson</span><span className="chip">TensorRT</span><span className="chip">YOLO / DeepSORT</span><span className="chip">Python &amp; C++</span><span className="chip">PyTorch / OpenCV / ROS2</span></div>
    </div>
  </div>
</section>

<section className="wrap spaced">
  <p className="lbl">/// Beyond the challenge</p>
  <p className="prose">Real-world work in the same three lanes - which he can walk you through live, even where the code sits behind an employer.</p>
  <div className="dgrid">
    <div className="card"><div className="ct"><span className="accent">Production reconstruction &amp; digital twins</span></div><p>Years generating high-precision 3D models and ground-truth wireframes from drone photogrammetry and point clouds, with rigorous metric-scale QA - the practical spine under his capture-to-metric-export reconstruction skill.</p></div>
    <div className="card"><div className="ct"><span className="accent">Edge detection &amp; VLM-guided SLAM</span></div><p>Real-time detection and multi-object tracking on a Jetson edge device, and a master's thesis integrating vision-language models with a navigation agent to avoid the actions that cause SLAM tracking failure.</p></div>
  </div>
</section>

<section><div className="cta"><h2>Next step with Ali</h2>
  <p>If he looks like a fit, tell us and we'll coordinate scheduling. If you'd like to see anything specific first - a deeper walk of the filter, a live run of the pose service, or his reconstruction work - we'll set it up.</p></div></section>

<footer>&copy; 2026 First Epic - Confidential. Prepared exclusively for Lightcraft.</footer>
    </div>
  );
}
