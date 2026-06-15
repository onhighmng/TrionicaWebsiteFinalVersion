import React, { useRef } from 'react';
import Frame17 from '../../imports/Frame17';
import Frame18 from '../../imports/Frame18';
import { TimelineContent } from '../ui/timeline-animation';
import { CTAFooterSection } from '../home/CTAFooterSection';
import imgFrame116 from "figma:asset/0a953ce0f0bfab0173f325511fdb890be8d0105d.png";

interface MinasProps {
  onNavigate?: (page: string) => void;
}

export function Minas({ onNavigate }: MinasProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen bg-white" data-navbar-section="light">
      {/* Hero Section - Desktop */}
      <section className="hidden md:flex relative w-full bg-white pt-20 md:pt-24 pb-8 md:pb-12 justify-center items-center" ref={heroRef}>
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
          <div className="w-[1400px] h-[900px] scale-[0.28] sm:scale-[0.5] md:scale-[0.64] lg:scale-[0.86] xl:scale-100">
            <Frame17 />
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
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#4a5565] text-[18px]">Minas</p>
          </div>
          
          {/* Heading */}
          <h1 className="font-['Manrope:Medium',sans-serif] font-medium text-[#1c1716] text-[36px] leading-[1.15] tracking-[-1.08px] mb-6">
            Inovação no Coração da Terra.
          </h1>
          
          {/* Hero Image */}
          <div className="w-full rounded-[12px] overflow-hidden mb-6">
            <img 
              alt="Minas - Inovação mineral" 
              className="w-full h-auto object-cover" 
              src={imgFrame116}
            />
          </div>
        </div>
      </section>
      
      {/* Mobile Description Section - Only visible on mobile */}
      <section className="md:hidden relative w-full bg-white px-6 pb-8">
        <div className="max-w-[600px] mx-auto">
          <p className="font-['Inter:Regular',sans-serif] text-[#4a5565] text-[18px] leading-[26px] text-justify tracking-[-0.3125px]">
            Apoiamos o desenvolvimento do sector mineiro com equipamentos de alta tecnologia para laboratórios e investigação geológica.
          </p>
        </div>
      </section>
      
      {/* Equipment Grid Section */}
      <section className="relative w-full bg-white px-4 md:px-4">
        <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
          <Frame18 />
        </div>
      </section>
      
    </div>
  );
}