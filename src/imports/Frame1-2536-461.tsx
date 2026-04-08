import imgUnion from "figma:asset/96f96b17c5fcf5f0537a7577cb0341d10c0558e2.png";
import imgUnion1 from "figma:asset/6a22570eeac45c73383df24364a1f8a0b34dc74d.png";
import imgUnion2 from "figma:asset/92a7f61b249712ca60bec2ba142e35515aae7b0a.png";
import imgUnion3 from "figma:asset/1b38e673a1e839e28a809a1a80db2c541b9236e9.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center w-full" data-name="Content">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#0c1313] text-[52px] text-nowrap tracking-[-1.04px]">SOBRE NÓS</p>
      <div className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#5c6161] text-[18px] tracking-[-0.216px] w-[min-content]">
        <p className="mb-0">A Triónica Moçambique Lda. é uma empresa moçambicana sediada na cidade de Maputo, especializada no desenvolvimento de soluções tecnológicas e na implementação de projetos em diversas áreas estratégicas.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Desde 2010, dedicamo-nos ao fornecimento de equipamentos de laboratório e tecnologias avançadas para os sectores de Ensino e Investigação, Saúde, Águas, Ambiente e Minas, garantido qualidade, inovação e fiabilidade.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Com uma equipa de profissionais altamente qualificados, acumulamos 15 anos de experiência que se refletem na excelência dos nossos serviços, na formação contínua dos nossos parceiros e na manutenção rigorosa dos equipamentos fornecidos. O reconhecimento dos nossos clientes é um dos nossos maiores indicadores de sucesso.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#245454] content-stretch flex h-[50px] items-center justify-center overflow-clip px-[32px] py-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-center text-nowrap text-shadow-[0.5px_0.5px_4px_rgba(0,0,0,0.25)] text-white tracking-[-0.192px]">{`ROLE PARA EXPLORAR `}</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-[320px] top-[43px] w-[640px]" data-name="Content">
      <Content />
      <Button />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="h-[693px] relative shrink-0 w-full" data-name="About Us">
      <Content1 />
      <div className="absolute h-[250px] left-[-39px] top-[-15px] w-[300.002px]" data-name="Union">
        <img alt="" className="block max-w-none size-full" height="250" src={imgUnion} width="300.002" />
      </div>
      <div className="absolute h-[250px] left-[-39px] top-[543px] w-[300px]" data-name="Union">
        <img alt="" className="block max-w-none size-full" height="250" src={imgUnion1} width="300" />
      </div>
      <div className="absolute h-[250px] left-[1019px] top-[543px] w-[300.001px]" data-name="Union">
        <img alt="" className="block max-w-none size-full" height="250" src={imgUnion2} width="300.001" />
      </div>
      <div className="absolute h-[250px] left-[1019px] top-[-15px] w-[300.001px]" data-name="Union">
        <img alt="" className="block max-w-none size-full" height="250" src={imgUnion3} width="300.001" />
      </div>
    </div>
  );
}

function AboutUs1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[870px] items-center left-0 pb-[97px] pt-[80px] px-[80px] top-0 w-[1440px]" data-name="About Us">
      <AboutUs />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <AboutUs1 />
    </div>
  );
}