import React from 'react';
import Frame157 from '../../imports/Frame157';

interface PortfolioDetailProps {
  projectId?: string;
}

export function PortfolioDetail({ projectId }: PortfolioDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Portfolio Detail Section */}
      <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 px-4 mt-16 md:mt-20">
        <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '175%' }}> {/* 2100/1200 = 175% */}
            <div className="absolute inset-0">
              <div className="w-[1200px] h-[2100px] scale-[0.45] sm:scale-[0.55] md:scale-[0.75] lg:scale-100 origin-top-left">
                <Frame157 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}