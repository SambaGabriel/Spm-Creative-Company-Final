import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      
      const playVideo = () => {
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {
            console.log("Waiting for user interaction to play video.");
          });
        }
      };

      if (video.readyState >= 3) {
        playVideo();
      } else {
        video.addEventListener('canplay', playVideo);
      }

      // Lógica para desaparecer após 2 segundos (3s total considerando 1s de animação inicial)
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => {
        video.removeEventListener('canplay', playVideo);
        clearTimeout(timer);
      };
    }
  }, []);

  const scrollToManifesto = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('manifesto');
    if (element) {
      const offset = 100;
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
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover grayscale brightness-[0.35] contrast-[1.15]"
          poster="https://images.unsplash.com/photo-1514525253344-f814d8745485?q=80&w=1974&auto=format&fit=crop"
        >
          <source src="showreel.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          </div>
        </video>
        
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black opacity-90 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60" />
      </div>

      {/* Content Layer - Typography with Auto-Fade */}
      <div className={`relative z-10 flex flex-col items-center px-6 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-[900] tracking-[-0.06em] text-white uppercase leading-none animate-in fade-in slide-in-from-bottom-12 duration-1000">
          Miami <span className="text-white/10 mx-[-0.05em] block sm:inline">/</span> São Paulo
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 hover:opacity-100 transition-opacity duration-700 cursor-pointer">
        <a href="#manifesto" onClick={scrollToManifesto} className="flex flex-col items-center gap-2 group" aria-label="Explore the Vision">
          <span className="text-[8px] font-mono tracking-[0.5em] uppercase text-white/50 group-hover:text-white transition-colors">Discover</span>
          <ArrowDown className="text-white animate-bounce" size={20} strokeWidth={1} />
        </a>
      </div>
    </section>
  );
};