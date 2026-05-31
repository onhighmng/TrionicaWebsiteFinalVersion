import svgPaths from "./svg-4curm7xai9";
import imgImage from "figma:asset/d93cf643f81c1830c9529a1d38a8671cd0110ae2.png";
import imgMicroscope from "../../imports/trionica_new_banner_for_hero.png";
import { imgRectangle } from "./svg-mmlvz";
import bciLogo from "figma:asset/82cd405a60a5f350e706ed8d47affe6341ac868f.png";
import bancoMocambiqueLogo from "figma:asset/01e953708179a504fc7c0147ad9b0d1eba4f4677.png";
import hcbLogo from "figma:asset/63f97fc06c7d3667f8975059283b6bab246ebc3e.png";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ProductItem } from "../components/ui/navbar-menu";
import imgSaude from "figma:asset/5387dac094734b07fbea93a0716344069eaf78fc.png";
import imgAguas from "figma:asset/e5338e4f7a6437afa17dbc009c762e48754173a4.png";
import imgAmbiente from "figma:asset/c1b1db6c514cff25caa0cecbe74fea6016b4cc73.png";
import imgMinas from "figma:asset/f7f09a1149bfa2062668c63ecb8f8d1f941ca029.png";
import MobileHero from "./Frame118-2670-6366";

// Counter animation component
function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number; to: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    } else {
      count.set(from);
    }
  }, [isInView, count, from, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest + suffix;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
}

function Group9() {
  return (
    <div className="absolute h-[1050px] left-[140px] top-0 w-[1160px]">
      <div className="absolute inset-[0_-0.09%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1050">
          <g id="Group 1171275421">
            <line id="Line 636" stroke="var(--stroke-0, #CBCBCB)" strokeDasharray="12 12" x1="1160.5" x2="1160.5" y1="2.18557e-08" y2="1050" />
            <line id="Line 637" stroke="var(--stroke-0, #CBCBCB)" strokeDasharray="12 12" x1="752.5" x2="752.5" y1="2.18557e-08" y2="1050" />
            <line id="Line 638" stroke="var(--stroke-0, #CBCBCB)" strokeDasharray="12 12" x1="407.5" x2="407.5" y1="2.18557e-08" y2="1050" />
            <line id="Line 640" stroke="var(--stroke-0, #CBCBCB)" strokeDasharray="12 12" x1="197.5" x2="197.5" y1="2.18557e-08" y2="1050" />
            <line id="Line 641" stroke="var(--stroke-0, #CBCBCB)" strokeDasharray="12 12" x1="937.5" x2="937.5" y1="2.18557e-08" y2="1050" />
            <line id="Line 639" stroke="var(--stroke-0, #CBCBCB)" strokeDasharray="12 12" x1="0.500046" x2="0.5" y1="2.18557e-08" y2="1050" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSectorClick = (sectorId: string) => {
    setIsDropdownOpen(false);
    onNavigate?.(sectorId);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Home clicked!', onNavigate);
    if (onNavigate) {
      onNavigate('home');
    }
  };

  const handleSobreNosClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Sobre Nos clicked!', onNavigate);
    if (onNavigate) {
      onNavigate('sobre-nos');
    }
  };

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Portfolio clicked!', onNavigate);
    if (onNavigate) {
      onNavigate('portfolio');
    }
  };

  return (
    <>
      {/* Desktop center navbar - original position */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex absolute content-stretch gap-[32px] items-center left-[calc(50%-0.4px)] top-[27px] translate-x-[-50%] z-[100] pointer-events-auto"
        style={{ pointerEvents: 'auto' }}
      >
        <button 
          onClick={handleHomeClick}
          onMouseDown={handleHomeClick}
          className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20.04px] relative shrink-0 text-[#4278ec] text-[18px] text-nowrap tracking-[-0.18px] cursor-pointer hover:opacity-80 transition-opacity pointer-events-auto z-[101]"
          style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}
          type="button"
        >
          Início
        </button>
        <div className="relative shrink-0 size-[7.4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
            <circle cx="3.7" cy="3.7" fill="var(--fill-0, #050505)" id="Ellipse 2839" r="3.7" />
          </svg>
        </div>
        <button 
          onClick={handleSobreNosClick}
          onMouseDown={handleSobreNosClick}
          className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#667085] text-[18px] text-nowrap cursor-pointer hover:text-[#4278ec] transition-colors pointer-events-auto z-[101]"
          style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}
          type="button"
        >
          <p className="leading-[1.2]">Sobre Nós</p>
        </button>
        <div className="relative shrink-0 size-[7.4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
            <circle cx="3.7" cy="3.7" fill="var(--fill-0, #050505)" id="Ellipse 2839" r="3.7" />
          </svg>
        </div>
        <div 
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button 
            className="capitalize flex items-center gap-1 font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#667085] text-[18px] text-nowrap cursor-pointer hover:text-[#4278ec] transition-colors"
          >
            <span className="leading-[1.2]">Soluções</span>
            <ChevronDown className="w-[14px] h-[14px]" strokeWidth={2} />
          </button>
          
          {/* Dropdown menu */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 10 }}
                transition={{
                  type: "spring",
                  mass: 0.5,
                  damping: 11.5,
                  stiffness: 100,
                }}
                className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 z-[10000]"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-black/[0.1]">
                  <div className="w-max h-full p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'ensino', label: 'Ensino', description: 'Equipamentos e soluções educacionais para laboratórios de ensino', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop' },
                        { id: 'saude', label: 'Saúde', description: 'Equipamentos hospitalares e soluções para diagnóstico médico', image: imgSaude },
                        { id: 'aguas', label: 'Águas', description: 'Equipamento de medição, análise e tratamento de água para consumo e residuais', image: imgAguas },
                        { id: 'ambiente', label: 'Ambiente', description: 'Soluções sustentáveis para monitorização ambiental', image: imgAmbiente },
                        { id: 'minas', label: 'Minas', description: 'Equipamentos para prospeção, exploração mineira e análise geológica', image: imgMinas }
                      ].map((item) => (
                        <ProductItem
                          key={item.id}
                          title={item.label}
                          description={item.description}
                          onClick={() => handleSectorClick(item.id)}
                          src={item.image}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative shrink-0 size-[7.4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
            <circle cx="3.7" cy="3.7" fill="var(--fill-0, #050505)" id="Ellipse 2839" r="3.7" />
          </svg>
        </div>
        <button 
          onClick={handlePortfolioClick}
          onMouseDown={handlePortfolioClick}
          className="capitalize flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#667085] text-[18px] text-nowrap cursor-pointer hover:text-[#4278ec] transition-colors pointer-events-auto z-[101]"
          style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}
          type="button"
        >
          <p className="leading-[1.2]">Portfolio</p>
        </button>
      </motion.div>
    </>
  );
}

function ButtonBase() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[71.141px] shrink-0" data-name="Button.base">
      <div aria-hidden="true" className="absolute border-[#050505] border-[1.002px] border-solid inset-0 pointer-events-none rounded-[71.141px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10.02px] items-center justify-center px-[20.04px] py-[12.024px] relative size-full">
          <p className="basis-0 font-['Sora:SemiBold',sans-serif] font-semibold grow leading-[26.052px] min-h-px min-w-px relative shrink-0 text-[#050505] text-[13px] text-center">Contactar-nos</p>
        </div>
      </div>
    </div>
  );
}

function Button({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <button 
      onClick={() => onNavigate?.('contacte-nos')}
      className="content-stretch flex h-[40px] items-start relative rounded-[52.103px] shrink-0 w-[110px] hover:opacity-80 transition-opacity cursor-pointer" 
      data-name="Button"
    >
      <ButtonBase />
    </button>
  );
}

function ButtonBase1() {
  return (
    <div className="basis-0 bg-[#4278ec] grow h-full min-h-px min-w-px relative rounded-[71.141px] shrink-0" data-name="Button.base">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10.02px] items-center justify-center px-[20.04px] py-[12.024px] relative size-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold grow leading-[26.052px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white">Explorar</p>
        </div>
      </div>
    </div>
  );
}

function Button1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <button
      onClick={() => onNavigate?.('portfolio')}
      className="content-stretch flex h-[40px] items-start relative rounded-[52px] shrink-0 w-[110px] hover:opacity-90 transition-opacity cursor-pointer" 
      data-name="Button"
    >
      <ButtonBase1 />
    </button>
  );
}

function Frame5({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="hidden xl:flex absolute content-stretch gap-[16px] items-center left-[1132px] top-[25px]"
    >
      <Button onNavigate={onNavigate} />
      <div className="flex h-[13.026px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[13.026px]">
            <div className="absolute inset-[-0.5px_-3.85%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0278 1.00199">
                <path d="M0.500994 0.500994H13.5268" id="Line 7" stroke="var(--stroke-0, #050505)" strokeLinecap="round" strokeWidth="1.00199" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Button1 onNavigate={onNavigate} />
    </motion.div>
  );
}

function Image() {
  return (
    <div className="absolute h-[53.2px] left-0 top-0 w-[51.3px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[34.2px] items-start left-[-637.83px] top-[1.9px] w-[107.157px]" data-name="Paragraph">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[28px] text-center text-nowrap text-white">Spark AI</p>
    </div>
  );
}

function ImageTrionica() {
  return (
    <div className="h-[53.2px] overflow-clip relative shrink-0 w-[51.3px]" data-name="ImageTrionica2">
      <Image />
      <Paragraph />
    </div>
  );
}

function Frame3() {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="hidden xl:flex absolute content-stretch gap-[12px] items-center left-[56px] top-[24px]"
    >
      <ImageTrionica />
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#050505] text-[24px] text-center text-nowrap tracking-[-0.48px]">Triónica</p>
    </motion.div>
  );
}

function Icon() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p18e73b00} id="Vector" stroke="var(--stroke-0, #4278EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow() {
  return (
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-[80px] shrink-0" data-name="Arrow">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Button2({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <button 
      onClick={() => onNavigate?.('sobre-nos')}
      className="bg-[#4278ec] hover:bg-[#3562c9] transition-colors cursor-pointer content-stretch flex gap-[9px] items-center pl-[6px] xl:pl-[6px] pl-[16px] pr-[32px] xl:pr-[32px] pr-[56px] py-[6px] xl:py-[6px] py-[20px] relative rounded-[80px] w-[255px] xl:w-[255px] w-full" 
      data-name="Button"
    >
      <Arrow />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30px] relative text-[17px] xl:text-[17px] text-[30px] text-nowrap text-white">Conheça as nossas soluções</p>
        </div>
      </div>
    </button>
  );
}

function Frame6({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="hidden xl:flex absolute content-stretch flex-col gap-[31px] items-start left-[94px] top-[224px] w-[265px]">
      <motion.p 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[#050505] text-[19px] w-[min-content]"
      >
        Equipamentos Laboratoriais e Oficinais, Assistência Técnica para Formação nas Áreas de Ensino & Investigação, Saúde, Água, Ambiente e Minas
      </motion.p>
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex items-center justify-center relative shrink-0"
      >
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Button2 onNavigate={onNavigate} />
        </div>
      </motion.div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#ffb844] content-stretch flex h-[32px] items-center justify-center px-[18px] py-[6px] relative rounded-[70px] w-[95px]">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#050505] text-[16px] text-center text-nowrap tracking-[-0.32px]">OnHigh</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[100px] left-[121px] top-[1413px] w-[1271px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1271 100">
        <g id="Frame 6">
          <g id="Vector">
            <path d={svgPaths.p27457700} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p35db3e40} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p3f60a700} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2ca10400} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p18337200} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.pc7c2e80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p35eb3400} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2dd22200} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2c423e00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p3004b00} fill="var(--fill-0, #616161)" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p27f02180} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p4b5be00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p31573a00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p39dea300} fill="var(--fill-0, #616161)" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p3e141000} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p5f6940} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p3fd56b00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p1cfdfc00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p12cc7a80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p1ec8e100} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p253f1300} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p27b279f0} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p3a134e80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p31149c00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.pa788380} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p32e6000} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p19222600} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2a273900} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p200242c0} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.pbe13f80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p3d6dd200} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p22f97000} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p117d2080} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p73adbe0} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2f233000} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2f6a1380} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p310cc700} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p1bb78c00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p1897e680} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p10e0b0b0} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p23af2a00} fill="var(--fill-0, #616161)" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p1751f380} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p1eb19d80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p32ea3970} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p3f287bc0} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p19370700} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p32212180} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p1b660c00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p275dd400} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p11ff5e00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p33faa400} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p369d6c80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p1575c500} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p18affe80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2acaab80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2ff65d80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p3e1385c0} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p782200} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.pff0a800} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p142fc80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2fd3770} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.pa1bee00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p1d863860} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2ddc1980} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2b94d00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p29d39f00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p389f1b00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.pe47e780} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p1ca473c0} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p26329070} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.pdae7e80} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p35b0f000} fill="var(--fill-0, #616161)" />
          </g>
          <g id="Vector_5">
            <path d={svgPaths.p2e438c00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p29ace780} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.pd874d00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p22f3b100} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p10bb8c00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p13259280} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p17db6380} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2cf54700} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p3046e400} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p9f5fe00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p3669aa00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p12fb6800} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p2b8f5a00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p1ca29b8} fill="var(--fill-0, #616161)" />
            <path clipRule="evenodd" d={svgPaths.p1c259600} fill="var(--fill-0, #616161)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3fd1e500} fill="var(--fill-0, #616161)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1a68f200} fill="var(--fill-0, #616161)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p24494300} fill="var(--fill-0, #616161)" fillRule="evenodd" />
            <path d={svgPaths.p289fac00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p37a26700} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p24918aa0} fill="var(--fill-0, #616161)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-0 top-[1362px]">
      <div className="absolute bg-[#171717] h-[203px] left-[calc(50%+36px)] top-[1362px] translate-x-[-50%] w-[1512px]" />
      <Frame1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="hidden xl:block absolute leading-[normal] left-[1197px] not-italic text-nowrap top-[69px]">
      <motion.p 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[#171717] text-[40px] top-0"
      >
        <Counter from={0} to={15} duration={6} suffix="+" />
      </motion.p>
      <motion.p 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute font-['Poppins:Regular',sans-serif] left-[2px] text-[#3f3f3f] text-[16px] top-[47px]"
      >
        Anos de Experiência
      </motion.p>
    </div>
  );
}

function Group2() {
  return (
    <div className="hidden xl:block absolute leading-[normal] left-[1197px] not-italic text-nowrap top-[177px]">
      <motion.p 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="absolute font-['Inter:Medium',sans-serif] font-medium left-0 text-[#171717] text-[40px] top-0"
      >
        <Counter from={0} to={100} duration={6} suffix="%" />
      </motion.p>
      <motion.p 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute font-['Poppins:Regular',sans-serif] left-[2px] text-[#3f3f3f] text-[16px] top-[47px]"
      >
        Cobertura Nacional
      </motion.p>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute left-0 top-[567px] w-full" data-name="Hero">
      {/* Background laboratory equipment image - REMOVED */}
      
      <Group8 />
      <div className="hidden xl:block absolute bg-[#eee]/30 h-[335px] left-0 top-0 w-[1512px] z-[1]" />
      {/* Removed: Instalação Completa text */}
      {/* Removed: Frame component containing Qualidade, Eficiência, Confiança */}
      
      {/* First circle with BCI logo */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="hidden xl:block absolute left-[120px] size-[50px] top-[135px] rounded-full overflow-hidden z-[2]"
      >
        <img 
          src={bciLogo} 
          alt="BCI Logo" 
          className="size-full object-cover"
        />
      </motion.div>
      
      {/* Second circle with Banco de Moçambique 50 years logo */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="hidden xl:block absolute left-[156px] size-[50px] top-[135px] rounded-full overflow-hidden bg-white z-[2]"
      >
        <img 
          src={bancoMocambiqueLogo} 
          alt="Banco de Moçambique 50 Anos" 
          className="size-full object-cover"
        />
      </motion.div>
      
      {/* Third circle with Cahora Bassa logo */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="hidden xl:block absolute left-[192px] size-[50px] top-[135px] rounded-full overflow-hidden bg-white z-[2]"
      >
        <img 
          src={hcbLogo} 
          alt="Cahora Bassa Logo" 
          className="size-full object-cover"
        />
      </motion.div>
      
      <motion.p 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="hidden xl:block absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[255px] not-italic text-[#171717] text-[20px] text-nowrap top-[138px] z-[2]"
      >
        <Counter from={0} to={100} duration={6} suffix="+" />
      </motion.p>
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="hidden xl:block absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[257px] not-italic text-[#3f3f3f] text-[16px] text-nowrap top-[162px] z-[2]"
      >
        <p className="mb-0">{`parceiros de `}</p>
        <p>confiança</p>
      </motion.div>
      <Group1 />
      <Group2 />
      {/* Removed horizontal divider line */}
    </div>
  );
}

function Group5BackgroundImage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, x: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: 50 }}
      transition={{ 
        duration: 1.5, 
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full h-full"
    >
      <div className="w-full h-full overflow-hidden pointer-events-none">
        <img alt="Laboratory Equipment" className="w-full h-full object-cover scale-150" src={imgMicroscope} style={{ objectPosition: '40% center' }} />
      </div>
    </motion.div>
  );
}

function Group5() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div className="absolute contents inset-[-20.2%_-0.19%_0_-0.11%]" data-name="Group">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, scale: 0.8, rotate: -5, x: 100 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: 0, x: 0 } : { opacity: 0, scale: 0.8, rotate: -5, x: 100 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          scale: { duration: 1.2 },
          rotate: { duration: 1.4 },
          x: { duration: 1 }
        }}
        className="absolute inset-[-20.2%_-0.19%_0_-0.11%]" 
        data-name="Rectangle"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Microscope" className="absolute left-0 max-w-none size-full top-0 object-contain" src={imgMicroscope} />
        </div>
      </motion.div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[-20.2%_-0.19%_0_-0.11%]" data-name="Group">
      <Group5 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[-20.2%_-0.19%_0_-0.11%]" data-name="Mask group">
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[-20.2%_-0.19%_0_-0.11%]" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="hidden xl:block absolute h-[850px] left-[380px] top-[300px] w-[750px]">
      <ClipPathGroup />
    </div>
  );
}

function ManufactureLandingPage({ onNavigate, onMenuClose }: { onNavigate?: (page: string) => void; onMenuClose?: () => void }) {
  return (
    <div className="absolute bg-[#f5f5f5] h-[1343px] left-0 overflow-clip top-0 w-[1440px] pointer-events-auto" data-name="[Manufacture] Landing page" style={{ pointerEvents: 'auto' }}>
      {/* Desktop version - shown only on xl screens */}
      <div className="hidden xl:block pointer-events-auto" style={{ pointerEvents: 'auto' }}>
        {/* <Group9 /> - Removed vertical dashed grid lines */}
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.2] left-[94px] text-[#050505] text-[48px] top-[141px] w-[800px]">
          Soluções Tecnológicas Integradas para o Desenvolvimento de Moçambique
        </p>
        <Frame2 onNavigate={onNavigate} />
        <Frame5 onNavigate={onNavigate} />
        <Frame3 />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[105px] leading-[20px] left-[1132px] text-[#050505] text-[16px] top-[206px] w-[277px]"
        >
          <p>Equipamentos Laboratoriais e Oficinais, Assistência Técnica para Formação nas Áreas de Ensino & Investigação, Saúde, Água, Ambiente e Minas</p>
        </motion.div>
        <Frame6 onNavigate={onNavigate} />
        <div className="absolute h-[77.48px] items-center justify-center left-[444px] top-[282.41px] w-[97.522px] flex" style={{ "--transform-inner-width": "54.078125", "--transform-inner-height": "19.1875" } as React.CSSProperties}>
          <div className="flex-none rotate-[328deg]">
            <Frame4 />
          </div>
        </div>
        <Hero />
        <Frame8 />
      </div>

      {/* Mobile version - shows only on mobile */}
      <div className="xl:hidden block w-full min-h-screen scale-[var(--scale)] origin-top-left" style={{ '--scale': 'calc(100vw / 1448.479)' } as React.CSSProperties}>
        <MobileHero onNavigate={onNavigate} onMenuClose={onMenuClose} />
      </div>
    </div>
  );
}

export default function Frame7({ onNavigate, currentPage, onMenuClose }: { onNavigate?: (page: string) => void; currentPage?: string; onMenuClose?: () => void }) {
  return (
    <div className="relative size-full">
      <ManufactureLandingPage onNavigate={onNavigate} onMenuClose={onMenuClose} />
    </div>
  );
}