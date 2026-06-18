import svgPaths from "./svg-tpr83w14el";
import { useRef, useState } from "react";
import { TimelineContent } from "../components/ui/timeline-animation";
import geofisicaImg from "../../imports/qantix-q8.jpeg";
import hidrogeologiaImg from "figma:asset/0efd7076281e220a819484eb2c7a3f20c3603558.png";
import investigacaoImg from "../../imports/mbb-2.jpeg";
import laboratorioImg from "../../imports/image-8.png";
import geotecniaImg from "../../imports/image-9.png";
import analiseQuimicaImg from "../../imports/image-10.png";
import industriaImg from "../../imports/image-11.png";

const sectionData = [
  {
    id: "geofisica",
    category: "SISMOLOGIA",
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
    category: "GEOFÍSICA",
    title: "AAS, Magnetómetros, Gravimetria, Resistividade e Sísmica",
    imgSrc: investigacaoImg,
  },
  {
    id: "laboratorio",
    category: "LABORATÓRIO DE GEOLOGIA",
    title: "Produção de lâminas delgadas e análises químicas",
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
    category: "ANÁLISE GEOQUÍMICA",
    title: "Tecnologia XRD, XRF, ICP-MS, Análise Elementar",
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
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

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
    <>
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
                onClick={() => setSelectedImage({ src: item.imgSrc, title: item.title })}
                className="relative group no-underline bg-[#deeae2] p-4 rounded-lg border border-[#c5d7cc] hover:shadow-lg transition-shadow duration-300 cursor-pointer"
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

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function Frame() {
  return <Section />;
}