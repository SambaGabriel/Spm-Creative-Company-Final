import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown, Play, Volume2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

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

      return () => video.removeEventListener('canplay', playVideo);
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

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
          className="w-full h-full object-cover grayscale brightness-[0.4] contrast-[1.1]"
        >
          <source src="showreel.mp4" type="video/mp4" />
          <div className="w-full h-full bg-neutral-900"></div>
        </video>
        
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black opacity-90 pointer-events-none" />
      </div>

      {/* Technical Metadata UI */}
      <div className="absolute top-32 left-8 md:left-12 z-20 hidden md:block">
        <div className="flex flex-col gap-1 font-mono text-[8px] tracking-[0.2em] text-white/30 uppercase">
          <p>Format: 4K DCI LOG</p>
          <p>FPS: 23.976</p>
          <p>Color: SPM_LUT_V4</p>
        </div>
      </div>

      <div className="absolute top-32 right-8 md:right-12 z-20">
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-white uppercase">Showreel 2025 // ON AIR</span>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center">
        <button 
          onClick={toggleMute}
          className="group flex flex-col items-center focus:outline-none"
          aria-label={isMuted ? "Unmute showreel" : "Mute showreel"}
        >
            <div className="w-16 h-16 md:w-20 md:h-20 border border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:bg-white group-hover:border-white transition-all duration-700">
                {isMuted ? (
                  <Play className="text-white group-hover:text-black transition-colors ml-1" size={24} fill="currentColor" />
                ) : (
                  <Volume2 className="text-white group-hover:text-black transition-colors" size={24} />
                )}
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-8 text-[9px] md:text-xs font-bold tracking-[0.6em] text-gray-400 uppercase">
              <span className="hover:text-white transition-colors">Miami</span>
              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              <span className="hover:text-white transition-colors">São Paulo</span>
            </div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 group cursor-pointer hover:opacity-100 transition-opacity">
        <a href="#manifesto" onClick={scrollToManifesto} aria-label="Scroll down">
          <ArrowDown className="text-white" size={28} strokeWidth={1} />
        </a>
      </div>
    </section>
  );
};