import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-950 text-white relative border-t border-white/5">
      <div className="max-w-[94%] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
            Let's create <br />
            <span className="text-neutral-600">together?</span>
          </h2>
          <p className="text-xl text-neutral-400 font-light max-w-md leading-relaxed">
            Ready to lead your next global project from Miami or São Paulo.
          </p>
          <div className="pt-8">
            <div className="w-20 h-px bg-white/10"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
            <div className="group flex items-center space-x-8 p-8 border border-neutral-900 bg-black/20">
                <div className="p-4 bg-white/5 rounded-full text-neutral-400 group-hover:text-white transition-colors">
                    <Mail size={24} />
                </div>
                <div className="overflow-hidden">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 mb-1 font-mono">Channel: Email</p>
                    <a href="mailto:contact@spmcreativecompany.com" className="text-lg font-bold hover:text-neutral-300 transition-colors uppercase">contact@spmcreativecompany.com</a>
                </div>
            </div>

            <div className="group flex items-center space-x-8 p-8 border border-neutral-900 bg-black/20">
                 <div className="p-4 bg-white/5 rounded-full text-neutral-400 group-hover:text-white transition-colors">
                    <Phone size={24} />
                </div>
                <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 mb-1 font-mono">Channel: Phone</p>
                    <a href="tel:+18507740710" className="text-lg font-bold hover:text-neutral-300 transition-colors">+1 850 774 0710</a>
                </div>
            </div>

            <div className="group flex items-center space-x-8 p-8 border border-neutral-900 bg-black/20">
                <div className="p-4 bg-white/5 rounded-full text-neutral-400 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                </div>
                <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 mb-1 font-mono">Location</p>
                    <p className="text-lg font-bold uppercase tracking-tight">Miami &middot; São Paulo</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};