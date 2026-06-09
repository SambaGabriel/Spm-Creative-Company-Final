import React, { useEffect, useRef, useState } from 'react';
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

// Dispara uma vez quando a linha entra na viewport (mesma ideia do Reveal).
function useInView<T extends Element>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const CapabilityRow: React.FC<{ s: typeof services[number] }> = ({ s }) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const words = s.description.split(' ');
  // Entregáveis entram depois das palavras (aprox.).
  const delivDelay = 0.7 + words.length * 0.026 + 0.15;
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start py-12 group ${inView ? 'in-view' : ''}`}
    >
      {/* Left: verbo — bloom grande e recua pro lugar */}
      <div className="lg:col-span-6">
        <div className="cap-verb inline-block">
          <h4 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-[0.85] group-hover:translate-x-2 transition-transform duration-500">
            {s.title}
          </h4>
        </div>
      </div>
      {/* Right: disciplina + descrição (palavra a palavra) + entregáveis */}
      <div className="lg:col-span-6 lg:pt-3">
        <span className="cap-eyebrow font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 block mb-5">{s.category}</span>
        <p className="text-base md:text-lg font-light text-neutral-300 leading-relaxed max-w-xl mb-6">
          {words.map((w, i) => (
            <React.Fragment key={i}>
              <span className="cap-word" style={{ animationDelay: `${0.7 + i * 0.026}s` }}>{w}</span>{' '}
            </React.Fragment>
          ))}
        </p>
        <p className="cap-deliv font-mono text-[10px] tracking-[0.15em] uppercase text-neutral-500 leading-relaxed" style={{ animationDelay: `${delivDelay}s` }}>
          {s.deliverables}
        </p>
      </div>
    </div>
  );
};

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

        {/* Editorial rows — animação cinematográfica ao entrar na tela */}
        {services.map((s) => (
          <CapabilityRow key={s.id} s={s} />
        ))}

      </div>
    </section>
  );
};
