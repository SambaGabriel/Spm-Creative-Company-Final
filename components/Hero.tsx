import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showTitles, setShowTitles] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }

    // Timer para o fade out:
    // 1000ms (entrada da animação) + 2000ms (tempo visível) = 3000ms total antes de iniciar o sumiço
    const timer = setTimeout(() => {
      setShowTitles(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToManifesto = () => {
    const element = document.getElementById('manifesto');
    if (element) {
      const offset = 0;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-end pb-12 md:pb-24">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40 grayscale contrast-[1.2]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-concert-stage-with-lights-and-smoke-40176-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Content Layer - Brutalist & Bottom Aligned */}
      <div className="relative z-10 w-full max-w-[96%] mx-auto px-2 md:px-6">
        
        {/* Top Meta Info */}
        <div className="absolute top-[-70vh] right-0 flex flex-col items-end text-right hidden md:flex mix-blend-difference">
           <span className="text-xs font-mono tracking-widest text-white uppercase mb-2">Est. 2019</span>
           <span className="text-xs font-mono tracking-widest text-white uppercase">Global HQ</span>
        </div>

        {/* Main Typography */}
        <div className="pt-8 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            <div className={`lg:col-span-8 transition-opacity duration-1000 ease-in-out ${showTitles ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-[13vw] leading-[0.8] font-black tracking-tighter text-white uppercase mix-blend-overlay animate-in slide-in-from-bottom-10 fade-in duration-1000">
                Miami
              </h1>
              <h1 className="text-[13vw] leading-[0.8] font-black tracking-tighter text-transparent stroke-white stroke-2 md:stroke-[3px] uppercase ml-[4vw] opacity-80 animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-150" style={{ WebkitTextStroke: '2px white' }}>
                São Paulo
              </h1>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end pb-4 pl-2 lg:pl-0 border-l lg:border-l-0 border-white/20 lg:border-none ml-4 lg:ml-0">
               <p className="text-sm md:text-lg font-light text-neutral-300 max-w-xs leading-relaxed mb-8 animate-in fade-in delay-500 duration-1000">
                 The intersection of sound, vision, and strategy. A global production powerhouse bridging cultures.
               </p>
               
               <button 
                onClick={scrollToManifesto}
                className="group flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase text-white hover:text-neutral-400 transition-colors"
               >
                 <span className="w-8 h-[1px] bg-white group-hover:w-16 transition-all duration-500"></span>
                 Scroll to Explore
               </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};