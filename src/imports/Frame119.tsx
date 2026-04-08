function Container() {
  return <div className="bg-[#667085] h-[1.928px] rounded-[36438856px] shrink-0 w-[21.644px]" data-name="Container155" />;
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.987px] items-center justify-center left-0 pb-[0.009px] pt-0 px-0 size-[39.922px] top-0" data-name="Frame8">
      {[...Array(3).keys()].map((_, i) => (
        <Container key={i} />
      ))}
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}