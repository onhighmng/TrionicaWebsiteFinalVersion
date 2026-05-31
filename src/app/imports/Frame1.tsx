import svgPaths from "./svg-f7oihmv9sg";

function MaskGroup() {
  return (
    <div className="absolute h-[294px] left-0 top-0 w-[312px]" data-name="Mask group">
      <div className="absolute bottom-0 left-0 right-[-13.14%] top-[-12.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 330">
          <g id="Mask group">
            <path d={svgPaths.p24404b00} fill="var(--fill-0, #D9D9D9)" id="Subtract" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <MaskGroup />
    </div>
  );
}