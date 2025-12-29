import svgPaths from "./svg-y2czpx12gc";
import imgImageTrionica from "figma:asset/d93cf643f81c1830c9529a1d38a8671cd0110ae2.png";
import imgImageBg from "figma:asset/929628c41e1974158fceb3efd1316d2a70e98a67.png";

function Paragraph1() {
  return (
    <div className="absolute h-[22.234px] left-[16.66px] top-[16.02px] w-[55.766px]" data-name="Paragraph32">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[#6549f6] text-[19.455px] text-nowrap top-[-1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Home
      </p>
    </div>
  );
}

function ButtonNavButton() {
  return (
    <div className="absolute bg-[rgba(247,246,255,0.97)] h-[55.563px] left-[25.05px] rounded-[33.352px] top-[-6.98px] w-[89.094px]" data-name="ButtonNavButton">
      <Paragraph1 />
    </div>
  );
}

function ButtonNavButton1() {
  return (
    <div className="absolute h-[22.234px] left-[158.62px] top-[9.04px] w-[96.859px]" data-name="ButtonNavButton1">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[19.455px] text-black text-nowrap top-[-1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sobre Nós
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[22.234px] left-0 top-[10.46px] w-[86.531px]" data-name="Paragraph42">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[19.455px] text-black text-nowrap top-[-1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Soluções
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[41.364px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.09%_13.35%]" data-name="nav-arrow-down">
        <div className="absolute inset-[-8.86%_-19.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6442 40.8155">
            <path d={svgPaths.p3b1080} id="nav-arrow-down" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.14641" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[10.805px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.109px] items-start left-0 overflow-clip pb-0 pl-[-0.055px] pr-[1.695px] pt-[0.266px] top-0 w-[22.781px]" data-name="Icon32">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[11.109px] relative w-[5.555px]" data-name="Container4">
      <Icon2 />
    </div>
  );
}

function ButtonNavButton2() {
  return (
    <div className="absolute h-[44.453px] left-[299.93px] top-[-1.41px] w-[108.75px]" data-name="ButtonNavButton2">
      <Paragraph2 />
      <div className="absolute flex h-[5.555px] items-center justify-center left-[97.63px] top-[11.11px] w-[11.109px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function ButtonNavButton3() {
  return (
    <div className="absolute h-[22.234px] left-[453.15px] top-[9.04px] w-[80.797px]" data-name="ButtonNavButton3">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[#222] text-[19.455px] text-nowrap top-[-1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Portfolio
      </p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[41.594px] left-[388px] top-[30px] w-[559px]" data-name="Navigation2">
      <ButtonNavButton />
      <ButtonNavButton1 />
      <ButtonNavButton2 />
      <ButtonNavButton3 />
    </div>
  );
}

function ImageTrionica() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-[54px]" data-name="Image (Trionica)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageTrionica} />
      <div className="absolute flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[-615px] text-[28px] text-center text-nowrap text-white top-[20px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[36px]">Spark AI</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] h-[42px] items-center justify-center px-[20px] py-[16px] relative rounded-[24px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Contactar</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center justify-end relative shrink-0" data-name="CTA">
      <Button />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex h-[49.095px] items-center justify-between left-[119px] right-[80.24px] top-[38px]" data-name="Menu">
      <ImageTrionica />
      <Cta />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[119px] right-[80.24px] top-[38px]" data-name="Header 1">
      <Menu />
    </div>
  );
}

function ImageBg() {
  return (
    <div className="absolute h-[775px] left-0 top-0 w-[1346.594px]" data-name="Image BG">
      <div className="absolute h-[756px] left-0 right-[-0.41px] top-0" data-name="Image BG">
        <img alt="" className="block max-w-none size-full" height="756" src={imgImageBg} width="1347" />
      </div>
      <Navigation />
      <Header />
    </div>
  );
}

function ButtonCircle() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center mb-[-30px] px-[32px] py-[48px] relative rounded-[70px] shrink-0 size-[110px]" data-name="Button Circle">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]" dir="ltr">
          ROLE
        </p>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15px]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
        <g clipPath="url(#clip0_2249_741)" id="arrow-down">
          <path d={svgPaths.p3cb1cc60} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2249_741">
            <rect fill="white" height="14" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonCircle1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mb-[-30px] px-[32px] py-[48px] relative rounded-[70px] shrink-0 size-[110px]" data-name="Button Circle">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[70px]" />
      <ArrowDown />
    </div>
  );
}

function ScrollDown() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[30px] pt-0 px-0 relative w-full" data-name="Scroll Down">
      <ButtonCircle />
      <ButtonCircle1 />
    </div>
  );
}

function No() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="No 1">
      <div className="h-0 relative shrink-0 w-full" data-name="Underline">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(76, 76, 76, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 1">
            <line id="Underline" opacity="0.7" stroke="var(--stroke-0, #4C4C4C)" x2="125" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[15.4px] w-[137.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[22px]">01.</p>
      </div>
    </div>
  );
}

function SliderData() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[24px] h-[27px] items-start left-[39px] right-[1182.59px] top-[724px]" data-name="Slider Data">
      <No />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[208px] left-[117.14px] top-[190px] w-[631.63px]" data-name="Paragraph52">
      <p className="absolute font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[104px] left-0 text-[93.6px] text-white top-0 w-[621px]">Onde o Futuro Começa</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[72.797px] left-[117.14px] top-[433px] w-[655.472px]" data-name="Paragraph62">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[36.4px] left-0 text-[#f9f9f9] text-[23.4px] top-[-0.5px] w-[643px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[23.398px] left-[36.4px] top-[19.5px] w-[201.586px]" data-name="Paragraph72">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[23.4px] left-0 text-[19.5px] text-nowrap text-white top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Conheça-nos Melhor
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[10%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5943 12.9995">
            <path d={svgPaths.p16763080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.59947" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[248.38px] overflow-clip pb-0 pt-[3.898px] px-[2.602px] size-[20.797px] top-[20.8px]" data-name="Icon42">
      <Container1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#6549f6] h-[62.398px] left-0 rounded-[34.353px] top-0 w-[305.578px]" data-name="Button12">
      <Paragraph5 />
      <Icon3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[23.398px] relative shrink-0 w-full" data-name="Paragraph8">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[23.4px] left-0 text-[#222] text-[19.5px] text-nowrap top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contacte-nos Hoje
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[62.398px] items-start left-[326.38px] pb-0 pt-[19.5px] px-[36.398px] rounded-[34.353px] top-0 w-[255.609px]" data-name="Button3">
      <Paragraph />
    </div>
  );
}

function Cta1() {
  return (
    <div className="absolute h-[62.398px] left-[117.14px] top-[540.13px] w-[561.036px]" data-name="Cta">
      <Button2 />
      <Button1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[117.14px] top-[190px]">
      <Paragraph3 />
      <Paragraph4 />
      <Cta1 />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Slider">
      <ImageBg />
      <div className="absolute flex items-center justify-center left-[1164.53px] right-[146px] top-[555.83px]">
        <div className="flex-none h-[190px] rotate-[180deg] scale-y-[-100%] w-[36.069px]">
          <ScrollDown />
        </div>
      </div>
      <SliderData />
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Slider />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}