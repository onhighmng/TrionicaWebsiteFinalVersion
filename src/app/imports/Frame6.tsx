import svgPaths from "./svg-zq3hsj0qm5";
import { useRef } from "react";
import { TimelineContent } from "../components/ui/timeline-animation";
import educacaoImg from "../../imports/portfolio-edm-1.jpg";
import cienciaImg from "../../imports/ensino-lab-ciencias.jpg";
import energiaImg from "../../imports/bedrunka-oficinas.jpg";
import tecnologiaImg from "../../imports/valuesteek-classroom.jpg";
import mobiliarioImg from "../../imports/fly-escolar-desk-single.jpg";
import diversosImg from "../../imports/card-desporto.jpg";

const sectionData = [
  {
    id: "educacao",
    category: "EDUCAÇÃO-ENGENHARIAS",
    title: "Equipamentos didácticos e científicos",
    imgSrc: educacaoImg,
  },
  {
    id: "ciencia",
    category: "EDUCAÇÃO-CIÊNCIAS",
    title: "Equipamentos didácticos e científicos",
    imgSrc: cienciaImg,
  },
  {
    id: "energia",
    category: "OFICINAS TECNOLÓGICAS",
    title: "Metalomecânica, soldadura, carpintaria",
    imgSrc: energiaImg,
  },
  {
    id: "tecnologia",
    category: "TECNOLOGIA",
    title: "Simuladores e quadros interativos",
    imgSrc: tecnologiaImg,
  },
  {
    id: "mobiliario",
    category: "MOBILIÁRIO",
    title: "Mobiliário escolar, universitário e laboratorial",
    imgSrc: mobiliarioImg,
  },
  {
    id: "diversos",
    category: "DIVERSOS",
    title: "Soluções para Desporto indoor outdoor",
    imgSrc: diversosImg,
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
    <div className="relative w-full -mt-4 pb-8 px-8" ref={timelineRef} data-name="Section 03">
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