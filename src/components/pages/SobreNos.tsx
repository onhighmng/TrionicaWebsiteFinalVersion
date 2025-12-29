import React, { useRef } from 'react';
import { getImageUrl } from '../../utils/images';
import { CheckCircle, Clock, Award, Users, Target, Eye, Gem } from 'lucide-react';
import IntroAnimation from '../ui/scroll-morph-hero';
import AboutSection3 from '../ui/about-section';
import { TimelineContent } from '../ui/timeline-animation';
import { FeaturedSpotlight } from '../ui/feature-spotlight';
import StackingCard from '../ui/stacking-card';
import { MagicText } from '../ui/magic-text';
import Frame165 from '../../imports/Frame165-2218-49';
import Frame167 from '../../imports/Frame167';
import consultoriaImage from "figma:asset/56e3a70f9923c7aafaa9f6ef1a7f2f06ab021c93.png";
import professionalImage from "figma:asset/0151d44b824da5af6b2609327d49fb41fad703b4.png";
import specialistImage from "figma:asset/112a216849b9752ec9446d7eaaac3b83be7e504e.png";
import technicalSupportImage from "figma:asset/9719e880b9b0de82d10614661ba220b85460451d.png";

export function SobreNos() {
  const missionRef = useRef<HTMLDivElement>(null);
  const frame165Ref = useRef<HTMLDivElement>(null);
  
  const missionVisionValues = [
    {
      title: 'MISSÃO',
      description: '• Desenvolver e implementar soluções inovadoras e serviços que respondam com precisão às necessidades dos nossos clientes;\n• Garantir assistência pós-venda de elevada qualidade e eficiência;\n• Priorizar a excelência, utilizando práticas modernas, tecnologias avançadas e procedimentos eficazes.',
      link: '',
      color: '#7A8070',
    },
    {
      title: 'Nossa Visão',
      description: 'Ser uma empresa de referência em Moçambique no fornecimento de equipamentos laboratoriais e soluções tecnológicas, destacando-nos pela inovação, qualidade e amplitude dos nossos serviços — desde o fornecimento, instalação e formaão até à manutenção especializada.',
      link: '',
      color: '#6B7A8C',
    },
    {
      title: 'Nossos Valores',
      description: '• Inovação – Soluções modernas e ajustadas à realidade do cliente;\n• Eficiência – Respostas ágeis e orientadas a resultados;\n• Eficácia – Processos sólidos e de alto desempenho;\n• Honestidade – Relações transparentes com clientes, fornecedores e parceiros;\n• Criação de Valor – Equipamentos fiáveis e sustentáveis;\n• Responsabilidade Social – Ética, impacto e compromisso com o país;\n• Reinvestimento – Aperfeiçoamento técnico e formação contínua ao nível nacional e internacional.',
      link: '',
      color: '#4A5568',
      customHeight: 'h-[650px]',
    },
  ];

  return (
    <div>
      {/* Hero Section with Scroll Morph Animation */}
      <div className="h-screen w-full" data-navbar-section="transparent-dark">
        <IntroAnimation 
          title="Sobre Nós"
          subtitle="Soluções inovadoras para o desenvolvimento sustentável de Moçambique"
        />
      </div>

      {/* Nossa História - Figma Import */}
      <section className="bg-white pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20" data-navbar-section="light">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto h-[420px]" ref={frame165Ref}>
            <TimelineContent
              as="div"
              animationNum={0}
              timelineRef={frame165Ref}
              customVariants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                  }
                },
                hidden: {
                  y: 60,
                  opacity: 0,
                  filter: "blur(10px)",
                }
              }}
              className="h-full"
            >
              <Frame165 />
            </TimelineContent>
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-white" data-navbar-section="light">
        <div className="container mx-auto px-4">
          {/* Removed NOSSOS CLIENTES section */}
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white" data-navbar-section="light" ref={missionRef}>
        <StackingCard 
          projects={missionVisionValues}
          headerTitle="Missão, Visão e Valores" className="text-[24px] text-[20px]"
        />
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#2354a2] to-[#1a4080]" data-navbar-section="dark">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Section */}
            <div className="mb-12 md:mb-16">
              <div className="inline-block px-4 md:px-6 py-2 border border-white/30 rounded-full mb-6 md:mb-8">
                <span className="text-white/90 text-xs md:text-sm tracking-wider uppercase">Porque Escolher-nos</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                <div>
                  <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    Assistência Técnica Especializada
                  </h2>
                </div>
                <div className="md:pt-4">
                  <p className="text-white/70 text-base lg:text-lg leading-relaxed">
                    Equipa técnica formada por especialistas treinados em Moçambique e no estrangeiro, assegurando instalação, formação, assistência pós-venda, manutenção e calibração de equipamentos em todo o território nacional.
                  </p>
                </div>
              </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
              
              {/* Row 1 */}
              {/* Business Meeting Image - Wide */}
              <div className="md:col-span-4 lg:col-span-2 h-[300px] lg:h-[360px] rounded-3xl overflow-hidden group">
                <img 
                  src={consultoriaImage}
                  alt="Consultoria Trionica"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: 'center 35%' }}
                />
              </div>

              {/* 15+ Stat Card - Black */}
              <div className="md:col-span-2 lg:col-span-1 h-[300px] lg:h-[360px] bg-[#1a1f24] rounded-3xl p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="text-6xl lg:text-7xl font-bold text-white mb-6">15+</div>
                <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                  Anos de experiência no fornecimento de soluções tecnológicas e laboratoriais.
                </p>
              </div>

              {/* Professional Image */}
              <div className="md:col-span-2 lg:col-span-1 h-[300px] lg:h-[360px] rounded-3xl overflow-hidden group">
                <img 
                  src={professionalImage}
                  alt="Profissional Trionica"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Row 2 */}
              {/* 95% Stat Card - Wide with Icon */}
              <div className="md:col-span-4 lg:col-span-2 h-[300px] lg:h-[360px] bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-8 left-8">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Award className="text-white" size={28} />
                  </div>
                </div>
                <div className="mt-16">
                  <div className="text-6xl lg:text-7xl font-bold text-white mb-4">95%</div>
                  <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-xl">
                    Satisfação dos clientes, refletindo o reconhecimento da qualidade, fiabilidade e dedicação nos serviços prestados.
                  </p>
                </div>
              </div>

              {/* Professional Image 2 */}
              <div className="md:col-span-2 lg:col-span-1 h-[300px] lg:h-[360px] rounded-3xl overflow-hidden group">
                <img 
                  src={technicalSupportImage}
                  alt="Suporte Técnico Trionica"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Professional Image 3 */}
              <div className="md:col-span-2 lg:col-span-1 h-[300px] lg:h-[360px] rounded-3xl overflow-hidden group">
                <img 
                  src={specialistImage}
                  alt="Especialista em Equipamentos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}