import React from 'react';
import UnderlineHero from '../ui/underline-hero-section';
import { ProjectShowcase } from '../ui/project-showcase';

interface BlogProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function Blog({ onNavigate }: BlogProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <UnderlineHero
        title="Construímos o Futuro"
        highlightedWord="Nacional"
        subtitle="Um portfólio de tecnologia de vanguarda ao serviço das instituições que lideram Moçambique."
        ctaText="Contactar"
        onCtaClick={() => onNavigate('contacte-nos')}
      />
      
      {/* Portfolio Projects Section */}
      <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
        <ProjectShowcase onNavigate={onNavigate} />
      </section>
    </div>
  );
}