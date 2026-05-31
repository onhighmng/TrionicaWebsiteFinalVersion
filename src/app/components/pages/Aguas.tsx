import React, { useRef } from 'react';
import Frame11 from '../../imports/Frame11';
import Frame12 from '../../imports/Frame12';
import { TimelineContent } from '../ui/timeline-animation';
import { CTAFooterSection } from '../home/CTAFooterSection';

interface AguasProps {
  onNavigate?: (page: string) => void;
}

export function Aguas({ onNavigate }: AguasProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen bg-[#e2e2e2]">
      {/* Hero Section */}
      <section className="relative w-full bg-[#e2e2e2] pt-20 md:pt-24 pb-12 md:pb-20 px-4 md:px-4" ref={heroRef}>
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
          <div className="relative w-full mx-auto overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '70%' }}> {/* Increased from 64.29% to give more vertical space */}
              <div className="absolute inset-0 flex items-start justify-center">
                <div className="w-[1400px] h-[900px] scale-[0.295] min-[430px]:scale-[0.32] sm:scale-[0.5] md:scale-[0.64] lg:scale-[0.86] xl:scale-100 origin-top md:origin-top-left">
                  <Frame11 />
                </div>
              </div>
            </div>
          </div>
        </TimelineContent>
      </section>
      
      {/* Mobile Description Section - Between hero and cards */}
      <section className="md:hidden relative w-full bg-[#e2e2e2] px-4 pb-8">
        <div className="max-w-[90%] mx-auto text-center">
          <p className="font-['Inter:Regular',sans-serif] text-[#4a5565] text-[18px] leading-[26px] tracking-[-0.3125px]">
            Oferecemos soluções tecnológicas que facilitam o controlo, análise e melhoria da qualidade da água.
          </p>
        </div>
      </section>
      
      {/* Equipment Grid Section */}
      <section className="relative w-full bg-[#e2e2e2] px-4 md:px-4 md:-mb-80">
        <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
          {/* Desktop version with scaling */}
          <div className="hidden md:block relative w-full" style={{ paddingBottom: '125%' }}>
            <div className="absolute inset-0">
              <div className="w-[1400px] h-[1750px] scale-[0.64] lg:scale-[0.86] xl:scale-100 origin-top-left">
                <Frame12 />
              </div>
            </div>
          </div>
          
          {/* Mobile version - no scaling, direct render */}
          <div className="md:hidden">
            <Frame12 />
          </div>
        </div>
      </section>
      
      {/* CTA Footer Section */}
      <div className="md:-mt-72">
        <CTAFooterSection onNavigate={onNavigate} />
      </div>
    </div>
  );
}