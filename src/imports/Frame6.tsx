import svgPaths from "./svg-zq3hsj0qm5";
import { useRef } from "react";
import { TimelineContent } from "../components/ui/timeline-animation";
import educacaoImg from "figma:asset/bb59333c7280711003ef6bc9fd039d48377a8b03.png";
import cienciaImg from "figma:asset/15f3276547e60dc9170764fec508baeca4bb3aa1.png";
import mobiliarioImg from "figma:asset/54d6d9a54be9ef72a20d39afb37d5cedc2dad21d.png";
import diversosImg from "figma:asset/488dd2582b16219f94f440fad7db7cb7cdcc83d7.png";

const sectionData = [
  {
    id: "educacao",
    category: "EDUCAÇÃO",
    title: "Equipamentos didáticos e científicos",
    imgSrc: educacaoImg,
  },
  {
    id: "ciencia",
    category: "CIÊNCIA",
    title: "Ferramentas para Ciências",
    imgSrc: cienciaImg,
  },
  {
    id: "energia",
    category: "ENERGIA",
    title: "Tecnologia para Petróleo & Gás",
    imgSrc: "https://images.unsplash.com/photo-1765048892515-3bc3557dc980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODMxMjE4OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "tecnologia",
    category: "TECNOLOGIA",
    title: "Quadros e painéis interativos",
    imgSrc: "https://images.unsplash.com/photo-1755548413928-4aaeba7c740e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHdoaXRlYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODMxMjE4OHww&ixlib=rb-4.1.0&q=80&w=1080",
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
    title: "Soluções para Agricultura e Desporto",
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