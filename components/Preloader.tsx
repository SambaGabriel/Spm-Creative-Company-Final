import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("INITIALIZING UPLINK");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Pequeno delay antes de desmontar
          return 100;
        }
        
        // Simula variação de velocidade de carregamento
        const increment = Math.random() * 15; 
        return Math.min(prev + increment, 100);
      });
    }, 200);

    // Troca os textos de status baseado no progresso
    if (progress > 30) setStage("ESTABLISHING MIA-SAO BRIDGE");
    if (progress > 70) setStage("LOADING ASSETS");
    if (progress >= 99) setStage("READY");

    return () => clearInterval(timer);
  }, [onComplete, progress]);

  return (
    <div className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* 3D Wireframe Planet Container */}
      <div className="relative w-64 h-64 mb-12 flex items-center justify-center perspective-[1000px]">
        
        {/* Core Glow */}
        <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-50 animate-pulse"></div>

        {/* Sphere Rings (Vertical Longitudes) */}
        <div className="absolute w-full h-full border border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute w-full h-full border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" style={{ transform: 'rotateY(45deg)' }}></div>
        <div className="absolute w-full h-full border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" style={{ transform: 'rotateY(90deg)' }}></div>
        <div className="absolute w-full h-full border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" style={{ transform: 'rotateY(135deg)' }}></div>

        {/* Horizontal Latitude (Equator) */}
        <div className="absolute w-full h-full border-t border-b border-white/10 rounded-full scale-[0.98] rotate-[20deg]"></div>

        {/* Orbital Connection Ring 1 (MIA -> SAO) */}
        <div className="absolute w-[140%] h-[140%] border border-white/10 rounded-full animate-[spin_4s_linear_infinite_reverse] flex items-center justify-center" style={{ transform: 'rotateX(70deg) rotateY(10deg)' }}>
             {/* Data Packet */}
             <div className="absolute top-0 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        </div>

         {/* Orbital Connection Ring 2 */}
         <div className="absolute w-[120%] h-[120%] border border-dashed border-white/10 rounded-full animate-[spin_6s_linear_infinite]" style={{ transform: 'rotateX(60deg) rotateY(-20deg)' }}>
             <div className="absolute bottom-0 w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Progress & Data */}
      <div className="flex flex-col items-center gap-4 z-10">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
          {Math.floor(progress)}%
        </h1>
        
        <div className="flex flex-col items-center gap-2">
            <div className="h-[1px] w-24 bg-white/20">
                <div 
                    className="h-full bg-white transition-all duration-300 ease-out" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <span className="text-[9px] font-mono tracking-[0.3em] text-neutral-500 uppercase blink">
                {stage}
            </span>
        </div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 text-[8px] font-mono text-neutral-600">
        SYS.BOOT_SEQ_V.2.0
      </div>
      <div className="absolute bottom-8 right-8 text-[8px] font-mono text-neutral-600">
        SECURE CONNECTION
      </div>
    </div>
  );
};