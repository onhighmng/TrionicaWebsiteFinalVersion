import svgPaths from "./svg-pikjkqnd29";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight as ArrowRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getImageUrl } from "../utils/images";

interface FrameProps {
  onNavigate?: (page: string) => void;
}

function Logo() {
  return <div className="content-stretch flex items-center shrink-0" data-name="Logo" />;
}

function MobileNavbar({ onNavigate, mobileMenuOpen, setMobileMenuOpen }: { 
  onNavigate?: (page: string) => void; 
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavClick = (page: string) => {
    onNavigate?.(page);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Mobile navbar bar */}
      <div className="absolute bg-[#222] content-stretch flex items-center justify-between left-0 px-[13.916px] py-[10.437px] top-0 w-[374px] z-20" data-name="Menu">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <img 
            src={getImageUrl("wp-content/uploads/2019/05/cropped-LogoTRIONICAmz-002_1-1.png")}
            alt="Trionica" 
            className="h-7 w-auto"
          />
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
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
    </>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[65.813px] left-[45px] top-[299px] w-[215.536px]" data-name="Paragraph">
      <p className="absolute font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[32.906px] left-0 text-[32px] text-white top-0 w-[223px]">Onde o Futuro Começa</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[11.106px] left-[17.28px] top-[9.25px] w-[86.765px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[11.106px] left-0 text-[#222] text-[9.255px] text-nowrap top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contacte-nos Hoje
      </p>
    </div>
  );
}

function Button({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div
      className="absolute bg-white h-[29.616px] left-[45px] rounded-[16.304px] top-[453.65px] w-[121.316px] cursor-pointer hover:bg-gray-100 transition-colors"
      data-name="Button1"
      onClick={() => onNavigate?.("contacte-nos")}
    >
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[23.034px] left-[48px] top-[375px] w-[234.868px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[9px] left-0 text-[#f9f9f9] text-[8.4px] top-0 w-[203.607px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[11.106px] left-[17.28px] top-[9.25px] w-[95.672px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[11.106px] left-0 text-[9.255px] text-nowrap text-white top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Conheça-nos Melhor
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[9.872px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[18.74%] right-[18.76%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.40391 6.16992">
            <path d={svgPaths.p290cf700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.23398" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[117.88px] size-[9.872px] top-[9.87px]" data-name="ArrowRight11">
      <Icon />
    </div>
  );
}

function Button1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div
      className="absolute bg-[#6549f6] h-[29.616px] left-0 rounded-[16.304px] top-0 w-[145.032px] cursor-pointer hover:bg-[#5538d4] transition-colors"
      data-name="Button15"
      onClick={() => onNavigate?.("sobre-nos")}
    >
      <Paragraph3 />
      <ArrowRight />
    </div>
  );
}

function Cta({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute h-[29.616px] left-[45px] top-[416px] w-[261.412px]" data-name="Cta2">
      <Button1 onNavigate={onNavigate} />
    </div>
  );
}

function Group1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute contents left-[24px] top-[74px]">
      <div className="absolute h-[537px] left-[24px] top-[74px] w-[327px]" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327 537">
          <path d={svgPaths.p265628b2} fill="var(--fill-0, #D9D9D9)" id="Background" />
        </svg>
      </div>
      <Paragraph />
      <Button onNavigate={onNavigate} />
      <Paragraph2 />
      <Cta onNavigate={onNavigate} />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[0.64px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.04%_1.33%_66.96%_0]" data-name="Underline">
        <div className="absolute inset-[-0.26px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.9189 0.522677">
            <path d="M0 0.261339H57.9189" id="Underline" opacity="0.7" stroke="var(--stroke-0, #4C4C4C)" strokeWidth="0.522677" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.64px] items-start left-0 top-[-0.64px] w-[58.698px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[12.881px] left-0 top-[6.44px] w-[58.698px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[12.883px] left-0 text-[#222] text-[9.018px] text-nowrap top-[-0.49px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        01.
      </p>
    </div>
  );
}

function No1() {
  return (
    <div className="absolute h-[19.317px] left-[203px] top-[592px] w-[58.698px]" data-name="No3">
      <Container />
      <Paragraph4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[0.64px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.04%_0_66.96%_0]" data-name="Underline">
        <div className="absolute inset-[-0.26px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0558 0.510313">
            <path d="M0 0.255156H13.0558" id="Underline" opacity="0.7" stroke="var(--stroke-0, #C6C6C6)" strokeWidth="0.510313" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.64px] items-start left-0 top-[-0.64px] w-[13.056px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[12.881px] left-0 top-[6.44px] w-[13.056px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[12.883px] left-0 text-[#222] text-[9.018px] text-nowrap top-[-0.49px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        02.
      </p>
    </div>
  );
}

function No() {
  return (
    <div className="absolute h-[19.317px] left-[277.15px] top-[592px] w-[13.056px]" data-name="No1">
      <Container1 />
      <Paragraph5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[0.64px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.04%_0_66.96%_0]" data-name="Underline">
        <div className="absolute inset-[-0.26px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2768 0.514611">
            <path d="M0 0.257306H13.2768" id="Underline" opacity="0.7" stroke="var(--stroke-0, #C6C6C6)" strokeWidth="0.514611" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.64px] items-start left-0 top-[-0.64px] w-[13.277px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[12.881px] left-0 top-[6.44px] w-[13.277px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[12.883px] left-0 text-[#222] text-[9.018px] text-nowrap top-[-0.49px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        03.
      </p>
    </div>
  );
}

function No2() {
  return (
    <div className="absolute h-[19.317px] left-[305.66px] top-[592px] w-[13.277px]" data-name="No22">
      <Container2 />
      <Paragraph6 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[203px] top-[592px]">
      <No1 />
      <No />
      <No2 />
    </div>
  );
}

function Group2({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute contents left-[24px] top-[74px]">
      <Group1 onNavigate={onNavigate} />
      <Group />
    </div>
  );
}

export default function Frame({ onNavigate }: FrameProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative size-full">
      <MobileNavbar onNavigate={onNavigate} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Group2 onNavigate={onNavigate} />
    </div>
  );
}