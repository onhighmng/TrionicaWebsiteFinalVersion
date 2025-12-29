import svgPaths from "./svg-ck8lfcpzah";
import imgImage from "figma:asset/d93cf643f81c1830c9529a1d38a8671cd0110ae2.png";

function Image() {
  return (
    <div className="absolute h-[50.4px] left-0 top-[-5px] w-[48.6px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[32.4px] items-start left-[-604.26px] top-[1.8px] w-[101.517px]" data-name="Paragraph">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[28px] text-center text-nowrap text-white">Spark AI</p>
    </div>
  );
}

function ImageTrionica() {
  return (
    <div className="h-[50.4px] relative shrink-0 w-[48.6px]" data-name="ImageTrionica2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Image />
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20.011px] relative shrink-0 w-full" data-name="Paragraph12">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[#6549f6] text-[19.455px] text-nowrap top-[-0.8px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Home
      </p>
    </div>
  );
}

function ButtonNavButton() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(101,73,246,0.15)] content-stretch flex flex-col h-[50.006px] items-start ml-0 mt-0 pb-0 pl-[14.991px] pr-[15.005px] pt-[13.514px] relative rounded-[33.352px] w-[80.184px]" data-name="ButtonNavButton">
      <Paragraph2 />
    </div>
  );
}

function ButtonNavButton1() {
  return (
    <div className="[grid-area:1_/_1] h-[20.011px] ml-[122px] mt-[13px] relative w-[87.173px]" data-name="ButtonNavButton1">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[19.455px] text-nowrap text-white top-[-0.8px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sobre Nós
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20.011px] relative shrink-0 w-[77.878px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[19.455px] text-nowrap text-white top-[-0.8px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Soluções
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[17.1px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1 17.1">
        <g id="Icon">
          <path d={svgPaths.p2fe9c480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNavButton2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[7.2px] h-[20.011px] items-center ml-[248px] mt-[13px] relative w-[117px]" data-name="ButtonNavButton2">
      <Paragraph1 />
      <Icon />
    </div>
  );
}

function ButtonNavButton3() {
  return (
    <div className="[grid-area:1_/_1] h-[20.011px] ml-[375px] mt-[13px] relative w-[72.717px]" data-name="ButtonNavButton3">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-[9px] text-[19.455px] text-nowrap text-white top-[-1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Portfolio
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      {[...Array(2).keys()].map((_, i) => (
        <ButtonNavButton key={i} />
      ))}
      <ButtonNavButton1 />
      <ButtonNavButton2 />
      <ButtonNavButton3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] content-stretch flex gap-[215px] h-[72px] items-center left-0 px-[40px] py-0 rounded-[16px] top-0 w-[1112px]" data-name="Navbar">
      <ImageTrionica />
      <Group1 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[40px] left-[964px] rounded-[1.67772e+07px] top-[13px] w-[114px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[57px] not-italic text-[#101828] text-[14px] text-center text-nowrap top-[10.5px] tracking-[-0.1504px] translate-x-[-50%]">Contactar</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[964px] top-[13px]">
      <Button />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[964px] top-[13px]">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <Navbar />
      <Group4 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group3 />
    </div>
  );
}