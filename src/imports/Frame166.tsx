import svgPaths from "./svg-8zc3hxdrzm";
import imgImage from "figma:asset/2afa164c020a99b0391ed4c6b661a238499e6d5d.png";

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
    <div className="absolute bg-[#ee701f] content-stretch flex items-center justify-center left-[calc(50%-168.87px)] rounded-[30px] size-[44px] top-[calc(50%-0.3px)] translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <ArrowUpRight />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[350.071px] left-[67px] top-0 w-[384px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="350.071" src={imgImage} width="384" />
      </div>
      <Icon />
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