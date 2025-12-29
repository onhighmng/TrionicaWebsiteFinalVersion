import React from 'react';
import svgPaths from '../../imports/svg-erx77pzs5v';
import { AnimatedUnderlineText } from '../ui/animated-underline-text';
import saudeImage from "figma:asset/c3e462d779bb19de3da9b06340a2d1b0429475ea.png";
import aguasImage from "figma:asset/9a555059eca3a0e95b663c4837fc54ef7a26e76a.png";
import ambienteImage from "figma:asset/d4a1c3843c3ab947a2fce919c2f975b36328a96f.png";
import minasImage from "figma:asset/f63e17a409d48cc3dad0703b061331bc8219a04e.png";
import educacaoImage from "figma:asset/1ed30bca1c7dacfeb480999ad8e008cd86f66392.png";

export function LatestPostSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const products = [
    {
      id: "ensino",
      title: "Educação",
      summary: "Equipamentos didáticos, laboratoriais e de investigação para escolas, centros de formação, laboratórios e universidades.",
      url: "ensino",
      image: educacaoImage
    },
    {
      id: "saude",
      title: "Saúde",
      summary: "Equipamentos hospitalares, laboratoriais e de investigação para hospitais, unidades de saúde e laboratórios.",
      url: "saude",
      image: saudeImage
    },
    {
      id: "aguas",
      title: "Águas",
      summary: "Soluões para tratamento, análise e monitorização da qualidade da água, incluindo equipamentos laboratoriais especializados.",
      url: "aguas",
      image: aguasImage
    },
    {
      id: "ambiente",
      title: "Ambiente",
      summary: "Sistemas de monitorização da água, solo e ar, unidades de tratamento de águas e águas residuais, instrumentação e sistemas de aquisição e registo de dados.",
      url: "ambiente",
      image: ambienteImage
    },
    {
      id: "minas",
      title: "Minas",
      summary: "Equipamentos e soluções para exploração mineira, análise de minerais, monitorização ambiental em minas e segurança no setor mineiro.",
      url: "minas",
      image: minasImage
    }
  ];

  const [currentProductIndex, setCurrentProductIndex] = React.useState(0);

  function IconSolidChevronLeft() {
    return (
      <div className="relative size-[24px]" data-name="Icon / solid / chevron-left">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Icon / solid / chevron-left">
            <path clipRule="evenodd" d={svgPaths.pb524780} fill="var(--fill-0, #22282B)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    );
  }

  function Frame() {
    return (
      <button 
        className="relative rounded-[70px] w-[56px] hover:bg-gray-100 transition-colors"
        onClick={() => setCurrentProductIndex((prev) => (prev > 0 ? prev - 1 : products.length - 1))}
      >
        <div aria-hidden="true" className="absolute border border-[#22282b] border-solid inset-0 pointer-events-none rounded-[70px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative w-full">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <IconSolidChevronLeft />
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }

  function IconSolidChevronRight() {
    return (
      <div className="relative shrink-0 size-[24px]" data-name="Icon / solid / chevron-right">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Icon / solid / chevron-right">
            <path clipRule="evenodd" d={svgPaths.p32015300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    );
  }

  function Frame1() {
    return (
      <button 
        className="bg-[#22282b] relative rounded-[70px] shrink-0 w-[56px] hover:bg-[#333] transition-colors"
        onClick={() => setCurrentProductIndex((prev) => (prev < products.length - 1 ? prev + 1 : 0))}
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative w-full">
            <IconSolidChevronRight />
          </div>
        </div>
      </button>
    );
  }

  function Frame6() {
    return (
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <Frame />
          </div>
        </div>
        <Frame1 />
      </div>
    );
  }

  function IconButton() {
    return (
      <button 
        className="relative shrink-0 size-[52px] hover:opacity-80 transition-opacity"
        onClick={() => onNavigate(products[currentProductIndex].url)}
        data-name="Icon Button"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
          <g id="Icon Button">
            <circle cx="26" cy="26" fill="var(--fill-0, #22282B)" id="Ellipse 4274" r="26" />
            <g id="Icon / solid / plus">
              <path clipRule="evenodd" d={svgPaths.p1f065100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 182 (Stroke)" />
            </g>
          </g>
        </svg>
      </button>
    );
  }

  const currentProduct = products[currentProductIndex];
  
  // Get cards in carousel order: prev, current, next1, next2
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 2; i++) {
      const index = (currentProductIndex + i + products.length) % products.length;
      cards.push({ product: products[index], position: i });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="relative bg-[#3b5998] py-8 md:py-12 lg:py-16 overflow-hidden" data-navbar-section="dark">
      {/* Top Section - Constrained */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-12 mb-6 lg:mb-12">
          {/* Left: Year and Title */}
          <div className="flex flex-col gap-4 lg:gap-12 w-full lg:w-auto">
            <p className="capitalize font-['Manrope'] font-medium leading-[1.2] text-white text-base md:text-lg lg:text-[18px] tracking-[-1px]">
              2026
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start w-full">
                <div className="font-['Manrope'] font-bold leading-[1.1] text-white text-xl md:text-2xl lg:text-[28px] flex items-center gap-3">
                  <span className="inline-block animate-spin text-[#FF6347] text-2xl leading-none">✱</span>
                  <p className="mb-0 font-['Manrope']">NOSSOS PRODUTOS</p>
                </div>
              </div>
              {/* Navigation Buttons */}
              <div className="hidden lg:block">
                <Frame6 />
              </div>
            </div>
          </div>

          {/* Right: Current Product Description */}
          <div className="flex flex-col items-start w-full lg:w-[500px]">
            <p className="font-['Lato'] font-medium leading-[1.6] text-white text-sm md:text-lg lg:text-[24px] tracking-[-1px] transition-all duration-500 font-normal text-center lg:text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] [text-shadow:_0_0_30px_rgb(255_255_255_/_20%)] [word-spacing:0.3em]">
              {currentProduct.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section - Full Width Breakout */}
      <div className="relative w-full">
        {/* Mobile View: Single Card */}
        <div className="block lg:hidden max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
          <div className="flex flex-col gap-6 max-w-md mx-auto">
            <div className="flex items-start justify-between w-full">
              <p className="capitalize font-['Inter'] font-medium leading-none text-white text-2xl md:text-3xl tracking-[-1px]">
                {currentProduct.title}
              </p>
              <IconButton />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div 
                className="h-[350px] md:h-[400px] rounded-[20px] w-full bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                style={{ backgroundImage: `url(${currentProduct.image})` }}
                onClick={() => onNavigate(currentProduct.url)}
              />
              <div className="capitalize flex font-['Manrope'] font-semibold items-center justify-between leading-[1.2] text-white text-lg w-full">
                <p>{String(currentProductIndex + 1).padStart(2, '0')}</p>
                <AnimatedUnderlineText 
                  text="Ver mais" 
                  onClick={() => onNavigate(currentProduct.url)}
                  textClassName="font-['Manrope'] font-extrabold text-white text-2xl capitalize drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  underlineClassName="text-[#FF6347]"
                  underlineDuration={2} className="text-white font-extrabold"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Frame6 />
            </div>
          </div>
        </div>

        {/* Desktop View: Carousel - Full Width */}
        <div className="hidden lg:block relative h-[420px] w-full overflow-visible">
          {/* Card 1 (Previous Product) - Left */}
          <div className="absolute left-0 top-0 w-[25vw] flex flex-col gap-2 transition-all duration-500">
            <div 
              className="h-[300px] rounded-[20px] w-full bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundImage: `url(${visibleCards[0].product.image})` }}
              onClick={() => onNavigate(visibleCards[0].product.url)}
            />
            <div className="capitalize flex font-['Manrope'] font-semibold items-center justify-between leading-[1.2] text-[#22282b] text-[16px] w-full">
              <p>{String(products.findIndex(p => p.id === visibleCards[0].product.id) + 1).padStart(2, '0')}</p>
              <p>{visibleCards[0].product.title}</p>
            </div>
          </div>

          {/* Card 2 (Current Product) - Center-Left with CTA */}
          <div className="absolute left-[26vw] top-0 w-[25vw] flex flex-col gap-[40px] items-end transition-all duration-500">
            <div className="flex items-start justify-between w-full">
              <p className="capitalize font-['Inter'] font-medium leading-none text-white text-[24px] tracking-[-1px] w-[180px]">
                {currentProduct.title}
              </p>
              <IconButton />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div 
                className="h-[300px] rounded-[20px] w-full bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
                style={{ backgroundImage: `url(${currentProduct.image})` }}
                onClick={() => onNavigate(currentProduct.url)}
              />
              <div className="capitalize flex font-['Manrope'] font-semibold items-center justify-between leading-[1.2] text-white text-[16px] w-full">
                <p>{String(currentProductIndex + 1).padStart(2, '0')}</p>
                <AnimatedUnderlineText 
                  text="Ver mais" 
                  onClick={() => onNavigate(currentProduct.url)}
                  textClassName="font-['Manrope'] font-extrabold text-white text-xl capitalize drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  underlineClassName="text-[#60a5fa]"
                  underlineDuration={2} className="text-white font-extrabold"
                />
              </div>
            </div>
          </div>

          {/* Card 3 (Next Product) - Center-Right */}
          <div className="absolute left-[52vw] top-0 w-[25vw] flex flex-col gap-2 transition-all duration-500">
            <div 
              className="h-[300px] rounded-[20px] w-full bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundImage: `url(${visibleCards[2].product.image})` }}
              onClick={() => onNavigate(visibleCards[2].product.url)}
            />
            <div className="capitalize flex font-['Manrope'] font-semibold items-center justify-between leading-[1.2] text-white text-[16px] w-full">
              <p>{String(products.findIndex(p => p.id === visibleCards[2].product.id) + 1).padStart(2, '0')}</p>
              <p>{visibleCards[2].product.title}</p>
            </div>
          </div>

          {/* Card 4 (Next+1 Product) - Right, offset down */}
          <div className="absolute left-[78vw] top-[40px] w-[25vw] flex flex-col gap-2 transition-all duration-500">
            <div 
              className="h-[300px] rounded-[20px] w-full bg-cover bg-center cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundImage: `url(${visibleCards[3].product.image})` }}
              onClick={() => onNavigate(visibleCards[3].product.url)}
            />
            <div className="capitalize flex font-['Manrope'] font-semibold items-center justify-between leading-[1.2] text-white text-[16px] w-full">
              <p>{String(products.findIndex(p => p.id === visibleCards[3].product.id) + 1).padStart(2, '0')}</p>
              <p>{visibleCards[3].product.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}