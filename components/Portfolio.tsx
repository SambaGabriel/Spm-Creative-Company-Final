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
        <div className="mb-40 md:mb-64">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 md:mb-20 border-b border-white/20 pb-6">
             <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              Selected Works
             </h3>
             <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-4 md:mt-0">
               Index 01 — Clients
             </span>
          </div>

          {/* Layout Texto Justificado (Clients) */}
          <div className="text-justify leading-[1.8] md:leading-[1.4] tracking-tight mix-blend-screen">
            {selectedClients.map((client, i) => (
              <React.Fragment key={i}>
                <span 
                  className="inline-block text-xl md:text-4xl lg:text-[6rem] font-black text-neutral-900 uppercase cursor-crosshair transition-all duration-300 hover:text-white hover:scale-105 hover:z-50 select-none whitespace-nowrap py-2 md:py-4"
                  style={{ fontStretch: 'condensed' }}
                >
                  {client}
                </span>
                {" "}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Etapa 2: Artists & Partners - Justified Text Block (Harmonized) */}
        <div>
          {/* Header estruturalmente idêntico ao Index 01 */}
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 md:mb-20 border-b border-white/20 pb-6">
             <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              Legacy & Partners
             </h3>
             <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-4 md:mt-0">
               Index 02 — Artists
             </span>
          </div>
          
          {/* Bloco de texto idêntico ao Index 01 */}
          <div className="text-justify leading-[1.8] md:leading-[1.4] tracking-tight mix-blend-screen">
            {artists.map((artist, i) => (
              <React.Fragment key={i}>
                <span 
                  className="inline-block text-xl md:text-4xl lg:text-[6rem] font-black text-neutral-900 uppercase cursor-crosshair transition-all duration-300 hover:text-white hover:scale-105 hover:z-50 select-none whitespace-nowrap py-2 md:py-4"
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