import React, { useRef } from 'react';
import Frame5 from '../imports/Frame5';
import Frame6 from '../imports/Frame6';
import { TimelineContent } from '../components/ui/timeline-animation';
import { CTAFooterSection } from '../components/home/CTAFooterSection';
import imgFrame112 from "../../imports/ensino-lab.jpg";
import { EnsinoSuppliersSection } from '../components/pages/EnsinoSuppliersSection';

interface EnsinoPageProps {
  onNavigate?: (page: string) => void;
}

export function EnsinoPage({ onNavigate }: EnsinoPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="w-full bg-[#F5F5F5]" data-navbar-section="light">
      {/* Desktop Hero Section */}
      <div className="hidden md:block pt-20 md:pt-24 pb-8 md:pb-12 px-4" ref={heroRef}>
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
          <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1184px] mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '82.52%' }}> {/* 977/1184 = 82.52% */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[1184px] h-[977px] scale-[0.45] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.85] xl:scale-100 origin-center">
                  <Frame5 />
                </div>
              </div>
            </div>
          </div>
        </TimelineContent>
      </div>

      {/* Mobile Hero Section */}
      <section className="md:hidden relative w-full bg-[#F5F5F5] pt-20 pb-8 px-6">
        <div className="max-w-[600px] mx-auto">
          {/* Badge */}
          <div className="flex gap-[4px] items-center h-[40px] mb-4">
            <div className="flex h-[30px] items-center justify-center relative shrink-0 w-[30px]">
              <div className="flex-none">
                <p className="font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal text-[#2354a2] text-[24px] animate-spin">✱</p>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#4a5565] text-[18px]">ENSINO &amp; INVESTIGAÇÃO</p>
          </div>

          {/* Heading */}
          <h1 className="font-['Manrope:Medium',sans-serif] font-medium text-[#1c1716] text-[32px] leading-[1.15] tracking-[-1px] mb-6">
            Equipamentos para Ensino e Investigação
          </h1>
          
          {/* Hero Image */}
          <div className="w-full rounded-[12px] overflow-hidden mb-6">
            <img 
              alt="Ensino - Equipamentos educacionais" 
              className="w-full h-auto object-cover" 
              src={imgFrame112}
            />
          </div>
        </div>
      </section>
      
      {/* Mobile Description Section */}
      <section className="md:hidden relative w-full bg-[#F5F5F5] px-6 pb-8">
        <div className="max-w-[600px] mx-auto">
          <p className="font-['Roboto:Regular',sans-serif] text-[#1c1716] text-[18px] leading-[26px] text-justify">
            Disponibilizamos uma vasta gama de equipamentos destinados ao ensino superior, instituições técnico-profissionais, escolas secundárias e primárias, bem como laboratórios de investigação.
          </p>
        </div>
      </section>

      {/* Frame6 - Infrastructure section - Desktop only for now */}
      <div className="hidden md:block px-4 -mb-80">
        <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1170px] mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '101.97%' }}> {/* 1193/1170 = 101.97% */}
            <div className="absolute inset-0">
              <div className="w-[1170px] h-[1193px] scale-[0.45] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.85] xl:scale-100 origin-top-left">
                <Frame6 />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frame6 - Mobile version */}
      <div className="md:hidden px-4">
        <Frame6 />
      </div>

      {/* Supplier brands + YouTube videos */}
      <EnsinoSuppliersSection />

    </div>
  );
}