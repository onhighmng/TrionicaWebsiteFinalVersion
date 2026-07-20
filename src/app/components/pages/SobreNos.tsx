import React, { type SVGProps } from 'react';
import { motion } from 'motion/react';
import { AeroHero3 } from '../ui/aero-hero-3';
import { About3 } from '../ui/about-3';
import { LogoCarousel } from '../ui/logo-carousel';
import { GradientHeading } from '../ui/gradient-heading';
import { EnsinoSuppliersSection } from './EnsinoSuppliersSection';
import { getImageUrl } from '../../utils/images';
import svgPaths from '../../imports/svg-a0w0pmyyr1';
import equipaGrupoImage from "../../../imports/equipa-grupo.jpg";
import equipaEventoImage from "../../../imports/equipa-evento.jpg";
import agaKhanLogo from "../../../imports/aka_maputo.png";
import fipaasLogo from "../../../imports/fipaas_logo.jpg";
import edmLogo from "../../../imports/edm_logo.jpg";
import govEmblemImg from "../../../imports/mozambique-gov-emblem.png";
import misauLogoImg from "../../../imports/misau-logo.png";
import miremeLogoImg from "../../../imports/mireme-logo.svg";
import maapLogoImg from "../../../imports/maap-logo-new.png";
import mtlLogoImg from "../../../imports/mtl-logo.png";
import unipungueLogoImg from "../../../imports/unipungue-logo.jpg";
import unirovumaLogoImg from "../../../imports/unirovuma-logo.png";

// ── Client logo components ─────────────────────────────────────────────────────

function ImgLogo({ src, alt, scale = 1 }: { src: string; alt: string; scale?: number }) {
  return (_props: SVGProps<SVGSVGElement>) => (
    <div className="flex items-center justify-center w-full h-full transition-all duration-300">
      <img src={src} alt={alt} className="h-[60px] md:h-[80px] max-w-[170px] md:max-w-[220px] w-auto object-contain" style={scale !== 1 ? { transform: `scale(${scale})` } : undefined} />
    </div>
  );
}

function makeSvgLogoUrl(abbr: string, full: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="62"><text x="110" y="30" font-family="Arial Black,Arial,sans-serif" font-size="22" font-weight="900" text-anchor="middle" fill="#000">${abbr}</text><text x="110" y="48" font-family="Arial,sans-serif" font-size="8.5" text-anchor="middle" fill="#333">${full}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

// For ministries using the national coat of arms — horizontal layout matching MIREME style
function GovLogo({ acronym, line1, line2 }: { acronym: string; line1?: string; line2?: string }) {
  return (_props: SVGProps<SVGSVGElement>) => (
    <div className="flex flex-row items-center justify-center gap-2 w-full h-full transition-all duration-300 px-1">
      <img src={govEmblemImg} alt={acronym} className="max-h-[44px] md:max-h-[56px] w-auto object-contain shrink-0" />
      <div style={{ fontFamily: "'Arial Black', 'Arial', sans-serif", fontWeight: 900, fontSize: '7.5px', color: '#1a1a1a', lineHeight: '1.4', textTransform: 'uppercase' }}>
        <div>{line1 ?? acronym}</div>
        {line2 && <div>{line2}</div>}
      </div>
    </div>
  );
}

const clientLogos = [
  { id: 1,  name: "ANEP",               img: ImgLogo({ src: getImageUrl('wp-content/uploads/2019/05/header-logo-anep.png'), alt: "ANEP" }) as any },
  { id: 2,  name: "EDM",                img: ImgLogo({ src: edmLogo, alt: "EDM" }) as any },
  { id: 4,  name: "GIZ",                img: ImgLogo({ src: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Deutsche_Gesellschaft_f%C3%BCr_Internationale_Zusammenarbeit_Logo.svg", alt: "GIZ" }) as any },
  { id: 5,  name: "KOICA",              img: ImgLogo({ src: "https://upload.wikimedia.org/wikipedia/commons/9/94/KOICA_official_logo_in_english.png", alt: "KOICA" }) as any },
  { id: 6,  name: "TotalEnergies",      img: ImgLogo({ src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/TotalEnergies_wordmark_%282021-present%29.svg", alt: "TotalEnergies" }) as any },
  { id: 7,  name: "Fundação Aga Khan",  img: ImgLogo({ src: agaKhanLogo, alt: "Aga Khan Academy Maputo" }) as any },
  { id: 8,  name: "FIPAAS",             img: ImgLogo({ src: fipaasLogo, alt: "FIPAAS", scale: 1.5 }) as any },
  // Universities
  { id: 20, name: "UEM",        img: ImgLogo({ src: "https://upload.wikimedia.org/wikipedia/pt/2/2f/Logo_UEM.jpg",                                                             alt: "UEM" }) as any },
  { id: 21, name: "UCM",        img: ImgLogo({ src: "https://ucm.ac.mz/wp-content/uploads/2025/06/logo_no_back-1-168x170.png",                                                alt: "UCM" }) as any },
  { id: 22, name: "UP",         img: ImgLogo({ src: "https://www.up.ac.mz/images/logo-no-bg.png",                                                                             alt: "UP" }) as any },
  { id: 23, name: "UNIZAMBEZE", img: ImgLogo({ src: "https://unizambeze.ac.mz/wp-content/uploads/2025/07/Logo-UZ-296x300.png",                                               alt: "UNIZAMBEZE" }) as any },
  { id: 24, name: "UNIROVUMA",  img: ImgLogo({ src: unirovumaLogoImg,                                                                                                        alt: "UNIROVUMA" }) as any },
  { id: 25, name: "UNILICUNGO", img: ImgLogo({ src: "https://unilicungo.ac.mz/wp-content/uploads/2025/12/UniLicungo.png",                                                    alt: "UNILICUNGO" }) as any },
  { id: 26, name: "UNILURIO",   img: ImgLogo({ src: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lurio_University_logo.png",                                               alt: "UNILURIO", scale: 1.8 }) as any },
  { id: 27, name: "UNISAVE",    img: ImgLogo({ src: "https://unisave.ac.mz/wp-content/uploads/2025/09/cropped-unisave-150x150.png",                                           alt: "UNISAVE" }) as any },
  { id: 28, name: "UNIPUNGUE",  img: ImgLogo({ src: unipungueLogoImg,                                                                                                         alt: "UNIPUNGUE" }) as any },
  // Ministries
  { id: 30, name: "MISAU",   img: GovLogo({ acronym: "MISAU", line1: "MINISTÉRIO DA", line2: "SAÚDE" }) as any },
  { id: 31, name: "MEC",     img: GovLogo({ acronym: "MEC",  line1: "MINISTÉRIO DA",         line2: "EDUCAÇÃO E CULTURA" }) as any },
  { id: 32, name: "MIREME",  img: ImgLogo({ src: miremeLogoImg,  alt: "MIREME" }) as any },
  { id: 33, name: "MDN",     img: GovLogo({ acronym: "MDN",  line1: "MINISTÉRIO DA",         line2: "DEFESA NACIONAL" }) as any },
  { id: 34, name: "MAAP",    img: GovLogo({ acronym: "MAAP", line1: "MINISTÉRIO DA AGRICULTURA", line2: "AMBIENTE E PESCAS" }) as any },
  { id: 35, name: "MTL",     img: GovLogo({ acronym: "MTL",  line1: "MINISTÉRIO DOS",        line2: "TRANSPORTES E LOGÍSTICA" }) as any },
];

interface SobreNosProps {
  onNavigate?: (page: string) => void;
}

export function SobreNos({ onNavigate }: SobreNosProps) {

  return (
    <div>
      {/* Hero Section */}
      <AeroHero3
        title="SOBRE NÓS"
        subtitle={"Ajudando a Construir o Futuro de Moçambique Desde 2010\n\nA Triónica Moçambique, Lda é uma empresa especializada no fornecimento de soluções tecnológicas, equipamentos, formação técnica e assistência especializada para os sectores de Ensino & Investigação, Saúde, Águas, Ambiente e Minas.\n\nDesde 2010, fornecemos equipamentos, tecnologias e serviços especializados, assegurando qualidade, inovação e fiabilidade em todas as etapas dos projectos, desde a consultoria até à assistência técnica pós-venda."}
        imageUrl={equipaEventoImage}
        ctaLabel="Explorar Soluções"
        onCtaClick={() => {
          const isMobile = window.innerWidth < 1024;
          window.scrollTo({ top: 0, behavior: 'instant' });
          setTimeout(() => {
            window.dispatchEvent(new Event(isMobile ? 'openMobileSolucoesMenu' : 'openSolucoesDropdown'));
          }, 500);
        }}
      />

      {/* Nossa Equipa + Nossos Clientes */}
      <About3
        title="A Nossa Equipa"
        description="A nossa equipa técnica recebe formação contínua em Moçambique e no estrangeiro, garantindo elevados padrões de instalação, operação, manutenção e suporte técnico."
        mainImage={{ src: equipaGrupoImage, alt: "Equipa Triónica Moçambique" }}
        secondaryImage={null}
        breakout={{
          title: "Áreas de Apoio",
          bulletPoints: [
            "Instalação de equipamentos",
            "Formação técnica especializada",
            "Assistência pós-venda",
            "Diagnóstico e manutenção",
            "Calibração",
            "Fornecimento de peças de reposição",
          ],
        }}
        middleContent={
          <div className="py-12 md:py-16 lg:py-20">
            <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
              <div className="flex items-center gap-6 w-full max-w-2xl">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-400 to-gray-400" />
                <GradientHeading variant="secondary" size="sm" weight="semi">
                  Nossos Clientes
                </GradientHeading>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gray-400 to-gray-400" />
              </div>
              <LogoCarousel columnCount={4} logos={clientLogos} />
            </div>
          </div>
        }
        achievementsTitle=""
        achievementsDescription=""
        achievements={[
          {
            label: "MISSÃO",
            description: "Desenvolver e implementar soluções tecnológicas inovadoras que respondam com precisão às necessidades dos nossos clientes, garantindo qualidade, eficiência e assistência especializada.",
            color: "#2354a2",
          },
          {
            label: "VISÃO",
            description: "Ser a empresa de referência em Moçambique no fornecimento de soluções tecnológicas para ensino & investigação, saúde, águas, ambiente, minas e desenvolvimento institucional.",
            color: "#475569",
          },
          {
            label: "VALORES",
            description: "• Inovação\n• Excelência\n• Eficiência\n• Honestidade\n• Responsabilidade\n• Desenvolvimento Contínuo",
            color: "#1e293b",
          },
        ]}
      />

      {/* Supplier brands + YouTube videos */}
      <EnsinoSuppliersSection />

      {/* Why Choose Us — footer rendered globally via App.tsx */}
      <section className="hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {/* Decorative circles - right side - desktop only */}
          <div className="hidden xl:block absolute bottom-[338px] right-[-181px]">
            <div className="absolute border border-[#545b5b] border-dashed bottom-[943px] opacity-20 right-[424px] rounded-[1000px] size-[603px]" />
            <div className="absolute border border-[#545b5b] border-dashed bottom-[751px] opacity-20 right-[232px] rounded-[1000px] size-[987px]" />
            <div className="absolute border border-[#545b5b] border-dashed bottom-[550px] opacity-20 right-[31px] rounded-[1000px] size-[1389px]" />
            <div className="absolute border border-[#545b5b] border-dashed bottom-[338px] opacity-20 right-[-181px] rounded-[1000px] size-[1813px]" />
          </div>

          {/* Top left text */}
          <div className="font-['Plus_Jakarta_Sans'] font-medium leading-[1.7] text-[#565656] text-sm md:text-base mb-8 md:mb-12 text-center md:text-left">
            <p className="mb-0">Fornecemos soluções</p>
            <p>completas para o seu sector.</p>
          </div>

          {/* Center heading */}
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="capitalize font-['Plus_Jakarta_Sans'] font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-tight md:leading-[72px] text-[#050505] tracking-tight md:tracking-[-2.56px]">
              <p className="mb-0">Pronto Para Desenvolver</p>
              <p>o Seu Próximo Projecto?</p>
            </h2>
          </div>

          {/* Center subtext */}
          <div className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] text-[#565656] text-base md:text-[18px] text-center mb-8 md:mb-12 px-4">
            <p className="mb-0">A nossa equipa está preparada para identificar e implementar</p>
            <p>a solução mais adequada às necessidades da sua instituição.</p>
          </div>

          {/* Center button */}
          <div className="flex items-center justify-center mb-12 md:mb-16">
            <button 
              onClick={() => {
                if (onNavigate) {
                  onNavigate('contacte-nos');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="bg-[#4278ec] hover:bg-[#3562c9] transition-all duration-300 flex gap-4 md:gap-[24px] items-center pl-[6px] pr-6 md:pr-[32px] py-[6px] rounded-[80px] w-[200px] md:w-[225px]"
            >
              <div className="bg-white flex items-center p-3 md:p-[16px] rounded-[80px] shrink-0">
                <div className="flex items-center justify-center shrink-0">
                  <div className="relative size-4 md:size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p18e73b00} stroke="#4278EC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] font-medium leading-[30px] text-base md:text-[20px] text-nowrap text-white">Contactar-nos</p>
            </button>
          </div>

          {/* Footer Group */}
          <div className="bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-12 lg:p-16">
            {/* Main heading */}
            <div className="font-['Plus_Jakarta_Sans'] font-medium text-[32px] md:text-[48px] lg:text-[64px] leading-tight text-[#050505] text-center md:text-left mb-8 md:mb-12">
              <p className="mb-0">Triónica — Tecnologia e Soluções</p>
              <p>para o Desenvolvimento de Moçambique</p>
            </div>

            {/* Large Trionica text */}
            <p className="font-['Plus_Jakarta_Sans'] font-bold text-[50px] sm:text-[70px] md:text-[120px] lg:text-[180px] leading-[1.2] text-[rgba(35,84,162,0.89)] text-center uppercase mb-8 md:mb-12">
              Triónica
            </p>

            {/* Navigation links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-[32px] items-center mb-8 md:mb-12">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-['Plus_Jakarta_Sans'] font-bold text-base md:text-[18px] text-[#4278ec] tracking-tight md:tracking-[-0.18px]"
              >
                Início
              </button>
              <div className="size-[7.4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                  <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
                </svg>
              </div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="capitalize font-['Plus_Jakarta_Sans'] font-medium text-base md:text-[18px] text-[#667085] hover:text-[#4278ec] transition-colors"
              >
                Sobre Nós
              </button>
              <div className="size-[7.4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                  <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
                </svg>
              </div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="capitalize font-['Plus_Jakarta_Sans'] font-medium text-base md:text-[18px] text-[#667085] hover:text-[#4278ec] transition-colors"
              >
                Soluções
              </button>
              <div className="size-[7.4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                  <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
                </svg>
              </div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="capitalize font-['Plus_Jakarta_Sans'] font-medium text-base md:text-[18px] text-[#667085] hover:text-[#4278ec] transition-colors"
              >
                Portfolio
              </button>
            </div>

            {/* Bottom section with line, social icons, and copyright */}
            <div className="flex flex-col gap-6 md:gap-[24px] items-center">
              <div className="h-0 w-full">
                <svg className="block w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1160 1.0001">
                  <line stroke="#EDEDED" x1="4.37114e-08" x2="1160" y1="0.5" y2="0.500101" />
                </svg>
              </div>
              
              {/* Social and copyright container */}
              <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-6">
                {/* Social icons row */}
                <div className="flex gap-4 md:gap-[20px] items-center">
                  {/* Facebook */}
                  <div className="size-10 md:size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="23.5" stroke="#1877F2" strokeOpacity="0.3" />
                      <path d={svgPaths.p2b5c400} fill="#1877F2" />
                    </svg>
                  </div>
                  
                  {/* X (formerly Twitter) */}
                  <div className="size-10 md:size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="23.5" stroke="#000000" strokeOpacity="0.3" />
                      <path d="M 28.9 15 L 32 15 L 24.5 23.8 L 33 33 L 28.3 33 L 22.5 26.1 L 16 33 L 13 33 L 20.9 23.7 L 13 15 L 17.8 15 L 23.2 21.4 L 28.9 15 Z M 27.8 31.2 L 29.4 31.2 L 18.3 16.7 L 16.6 16.7 L 27.8 31.2 Z" fill="#000000" />
                    </svg>
                  </div>
                  
                  {/* Instagram */}
                  <div className="relative size-10 md:size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="23.5" stroke="#E4405F" strokeOpacity="0.3" />
                    </svg>
                    <div className="absolute left-[12px] overflow-clip size-[20px] md:size-[24px] top-[10px] md:top-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9859 23.9953">
                        <path d={svgPaths.p2029900} fill="#E4405F" />
                        <path d={svgPaths.p90dcd40} fill="#E4405F" />
                        <path d={svgPaths.p110e5500} fill="#E4405F" />
                      </svg>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="relative size-10 md:size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="23.5" stroke="#0A66C2" strokeOpacity="0.3" />
                    </svg>
                    <div className="absolute left-[10px] md:left-[12px] overflow-clip size-[20px] md:size-[24px] top-[10px] md:top-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p2ccee40} fill="#0A66C2" />
                      </svg>
                    </div>
                  </div>
                </div>

                <p className="font-['Inter'] font-medium text-xs md:text-[14px] text-black text-center md:text-left">
                  © 2025 Triónica Moçambique. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}