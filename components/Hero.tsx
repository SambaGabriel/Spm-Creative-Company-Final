import React, { useRef, useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }

    // Timer mantido em 2.5s (animação entrada + leitura)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-end pb-12 md:pb-24 border-b border-white/5">
      {/* Background Video Layer with Cinematic Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-50 grayscale contrast-[1.1] animate-slow-zoom"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-concert-stage-with-lights-and-smoke-40176-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Content Layer - Brutalist & Bottom Aligned */}
      <div className="relative z-10 w-full max-w-[96%] mx-auto px-2 md:px-6">
        
        {/* Top Meta Info - New USA Branch Indicator */}
        <div className="absolute top-[-70vh] right-0 flex flex-col items-end text-right hidden md:flex mix-blend-difference">
           <div className="flex items-center gap-2 mb-2">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-xs font-mono tracking-widest text-white uppercase">Miami Operation Active</span>
           </div>
           <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">Global HQ · Est. 2019</span>
        </div>

        {/* Main Typography */}
        <div className="pt-8 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* duration-700: Fadeout mais lento e suave */}
            <div className={`lg:col-span-12 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              {/* Miami is filled (Dominant) */}
              <h1 className="text-[13vw] leading-[0.8] font-black tracking-tighter text-white uppercase mix-blend-overlay animate-in slide-in-from-bottom-10 fade-in duration-1000">
                Miami
              </h1>
              {/* São Paulo is outlined (Support/Origin) */}
              <h1 className="text-[13vw] leading-[0.8] font-black tracking-tighter text-transparent stroke-white stroke-2 md:stroke-[3px] uppercase ml-[4vw] animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-150" style={{ WebkitTextStroke: '2px white' }}>
                São Paulo
              </h1>
              {/* 2026 - Future Timeline */}
              <h1 className="text-[13vw] leading-[0.8] font-black tracking-tighter text-transparent stroke-white stroke-2 md:stroke-[3px] uppercase ml-[8vw] animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-300" style={{ WebkitTextStroke: '2px white' }}>
                2026
              </h1>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};