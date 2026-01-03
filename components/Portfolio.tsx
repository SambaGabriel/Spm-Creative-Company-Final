import React from 'react';

const clients = [
  "Nike", "Adidas", "New Balance", "Fila", "Asics", "Umbro", 
  "Havaianas", "Ifood", "Itaú", "Oakley", "Porsche", "Volvo", 
  "Budweiser", "NBA", "Microsoft"
];

const artists = [
  "Alejandro Sanz", "Alexandre Pires", "Alcione", "Art Popular", "Babado Novo", 
  "Belo", "Bruno & Marrone", "Cauby Peixoto", "Chitãozinho & Xororó", 
  "Demônios da Garoa", "Depeche Mode", "Dominguinhos", "Edson & Hudson", 
  "Exaltasamba", "Fabio Jr", "Inimigos da HP", "Ivete Sangalo", "Jeito Moleque", 
  "João Bosco", "João Paulo & Daniel", "John Pizzarelli", "Jorge Ben", 
  "Jorge Vercillo", "Julio Iglesias", "KLB", "Kelly Key", "Latino", 
  "Laura Pausini", "Leandro & Leonardo", "Michel Teló", "Milionário & José Rico", 
  "Moacyr Franco", "Mumuzinho", "Nando Reis", "Originais do Samba", "Péricles", 
  "Raça Negra", "Reginaldo Rossi", "Roberta Miranda", "Roberto Carlos", 
  "Ronnie Von", "Tonico & Tinoco", "Rio Negro & Solimões", "Seu Jorge", 
  "Sergio Reis", "Sidney Magal", "Só Pra Contrariar", "Vanessa da Mata", 
  "Vitor Kley", "Wesley Safadão", "Zezé Di Camargo & Luciano"
];

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-black relative border-t border-white/5">
      <div className="max-w-[94%] mx-auto px-6 relative z-10">
        <div className="mb-20 pb-10 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase leading-none">Selected Works</h3>
            <p className="text-neutral-500 font-mono text-[10px] tracking-[0.4em] uppercase mt-4">Curation & Global Presence</p>
          </div>
          <div className="flex gap-4">
             <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest border border-white/10 px-3 py-1">2019 — 2026</span>
             <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest border border-white/10 px-3 py-1">HQ: MIA / HUB: SAO</span>
          </div>
        </div>

        {/* Brand Ticker */}
        <div className="mb-32">
            <h4 className="text-[10px] text-white/40 uppercase tracking-[0.3em] mb-12 flex items-center gap-4 font-mono">
                <span className="w-8 h-px bg-white/20"></span>
                01 / Global Corporate Partners
            </h4>
            <div className="flex flex-wrap gap-x-6 md:gap-x-12 gap-y-6 md:gap-y-10 text-3xl md:text-6xl font-bold text-neutral-800 tracking-tighter uppercase">
                {clients.map((client, i) => (
                    <span key={i} className="hover:text-white transition-all duration-500 cursor-default hover:translate-x-1 inline-block">
                        {client}
                    </span>
                ))}
            </div>
        </div>

         {/* Artist Wall */}
         <div>
            <h4 className="text-[10px] text-white/40 uppercase tracking-[0.3em] mb-12 flex items-center gap-4 font-mono">
                 <span className="w-8 h-px bg-white/20"></span>
                02 / Major Artists & Talent
            </h4>
            <div className="flex flex-wrap gap-x-6 md:gap-x-12 gap-y-4 md:gap-y-6 text-2xl md:text-4xl font-bold text-neutral-800 tracking-tighter uppercase leading-tight">
                {artists.map((artist, i) => (
                    <span key={i} className="hover:text-white transition-all duration-500 cursor-default hover:tracking-[0.05em] inline-block">
                        {artist}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};