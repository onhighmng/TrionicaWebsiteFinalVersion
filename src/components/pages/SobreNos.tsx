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
import imgUnion from "figma:asset/96f96b17c5fcf5f0537a7577cb0341d10c0558e2.png";
import imgUnion1 from "figma:asset/6a22570eeac45c73383df24364a1f8a0b34dc74d.png";
import imgUnion2 from "figma:asset/92a7f61b249712ca60bec2ba142e35515aae7b0a.png";
import imgUnion3 from "figma:asset/1b38e673a1e839e28a809a1a80db2c541b9236e9.png";

interface SobreNosProps {
  onNavigate?: (page: string) => void;
}

export function SobreNos({ onNavigate }: SobreNosProps) {
  const missionRef = useRef<HTMLDivElement>(null);
  
  const missionVisionValues = [
    {
      title: 'MISSÃO',
      description: '• Desenvolver e implementar soluções inovadoras e serviços que respondam com precisão às necessidades dos nossos clientes;\n• Garantir assistência pós-venda de elevada qualidade e eficiência;\n• Priorizar a excelência, utilizando práticas modernas, tecnologias avançadas e procedimentos eficazes.',
      link: '',
      color: '#2354a2', // Trionica blue
    },
    {
      title: 'Nossa Visão',
      description: 'Ser uma empresa de referência em Moçambique no fornecimento de equipamentos laboratoriais e soluções tecnológicas, destacando-nos pela inovação, qualidade e amplitude dos nossos serviços — desde o fornecimento, instalação e formaão até à manutenção especializada.',
      link: '',
      color: '#475569', // Slate gray - sophisticated and modern
    },
    {
      title: 'Nossos Valores',
      description: '• Inovação – Soluções modernas e ajustadas à realidade do cliente;\n• Eficiência – Respostas ágeis e orientadas a resultados;\n• Eficácia – Processos sólidos e de alto desempenho;\n• Honestidade – Relações transparentes com clientes, fornecedores e parceiros;\n• Criação de Valor – Equipamentos fiáveis e sustentáveis;\n• Responsabilidade Social – Ética, impacto e compromisso com o país;\n• Reinvestimento – Aperfeiçoamento técnico e formação contínua ao nível nacional e internacional.',
      link: '',
      color: '#1e293b', // Dark slate for contrast
      customHeight: 'h-[650px]',
    },
  ];

  return (
    <div>
      {/* Hero Section with Decorative Images */}
      <section className="relative bg-white py-16 md:py-20 lg:py-28 overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center" data-navbar-section="light">
        {/* Decorative Corner Images */}
        {/* Top Left - Animate from left */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.8 }
          }}
          className="absolute left-0 top-0 w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
        >
          <img 
            src={imgUnion} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Top Right - Animate from right */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.8 }
          }}
          className="absolute right-0 top-0 w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
        >
          <img 
            src={imgUnion3} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Bottom Left - Animate from left */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.8 },
            delay: 0.15
          }}
          className="absolute left-0 bottom-0 w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
        >
          <img 
            src={imgUnion1} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Bottom Right - Animate from right */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.8 },
            delay: 0.15
          }}
          className="absolute right-0 bottom-0 w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
        >
          <img 
            src={imgUnion2} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </motion.div>

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
              <p>
                A Triónica Moçambique Lda. é uma empresa moçambicana sediada na cidade de Maputo, especializada no desenvolvimento de soluções tecnológicas e na implementação de projetos em diversas áreas estratégicas.
              </p>
              <p>
                Desde 2010, dedicamo-nos ao fornecimento de equipamentos de laboratório e tecnologias avançadas para os sectores de Ensino e Investigação, Saúde, Águas, Ambiente e Minas, garantido qualidade, inovação e fiabilidade.
              </p>
              <p>
                Com uma equipa de profissionais altamente qualificados, acumulamos 15 anos de experiência que se refletem na excelência dos nossos serviços, na formação contínua dos nossos parceiros e na manutenção rigorosa dos equipamentos fornecidos. O reconhecimento dos nossos clientes é um dos nossos maiores indicadores de sucesso.
              </p>
            </div>
            
            {/* Button */}
            <button className="flex flex-col items-center gap-3 transition-all duration-300 group cursor-pointer mx-auto">
              <span className="font-['Manrope'] font-bold text-[#245454] text-base md:text-lg lg:text-xl tracking-wide">
                ROLE PARA EXPLORAR
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-10 h-10 flex items-center justify-center"
              >
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#245454" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M19 12l-7 7-7-7"/>
                </svg>
              </motion.div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Nossa Equipa - Team Section */}
      <section className="bg-white" data-navbar-section="light">
        <TeamSection />
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

      {/* Why Choose Us */}
      <section className="relative bg-[#f5f5f5] py-12 md:py-16 lg:py-20 w-full overflow-hidden" data-navbar-section="light">
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
              <p className="mb-0">Pronto Para Iniciar</p>
              <p>o Seu Projecto?</p>
            </h2>
          </div>

          {/* Center subtext */}
          <div className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] text-[#565656] text-base md:text-[18px] text-center mb-8 md:mb-12 px-4">
            <p className="mb-0">Vamos discutir a melhor solução</p>
            <p>para o seu projecto.</p>
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
              <p className="font-['Plus_Jakarta_Sans'] font-medium leading-[30px] text-base md:text-[20px] text-nowrap text-white">Contactar</p>
            </button>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
            {/* Left testimonial */}
            <div className="rounded-[40px] md:rounded-[60px] bg-white shadow-lg p-6 md:p-8 flex flex-col justify-between min-h-[280px] md:min-h-[318px]">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="none" viewBox="0 0 30.5325 30.5325">
                      <path d={svgPaths.p36924880} fill="#FFC046" />
                    </svg>
                  ))}
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-sm md:text-[14px] leading-[20px] text-[#050505]">
                  A Triónica forneceu equipamentos de alta qualidade que transformaram nosso laboratório.
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-sm md:text-[14px] leading-[20px] text-[#050505]">
                  Excelente serviço e suporte técnico.
                </p>
              </div>
              <div>
                <p className="font-['Plus_Jakarta_Sans'] font-bold text-sm md:text-[14px] text-[#050505]">Dr. João Silva</p>
                <p className="font-['Plus_Jakarta_Sans'] text-xs md:text-[11px] text-[#667085] uppercase tracking-wide">Universidade de Maputo</p>
              </div>
            </div>

            {/* Right testimonial */}
            <div className="rounded-[40px] md:rounded-[60px] bg-white shadow-lg p-6 md:p-8 flex flex-col justify-between min-h-[280px] md:min-h-[318px]">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="none" viewBox="0 0 30.5325 30.5325">
                      <path d={svgPaths.p36924880} fill="#FFC046" />
                    </svg>
                  ))}
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-sm md:text-[14px] leading-[20px] text-[#050505]">
                  Trabalhamos com a Triónica há mais de 5 anos. A equipa deles é sempre disponível e resolve qualquer problema rapidamente. Confiamos plenamente nos seus serviços.
                </p>
              </div>
              <div>
                <p className="font-['Plus_Jakarta_Sans'] font-bold text-sm md:text-[14px] text-[#050505]">Eng. Maria Couto</p>
                <p className="font-['Plus_Jakarta_Sans'] text-xs md:text-[11px] text-[#667085] uppercase tracking-wide">EDM - Electricidade de Moçambique</p>
              </div>
            </div>
          </div>

          {/* Rating badge */}
          <div className="flex gap-3 items-center justify-center mb-12 md:mb-16">
            <div className="relative shrink-0 size-[30.533px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5325 30.5325">
                <path d={svgPaths.p36924880} fill="#FFC046" />
              </svg>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] font-bold leading-[1.5] text-[#050505] text-lg md:text-[20.355px] text-nowrap">5.0</p>
          </div>

          {/* Footer Group */}
          <div className="bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-12 lg:p-16">
            {/* Main heading */}
            <div className="font-['Plus_Jakarta_Sans'] font-medium text-[32px] md:text-[48px] lg:text-[64px] leading-tight text-[#050505] text-center md:text-left mb-8 md:mb-12">
              <p className="mb-0">Construindo o Sucesso</p>
              <p>de Moçambique</p>
            </div>

            {/* Newsletter section */}
            <div className="mb-12 md:mb-16">
              <div className="font-['Helvetica_Neue'] leading-[1.2] text-[24px] md:text-[28px] lg:text-[32px] text-[#050505] mb-6 text-center md:text-left">
                <p className="mb-0">Subscreva a</p>
                <p>nossa newsletter</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-[8px] items-stretch sm:items-center max-w-md">
                <div className="bg-[#f5f5f5] flex items-center px-6 md:px-[32px] py-5 md:py-[24px] rounded-[20px] flex-1">
                  <input 
                    type="email"
                    placeholder="Digite o seu email"
                    className="w-full bg-transparent font-['Plus_Jakarta_Sans'] font-normal text-base md:text-[20px] text-[#6b7280] outline-none"
                  />
                </div>
                <button className="bg-[#4278ec] hover:bg-[#3562c9] transition-colors flex items-center justify-center px-6 md:px-[32px] py-5 md:py-[24px] rounded-[20px] shrink-0">
                  <svg className="size-5 md:size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
              </div>
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