import React, { useRef } from 'react';
import { getImageUrl } from '../../utils/images';
import { CheckCircle, Clock, Award, Users, Target, Eye, Gem } from 'lucide-react';
import { motion } from 'motion/react';
import AboutSection3 from '../ui/about-section';
import { TimelineContent } from '../ui/timeline-animation';
import { FeaturedSpotlight } from '../ui/feature-spotlight';
import StackingCard from '../ui/stacking-card';
import { MagicText } from '../ui/magic-text';
import TeamSection from '../ui/team';
import svgPaths from '../../imports/svg-a0w0pmyyr1';
import consultoriaImage from "figma:asset/56e3a70f9923c7aafaa9f6ef1a7f2f06ab021c93.png";
import professionalImage from "figma:asset/0151d44b824da5af6b2609327d49fb41fad703b4.png";
import specialistImage from "figma:asset/112a216849b9752ec9446d7eaaac3b83be7e504e.png";
import technicalSupportImage from "figma:asset/9719e880b9b0de82d10614661ba220b85460451d.png";
import equipaGrupoImage from "../../../imports/equipa-grupo.jpg";
import escritorioImage from "../../../imports/escritorio.jpg";
import membro1 from "../../../imports/membro-1.jpg";
import membro2 from "../../../imports/membro-2.jpg";
import membro3 from "../../../imports/membro-3.jpg";
import membro4 from "../../../imports/membro-4.jpg";
import membro5 from "../../../imports/membro-5.jpg";
import membro6 from "../../../imports/membro-6.jpg";

const teamMembers = [
  { photo: membro1, name: "", role: "" },
  { photo: membro2, name: "", role: "" },
  { photo: membro3, name: "", role: "" },
  { photo: membro4, name: "", role: "" },
  { photo: membro5, name: "", role: "" },
  { photo: membro6, name: "", role: "" },
];

interface SobreNosProps {
  onNavigate?: (page: string) => void;
}

export function SobreNos({ onNavigate }: SobreNosProps) {
  const missionRef = useRef<HTMLDivElement>(null);
  
  const missionVisionValues = [
    {
      title: 'MISSÃO',
      description: 'Desenvolver e implementar soluções tecnológicas inovadoras que respondam com precisão às necessidades dos nossos clientes, garantindo qualidade, eficiência e assistência especializada.',
      link: '',
      color: '#2354a2', // Trionica blue
    },
    {
      title: 'VISÃO',
      description: 'Ser a empresa de referência em Moçambique no fornecimento de soluções tecnológicas para ensino & investigação, saúde, águas, ambiente, minas e desenvolvimento institucional.',
      link: '',
      color: '#475569', // Slate gray - sophisticated and modern
    },
    {
      title: 'VALORES',
      description: '• Inovação\n• Excelência\n• Eficiência\n• Honestidade\n• Responsabilidade\n• Desenvolvimento Contínuo',
      link: '',
      color: '#1e293b', // Dark slate for contrast
      customHeight: 'h-[650px]',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-20 lg:py-28 flex items-center" data-navbar-section="light">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-16 md:pt-0 md:pb-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -100px 0px" }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3
            }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Title */}
            <h1 className="font-['Manrope'] font-medium text-[#0c1313] text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-10 lg:mb-12 tracking-tight">
              SOBRE NÓS
            </h1>
            
            {/* Description */}
            <div className="font-['Manrope'] text-[#5c6161] text-base md:text-lg lg:text-xl leading-relaxed space-y-4 md:space-y-5 lg:space-y-6 mb-10 md:mb-12 lg:mb-16">
              <p className="font-semibold text-[#0c1313]">
                Construindo o Futuro de Moçambique Desde 2010
              </p>
              <p>
                A Triónica Moçambique, Lda é uma empresa especializada no fornecimento de soluções tecnológicas, equipamentos, formação técnica e assistência especializada para os sectores de Ensino & Investigação, Saúde, Águas, Ambiente e Minas.
              </p>
              <p>
                Desde 2010, fornecemos equipamentos, tecnologias e serviços especializados, assegurando qualidade, inovação e fiabilidade em todas as etapas dos projectos, desde a consultoria até à assistência técnica pós-venda.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nossa Equipa - Team Section */}
      <section className="bg-white pt-12 md:pt-16 lg:pt-20" data-navbar-section="light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center mb-10 md:mb-12">
          <h2 className="font-['Manrope'] font-medium text-[#0c1313] text-2xl md:text-3xl lg:text-4xl mb-6 tracking-tight">
            Uma Equipa Preparada Para Apoiar o Seu Projecto
          </h2>
          <p className="font-['Manrope'] text-[#5c6161] text-base md:text-lg leading-relaxed mb-8">
            A nossa equipa técnica recebe formação contínua em Moçambique e no estrangeiro, garantindo elevados padrões de instalação, operação, manutenção e suporte técnico.
          </p>
          <h3 className="font-['Manrope'] font-semibold text-[#0c1313] text-lg md:text-xl mb-4">
            Áreas de apoio:
          </h3>
          <ul className="font-['Manrope'] text-[#5c6161] text-base md:text-lg leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl mx-auto text-left">
            <li>• Instalação de equipamentos</li>
            <li>• Formação técnica especializada</li>
            <li>• Assistência pós-venda</li>
            <li>• Diagnóstico e manutenção</li>
            <li>• Calibração</li>
            <li>• Fornecimento de peças de reposição</li>
          </ul>
        </div>
        {/* Institutional team photo */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-lg">
            <img
              src={equipaGrupoImage}
              alt="Equipa Triónica Moçambique"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Individual team members */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl pt-10 md:pt-12 pb-12 md:pb-16 lg:pb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="text-center">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-md bg-[#f1f3f7]">
                  <img
                    src={member.photo}
                    alt={member.name || "Membro da equipa Triónica"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {member.name && (
                  <div className="mt-3">
                    <p className="font-['Manrope'] font-semibold text-[#0c1313] text-sm md:text-base leading-tight">{member.name}</p>
                    {member.role && (
                      <p className="font-['Manrope'] text-[#5c6161] text-xs md:text-sm">{member.role}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white" data-navbar-section="light" ref={missionRef}>
        <StackingCard 
          projects={missionVisionValues}
          headerTitle="Missão, Visão e Valores" className="text-[24px] text-[20px]"
        />
        
        {/* Explorar Soluções Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={(e) => {
              e.preventDefault();
              
              // Check if we're on mobile (below lg breakpoint)
              const isMobile = window.innerWidth < 1024;
              
              if (isMobile) {
                // Mobile: Open mobile menu and Soluções dropdown
                window.scrollTo({ top: 0, behavior: 'instant' });
                setTimeout(() => {
                  const event = new Event('openMobileSolucoesMenu');
                  window.dispatchEvent(event);
                }, 500);
              } else {
                // Desktop: Scroll to top and open dropdown
                window.scrollTo({ top: 0, behavior: 'instant' });
                setTimeout(() => {
                  const event = new Event('openSolucoesDropdown');
                  window.dispatchEvent(event);
                }, 500);
              }
            }}
            className="bg-[#4278ec] hover:bg-[#3565d9] transition-colors content-stretch flex gap-[24px] items-center pl-[6px] pr-[32px] py-[6px] rounded-[80px] w-[282px] group cursor-pointer"
          >
            <div className="bg-white content-stretch flex items-center p-[16px] rounded-[80px] shrink-0">
              <div className="flex items-center justify-center shrink-0 size-[27.321px]">
                <svg className="block size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5" stroke="#4278EC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] font-medium leading-[30px] text-[20px] text-nowrap text-white">Explorar Soluções</p>
          </button>
        </div>
      </section>

      {/* Porquê Escolher a Triónica */}
      <section className="py-12 md:py-16 lg:py-20 bg-white" data-navbar-section="light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="mb-10 md:mb-12 text-center">
            <span className="inline-block text-[#2354a2] text-sm font-semibold tracking-[6px] uppercase mb-4">A Nossa Diferença</span>
            <h2 className="font-['Manrope'] font-bold text-[#0c1313] text-2xl md:text-3xl lg:text-4xl tracking-tight">
              Porquê escolher a Triónica Moçambique?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "A Triónica Moçambique, Lda é reconhecida pela sua solidez, qualidade e compromisso com o desenvolvimento de soluções inovadoras nas áreas de Ensino & Investigação, Saúde, Águas, Ambiente e Minas."
              },
              {
                text: "Destacamo-nos pela cobertura nacional, garantindo proximidade e resposta eficiente em todo o território nacional."
              },
              {
                text: "Oferecemos assistência técnica especializada, assegurando suporte contínuo e fiável em todas as fases dos projectos."
              },
              {
                text: "Investimos na formação e capacitação contínua, promovendo o fortalecimento das competências técnicas dos nossos clientes e parceiros."
              },
              {
                text: "Garantimos ainda um forte compromisso com o serviço de pós-venda e com a implementação bem-sucedida de projectos, assegurando qualidade, eficiência e resultados sustentáveis."
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start bg-[#f8f9fc] rounded-2xl p-6">
                <div className="mt-1 shrink-0 w-7 h-7 rounded-full bg-[#2354a2] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-['Manrope'] text-[#5c6161] text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-[#e2e2e2] py-12 md:py-16 lg:py-20 w-full overflow-hidden" data-navbar-section="light">
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