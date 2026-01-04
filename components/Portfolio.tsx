import React from 'react';

// Cases extraídos do PDF
const featuredCases = [
  "Novo Nordisk Sound Design 360",
  "Gloria Estefan BRAZIL305",
  "Júlio Iglesias & Zezé Di Camargo",
  "Bruno & Marrone Ao Vivo",
  "Global Soundscapes",
  "Urban Symphony"
];

// Lista completa de artistas
const artists = [
  "Alejandro Sanz", "Alexandre Pires", "Alcione", "Art Popular", "Babado Novo", "Belo", 
  "Bruno & Marrone", "Cauby Peixoto", "Chitãozinho & Xororó", "Demônios da Garoa", 
  "Depeche Mode", "Dominguinhos", "Edson & Hudson", "Exaltasamba", "Fabio Jr", 
  "Inimigos da HP", "Ivete Sangalo", "Jeito Moleque", "João Bosco", "João Paulo & Daniel", 
  "John Pizzarelli", "Jorge Ben", "Jorge Vercillo", "Julio Iglesias", "KLB", "Kelly Key", 
  "Latino", "Laura Pausini", "Leandro & Leonardo", "Michel Teló", "Milionário & José Rico", 
  "Moacyr Franco", "Mumuzinho", "Nando Reis", "Originais do Samba", "Péricles", 
  "Raça Negra", "Reginaldo Rossi", "Roberta Miranda", "Roberto Carlos", "Ronnie Von", 
  "Tonico & Tinoco", "Rio Negro & Solimões", "Seu Jorge", "Sergio Reis", "Sidney Magal", 
  "Só Pra Contrariar", "Vanessa da Mata", "Vitor Kley", "Wesley Safadão", 
  "Zezé Di Camargo & Luciano", "Porsche", "Nike", "Budweiser", "Microsoft"
];

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-40 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-[96%] mx-auto px-2 md:px-6 relative z-10">
        
        {/* Etapa 1: Featured Cases - Architectural Layout */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-b border-white/20 pb-4">
             <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              Selected <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px white' }}>Works</span>
             </h3>
             <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-4 md:mt-0">
               Index 01 — Cases
             </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
            {featuredCases.map((project, i) => (
              <div key={i} className="group relative border-b border-neutral-900 pb-8 hover:border-white transition-colors duration-700">
                <span className="block text-[9px] font-mono text-neutral-600 mb-2">0{i + 1}</span>
                <h4 className="text-3xl md:text-5xl font-bold text-neutral-400 group-hover:text-white uppercase tracking-tight transition-all duration-500">
                  {project}
                </h4>
                <div className="absolute right-0 bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] font-mono bg-white text-black px-2 py-1 uppercase">View Case</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Etapa 2: Artists & Partners - Justified Text Block (Data Texture) */}
        <div className="relative">
          <div className="absolute -top-12 left-0 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            Index 02 — Legacy & Partners
          </div>
          
          <div className="text-justify leading-[1.1] md:leading-[0.9] tracking-tight mix-blend-screen">
            {artists.map((artist, i) => (
              <React.Fragment key={i}>
                <span 
                  className="inline-block text-2xl md:text-5xl lg:text-[5.5rem] font-black text-neutral-900 uppercase cursor-crosshair transition-all duration-300 hover:text-white hover:scale-110 hover:z-50 select-none whitespace-nowrap"
                  style={{ fontStretch: 'condensed' }}
                >
                  {artist}
                </span>
                {" "}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};