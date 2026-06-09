import React from 'react';
import { Reveal } from './Reveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-[94%] mx-auto px-6 pt-24 pb-10">

        {/* Top: brand anchor + structured info columns */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 pb-20">

            {/* Brand block */}
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/40 block mb-5">
                Music · Image · Strategy
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white leading-[0.85]">
                SPM
              </h2>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/45 mt-4 leading-relaxed">
                Creative Company USA LLC
              </p>
            </div>

            {/* Contact column */}
            <div className="lg:col-span-3">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/35 block mb-6">
                Contact
              </span>
              <a
                href="mailto:contact@spmcreativecompany.com"
                className="block text-sm text-white/80 hover:text-white transition-colors mb-3"
              >
                contact@spmcreativecompany.com
              </a>
              <a
                href="tel:+18507740710"
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                +1 850 774 0710
              </a>
            </div>

            {/* Social column */}
            <div className="lg:col-span-2">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/35 block mb-6">
                Follow
              </span>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.instagram.com/spm_usa" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">Instagram</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/spm-creative-company-usa" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">LinkedIn</a>
                </li>
                <li>
                  <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">Vimeo</a>
                </li>
              </ul>
            </div>

            {/* Bases column */}
            <div className="lg:col-span-2">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/35 block mb-6">
                Bases
              </span>
              <ul className="space-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/60">
                <li>Miami, FL — US</li>
                <li>São Paulo — BR</li>
              </ul>
            </div>

          </div>
        </Reveal>

        {/* Bottom bar */}
        <Reveal delay={100}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-600">
            <p>&copy; 2026 SPM Creative Company — All rights reserved.</p>
            <div className="flex flex-wrap gap-8">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="mailto:contact@spmcreativecompany.com" className="hover:text-white transition-colors">Inquiries</a>
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  );
};
