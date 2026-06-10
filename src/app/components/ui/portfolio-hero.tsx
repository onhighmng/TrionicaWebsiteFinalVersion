import { ArrowUpRight } from "lucide-react";
import maputoImg from "../../../imports/maputo.jpg";
import mozambiqueFlag from "figma:asset/13696806984cbb3d9f84c25ed209563ac4ea660b.png";

interface PortfolioHeroProps {
  onNavigate?: (page: string) => void;
}

export default function PortfolioHero({ onNavigate }: PortfolioHeroProps) {
  return (
    <section className="relative flex h-screen w-full items-center justify-center" data-navbar-section="dark">
      {/* Grid lines overlay */}
      <div className="absolute inset-0 z-10 size-full pointer-events-none">
        <div className="grid w-full grid-cols-12 divide-x divide-white/20 h-full">
          <div className="col-span-1 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-4 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-1 h-screen" />
        </div>
      </div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${maputoImg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl px-6 text-center text-white">
        <h1 className="font-['Manrope'] font-medium text-white text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight flex items-center justify-center gap-3 md:gap-4 flex-wrap">
          <span>Construímos o Futuro</span>
          <img
            src={mozambiqueFlag}
            alt="Mozambique Flag"
            className="inline-block h-8 md:h-10 lg:h-12 w-auto rounded-lg shadow-md"
          />
          <span className="text-[#e1fcad] relative inline-block">
            Nacional
            <span className="absolute left-0 right-0 h-[2px] bg-[#e1fcad] transform -rotate-1 origin-left" style={{ top: 'calc(100% + 4px)' }} />
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-center font-light text-lg text-white/80 md:text-xl">
          Um portfólio de tecnologia de vanguarda ao serviço das instituições que lideram Moçambique.
        </p>

        <button
          onClick={() => onNavigate?.('contacte-nos')}
          className="group mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent"
        >
          <span className="rounded-full bg-[#e1fcad] px-6 py-3 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
            Contactar-nos
          </span>
          <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#e1fcad] p-5 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
          </div>
        </button>
      </div>
    </section>
  );
}
