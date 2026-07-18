import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import heroVideo from "../../../assets/video/websitevideofinal.mp4";
import { getImageUrl } from '../../utils/images';
import agaKhanLogo from "../../../imports/aka_maputo.png";
import edmLogo from "../../../imports/edm_logo.jpg";

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
  onMenuClose?: () => void;
}

const partnerLogos = [
  { src: getImageUrl('wp-content/uploads/2019/05/header-logo-anep.png'), alt: "ANEP" },
  { src: agaKhanLogo, alt: "Aga Khan Academy Maputo" },
  { src: edmLogo, alt: "EDM" },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-[760px] w-full items-end overflow-hidden bg-[#0c1d2c] pt-28 text-white md:min-h-screen"
      data-navbar-section="dark"
    >
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 size-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-10 px-6 pb-12 md:px-10 md:pb-16 lg:grid-cols-[minmax(0,1fr)_310px] lg:items-end lg:gap-16 xl:px-0 xl:pb-20">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="w-full font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[clamp(1.75rem,2.5vw,2.8rem)] font-bold leading-[1.1] tracking-[0.01em] text-white">
            Soluções Tecnológicas Integradas<br />para o Desenvolvimento de Moçambique
          </h1>
          <p className="mt-7 max-w-3xl font-['Plus_Jakarta_Sans:Medium',sans-serif] text-base font-medium leading-7 text-white/82 md:text-xl md:leading-8">
            Equipamentos Laboratoriais e Oficinais, Assistência Técnica para Formação nas Áreas de Ensino &amp; Investigação, Saúde, Água, Ambiente e Minas
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-7 lg:items-end"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 lg:justify-end">
            <div className="flex -space-x-3">
              {partnerLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="size-12 overflow-hidden rounded-full border-2 border-[#8fb3ff] bg-white shadow-lg"
                >
                  <img src={logo.src} alt={logo.alt} className="size-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col text-sm leading-tight text-white/75">
              <span className="text-lg font-semibold text-white">100+</span>
              <span>parceiros de confiança</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate?.("contacte-nos")}
            className="group flex items-center rounded-full text-sm font-semibold text-[#07111c]"
          >
            <span className="rounded-full bg-[#8fb3ff] px-6 py-4 transition-colors duration-300 group-hover:bg-white">
              Contactar-nos
            </span>
            <span className="relative -ml-1 flex size-[52px] items-center justify-center overflow-hidden rounded-full bg-[#8fb3ff] transition-colors duration-300 group-hover:bg-white">
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-8 group-hover:-translate-y-8" />
              <ArrowUpRight className="absolute size-5 -translate-x-8 translate-y-8 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
            </span>
          </button>

          <div className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 shadow-lg lg:hidden">
            <span className="relative flex size-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-base font-semibold text-[#0c1313]">
              Este website está em actualização
            </span>
          </div>
        </motion.div>
      </div>

      {/* Desktop-only badge anchored under the navbar's "Contactar-nos" button (top-right) */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 hidden justify-center lg:flex">
        <div className="relative h-[72px] w-full lg:mt-6 lg:w-[1280px]">
          <div className="pointer-events-auto absolute right-2 top-[56px] inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 shadow-lg">
            <span className="relative flex size-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-base font-semibold text-[#0c1313] whitespace-nowrap">
              Este website está em actualização
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
