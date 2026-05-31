import React from 'react';
import { getImageUrl } from '../../utils/images';
import { Timeline } from '../ui/timeline';
import { MagicText } from '../ui/magic-text';
import { Sprout, FlaskConical, Building2, Trophy, Cpu, Cog } from 'lucide-react';
import { TimelineContent } from '../ui/timeline-animation';
import { VerticalCutReveal } from '../ui/vertical-cut-reveal';
import { useRef } from 'react';

export function Ensino() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
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
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  const timelineData = [
    {
      title: "Agricultura",
      content: (
        <div>
          <p className="text-gray-800 text-sm md:text-base font-normal mb-4 text-[20px] font-bold">
            Soluções práticas para formação e investigação agrícola orientadas para produtividade, sustentabilidade e segurança alimentar.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Equipamentos de análise de solo</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Kits de cultivo controlado</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Instrumentos de medição agrícola</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Material para estudos de fertilização</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Ferramentas de investigação agronômica</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1683119926853-6427b2966f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGxhYm9yYXRvcnklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY1MjIzNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="agricultura equipment"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600"
              alt="agricultura laboratory"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Ciências Naturais",
      content: (
        <div>
          <p className="text-gray-800 text-sm md:text-base font-normal mb-4 text-[20px] font-bold">
            Laboratórios completos para o ensino experimental das ciências, promovendo aprendizagem prática e pensamento científico.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Equipamentos de física experimental</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Kits de química analítica</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Microscópios e material biológico</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Instrumentos de medição científica</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Material didático para laboratórios</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1705727210721-961cc64a6895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHBoeXNpY3MlMjBjaGVtaXN0cnklMjBiaW9sb2d5fGVufDF8fHx8MTc2NTIyMzQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="science laboratory"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600"
              alt="microscope"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Construção Civil",
      content: (
        <div>
          <p className="text-gray-800 text-sm md:text-base font-normal mb-4 font-bold text-[20px]">
            Equipamentos para formação técnica e ensaios que aproximam o ensino da realidade da engenharia civil.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Equipamentos de teste de materiais</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Instrumentos de topografia</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Ferramentas de análise estrutural</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Kits de ensaio de concreto</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Material para estudos geotécnicos</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1762448442388-131c0dbc5037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc2NTIyMzQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="construction materials"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600"
              alt="civil engineering"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Desporto",
      content: (
        <div>
          <p className="text-gray-800 text-sm md:text-base font-normal mb-4 font-bold text-[20px]">
            Equipamentos para ciências do desporto focados em performance, reabilitação e análise do movimento humano.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Equipamentos de análise biomecânica</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Instrumentos de medição de performance</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Material para fisiologia do exercício</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Ferramentas de avaliação física</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Equipamentos de reabilitação desportiva</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1763198302210-9b4a3a979dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzY2llbmNlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NTIyMzQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="sports science"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600"
              alt="sports equipment"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Electrotecnia & Electrónica",
      content: (
        <div>
          <p className="text-gray-800 text-sm md:text-base font-normal mb-4 text-[20px] font-bold">
            Kits e sistemas didácticos para eletrónica, automação e telecomunicações, alinhados com a indústria moderna.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Kits de eletrônica digital e analógica</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Equipamentos de automação industrial</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Material para telecomunicações</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Instrumentos de medição elétrica</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Sistemas de controle e programação</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1720879996903-24859d1df48f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGVuZ2luZWVyaW5nJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjUyMjM0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="electronics engineering"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
              alt="electronics circuit"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mecânica",
      content: (
        <div>
          <p className="text-gray-800 text-sm md:text-base font-normal mb-4 font-bold text-[20px]">
            Soluções didácticas para o ensino aplicado da mecânica, preparando técnicos para contextos industriais reais.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Equipamentos de termodinâmica</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Bancadas de mecânica de fluidos</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Sistemas de mecatrónica</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base mb-2">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Instrumentos de análise mecânica</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-sm md:text-base">
              <span className="text-[#ea3a1c] font-bold">•</span>
              <span>Material para hidráulica e pneumática</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1655137414518-95bb094b9c9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2NTIyMzQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="mechanical engineering"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600"
              alt="mechanical equipment"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#eeeeee]">
      {/* Hero Section - Desktop */}
      <section className="hidden md:block py-8 px-4 bg-[#eeeeee]" ref={heroRef}>
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
              <div className="flex items-center gap-2 text-xl">
                <span className="text-red-500 animate-spin">✱</span>
                <TimelineContent
                  as="span"
                  animationNum={0}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="text-sm font-medium text-gray-600"
                >
                  ENSINO
                </TimelineContent>
              </div>
            </div>

            <TimelineContent
              as="figure"
              animationNum={4}
              timelineRef={heroRef}
              customVariants={scaleVariants}
              className="relative group"
            >
              <svg
                className="w-full"
                width={"100%"}
                height={"100%"}
                viewBox="0 0 100 40"
              >
                <defs>
                  <clipPath
                    id="clip-inverted-ensino"
                    clipPathUnits={"objectBoundingBox"}
                  >
                    <path
                      d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                      fill="#D9D9D9"
                    />
                  </clipPath>
                </defs>
                <image
                  clipPath="url(#clip-inverted-ensino)"
                  preserveAspectRatio="xMidYMid slice"
                  width={"100%"}
                  height={"100%"}
                  xlinkHref="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop"
                ></image>
              </svg>
            </TimelineContent>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold text-gray-900 mb-8">
                <VerticalCutReveal
                  splitBy="words"
                  staggerDuration={0.1}
                  staggerFrom="first"
                  reverse={true}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 30,
                    delay: 3,
                  }}
                >
                  Equipamentos Didácticos Para Todos os Níveis de Ensino
                </VerticalCutReveal>
              </h1>

              <TimelineContent
                as="div"
                animationNum={9}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="grid md:grid-cols-2 gap-8 text-gray-600"
              >
                <TimelineContent
                  as="div"
                  animationNum={10}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="sm:text-base text-xs"
                >
                  <p className="leading-relaxed text-justify">
                    Temos equipamentos didácticos para todos os níveis de ensino (Primário, Secundário, Técnico e Superior) e de investigação cobrindo as mais variadas áreas técnicas e científicas.
                  </p>
                </TimelineContent>
                <TimelineContent
                  as="div"
                  animationNum={11}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="sm:text-base text-xs"
                >
                  <p className="leading-relaxed text-justify">
                    Química, Física, Biologia, Electrónica, Electricidade, Telecomunicações, Energias Renováveis, Mecânica de fluídos, Termodinâmica, Hidráulica, Automação, Mecatrónica, Indústria e Engenharia de Processamento a preços baixos e competitivos.
                  </p>
                </TimelineContent>
              </TimelineContent>
            </div>

            <div className="md:col-span-1">
              <div className="text-right">
                <TimelineContent
                  as="div"
                  animationNum={12}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="text-red-500 text-2xl font-bold mb-2"
                >
                  TRIONICA
                </TimelineContent>
                <TimelineContent
                  as="div"
                  animationNum={13}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="text-gray-600 text-sm mb-8"
                >
                  Equipamentos Educacionais | Soluções Científicas
                </TimelineContent>

                <TimelineContent
                  as="div"
                  animationNum={14}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="mb-6"
                >
                  <p className="text-gray-900 font-medium mb-4">
                    Pronto para equipar sua instituição com as melhores soluções educacionais?
                  </p>
                </TimelineContent>

                <TimelineContent
                  as="button"
                  animationNum={15}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="bg-neutral-900 hover:bg-neutral-950 shadow-lg shadow-neutral-900 border border-neutral-700 flex w-fit ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-lg cursor-pointer font-semibold"
                >
                  CONTACTAR
                </TimelineContent>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Mobile */}
      <section className="md:hidden relative w-full bg-[#eeeeee] pt-20 pb-8 px-6">
        <div className="max-w-[600px] mx-auto">
          {/* Badge */}
          <div className="flex gap-[4px] items-center h-[40px] mb-4">
            <div className="flex h-[30px] items-center justify-center relative shrink-0 w-[30px]">
              <div className="flex-none">
                <p className="font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal text-[#fb2c36] text-[24px] animate-spin">✱</p>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#4a5565] text-[18px]">ENSINO</p>
          </div>
          
          {/* Heading */}
          <h1 className="font-['Manrope:Medium',sans-serif] font-medium text-[#1c1716] text-[36px] leading-[1.15] tracking-[-1.08px] mb-6">
            Equipamentos Didácticos Para Todos os Níveis de Ensino
          </h1>
          
          {/* Hero Image */}
          <div className="w-full rounded-[12px] overflow-hidden mb-6">
            <img 
              alt="Ensino - Equipamentos educacionais" 
              className="w-full h-auto object-cover" 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>
      
      {/* Mobile Description Section - Only visible on mobile */}
      <section className="md:hidden relative w-full bg-[#eeeeee] px-6 pb-8">
        <div className="max-w-[600px] mx-auto">
          <p className="font-['Inter:Regular',sans-serif] text-[#4a5565] text-[18px] leading-[26px] text-justify tracking-[-0.3125px]">
            Disponibilizamos uma vasta gama de equipamentos destinados ao Ensino Superior, Instituições Técnico-Profissionais, Escolas Secundárias e Primárias, bem como Laboratórios de Investigação.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20 bg-[#eeeeee]">
        <div className="max-w-6xl mx-auto">
          <Timeline data={timelineData} />
        </div>
      </div>
    </div>
  );
}