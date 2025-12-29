import React from 'react';
import { getImageUrl } from '../../utils/images';

export function QuemSomos() {
  return (
    <div>
      {/* Hero */}
      <div 
        className="relative bg-cover bg-center py-16 md:py-20 lg:py-24 mb-12 md:mb-16"
        style={{ backgroundImage: `url(${getImageUrl('wp-content/uploads/2019/04/Webp.net-compress-image.jpg')})` }}
      >
        <div className="absolute inset-0 bg-[#2354a2]/65"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest mb-4">Quem Somos</h1>
          <div className="w-10 md:w-12 h-1 bg-[#ea3a1c]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#2354a2] text-2xl md:text-3xl font-bold mb-6 relative inline-block">
            Nossa História
            <span className="block w-8 md:w-10 h-1 bg-[#ea3a1c] mt-2"></span>
          </h2>
          
          <div className="text-gray-600 space-y-4 mb-12 text-justify text-sm md:text-base">
            <p>
              A <strong>TRIÓNICA MOÇAMBIQUE, LDA.</strong>, é uma empresa de direito moçambicano, registada na Conservatória de Registo das Entidades Legais sob o NUEL: 100236086 e, publicada no Boletim da Republica nº 113, III serie de 21 de Setembro de 2011.
            </p>
            <p>
              Somos uma empresa moçambicana, localizada na cidade de Maputo, focada no desenvolvimento de soluções e realizações de projectos, tendo como ponto primordial proporcionar aos nossos clientes produtos e serviços de alta qualidade com métodos e tecnologias mais recentes de acordo com as suas necessidades, contribuindo assim para o desenvolvimento sustentável do País nas áreas de:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 font-semibold text-gray-700">
              <li>Ciência e Educação;</li>
              <li>Saúde;</li>
              <li>Ambiente;</li>
              <li>Engenharia e Minas;</li>
              <li>Agricultura;</li>
              <li>Electricidade e Electrónica;</li>
            </ul>
          </div>

          <h2 className="text-[#2354a2] text-2xl md:text-3xl font-bold mb-6 relative inline-block">
            Assistência Técnica Especializada
            <span className="block w-8 md:w-10 h-1 bg-[#ea3a1c] mt-2"></span>
          </h2>
          
          <div className="text-gray-600 space-y-4 mb-12 text-justify text-sm md:text-base">
            <p>
              Nossa equipe é formada por técnicos especializados e treinados em Moçambique, bem como no estrangeiro, destacados pela sua competência e flexibilidade no atendimento contínuo aos nossos clientes em todas as regiões do país, desde o primeiro contacto até aos serviços pós-venda.
            </p>
            <p>
              Para além do fornecimento do Equipamento, prestamos serviços de Instalação e Treinamento para o bom uso dos equipamentos, oferecemos garantia e executamos serviços de manutenção dentro de todo o território nacional. Possuímos diversos equipamentos de diagnóstico de avarias, reparação e calibração de equipamentos e ainda peças de reposição de excelente qualidade.
            </p>
          </div>

          <blockquote className="bg-[#f4f8fb] border-l-4 border-[#2354a2] p-8 my-12 italic text-gray-700 text-lg">
            "Não vendemos caixas com equipamentos, vendemos SOLUÇÕES. Projectamos, fornecemos, instalamos e damos formação aos utilizadores."
          </blockquote>

          {/* MVV Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 border border-gray-100 rounded shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1 transform duration-300">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-[#2354a2] text-xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-600 text-sm mb-2">Projectar e implementar soluções inovadoras e serviços que satisfaçam as necessidades e requisitos dos nossos clientes;</p>
              <p className="text-gray-600 text-sm mb-2">Garantir um serviço de assistência após venda de elevada qualidade e eficiência</p>
              <p className="text-gray-600 text-sm">Apostar em vencer pela qualidade dos serviços prestados, procurando as melhores práticas, as soluções mais inovadoras e eficientes com procedimentos mais eficazes.</p>
            </div>

            <div className="p-8 border border-gray-100 rounded shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1 transform duration-300">
              <div className="text-4xl mb-6">👁️</div>
              <h3 className="text-[#2354a2] text-xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-gray-600 text-sm mb-2">Assumir cada vez mais um papel de empresa de referência em Moçambique no Fornecimento de Equipamentos Laboratoriais no mercado.</p>
              <p className="text-gray-600 text-sm mb-2">Destacarmo‐nos nas nossas áreas de negócio como empresa inovadora, diferenciada no produto e na globalidade do serviço;</p>
              <p className="text-gray-600 text-sm mb-2">Consolidar a nossa posição como empresa de referência em todo o processo: fornecimento de equipamento, treinamento, instalação, reparação e manutenção e</p>
              <p className="text-gray-600 text-sm">Valorizar a responsabilidade social e garantir viabilidade económica, satisfazendo trabalhadores e acionistas.</p>
            </div>

            <div className="p-8 border border-gray-100 rounded shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1 transform duration-300">
              <div className="text-4xl mb-6">💎</div>
              <h3 className="text-[#2354a2] text-xl font-bold mb-4">Nossos Valores</h3>
              <p className="text-gray-600 text-sm mb-4">O que faz da Triónica Moçambique Lda., uma Empresa de referência no mercado é a credibilidade e confiança que detém entre os seus Clientes.</p>
              <ul className="text-gray-600 text-sm list-disc pl-4 space-y-1">
                <li>Inovação (nas soluções concebidas);</li>
                <li>Eficiência (nas respostas a qualquer solicitação);</li>
                <li>Eficácia (nos processos adoptados);</li>
                <li>Honestidade (no relacionamento com Clientes, Fornecedores e Parceiros);</li>
                <li>Criação de Valor (assente em soluções fiáveis e sustentáveis);</li>
                <li>Responsabilidade Social (compatibilizando a ética com a actividade desenvolvida);</li>
                <li>Reinvestimento (em meios técnicos e na formação profissional, nacional e internacional).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-[#f9f9f9] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-[#2354a2] text-3xl font-bold mb-12 text-center relative inline-block w-full">
            Nossos Clientes
            <span className="block w-10 h-1 bg-[#ea3a1c] mx-auto mt-4"></span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {[
              'inade-360x304.png', 'images.png', 'header-logo-anep.png', 'HCB-360x97.jpg',
              'download-360x110.jpg', 'download-1-e1556023650936.jpg', 'BCI-LAST-360x400.png',
              'banco-last-360x400.png', '19399620_1375015429253245_2341049790206874199_n-360x400.png',
              '185951_196856143676469_5944359_n-360x400.jpg', 'Unizambeze-360x385.jpg',
              'Sasol_logo-360x400.png', 'logov5-360x221.png', 'logoiamretina.png', '1-1-264x400.png'
            ].map((img, idx) => (
              <figure key={idx} className="grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100 duration-300">
                <img 
                  src={getImageUrl(`wp-content/uploads/2019/05/${img}`)} 
                  alt="Client" 
                  className="max-h-24 max-w-[160px] object-contain"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}