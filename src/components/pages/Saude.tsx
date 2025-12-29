import React, { useRef } from 'react';
import Frame8 from '../../imports/Frame8';
import Frame9 from '../../imports/Frame9';
import Frame10 from '../../imports/Frame10';
import { TimelineContent } from '../ui/timeline-animation';

export function Saude() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Hero Section */}
      <section className="relative w-full bg-[#f9f9f9] pt-20 md:pt-24 pb-8 md:pb-12 px-4" ref={heroRef}>
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
          <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '64.29%' }}> {/* 900/1400 = 64.29% */}
              <div className="absolute inset-0">
                <div className="w-[1400px] h-[900px] scale-[0.4] sm:scale-[0.5] md:scale-[0.64] lg:scale-[0.86] xl:scale-100 origin-top-left">
                  <Frame8 />
                </div>
              </div>
            </div>
          </div>
        </TimelineContent>
      </section>
      
      {/* Innovation Section */}
      <section className="relative w-full bg-[#f9f9f9] py-12 md:py-16 lg:py-20 px-4">
        <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '85.71%' }}> {/* 1200/1400 = 85.71% */}
            <div className="absolute inset-0">
              <div className="w-[1400px] h-[1200px] scale-[0.4] sm:scale-[0.5] md:scale-[0.64] lg:scale-[0.86] xl:scale-100 origin-top-left">
                <Frame9 />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative w-full bg-[#f9f9f9] py-6 md:py-8 lg:py-10 px-4">
        <div className="relative w-full max-w-[95%] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '33.33%' }}> {/* 400/1200 = 33.33% */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[1200px] h-[400px] scale-[0.45] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.83] xl:scale-100 origin-center">
                <Frame10 />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Space for additional components */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 bg-[#f9f9f9]">
        {/* Drop new components here */}
      </div>
    </div>
  );
}