import React from 'react';
import svgPaths from "./svg-3tg3ahoo2b";

interface CardWrapperProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

function CardWrapper({ onClick, children, className = "" }: CardWrapperProps) {
  return (
    <div 
      className={`${className}`}
    >
      {children}
    </div>
  );
}

interface Frame156WrapperProps {
  onNavigate: (page: string, projectId?: string) => void;
}

function OurServiceHeaderContainer() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[57.835px] items-center left-[913.59px] top-0 w-[222.37px]" data-name="Our Service Header Container">
      <div className="h-0 relative shrink-0 w-[102px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 1">
            <path d="M0 0.5H102" id="Vector 176" stroke="var(--stroke-0, #FF6200)" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.97] not-italic relative shrink-0 text-[#2d2d2d] text-[16px] tracking-[10.88px] uppercase w-[183px]">O Nosso Método</p>
    </div>
  );
}

function ServiceIconContainer({ left, top }: { left: string; top: string }) {
  return (
    <div className={`absolute h-[37.051px] w-[36.615px]`} style={{ left, top }} data-name="Service Icon Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 38">
        <g id="Service Icon Container">
          <ellipse cx="18.3076" cy="18.5254" fill="var(--fill-0, #A9C22F)" id="Ellipse 2" rx="18.3076" ry="18.5254" />
          <path d={svgPaths.p72d3c00} id="Rectangle 6" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ServiceIconContainer1({ left, top }: { left: string; top: string }) {
  return (
    <div className={`absolute h-[37.051px] w-[36.615px]`} style={{ left, top }} data-name="Service Icon Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 38">
        <g id="Service Icon Container">
          <ellipse cx="18.3076" cy="18.5254" fill="var(--fill-0, #A9C22F)" id="Ellipse 2" rx="18.3076" ry="18.5254" />
          <path d={svgPaths.pf505280} id="Rectangle 6" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame156Wrapper({ onNavigate }: Frame156WrapperProps) {
  const handleCardClick = (projectId: string) => {
    onNavigate('portfolio-detail', projectId);
  };

  return (
    <div className="relative size-full">
      {/* Title */}
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[127px] leading-[1.1] left-[calc(50%-573px)] not-italic text-[#2d2d2d] text-[48px] top-[40.62px] w-[866px]">Marcos de Impacto Estratégico.</p>
      <OurServiceHeaderContainer />
      
      {/* First Row - Card 1: KFW/MCTESTP */}
      <CardWrapper onClick={() => handleCardClick('kfw-mctestp')} className="absolute left-0 top-[154.53px] w-[558.053px] h-[273.815px]">
        <div className="bg-[#1e1e1e] h-[234.053px] left-[198.26px] rounded-[30px] top-[19.88px] w-[360.793px] absolute" data-name="Service Background" />
        <div className="bg-[#c4c4c4] h-[273.815px] left-0 rounded-[30px] top-0 w-[270.595px] absolute" data-name="Image" />
        <ServiceIconContainer left="512.61px" top="206.94px" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28.918px] leading-[1.97] left-[19.65px] not-italic text-[16px] text-white top-[19.88px] tracking-[10.88px] uppercase w-[121.455px]">evolves</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[52.413px] leading-[1.2] left-[330.43px] not-italic text-[24px] text-white top-[48.8px] w-[192.006px]">Projecto KFW / MCTESTP</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[17.17px] leading-[1.2] left-[294.71px] not-italic text-[#a9c22f] text-[16px] top-[56.03px] w-[25.899px]">[01]</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[65.065px] leading-[normal] left-[331.32px] not-italic text-[#c9c9c9] text-[16px] top-[113.86px] w-[192.006px]">Fornecimento, instalação e pós-venda de sistemas de formação técnica e profissional (TVET) na Escola Profissional Familiar e Rural de Marrera</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[21.688px] leading-[normal] left-[418.84px] not-italic text-[#a9c22f] text-[16px] top-[213.27px] w-[79.482px]">Learn More</p>
      </CardWrapper>

      {/* First Row - Card 2: Escola Agrária de Marrera */}
      <CardWrapper onClick={() => handleCardClick('escola-agraria')} className="absolute left-[576.91px] top-[154.53px] w-[558.053px] h-[273.815px]">
        <div className="bg-[#1e1e1e] h-[234.053px] left-[198.26px] rounded-[30px] top-[19.88px] w-[360.793px] absolute" data-name="Service Background" />
        <div className="bg-[#c4c4c4] h-[273.815px] left-0 rounded-[30px] top-0 w-[270.595px] absolute" data-name="Image" />
        <ServiceIconContainer left="512.61px" top="206.94px" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28.918px] leading-[1.97] left-[19.65px] not-italic text-[16px] text-white top-[19.88px] tracking-[10.88px] uppercase w-[148.247px]">connects</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[52.413px] leading-[1.2] left-[330.43px] not-italic text-[24px] text-white top-[48.8px] w-[192.006px]">Escola Agrária de Marrera</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[17.17px] leading-[1.2] left-[294.71px] not-italic text-[#a9c22f] text-[16px] top-[56.03px] w-[29.471px]">[02]</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[65.065px] leading-[normal] left-[331.32px] not-italic text-[#c9c9c9] text-[16px] top-[113.86px] w-[192.006px]">Instalação completa de laboratórios, oficinas e equipamentos agrícolas</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[21.688px] leading-[normal] left-[418.84px] not-italic text-[#a9c22f] text-[16px] top-[213.27px] w-[79.482px]">Learn More</p>
      </CardWrapper>

      {/* Second Row - Card 3: Instituto Industrial de Inhambane */}
      <CardWrapper onClick={() => handleCardClick('instituto-inhambane')} className="absolute left-0 top-[446.42px] w-[558.053px] h-[273.815px]">
        <div className="bg-[#1e1e1e] h-[234.053px] left-[198.26px] rounded-[30px] top-[19.88px] w-[360.793px] absolute" data-name="Service Background" />
        <div className="bg-[#c4c4c4] h-[273.815px] left-0 rounded-[30px] top-0 w-[270.595px] absolute" data-name="Image" />
        <ServiceIconContainer1 left="512.61px" top="206.94px" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28.918px] leading-[1.97] left-[19.65px] not-italic text-[16px] text-white top-[19.88px] tracking-[10.88px] uppercase w-[104.487px]">unique</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[52px] leading-[1.2] left-[330px] not-italic text-[24px] text-white top-[49.2px] w-[219px]">Instituto Industrial de Inhambane</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[17.17px] leading-[1.2] left-[294.71px] not-italic text-[#a9c22f] text-[16px] top-[56.03px] w-[29.471px]">[03]</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[65.065px] leading-[normal] left-[331.32px] not-italic text-[#c9c9c9] text-[16px] top-[113.86px] w-[192.006px]">Equipamentos e Montagem de oficinas e laboratórios nas áreas Electricidade, eletrónica, maquinação, serralharia, soldadura, canalização e construção civil</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[21.688px] leading-[normal] left-[418.84px] not-italic text-[#a9c22f] text-[16px] top-[213.27px] w-[79.482px]">Learn More</p>
      </CardWrapper>

      {/* Second Row - Card 4: Escola Industrial e Comercial da Beira */}
      <CardWrapper onClick={() => handleCardClick('escola-beira')} className="absolute left-[576.91px] top-[446.42px] w-[558.053px] h-[273.815px]">
        <div className="bg-[#1e1e1e] h-[234.053px] left-[198.26px] rounded-[30px] top-[19.88px] w-[360.793px] absolute" data-name="Service Background" />
        <div className="bg-[#c4c4c4] h-[273.815px] left-0 rounded-[30px] top-0 w-[270.595px] absolute" data-name="Image" />
        <ServiceIconContainer1 left="512.61px" top="206.94px" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28.918px] leading-[1.97] left-[19.65px] not-italic text-[16px] text-white top-[19.88px] tracking-[10.88px] uppercase w-[127.706px]">Control</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[52px] leading-[1.2] left-[330px] not-italic text-[24px] text-white top-[49.2px] w-[279px]">Escola Industrial e Comercial da Beira</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[17.17px] leading-[1.2] left-[294.71px] not-italic text-[#a9c22f] text-[16px] top-[56.03px] w-[30.364px]">[04]</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[65.065px] leading-[normal] left-[331.32px] not-italic text-[#c9c9c9] text-[16px] top-[113.86px] w-[192.006px]">{`Equipamentos e montagem para oficinas de mecânica automóvel (chaparia, pintura, equipamentos de ensaio e inspeção de veículos) `}</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[21.688px] leading-[normal] left-[418.84px] not-italic text-[#a9c22f] text-[16px] top-[213.27px] w-[79.482px]">Learn More</p>
      </CardWrapper>

      {/* Third Row - Card 5: TOTAL */}
      <CardWrapper onClick={() => handleCardClick('total')} className="absolute left-[8.04px] top-[741.92px] w-[558.053px] h-[273.815px]">
        <div className="bg-[#1e1e1e] h-[234.053px] left-[198.26px] rounded-[30px] top-[19.88px] w-[360.793px] absolute" data-name="Service Background" />
        <div className="bg-[#c4c4c4] h-[273.815px] left-0 rounded-[30px] top-0 w-[270.595px] absolute" data-name="Image" />
        <ServiceIconContainer left="512.61px" top="206.94px" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28.918px] leading-[1.97] left-[19.65px] not-italic text-[16px] text-white top-[19.88px] tracking-[10.88px] uppercase w-[121.455px]">evolves</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[52.413px] leading-[1.2] left-[330.43px] not-italic text-[24px] text-white top-[48.8px] w-[192.006px]">TOTAL</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[17.17px] leading-[1.2] left-[294.71px] not-italic text-[#a9c22f] text-[16px] top-[56.03px] w-[25.899px]">[01]</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[65.065px] leading-[normal] left-[331.32px] not-italic text-[#c9c9c9] text-[16px] top-[113.86px] w-[192.006px]">Fornecimento e instalação de mobiliário de escritório em Muxara e Afungi</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[21.688px] leading-[normal] left-[418.84px] not-italic text-[#a9c22f] text-[16px] top-[213.27px] w-[79.482px]">Learn More</p>
      </CardWrapper>

      {/* Third Row - Card 6: IFPELAC */}
      <CardWrapper onClick={() => handleCardClick('ifpelac')} className="absolute left-[584.95px] top-[741.92px] w-[558.053px] h-[273.815px]">
        <div className="bg-[#1e1e1e] h-[234.053px] left-[198.26px] rounded-[30px] top-[19.88px] w-[360.793px] absolute" data-name="Service Background" />
        <div className="bg-[#c4c4c4] h-[273.815px] left-0 rounded-[30px] top-0 w-[270.595px] absolute" data-name="Image" />
        <ServiceIconContainer left="512.61px" top="206.94px" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28.918px] leading-[1.97] left-[19.65px] not-italic text-[16px] text-white top-[19.88px] tracking-[10.88px] uppercase w-[148.247px]">connects</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[52.413px] leading-[1.2] left-[330.43px] not-italic text-[24px] text-white top-[48.8px] w-[192.006px]">IFPELAC</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[17.17px] leading-[1.2] left-[294.71px] not-italic text-[#a9c22f] text-[16px] top-[56.03px] w-[29.471px]">[02]</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[65.065px] leading-[normal] left-[331.32px] not-italic text-[#c9c9c9] text-[16px] top-[113.86px] w-[192.006px]">Vários fornecimentos de equipamentos e ferramentas para centros de formação profissional em Maputo, Chimoio, Pemba e Tete.</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[21.688px] leading-[normal] left-[418.84px] not-italic text-[#a9c22f] text-[16px] top-[213.27px] w-[79.482px]">Learn More</p>
      </CardWrapper>

      {/* Fourth Row - Card 7: EDM */}
      <CardWrapper onClick={() => handleCardClick('edm')} className="absolute left-[8.04px] top-[1033.81px] w-[558.053px] h-[273.815px]">
        <div className="bg-[#1e1e1e] h-[234.053px] left-[198.26px] rounded-[30px] top-[19.88px] w-[360.793px] absolute" data-name="Service Background" />
        <div className="bg-[#c4c4c4] h-[273.815px] left-0 rounded-[30px] top-0 w-[270.595px] absolute" data-name="Image" />
        <ServiceIconContainer left="512.61px" top="206.94px" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28.918px] leading-[1.97] left-[19.65px] not-italic text-[16px] text-white top-[19.88px] tracking-[10.88px] uppercase w-[104.487px]">unique</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[52.413px] leading-[1.2] left-[330.43px] not-italic text-[24px] text-white top-[48.8px] w-[150.033px]">EDM</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[17.17px] leading-[1.2] left-[294.71px] not-italic text-[#a9c22f] text-[16px] top-[56.03px] w-[29.471px]">[03]</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[65.065px] leading-[normal] left-[331.32px] not-italic text-[#c9c9c9] text-[16px] top-[113.86px] w-[192.006px]">Instalação de oficinas e laboratórios de eletricidade, mecânica e testes de óleo.</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[21.688px] leading-[normal] left-[418.84px] not-italic text-[#a9c22f] text-[16px] top-[213.27px] w-[79.482px]">Learn More</p>
      </CardWrapper>

      {/* Fourth Row - Card 8: SEETP */}
      <CardWrapper onClick={() => handleCardClick('seetp')} className="absolute left-[584.95px] top-[1033.81px] w-[558.053px] h-[273.815px]">
        <div className="bg-[#1e1e1e] h-[234.053px] left-[198.26px] rounded-[30px] top-[19.88px] w-[360.793px] absolute" data-name="Service Background" />
        <div className="bg-[#c4c4c4] h-[273.815px] left-0 rounded-[30px] top-0 w-[270.595px] absolute" data-name="Image" />
        <ServiceIconContainer left="512.61px" top="206.94px" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28.918px] leading-[1.97] left-[19.65px] not-italic text-[16px] text-white top-[19.88px] tracking-[10.88px] uppercase w-[127.706px]">Control</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[52.413px] leading-[1.2] left-[330.43px] not-italic text-[24px] text-white top-[48.8px] w-[132.172px]">SEETP</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[17.17px] leading-[1.2] left-[294.71px] not-italic text-[#a9c22f] text-[16px] top-[56.03px] w-[30.364px]">[04]</p>
        <ul className="absolute block font-['Poppins:Regular',sans-serif] h-[65.065px] leading-[0] left-[331.32px] not-italic text-[#c9c9c9] text-[16px] top-[113.86px] w-[192.006px]">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[normal]">Fornecimento de Equipamentos de frio, Electricidade, Carpintaria e Mobiliário de Dormitório, Oficina de gesso cortado, pintura e Oficina de Carpintaria, instalação, treinamento e assistência as seguintes instituições:</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[normal]">Escola Industrial 1º de Maio (Equipamento de Frio);</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[normal]">Instituto Industrial e Comercial Engº Filipe Jacinto Nyusi de Namáua;</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[normal]">{` Instituto Médio Politécnico de Murrupula.`}</span>
          </li>
        </ul>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[21.688px] leading-[normal] left-[418.84px] not-italic text-[#a9c22f] text-[16px] top-[213.27px] w-[79.482px]">Learn More</p>
      </CardWrapper>

      {/* Fifth Row - Card 9: MIREME & INAMI */}
      <CardWrapper onClick={() => handleCardClick('mireme-inami')} className="absolute left-[7px] top-[1329.62px] w-[558.053px] h-[273.815px]">
        <div className="bg-[#1e1e1e] h-[234.053px] left-[198.26px] rounded-[30px] top-[19.88px] w-[360.793px] absolute" data-name="Service Background" />
        <div className="bg-[#c4c4c4] h-[273.815px] left-0 rounded-[30px] top-0 w-[270.595px] absolute" data-name="Image" />
        <ServiceIconContainer left="512.61px" top="206.94px" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[28.918px] leading-[1.97] left-[19.65px] not-italic text-[16px] text-white top-[19.88px] tracking-[10.88px] uppercase w-[121.455px]">evolves</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[52.413px] leading-[1.2] left-[330.43px] not-italic text-[24px] text-white top-[48.8px] w-[192.006px]">{`MIREME & INAMI`}</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[17.17px] leading-[1.2] left-[294.71px] not-italic text-[#a9c22f] text-[16px] top-[56.03px] w-[25.899px]">[01]</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[65.065px] leading-[normal] left-[331.32px] not-italic text-[#c9c9c9] text-[16px] top-[113.86px] w-[192.006px]">Fornecimento de equipamento sísmico e de laboratório para geologia.</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] h-[21.688px] leading-[normal] left-[418.84px] not-italic text-[#a9c22f] text-[16px] top-[213.27px] w-[79.482px]">Learn More</p>
      </CardWrapper>
    </div>
  );
}