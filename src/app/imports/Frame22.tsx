import svgPaths from "./svg-egh8o44axs";
import clsx from "clsx";
import imgImageBg from "figma:asset/b45e97681ee58e09b0ed688a8c4f281879ffacf8.png";
import imgImageTrionica from "figma:asset/d93cf643f81c1830c9529a1d38a8671cd0110ae2.png";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className={clsx("flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap", additionalClassNames)}>
      <p className="leading-[16px]">{children}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[14px] relative shrink-0 w-[15px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
        {children}
      </svg>
    </div>
  );
}

function Helper() {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-[4px] items-center justify-center relative shrink-0 w-[8px]">
      <div className="flex-none rotate-[270deg]">
        <div className="h-[8px] relative w-[4px]" data-name="nav-arrow-down">
          <div className="absolute inset-[-9.38%_-18.75%]" style={{ "--stroke-0": "rgba(34, 34, 34, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
              <path d={svgPaths.p2052b680} id="nav-arrow-down" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className={clsx("flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap", additionalClassNames)}>
      <p className="leading-[16px]" dir="auto">
        {text}
      </p>
    </div>
  );
}

function ImageBg() {
  return (
    <div className="absolute h-[884px] left-0 top-0 w-[1568px]" data-name="Image BG">
      <div className="absolute h-[884px] left-0 right-0 top-0" data-name="Image BG">
        <img alt="" className="block max-w-none size-full" height="884" src={imgImageBg} width="1568" />
      </div>
    </div>
  );
}

function ButtonCircle() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center mb-[-30px] px-[32px] py-[48px] relative rounded-[70px] shrink-0 size-[110px]" data-name="Button Circle">
      <Text text="ROLE" additionalClassNames="text-[#222] text-center" />
    </div>
  );
}

function ArrowDown() {
  return (
    <Wrapper>
      <g clipPath="url(#clip0_317_428)" id="arrow-down">
        <path d={svgPaths.p3cb1cc60} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0_317_428">
          <rect fill="white" height="14" width="15" />
        </clipPath>
      </defs>
    </Wrapper>
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
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[1398px] pb-[30px] pt-0 px-0 right-[60px] top-[634px]" data-name="Scroll Down">
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Underline" opacity="0.7" stroke="var(--stroke-0, #4C4C4C)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">01.</p>
      </div>
    </div>
  );
}

function SliderData() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[24px] items-start left-0 right-[1388px] top-[864px]" data-name="Slider Data">
      <No />
    </div>
  );
}

function ArrowRight() {
  return (
    <Wrapper>
      <g clipPath="url(#clip0_317_431)" id="arrow-right">
        <path d={svgPaths.p24d1c800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0_317_431">
          <rect fill="white" height="14" width="15" />
        </clipPath>
      </defs>
    </Wrapper>
  );
}

function Button() {
  return (
    <div className="bg-[#6549f6] content-center flex flex-wrap gap-[8px] h-[58px] items-center justify-center px-[32px] py-[24px] relative rounded-[40px] shrink-0" data-name="Button">
      <Wrapper1 additionalClassNames="text-white">Conheça-nos Melhor</Wrapper1>
      <ArrowRight />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[8px] h-[58px] items-center justify-center px-[32px] py-[24px] relative rounded-[40px] shrink-0" data-name="Button">
      <Wrapper1 additionalClassNames="text-[#222]">Contacte-nos Hoje</Wrapper1>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="CTA">
      <Button />
      <Button1 />
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[144px] top-[242px] w-[620px]" data-name="Heading And Supporting Text">
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[80px] relative shrink-0 text-[72px] text-white w-full">Onde o Futuro Começa</p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#f9f9f9] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país
      </p>
      <Cta />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Slider">
      <ImageBg />
      <ScrollDown />
      <SliderData />
      <HeadingAndSupportingText />
    </div>
  );
}

function ButtonNavButton() {
  return (
    <div className="bg-[rgba(247,246,255,0.97)] content-stretch flex gap-[8px] items-center p-[12px] relative rounded-[24px] shrink-0" data-name="Button Nav-button">
      <Text text="Home" additionalClassNames="text-[#6549f6]" />
    </div>
  );
}

function ButtonNavButton1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-0 py-[8px] relative shrink-0" data-name="Button Nav-button">
      <Text text="Sobre Nós" additionalClassNames="text-black" />
    </div>
  );
}

function ButtonNavButton2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-0 py-[8px] relative shrink-0" data-name="Button Nav-button">
      <Text text="Soluções" additionalClassNames="text-black" />
      <Helper />
    </div>
  );
}

function ButtonNavButton3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-0 py-[8px] relative shrink-0" data-name="Button Nav-button">
      <Text text="Blog" additionalClassNames="text-[#222]" />
      <Helper />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[32px] items-center justify-center left-[512.5px] right-[513.5px] top-[31.5px]" data-name="Navigation">
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

function Button2() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] h-[42px] items-center justify-center px-[20px] py-[16px] relative rounded-[24px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <Wrapper1 additionalClassNames="text-white">Contactar</Wrapper1>
    </div>
  );
}

function Cta1() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center justify-end relative shrink-0" data-name="CTA">
      <Button2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[45px] right-[35px] top-[32px]" data-name="Menu">
      <ImageTrionica />
      <Cta1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-1/2 top-0 translate-x-[-50%]" data-name="Header 1">
      <Slider />
      <Navigation />
      <Menu />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[884px] left-0 top-0 w-[1568px]">
      <Header />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}