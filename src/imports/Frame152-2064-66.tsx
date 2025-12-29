import svgPaths from "./svg-07d1frliaj";
import imgVideo from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import imgImage from "figma:asset/5b31ded0dbe4caf6e1c952bf5849601281dcffd1.png";
import { useEffect, useRef, useState } from "react";
import { getImageUrl } from "../utils/images";

function Text() {
  return (
    <div className="flex flex-col gap-5 items-start w-full max-w-[500px]" data-name="Text">
      <p className="font-medium leading-tight text-4xl md:text-5xl text-black">
        <span className="text-[#d40303]">✱</span>
        <span> Nossa História</span>
      </p>
      <div className="text-[#575757] text-sm md:text-base leading-relaxed">
        <p className="mb-0">A nossa equipa técnica é formada por especialistas treinados em Moçambique e no estrangeiro, garantindo:</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          •Instalação completa dos equipamentos
          <br aria-hidden="true" />
        </p>
        <p className="mb-0">
          •Treinamento para uso adequado
          <br aria-hidden="true" />
        </p>
        <p className="mb-0">
          •Assistência pós-venda em todo o país
          <br aria-hidden="true" />
        </p>
        <p className="mb-0">
          •Serviços de manutenção, diagnóstico e calibração
          <br aria-hidden="true" />
        </p>
        <p className="mb-0">Fornecimento de peças de reposição de alta qualidade</p>
        <p className="mb-0">&nbsp;</p>
        <p>Estamos ao lado dos nossos clientes desde o primeiro contacto até ao suporte contínuo, assegurando fiabilidade e segurança operacional.</p>
      </div>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-up-right">
          <path d={svgPaths.p354a80} fill="var(--fill-0, #242424)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#fdfdfd] flex items-center justify-center p-2 rounded-lg shrink-0" data-name="Icon">
      <ArrowUpRight />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0046a2] flex gap-4 items-center justify-center pl-5 pr-2 py-2 rounded-xl shrink-0 hover:bg-[#003580] transition-colors cursor-pointer" data-name="Button">
      <p className="text-[#fdfdfd] text-lg whitespace-nowrap font-normal">
        Contactar
      </p>
      <Icon />
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-4" data-name="play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="play">
          <path d={svgPaths.p1202b300} fill="var(--fill-0, #242424)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#fdfdfd] flex items-center justify-center rounded-full shrink-0 size-14 shadow-lg hover:scale-110 transition-transform cursor-pointer" data-name="Icon">
      <Play />
    </div>
  );
}

function Video() {
  return (
    <div className="relative flex items-center justify-center rounded-2xl overflow-hidden w-full h-[200px] md:w-[200px] md:h-[200px]" data-name="Video">
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-6" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-up-right">
          <path d={svgPaths.p1542ed00} fill="var(--fill-0, #FDFDFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute left-4 md:left-8 bottom-8 md:bottom-12 flex items-center justify-center" data-name="Badge">
      <div className="relative flex items-center justify-center">
        {/* Circular text path */}
        <svg className="absolute size-[140px] md:size-[160px]" viewBox="0 0 160 160">
          <defs>
            <path
              id="circlePath"
              d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              fill="none"
            />
          </defs>
          <text className="text-[11px] md:text-[12px] uppercase tracking-wider fill-black font-medium">
            <textPath href="#circlePath" startOffset="0%">
              15 Anos de Experiência 
            </textPath>
          </text>
        </svg>
        
        {/* Center number and arrow */}
        <div className="relative flex items-center justify-center">
          <div className="text-5xl md:text-6xl font-bold text-black">15</div>
          <div className="absolute bg-[#ee701f] flex items-center justify-center rounded-full size-11 -bottom-4 -right-4 shadow-lg hover:scale-110 transition-transform cursor-pointer">
            <ArrowUpRight1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset counters
            setCount1(0);
            setCount2(0);
            setCount3(0);
            
            // Animate counter 1 (100)
            let start1 = 0;
            const end1 = 100;
            const duration1 = 2000;
            const increment1 = end1 / (duration1 / 16);
            const timer1 = setInterval(() => {
              start1 += increment1;
              if (start1 >= end1) {
                setCount1(end1);
                clearInterval(timer1);
              } else {
                setCount1(Math.floor(start1));
              }
            }, 16);

            // Animate counter 2 (95)
            let start2 = 0;
            const end2 = 95;
            const duration2 = 2000;
            const increment2 = end2 / (duration2 / 16);
            const timer2 = setInterval(() => {
              start2 += increment2;
              if (start2 >= end2) {
                setCount2(end2);
                clearInterval(timer2);
              } else {
                setCount2(Math.floor(start2));
              }
            }, 16);

            // Animate counter 3 (5)
            let start3 = 0;
            const end3 = 5;
            const duration3 = 1500;
            const increment3 = end3 / (duration3 / 16);
            const timer3 = setInterval(() => {
              start3 += increment3;
              if (start3 >= end3) {
                setCount3(end3);
                clearInterval(timer3);
              } else {
                setCount3(Math.floor(start3));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full py-8 md:py-12">
      {/* Top label */}
      <p className="font-medium text-[#575757] text-base md:text-lg uppercase mb-8 md:mb-12">01 / Trionica</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column - Stats */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-8 lg:gap-12 justify-around lg:justify-start" ref={statsRef}>
          {/* Stat 1 */}
          <div className="flex flex-col gap-2">
            <div className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#2d2d2d]">{count1}+</div>
            <div className="text-sm md:text-base text-[#484848]">
              <span className="text-[#a9c22f]">[</span>Clientes Satisfeitos<span className="text-[#a9c22f]\">]</span>
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="flex flex-col gap-2">
            <div className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#2d2d2d]">{count2}%</div>
            <div className="text-sm md:text-base text-[#484848]">
              <span className="text-[#a9c22f]">[</span>Taxa de Sucesso<span className="text-[#a9c22f]\">]</span>
            </div>
          </div>
          
          {/* Stat 3 */}
          <div className="flex flex-col gap-2">
            <div className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#2d2d2d]">{count3}</div>
            <div className="text-sm md:text-base text-[#484848]">
              <span className="text-[#a9c22f]">[</span>Áreas<span className="text-[#a9c22f]\">]</span>
            </div>
          </div>
        </div>
        
        {/* Middle Column - Nossa História Text and Button */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <Text />
          <Button />
        </div>
        
        {/* Right Column - Video */}
        <div className="lg:col-span-4 relative flex flex-col gap-6 items-center lg:items-start">
          {/* Video */}
          <div className="w-full max-w-[400px]">
            <Video />
          </div>
          
          {/* Main Image with Badge */}
          <div className="relative w-full max-w-[400px] mt-4">
            <img 
              alt="Nossa História" 
              className="w-full h-auto rounded-2xl shadow-lg" 
              src={imgImage} 
            />
            <Badge />
          </div>
        </div>
      </div>
    </div>
  );
}