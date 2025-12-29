import svgPaths from "./svg-7u0ltz331n";
import imgImageBg from "figma:asset/9dfd245b006840cadaf970a404f38325048163c5.png";
import imgEnsino from "figma:asset/9854ff897c6a37a7e04ce9694b5507a1f8ff9ccd.png";
import imgSaude from "figma:asset/b9b4a860ba9cc5cee7649a8c92d8d34037949ffd.png";
import imgAmbiente from "figma:asset/b25bef685a9ce1e8fd8a54db759a43c1da309510.png";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Frame25Props {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

function ButtonNavButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="bg-[rgba(247,246,255,0.97)] content-stretch flex gap-[8.552px] items-center p-[12.827px] relative rounded-[25.655px] shrink-0 cursor-pointer"
      data-name="Button Nav-button"
      onClick={onClick}
    >
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-white text-[14.965px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[17.103px]" dir="auto">
          Home
        </p>
      </div>
    </div>
  );
}

function ButtonNavButton1({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex gap-[8.552px] items-center px-0 py-[8.552px] relative shrink-0 cursor-pointer"
      data-name="Button Nav-button"
      onClick={onClick}
    >
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14.965px] text-white text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[17.103px]" dir="auto">
          Sobre Nós
        </p>
      </div>
    </div>
  );
}

function ButtonNavButton2({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isHovered, setIsHovered] = useState(false);

  const solutionDetails: Record<string, { description: string; image: string }> = {
    ensino: {
      description: "Equipamentos e soluções educacionais para laboratórios de ensino",
      image: imgEnsino
    },
    saude: {
      description: "Equipamentos hospitalares e soluções para diagnóstico médico",
      image: imgSaude
    },
    aguas: {
      description: "Equipamentos para tratamento e análise de qualidade de água",
      image: "https://images.unsplash.com/photo-1674471361523-195aa08e69b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=250"
    },
    ambiente: {
      description: "Soluções sustentáveis para monitorização ambiental",
      image: imgAmbiente
    },
    minas: {
      description: "Equipamentos para exploração mineira e análise geológica",
      image: "https://images.unsplash.com/photo-1764422743505-97c9ea0e43f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=250"
    }
  };

  const items = [
    { id: 'ensino', label: 'Ensino' },
    { id: 'saude', label: 'Saúde' },
    { id: 'aguas', label: 'Águas' },
    { id: 'ambiente', label: 'Ambiente' },
    { id: 'minas', label: 'Minas' }
  ];

  return (
    <div 
      className="relative content-stretch flex gap-[8.552px] items-center px-0 py-[8.552px] shrink-0 cursor-pointer" 
      data-name="Button Nav-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14.965px] text-white text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[17.103px]" dir="auto">
          Soluções
        </p>
      </div>
      <div className="flex h-[4.276px] items-center justify-center relative shrink-0 w-[8.552px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[8.552px] relative w-[4.276px]" data-name="nav-arrow-down">
            <div className="absolute inset-[-9.38%_-18.75%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
                <path d={svgPaths.p1336f00} id="nav-arrow-down" stroke="var(--stroke-0, #FFFFFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60341" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%_+_8px)] left-1/2 transform -translate-x-1/2 z-[999999999]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xl min-w-[700px]">
              <div className="p-3">
                <div className="grid grid-cols-2 gap-2">
                  {items.map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => {
                        onNavigate?.(item.id);
                        setIsHovered(false);
                      }} 
                      className="flex items-center gap-3 text-left hover:bg-gray-50 p-2 rounded-lg transition-colors w-full"
                    >
                      <img
                        src={solutionDetails[item.id]?.image || ""}
                        alt={item.label}
                        className="flex-shrink-0 rounded-md object-cover w-[100px] h-[60px]"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-black text-sm mb-1">
                          {item.label}
                        </h4>
                        <p className="text-neutral-600 text-xs leading-relaxed">
                          {solutionDetails[item.id]?.description || ""}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ButtonNavButton3({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex gap-[8.552px] items-center px-0 py-[8.552px] relative shrink-0 cursor-pointer"
      data-name="Button Nav-button"
      onClick={onClick}
    >
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-white text-[14.965px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[17.103px]" dir="auto">
          Portfolio
        </p>
      </div>
    </div>
  );
}

function Navigation({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute content-center flex flex-wrap gap-[32px_34.206px] h-[32px] items-center justify-center left-[303px] right-[302.87px] top-[22px] z-[100000] pointer-events-auto" data-name="Navigation">
      <ButtonNavButton onClick={() => onNavigate?.('home')} />
      <ButtonNavButton1 onClick={() => onNavigate?.('sobre-nos')} />
      <ButtonNavButton2 onNavigate={onNavigate} />
      <ButtonNavButton3 onClick={() => onNavigate?.('blog')} />
    </div>
  );
}

function ImageBg({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute h-[584px] left-0 top-0 w-[1035.873px] z-[1000] pointer-events-none" data-name="Image BG">
      <div className="absolute h-[584px] left-0 right-0 top-0 pointer-events-auto" data-name="Image BG">
        <img alt="" className="block max-w-none size-full" height="584" src={imgImageBg} width="1035.873" />
      </div>
      <Navigation onNavigate={onNavigate} />
    </div>
  );
}

function Frame({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute h-[584px] left-0 top-0 w-[1035.873px] z-[1000] pointer-events-none">
      <ImageBg onNavigate={onNavigate} />
    </div>
  );
}

function ButtonCircle() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center mb-[-19.819px] px-[21.14px] py-[31.71px] relative rounded-[46.244px] shrink-0 size-[72.67px]" data-name="Button Circle">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[9.249px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[10.57px]" dir="auto">
          ROLE
        </p>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="h-[9.249px] relative shrink-0 w-[9.91px]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_2068_459)" id="arrow-down">
          <path d={svgPaths.p3cb1cc60} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2068_459">
            <rect fill="white" height="9.24887" width="9.9095" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonCircle1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mb-[-19.819px] px-[21.14px] py-[31.71px] relative rounded-[46.244px] shrink-0 size-[72.67px]" data-name="Button Circle">
      <div aria-hidden="true" className="absolute border-[0.661px] border-solid border-white inset-0 pointer-events-none rounded-[46.244px]" />
      <ArrowDown />
    </div>
  );
}

function ScrollDown() {
  return (
    <div className="absolute content-stretch flex flex-col h-[125.52px] items-center justify-center left-[923.57px] pb-[19.819px] pt-0 px-0 right-[39.64px] top-[418.84px]" data-name="Scroll Down">
      <ButtonCircle />
      <ButtonCircle1 />
    </div>
  );
}

function No() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6.606px] grow items-start min-h-px min-w-px relative shrink-0" data-name="No 1">
      <div className="h-0 relative shrink-0 w-full" data-name="Underline">
        <div className="absolute inset-[-0.66px_0_0_0]" style={{ "--stroke-0": "rgba(76, 76, 76, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 1">
            <line id="Underline" opacity="0.7" stroke="var(--stroke-0, #4C4C4C)" strokeWidth="0.660633" x2="59.2036" y1="0.330317" y2="0.330317" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[9.249px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[13.213px]">01.</p>
      </div>
    </div>
  );
}

function No1() {
  return (
    <div className="content-stretch flex flex-col gap-[6.606px] items-start relative shrink-0" data-name="No 2">
      <div className="h-0 relative shrink-0 w-full" data-name="Underline">
        <div className="absolute inset-[-0.66px_0_0_0]" style={{ "--stroke-0": "rgba(198, 198, 198, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Underline" opacity="0.7" stroke="var(--stroke-0, #C6C6C6)" strokeWidth="0.660633" x2="14" y1="0.330317" y2="0.330317" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[9.249px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[13.213px]">02.</p>
      </div>
    </div>
  );
}

function No2() {
  return (
    <div className="content-stretch flex flex-col gap-[6.606px] items-start relative shrink-0" data-name="No 3">
      <div className="h-0 relative shrink-0 w-full" data-name="Underline">
        <div className="absolute inset-[-0.66px_0_0_0]" style={{ "--stroke-0": "rgba(198, 198, 198, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Underline" opacity="0.7" stroke="var(--stroke-0, #C6C6C6)" strokeWidth="0.660633" x2="14" y1="0.330317" y2="0.330317" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[9.249px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[13.213px]">03.</p>
      </div>
    </div>
  );
}

function SliderData() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[15.855201721191406px_15.855px] h-[13.213px] items-start left-0 right-[916.96px] top-[570.79px]" data-name="Slider Data">
      <No />
      <No1 />
      <No2 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="h-[16px] relative shrink-0 w-[16px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function HeadingAndSupportingText({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="relative w-full max-w-full px-4 md:px-8 lg:px-0 lg:absolute lg:left-[95.13px] lg:top-[159.87px] lg:w-[409.593px] z-[2000] py-8 lg:py-0" data-name="Heading And Supporting Text">
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-tight md:leading-[60px] lg:leading-[80px] text-[36px] md:text-[52px] lg:text-[72px] text-white mb-4 md:mb-6 max-w-full lg:w-[524px]">Onde o Futuro Começa</p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] md:leading-[28px] text-[16px] md:text-[18px] text-[#f9f9f9] mb-6 md:mb-8 max-w-full lg:w-[571px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div 
          className="bg-[#6549f6] flex gap-[8px] h-[48px] items-center justify-center px-[20px] md:px-[28px] py-[20px] rounded-[26.425px] cursor-pointer hover:bg-[#5538d4] transition-colors w-full sm:w-auto" 
          onClick={() => onNavigate?.('sobre-nos')}
        >
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold text-[14px] md:text-[15px] text-white whitespace-nowrap">Conheça-nos Melhor</p>
          <ArrowRight />
        </div>
        <div 
          className="bg-white flex gap-[8px] h-[48px] items-center justify-center px-[20px] md:px-[28px] py-[20px] rounded-[26.425px] cursor-pointer hover:bg-gray-100 transition-colors w-full sm:w-auto" 
          onClick={() => onNavigate?.('contacte-nos')}
        >
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold text-[#222] text-[14px] md:text-[15px] whitespace-nowrap">Contacte-nos Hoje</p>
        </div>
      </div>
    </div>
  );
}

function Slider({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute contents left-0 top-0" data-name="Slider">
      <Frame onNavigate={onNavigate} />
      <ScrollDown />
      <SliderData />
      <HeadingAndSupportingText onNavigate={onNavigate} />
    </div>
  );
}

export default function Frame25({ currentPage, onNavigate }: Frame25Props) {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1035px] mx-auto">
        <div className="relative w-full" style={{ paddingBottom: '56.43%' }}> {/* 584/1035 = 56.43% */}
          <div className="absolute inset-0">
            <div className="w-[1035px] h-[584px] scale-[0.5] sm:scale-[0.6] md:scale-[0.87] lg:scale-100 origin-top-left">
              <Slider onNavigate={onNavigate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}