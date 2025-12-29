import svgPaths from "./svg-0wvj996tvv";
import imgImageTrionica from "figma:asset/d93cf643f81c1830c9529a1d38a8671cd0110ae2.png";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight as ArrowRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getImageUrl } from "../utils/images";

interface FrameProps {
  onNavigate?: (page: string) => void;
}

function Icon() {
  return (
    <div className="h-[536.994px] overflow-clip relative shrink-0 w-full px-[0px] py-[-10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326.994 536.994">
        <path d={svgPaths.p12a00480} fill="var(--fill-0, #D9D9D9)" id="Background" />
      </svg>
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-[50.84%_31.84%_39.48%_5.77%] leading-[13px] text-[#f9f9f9] text-[13px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[536.994px] items-start left-[24.13px] top-[73.99px] w-[326.994px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[65.816px] left-[39px] top-[268px] w-[222.998px]" data-name="Paragraph">
      <p className="absolute font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[32.906px] left-[-0.12px] text-[40px] text-white top-0 w-[288px]">Onde o Futuro Começa</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[11.109px] relative shrink-0 w-full" data-name="Paragraph1">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[11.106px] left-[-3.4px] text-[#222] text-[12px] text-nowrap top-[4.76px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contacte-nos Hoje
      </p>
    </div>
  );
}

function Button({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div 
      className="absolute bg-white content-stretch flex flex-col h-[39px] items-start left-[45.12px] pb-0 pt-[9.249px] px-[17.275px] rounded-[16.304px] top-[464.99px] w-[141px] cursor-pointer hover:bg-gray-100 transition-colors" 
      data-name="Button"
      onClick={() => onNavigate?.('contacte-nos')}
    >
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return <div className="absolute h-[27.001px] left-[48px] top-[361px] w-[203.605px]" data-name="Paragraph2" />;
}

function Paragraph3() {
  return <div className="absolute h-[11.109px] left-[17.27px] top-[9.25px] w-[95.672px]" data-name="Paragraph3" />;
}

function Icon4() {
  return (
    <div className="h-[6.166px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[10%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.51%_-7.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.18698 6.16683">
            <path d={svgPaths.p19c4d860} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.23401" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[6.166px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[146.88px] overflow-clip pb-0 pl-[1.223px] pr-[1.233px] pt-[1.85px] size-[12px] top-[16.01px]" data-name="Icon">
      <Container1 />
    </div>
  );
}

function Button1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div 
      className="absolute bg-[#6549f6] h-[39px] left-[45.12px] rounded-[16.304px] top-[415.99px] w-[169px] cursor-pointer hover:bg-[#5538d4] transition-colors" 
      data-name="Button1"
      onClick={() => onNavigate?.('sobre-nos')}
    >
      <Paragraph3 />
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[11.106px] left-[16.88px] text-[12px] text-nowrap text-white top-[14.01px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Conheça-nos Melhor
      </p>
      <Icon5 />
    </div>
  );
}

function Group1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute left-0 size-0 top-0" data-name="Group1">
      <Container />
      <Paragraph />
      <Button onNavigate={onNavigate} />
      <Paragraph2 />
      <Button1 onNavigate={onNavigate} />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[0.527px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Underline">
        <div className="absolute inset-[-0.26px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.9201 0.524884">
            <path d="M0 0.262442H57.9201" id="Underline" opacity="0.7" stroke="var(--stroke-0, #4C4C4C)" strokeWidth="0.524884" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.527px] items-start left-0 overflow-clip top-[-0.69px] w-[57.92px]" data-name="Icon1">
      <Icon6 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[12.879px] left-0 top-[5.95px] w-[10.771px]" data-name="Paragraph4">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[12.883px] left-0 text-[#222] text-[9.018px] text-nowrap top-[-0.36px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        01.
      </p>
    </div>
  );
}

function No() {
  return (
    <div className="absolute h-[19.313px] left-[203.13px] top-[591.99px] w-[58.696px]" data-name="No1">
      <Icon1 />
      <Paragraph4 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[0.527px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Underline">
        <div className="absolute inset-[-0.26px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0479 0.518478">
            <path d="M0 0.259239H13.0479" id="Underline" opacity="0.7" stroke="var(--stroke-0, #C6C6C6)" strokeWidth="0.518478" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col h-[0.527px] items-start overflow-clip relative shrink-0 w-full" data-name="Icon2">
      <Icon7 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[12.879px] relative shrink-0 w-full" data-name="Paragraph5">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[12.883px] left-0 text-[#222] text-[9.018px] text-nowrap top-[-0.36px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        02.
      </p>
    </div>
  );
}

function No1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.106px] h-[19.313px] items-start left-[277.28px] pb-0 pt-[-0.686px] px-0 top-[591.99px] w-[13.048px]" data-name="No2">
      <Icon2 />
      <Paragraph5 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[0.527px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Underline">
        <div className="absolute inset-[-0.26px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2768 0.52081">
            <path d="M0 0.260405H13.2768" id="Underline" opacity="0.7" stroke="var(--stroke-0, #C6C6C6)" strokeWidth="0.52081" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex flex-col h-[0.527px] items-start overflow-clip relative shrink-0 w-full" data-name="Icon3">
      <Icon8 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[12.879px] relative shrink-0 w-full" data-name="Paragraph6">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[12.883px] left-0 text-[#222] text-[9.018px] text-nowrap top-[-0.36px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        03.
      </p>
    </div>
  );
}

function No2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.106px] h-[19.313px] items-start left-[305.78px] pb-0 pt-[-0.686px] px-0 top-[591.99px] w-[13.277px]" data-name="No22">
      <Icon3 />
      <Paragraph6 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-0 size-0 top-0" data-name="Group">
      <No />
      <No1 />
      <No2 />
    </div>
  );
}

function Group2({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute left-[-0.13px] size-0 top-0" data-name="Group2">
      <Group1 onNavigate={onNavigate} />
      <Group />
    </div>
  );
}

function ImageTrionica() {
  return (
    <div className="relative shrink-0 size-[30.369px]" data-name="Image (Trionica)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageTrionica} />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[22.779px] relative shrink-0 w-[57.34px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.782px] left-0 not-italic text-[15.188px] text-nowrap text-white top-[-0.43px] tracking-[-0.2966px]">Trionica</p>
      </div>
    </div>
  );
}

function Container2({ onNavigate, onClick }: { onNavigate?: (page: string) => void; onClick?: () => void }) {
  return (
    <div className="h-[30.369px] relative shrink-0 w-[95.299px] cursor-pointer" data-name="Container" onClick={() => onNavigate?.('home')}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.59px] items-center relative size-full">
        <ImageTrionica />
        <Text />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[22.779px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_16.67%_79.17%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-0.95px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0844 1.89826">
            <path d="M0.949132 0.949132H16.1352" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.89826" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.95px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0844 1.89826">
            <path d="M0.949132 0.949132H16.1352" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.89826" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.17%_16.67%_20.83%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-0.95px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0844 1.89826">
            <path d="M0.949132 0.949132H16.1352" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.89826" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[22.779px] cursor-pointer" data-name="Button" onClick={onClick}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Navigation({ onNavigate, onMenuClick }: { onNavigate?: (page: string) => void; onMenuClick?: () => void }) {
  return (
    <div className="sticky bg-[rgba(0,0,0,0.8)] content-stretch flex h-[53.139px] items-center justify-between left-[8.87px] px-[15.18px] py-0 rounded-[13.289px] top-[9.42px] w-[355.253px] z-50" data-name="Navigation">
      <Container2 onNavigate={onNavigate} />
      <Button2 onClick={onMenuClick} />
    </div>
  );
}

function Frame({ onNavigate, onMenuClick }: { onNavigate?: (page: string) => void; onMenuClick?: () => void }) {
  return (
    <>
      <div className="absolute bg-white h-[610.995px] left-0 overflow-clip top-0 w-[373.994px] px-[0px] pt-[10px] pb-[32px]" data-name="Frame">
        <Group2 onNavigate={onNavigate} />
      </div>
      <Navigation onNavigate={onNavigate} onMenuClick={onMenuClick} />
    </>
  );
}

export default function Frame1({ onNavigate }: FrameProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavClick = (page: string) => {
    onNavigate?.(page);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="relative size-full">
      <Frame onNavigate={onNavigate} onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col p-4 bg-black/95 overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
                <img 
                  src={getImageUrl("wp-content/uploads/2019/05/cropped-LogoTRIONICAmz-002_1-1.png")}
                  alt="Trionica" 
                  className="h-10 w-auto"
                />
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center justify-between border-b border-gray-800 pb-3 text-lg text-white"
              >
                <span>Home</span>
                <ArrowRightIcon className="h-4 w-4 text-gray-400" />
              </button>
              
              <button
                onClick={() => handleNavClick('sobre-nos')}
                className="flex items-center justify-between border-b border-gray-800 pb-3 text-lg text-white"
              >
                <span>Sobre Nós</span>
                <ArrowRightIcon className="h-4 w-4 text-gray-400" />
              </button>
              
              {/* Mobile Soluções Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'solucoes' ? null : 'solucoes')}
                  className="w-full flex items-center justify-between border-b border-gray-800 pb-3 text-lg text-white"
                >
                  <span>Soluções</span>
                  <motion.div
                    animate={{ rotate: openDropdown === 'solucoes' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openDropdown === 'solucoes' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 ml-4 space-y-2"
                    >
                      {[
                        { id: 'ensino', label: 'Ensino' },
                        { id: 'saude', label: 'Saúde' },
                        { id: 'aguas', label: 'Águas' },
                        { id: 'ambiente', label: 'Ambiente' },
                        { id: 'minas', label: 'Minas' }
                      ].map(item => (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className="w-full text-left px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800"
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => handleNavClick('blog')}
                className="flex items-center justify-between border-b border-gray-800 pb-3 text-lg text-white"
              >
                <span>Portfolio</span>
                <ArrowRightIcon className="h-4 w-4 text-gray-400" />
              </button>

              <button
                onClick={() => handleNavClick('contacte-nos')}
                className="flex items-center justify-between border-b border-gray-800 pb-3 text-lg text-white"
              >
                <span>Contacte-nos</span>
                <ArrowRightIcon className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}