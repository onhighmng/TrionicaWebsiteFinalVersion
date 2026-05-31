import svgPaths from "./svg-z2opy011d9";

function Icon() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p18e73b00} id="Vector" stroke="var(--stroke-0, #4278EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Arrow() {
  return (
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-[80px] shrink-0" data-name="Arrow">
      <div className="flex items-center justify-center relative shrink-0 size-[27.321px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[210deg] scale-y-[-100%]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#4278ec] content-stretch flex gap-[24px] items-center pl-[6px] pr-[32px] py-[6px] relative rounded-[80px] w-[282px]" data-name="Button">
      <Arrow />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30px] relative text-[20px] text-nowrap text-white">Explorar Soluções</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute flex items-center justify-center left-0 top-0 w-[282px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Button />
        </div>
      </div>
    </div>
  );
}