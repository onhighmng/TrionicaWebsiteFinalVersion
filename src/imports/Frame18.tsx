import svgPaths from "./svg-tpr83w14el";
import { useRef } from "react";
import { TimelineContent } from "../components/ui/timeline-animation";
import geofisicaImg from "figma:asset/22d96067d298ef882fc22218d3933c0a2e78cdf8.png";
import hidrogeologiaImg from "figma:asset/0efd7076281e220a819484eb2c7a3f20c3603558.png";
import investigacaoImg from "figma:asset/f1d44c63f8be8026258727ae030ef9d7dbd6a531.png";
import laboratorioImg from "figma:asset/6fc7899ed451b1cb2a3fb5774f7018fca7568a82.png";
import geotecniaImg from "figma:asset/d23295c0ee300aee4196d8f3a4785614dbe0627b.png";
import analiseQuimicaImg from "figma:asset/51a4cf803fba2bad2fc781ee61de44d582afe8ea.png";
import industriaImg from "figma:asset/63f96ad200db4e092e6bccf050a5128997780201.png";

const sectionData = [
  {
    id: "geofisica",
    category: "GEOFÍSICA",
    title: "Equipamentos de geofísica e estações sísmicas",
    imgSrc: geofisicaImg,
  },
  {
    id: "hidrogeologia",
    category: "HIDROGEOLOGIA",
    title: "Equipamentos de diagrafia para águas subterrâneas",
    imgSrc: hidrogeologiaImg,
  },
  {
    id: "investigacao",
    category: "INVESTIGAÇÃO",
    title: "AAS, Magnetómetros, Gravimetria, Resistividade e Sísmica",
    imgSrc: investigacaoImg,
  },
  {
    id: "laboratorio",
    category: "LABORATÓRIO",
    title: "Microscopia e produção de lâminas",
    imgSrc: laboratorioImg,
  },
  {
    id: "geotecnia",
    category: "GEOTECNIA",
    title: "Equipamentos para análise de rochas e agregados",
    imgSrc: geotecniaImg,
  },
  {
    id: "analise-quimica",
    category: "ANÁLISE QUÍMICA",
    title: "Tecnologia XRF e XRD",
    imgSrc: analiseQuimicaImg,
  },
  {
    id: "industria",
    category: "INDÚSTRIA",
    title: "Sistemas de processamento",
    imgSrc: industriaImg,
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
    <div className="relative w-full -mt-4 pb-0 px-4 md:px-8" ref={timelineRef} data-name="Section 03">
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
  return <Section />;
}