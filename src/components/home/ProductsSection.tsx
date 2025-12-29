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

  return null;
}