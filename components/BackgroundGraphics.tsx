
import React from 'react';

export const BackgroundGraphics: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-20">
      <svg 
        className="absolute bottom-0 w-full h-[40vh] md:h-[60vh] text-white/10" 
        viewBox="0 0 1000 300" 
        preserveAspectRatio="none"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Miami Skyline Silhouette - Minimalist Line */}
        <path 
          d="M0,280 L50,280 L55,240 L70,240 L75,280 L120,280 L125,200 L145,200 L150,280 L180,280 L190,150 L220,150 L230,280 L250,280 L260,210 L285,210 L295,280 L350,280" 
          stroke="currentColor" 
          strokeWidth="0.5"
          className="animate-pulse"
        />
        
        {/* São Paulo Skyline Silhouette - Minimalist Line */}
        <path 
          d="M650,280 L680,280 L690,180 L720,180 L730,280 L750,280 L760,210 L785,210 L795,280 L820,280 L840,100 L850,280 L880,280 L895,220 L920,220 L935,280 L1000,280" 
          stroke="currentColor" 
          strokeWidth="0.5"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        {/* Fluid connection lines */}
        <path 
          d="M350,280 Q500,270 650,280" 
          stroke="currentColor" 
          strokeWidth="0.2" 
          strokeDasharray="4 4"
        />

        {/* Decorative thin horizon line */}
        <line x1="0" y1="280.5" x2="1000" y2="280.5" stroke="currentColor" strokeWidth="0.2" />
      </svg>

      {/* Subtle floating glow for "fluidity" */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};
