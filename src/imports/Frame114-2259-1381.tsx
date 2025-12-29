import svgPaths from "./svg-rg0c2gpdq6";
import imgImageTrionica from "figma:asset/d93cf643f81c1830c9529a1d38a8671cd0110ae2.png";
import imgImageBg from "figma:asset/929628c41e1974158fceb3efd1316d2a70e98a67.png";
import imgAguas from "figma:asset/e5338e4f7a6437afa17dbc009c762e48754173a4.png";
import imgAmbiente from "figma:asset/c1b1db6c514cff25caa0cecbe74fea6016b4cc73.png";
import imgMinas from "figma:asset/f7f09a1149bfa2062668c63ecb8f8d1f941ca029.png";
import imgSaude from "figma:asset/5387dac094734b07fbea93a0716344069eaf78fc.png";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProductItem } from "../components/ui/navbar-menu";

interface FrameProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

function Paragraph1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div
      className="absolute h-[22.234px] left-[16.66px] top-[16.02px] w-[55.766px] cursor-pointer"
      data-name="Paragraph32"
      onClick={() => onNavigate?.('home')}
    >
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[#6549f6] text-[19.455px] text-nowrap top-[-1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Home
      </p>
    </div>
  );
}

function ButtonNavButton({ onNavigate, currentPage }: { onNavigate?: (page: string) => void; currentPage?: string }) {
  const isActive = currentPage === 'home';
  return (
    <div 
      className={`absolute h-[55.563px] left-[25.05px] rounded-[33.352px] top-[-6.98px] w-[89.094px] cursor-pointer transition-all ${
        isActive ? 'bg-[rgba(101,73,246,0.15)]' : 'bg-[rgba(247,246,255,0.97)] hover:bg-[rgba(247,246,255,1)]'
      }`}
      data-name="ButtonNavButton"
      onClick={() => onNavigate?.('home')}
    >
      <Paragraph1 onNavigate={onNavigate} />
    </div>
  );
}

function ButtonNavButton1({ onNavigate, currentPage }: { onNavigate?: (page: string) => void; currentPage?: string }) {
  const isActive = currentPage === 'sobre-nos';
  return (
    <div 
      className={`absolute h-[22.234px] left-[158.62px] top-[9.04px] w-[96.859px] cursor-pointer transition-opacity ${
        isActive ? 'opacity-100' : 'hover:opacity-70'
      }`}
      data-name="ButtonNavButton1"
      onClick={() => onNavigate?.('sobre-nos')}
    >
      <p className={`absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[19.455px] text-nowrap top-[-1px] ${
        isActive ? 'text-[#6549f6]' : 'text-black'
      }`} style={{ fontVariationSettings: "'opsz' 14" }}>
        Sobre Nós
      </p>
    </div>
  );
}

function ButtonNavButton2({ isHovered, onMouseEnter, onMouseLeave, onNavigate, currentPage }: { 
  isHovered: boolean; 
  onMouseEnter: () => void; 
  onMouseLeave: () => void;
  onNavigate?: (page: string) => void;
  currentPage?: string;
}) {
  // Solution items with descriptions and images
  const solutionDetails = [
    {
      id: 'ensino',
      label: 'Ensino',
      description: 'Equipamentos e soluções educacionais para laboratórios de ensino',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop'
    },
    {
      id: 'saude',
      label: 'Saúde',
      description: 'Equipamentos hospitalares e soluções para diagnóstico médico',
      image: imgSaude
    },
    {
      id: 'aguas',
      label: 'Águas',
      description: 'Equipamentos para tratamento e análise de qualidade de água',
      image: imgAguas
    },
    {
      id: 'ambiente',
      label: 'Ambiente',
      description: 'Soluções sustentáveis para monitorização ambiental',
      image: imgAmbiente
    },
    {
      id: 'minas',
      label: 'Minas',
      description: 'Equipamentos para exploração mineira e análise geológica',
      image: imgMinas
    }
  ];

  const isActive = solutionDetails.some(item => item.id === currentPage);

  const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  return (
    <div 
      className={`absolute h-[22.234px] left-[299.93px] top-[9.04px] w-[130px] cursor-pointer transition-opacity ${
        isActive ? 'opacity-100' : 'hover:opacity-70'
      }`}
      data-name="ButtonNavButton2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-2">
        <p className={`font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] text-[19.455px] text-nowrap ${
          isActive ? 'text-[#6549f6]' : 'text-black'
        }`} style={{ fontVariationSettings: "'opsz' 14" }}>
          Soluções
        </p>
        <ChevronDown className={`w-[19px] h-[19px] ${isActive ? 'text-[#6549f6]' : 'text-black'}`} />
      </div>
      
      {/* Dropdown Menu with Framer Motion */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={transition}
            className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 z-[9999]"
          >
            <motion.div
              transition={transition}
              layoutId="solucoesDropdownHome"
              className="bg-white border-2 border-gray-300 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
            >
              <motion.div layout className="w-max h-full p-6">
                <div className="grid grid-cols-2 gap-4">
                  {solutionDetails.map((item) => (
                    <ProductItem
                      key={item.id}
                      title={item.label}
                      description={item.description}
                      onClick={() => {
                        onNavigate?.(item.id);
                      }}
                      src={item.image}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ButtonNavButton3({ onNavigate, currentPage }: { onNavigate?: (page: string) => void; currentPage?: string }) {
  const isActive = currentPage === 'blog';
  return (
    <div 
      className={`absolute h-[22.234px] left-[453.15px] top-[9.04px] w-[80.797px] cursor-pointer transition-opacity ${
        isActive ? 'opacity-100' : 'hover:opacity-70'
      }`}
      data-name="ButtonNavButton3"
      onClick={() => onNavigate?.('blog')}
    >
      <p className={`absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[19.455px] text-nowrap top-[-1px] ${
        isActive ? 'text-[#6549f6]' : 'text-[#222]'
      }`} style={{ fontVariationSettings: "'opsz' 14" }}>
        Portfolio
      </p>
    </div>
  );
}

function Navigation({ onNavigate, isDropdownHovered, setDropdownHovered, currentPage }: { 
  onNavigate?: (page: string) => void;
  isDropdownHovered: boolean;
  setDropdownHovered: (hovered: boolean) => void;
  currentPage?: string;
}) {
  return (
    <div className="absolute h-[41.594px] left-[388px] top-[30px] w-[559px] z-50" data-name="Navigation2">
      <ButtonNavButton onNavigate={onNavigate} currentPage={currentPage} />
      <ButtonNavButton1 onNavigate={onNavigate} currentPage={currentPage} />
      <ButtonNavButton2 
        isHovered={isDropdownHovered}
        onMouseEnter={() => setDropdownHovered(true)}
        onMouseLeave={() => setDropdownHovered(false)}
        onNavigate={onNavigate}
        currentPage={currentPage}
      />
      <ButtonNavButton3 onNavigate={onNavigate} currentPage={currentPage} />
    </div>
  );
}

function ImageTrionica() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-[54px]" data-name="Image (Trionica)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageTrionica} />
      <div className="absolute flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[-615px] text-[28px] text-center text-nowrap text-white top-[20px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[36px]">Spark AI</p>
      </div>
    </div>
  );
}

function Button({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div 
      className="content-center flex flex-wrap gap-[8px] h-[42px] items-center justify-center px-[20px] py-[16px] relative rounded-[24px] shrink-0 cursor-pointer hover:bg-white/20 transition-colors" 
      data-name="Button"
      onClick={() => onNavigate?.('contacte-nos')}
    >
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Contactar</p>
      </div>
    </div>
  );
}

function Button1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div 
      className="absolute bg-white content-stretch flex flex-col h-[62.398px] items-start left-[326.38px] pb-0 pt-[19.5px] px-[36.398px] rounded-[34.353px] top-0 w-[255.609px] cursor-pointer hover:bg-gray-100 transition-colors" 
      data-name="Button3"
      onClick={() => onNavigate?.('contacte-nos')}
    >
      <Paragraph />
    </div>
  );
}

function Cta({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center justify-end relative shrink-0" data-name="CTA">
      <Button onNavigate={onNavigate} />
    </div>
  );
}

function Menu({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute content-stretch flex h-[49.095px] items-center justify-between left-[119px] right-[80.24px] top-[38px]" data-name="Menu">
      <ImageTrionica />
      <Cta onNavigate={onNavigate} />
    </div>
  );
}

function Header({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute contents left-[119px] right-[80.24px] top-[38px]" data-name="Header 1">
      <Menu onNavigate={onNavigate} />
    </div>
  );
}

function ImageBg({ onNavigate, isDropdownHovered, setDropdownHovered, currentPage }: { 
  onNavigate?: (page: string) => void;
  isDropdownHovered: boolean;
  setDropdownHovered: (hovered: boolean) => void;
  currentPage?: string;
}) {
  return (
    <div className="absolute h-[775px] left-0 top-0 w-[1346.594px] overflow-visible" data-name="Image BG">
      <div className="absolute h-[756px] left-0 right-[-0.41px] top-0" data-name="Image BG">
        <img alt="" className="block max-w-none size-full" height="756" src={imgImageBg} width="1347" />
      </div>
      <Navigation 
        onNavigate={onNavigate} 
        isDropdownHovered={isDropdownHovered}
        setDropdownHovered={setDropdownHovered}
        currentPage={currentPage}
      />
      <Header onNavigate={onNavigate} />
    </div>
  );
}

function ButtonCircle() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center mb-[-30px] px-[32px] py-[48px] relative rounded-[70px] shrink-0 size-[110px]" data-name="Button Circle">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]" dir="ltr">
          ROLE
        </p>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15px]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
        <g clipPath="url(#clip0_2249_741)" id="arrow-down">
          <path d={svgPaths.p3cb1cc60} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2249_741">
            <rect fill="white" height="14" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonCircle1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mb-[-30px] px-[32px] py-[48px] relative rounded-[70px] shrink-0 size-[110px]" data-name="Button Circle">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[70px]" />
      <ArrowDown />
    </div>
  );
}

function ScrollDown() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[30px] pt-0 px-0 relative w-full" data-name="Scroll Down">
      <ButtonCircle />
      <ButtonCircle1 />
    </div>
  );
}

function No() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="No 1">
      <div className="h-0 relative shrink-0 w-full" data-name="Underline">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(76, 76, 76, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 1">
            <line id="Underline" opacity="0.7" stroke="var(--stroke-0, #4C4C4C)" x2="125" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[15.4px] w-[137.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[22px]">01.</p>
      </div>
    </div>
  );
}

function SliderData() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[24px] h-[27px] items-start left-[39px] right-[1182.59px] top-[724px]" data-name="Slider Data">
      <No />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[208px] left-[117.14px] top-[190px] w-[631.63px]" data-name="Paragraph52">
      <p className="absolute font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[104px] left-0 text-[93.6px] text-white top-0 w-[621px]">Onde o Futuro Começa</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[72.797px] left-[117.14px] top-[433px] w-[655.472px]" data-name="Paragraph62">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[36.4px] left-0 text-[#f9f9f9] text-[23.4px] top-[-0.5px] w-[643px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[23.398px] left-[36.4px] top-[19.5px] w-[201.586px]" data-name="Paragraph72">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[23.4px] left-0 text-[19.5px] text-nowrap text-white top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Conheça-nos Melhor
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[10%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5943 12.9995">
            <path d={svgPaths.p16763080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.59947" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[248.38px] overflow-clip pb-0 pt-[3.898px] px-[2.602px] size-[20.797px] top-[20.8px]" data-name="Icon42">
      <Container1 />
    </div>
  );
}

function Button2({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div 
      className="absolute bg-[#6549f6] h-[62.398px] left-0 rounded-[34.353px] top-0 w-[305.578px] cursor-pointer hover:bg-[#5438d4] transition-colors" 
      data-name="Button12"
      onClick={() => onNavigate?.('sobre-nos')}
    >
      <Paragraph5 />
      <Icon3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[23.398px] relative shrink-0 w-full" data-name="Paragraph8">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[23.4px] left-0 text-[#222] text-[19.5px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contacte-nos Hoje
      </p>
    </div>
  );
}

function Cta1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute h-[62.398px] left-[117.14px] top-[540.13px] w-[561.036px]" data-name="Cta">
      <Button2 onNavigate={onNavigate} />
      <Button1 onNavigate={onNavigate} />
    </div>
  );
}

function Group1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute contents left-[117.14px] top-[190px]">
      <Paragraph3 />
      <Paragraph4 />
      <Cta1 onNavigate={onNavigate} />
    </div>
  );
}

function Slider({ onNavigate, isDropdownHovered, setDropdownHovered, currentPage }: { 
  onNavigate?: (page: string) => void;
  isDropdownHovered: boolean;
  setDropdownHovered: (hovered: boolean) => void;
  currentPage?: string;
}) {
  return (
    <div className="absolute contents left-0 top-0" data-name="Slider">
      <ImageBg 
        onNavigate={onNavigate} 
        isDropdownHovered={isDropdownHovered}
        setDropdownHovered={setDropdownHovered}
        currentPage={currentPage}
      />
      <div className="absolute flex items-center justify-center left-[1164.53px] right-[146px] top-[555.83px]">
        <div className="flex-none h-[190px] rotate-[180deg] scale-y-[-100%] w-[36.069px]">
          <ScrollDown />
        </div>
      </div>
      <SliderData />
      <Group1 onNavigate={onNavigate} />
    </div>
  );
}

function Group({ onNavigate, isDropdownHovered, setDropdownHovered, currentPage }: { 
  onNavigate?: (page: string) => void;
  isDropdownHovered: boolean;
  setDropdownHovered: (hovered: boolean) => void;
  currentPage?: string;
}) {
  return (
    <div className="absolute contents left-0 top-0">
      <Slider 
        onNavigate={onNavigate}
        isDropdownHovered={isDropdownHovered}
        setDropdownHovered={setDropdownHovered}
        currentPage={currentPage}
      />
    </div>
  );
}

export default function Frame({ onNavigate, currentPage }: FrameProps) {
  const [isDropdownHovered, setDropdownHovered] = useState(false);
  return (
    <div className="relative size-full">
      <Group 
        onNavigate={onNavigate}
        isDropdownHovered={isDropdownHovered}
        setDropdownHovered={setDropdownHovered}
        currentPage={currentPage}
      />
    </div>
  );
}