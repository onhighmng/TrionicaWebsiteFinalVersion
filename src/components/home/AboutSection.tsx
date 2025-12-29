"use client";
import { TimelineContent } from "../ui/timeline-animation";
import { VerticalCutReveal } from "../ui/vertical-cut-reveal";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { AnimatedCounter } from "../ui/animated-counter";
import { FlowButton } from "../ui/flow-button";

interface AboutSectionProps {
  onNavigate: (page: string) => void;
  className?: string;
}

export function AboutSection({ onNavigate, className }: AboutSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  
  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  
  return (
    <section className={`mt-0 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20 px-4 md:px-6 lg:px-8 bg-[#f9f9f9] ${className}`} ref={heroRef} data-navbar-section="light">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <div className="flex items-center gap-2 text-2xl md:text-3xl">
              <span className="text-[#2354a2] animate-spin text-3xl md:text-4xl">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-2xl md:text-3xl font-medium text-gray-600 uppercase"
              >
                Quem Somos
              </TimelineContent>
            </div>
          </div>

          {/* Large Headline */}
          <TimelineContent
            as="h1"
            animationNum={1}
            timelineRef={heroRef}
            customVariants={revealVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 md:mb-16 max-w-4xl"
          >
            Desde 2010, a apoiar o{" "}
            <span className="font-bold">desenvolvimento</span>{" "}
            <span className="italic font-light">científico e tecnológico</span>{" "}
            do país.
          </TimelineContent>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            {/* Left - Description */}
            <TimelineContent
              as="div"
              animationNum={2}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="md:col-span-4 space-y-4"
            >
              <p className="text-gray-600 leading-relaxed text-justify">
                Somos uma empresa moçambicana sediada em Maputo, especializada no desenvolvimento de soluções tecnológicas e implementação de projetos em áreas estratégicas.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Desde 2010, fornecemos equipamentos laboratoriais e tecnologias avançadas para os sectores de Ensino e Investigação, Saúde, Águas, Ambiente e Minas, com foco na qualidade, inovação e fiabilidade.
              </p>
              <div className="pt-2">
                <FlowButton 
                  text="SAIBA MAIS"
                  onClick={() => onNavigate('sobre-nos')}
                  bgColor="#2354a2"
                  textColor="#2354a2"
                  borderColor="#2354a2"
                />
              </div>
            </TimelineContent>

            {/* Center - Team Image */}
            <TimelineContent
              as="div"
              animationNum={3}
              timelineRef={heroRef}
              customVariants={scaleVariants}
              className="md:col-span-4"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                alt="Equipa Trionica"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </TimelineContent>

            {/* Right - Services List */}
            <TimelineContent
              as="div"
              animationNum={4}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="md:col-span-4 space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2354a2] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Equipamentos Científicos</h4>
                  <p className="text-sm text-gray-600">Soluções completas para laboratórios de ensino e investigação</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2354a2] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Consultoria Técnica</h4>
                  <p className="text-sm text-gray-600">Apoio especializado na escolha e implementação de equipamentos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2354a2] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Manutenção & Suporte</h4>
                  <p className="text-sm text-gray-600">Atendimento 24/7 com equipa técnica qualificada</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2354a2] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Formação Profissional</h4>
                  <p className="text-sm text-gray-600">Capacitação contínua no uso de tecnologias laboratoriais</p>
                </div>
              </div>
            </TimelineContent>
          </div>

          {/* Bottom Section - Stats & CTA */}
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-end gap-8 pt-8 border-t border-gray-200">
            {/* Stats Row - All Numbers Horizontal */}
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid grid-cols-2 sm:flex sm:items-baseline gap-6 md:gap-8 lg:gap-12 w-full md:w-auto"
            >
              <div className="flex flex-col items-center">
                <AnimatedCounter
                  target={100}
                  duration={3500}
                  suffix="+"
                  className="text-[#2354a2] font-extralight text-4xl md:text-6xl lg:text-8xl tracking-tight"
                />
                <span className="text-gray-600 text-[10px] md:text-xs mt-2">Clientes</span>
              </div>
              <div className="flex flex-col items-center">
                <AnimatedCounter
                  target={15}
                  duration={3500}
                  suffix="+"
                  className="text-[#2354a2] font-extralight text-4xl md:text-6xl lg:text-8xl tracking-tight"
                />
                <span className="text-gray-600 text-[10px] md:text-xs mt-2">Anos</span>
              </div>
              <div className="flex flex-col items-center">
                <AnimatedCounter
                  target={95}
                  duration={3500}
                  suffix="%"
                  className="text-[#2354a2] font-extralight text-4xl md:text-6xl lg:text-8xl tracking-tight"
                />
                <span className="text-gray-600 text-[10px] md:text-xs mt-2">Experiência</span>
              </div>
              <div className="flex flex-col items-center">
                <AnimatedCounter
                  target={91}
                  duration={3500}
                  suffix="%"
                  className="text-[#2354a2] font-extralight text-4xl md:text-6xl lg:text-8xl tracking-tight"
                />
                <span className="text-gray-600 text-[10px] md:text-xs mt-2">Atendimento</span>
              </div>
            </TimelineContent>

            {/* Right - CTA Button */}
            <TimelineContent
              as="div"
              animationNum={6}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="w-full md:w-auto flex justify-center md:justify-end"
            >
              <FlowButton 
                text="SAIBA MAIS"
                onClick={() => onNavigate('sobre-nos')}
                bgColor="#2354a2"
                textColor="#2354a2"
                borderColor="#2354a2"
              />
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}