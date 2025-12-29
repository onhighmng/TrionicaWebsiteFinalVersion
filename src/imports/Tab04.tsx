import svgPaths from "./svg-b1bxp1c0jg";

function Title() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Title">
      <div className="relative shrink-0 size-[6px]" data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #224433)" id="dot" r="3" />
        </svg>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">INDÚSTRIA</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[249px]">Sistemas de processamento</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.49px] top-[262.42px] w-[248.063px]" data-name="Text">
      <Title />
      <Text />
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[30px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_2347_409)" id="ArrowUpRight">
          <g id="Vector"></g>
          <path d="M9 20.375L21.25 8.125" id="Vector_2" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9.6875 7.5H21.875V19.6875" id="Vector_3" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2347_409">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[55px]" data-name="Square">
      <ArrowUpRight />
    </div>
  );
}

function Btn() {
  return (
    <div className="absolute content-stretch flex items-center left-[284.59px] top-[13.03px]" data-name="Btn">
      <Square />
    </div>
  );
}

export default function Tab() {
  return (
    <div className="relative size-full" data-name="Tab04">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-0 rounded-[20px] top-0 w-[344.06px]" data-name="Bg-Element" />
      <Text1 />
      <Btn />
      <div className="absolute h-[221.584px] left-[12.74px] top-[13.03px] w-[318.574px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 318.574 221.584">
          <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
        </svg>
      </div>
    </div>
  );
}
