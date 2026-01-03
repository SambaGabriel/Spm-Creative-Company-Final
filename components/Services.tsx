import React from 'react';
import { Mic2, Film, Music4, Zap } from 'lucide-react';

const services = [
  {
    title: "01. DEFINE",
    subtitle: "Artistic Direction",
    description: "Research, curation, positioning, identity creation, and creative guidance.",
    icon: <Zap className="w-6 h-6 text-white" />
  },
  {
    title: "02. CREATE",
    subtitle: "Composition",
    description: "Musical works, sound design, original soundtracks, and jingles.",
    icon: <Music4 className="w-6 h-6 text-white" />
  },
  {
    title: "03. EXECUTE",
    subtitle: "Production",
    description: "Musical direction, recording, mixing, and mastering at the highest industry standards.",
    icon: <Mic2 className="w-6 h-6 text-white" />
  },
  {
    title: "04. MATERIALIZE",
    subtitle: "Audiovisual & Events",
    description: "Cinematic direction, project creation, sound systems, and immersive infrastructure.",
    icon: <Film className="w-6 h-6 text-white" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-[94%] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 border-b border-white/5 pb-10">
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">Capabilities</h3>
          <p className="text-neutral-500 mt-4 md:mt-0 font-light max-w-xs md:text-right">
              A multidisciplinar approach to creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-black/20 hover:bg-black transition-all duration-500 border border-white/5"
            >
              <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <p className="text-[10px] font-mono text-neutral-600 mb-2 tracking-widest">{service.title}</p>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{service.subtitle}</h4>
              <p className="text-sm text-neutral-500 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};