import React from 'react';
import { Database, Waves, Cpu, Eye, Activity } from 'lucide-react';

export const Infrastructure: React.FC = () => {
  const specs = [
    {
      label: "Audio standard",
      value: "Dolby Atmos Certified",
      icon: <Waves className="w-4 h-4" />
    },
    {
      label: "Visual Pipeline",
      value: "8K RAW Cinema Workflow",
      icon: <Eye className="w-4 h-4" />
    },
    {
      label: "Innovation",
      value: "Neural Post-Production",
      icon: <Cpu className="w-4 h-4" />
    },
    {
      label: "Cloud Ops",
      value: "Global Asset Sync (MIA-SAO)",
      icon: <Database className="w-4 h-4" />
    }
  ];

  return (
    <section id="infrastructure" className="py-24 bg-black border-y border-white/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-[94%] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
               <Activity className="text-white w-4 h-4 animate-pulse" />
               <span className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase">System Integrity: Nominal</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-white leading-tight mb-6">
              Infrastructure
            </h3>
            <p className="text-neutral-600 text-sm font-light max-w-xs leading-relaxed">
              Proprietary infrastructure engineered for high-performance creative execution across borders.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, i) => (
                <div key={i} className="p-8 border border-white/5 bg-neutral-900/10 hover:bg-white/5 transition-all duration-700 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-4 mb-6 text-neutral-500 group-hover:text-white transition-colors">
                    {spec.icon}
                    <span className="text-[9px] font-mono tracking-widest uppercase">{spec.label}</span>
                  </div>
                  <p className="text-xl font-bold text-white tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-500">{spec.value}</p>
                  <div className="mt-8 flex gap-1 h-[2px] w-12">
                     <div className="flex-1 bg-white/20"></div>
                     <div className="flex-1 bg-white/10"></div>
                     <div className="flex-1 bg-white/5"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white/[0.02] border border-white/5 font-mono text-[8px] text-neutral-700 uppercase tracking-[0.4em] flex justify-between items-center">
                <span>Network Latency: 42ms (MIA-SAO-DIRECT)</span>
                <span className="hidden md:block">Security Protocol: SPM_SEC_V3</span>
                <span className="animate-pulse">Active Sync...</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};