import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface AeroHero3Props {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  imageUrl?: string;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop";

export function AeroHero3({
  title = "Soluções Tecnológicas para o Futuro de Moçambique",
  subtitle = "Equipamentos, formação técnica e assistência especializada para os sectores de Ensino & Investigação, Saúde, Águas, Ambiente e Minas.",
  ctaLabel = "Explorar Soluções",
  onCtaClick,
  imageUrl = DEFAULT_IMAGE,
}: AeroHero3Props) {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      data-navbar-section="dark"
    >
      {/* Vertical grid overlay */}
      <div className="absolute inset-0 z-10 size-full">
        <div className="grid w-full grid-cols-12 divide-x divide-white/20">
          <div className="col-span-1 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-4 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-1 h-screen" />
        </div>
      </div>

      {/* Background image + darkening layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl px-6 text-center text-white">
        <h1 className="mb-6 text-center font-['Manrope'] text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mb-8 max-w-2xl whitespace-pre-line text-center font-['Manrope'] text-lg font-light text-white/90 md:text-xl">
          {subtitle}
        </p>

        <Button
          onClick={onCtaClick}
          className="group mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 font-normal shadow-none hover:bg-transparent"
        >
          <span className="rounded-full bg-[#e1fcad] px-6 py-3 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
            {ctaLabel}
          </span>
          <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#e1fcad] p-5 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
          </div>
        </Button>
      </div>
    </section>
  );
}

export default AeroHero3;
