import svgPaths from "./svg-l99v3k08cl";
import imgVideo from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import imgImage from "figma:asset/2afa164c020a99b0391ed4c6b661a238499e6d5d.png";

function Text() {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[20px] items-start leading-[0] w-full" data-name="Text">
      <p className="font-['Epilogue:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium leading-[1.2] text-[28px] md:text-[38px] lg:text-[48px] text-black">
        <span className="text-[#d40303]">✱</span>
        <span>{` Nossa História`}</span>
      </p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] text-[#575757] text-[14px] md:text-[16px] w-full max-w-full md:max-w-[400px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">A nossa equipa técnica é formada por especialistas treinados em Moçambique e no estrangeiro, garantindo:</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          •Instalação completa dos equipamentos
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="mb-0">
          •Treinamento para uso adequado
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="mb-0">
          •Assistência pós-venda em todo o país
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="mb-0">
          •Serviços de manutenção, diagnóstico e calibração
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="mb-0">•Fornecimento de peças de reposição de alta qualidade</p>
        <p className="mb-0">&nbsp;</p>
        <p>Estamos ao lado dos nossos clientes desde o primeiro contacto até ao suporte contínuo, assegurando fiabilidade e segurança operacional.</p>
      </div>
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
    <div className="relative w-full md:absolute md:left-[150px] lg:left-[306px] md:top-[69px] md:w-[450px] lg:w-[588px] px-4 md:px-0 py-6 md:py-0" data-name="Content">
      <Text />
      <div className="mt-6 md:mt-8">
        <Button />
      </div>
    </div>
  );
}

function Play() {
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
      <Play />
    </div>
  );
}

function Video() {
  return (
    <div className="hidden lg:flex absolute h-[195.564px] items-center justify-center left-[981px] px-[78px] py-[77px] rounded-[20px] top-0 w-[204px]" data-name="Video">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgVideo} />
      <Icon1 />
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-up-right">
          <path d={svgPaths.p1542ed00} fill="var(--fill-0, #FDFDFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute bg-[#ee701f] content-stretch flex items-center justify-center left-1/2 rounded-[30px] size-[44px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <ArrowUpRight1 />
    </div>
  );
}

function Badge() {
  return (
    <div className="hidden lg:flex absolute items-center justify-center left-[749px] top-[334.97px]" data-name="Badge">
      <Icon2 />
    </div>
  );
}

function About() {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px]" data-name="About">
      <Content />
      <Video />
      <Badge />
      <div className="hidden lg:block absolute h-[350.071px] left-[816px] top-[216.57px] w-[384px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="350.071" src={imgImage} width="384" />
      </div>
      <p className="hidden md:block absolute font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] left-4 md:left-[calc(50%-600px)] text-[#575757] text-[16px] md:text-[20px] top-[20px] md:top-[69px] uppercase">01 / Trionica</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px]">
      <About />
    </div>
  );
}