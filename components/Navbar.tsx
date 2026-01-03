import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WorldClocks, WaveformWidget } from './Widgets';
import { Logo } from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Vision', href: '#manifesto' },
    { name: 'Capabilities', href: '#services' },
    { name: 'Artist Vault', href: '#vault' },
    { name: 'Works', href: '#work' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100; // Compensação para o header fixo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (isOpen) setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl py-4 border-b border-white/5' 
          : 'bg-transparent py-8 border-b border-transparent'
      }`}
    >
      <div className="max-w-[94%] mx-auto flex justify-between items-center">
        {/* Logo - Left Corner */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, '#home')}
          className="z-50 flex items-center"
        >
          <Logo />
        </a>

        {/* Navigation & Global Metrics Group - Right */}
        <div className="flex items-center space-x-6 md:space-x-10">
          
          {/* World Clocks & Status - Reposicionados para a Direita */}
          <div className="hidden xl:block pr-8 border-r border-white/10">
            <WorldClocks />
          </div>

          <div className="hidden md:flex items-center space-x-8 text-[9px] uppercase tracking-[0.2em] font-bold text-neutral-500">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-white transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="hidden sm:block pl-6 border-l border-white/10">
            <WaveformWidget />
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white z-50 p-2" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center space-y-10 z-40 transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-4xl font-bold tracking-tighter hover:pl-4 transition-all duration-300 uppercase text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-10">
            <WorldClocks />
          </div>
        </div>
      </div>
    </nav>
  );
};