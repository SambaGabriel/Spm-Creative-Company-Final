import React from 'react';
import { Zap, Lightbulb, Music, Mic2, Film } from 'lucide-react';
import { useSonic } from './SonicIdentity';

const services = [
  {
    id: "01",
    title: "DEFINE",
    category: "Artistic Direction",
    details: "Research / Curation / Positioning",
    icon: <Lightbulb className="w-4 h-4" />
  },
  {
    id: "02",
    title: "CREATE",
    category: "Sonic Architecture",
    details: "Original Scores / SFX / Audio Branding",
    icon: <Music className="w-4 h-4" />
  },
  {
    id: "03",
    title: "EXECUTE",
    category: "Production",
    details: "Recording / Mixing / Mastering",
    icon: <Mic2 className="w-4 h-4" />
  },
  {
    id: "04",
    title: "MATERIALIZE",
    category: "Audiovisual",
    details: "Cinematic Direction / 8K Workflow",
    icon: <Film className="w-4 h-4" />
  }
];

export const Services: React.FC = () => {
  const { playHover } = useSonic();

  return (
    <section id="services" className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Top Line matching Infrastructure */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-[94%] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 mb-8 lg:mb-0">
            <div className="flex items-center gap-3 mb-6">
               <Zap className="text-white w-4 h-4 animate-pulse" />
               <span className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase">Creative Matrix: Active</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-white leading-tight mb-6">
              Capabilities
            </h3>
            <p className="text-neutral-500 text-sm font-light max-w-xs leading-relaxed">
              A multidisciplinary approach designed for complex creative challenges. Bridging strategy and execution.
            </p>
          </div>

          {/* Right Column - Grid of Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  onMouseEnter={playHover}
                  className="p-8 border border-white/5 bg-neutral-900/10 hover:bg-white/5 transition-all duration-700 group relative overflow-hidden flex flex-col justify-between min-h-[200px]"
                >
                  
                  {/* Decorative dot */}
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>

                  {/* Header: Icon + Category */}
                  <div className="flex items-center gap-4 mb-6 text-neutral-500 group-hover:text-white transition-colors">
                    {service.icon}
                    <span className="text-[9px] font-mono tracking-widest uppercase">{service.category}</span>
                  </div>

                  {/* Main Title */}
                  <h4 className="text-4xl font-bold text-white tracking-tighter uppercase group-hover:translate-x-2 transition-transform duration-500 mb-4">
                    {service.title}
                  </h4>

                  {/* Footer: Details (replacing decorative bars for functionality) */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                     <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider group-hover:text-neutral-300 transition-colors">
                       {service.details}
                     </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom Status Bar */}
            <div className="mt-8 p-6 bg-white/[0.02] border border-white/5 font-mono text-[8px] text-neutral-700 uppercase tracking-[0.4em] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span>Methodology: Agile / Cinematic</span>
                <span className="hidden md:block">Process: End-to-End</span>
                <span className="animate-pulse">Ready to deploy...</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};