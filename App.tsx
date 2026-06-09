import React, { useState, useEffect, useRef } from 'react';
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
import { Preloader } from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (loading) return;
    const audio = audioRef.current;
    if (!audio) return;

    let started = false;
    const events = ['pointerdown', 'keydown', 'touchstart', 'wheel', 'scroll'];
    const startAudio = () => {
      if (started) return;
      started = true;
      audio.play().catch(() => {});
      removeListeners();
    };
    const removeListeners = () => events.forEach(ev => window.removeEventListener(ev, startAudio));

    // Try immediate autoplay; if the browser blocks it, start on the first user interaction.
    audio.play().then(() => { started = true; }).catch(() => {
      events.forEach(ev => window.addEventListener(ev, startAudio, { passive: true }));
    });

    return removeListeners;
  }, [loading]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black antialiased relative">
      <CustomCursor />

      {/* Preloader Layer */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Background Audio */}
      <audio ref={audioRef} src="lofi-tropicalia.mp3" loop />

      {/* Main Content Layer - Fades in when loading is done */}
      <div className={`transition-opacity duration-1000 ease-out ${loading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <BackgroundGraphics />
        <Navbar scrolled={scrolled} />
        <main className="relative z-10">
          <Hero startAnimation={!loading} />
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
    </div>
  );
}