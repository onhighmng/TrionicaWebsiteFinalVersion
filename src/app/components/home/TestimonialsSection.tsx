import React from 'react';
import { CircularTestimonials } from '../ui/circular-testimonials';
import membro1 from '../../../imports/membro-1.jpg';
import membro2 from '../../../imports/membro-2.jpg';
import membro3 from '../../../imports/membro-3.jpg';
import membro4 from '../../../imports/membro-4.jpg';

const testimonials = [
  {
    quote: "A Trionica forneceu equipamentos de alta qualidade que transformaram completamente o nosso laboratório. O suporte técnico e o profissionalismo da equipa são exemplares.",
    name: "Dr. João Silva",
    designation: "Universidade de Maputo",
    src: membro1,
  },
  {
    quote: "Parceiro de confiança para todas as nossas necessidades de equipamento hospitalar. A Trionica garante qualidade e fiabilidade em cada entrega.",
    name: "Dra. Maria Santos",
    designation: "Hospital Central de Maputo",
    src: membro2,
  },
  {
    quote: "Os sistemas de monitorização ambiental fornecidos pela Trionica são essenciais para os nossos projetos. Tecnologia de ponta ao serviço de Moçambique.",
    name: "Eng. Carlos Nhantumbo",
    designation: "Ministério do Ambiente",
    src: membro3,
  },
  {
    quote: "Graças à Trionica, os nossos alunos têm acesso a equipamentos didáticos modernos. Uma parceria que transforma a educação em Moçambique.",
    name: "Prof. Ana Machava",
    designation: "Instituto Politécnico de Nampula",
    src: membro4,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white" data-navbar-section="light">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#2354a2] mb-3">
            Depoimentos
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-tight text-[#0c1313] max-w-2xl tracking-tight">
            O Que Dizem os Nossos Clientes
          </h2>
        </div>

        {/* Circular Testimonials */}
        <div className="flex justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#0c1313",
              designation: "#2354a2",
              testimony: "#4b5563",
              arrowBackground: "#0c1313",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#2354a2",
            }}
            fontSizes={{
              name: "26px",
              designation: "14px",
              quote: "17px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
