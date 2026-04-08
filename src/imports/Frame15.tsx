import svgPaths from "./svg-qmyqfzvoya";
import { useRef } from "react";
import { TimelineContent } from "../components/ui/timeline-animation";
import acusticaImg from "figma:asset/abdc8e6a38c1d529f460b672ddeac064f7a84c06.png";
import monitorizacaoImg from "figma:asset/67e71a4a13a23c4c93d05f897f6c2c6b9b8c8ae4.png";
import oceanografiaImg from "figma:asset/f7f4eee559adeada02a567b17879154cb9f44ed4.png";
import saneamentoImg from "figma:asset/b6d01fa62fc7ce659df3be03127709bfd17c9c10.png";

const sectionData = [
  {
    id: "meteorologia",
    category: "METEOROLOGIA",
    title: "Estações meteorológicas",
    imgSrc: "https://images.unsplash.com/photo-1615603244607-6d8afd9b9507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwc3RhdGlvbiUyMG1ldGVvcm9sb2d5fGVufDF8fHx8MTc2ODMxMzE3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "qualidade-ar",
    category: "QUALIDADE DO AR",
    title: "Equipamentos de análise da qualidade do ar",
    imgSrc: "https://images.unsplash.com/photo-1765153155226-f617921051b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBxdWFsaXR5JTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NjgzMTMxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "acustica",
    category: "ACÚSTICA",
    title: "Sonómetros e vibrómetros",
    imgSrc: acusticaImg,
  },
  {
    id: "monitorizacao",
    category: "MONITORIZAÇÃO",
    title: "Data loggers",
    imgSrc: monitorizacaoImg,
  },
  {
    id: "oceanografia",
    category: "OCEANOGRAFIA",
    title: "Sondas oceanográficas",
    imgSrc: oceanografiaImg,
  },
  {
    id: "saneamento",
    category: "SANEAMENTO",
    title: "Sistemas de tratamento — desinfeção, dessalinização, ETARs",
    imgSrc: saneamentoImg,
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
  return <Section />;
}