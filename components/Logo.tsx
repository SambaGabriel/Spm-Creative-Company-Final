import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {/* Logo Block Wrapper */}
      <div className="relative group z-50">
        {/* Main Logo Text */}
        <div className="flex flex-col cursor-pointer select-none">
          <h1 className="text-4xl md:text-5xl font-[900] tracking-tighter text-white leading-[0.8]">
            SPM
          </h1>
        </div>

        {/* Hidden Coordinates Layer (On Hover) */}
        <div className="absolute top-full left-0 pt-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out pointer-events-none w-max">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="text-[8px] font-mono text-neutral-500 tracking-widest whitespace-nowrap">
                MIA 25.7617° N, 80.1918° W
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-transparent border border-neutral-600 rounded-full"></span>
              <span className="text-[8px] font-mono text-neutral-500 tracking-widest whitespace-nowrap">
                SAO 23.5558° S, 46.6396° W
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Divider - Fixed to pipe (|) by removing rotation */}
      <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>

      {/* Creative Company Badge */}
      <div className="hidden sm:flex flex-col justify-center select-none">
         <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-white uppercase leading-none mb-[3px]">
           Creative
         </span>
        <span className="text-[9px] font-mono tracking-[0.3em] text-neutral-600 uppercase leading-none">
          Company
        </span>
      </div>
    </div>
  );
};