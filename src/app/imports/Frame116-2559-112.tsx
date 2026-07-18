import imgMinas from "../../imports/card-minas-mine.webp";

export default function Frame() {
  return (
    <div className="relative size-full">
      <img alt="" className="block size-full object-cover" src={imgMinas} />
    </div>
  );
}