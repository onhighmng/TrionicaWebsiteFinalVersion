import svgPaths from "./svg-mduhaaaz2h";

function ArrowUpRight() {
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

function Icon() {
  return (
    <div className="absolute bg-[#ee701f] content-stretch flex items-center justify-center left-[calc(50%-0.11px)] rounded-[30px] size-[44px] top-[calc(50%-0.59px)] translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <ArrowUpRight />
    </div>
  );
}

export default function Badge() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Badge">
      <Icon />
    </div>
  );
}