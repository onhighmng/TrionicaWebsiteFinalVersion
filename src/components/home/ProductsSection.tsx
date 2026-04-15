import React from 'react';

export function ProductsSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const products = [
    {
      title: "Educação",
      description: "Equipamentos didácticos, laboratoriais e de investigação para escolas, centros de formação, laboratórios e universidades.",
      link: "ensino"
    },
    {
      title: "Saúde",
      description: "Equipamentos hospitalares, laboratoriais, de investigação e reagentes para hospitais, unidades de saúde e laboratórios.",
      link: "saude"
    },
    {
      title: "Ambiente",
      description: "Sistemas de monitorização da água, solo e ar, unidades de tratamento de águas e águas residuais, instrumentação e sistemas de aquisição e registo de dados.",
      link: "ambiente"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onNavigate(product.link)}
            >
              <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}