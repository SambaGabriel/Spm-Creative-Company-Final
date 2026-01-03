import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-start ${className} group select-none cursor-pointer`}>
      <div className="flex items-center gap-0.5">
        <h1 className="text-4xl font-[900] tracking-[-0.1em] text-white leading-none uppercase">
          SPM
        </h1>
        <div className="h-6 w-[1px] bg-white/20 mx-3 group-hover:bg-white transition-all duration-700"></div>
        <div className="flex flex-col -space-y-1">
          <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">Creative</span>
          <span className="text-[10px] font-light tracking-[0.3em] text-neutral-500 uppercase group-hover:text-neutral-300 transition-colors">Company</span>
        </div>
      </div>
      
      <div className="flex items-center mt-2 w-full">
        <div className="h-[1px] w-4 bg-white/40 group-hover:w-full transition-all duration-1000 origin-left"></div>
        <span className="text-[6px] font-mono text-neutral-600 ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-1000 uppercase tracking-widest">
          25.7617° N, 80.1918° W // 23.5505° S, 46.6333° W
        </span>
      </div>
    </div>
  );
};