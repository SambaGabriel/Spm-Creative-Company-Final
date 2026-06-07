import React from 'react';
import { Reveal } from './Reveal';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="relative bg-black text-white border-b border-white/10">
      <div className="max-w-[96%] mx-auto px-2 md:px-6">
        <div className="flex flex-col lg:flex-row">

          {/* Sticky Title Column */}
          <div className="lg:w-1/2 pt-24 pb-12 lg:py-40 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between border-r border-white/10 pr-8">
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
                An idea of a world <br/>
                materialized <br/>
                <span className="text-neutral-600">through music.</span>
              </h2>
            </div>
            <div className="hidden lg:block">
              <p className="text-[10px] font-mono text-neutral-600 uppercase">
                SPM Creative Co. &copy; Global
              </p>
            </div>
          </div>

          {/* Scrolling Creed Column - revealed line by line */}
          <div className="lg:w-1/2 lg:py-40 pb-24 pt-12 pl-0 lg:pl-20 flex flex-col justify-center space-y-24 lg:space-y-40">

            <Reveal>
              <p className="text-2xl md:text-4xl font-light leading-tight text-white">
                We don&apos;t make content. <br/>
                <span className="text-neutral-500">We build meaning out of sound.</span>
              </p>
            </Reveal>

            <Reveal>
              <div className="space-y-8">
                <div className="w-12 h-1 bg-white"></div>
                <p className="text-2xl md:text-4xl font-light leading-tight text-white">
                  Music. Image. Strategy. <br/>
                  <span className="text-neutral-500">One language.</span>
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="space-y-8">
                <p className="text-2xl md:text-4xl font-light leading-tight text-white">
                  Born in Brazil, 2019. <br/>
                  <span className="text-neutral-500">Built for the global stage.</span>
                </p>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
                  Founded as SPM Music Group Brasil, now SPM Creative Company USA LLC. Based in Miami, with operations in São Paulo.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <p className="text-xl md:text-2xl font-light leading-snug text-neutral-300 max-w-lg">
                For the artists, brands, and institutions who dare to lead.
              </p>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
};
