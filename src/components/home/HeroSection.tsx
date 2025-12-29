import React from 'react';
import Frame117 from '../../imports/Frame117'; // Mobile
import Frame114 from '../../imports/Frame114-2259-1381'; // Desktop - NEW EXACT DESIGN

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function HeroSection({ onNavigate, currentPage }: HeroSectionProps) {
  return (
    <>
      {/* Mobile - Frame117 (374×611px) */}
      <div className="block md:hidden relative w-full bg-white overflow-hidden">
        <div className="relative w-full max-w-[374px] mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '163.37%' }}>
            <div className="absolute inset-0">
              <div className="w-[374px] h-[611px] scale-100 origin-top-left">
                <Frame117 onNavigate={onNavigate} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet - Frame114 (exact Figma design) */}
      <div className="hidden md:block relative w-full bg-white overflow-visible -mb-8 md:-mb-12 lg:-mb-16">
        <div className="relative w-full max-w-[1346px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="relative w-full">
            <div className="relative overflow-visible flex justify-center">
              {/* The frame is 1346.594px wide with 775px height */}
              <div className="w-[1346.594px] h-[775px] scale-[0.75] md:scale-[0.8] lg:scale-[0.9] xl:scale-95 2xl:scale-100 origin-top">
                <Frame114 onNavigate={onNavigate} currentPage={currentPage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
