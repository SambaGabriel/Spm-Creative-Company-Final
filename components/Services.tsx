import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

// Cinematic só no desktop e sem prefers-reduced-motion.
function useCinematic() {
  const [cinematic, setCinematic] = useState(false);
  useEffect(() => {
    const mqDesktop = window.matchMedia('(min-width: 1024px)');
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setCinematic(mqDesktop.matches && !mqReduce.matches);
    update();
    mqDesktop.addEventListener('change', update);
    mqReduce.addEventListener('change', update);
    return () => {
      mqDesktop.removeEventListener('change', update);
      mqReduce.removeEventListener('change', update);
    };
  }, []);
  return cinematic;
}

const SectionHeader: React.FC = () => (
  <div className="flex flex-col md:flex-row md:items-end justify-between">
    <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-[0.85]">
      Capabilities
    </h3>
    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 max-w-xs mt-6 md:mt-0 md:text-right leading-relaxed">
      Music · Image · Strategy — a multidisciplinary studio bridging Miami &amp; São Paulo.
    </p>
  </div>
);

/* ───────── Fallback estático (mobile / reduced-motion): lista de hoje ───────── */
const ServicesStatic: React.FC = () => (
  <section id="services" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
    <div className="max-w-[94%] mx-auto px-6">
      <Reveal>
        <div className="pb-8"><SectionHeader /></div>
      </Reveal>
      {services.map((s, i) => (
        <Reveal key={s.id} delay={i * 80}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start py-12 group">
            <div className="lg:col-span-6">
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-[0.85]">
                {s.title}
              </h4>
            </div>
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

/* ───────── Cinematic (desktop): palco fixado, scroll conduz os 4 atos ───────── */
const ServicesCinematic: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const acts = gsap.utils.toArray<HTMLElement>('.cap-act', stage);

      // Mede, com tudo em estado neutro, o deslocamento do slot final de cada verbo até o centro do palco.
      const offsets = acts.map((act) => {
        const verb = act.querySelector<HTMLElement>('.cap-verb')!;
        const sr = stage.getBoundingClientRect();
        const vr = verb.getBoundingClientRect();
        return {
          dx: sr.left + sr.width / 2 - (vr.left + vr.width / 2),
          dy: sr.top + sr.height / 2 - (vr.top + vr.height / 2),
        };
      });

      gsap.set(acts, { autoAlpha: 0 });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => '+=' + window.innerHeight * acts.length * 1.15,
          pin: stage,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      acts.forEach((act, i) => {
        const verb = act.querySelector<HTMLElement>('.cap-verb')!;
        const eyebrow = act.querySelector<HTMLElement>('.cap-eyebrow')!;
        const words = act.querySelectorAll<HTMLElement>('.cap-word');
        const deliv = act.querySelector<HTMLElement>('.cap-deliv')!;
        const { dx, dy } = offsets[i];

        tl.set(act, { autoAlpha: 1 })
          // 1) verbo nasce GRANDE no centro do palco
          .fromTo(verb, { x: dx, y: dy, scale: 2.2, autoAlpha: 0 }, { autoAlpha: 1, duration: 1.1 })
          .to({}, { duration: 0.5 }) // segura no centro
          // 2) voa/assenta no slot lateral
          .to(verb, { x: 0, y: 0, scale: 1, duration: 2.2, ease: 'power3.inOut' })
          // 3) texto entra: disciplina → palavras → entregáveis
          .fromTo(eyebrow, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.9')
          .fromTo(words, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.035 }, '-=0.5')
          .fromTo(deliv, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.2')
          .to({}, { duration: 1.8 }); // tempo de leitura
        // 4) sai de cena (menos o último ato, que fica)
        if (i < acts.length - 1) tl.to(act, { autoAlpha: 0, duration: 0.8 });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-neutral-950 relative">
      <div ref={stageRef} className="h-screen relative overflow-hidden">
        {/* Header fixo no topo do palco */}
        <div className="max-w-[94%] mx-auto px-6 pt-28">
          <SectionHeader />
        </div>

        {/* Atos — um por vez, conduzidos pelo scroll */}
        {services.map((s) => {
          const words = s.description.split(' ');
          return (
            <div key={s.id} className="cap-act absolute inset-0 flex items-center invisible">
              <div className="max-w-[94%] mx-auto px-6 w-full grid grid-cols-12 gap-10 items-center">
                <div className="col-span-6">
                  <div className="cap-verb inline-block will-change-transform">
                    <h4 className="text-5xl xl:text-6xl font-black tracking-tighter uppercase text-white leading-[0.85]">
                      {s.title}
                    </h4>
                  </div>
                </div>
                <div className="col-span-6">
                  <span className="cap-eyebrow font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 block mb-5">{s.category}</span>
                  <p className="text-base md:text-lg font-light text-neutral-300 leading-relaxed max-w-xl mb-6">
                    {words.map((w, wi) => (
                      <React.Fragment key={wi}>
                        <span className="cap-word inline-block will-change-transform">{w}</span>{' '}
                      </React.Fragment>
                    ))}
                  </p>
                  <p className="cap-deliv font-mono text-[10px] tracking-[0.15em] uppercase text-neutral-500 leading-relaxed">{s.deliverables}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export const Services: React.FC = () => {
  const cinematic = useCinematic();
  return cinematic ? <ServicesCinematic /> : <ServicesStatic />;
};
