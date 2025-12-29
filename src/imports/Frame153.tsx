import svgPaths from "./svg-p7x4nj3xsv";
import imgVideo from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import imgImage from "figma:asset/5b31ded0dbe4caf6e1c952bf5849601281dcffd1.png";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <p className="font-['Epilogue:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[48px] text-black w-[min-content]">
        <span className="text-[#d40303]">✱</span>
        <span>{` Nossa História`}</span>
      </p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575757] text-[16px] w-[306px]" style={{ fontVariationSettings: "'opsz' 14" }}>
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
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[524.592px] items-start left-[268.77px] top-[62.41px] w-[516.46px]" data-name="Content">
      <Text />
      <Button />
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
    <div className="absolute content-stretch flex h-[176.882px] items-center justify-center left-[861.65px] px-[78px] py-[77px] rounded-[20px] top-0 w-[179.18px]" data-name="Video">
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
    <div className="absolute bg-[#ee701f] content-stretch flex items-center justify-center left-[calc(50%-0.11px)] rounded-[30px] size-[44px] top-[calc(50%-0.59px)] translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <ArrowUpRight1 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute content-stretch flex h-[102.437px] items-center justify-center left-[657.87px] top-[302.97px] w-[99.476px]" data-name="Badge">
      <Icon2 />
    </div>
  );
}

function StatCard() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-nowrap top-0" data-name="Stat Card">
      <p className="absolute left-0 text-[#484848] text-[16px] top-[60px]">
        <span className="text-[#a9c22f]">[</span>Clientes Satisfeitos<span className="text-[#a9c22f]">]</span>
      </p>
      <p className="absolute left-0 text-[#2d2d2d] text-[40px] top-0">100+</p>
    </div>
  );
}

function StatCard1() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-nowrap top-[140.33px]" data-name="Stat Card">
      <p className="absolute left-0 text-[#484848] text-[16px] top-[200.33px]">
        <span className="text-[#a9c22f]">[</span>Taxa de Sucesso<span className="text-[#a9c22f]">]</span>
      </p>
      <p className="absolute left-0 text-[#2d2d2d] text-[40px] top-[140.33px]">95%</p>
    </div>
  );
}

function StatCard2() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-nowrap top-[280.67px]" data-name="Stat Card">
      <p className="absolute left-0 text-[#484848] text-[16px] top-[340.67px]">
        <span className="text-[#a9c22f]">[</span>Áreas<span className="text-[#a9c22f]">]</span>
      </p>
      <p className="absolute left-0 text-[#2d2d2d] text-[40px] top-[280.67px]">5</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[345.507px] left-0 top-[132.96px] w-[148.438px]">
      <StatCard />
      <StatCard1 />
      <StatCard2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Content />
      <Video />
      <Badge />
      <div className="absolute h-[316.629px] left-[716.72px] top-[195.88px] w-[337.28px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="316.629" src={imgImage} width="337.28" />
      </div>
      <p className="absolute font-['Epilogue:Medium',sans-serif] font-medium h-[21.707px] leading-[1.2] left-[calc(50%-527px)] text-[#575757] text-[20px] top-[62.41px] uppercase w-[158.1px]">01 / Trionica</p>
      <Frame />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}