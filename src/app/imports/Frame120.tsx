function Container() {
  return <div className="bg-[#667085] h-[6.838px] rounded-[225030384px] shrink-0 w-[76.694px]" data-name="Container" />;
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16.429px] items-center justify-center left-0 pb-[0.027px] pt-0 px-0 size-[109.579px] top-0" data-name="Frame2">
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