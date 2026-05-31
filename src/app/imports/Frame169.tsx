import svgPaths from "./svg-fcbtn7htlm";
import imgImage from "figma:asset/2afa164c020a99b0391ed4c6b661a238499e6d5d.png";

function Frame() {
  return <div className="absolute h-[119.123px] left-0 top-[115.17px] w-[119.121px]" />;
}

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
    <div className="absolute bg-[#ee701f] content-stretch flex items-center justify-center left-1/2 rounded-[30px] size-[44px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <ArrowUpRight />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Group1 />
    </div>
  );
}