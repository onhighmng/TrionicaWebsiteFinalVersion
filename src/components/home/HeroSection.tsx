import React from 'react';
import Frame1707482740 from '../../imports/Frame1707482740-2483-1883'; // Desktop - NEW MICROSCOPE DESIGN

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
  onMenuClose?: () => void;
}

export function HeroSection({ onNavigate, currentPage, onMenuClose }: HeroSectionProps) {
  return (
    <section className="relative bg-[#eeeeee] w-full overflow-hidden -mb-8 md:-mb-12 lg:-mb-16">
      {/* Container with responsive scaling */}
      <div className="relative w-full max-w-[1440px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Scaled wrapper for the entire hero */}
        <div className="relative w-full" style={{ paddingBottom: '93.26%' }}> {/* 1343/1440 = 93.26% */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 -translate-x-1/2 w-[1440px] h-[1343px] scale-[0.26] sm:scale-[0.36] md:scale-[0.55] lg:scale-[0.75] xl:scale-100 origin-top pointer-events-auto">
              <Frame1707482740 onNavigate={onNavigate} currentPage={currentPage} onMenuClose={onMenuClose} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}