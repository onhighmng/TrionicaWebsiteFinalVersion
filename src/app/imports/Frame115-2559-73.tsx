import imgAmbiente from "../../imports/card-ambiente.jpg";

export default function Frame() {
  return (
    <div className="relative size-full">
      <img alt="" className="block size-full object-cover" src={imgAmbiente} />
    </div>
  );
}