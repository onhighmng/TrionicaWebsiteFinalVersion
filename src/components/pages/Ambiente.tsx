import React, { useRef } from 'react';
import Frame14 from '../../imports/Frame14';
import Frame15 from '../../imports/Frame15';
import Frame16 from '../../imports/Frame16';
import { TimelineContent } from '../ui/timeline-animation';

export function Ambiente() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#f9f9f9] pt-20 md:pt-24 pb-8 md:pb-12" ref={heroRef}>
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
          className="flex justify-center items-center w-full"
        >
          <div className="w-[1400px] h-[900px] scale-[0.4] sm:scale-[0.5] md:scale-[0.64] lg:scale-[0.86] xl:scale-100">
            <Frame14 />
          </div>
        </TimelineContent>
      </section>
      
      {/* Equipment Grid Section */}
      <section className="relative w-full bg-[#f9f9f9] pb-12 md:pb-16">
        <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '92.86%' }}> {/* 1300/1400 = 92.86% */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[1400px] h-[1300px] scale-[0.4] sm:scale-[0.5] md:scale-[0.64] lg:scale-[0.86] xl:scale-100 origin-center">
                <Frame15 />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative w-full bg-[#f9f9f9]">
        <div className="relative w-full max-w-[95%] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '33.33%' }}> {/* 400/1200 = 33.33% */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[1200px] h-[400px] scale-[0.45] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.83] xl:scale-100 origin-center">
                <Frame16 />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}