import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { gsap } from 'gsap';

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

const RowContent: React.FC<{ s: typeof services[number]; cinematic?: boolean }> = ({ s, cinematic }) => {
  const words = s.description.split(' ');
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start py-12 group">
      <div className="lg:col-span-6">
        <div className={cinematic ? 'cap-verb relative z-40 inline-block will-change-transform' : 'inline-block'}>
          <h4 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-[0.85]">
            {s.title}
          </h4>
        </div>
      </div>
      <div className="lg:col-span-6 lg:pt-3">
        <span className={`${cinematic ? 'cap-eyebrow ' : ''}font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 block mb-5`}>{s.category}</span>
        <p className="text-base md:text-lg font-light text-neutral-300 leading-relaxed max-w-xl mb-6">
          {cinematic
            ? words.map((w, wi) => (
                <React.Fragment key={wi}>
                  <span className="cap-word inline-block will-change-transform">{w}</span>{' '}
                </React.Fragment>
              ))
            : s.description}
        </p>
        <p className={`${cinematic ? 'cap-deliv ' : ''}font-mono text-[10px] tracking-[0.15em] uppercase text-neutral-500 leading-relaxed`}>{s.deliverables}</p>
      </div>
    </div>
  );
};

/* ───────── Fallback estático (mobile / reduced-motion) ───────── */
const ServicesStatic: React.FC = () => (
  <section id="services" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
    <div className="max-w-[94%] mx-auto px-6">
      <Reveal>
        <div className="pb-8"><SectionHeader /></div>
      </Reveal>
      {services.map((s, i) => (
        <Reveal key={s.id} delay={i * 80}>
          <RowContent s={s} />
        </Reveal>
      ))}
    </div>
  </section>
);

/* ───────── Cinematic (desktop): automático, um ato por vez ─────────
   Cada verbo nasce GRANDE no centro da tela, assenta no seu slot e o texto
   entra em cascata. Uma FILA garante ordem (DEFINE→…→MATERIALIZE) e que
   nunca dois atos rodem juntos. A página mantém o tamanho normal. */
const ServicesCinematic: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>('.cap-row', section);
      const played = rows.map(() => false);
      const inView = rows.map(() => false);
      let playing = false;

      // Tudo invisível até o ato tocar.
      rows.forEach((row) => {
        gsap.set(row.querySelectorAll('.cap-verb, .cap-eyebrow, .cap-word, .cap-deliv'), { autoAlpha: 0 });
      });

      const playAct = (row: HTMLElement, done: () => void) => {
        const verb = row.querySelector<HTMLElement>('.cap-verb')!;
        const eyebrow = row.querySelector<HTMLElement>('.cap-eyebrow')!;
        const words = row.querySelectorAll<HTMLElement>('.cap-word');
        const deliv = row.querySelector<HTMLElement>('.cap-deliv')!;

        // Mede AGORA a distância do slot final até o centro da tela.
        const vr = verb.getBoundingClientRect();
        const dx = window.innerWidth / 2 - (vr.left + vr.width / 2);
        const dy = window.innerHeight / 2 - (vr.top + vr.height / 2);

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo(verb, { x: dx, y: dy, scale: 2.2, autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45 })
          .to({}, { duration: 0.45 }) // segura no centro
          .to(verb, { x: 0, y: 0, scale: 1, duration: 1.05, ease: 'power3.inOut' })
          .fromTo(eyebrow, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45 }, '-=0.45')
          .fromTo(words, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.022 }, '-=0.25')
          .fromTo(deliv, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.4 }, '-=0.15')
          // libera o próximo ato um pouco antes do fim (flow contínuo)
          .add(done, '-=0.5');
      };

      const tryNext = () => {
        if (playing) return;
        const next = played.findIndex((p) => !p);
        if (next === -1 || !inView[next]) return;
        playing = true;
        played[next] = true;
        playAct(rows[next], () => {
          playing = false;
          tryNext();
        });
      };

      const observers = rows.map((row, i) => {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              inView[i] = true;
              obs.unobserve(row);
              tryNext();
            }
          },
          { threshold: 0.35 }
        );
        obs.observe(row);
        return obs;
      });

      return () => observers.forEach((o) => o.disconnect());
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-[94%] mx-auto px-6">
        <Reveal>
          <div className="pb-8"><SectionHeader /></div>
        </Reveal>
        {services.map((s) => (
          <div key={s.id} className="cap-row">
            <RowContent s={s} cinematic />
          </div>
        ))}
      </div>
    </section>
  );
};

export const Services: React.FC = () => {
  const cinematic = useCinematic();
  return cinematic ? <ServicesCinematic /> : <ServicesStatic />;
};
