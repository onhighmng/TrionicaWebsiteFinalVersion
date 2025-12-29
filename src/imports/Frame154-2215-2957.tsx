import svgPaths from "./svg-oyw63741ub";
import imgImage from "figma:asset/5b31ded0dbe4caf6e1c952bf5849601281dcffd1.png";

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

function Badge() {
  return (
    <div className="absolute content-stretch flex h-[102.437px] items-center justify-center left-0 top-[107.1px] w-[99.476px]" data-name="Badge">
      <Icon />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Badge />
      <div className="absolute h-[316.629px] left-[58.85px] top-0 w-[337.28px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="316.629" src={imgImage} width="337.28" />
      </div>
    </div>
  );
}