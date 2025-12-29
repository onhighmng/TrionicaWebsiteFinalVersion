import React, { useRef } from 'react';
import Frame5 from '../imports/Frame5';
import Frame6 from '../imports/Frame6';
import Frame7 from '../imports/Frame7';
import { TimelineContent } from '../components/ui/timeline-animation';

export function EnsinoPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="w-full bg-white" data-navbar-section="light">
      {/* Wrapper for the Frame5 component with proper spacing and containment */}
      <div className="pt-20 md:pt-24 pb-8 md:pb-12 px-4" ref={heroRef}>
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

      {/* Frame6 - Infrastructure section */}
      <div className="pb-8 md:pb-12 px-4">
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

      {/* Frame7 - Technology Transform section */}
      <div className="pb-12 md:pb-16 px-4">
        <div className="relative w-full max-w-[95%] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[537px] mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '59.4%' }}> {/* 319/537 = 59.4% */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[537px] h-[319px] scale-[0.5] sm:scale-[0.65] md:scale-[0.8] lg:scale-[0.93] xl:scale-100 origin-center">
                <Frame7 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}