import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-[94%] mx-auto px-6 pt-20 pb-12">

        {/* Closing lockup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-14">
          <div>
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/40 block mb-5">
              Music · Image · Strategy Studio
            </span>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase text-white leading-[0.8]">
              SPM
            </h2>
          </div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/45 leading-relaxed lg:text-right">
            <p>Creative Company USA LLC</p>
            <p>Miami · São Paulo</p>
            <a href="mailto:contact@spmcreativecompany.com" className="inline-block mt-4 text-white border-b border-white/30 hover:border-white pb-1 transition-colors">
              contact@spmcreativecompany.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-600">
          <p>&copy; 2026 SPM Creative Company — All rights reserved.</p>
          <div className="flex flex-wrap gap-8">
            <a href="https://www.instagram.com/spm_usa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/spm-creative-company-usa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vimeo</a>
            <a href="mailto:contact@spmcreativecompany.com" className="hover:text-white transition-colors">Inquiries</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
