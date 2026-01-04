import React from 'react';

const services = [
  {
    id: "01",
    title: "DEFINE",
    category: "Artistic Direction",
    details: "Research / Curation / Positioning / Identity / Creative Guidance"
  },
  {
    id: "02",
    title: "CREATE",
    category: "Composition",
    details: "Musical Works / Sound Design / Original Soundtracks / Jingles"
  },
  {
    id: "03",
    title: "EXECUTE",
    category: "Production",
    details: "Musical Direction / Recording / Mixing / Mastering / Industry Standards"
  },
  {
    id: "04",
    title: "MATERIALIZE",
    category: "Audiovisual & Events",
    details: "Cinematic Direction / Project Creation / Sound Systems / Infrastructure"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 bg-neutral-950 border-t border-white/5">
      <div className="max-w-[96%] mx-auto px-2 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h3 className="text-sm font-mono tracking-[0.4em] text-neutral-500 uppercase">
            02 — Capabilities
          </h3>
          <p className="text-white text-lg md:text-xl font-light max-w-md text-right mt-4 md:mt-0">
            A multidisciplinary approach designed for <br/> complex creative challenges.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative border-t border-white/10 hover:border-white transition-colors duration-500 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center cursor-default"
            >
              <div className="flex items-baseline gap-8 md:gap-16">
                <span className="text-xs font-mono text-neutral-600 group-hover:text-white transition-colors">
                  {service.id}
                </span>
                <h4 className="text-4xl md:text-7xl font-bold text-neutral-800 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter">
                  {service.title}
                </h4>
              </div>

              <div className="mt-6 md:mt-0 md:text-right">
                <p className="text-sm font-mono text-white tracking-widest uppercase mb-2">
                  {service.category}
                </p>
                <p className="text-xs text-neutral-500 max-w-xs md:ml-auto group-hover:text-neutral-300 transition-colors">
                  {service.details}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10"></div>
        </div>

      </div>
    </section>
  );
};