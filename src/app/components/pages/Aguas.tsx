import React, { useRef } from 'react';
import Frame11 from '../../imports/Frame11';
import Frame12 from '../../imports/Frame12';
import { TimelineContent } from '../ui/timeline-animation';
import { CTAFooterSection } from '../home/CTAFooterSection';
import aguasCardImg from "../../../imports/aguas-card-new.jpeg";

interface AguasProps {
  onNavigate?: (page: string) => void;
}

export function Aguas({ onNavigate }: AguasProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen bg-white" data-navbar-section="light">
      {/* Hero Section - Desktop */}
      <section className="hidden md:block relative w-full bg-white pt-20 md:pt-24 pb-0 px-4 md:px-4" ref={heroRef}>
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
                <div className="w-[1400px] h-[900px] scale-[0.295] min-[430px]:scale-[0.32] sm:scale-[0.5] md:scale-[0.64] lg:scale-[0.86] xl:scale-100 origin-top md:origin-top-left md:translate-x-0">
                  <Frame11 />
                </div>
              </div>
            </div>
          </div>
        </TimelineContent>
      </section>
      
      {/* Hero Section - Mobile */}
      <section className="md:hidden relative w-full bg-white pt-20 pb-8 px-6">
        <div className="max-w-[600px] mx-auto">
          <div className="flex gap-[4px] items-center h-[40px] mb-4">
            <div className="flex h-[30px] items-center justify-center relative shrink-0 w-[30px]">
              <div className="flex-none">
                <p className="font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal text-[#2354a2] text-[24px] animate-spin">✱</p>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#4a5565] text-[18px]">Águas</p>
          </div>
          <h1 className="font-['Manrope:Medium',sans-serif] font-medium text-[#1c1716] text-[36px] leading-[1.15] tracking-[-1.08px] mb-6">
            Soluções tecnológicas para gestão da água
          </h1>
          <div className="w-full rounded-[12px] overflow-hidden mb-6">
            <img
              alt="Águas - Soluções para qualidade da água"
              className="w-full h-auto object-cover"
              src={aguasCardImg}
            />
          </div>
        </div>
      </section>

      {/* Mobile Description Section - Between hero and cards */}
      <section className="relative w-full bg-white px-2 md:px-4 py-8">
        <div className="relative w-full max-w-[98%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto flex items-center justify-between gap-8 md:pl-[75px] lg:pl-[100px] xl:pl-[116px] md:pr-[75px] lg:pr-[100px] xl:pr-[116px]">
          <p className="font-['Inter:Regular',sans-serif] text-[#4a5565] text-[18px] leading-[26px] text-left tracking-[-0.3125px] max-w-[700px]">
            Fornecemos equipamentos para monitorização, medição, controle e tratamento da água, apoiando a gestão eficiente dos recursos hídricos e melhoria de qualidade da água
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[#4a5565] text-[14px] tracking-[-0.1504px] whitespace-nowrap shrink-0 hidden md:block">
            Equipamentos Educacionais | Soluções Científicas
          </p>
        </div>
      </section>
      
      {/* Equipment Grid Section */}
      <section className="relative w-full bg-white px-4 md:px-4">
        <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
          <Frame12 />
        </div>
      </section>
      
    </div>
  );
}