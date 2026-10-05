'use client';
// Collier.Simon - silo'd video gallery (6 videos Matt requested to share internally).
// Separate page/token from the capabilities page (f106140cf026); same login style.
// Clean poster + centered play button by default; click reveals native controls
// (incl. fullscreen) and plays. Real <video> elements so view/play tracking still fires.
import { useRef, useState } from 'react';

const BLOB = 'https://n1gj0ixm5ptx7dl8.public.blob.vercel-storage.com/assessments';
const TOK = '6dbbbf98d386';

type V = { title: string; poster: string; src: string; vertical: boolean };
const VIDEOS: V[] = [
  { title: 'The Standoff',     poster: 'ad-standoff.jpg',    src: `${BLOB}/f2a98f3b8d432c71/collier-standoff-n.mp4.mp4`,    vertical: false },
  { title: 'Crumble',          poster: 'crumble.jpg',        src: `${BLOB}/440d8a6909250a06/collier-crumble.mp4.mp4`,       vertical: true  },
  { title: 'Haval',            poster: 'ad-havel.jpg',       src: `${BLOB}/6b41eb447cd9b3e7/collier-haval-n.mp4.mp4`,       vertical: false },
  { title: 'Kia Sorento',      poster: 'kiaSorento.jpg',     src: `${BLOB}/6fe60376e3d6fb44/collier-kiaSorento.mp4.mp4`,    vertical: false },
  { title: 'Fast Food Sizzle', poster: 'fastFoodSizzle.jpg', src: `${BLOB}/493a9a700849dcb7/collier-fastFoodSizzle.mp4.mp4`, vertical: false },
  { title: 'Gold Snow',        poster: 'goldSnow.jpg',       src: `${BLOB}/bb2afe1319b1e245/collier-goldSnow.mp4.mp4`,      vertical: false },
];

function Tile({ v }: { v: V }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const start = () => {
    const el = ref.current;
    if (!el) return;
    el.controls = true;
    const p = el.play();
    if (p && typeof p.then === 'function') p.catch(() => {});
    setPlaying(true);
  };
  return (
    <div className="card">
      <video
        ref={ref}
        poster={`/c/${TOK}/assets/${v.poster}`}
        data-media-title={v.title}
        preload="metadata"
        playsInline
        controlsList="nodownload noremoteplayback noplaybackrate"
        onClick={() => { if (!playing) start(); }}
      >
        <source src={v.src} type="video/mp4" />
      </video>
      {!playing && (
        <button type="button" className="play" aria-label={`Play ${v.title}`} onClick={start}>
          <span aria-hidden="true">&#9654;</span>
        </button>
      )}
      <span className="tag">{v.title}</span>
    </div>
  );
}

export default function CollierSimonGallery() {
  return (
    <div>
      <style>{`
  :root{--bg:#0a0a0a;--card:#111214;--line:#262626;--ink:#e8eaed;--ink2:#9aa2ac;--ink3:#6b7280;
    --indigo:#818cf8;--indigo2:#6366f1;--purple:#a855f7;}
  *{box-sizing:border-box;}html{-webkit-text-size-adjust:100%;}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
    line-height:1.6;font-size:16px;-webkit-font-smoothing:antialiased;}
  .wrap{max-width:1080px;margin:0 auto;padding:0 24px;}
  /* canonical dark scrollbar (matches app/globals.css) */
  ::-webkit-scrollbar{width:10px;}
  ::-webkit-scrollbar-track{background:rgb(15,23,42);}
  ::-webkit-scrollbar-thumb{background:rgb(51,65,85);border-radius:5px;}
  ::-webkit-scrollbar-thumb:hover{background:rgb(71,85,105);}
  .accent{background:linear-gradient(135deg,#6366f1,#a855f7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;}
  img{max-width:100%;display:block;}
  nav{position:sticky;top:0;z-index:50;backdrop-filter:blur(12px);background:rgba(10,10,10,.82);border-bottom:1px solid var(--line);}
  nav .wrap{display:flex;align-items:center;justify-content:space-between;height:62px;gap:16px;}
  .brand{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.14em;font-size:.72rem;text-transform:uppercase;white-space:nowrap;}
  .fe{width:25px;height:25px;display:grid;place-items:center;background:#fff;color:#0a0a0a;border-radius:6px;font-weight:900;font-size:.7rem;}
  .prep{color:var(--ink3);font-size:.76rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  header.wrap{padding-top:clamp(64px,8vw,104px);padding-bottom:clamp(26px,3vw,36px);}
  .pill{display:inline-block;font-size:.7rem;font-weight:600;letter-spacing:.06em;color:#c7d2fe;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.22);border-radius:999px;padding:6px 12px;margin-bottom:20px;}
  h1{font-size:clamp(2.2rem,5vw,3.4rem);font-weight:800;letter-spacing:-.03em;line-height:1.02;margin:0 0 12px;}
  .sub{color:var(--ink2);font-size:clamp(1rem,1.5vw,1.15rem);max-width:56ch;margin:0;}
  .gallery{column-count:2;column-gap:18px;padding-bottom:28px;}
  @media(max-width:720px){.gallery{column-count:1;}}
  .card{break-inside:avoid;margin:0 0 18px;position:relative;border:1px solid var(--line);
    border-radius:14px;overflow:hidden;background:#000;line-height:0;}
  .card video{width:100%;height:auto;display:block;background:#000;cursor:pointer;}
  /* centered play button (hidden once playing) */
  .play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;
    width:66px;height:66px;border-radius:999px;background:rgba(10,10,10,.5);
    border:1px solid rgba(255,255,255,.5);color:#fff;display:grid;place-items:center;
    font-size:1.4rem;padding-left:5px;cursor:pointer;backdrop-filter:blur(3px);
    transition:transform .18s,background .18s,border-color .18s;}
  .card:hover .play{transform:translate(-50%,-50%) scale(1.06);background:rgba(99,102,241,.55);border-color:rgba(129,140,248,.8);}
  /* name tag: fades in on hover, always on for touch; hidden once a control bar is up */
  .tag{position:absolute;left:10px;bottom:10px;z-index:2;font-size:.72rem;font-weight:600;color:var(--ink);line-height:1.2;
    background:rgba(10,10,10,.62);border:1px solid var(--line);border-radius:7px;padding:4px 9px;
    opacity:0;transition:opacity .18s;pointer-events:none;backdrop-filter:blur(4px);}
  .card:hover .tag{opacity:1;}
  @media(hover:none){.tag{opacity:1;}}
  footer{color:var(--ink3);font-size:.79rem;text-align:center;padding:26px 0 56px;border-top:1px solid var(--line);}
`}</style>

      <nav><div className="wrap">
        <div className="brand"><span className="fe">FE</span> First Epic</div>
        <div className="prep">Prepared exclusively for Collier.Simon</div>
      </div></nav>

      <header className="wrap">
        <span className="pill">First Epic &middot; AI Filmmakers</span>
        <h1>Selected <span className="accent">work</span></h1>
        <p className="sub">A sample of what AI filmmakers from First Epic can deliver.</p>
      </header>

      <div className="wrap">
        <div className="gallery">
          {VIDEOS.map((v) => <Tile key={v.title} v={v} />)}
        </div>
      </div>

      <footer>&copy; 2026 First Epic. Confidential and proprietary. Prepared exclusively for Collier.Simon.</footer>
    </div>
  );
}
