import svgPaths from "./svg-hkc198tcgj";
import { useRef, useState } from "react";
import { TimelineContent } from "../components/ui/timeline-animation";
import infraestruturaImg from "figma:asset/dd81d3bef9f3b0c39a102624e8227864df172233.png";
import diagnosticoImg from "figma:asset/5b527ca2036656eeb3df5f4ae7501226e8fad166.png";
import softwareImg from "figma:asset/ae2f21cfb3b0a3b087d95214ce3c7a4fd9239140.png";

const sectionData = [
  {
    id: "infraestrutura",
    category: "INFRAESTRUTURA",
    title: "Equipamentos e mobiliário hospitalar",
    imgSrc: infraestruturaImg,
  },
  {
    id: "diagnostico",
    category: "DIAGNÓSTICO",
    title: "Raio-X, Tomografia Computorizada (CT) e Ressonância Magnética (MRI)",
    imgSrc: diagnosticoImg,
  },
  {
    id: "laboratorio",
    category: "LABORATÓRIO",
    title: "Equipamentos para Centros de Diagnóstico",
    imgSrc: "https://images.unsplash.com/photo-1631557677599-ee5fe0b3440b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGRpYWdub3N0aWN8ZW58MXx8fHwxNzY4MzEyOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "digital-health",
    category: "DIGITAL HEALTH",
    title: "Tele-radiologia",
    imgSrc: "https://images.unsplash.com/photo-1758691461932-d0aa0ebf6b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlaGVhbHRoJTIwZGlnaXRhbCUyMGhlYWx0aHxlbnwxfHx8fDE3NjgzMTI5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "software",
    category: "SOFTWARE",
    title: "Sistemas automáticos de apoio à decisão clínica",
    imgSrc: softwareImg,
  },
  {
    id: "saude-publica",
    category: "SAÚDE PÚBLICA",
    title: "Soluções avançadas para deteção da tuberculose, incluindo OneStopT",
    imgSrc: "https://images.unsplash.com/photo-1619588461854-d9932448d96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dWJlcmN1bG9zaXMlMjBwdWJsaWMlMjBoZWFsdGh8ZW58MXx8fHwxNzY4MzEyOTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
  return (
    <div className="relative size-full">
      <Section />
    </div>
  );
}