import React from 'react';

const TEAM_IMAGE_URL = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&grayscale"; 

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 md:py-40 bg-white text-black relative">
        <div className="max-w-[94%] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
                
                <div className="lg:col-span-6 relative group order-2 lg:order-1">
                    <div className="relative z-10 aspect-[4/5] overflow-hidden bg-neutral-100 border border-black/5">
                        <img 
                            src={TEAM_IMAGE_URL} 
                            alt="The Partners" 
                            loading="lazy"
                            className="w-full h-full object-cover grayscale contrast-[1.2] hover:contrast-100 transition-all duration-1000"
                        />
                    </div>
                     <p className="mt-6 text-[9px] text-neutral-400 uppercase tracking-[0.3em] font-mono text-right">
                        SPM PARTNERS: JOÃO PAULO FARIA / GABRIEL AREVALO / MAESTRO CAIXOTE
                    </p>
                </div>
                
                <div className="lg:col-span-6 flex flex-col justify-center h-full order-1 lg:order-2">
                    <h2 className="text-6xl md:text-8xl lg:text-[clamp(5rem,10vw,10rem)] font-bold mb-10 tracking-tighter leading-[0.85] uppercase">
                        The <br/>Vision
                    </h2>
                    <div className="w-24 h-[2px] bg-black mb-10"></div>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-900 max-w-xl">
                        The union of three trajectories consolidates SPM's global expansion. An ecosystem where music and image converge to create realities.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16 border-t border-neutral-100">
                <div className="group">
                    <h3 className="text-3xl font-bold mb-3 tracking-tighter uppercase group-hover:pl-2 transition-all duration-500">Gabriel Arevalo</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-6 font-mono font-bold">Founder & Musical Director</p>
                    <p className="text-base text-neutral-600 leading-relaxed font-light">
                        Strategic pillar with deep global presence and over 3,000 concerts directed. A legitimate representative of Bossa Nova and the "Real MPB" movements, he leads SPM's executive positioning as a bridge between tradition and the global market.
                    </p>
                </div>

                <div className="group">
                    <h3 className="text-3xl font-bold mb-3 tracking-tighter uppercase group-hover:pl-2 transition-all duration-500">Maestro Caixote</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-6 font-mono font-bold">Maestro & Arranger</p>
                    <p className="text-base text-neutral-600 leading-relaxed font-light">
                        With over 40 years of career and 100 million records sold, Caixote is the musical soul and the technical sophistication of the group. His legacy defines the standard of excellence at SPM.
                    </p>
                </div>

                 <div className="group">
                    <h3 className="text-3xl font-bold mb-3 tracking-tighter uppercase group-hover:pl-2 transition-all duration-500">João Paulo Faria</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-6 font-mono font-bold">Audiovisual Director & Partner</p>
                    <p className="text-base text-neutral-600 leading-relaxed font-light">
                        Miami-based director, specialist in cinematic narrative and AI integration. He elevates SPM's visual aesthetics to global standards, connecting the music to powerful visual storytelling.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};