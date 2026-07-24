import svgPaths from "./svg-h4pr4z8tj9";
import Frame112Image from "./Frame112-2559-7";

function VerticalCutReveal() {
  return <div className="h-[105.594px] shrink-0 w-full" data-name="VerticalCutReveal" />;
}

function Ensino() {
  return (
    <div className="h-[130px] relative shrink-0 w-full" data-name="Ensino">
    </div>
  );
}

function Container() {
  return (
    <div className="[grid-area:1_/_1] blur-[0px] content-stretch filter flex flex-col items-start relative shrink-0 w-[571px]" data-name="Container">
      <Ensino />
    </div>
  );
}

function Ensino1() {
  return <div className="[grid-area:1_/_2] blur-[0px] filter shrink-0 w-[273px]" data-name="Ensino" />;
}

function Container1() {
  return (
    <div className="blur-[0px] filter gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[182px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Ensino1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[299px] items-start left-[52px] top-[678px] w-[639px]" data-name="Container">
      <VerticalCutReveal />
      <Container1 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-right">
          <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 3.75L14.25 9L9 14.25" id="Vector_2" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#bbf814] content-stretch flex gap-[10px] h-[46.357px] items-center justify-center left-[782.92px] px-[33px] py-[15px] rounded-[35px] top-[593.37px] w-[184.652px] hidden" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#010101] text-[16px] text-nowrap tracking-[-0.3125px]">CONTACTAR</p>
      <ArrowRight />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[56px] relative shrink-0 w-[130px] hidden" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 56">
        <g id="Image">
          <circle cx="28" cy="28" fill="var(--fill-0, #C4C4C4)" id="Image_2" r="26.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
          <circle cx="65" cy="28" fill="var(--fill-0, #C4C4C4)" id="Image_3" r="26.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
          <circle cx="102" cy="28" fill="var(--fill-0, #C4C4C4)" id="Image_4" r="26.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function People() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="People">
      <Image />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[172px]" data-name="Content">
      <People />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.15] relative shrink-0 text-[#1c1716] text-[20px] w-[188px]">Junte-se ao Futuro da Educação</p>
    </div>
  );
}

function People1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[50.78px] px-[24px] py-[20px] rounded-[15px] top-[428.22px] w-[220px] hidden" data-name="People">
      <Content />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Section 01">
      <Button />
      <div className="absolute h-[662.907px] left-0 top-0 w-[1167px] rounded-[15px] overflow-hidden" data-name="Image">
        <Frame112Image />
      </div>
      <People1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[662.907px] left-[17px] top-[200px] w-[1167px]">
      <Section />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[30.48px] relative w-[30.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[28px] left-[1.39px] not-italic text-[#2354a2] text-[32px] text-nowrap top-[-0.56px] tracking-[-0.4492px] animate-spin">✱</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="blur-[0px] filter h-[20px] relative shrink-0 w-[52.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[22px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Ensino &amp; Investigação</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[0.364px] h-[97px] items-center left-0 pl-[-7.636px] pr-0 py-0 top-0 w-[160px]" data-name="Container">
      <div className="flex h-[42.874px] items-center justify-center relative shrink-0 w-[42.866px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[316.003deg]">
          <Text />
        </div>
      </div>
      <Text1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[977px] left-0 top-0 w-[1184px]">
      <Container2 />
      <Frame />
      <p className="hidden">Equipamentos Educacionais | Soluções Científicas</p>
      <div className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[1.1] left-[17px] text-[#1c1716] text-[44px] top-[97px] tracking-[-1.4px] whitespace-nowrap">
        <p>Equipamentos para ensino e investigação</p>
      </div>
      <Container3 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="relative size-full">
      <Frame1 />
      <p className="hidden absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[984px] -translate-x-1/2 not-italic text-[#2354a2] text-[24px] text-nowrap top-[810px] tracking-[0.0703px]">Triónica</p>
    </div>
  );
}