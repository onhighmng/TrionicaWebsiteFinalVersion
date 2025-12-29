import svgPaths from "./svg-buh22tugrt";

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

export default function Icon() {
  return (
    <div className="bg-[#ee701f] content-stretch flex items-center justify-center relative rounded-[30px] size-full" data-name="Icon">
      <ArrowUpRight />
    </div>
  );
}