import svgPaths from "./svg-roqy5hcv2h";
import imgImage from "figma:asset/95d3133f9a25179bd89a06f9301856c3bca1a9ad.png";
import { ArrowUpRight } from 'lucide-react';

export default function Frame164() {
  return (
    <div className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Title */}
            <div className="flex items-center gap-2">
              <span className="text-[#d40303] text-4xl md:text-5xl lg:text-[48px]">✱</span>
              <h2 className="text-black text-3xl md:text-4xl lg:text-[48px] font-medium">Nossa História</h2>
            </div>

            {/* Description */}
            <div className="space-y-5 lg:space-y-6 text-[#575757] text-lg lg:text-[21.296px] leading-relaxed">
              <p>
                A nossa equipa técnica é formada por especialistas treinados em Moçambique e no estrangeiro, garantindo:
              </p>
              
              <div className="space-y-2">
                <p>• Instalação completa dos equipamentos</p>
                <p>• Treinamento para uso adequado</p>
                <p>• Assistência pós-venda em todo o país</p>
                <p>• Serviços de manutenção, diagnóstico e calibração</p>
                <p>• Fornecimento de peças de reposição de alta qualidade</p>
              </div>

              <p>
                Estamos ao lado dos nossos clientes desde o primeiro contacto até ao suporte contínuo, assegurando fiabilidade e segurança operacional.
              </p>
            </div>

            {/* Button */}
            <div className="mt-2">
              <button className="bg-[#0046a2] hover:bg-[#003580] transition-colors text-white rounded-[16.94px] h-[60.5px] px-4 flex items-center gap-5">
                <span className="text-[21.78px]">Contactar</span>
                <div className="bg-white rounded-[12.1px] w-[41.14px] h-[41.14px] flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Image with Badge */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] lg:max-w-full">
              <img 
                src={imgImage} 
                alt="Trionica 15 Anos de Experiência" 
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Circular Badge */}
              <div className="absolute left-0 lg:left-[-30px] top-1/2 -translate-y-1/2 w-[100px] h-[100px] lg:w-[117px] lg:h-[117px]">
                <div className="relative w-full h-full">
                  {/* Orange Circle Background */}
                  <div className="absolute inset-0 bg-[#ee701f] rounded-full flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  
                  {/* Text Around Circle */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120">
                    <defs>
                      <path 
                        id="circlePath" 
                        d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                      />
                    </defs>
                    <text className="text-[11px] lg:text-[12px] fill-black font-medium tracking-wider">
                      <textPath href="#circlePath" startOffset="0%">
                        15+ Anos de Experiência
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
