import React from 'react';
import { Testimonial } from '../ui/clean-testimonial';

export function TestimonialsSection() {
  const testimonials = [
    {
      avatar: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTI0NzAzOHww&ixlib=rb-4.1.0&q=80&w=400",
      quote: "A Trionica forneceu equipamentos de alta qualidade que transformaram nosso laboratório. Excelente serviço e suporte técnico.",
      author: "Dr. João Silva",
      role: "Universidade de Maputo"
    },
    {
      avatar: "https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHdvbWFufGVufDF8fHx8MTc2NTI3OTE1Nnww&ixlib=rb-4.1.0&q=80&w=400",
      quote: "Parceiro confiável para todas as nossas necessidades de equipamento hospitalar. Profissionalismo exemplar.",
      author: "Dra. Maria Santos",
      role: "Hospital Central de Maputo"
    },
    {
      avatar: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc2NTI2ODA0N3ww&ixlib=rb-4.1.0&q=80&w=400",
      quote: "Os sistemas de monitorização ambiental da Trionica são essenciais para os nossos projetos. Tecnologia de ponta.",
      author: "Eng. Carlos Nhantumbo",
      role: "Ministério do Ambiente"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white text-black relative" data-navbar-section="light">
      <div className="container mx-auto px-4">
        <div className="w-full h-px bg-[#2354a2]/20 mb-8 md:mb-12"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">DEPOIMENTOS</h2>
        
        <div className="mt-12 md:mt-16">
          <Testimonial testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}