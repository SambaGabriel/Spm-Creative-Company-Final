import React from 'react';
import { Reveal } from './Reveal';

const TEAM_IMAGE_URL = "/team.jpg";

const partners = [
  {
    id: '01',
    name: 'Gabriel Arevalo',
    role: 'Founder & Musical Director',
    bio: 'Strategic pillar with deep global presence and over 3,000 concerts directed. A legitimate representative of Bossa Nova and the "Real MPB" movements, he leads SPM\'s executive positioning as a bridge between tradition and the global market.',
  },
  {
    id: '02',
    name: 'Maestro Caixote',
    role: 'Maestro & Arranger',
    bio: 'With over 40 years of career and 100 million records sold, Caixote is the musical soul and the technical sophistication of the group. His legacy defines the standard of excellence at SPM.',
  },
  {
    id: '03',
    name: 'João Paulo Faria',
    role: 'Audiovisual Director & Partner',
    bio: 'Miami-based director, specialist in cinematic narrative and AI integration. He elevates SPM\'s visual aesthetics to global standards, connecting the music to powerful visual storytelling.',
  },
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-[#efece3] text-[#0a0a0a] relative">
      <div className="max-w-[94%] mx-auto px-6">

        {/* Section header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8">
            <div>
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#0a0a0a]/45 block mb-4">
                The Vision / Partners
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                The Vision
              </h2>
            </div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#0a0a0a]/45 max-w-xs mt-6 md:mt-0 md:text-right leading-relaxed">
              Three trajectories — music and image converge to create realities.
            </p>
          </div>
        </Reveal>

        {/* Portrait + caption */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end py-12">
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] overflow-hidden bg-[#0a0a0a]/5">
                <img src={TEAM_IMAGE_URL} alt="The Partners" loading="lazy" className="w-full h-full object-cover object-top grayscale contrast-[1.15] hover:contrast-100 transition-all duration-1000" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#0a0a0a]/45 leading-relaxed">
                SPM Partners — João Paulo Faria / Gabriel Arevalo / Maestro Caixote.
              </p>
              <p className="text-xl md:text-2xl font-light leading-relaxed mt-6 max-w-md">
                The union of three trajectories consolidates SPM&apos;s global expansion.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Partner entries */}
        {partners.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start py-10 group">
              <div className="lg:col-span-5">
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] group-hover:translate-x-2 transition-transform duration-500">{p.name}</h3>
              </div>
              <div className="lg:col-span-7">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]/50 block mb-4">{p.role}</span>
                <p className="text-base text-[#0a0a0a]/70 leading-relaxed font-light max-w-xl">{p.bio}</p>
              </div>
            </div>
          </Reveal>
        ))}

      </div>
    </section>
  );
};
