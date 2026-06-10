import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ensinoImg from '../../../imports/ensino-lab.jpg';
import saudeImg from '../../../imports/card-saude.jpg';
import aguasImg from '../../../imports/plant-1.jpg';
import ambienteImg from '../../../imports/card-ambiente.jpg';
import minasImg from '../../../imports/card-minas.jpg';

const solutions = [
  {
    number: "01",
    title: "Ensino & Investigação",
    subtitle: "Soluções tecnológicas para instituições públicas, privadas e centros de formação",
    description: "Fornecimento de equipamentos didáticos, laboratoriais, oficinais, científicos, de investigação e de simulação para instituições públicas, privadas, centros de formação, laboratórios e universidades em Moçambique.",
    bullets: [
      "Equipamentos didáticos e científicos",
      "Equipamentos e Ferramentas para Ciências Naturais, Eletrotecnia/Electrónica, Mecânica, Geofísica, Engenharia Civil e Agricultura",
      "Equipamentos Tecnológicos para Petróleo & Gás",
      "Simulação e treinamento avançado",
      "Quadros e painéis interativos",
      "Mobiliário escolar, universitário, laboratorial e oficinal",
      "Soluções para Desporto",
    ],
    image: ensinoImg,
    link: "ensino",
  },
  {
    number: "02",
    title: "Saúde",
    subtitle: "Equipamentos e soluções para instituições da área da saúde",
    description: "Fornecimento de equipamentos hospitalares, laboratoriais e de investigação para instituições da área da saúde.",
    bullets: [
      "Equipamentos e mobiliário hospitalar",
      "Raio-X, Tomografia Computorizada (CT) e Ressonância Magnética (MRI)",
      "Equipamentos para Centros de Diagnóstico",
      "Tele-radiologia",
      "Sistemas automáticos de apoio à decisão clínica",
      "Soluções avançadas para deteção da tuberculose, incluindo OneStopTB",
    ],
    image: saudeImg,
    link: "saude",
  },
  {
    number: "03",
    title: "Águas",
    subtitle: "Análise, monitorização e tratamento da qualidade da água",
    description: "Fornecimento de equipamentos e soluções para análise, monitorização e tratamento da qualidade da água.",
    bullets: [
      "Caudalímetros (controlo de perdas)",
      "Contadores mecânicos, eletrónicos e pré-pagos",
      "Kits de análise da qualidade da água",
      "Data loggers e telemetria",
      "Sistemas de monitorização de recursos hídricos",
      "Sistemas de tratamento — desinfeção, dessalinização, ETARs",
      "Instrumentação e medidores de nível e precipitação",
    ],
    image: aguasImg,
    link: "aguas",
  },
  {
    number: "04",
    title: "Controlo Ambiental",
    subtitle: "Controlo Ambiental • Solo • Ar",
    description: "Equipamentos e soluções para monitorização da qualidade do solo, ar e gestão de dados ambientais.",
    bullets: [
      "Estações meteorológicas",
      "Equipamentos de análise da qualidade do ar",
      "Medição e controlo da qualidade dos Solos",
      "Medição e controlo do ruído e vibração (Sonómetro e vibrómetros)",
      "Data loggers",
      "Sondas oceanográficas",
    ],
    image: ambienteImg,
    link: "ambiente",
  },
  {
    number: "05",
    title: "Minas",
    subtitle: "Prospeção, análise e processamento no sector mineiro e geológico",
    description: "Fornecimento de equipamentos e soluções tecnológicas para o sector mineiro, geológico e de recursos naturais.",
    bullets: [
      "Equipamentos de geofísica e estações sísmicas",
      "Equipamentos de diagrafia para águas subterrâneas",
      "AAS, Magnetómetros, Gravimetria, Resistividade e Sísmica",
      "Microscopia e produção de lâminas",
      "Equipamentos para análise de rochas e agregados",
      "Tecnologia XRF e XRD",
      "Sistemas de processamento",
    ],
    image: minasImg,
    link: "minas",
  },
];

export function ProductsSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="bg-white" data-navbar-section="light">
      {/* Section header */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#2354a2] mb-3">
              Nossas Soluções
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-tight text-[#0c1313] max-w-3xl tracking-tight">
              Fornecemos Soluções Tecnológicas Integradas para o Desenvolvimento de Moçambique
            </h2>
          </div>
        </div>
      </div>

      {/* Solution rows */}
      <div>
        {solutions.map((sol, idx) => {
          const imageLeft = idx % 2 === 0;
          const bg = idx % 2 === 0 ? 'bg-white' : 'bg-[#f5f7fc]';
          return (
            <div key={sol.number} className={`${bg} py-12 md:py-16 lg:py-20`}>
              <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
                <div className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}>

                  {/* Image */}
                  <div className="w-full lg:w-[45%] shrink-0">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#2354a2] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                        {sol.number}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-full lg:w-[55%]">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[26px] md:text-[34px] text-[#0c1313] mb-2 tracking-tight">
                      {sol.title}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[#2354a2] text-sm md:text-base mb-4 uppercase tracking-wide">
                      {sol.subtitle}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans'] text-[#4b5563] text-base leading-relaxed mb-6">
                      {sol.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {sol.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#2354a2] shrink-0 mt-0.5" />
                          <span className="font-['Plus_Jakarta_Sans'] text-[#374151] text-sm md:text-base leading-snug">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => { onNavigate(sol.link); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                      className="inline-flex items-center gap-2 bg-[#2354a2] hover:bg-[#1a3f7a] text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200"
                    >
                      Saber mais <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
