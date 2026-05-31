import svgPaths from "./svg-nijzobqshn";
import imgImage from "figma:asset/c286e2bf51f2ed23af3b1434b5ba407bf7439d63.png";
import { ArrowUpRight } from 'lucide-react';

export default function Frame163() {
  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="font-medium text-[#575757] text-sm md:text-[18px] tracking-tight uppercase">01 / Trionica</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Statistics */}
          <div className="lg:col-span-3 flex flex-col gap-8 md:gap-12">
            {/* 100+ Clientes */}
            <div>
              <p className="text-[#2d2d2d] text-4xl md:text-[48px] mb-2">100+</p>
              <p className="text-[#484848] text-base">
                <span className="text-[#a9c22f]">[</span>Clientes Satisfeitos<span className="text-[#484848]">]</span>
              </p>
            </div>

            {/* 95% Taxa de Sucesso */}
            <div>
              <p className="text-[#2d2d2d] text-4xl md:text-[48px] mb-2">95%</p>
              <p className="text-[#484848] text-base">
                <span className="text-[#a9c22f]">[</span>Taxa de Sucesso<span className="text-[#484848]">]</span>
              </p>
            </div>

            {/* 5 Áreas */}
            <div>
              <p className="text-[#2d2d2d] text-4xl md:text-[48px] mb-2">5</p>
              <p className="text-[#484848] text-base">
                <span className="text-[#a9c22f]">[</span>Áreas<span className="text-[#484848]">]</span>
              </p>
            </div>
          </div>

          {/* Middle Column - Nossa História */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Title */}
            <div className="flex items-center gap-2">
              <span className="text-[#d40303] text-4xl md:text-[48px]">✱</span>
              <h2 className="text-black text-3xl md:text-[48px] font-medium">Nossa História</h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-[#575757] text-base">
              <p>A nossa equipa técnica é formada por especialistas treinados em Moçambique e no estrangeiro, garantindo:</p>
              
              <ul className="space-y-2">
                <li>• Instalação completa dos equipamentos</li>
                <li>• Treinamento para uso adequado</li>
                <li>• Assistência pós-venda em todo o país</li>
                <li>• Serviços de manutenção, diagnóstico e calibração</li>
                <li>• Fornecimento de peças de reposição de alta qualidade</li>
              </ul>

              <p>Estamos ao lado dos nossos clientes desde o primeiro contacto até ao suporte contínuo, assegurando fiabilidade e segurança operacional.</p>
            </div>

            {/* Button */}
            <div>
              <button className="bg-[#0046a2] hover:bg-[#003580] transition-colors text-white rounded-[14px] h-[50px] px-3 flex items-center gap-4">
                <span className="text-[18px]">Contactar</span>
                <div className="bg-white rounded-[10px] w-[34px] h-[34px] flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Image with Badge */}
          <div className="lg:col-span-4 relative">
            <div className="relative w-full aspect-[4/3] max-w-[400px] mx-auto lg:mx-0">
              <img 
                src={imgImage} 
                alt="Trionica Experience" 
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Badge */}
              <div className="absolute -left-8 top-1/3 transform -translate-y-1/2">
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                  <div className="absolute inset-0 bg-[#ee701f] rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
