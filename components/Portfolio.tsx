import React from 'react';
import { Reveal } from './Reveal';

// Lista de clientes (Index 01) com link pro site oficial de cada marca.
const selectedClients = [
  { name: "Adidas", url: "https://www.adidas.com" },
  { name: "Amazon", url: "https://www.amazon.com" },
  { name: "Asics", url: "https://www.asics.com" },
  { name: "Budweiser", url: "https://www.budweiser.com" },
  { name: "Centauro", url: "https://www.centauro.com.br" },
  { name: "Converse", url: "https://www.converse.com" },
  { name: "Fila", url: "https://www.fila.com" },
  { name: "Havaianas", url: "https://www.havaianas.com.br" },
  { name: "HBO Max", url: "https://www.hbomax.com" },
  { name: "Heinz", url: "https://www.heinz.com" },
  { name: "iFood", url: "https://www.ifood.com.br" },
  { name: "Itaú", url: "https://www.itau.com.br" },
  { name: "MASP", url: "https://masp.org.br" },
  { name: "Microsoft", url: "https://www.microsoft.com" },
  { name: "NBA", url: "https://www.nba.com" },
  { name: "Nike", url: "https://www.nike.com" },
  { name: "O Boticário", url: "https://www.boticario.com.br" },
  { name: "Oakley", url: "https://www.oakley.com" },
  { name: "Porsche", url: "https://www.porsche.com" },
  { name: "Red Bull", url: "https://www.redbull.com" },
  { name: "Rider", url: "https://www.rider.com.br" },
  { name: "Samsung", url: "https://www.samsung.com" },
  { name: "Track & Field", url: "https://www.tf.com.br" },
  { name: "Umbro", url: "https://www.umbro.com" }
];

// Lista de artistas (Index 02) com link pro site oficial, ou Spotify quando não há site.
const artists = [
  { name: "Alejandro Sanz", url: "https://www.alejandrosanz.com/" },
  { name: "Alexandre Pires", url: "https://open.spotify.com/artist/5Wi22h5IlgDohFA9tiIURI" },
  { name: "Alcione", url: "https://open.spotify.com/artist/0hPar6ePAELiu9rYMdvMEo" },
  { name: "Art Popular", url: "https://open.spotify.com/search/Art%20Popular" },
  { name: "Babado Novo", url: "https://open.spotify.com/artist/2jGuS7w8SfDzRNbxW1Lo2c" },
  { name: "Belo", url: "https://open.spotify.com/artist/7hLjkyL9Pz9xtQNahzJZki" },
  { name: "Bruno & Marrone", url: "https://open.spotify.com/search/Bruno%20%26%20Marrone" },
  { name: "Cauby Peixoto", url: "https://open.spotify.com/artist/1j081CNX8swtqfQCXGUc4v" },
  { name: "Chitãozinho & Xororó", url: "https://chex.com.br/" },
  { name: "Demônios da Garoa", url: "https://open.spotify.com/search/Dem%C3%B4nios%20da%20Garoa" },
  { name: "Depeche Mode", url: "https://www.depechemode.com/" },
  { name: "Dominguinhos", url: "https://open.spotify.com/artist/1mCHLu4gizrN9PwHxKrJv4" },
  { name: "Edson & Hudson", url: "https://open.spotify.com/artist/6zpNfYJcPavd1pqLXKiSvl" },
  { name: "Exaltasamba", url: "https://open.spotify.com/artist/6VPRGmbZ0dupZrbwwEDRRw" },
  { name: "Fabio Jr", url: "https://open.spotify.com/artist/60iOwdF3A0p4pAwgUXMaWU" },
  { name: "Inimigos da HP", url: "https://open.spotify.com/artist/5IEFDMhrxPABOkcu6Vx93O" },
  { name: "Ivete Sangalo", url: "https://www.ivetesangalo.com.br/" },
  { name: "Jeito Moleque", url: "https://open.spotify.com/artist/3V7U1x0TRBn7spzHDQiZhi" },
  { name: "João Bosco", url: "https://open.spotify.com/artist/3DF0ClNOUuvS3gh8V8sRJH" },
  { name: "João Paulo & Daniel", url: "https://open.spotify.com/artist/4rOoJbjbSc9bNHPyHGdfbc" },
  { name: "John Pizzarelli", url: "https://www.johnpizzarelli.com/" },
  { name: "Jorge Ben", url: "https://open.spotify.com/artist/5JYtpnUKxAzXfHEYpOeeit" },
  { name: "Jorge Vercillo", url: "https://open.spotify.com/artist/783AF57UpgTN2fditDRFSs" },
  { name: "Julio Iglesias", url: "https://www.julioiglesias.com/" },
  { name: "KLB", url: "https://open.spotify.com/artist/6Jrploq7vACkXZg2ERVFK3" },
  { name: "Kelly Key", url: "https://open.spotify.com/artist/5g0Xoyr7uIlAYCkpgsFhJH" },
  { name: "Latino", url: "https://open.spotify.com/artist/06EMbW4WO6U4fGNnKjeuI5" },
  { name: "Laura Pausini", url: "https://www.laurapausini.com/" },
  { name: "Leandro & Leonardo", url: "https://open.spotify.com/artist/0qHOVLCmMmMgk9l3GsgmUB" },
  { name: "Michel Teló", url: "https://www.micheltelo.com.br/" },
  { name: "Milionário & José Rico", url: "https://open.spotify.com/search/Milion%C3%A1rio%20%26%20Jos%C3%A9%20Rico" },
  { name: "Moacyr Franco", url: "https://open.spotify.com/artist/3RcYwgJMwT88VPivNwlIza" },
  { name: "Mumuzinho", url: "https://open.spotify.com/artist/34dfPo3Zi55yM6oV46q4y7" },
  { name: "Nando Reis", url: "https://nandoreis.com.br/" },
  { name: "Originais do Samba", url: "https://open.spotify.com/artist/4gKqxjR0MkEKjqvO3Ctvpg" },
  { name: "Péricles", url: "https://open.spotify.com/artist/6gEzJZrbm0F4ihvE9iXR9z" },
  { name: "Raça Negra", url: "https://open.spotify.com/artist/1RnHJ07H3jcpay9PrUPjnt" },
  { name: "Reginaldo Rossi", url: "https://open.spotify.com/search/Reginaldo%20Rossi" },
  { name: "Roberta Miranda", url: "https://open.spotify.com/artist/6pRYBBHNsZYnZ8w2xjkAgP" },
  { name: "Roberto Carlos", url: "https://www.robertocarlos.com/" },
  { name: "Ronnie Von", url: "https://open.spotify.com/artist/6inPmyLhCY3aWR9pVEfVQ8" },
  { name: "Tonico & Tinoco", url: "https://open.spotify.com/search/Tonico%20%26%20Tinoco" },
  { name: "Rio Negro & Solimões", url: "https://open.spotify.com/artist/33NrinbbEctw1wsdKNgZeZ" },
  { name: "Seu Jorge", url: "https://seujorge.com/" },
  { name: "Sergio Reis", url: "https://open.spotify.com/artist/0cSC1GvvgLumHovn2rgSHj" },
  { name: "Sidney Magal", url: "https://open.spotify.com/artist/5rTeMryHu78OcG49ySDHU1" },
  { name: "Só Pra Contrariar", url: "https://open.spotify.com/artist/2B8HcBRTizIsSPryM46Sb1" },
  { name: "Vanessa da Mata", url: "https://vanessadamata.com.br/" },
  { name: "Vitor Kley", url: "https://open.spotify.com/artist/4FGcERJWMg8ENOLixwF71U" },
  { name: "Wesley Safadão", url: "https://wesleysafadao.com.br/" },
  { name: "Zezé Di Camargo & Luciano", url: "https://open.spotify.com/artist/4dyYjqmYDjegbB3F2mbvcT" }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-40 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-[96%] mx-auto px-2 md:px-6 relative z-10">

        {/* Etapa 1: Selected Clients - Typographic Layout */}
        <div className="mb-40 md:mb-64">
          <Reveal>
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 md:mb-20 border-b border-white/20 pb-6">
             <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              Selected Works
             </h3>
             <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-4 md:mt-0">
               Index 01 — Clients
             </span>
          </div>
          </Reveal>

          {/* Layout Texto Justificado (Clients) */}
          <div className="text-justify leading-[2] md:leading-[1.6] tracking-tight mix-blend-screen">
            {selectedClients.map((client, i) => (
              <React.Fragment key={i}>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xl md:text-4xl lg:text-[6rem] font-black text-neutral-900 uppercase cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 hover:z-50 whitespace-nowrap py-3 md:py-6"
                  style={{ fontStretch: 'condensed' }}
                >
                  {client.name}
                </a>
                {" "}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Etapa 2: Artists & Partners - Justified Text Block (Harmonized) */}
        <div>
          {/* Header estruturalmente idêntico ao Index 01 */}
          <Reveal>
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 md:mb-20 border-b border-white/20 pb-6">
             <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              Legacy & Partners
             </h3>
             <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-4 md:mt-0">
               Index 02 — Artists
             </span>
          </div>
          </Reveal>

          {/* Bloco de texto idêntico ao Index 01 */}
          <div className="text-justify leading-[2] md:leading-[1.6] tracking-tight mix-blend-screen">
            {artists.map((artist, i) => (
              <React.Fragment key={i}>
                <a
                  href={artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xl md:text-4xl lg:text-[6rem] font-black text-neutral-900 uppercase cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 hover:z-50 whitespace-nowrap py-3 md:py-6"
                  style={{ fontStretch: 'condensed' }}
                >
                  {artist.name}
                </a>
                {" "}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
