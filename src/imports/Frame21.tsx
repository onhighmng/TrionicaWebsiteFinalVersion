import svgPaths from "./svg-zr7rua94qk";
import clsx from "clsx";
import imgImageBg from "figma:asset/b45e97681ee58e09b0ed688a8c4f281879ffacf8.png";
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className={clsx("flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap", additionalClassNames)}>
      <p className="leading-[16px]">{children}</p>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[14px] relative shrink-0 w-[15px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
      <p className="leading-[20px]">{children}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-[4px] items-center justify-center relative shrink-0 w-[8px]">
      <div className="flex-none rotate-[270deg]">
        <div className="h-[8px] relative w-[4px]" data-name="nav-arrow-down">
          {children}
        </div>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <Wrapper>
      <div className="absolute inset-[-9.38%_-18.75%]" style={{ "--stroke-0": "rgba(34, 34, 34, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
          <path d={svgPaths.p2052b680} id="nav-arrow-down" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </div>
    </Wrapper>
  );
}
type NoTextProps = {
  text: string;
};

function NoText({ text }: NoTextProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <div className="h-0 relative shrink-0 w-full" data-name="Underline">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(198, 198, 198, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 1">
            <line id="Underline" opacity="0.7" stroke="var(--stroke-0, #C6C6C6)" x2="21" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Wrapper1>{text}</Wrapper1>
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
      <Text text="Scroll" additionalClassNames="text-[#222] text-center" />
    </div>
  );
}

function ArrowDown() {
  return (
    <Wrapper2>
      <g clipPath="url(#clip0_317_428)" id="arrow-down">
        <path d={svgPaths.p3cb1cc60} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0_317_428">
          <rect fill="white" height="14" width="15" />
        </clipPath>
      </defs>
    </Wrapper2>
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

function No1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="No 1">
      <div className="h-0 relative shrink-0 w-full" data-name="Underline">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(76, 76, 76, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 1">
            <line id="Underline" opacity="0.7" stroke="var(--stroke-0, #4C4C4C)" x2="90" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Wrapper1>01.</Wrapper1>
    </div>
  );
}

function SliderData() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[24px] items-start left-0 right-[1388px] top-[864px]" data-name="Slider Data">
      <No1 />
      <NoText text="02." />
      <NoText text="03." />
    </div>
  );
}

function ArrowRight() {
  return (
    <Wrapper2>
      <g clipPath="url(#clip0_317_431)" id="arrow-right">
        <path d={svgPaths.p24d1c800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0_317_431">
          <rect fill="white" height="14" width="15" />
        </clipPath>
      </defs>
    </Wrapper2>
  );
}

function Button() {
  return (
    <div className="bg-[#6549f6] content-center flex flex-wrap gap-[8px] h-[58px] items-center justify-center px-[32px] py-[24px] relative rounded-[40px] shrink-0" data-name="Button">
      <Wrapper3 additionalClassNames="text-white">Explore Our Services</Wrapper3>
      <ArrowRight />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-[8px] h-[58px] items-center justify-center px-[32px] py-[24px] relative rounded-[40px] shrink-0" data-name="Button">
      <Wrapper3 additionalClassNames="text-[#222]">Learn More</Wrapper3>
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
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[80px] relative shrink-0 text-[72px] text-white w-full">Simplifying Tech To Empower Your Business Growth!</p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#f9f9f9] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Working hard to build a safe and beneficial artificial intelligence systems while observing how our research help others to achieve their outcome.
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
      <Wrapper>
        <div className="absolute inset-[-9.38%_-18.75%]" style={{ "--stroke-0": "rgba(101, 73, 246, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
            <path d={svgPaths.p2052b680} id="nav-arrow-down" stroke="var(--stroke-0, #6549F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </Wrapper>
    </div>
  );
}

function ButtonNavButton1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-0 py-[8px] relative shrink-0" data-name="Button Nav-button">
      <Text text="Pages" additionalClassNames="text-[#222]" />
      <Helper />
    </div>
  );
}

function ButtonNavButton2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-0 py-[8px] relative shrink-0" data-name="Button Nav-button">
      <Text text="Services" additionalClassNames="text-[#222]" />
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

function ButtonNavButton4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-0 py-[8px] relative shrink-0" data-name="Button Nav-button">
      <Text text="Shop" additionalClassNames="text-[#222]" />
      <Helper />
    </div>
  );
}

function ButtonNavButton5() {
  return (
    <div className="content-stretch flex items-center px-0 py-[8px] relative shrink-0" data-name="Button Nav-button">
      <Text text="Contact Us" additionalClassNames="text-[#222]" />
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
      <ButtonNavButton4 />
      <ButtonNavButton5 />
    </div>
  );
}

function Logomark() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Logomark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Logomark">
          <path clipRule="evenodd" d={svgPaths.p12b55a80} fill="url(#paint0_linear_317_438)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_317_438" x1="17.5" x2="17.4998" y1="0" y2="35">
            <stop stopColor="#EAEAEA" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Logo">
      <Logomark />
      <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[28px] text-center text-nowrap text-white">
        <p className="leading-[36px]">Spark AI</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_317_434)" id="search">
          <path d="M15 15L19 19" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3b537ad0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_317_434">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SimpleCart() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22px]" data-name="simple-cart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g clipPath="url(#clip0_317_423)" id="simple-cart">
          <path d={svgPaths.p39836980} id="Ellipse 2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p133ed100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18c4400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_317_423">
            <rect fill="white" height="20" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function No() {
  return (
    <div className="absolute bg-[#6549f6] content-stretch flex items-center justify-center left-[56px] px-[6px] py-[5px] rounded-[50px] size-[18px] top-[-7.5px]" data-name="No">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Icons">
      <Search />
      <SimpleCart />
      <No />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] h-[42px] items-center justify-center px-[20px] py-[16px] relative rounded-[24px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <Wrapper3 additionalClassNames="text-white">Get Started</Wrapper3>
    </div>
  );
}

function Cta1() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center justify-end relative shrink-0" data-name="CTA">
      <Icons />
      <Button2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[40px] right-[40px] top-[28px]" data-name="Menu">
      <Logo />
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

export default function Frame() {
  return (
    <div className="relative size-full">
      <Header />
    </div>
  );
}