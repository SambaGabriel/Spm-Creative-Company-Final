import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="relative bg-black text-white border-b border-white/10">
      <div className="max-w-[96%] mx-auto px-2 md:px-6">
        <div className="flex flex-col lg:flex-row">
          
          {/* Sticky Title Column */}
          <div className="lg:w-1/2 pt-24 pb-12 lg:py-40 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between border-r border-white/10 pr-8">
            <div>
              {/* Removed 'The Vision' H3 header here */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
                An idea of a world <br/>
                materialized <br/>
                <span className="text-neutral-600">through music.</span>
              </h2>
            </div>
            <div className="hidden lg:block">
              <div className="w-full h-[1px] bg-neutral-800 mb-4"></div>
              <p className="text-[10px] font-mono text-neutral-600 uppercase">
                SPM Creative Co. &copy; Global
              </p>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="lg:w-1/2 lg:py-40 pb-24 pl-0 lg:pl-20 flex flex-col justify-center space-y-20">
            
            <div className="space-y-8">
              <p className="text-2xl md:text-4xl font-light leading-tight text-white">
                We are not just a production company. <br/>
                <span className="text-neutral-500">We are a creative ecosystem.</span>
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
                Originally established in 2019 as SPM Music Group Brasil, the company has evolved into its current global headquarters, <strong className="text-white">SPM Creative Company USA LLC</strong>.
              </p>
            </div>

            <div className="space-y-8">
              <div className="w-12 h-1 bg-white"></div>
              <p className="text-xl md:text-2xl font-light leading-snug text-white">
                 Building new bridges between cultures, translating the strength of Brazilian creativity into a sophisticated global language.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
                 Based in Miami with operations in São Paulo, we combine music, image, and strategy to serve artists, brands, and institutions who dare to lead.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-neutral-900/20 backdrop-blur-sm">
               <p className="text-sm font-mono text-neutral-300 leading-relaxed uppercase tracking-wider">
                "A global SPM, sophisticated and connected with the essence of culture."
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};