import svgPaths from "./svg-e3kej5wkga";
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
    <div className="absolute left-[calc(50%-172.41px)] top-[calc(50%-0.3px)] translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      {/* Curved Text Circle */}
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="140" height="140" viewBox="0 0 140 140" style={{ transform: 'translate(-50%, -50%) rotate(-90deg)' }}>
        <defs>
          <path
            id="textCircle"
            d="M 70, 70 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          />
        </defs>
        <text style={{ fontSize: '16px', fontWeight: '600', letterSpacing: '0.05em', fill: '#1a1a1a' }}>
          <textPath href="#textCircle" startOffset="0%">
            15+ Anos de Experiência
          </textPath>
        </text>
      </svg>
      
      {/* Orange Button */}
      <div className="bg-[#ee701f] content-stretch flex items-center justify-center rounded-full size-[44px] relative z-10">
        <ArrowUpRight />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[350.071px] left-[69.93px] top-0 w-[384px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="350.071" src={imgImage} width="384" />
      </div>
      
      {/* Black Card Tile */}
      <div className="absolute left-[120px] top-[220px] bg-[#22282b] rounded-[16px] p-8 w-[320px] shadow-2xl z-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#FF6747] text-3xl">✱</span>
            <h3 className="font-['Syne'] font-bold text-white text-2xl">15+ Anos</h3>
          </div>
          <p className="font-['Inter'] text-white/90 text-base leading-relaxed">
            de Experiência em Assistência Técnica Especializada
          </p>
        </div>
      </div>
      
      <Icon />
    </div>
  );
}