import svgPaths from "./svg-widzfferv8";
import { useRef } from "react";
import { TimelineContent } from "../components/ui/timeline-animation";
import gestaoImg from "figma:asset/379f23ca7fe3ef0a10fab68e536b1a576469d025.png";
import medicaoImg from "figma:asset/70e3d9bcd2b8dff4d99a20ee29d4839c4c7b2bb4.png";
import qualidadeImg from "figma:asset/28c519d614dfb6cca2a0d6fb6bd83c86758f6485.png";
import controloRemotoImg from "figma:asset/f0b7d16ecef2dd281eb0d9484338e3e223ca5a7e.png";
import hidrologiaImg from "figma:asset/64301c13e18e12a0476c74f4520215268e1703a2.png";
import hidrometriaImg from "figma:asset/7471fbafe1e6b51023d1be516117d57974d1faa1.png";

const sectionData = [
  {
    id: "gestao",
    category: "GESTÃO",
    title: "Caudalímetros (controlo de perdas)",
    imgSrc: gestaoImg,
  },
  {
    id: "medicao",
    category: "MEDIÇÃO",
    title: "Contadores mecânicos, eletrónicos e pré-pagos",
    imgSrc: medicaoImg,
  },
  {
    id: "qualidade",
    category: "QUALIDADE",
    title: "Kits de análise de água",
    imgSrc: qualidadeImg,
  },
  {
    id: "controlo-remoto",
    category: "CONTROLO REMOTO",
    title: "Data loggers e telemetria",
    imgSrc: controloRemotoImg,
  },
  {
    id: "hidrologia",
    category: "HIDROLOGIA",
    title: "Sistemas de monitorizaç��o de recursos hídricos",
    imgSrc: hidrologiaImg,
  },
  {
    id: "tratamento",
    category: "TRATAMENTO",
    title: "Sistemas de tratamento — desinfeção, dessalinização, ETARs",
    imgSrc: "https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50fGVufDF8fHx8MTc2ODI4NzYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "hidrometria",
    category: "HIDROMETRIA",
    title: "Instrumentação e medidores de nível e precipitação",
    imgSrc: hidrometriaImg,
  },
];

function Section() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div className="relative w-full -mt-4 pb-8 px-4 md:px-8" ref={timelineRef} data-name="Section 03">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionData.map((item, index) => (
            <TimelineContent
              as="div"
              animationNum={index}
              timelineRef={timelineRef}
              customVariants={revealVariants}
              key={item.id}
              className="relative group no-underline bg-[#deeae2] p-4 rounded-lg border border-[#c5d7cc] hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="rounded-lg w-full object-cover aspect-video mb-3"
              />
              <div className="flex gap-2 items-center mb-2">
                <div className="relative shrink-0 size-[6px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill="#224433" r="3" />
                  </svg>
                </div>
                <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#1c1716] text-xs uppercase tracking-wide">
                  {item.category}
                </p>
              </div>
              <h3 className="font-['Manrope:Medium',sans-serif] font-medium text-[#1c1716] text-lg leading-tight">
                {item.title}
              </h3>
            </TimelineContent>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Section />
    </div>
  );
}