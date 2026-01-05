import React, { useState, useRef, useEffect, createContext, useContext } from 'react';
import { Volume2, VolumeX, Activity } from 'lucide-react';

// Contexto para disponibilizar os sons para outros componentes
interface SonicContextType {
  playHover: () => void;
  playClick: () => void;
  isMuted: boolean;
}

const SonicContext = createContext<SonicContextType>({
  playHover: () => {},
  playClick: () => {},
  isMuted: true,
});

export const useSonic = () => useContext(SonicContext);

export const SonicIdentity: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Audio Assets
  // Ambient Texture: Dark, cinematic drone
  const bgmUrl = "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3"; 
  // Hover: Subtle high-tech digital blip
  const hoverSfxUrl = "https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3";
  // Click: Lower mechanical lock sound
  const clickSfxUrl = "https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-click-900.mp3";

  const hoverAudio = useRef<HTMLAudioElement | null>(null);
  const clickAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize SFX
    hoverAudio.current = new Audio(hoverSfxUrl);
    hoverAudio.current.volume = 0.2; // Subtle

    clickAudio.current = new Audio(clickSfxUrl);
    clickAudio.current.volume = 0.3;

    // Initialize BGM
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        setIsPlaying(true);
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  const playHover = () => {
    if (!isMuted && hoverAudio.current) {
      hoverAudio.current.currentTime = 0;
      hoverAudio.current.play().catch(() => {});
    }
  };

  const playClick = () => {
    if (!isMuted && clickAudio.current) {
      clickAudio.current.currentTime = 0;
      clickAudio.current.play().catch(() => {});
    }
  };

  return (
    <SonicContext.Provider value={{ playHover, playClick, isMuted }}>
      {children}
      
      {/* Hidden BGM Player */}
      <audio ref={audioRef} src={bgmUrl} loop muted />

      {/* Visual Dock - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
        
        {/* Track Info (Visible only when playing) */}
        <div className={`hidden md:flex flex-col items-end transition-opacity duration-500 ${isPlaying && !isMuted ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest">Sonic Atmosphere</span>
          <div className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-[8px] font-mono text-white uppercase tracking-widest">SPM_DARK_AMBIENT_V1</span>
          </div>
        </div>

        {/* Control Button */}
        <button 
          onClick={toggleMute}
          className="group relative flex items-center justify-center w-12 h-12 bg-black/80 backdrop-blur-md border border-white/10 hover:border-white/40 rounded-full transition-all duration-300"
          aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
        >
          {/* Rotating Ring */}
          <div className={`absolute inset-0 rounded-full border border-dashed border-white/20 transition-all duration-[30s] ease-linear ${!isMuted ? 'animate-[spin_10s_linear_infinite]' : ''}`}></div>

          {isMuted ? (
            <VolumeX size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
          ) : (
            <div className="relative">
               <Activity size={16} className="text-white animate-pulse" />
            </div>
          )}
        </button>
      </div>
    </SonicContext.Provider>
  );
};