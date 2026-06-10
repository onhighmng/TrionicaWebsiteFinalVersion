import React from 'react';
import { PortfolioCarouselGrid } from '../ui/portfolio-carousel-grid';
import PortfolioHero from '../ui/portfolio-hero';

interface BlogProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function Blog({ onNavigate }: BlogProps) {
  return (
    <div className="min-h-screen bg-[#eeeeee]">
      <PortfolioHero onNavigate={onNavigate} />

      {/* Portfolio Projects Section */}
      <section className="relative w-full bg-[#eeeeee] py-12 md:py-16 lg:py-20">
        <PortfolioCarouselGrid />
      </section>
      
    </div>
  );
}