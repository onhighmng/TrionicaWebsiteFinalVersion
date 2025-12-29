import svgPaths from "./svg-9wi6sitilu";
import imgImage from "figma:asset/9dfd245b006840cadaf970a404f38325048163c5.png";

interface FrameProps {
  onNavigate?: (page: string) => void;
}

function Icon() {
  return (
    <div className="h-[0.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.03%_1.33%_66.97%_0]" data-name="Underline">
        <div className="absolute inset-[-0.27px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.404 0.536079">
            <path d="M0 0.26804H59.404" id="Underline" opacity="0.7" stroke="var(--stroke-0, #4C4C4C)" strokeWidth="0.536079" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.656px] items-start left-0 top-[-0.66px] w-[60.203px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[13.211px] left-0 top-[6.6px] w-[60.203px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[13.213px] left-0 text-[#222] text-[9.249px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        01.
      </p>
    </div>
  );
}

function No1() {
  return (
    <div className="absolute h-[19.813px] left-0 top-[570.79px] w-[60.203px]" data-name="No3">
      <Container />
      <Paragraph />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[0.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.03%_0_66.97%_0]" data-name="Underline">
        <div className="absolute inset-[-0.26px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3906 0.523398">
            <path d="M0 0.261699H13.3906" id="Underline" opacity="0.7" stroke="var(--stroke-0, #C6C6C6)" strokeWidth="0.523398" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.656px] items-start left-0 top-[-0.66px] w-[13.391px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[13.211px] left-0 top-[6.6px] w-[13.391px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[13.213px] left-0 text-[#222] text-[9.249px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        02.
      </p>
    </div>
  );
}

function No() {
  return (
    <div className="absolute h-[19.813px] left-[76.05px] top-[570.79px] w-[13.391px]" data-name="No1">
      <Container1 />
      <Paragraph1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[0.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.03%_0_66.97%_0]" data-name="Underline">
        <div className="absolute inset-[-0.26px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6172 0.527806">
            <path d="M0 0.263903H13.6172" id="Underline" opacity="0.7" stroke="var(--stroke-0, #C6C6C6)" strokeWidth="0.527806" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.656px] items-start left-0 top-[-0.66px] w-[13.617px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[13.211px] left-0 top-[6.6px] w-[13.617px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[13.213px] left-0 text-[#222] text-[9.249px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        03.
      </p>
    </div>
  );
}

function No2() {
  return (
    <div className="absolute h-[19.813px] left-[105.3px] top-[570.79px] w-[13.617px]" data-name="No22">
      <Container2 />
      <Paragraph2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[570.79px]">
      <No1 />
      <No />
      <No2 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[584px] left-0 top-0 w-[1035.867px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="basis-0 grow h-[17.102px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[17.103px] left-0 text-[#6549f6] text-[14.965px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Home
        </p>
      </div>
    </div>
  );
}

function ButtonNavButton({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div
      className="absolute bg-[rgba(247,246,255,0.97)] content-stretch flex h-[42.742px] items-center left-[19.27px] px-[12.82px] py-0 rounded-[25.655px] top-[-5.37px] w-[68.539px] cursor-pointer hover:bg-[rgba(247,246,255,1)] transition-colors"
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
      className="absolute h-[17.102px] left-[122.02px] top-[7.45px] w-[74.5px] cursor-pointer hover:opacity-70 transition-opacity"
      data-name="ButtonNavButton1"
      onClick={() => onNavigate?.('sobre-nos')}
    >
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[17.103px] left-0 text-[14.965px] text-black text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sobre Nós
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[17.102px] relative shrink-0 w-[66.563px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[17.103px] left-0 text-[14.965px] text-black text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Soluções
        </p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[17.527px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[7.29%_15.38%_14.97%_13.36%]" data-name="nav-arrow-down">
        <div className="absolute inset-[-9.66%_-18.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.85769 16.2566">
            <path d={svgPaths.pc71300} id="nav-arrow-down" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6312" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[5.867px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[4.273px] relative w-[8.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[-0.797px] px-[-0.797px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function ButtonNavButton2() {
  return (
    <div className="absolute content-stretch flex gap-[8.543px] h-[34.195px] items-center left-[230.72px] top-[-1.09px] w-[83.656px]" data-name="ButtonNavButton2">
      <Paragraph4 />
      <div className="flex h-[8.547px] items-center justify-center relative shrink-0 w-[4.273px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
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
      className="absolute h-[17.102px] left-[348.58px] top-[7.45px] w-[62.148px] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="ButtonNavButton3"
      onClick={() => onNavigate?.('blog')}
    >
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[17.103px] left-0 text-[#222] text-[14.965px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Portfolio
      </p>
    </div>
  );
}

function Navigation({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute h-[32px] left-[303px] top-[22px] w-[430px]" data-name="Navigation">
      <ButtonNavButton onNavigate={onNavigate} />
      <ButtonNavButton1 onNavigate={onNavigate} />
      <ButtonNavButton2 />
      <ButtonNavButton3 onNavigate={onNavigate} />
    </div>
  );
}

function ImageBg({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute h-[584px] left-0 top-0 w-[1035.867px]" data-name="ImageBg">
      <Image />
      <Navigation onNavigate={onNavigate} />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[160px] left-[95.13px] top-[159.87px] w-[524px]" data-name="Paragraph">
      <p className="absolute font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[80px] left-0 text-[72px] text-white top-[-0.5px] w-[477px]">Onde o Futuro Começa</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[56px] left-[95.13px] top-[346.29px] w-[571px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[28px] left-0 text-[#f9f9f9] text-[18px] top-0 w-[495px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[18px] left-[28px] top-[15px] w-[155.063px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[15px] text-nowrap text-white top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Conheça-nos Melhor
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[18.75%] right-[18.75%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
            <path d="M1 5H11M11 5L7 1M11 5L7 9" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[191.06px] size-[16px] top-[16px]" data-name="ArrowRight11">
      <Icon4 />
    </div>
  );
}

function Button1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div 
      className="absolute bg-[#6549f6] h-[48px] left-0 rounded-[26.425px] top-0 w-[235.063px] cursor-pointer hover:bg-[#5538d4] transition-colors pointer-events-auto" 
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
    <div className="absolute h-[18px] left-[28px] top-[15px] w-[140.625px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#222] text-[15px] text-nowrap top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contacte-nos Hoje
      </p>
    </div>
  );
}

function Button({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div 
      className="absolute bg-white h-[48px] left-[251.06px] rounded-[26.425px] top-0 w-[196.625px] cursor-pointer hover:bg-gray-100 transition-colors pointer-events-auto" 
      data-name="Button1"
      onClick={() => onNavigate?.('contacte-nos')}
    >
      <Paragraph8 />
    </div>
  );
}

function Cta({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute h-[48px] left-[95.13px] top-[428.71px] w-[423.688px]" data-name="Cta2">
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

export default function Frame({ onNavigate }: FrameProps) {
  return (
    <div className="relative size-full">
      <Group1 onNavigate={onNavigate} />
    </div>
  );
}