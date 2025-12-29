import svgPaths from "./svg-yzgntoeagr";
import imgImage from "figma:asset/d96278e48d0008a422a4ea6a3c883514d184f3b4.png";
import imgFrame148 from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

function Image() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-[410px]" data-name="Image">
      <div className="bg-[#ee701f] h-[373.166px] rounded-[40px] shrink-0 w-full" />
      <div className="absolute h-[521.227px] left-[-8.55px] top-[-148.06px] w-[408px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-white w-full" data-name="Text">
      <div className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[64px] w-[min-content]">
        <p className="mb-0">Let’s Engineer</p>
        <p>Your Next Success!</p>
      </div>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[16px] w-[408px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Get in touch today for custom solutions, fast lead times, and reliable global delivery.
      </p>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-up-right">
          <path d={svgPaths.p354a80} fill="var(--fill-0, #FDFDFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#0046a2] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Icon">
      <ArrowUpRight />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex gap-[16px] items-center justify-center pl-[20px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#242424] text-[18px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Discover More
      </p>
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#0046a2] content-stretch flex flex-col gap-[48px] items-start p-[56px] relative rounded-[40px] shrink-0 w-[766px]" data-name="Content">
      <Text />
      <Button />
    </div>
  );
}

function Cta() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start justify-end left-1/2 top-[1583.69px] translate-x-[-50%]" data-name="CTA">
      <Image />
      <Content />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[21px] items-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p124e9100} fill="var(--fill-0, #EE701F)" id="Vector" />
        </svg>
      </div>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575757] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        High-Volume Production
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[21px] items-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p124e9100} fill="var(--fill-0, #EE701F)" id="Vector" />
        </svg>
      </div>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575757] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Modular & Scalable Design`}</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[21px] items-center relative shrink-0 w-full" data-name="Text">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p124e9100} fill="var(--fill-0, #EE701F)" id="Vector" />
        </svg>
      </div>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575757] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lightweight, Durable Materials
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[21px] items-center relative shrink-0" data-name="Text">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p124e9100} fill="var(--fill-0, #EE701F)" id="Vector" />
        </svg>
      </div>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575757] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Global Distribution Ready
      </p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex flex-col gap-[12px] items-start p-[20px] relative rounded-[20px] shrink-0" data-name="Card">
      <p className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#242424] text-[24px] text-nowrap">Project Scope</p>
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[579.942px] items-end justify-end left-0 p-[20px] rounded-[40px] top-0 w-[1200px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgFrame148} />
      <Card />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 top-[613.64px] w-[1200px]">
      <p className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#242424] text-[48px] w-full">Scalable Parts for Global Logistics</p>
      <p className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#242424] text-[24px] w-full">Delivering Precision Components That Keep Global Supply Chains Moving</p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575757] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">In this project, Uplorix partnered with a leading logistics equipment manufacturer to produce custom components designed for high-volume, international distribution. The challenge? To engineer parts that were not only durable and lightweight, but also standardized across multiple transport systems — all while supporting rapid global deployment.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Our engineering team worked closely with the client to optimize part geometry, material selection, and modular assembly. Through automated fabrication and quality-controlled batch production, we ensured that every unit met strict performance and compliance requirements.</p>
      </div>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#575757] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.3] mb-0">The result was a fully scalable production solution that supported:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.3]">Consistent precision across 10,000+ units</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.3]">Seamless integration into global logistics platforms</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[1.3]">Reliable delivery to over 12 distribution hubs worldwide</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="play">
          <path d={svgPaths.p1202b300} fill="var(--fill-0, #242424)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex items-center justify-center pl-[19px] pr-[16px] py-[16px] relative rounded-[100px] shrink-0 size-[54px]" data-name="Icon">
      <Play />
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip px-[165px] py-[118px] relative rounded-[40px] shrink-0 w-[384px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgFrame148} />
      <Icon1 />
    </div>
  );
}

function Images() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[363px] items-start left-0 top-[1020.69px]" data-name="Images">
      <div className="h-full relative rounded-[40px] shrink-0 w-[384px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgFrame148} />
      </div>
      <Image1 />
      <div className="h-full relative rounded-[40px] shrink-0 w-[384px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[40px] size-full" src={imgFrame148} />
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="relative size-full">
      <Cta />
      <Frame1 />
      <Frame />
      <Images />
    </div>
  );
}