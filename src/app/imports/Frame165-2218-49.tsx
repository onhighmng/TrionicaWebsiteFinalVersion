import svgPaths from "./svg-9lbrpfm5p4";
import imgVideo from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import imgImage from "figma:asset/2afa164c020a99b0391ed4c6b661a238499e6d5d.png";
import Frame169 from "./Frame169";

function Paragraph() {
  return (
    <div className="h-[19.44px] relative shrink-0 w-[396.72px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.916px] left-0 not-italic text-[#575757] text-[15.333px] top-0 tracking-[-0.2995px] w-[289.413px]">•Instalação completa dos equipamentos</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20.16px] relative shrink-0 w-[396.72px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.916px] left-0 not-italic text-[#575757] text-[15.333px] text-nowrap top-[-0.48px] tracking-[-0.2995px]">•Treinamento para uso adequado</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.44px] relative shrink-0 w-[396.72px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.916px] left-0 not-italic text-[#575757] text-[15.333px] text-nowrap top-[-0.48px] tracking-[-0.2995px]">•Assistência pós-venda em todo o país</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.44px] relative shrink-0 w-[396.72px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.916px] left-0 not-italic text-[#575757] text-[15.333px] text-nowrap top-[-0.48px] tracking-[-0.2995px]">•Serviços de manutenção, diagnóstico e calibração</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[38.88px] relative shrink-0 w-[396.72px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.916px] left-0 not-italic text-[#575757] text-[15.333px] top-0 tracking-[-0.2995px] w-[400.578px]">Fornecimento de peças de reposição de alta qualidade</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Epilogue:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[48px] text-black w-[min-content]">
        <span className="text-[#d40303] inline-block animate-spin">✱</span>
        <span>{` Nossa História`}</span>
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575757] text-[16px] w-[306px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        A nossa equipa técnica é formada por especialistas treinados em Moçambique e no estrangeiro, garantindo:
      </p>
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575757] text-[16px] w-[306px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Estamos ao lado dos nossos clientes desde o primeiro contacto até ao suporte contínuo, assegurando fiabilidade e segurança operacional.
      </p>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-up-right">
          <path d={svgPaths.p354a80} fill="var(--fill-0, #242424)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Icon">
      <ArrowUpRight />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0046a2] content-stretch flex gap-[16px] items-center justify-center pl-[20px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#fdfdfd] text-[18px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contactar
      </p>
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-0 top-[50px] pb-[120px] w-[600px]" data-name="Content">
      <Text />
      <Button />
    </div>
  );
}

function PlayIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="play">
          <path d={svgPaths.p1202b300} fill="var(--fill-0, #242424)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex items-center justify-center pl-[19px] pr-[16px] py-[16px] relative rounded-[100px] shrink-0 size-[54px]" data-name="Icon">
      <PlayIcon />
    </div>
  );
}

function Video() {
  return (
    <div className="absolute content-stretch flex items-center justify-center right-0 top-0 w-[550px] h-[580px] rounded-[24px]" data-name="Video">
      <iframe 
        className="absolute inset-0 rounded-[24px] size-full"
        src="https://www.youtube.com/embed/htXb2VVsKpw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function Icon2() {
  return null;
}

function Badge() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[749px] top-[265.67px]" data-name="Badge">
      <Icon2 />
    </div>
  );
}

function About() {
  return (
    <div className="absolute contents left-0 top-0" data-name="About">
      <Content />
      <Video />
      <div className="absolute left-[816px] top-[147.57px]">
        <Frame169 />
      </div>
      <p className="absolute font-['Epilogue:Medium',sans-serif] font-medium h-[24px] leading-[1.2] left-[calc(50%-600px)] text-[#575757] text-[20px] top-0 uppercase w-[180px]">01 / SOBRE NÓS</p>
      <Badge />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <About />
    </div>
  );
}