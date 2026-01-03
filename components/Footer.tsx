import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black text-center border-t border-neutral-900">
      <div className="max-w-[94%] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-widest text-neutral-600 uppercase">
        <div className="flex flex-col md:items-start space-y-2 mb-8 md:mb-0">
          <p>&copy; 2026 SPM Creative Company USA LLC.</p>
          <p className="text-neutral-800">Global Production Matrix // All rights reserved.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
            <a href="https://www.instagram.com/spm_usa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">Instagram</a>
            <a href="https://www.linkedin.com/company/spm-creative-company-usa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">LinkedIn</a>
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">Vimeo</a>
            <a href="mailto:contact@spmcreativecompany.com" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">Inquiries</a>
        </div>
      </div>
    </footer>
  );
};