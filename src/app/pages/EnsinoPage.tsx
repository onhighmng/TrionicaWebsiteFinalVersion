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
      <div className="hidden md:block pt-20 md:pt-24 pb-0 px-2 md:px-4" ref={heroRef}>
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
          <div className="relative w-full max-w-[98%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '64.29%' }}>
              <div className="absolute inset-0 flex items-start justify-center">
                <div className="w-[1184px] h-[977px] md:scale-[0.64] lg:scale-[0.86] xl:scale-100 origin-top">
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
      

      {/* Description Section */}
      <section className="relative w-full bg-[#F5F5F5] px-4 md:px-4 py-8">
        <div className="relative w-full max-w-[98%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between gap-8 md:pl-[calc(50%_-_368px)] lg:pl-[calc(50%_-_495px)] xl:pl-[calc(50%_-_575px)] xl:pr-[calc(50%_-_592px)]">
          <p className="font-['Inter:Regular',sans-serif] text-[#4a5565] text-[18px] leading-[26px] text-left tracking-[-0.3125px] max-w-[700px]">
            Disponibilizamos uma vasta gama de equipamentos destinados ao Ensino Superior, Instituições Técnico-Profissionais, Escolas Secundárias e Primárias, bem como Laboratórios de Investigação.
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[#4a5565] text-[14px] tracking-[-0.1504px] whitespace-nowrap shrink-0 hidden md:block">
            Equipamentos Educacionais | Soluções Científicas
          </p>
        </div>
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