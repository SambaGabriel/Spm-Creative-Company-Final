import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-950 text-white relative">
      <div className="max-w-[94%] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <Reveal className="space-y-8">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/40 block">
            Index — Contact
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
            Let's create <br />
            <span className="text-neutral-600">together?</span>
          </h2>
          <p className="text-xl text-neutral-400 font-light max-w-md leading-relaxed">
            Ready to lead your next global project from Miami or São Paulo.
          </p>
        </Reveal>

        <Reveal delay={120} className="flex flex-col justify-center space-y-6">
            <div className="group flex items-center space-x-8 p-8 border border-neutral-900 bg-black/20">
                <div className="p-4 bg-white/5 rounded-full text-neutral-400 group-hover:text-white transition-colors">
                    <Mail size={24} />
                </div>
                <div className="overflow-hidden">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 mb-1 font-mono">Email</p>
                    <a href="mailto:contact@spmcreativecompany.com" className="text-lg font-bold hover:text-neutral-300 transition-colors uppercase">contact@spmcreativecompany.com</a>
                </div>
            </div>

            <div className="group flex items-center space-x-8 p-8 border border-neutral-900 bg-black/20">
                 <div className="p-4 bg-white/5 rounded-full text-neutral-400 group-hover:text-white transition-colors">
                    <Phone size={24} />
                </div>
                <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 mb-1 font-mono">Phone</p>
                    <a href="tel:+18507740710" className="text-lg font-bold hover:text-neutral-300 transition-colors">+1 850 774 0710</a>
                </div>
            </div>

            <div className="group flex items-center space-x-8 p-8 border border-neutral-900 bg-black/20">
                <div className="p-4 bg-white/5 rounded-full text-neutral-400 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                </div>
                <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 mb-1 font-mono">Location (Open Map)</p>
                    <div className="flex items-center gap-3 text-lg font-bold uppercase tracking-tight">
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=Miami+International+Airport" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-neutral-300 transition-colors flex items-center gap-1 border-b border-transparent hover:border-white/40"
                            title="Open Miami Map"
                        >
                            Miami <ArrowUpRight size={14} className="opacity-50" />
                        </a>
                        <span className="text-neutral-700">&middot;</span>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=Aeroporto+de+Congonhas" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-neutral-300 transition-colors flex items-center gap-1 border-b border-transparent hover:border-white/40"
                            title="Open São Paulo Map"
                        >
                            São Paulo <ArrowUpRight size={14} className="opacity-50" />
                        </a>
                    </div>
                </div>
            </div>
        </Reveal>
      </div>

      {/* Localização — Downtown Miami (mapa preto e branco) */}
      <div className="max-w-[94%] mx-auto px-6 mt-24">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/40">
              Based in Downtown Miami
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mt-2 md:mt-0">
              350 S Miami Ave · Miami, FL 33130
            </span>
          </div>
          <div className="w-full aspect-[21/9] overflow-hidden bg-black">
            <iframe
              title="SPM — Downtown Miami"
              src="https://www.google.com/maps?q=350%20S%20Miami%20Ave%2C%20Miami%2C%20FL%2033130&z=16&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.05)' }}
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
};