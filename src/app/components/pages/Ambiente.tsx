import React, { useRef } from 'react';
import Frame14 from '../../imports/Frame14';
import Frame15 from '../../imports/Frame15';
import { TimelineContent } from '../ui/timeline-animation';
import { CTAFooterSection } from '../home/CTAFooterSection';
import imgFrame115 from "figma:asset/fae0ca8c4c8b8276529bcc52aad8566e0feb7811.png";

interface AmbienteProps {
  onNavigate?: (page: string) => void;
}

export function Ambiente({ onNavigate }: AmbienteProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Desktop */}
      <section className="hidden md:block relative w-full bg-white pt-20 md:pt-24 pb-12 md:pb-20 px-2 md:px-4" ref={heroRef}>
        <TimelineContent
          as="div"
          animationNum={0}
          timelineRef={heroRef}
          customVariants={{
            visible: {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }
            },
            hidden: {
              y: 60,
              opacity: 0,
              filter: "blur(10px)",
            }
          }}
        >
          <div className="relative w-full max-w-[98%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '64.29%' }}> {/* 900/1400 = 64.29% */}
              <div className="absolute inset-0 flex items-start justify-center md:block">
                <div className="w-[1400px] h-[900px] scale-[0.31] min-[430px]:scale-[0.34] sm:scale-[0.5] md:scale-[0.64] lg:scale-[0.86] xl:scale-100 origin-top-left md:origin-top-left -translate-x-[12%] min-[430px]:-translate-x-[11%] sm:-translate-x-[10%] md:translate-x-0">
                  <Frame14 />
                </div>
              </div>
            </div>
          </div>
        </TimelineContent>
      </section>
      
      {/* Hero Section - Mobile */}
      <section className="md:hidden relative w-full bg-white pt-20 pb-8 px-6">
        <div className="max-w-[600px] mx-auto">
          {/* Badge */}
          <div className="flex gap-[4px] items-center h-[40px] mb-4">
            <div className="flex h-[30px] items-center justify-center relative shrink-0 w-[30px]">
              <div className="flex-none">
                <p className="font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal text-[#2354a2] text-[24px] animate-spin">✱</p>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#4a5565] text-[18px]">Ambiente</p>
          </div>
          
          {/* Heading */}
          <h1 className="font-['Manrope:Medium',sans-serif] font-medium text-[#1c1716] text-[36px] leading-[1.15] tracking-[-1.08px] mb-6">
            Juntos pelo mundo verde.
          </h1>
          
          {/* Hero Image */}
          <div className="w-full rounded-[12px] overflow-hidden mb-6">
            <img 
              alt="Ambiente - Soluções sustentáveis" 
              className="w-full h-auto object-cover" 
              src={imgFrame115}
            />
          </div>
        </div>
      </section>
      
      {/* Mobile Description Section - Only visible on mobile */}
      <section className="md:hidden relative w-full bg-white px-6 pb-8">
        <div className="max-w-[600px] mx-auto">
          <p className="font-['Inter:Regular',sans-serif] text-[#4a5565] text-[18px] leading-[26px] text-justify tracking-[-0.3125px]">
            Promovemos soluções sustentáveis que contribuem para a preservação ambiental, fornecendo equipamentos para laboratório e campo.
          </p>
        </div>
      </section>
      
      {/* Equipment Grid Section */}
      <section className="relative w-full bg-white px-4 md:px-4">
        <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
          <Frame15 />
        </div>
      </section>
      
    </div>
  );
}