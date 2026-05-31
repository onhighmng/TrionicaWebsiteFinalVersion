import imgMap from "figma:asset/1edab39ef5abd0344f31ae33271b16287b0d9165.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[472.26px] left-1/2 rounded-[40px] top-0 translate-x-[-50%] w-[1200px]" data-name="Map">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
          <img alt="" className="absolute h-[104.73%] left-[-28.32%] max-w-none top-[-2.36%] w-[156.64%]" src={imgMap} />
        </div>
      </div>
    </div>
  );
}