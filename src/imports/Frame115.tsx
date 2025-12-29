import svgPaths from "./svg-fvbqcyypqa";
import imgImage from "figma:asset/9dfd245b006840cadaf970a404f38325048163c5.png";

interface FrameProps {
  onNavigate?: (page: string) => void;
}

function Icon() {
  return (
    <div className="h-[0.853px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.04%_1.33%_66.96%_0]" data-name="Underline">
        <div className="absolute inset-[-0.35px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.2252 0.696903">
            <path d="M0 0.348451H77.2252" id="Underline" opacity="0.7" stroke="var(--stroke-0, #4C4C4C)" strokeWidth="0.696903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.853px] items-start left-0 top-[-0.85px] w-[78.264px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[17.174px] left-0 top-[8.58px] w-[78.264px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[17.177px] left-0 text-[#222] text-[12.024px] text-nowrap top-[-0.65px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        01.
      </p>
    </div>
  );
}

function No1() {
  return (
    <div className="absolute h-[25.756px] left-0 top-[742.03px] w-[78.264px]" data-name="No3">
      <Container />
      <Paragraph />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[0.853px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.04%_0_66.96%_0]" data-name="Underline">
        <div className="absolute inset-[-0.34px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4078 0.680417">
            <path d="M0 0.340208H17.4078" id="Underline" opacity="0.7" stroke="var(--stroke-0, #C6C6C6)" strokeWidth="0.680417" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.853px] items-start left-0 top-[-0.85px] w-[17.408px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[17.174px] left-0 top-[8.58px] w-[17.408px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[17.177px] left-0 text-[#222] text-[12.024px] text-nowrap top-[-0.65px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        02.
      </p>
    </div>
  );
}

function No() {
  return (
    <div className="absolute h-[25.756px] left-[98.87px] top-[742.03px] w-[17.408px]" data-name="No1">
      <Container1 />
      <Paragraph1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[0.853px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.04%_0_66.96%_0]" data-name="Underline">
        <div className="absolute inset-[-0.34px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7024 0.686148">
            <path d="M0 0.343074H17.7024" id="Underline" opacity="0.7" stroke="var(--stroke-0, #C6C6C6)" strokeWidth="0.686148" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.853px] items-start left-0 top-[-0.85px] w-[17.702px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[17.174px] left-0 top-[8.58px] w-[17.702px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[17.177px] left-0 text-[#222] text-[12.024px] text-nowrap top-[-0.65px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        03.
      </p>
    </div>
  );
}

function No2() {
  return (
    <div className="absolute h-[25.756px] left-[136.89px] top-[742.03px] w-[17.702px]" data-name="No22">
      <Container2 />
      <Paragraph2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[742.03px]">
      <No1 />
      <No />
      <No2 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[759.2px] left-0 top-0 w-[1346.627px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[100.01%]" src={imgImage} />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="basis-0 grow h-[22.232px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[#6549f6] text-[19.455px] text-nowrap top-[-0.65px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Home
        </p>
      </div>
    </div>
  );
}

function ButtonNavButton({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div
      className="absolute bg-[rgba(247,246,255,0.97)] content-stretch flex h-[55.565px] items-center left-[25.06px] px-[16.666px] py-0 rounded-[33.352px] top-[-6.98px] w-[89.101px] cursor-pointer hover:bg-[rgba(247,246,255,1)] transition-colors"
      data-name="ButtonNavButton"
      onClick={() => onNavigate?.('home')}
    >
      <Paragraph3 />
    </div>
  );
}

function ButtonNavButton1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div
      className="absolute h-[22.232px] left-[158.62px] top-[9.69px] w-[96.85px] cursor-pointer hover:opacity-70 transition-opacity"
      data-name="ButtonNavButton1"
      onClick={() => onNavigate?.('sobre-nos')}
    >
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[19.455px] text-black text-nowrap top-[-0.65px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sobre Nós
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[22.232px] relative shrink-0 w-[86.531px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[19.455px] text-black text-nowrap top-[-0.65px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Soluções
        </p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[22.785px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[7.29%_15.38%_14.97%_13.36%]" data-name="nav-arrow-down">
        <div className="absolute inset-[-9.66%_-18.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.815 21.1336">
            <path d={svgPaths.peb56a00} id="nav-arrow-down" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.42056" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[7.627px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[5.555px] relative w-[11.111px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[-1.036px] px-[-1.036px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function ButtonNavButton2() {
  return (
    <div className="absolute content-stretch flex gap-[11.106px] h-[44.454px] items-center left-[299.93px] top-[-1.42px] w-[108.753px]" data-name="ButtonNavButton2">
      <Paragraph4 />
      <div className="flex h-[11.111px] items-center justify-center relative shrink-0 w-[5.555px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function ButtonNavButton3({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div
      className="absolute h-[22.232px] left-[453.15px] top-[9.69px] w-[80.793px] cursor-pointer hover:opacity-70 transition-opacity"
      data-name="ButtonNavButton3"
      onClick={() => onNavigate?.('blog')}
    >
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[#222] text-[19.455px] text-nowrap top-[-0.65px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Portfolio
      </p>
    </div>
  );
}

function Navigation({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute h-[41.6px] left-[393.9px] top-[28.6px] w-[559px]" data-name="Navigation">
      <ButtonNavButton onNavigate={onNavigate} />
      <ButtonNavButton1 onNavigate={onNavigate} />
      <ButtonNavButton2 />
      <ButtonNavButton3 onNavigate={onNavigate} />
    </div>
  );
}

function ImageBg({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute h-[759.2px] left-0 top-0 w-[1346.627px]" data-name="ImageBg">
      <Image />
      <Navigation onNavigate={onNavigate} />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[208px] left-[123.66px] top-[207.83px] w-[681.2px]" data-name="Paragraph">
      <p className="absolute font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[104px] left-0 text-[93.6px] text-white top-[-0.65px] w-[620.1px]">Onde o Futuro Começa</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[72.8px] left-[123.66px] top-[450.18px] w-[742.3px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[36.4px] left-0 text-[#f9f9f9] text-[23.4px] top-0 w-[643.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[23.4px] left-[36.4px] top-[19.5px] w-[201.581px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[23.4px] left-0 text-[19.5px] text-nowrap text-white top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Conheça-nos Melhor
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20.8px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[18.75%] right-[18.75%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6 13">
            <path d={svgPaths.p11c2b040} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[248.38px] size-[20.8px] top-[20.8px]" data-name="ArrowRight11">
      <Icon4 />
    </div>
  );
}

function Button1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div
      className="absolute bg-[#6549f6] h-[62.4px] left-0 rounded-[34.353px] top-0 w-[305.581px] cursor-pointer hover:bg-[#5538d4] transition-colors"
      data-name="Button15"
      onClick={() => onNavigate?.('sobre-nos')}
    >
      <Paragraph7 />
      <ArrowRight />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[23.4px] left-[36.4px] top-[19.5px] w-[182.813px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[23.4px] left-0 text-[#222] text-[19.5px] text-nowrap top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contacte-nos Hoje
      </p>
    </div>
  );
}

function Button({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div
      className="absolute bg-white h-[62.4px] left-[326.38px] rounded-[34.353px] top-0 w-[255.613px] cursor-pointer hover:bg-gray-100 transition-colors"
      data-name="Button1"
      onClick={() => onNavigate?.('contacte-nos')}
    >
      <Paragraph8 />
    </div>
  );
}

function Cta({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute h-[62.4px] left-[123.66px] top-[557.32px] w-[550.794px]" data-name="Cta2">
      <Button1 onNavigate={onNavigate} />
      <Button onNavigate={onNavigate} />
    </div>
  );
}

function Group1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
      <ImageBg onNavigate={onNavigate} />
      <Paragraph5 />
      <Paragraph6 />
      <Cta onNavigate={onNavigate} />
    </div>
  );
}

function Frame({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute h-[767.782px] left-0 top-0 w-[1346.627px]">
      <Group1 onNavigate={onNavigate} />
    </div>
  );
}

export default function Frame1({ onNavigate }: FrameProps) {
  return (
    <div className="relative w-full h-[1100px] overflow-hidden">
      <Frame onNavigate={onNavigate} />
    </div>
  );
}