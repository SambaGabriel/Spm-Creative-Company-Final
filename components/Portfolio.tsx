import React from 'react';

// Lista de clientes atualizada conforme imagem solicitada (Index 01)
const selectedClients = [
  "Adidas", "Amazon", "Asics", "Budweiser", "Centauro", "Converse", 
  "Fila", "Havaianas", "HBO Max", "Heinz", "iFood", "Itaú", 
  "MASP", "Microsoft", "NBA", "Nike", "O Boticário", "Oakley", 
  "Porsche", "Red Bull", "Rider", "Samsung", "Track & Field", "Umbro"
];

// Lista de artistas (Index 02)
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
  "Zezé Di Camargo & Luciano"
];

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-40 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-[96%] mx-auto px-2 md:px-6 relative z-10">
        
        {/* Etapa 1: Selected Clients - Typographic Layout */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-b border-white/20 pb-4">
             <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              Selected Works
             </h3>
             <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-4 md:mt-0">
               Index 01 — Clients
             </span>
          </div>

          {/* Layout Texto Justificado (Clients) */}
          <div className="text-justify leading-[1.1] md:leading-[0.9] tracking-tight mix-blend-screen">
            {selectedClients.map((client, i) => (
              <React.Fragment key={i}>
                <span 
                  className="inline-block text-2xl md:text-5xl lg:text-[7rem] font-black text-neutral-900 uppercase cursor-crosshair transition-all duration-300 hover:text-white hover:scale-105 hover:z-50 select-none whitespace-nowrap"
                  style={{ fontStretch: 'condensed' }}
                >
                  {client}
                </span>
                {" "}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Etapa 2: Artists & Partners - Justified Text Block */}
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