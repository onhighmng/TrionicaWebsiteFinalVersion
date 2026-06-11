import React, { useRef } from 'react';
import Frame8 from '../../imports/Frame8';
import Frame9 from '../../imports/Frame9';
import { TimelineContent } from '../ui/timeline-animation';
import { CTAFooterSection } from '../home/CTAFooterSection';

interface SaudeProps {
  onNavigate?: (page: string) => void;
}

export function Saude({ onNavigate }: SaudeProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-white pt-20 md:pt-24 pb-12 md:pb-20 px-2 md:px-4" ref={heroRef}>
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
                  <Frame8 />
                </div>
              </div>
            </div>
          </div>
        </TimelineContent>
      </section>
      
      {/* Mobile Description Section - Only visible on mobile */}
      <section className="md:hidden relative w-full bg-white px-6 pb-8">
        <div className="max-w-[600px] mx-auto">
          <p className="font-['Inter:Regular',sans-serif] text-[#4a5565] text-[18px] leading-[26px] text-justify tracking-[-0.3125px]">
            Contribuímos para o fortalecimento do sistema nacional de saúde através do fornecimento de equipamentos de última geração para prevenção, diagnóstico e tratamento.
          </p>
        </div>
      </section>
      
      {/* Innovation Section */}
      <section className="relative w-full bg-white px-4 mt-12">
        <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
          <Frame9 />
        </div>
      </section>
      
    </div>
  );
}