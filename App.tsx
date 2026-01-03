import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Services } from './components/Services';
import { Infrastructure } from './components/Infrastructure';
import { Team } from './components/Team';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { ArtistPortal } from './components/ArtistPortal';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundGraphics } from './components/BackgroundGraphics';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black antialiased relative">
      <CustomCursor />
      <BackgroundGraphics />
      <Navbar scrolled={scrolled} />
      <main className="relative z-10">
        <Hero />
        <Manifesto />
        <Services />
        <Infrastructure />
        <ArtistPortal />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}