import React, { useState, useEffect } from 'react';

export const WorldClocks: React.FC = () => {
  const [times, setTimes] = useState({ miami: '', sp: '' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const miami = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false, hour: '2-digit', minute: '2-digit' });
      const sp = now.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour12: false, hour: '2-digit', minute: '2-digit' });
      setTimes({ miami, sp });
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-8 font-mono text-[9px] tracking-widest text-neutral-500 uppercase items-center">
      <div className="flex items-center gap-2">
        <span className="text-neutral-600 text-[7px] font-bold">MIA</span>
        <span className="text-white tabular-nums">{times.miami}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-neutral-600 text-[7px] font-bold">SAO</span>
        <span className="text-white tabular-nums">{times.sp}</span>
      </div>
      <div className="flex flex-col items-start leading-none border-l border-white/10 pl-8">
        <span className="text-neutral-600 text-[6px] mb-1 font-bold">CORE STATUS</span>
        <span className="text-white text-[8px] animate-pulse whitespace-nowrap">Neural Processing_</span>
      </div>
    </div>
  );
};

export const WaveformWidget: React.FC = () => {
  return (
    <div className="flex items-end gap-[2px] h-3">
      {[...Array(8)].map((_, i) => (
        <div 
          key={i} 
          className="w-[1px] bg-white opacity-40 animate-waveform"
          style={{ 
            height: `${20 + Math.random() * 80}%`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${0.5 + Math.random()}s`
          }}
        />
      ))}
    </div>
  );
};