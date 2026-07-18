import imgMinas from "../../imports/minas-card.jpeg";

export default function Frame() {
  return (
    <div className="relative size-full">
      <img alt="" className="block size-full object-cover" src={imgMinas} />
    </div>
  );
}