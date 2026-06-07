import React from 'react';
import { Database, Waves, Cpu, Eye } from 'lucide-react';
import { Reveal } from './Reveal';

export const Infrastructure: React.FC = () => {
  const specs = [
    {
      label: "Audio",
      value: "Dolby Atmos",
      note: "Immersive, spatial audio delivery.",
      icon: <Waves className="w-4 h-4" />
    },
    {
      label: "Visual Pipeline",
      value: "6K Cinema (up to 8K)",
      note: "LOG / RAW capture, graded to a cinematic finish.",
      icon: <Eye className="w-4 h-4" />
    },
    {
      label: "Innovation",
      value: "AI-Augmented Production",
      note: "Human-led craft, AI woven through the workflow where it serves the work.",
      icon: <Cpu className="w-4 h-4" />
    },
    {
      label: "Operation",
      value: "Miami ↔ São Paulo",
      note: "One production bridge across two creative capitals.",
      icon: <Database className="w-4 h-4" />
    }
  ];

  return (
    <section id="infrastructure" className="py-24 bg-black border-y border-white/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-[94%] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          <div className="lg:col-span-4 lg:sticky lg:top-32 mb-8 lg:mb-0">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                 <span className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase">The craft behind the work</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-white leading-tight mb-6">
                Infrastructure
              </h3>
              <p className="text-neutral-600 text-sm font-light max-w-xs leading-relaxed">
                Cinema-grade capture, immersive sound, and a modern, AI-fluent workflow that runs between Miami and São Paulo.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, i) => (
                <Reveal key={i} delay={i * 100} className="h-full">
                <div className="p-8 border border-white/5 bg-neutral-900/10 hover:bg-white/5 transition-all duration-700 group relative overflow-hidden flex flex-col h-full min-h-[200px]">
                  <div className="flex items-center gap-4 mb-6 text-neutral-500 group-hover:text-white transition-colors">
                    {spec.icon}
                    <span className="text-[9px] font-mono tracking-widest uppercase">{spec.label}</span>
                  </div>
                  <p className="text-xl font-bold text-white tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-500 mb-4">{spec.value}</p>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed mt-auto">{spec.note}</p>
                  <div className="mt-6 flex gap-1 h-[2px] w-12">
                     <div className="flex-1 bg-white/20"></div>
                     <div className="flex-1 bg-white/10"></div>
                     <div className="flex-1 bg-white/5"></div>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-8 p-6 bg-white/[0.02] border border-white/5 font-mono text-[8px] text-neutral-600 uppercase tracking-[0.4em] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <span>Cinema-grade capture · Immersive audio · AI-augmented post</span>
                  <span>Miami · São Paulo</span>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
