import React, { useRef, useEffect, useState } from 'react';

interface HeroProps {
  startAnimation: boolean;
}

export const Hero: React.FC<HeroProps> = ({ startAnimation }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showText, setShowText] = useState(false);
  const [videoReveal, setVideoReveal] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (startAnimation) {
      // Inicia a entrada do texto
      setShowText(true);
      
      // Agenda a saída do texto e revelação do vídeo
      // 1.5s (animação de entrada) + 2.0s (tempo de leitura) = 3.5s
      const timer = setTimeout(() => {
        setShowText(false);
        setVideoReveal(true);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [startAnimation]);

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
          className={`w-full h-full object-cover animate-slow-zoom transition-all duration-2000 ease-in-out ${videoReveal ? 'opacity-100 grayscale-0 contrast-100' : 'opacity-50 grayscale contrast-[1.1]'}`}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-concert-stage-with-lights-and-smoke-40176-large.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-2000 ${videoReveal ? 'opacity-40' : 'opacity-100'}`} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Content Layer - Brutalist & Bottom Aligned */}
      <div className="relative z-10 w-full max-w-[96%] mx-auto px-2 md:px-6">
        
        {/* Top Meta Info - Stays visible */}
        <div className={`absolute top-[-70vh] right-0 flex flex-col items-end text-right hidden md:flex mix-blend-difference transition-all duration-1000 delay-1000 ${startAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
           <div className="flex items-center gap-2 mb-2">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-xs font-mono tracking-widest text-white uppercase">Miami Operation Active</span>
           </div>
           <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">Global HQ · Est. 2019</span>
        </div>

        {/* Main Typography - Appears then Disappears */}
        <div className="pt-8 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            <div className="lg:col-span-12">
              {/* Miami is filled (Dominant) */}
              <h1 
                className={`text-[13vw] leading-[0.8] font-black tracking-tighter text-white uppercase mix-blend-overlay transition-all duration-1000 ease-out ${showText ? 'opacity-100' : 'opacity-0'}`}
              >
                Miami
              </h1>
              
              {/* Sao Paulo (No Tilde) */}
              <h1 
                className={`text-[13vw] leading-[0.8] font-black tracking-tighter text-white uppercase mix-blend-overlay ml-[4vw] transition-all duration-1000 ease-out ${showText ? 'delay-300 opacity-100' : 'opacity-0'}`}
              >
                Sao Paulo
              </h1>
              
              {/* 2026 - Future Timeline (Keeps outline for contrast/hierarchy) */}
              <h1 
                className={`text-[13vw] leading-[0.8] font-black tracking-tighter text-transparent stroke-white stroke-2 md:stroke-[3px] uppercase ml-[8vw] transition-all duration-1000 ease-out ${showText ? 'delay-500 opacity-100' : 'opacity-0'}`}
                style={{ WebkitTextStroke: '2px white' }}
              >
                2026
              </h1>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};