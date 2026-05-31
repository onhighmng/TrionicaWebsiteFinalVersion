import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

export function WhyChooseUsSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Triónica?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-[#2354a2] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Equipamentos de alta qualidade de fabricantes reconhecidos mundialmente.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="w-8 h-8 text-[#2354a2] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Suporte Técnico</h3>
              <p className="text-gray-600">Assistência técnica especializada e formação contínua.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}