import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="relative py-24 md:py-40 bg-black text-white overflow-hidden border-b border-white/5">
      <div className="max-w-[94%] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight mb-8 uppercase">
              A world vision, <br />
              materialized <br />
              <span className="text-neutral-500">through art.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end pb-4">
             <div className="w-12 h-px bg-white/20 mb-6"></div>
             <p className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase">
                EST. 2019 / MIAMI - SÃO PAULO
             </p>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p className="text-xl md:text-2xl font-light leading-snug text-neutral-300">
              The union of three trajectories consolidates SPM as an integrated <span className="text-white font-normal underline underline-offset-4 decoration-neutral-700">creative ecosystem</span>. 
            </p>
            <p className="text-neutral-500 text-lg leading-relaxed">
              We combine music, image, and strategy to serve artists, brands, and institutions. 
              Originally established in 2019 as SPM Music Group Brasil, the company has evolved into its current global headquarters, <strong>SPM Creative Company USA LLC</strong>.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <p className="text-neutral-500 text-lg leading-relaxed">
              We are building new bridges between cultures, translating the strength of Brazilian creativity into a sophisticated global language. Based in Miami with operations in São Paulo.
            </p>
            <div className="mt-12 p-8 border border-white/10 bg-neutral-900/10">
               <p className="text-white text-lg font-light tracking-wide">
                "A global SPM, sophisticated and connected with the essence of culture."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};