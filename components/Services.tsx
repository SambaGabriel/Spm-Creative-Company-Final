import React from 'react';
import { Reveal } from './Reveal';

const services = [
  {
    id: '01',
    title: 'DEFINE',
    category: 'Artistic Direction',
    description: 'It starts before the first note. Research, cultural context, and positioning that decide what a project should mean and who it should move.',
    deliverables: 'Creative strategy / Cultural & market research / Positioning / Sonic identity frameworks',
  },
  {
    id: '02',
    title: 'CREATE',
    category: 'Sonic Architecture',
    description: 'Original music and sound built as identity, not decoration. Composition, arrangement, and sonic systems as recognizable as a visual logo.',
    deliverables: 'Original scores & composition / Arrangement & musical direction / Audio branding / Music supervision',
  },
  {
    id: '03',
    title: 'EXECUTE',
    category: 'Production',
    description: 'End to end, from the first session to the final master. We run the room, the crew, and the schedule at a cinematic standard.',
    deliverables: 'Recording & studio production / Mixing & mastering / Shoot production management / Multi-format delivery',
  },
  {
    id: '04',
    title: 'MATERIALIZE',
    category: 'Audiovisual',
    description: 'Image and sound delivered as one. Cinematic direction, color, and edit that turn a brand or an artist into a film.',
    deliverables: 'Cinematic direction / 6K capture (up to 8K) / Color grading & motion graphics / Cuts for every platform',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-[94%] mx-auto px-6">

        {/* Section header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8">
            <div>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-[0.85]">
                Capabilities
              </h3>
            </div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 max-w-xs mt-6 md:mt-0 md:text-right leading-relaxed">
              Music · Image · Strategy — a multidisciplinary studio bridging Miami &amp; São Paulo.
            </p>
          </div>
        </Reveal>

        {/* Editorial rows */}
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 80}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start py-12 group">
              {/* Left: index + verb */}
              <div className="lg:col-span-6">
                <h4 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-[0.85] group-hover:translate-x-2 transition-transform duration-500">
                  {s.title}
                </h4>
              </div>
              {/* Right: discipline + description + deliverables */}
              <div className="lg:col-span-6 lg:pt-3">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 block mb-5">{s.category}</span>
                <p className="text-base md:text-lg font-light text-neutral-300 leading-relaxed max-w-xl mb-6">{s.description}</p>
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-neutral-500 leading-relaxed">{s.deliverables}</p>
              </div>
            </div>
          </Reveal>
        ))}

      </div>
    </section>
  );
};
