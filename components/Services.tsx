import React from 'react';
import { Lightbulb, Music, Mic2, Film } from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  {
    id: "01",
    title: "DEFINE",
    category: "Artistic Direction",
    description: "It starts before the first note. Research, cultural context, and positioning that decide what a project should mean and who it should move.",
    deliverables: "Creative strategy / Cultural & market research / Positioning / Sonic identity frameworks",
    icon: <Lightbulb className="w-4 h-4" />
  },
  {
    id: "02",
    title: "CREATE",
    category: "Sonic Architecture",
    description: "Original music and sound built as identity, not decoration. Composition, arrangement, and sonic systems as recognizable as a visual logo.",
    deliverables: "Original scores & composition / Arrangement & musical direction / Audio branding / Music supervision",
    icon: <Music className="w-4 h-4" />
  },
  {
    id: "03",
    title: "EXECUTE",
    category: "Production",
    description: "End to end, from the first session to the final master. We run the room, the crew, and the schedule at a cinematic standard.",
    deliverables: "Recording & studio production / Mixing & mastering / Shoot production management / Multi-format delivery",
    icon: <Mic2 className="w-4 h-4" />
  },
  {
    id: "04",
    title: "MATERIALIZE",
    category: "Audiovisual",
    description: "Image and sound delivered as one. Cinematic direction, color, and edit that turn a brand or an artist into a film.",
    deliverables: "Cinematic direction / 6K capture (up to 8K) / Color grading & motion graphics / Cuts for every platform",
    icon: <Film className="w-4 h-4" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Top Line matching Infrastructure */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-[94%] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column - Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 mb-8 lg:mb-0">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                 <span className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase">Music · Image · Strategy</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-white leading-tight mb-6">
                Capabilities
              </h3>
              <p className="text-neutral-500 text-sm font-light max-w-xs leading-relaxed">
                A multidisciplinary studio built for complex creative challenges, bridging strategy and execution across Miami and São Paulo.
              </p>
            </Reveal>
          </div>

          {/* Right Column - Grid of Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Reveal key={index} delay={index * 100} className="h-full">
                <div
                  className="p-8 border border-white/5 bg-neutral-900/10 hover:bg-white/5 transition-all duration-700 group relative overflow-hidden flex flex-col h-full min-h-[280px]"
                >

                  {/* Index number */}
                  <div className="absolute top-0 right-0 p-5 text-[10px] font-mono text-white/15 group-hover:text-white/40 transition-colors">
                    {service.id}
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

                  {/* Description */}
                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Footer: Deliverables */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                     <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider group-hover:text-neutral-300 transition-colors leading-relaxed">
                       {service.deliverables}
                     </p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>

            {/* Bottom Process Bar */}
            <Reveal>
              <div className="mt-8 p-6 bg-white/[0.02] border border-white/5 font-mono text-[8px] text-neutral-600 uppercase tracking-[0.4em] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <span>Process — Pre-production · Capture · Post · Delivery</span>
                  <span>Miami · São Paulo</span>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
