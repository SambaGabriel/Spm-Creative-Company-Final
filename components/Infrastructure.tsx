import React, { useRef, useState } from 'react';
import { Reveal } from './Reveal';

const specs: { label: string; value: string; note: string; reel?: string }[] = [
  { label: 'Audio', value: 'Dolby Atmos', note: 'Immersive, spatial audio delivery.' },
  { label: 'Visual', value: '6K Cinema (up to 8K)', note: 'LOG / RAW capture, graded to a cinematic finish.', reel: '/fiberlytic-6k.mp4' },
  { label: 'Innovation', value: 'AI-Augmented Production', note: 'Human-led craft, AI woven through the workflow where it serves the work.' },
  { label: 'Operation', value: 'Miami ↔ São Paulo', note: 'One production bridge across two creative capitals.' },
];

export const Infrastructure: React.FC = () => {
  const [reelOpen, setReelOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openReel = () => {
    setReelOpen(true);
    const v = videoRef.current;
    if (v) { v.muted = true; v.currentTime = 0; v.play().catch(() => {}); }
  };
  const closeReel = () => {
    setReelOpen(false);
    videoRef.current?.pause();
  };

  return (
    <section id="infrastructure" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-[94%] mx-auto px-6">

        {/* Section header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8">
            <div>
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/40 block mb-4">
                Technical Specification
              </span>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-[0.85]">
                Infrastructure
              </h3>
            </div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 max-w-xs mt-6 md:mt-0 md:text-right leading-relaxed">
              The craft behind the work — cinema-grade capture, immersive sound, AI-fluent workflow.
            </p>
          </div>
        </Reveal>

        {/* Spec-sheet rows */}
        {specs.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div
              className={`relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline py-8 group ${s.reel ? 'cursor-pointer' : ''}`}
              onMouseEnter={s.reel ? openReel : undefined}
              onMouseLeave={s.reel ? closeReel : undefined}
            >
              <span className="md:col-span-3 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45">{s.label}</span>
              <h4 className="md:col-span-5 text-2xl md:text-4xl font-bold tracking-tight uppercase text-white group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-3">
                {s.value}
                {s.reel && (
                  <span className="font-mono text-[8px] tracking-[0.2em] text-white/40 border border-white/20 rounded-full px-2 py-1 normal-case whitespace-nowrap group-hover:text-white group-hover:border-white/50 transition-colors">
                    ▶ reel
                  </span>
                )}
              </h4>
              <p className="md:col-span-4 font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-500 leading-relaxed md:text-right">{s.note}</p>

              {/* Hover reel: real FiberLytic work, shot in 6K cinema */}
              {s.reel && (
                <div
                  className={`absolute right-0 bottom-full mb-4 z-30 pointer-events-none transition-all duration-500 ease-out ${reelOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}
                >
                  <div className="w-[320px] sm:w-[460px] border border-white/15 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.7)] overflow-hidden">
                    <div className="aspect-video bg-black overflow-hidden">
                      <video ref={videoRef} muted loop playsInline preload="metadata" className="w-full h-full object-cover">
                        <source src={s.reel} type="video/mp4" />
                      </video>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 font-mono text-[9px] tracking-[0.25em] uppercase text-white/55 border-t border-white/10">
                      <span>FiberLytic · Provium Tech</span>
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Shot in 6K
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ))}

      </div>
    </section>
  );
};
