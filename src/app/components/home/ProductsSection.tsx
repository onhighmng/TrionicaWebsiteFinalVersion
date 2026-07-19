import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ensinoImg from '../../../imports/ensino-lab.jpg';
import saudeImg from '../../../imports/saude-card.jpeg';
import aguasImg from '../../../imports/aguas-hero.png';
import aguasImg2 from '../../../imports/aquasafe-wsl50-case.png';
import ambienteImg from '../../../imports/card-ambiente.jpg';
import minasImg from '../../../imports/card-minas-mine.webp';

const solutions: { number: string; title: string; subtitle: string; description: string; bullets: string[]; image: string; image2?: string; link: string }[] = [
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

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export function ProductsSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [active, setActive] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(600);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = solutions.length;

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) setContainerWidth(imageContainerRef.current.offsetWidth);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 5000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [count]);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % count);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, [count]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + count) % count);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, [count]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === active;
    const isLeft = (active - 1 + count) % count === index;
    const isRight = (active + 1) % count === index;
    if (isActive) return {
      zIndex: 3, opacity: 1, pointerEvents: 'auto',
      transform: 'translateX(0px) translateY(0px) scale(1) rotateY(0deg)',
      transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
    };
    if (isLeft) return {
      zIndex: 2, opacity: 1, pointerEvents: 'auto',
      transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
      transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
    };
    if (isRight) return {
      zIndex: 2, opacity: 1, pointerEvents: 'auto',
      transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
      transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
    };
    return { zIndex: 1, opacity: 0, pointerEvents: 'none', transition: 'all 0.8s cubic-bezier(.4,2,.3,1)' };
  }

  const sol = solutions[active];

  return (
    <section className="bg-white" data-navbar-section="light">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl pt-16 md:pt-24 pb-16 md:pb-24">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#2354a2] mb-3">
            Nossas Soluções
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[26px] md:text-[36px] lg:text-[42px] leading-tight text-[#0c1313] tracking-tight">
            Fornecemos Soluções Tecnológicas Integradas<br />para o Desenvolvimento de Moçambique
          </h2>
        </div>

        {/* Mobile: horizontally scrollable cards */}
        <div
          className="md:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {solutions.map((s) => (
            <div
              key={s.number}
              className="snap-center shrink-0 w-[85%] max-w-[340px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative">
                {s.image2 ? (
                  <div className="flex w-full h-44">
                    <img src={s.image} alt={s.title} className="w-1/2 h-full object-cover" />
                    <img src={s.image2} alt={s.title} className="w-1/2 h-full object-cover" />
                  </div>
                ) : (
                  <img src={s.image} alt={s.title} className="w-full h-44 object-cover" />
                )}
                <div className="absolute top-3 left-3 bg-[#2354a2] text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest">
                  {s.number}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] text-[#0c1313] mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[#4b5563] text-sm leading-relaxed mb-4 flex-1">
                  {s.description}
                </p>
                <button
                  onClick={() => { onNavigate(s.link); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="inline-flex items-center justify-center gap-2 bg-[#2354a2] hover:bg-[#1a3f7a] text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200"
                >
                  Saber mais <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Circular layout (desktop) */}
        <div className="hidden md:grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20 items-start">

          {/* Image carousel */}
          <div
            ref={imageContainerRef}
            className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[420px]"
            style={{ perspective: '1000px' }}
          >
            {solutions.map((s, i) => (
              <div
                key={s.number}
                className="absolute w-full h-full rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.18)', ...getImageStyle(i) }}
              >
                {s.image2 ? (
                  <div className="flex w-full h-full">
                    <img src={s.image} alt={s.title} className="w-1/2 h-full object-cover" />
                    <img src={s.image2} alt={s.title} className="w-1/2 h-full object-cover" />
                  </div>
                ) : (
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                )}
              </div>
            ))}
            {/* Number badge on active image */}
            <div className="absolute top-4 left-4 z-10 bg-[#2354a2] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase pointer-events-none">
              {sol.number}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] md:text-[28px] text-[#0c1313] mb-1 tracking-tight">
                  {sol.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[#2354a2] text-xs md:text-sm mb-4 uppercase tracking-wide">
                  {sol.subtitle}
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-[#4b5563] text-sm md:text-base leading-relaxed mb-5">
                  {sol.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {sol.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2354a2] shrink-0 mt-0.5" />
                      <span className="font-['Plus_Jakarta_Sans'] text-[#374151] text-sm leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => { onNavigate(sol.link); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="inline-flex items-center gap-2 self-start bg-[#2354a2] hover:bg-[#1a3f7a] text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200"
                >
                  Saber mais <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePrev}
                onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}
                aria-label="Anterior"
                className="w-11 h-11 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors duration-300"
                style={{ backgroundColor: hoverPrev ? '#2354a2' : '#0c1313' }}
              >
                <FaArrowLeft size={16} color="#f1f1f7" />
              </button>
              <button
                onClick={handleNext}
                onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}
                aria-label="Próximo"
                className="w-11 h-11 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors duration-300"
                style={{ backgroundColor: hoverNext ? '#2354a2' : '#0c1313' }}
              >
                <FaArrowRight size={16} color="#f1f1f7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
