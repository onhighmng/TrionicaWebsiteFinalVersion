import svgPaths from "./svg-erx77pzs5v";

function Frame7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="font-['Manrope:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#22282b] text-[40px] text-nowrap">
        <p className="mb-0">✱ NOSSOS PRODUTOS</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[181px] items-start relative shrink-0 w-[494px]">
      <p className="capitalize font-['Manrope:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#22282b] text-[24px] tracking-[-1px] w-full">2026</p>
      <Frame7 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[714px]">
      <p className="capitalize font-['Manrope:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#22282b] text-[48px] tracking-[-1px] w-full">Equipamentos didáticos, laboratoriais e de investigação para escolas, centros de formação, laboratórios e universidades.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[40px] top-[110px] w-[1360px]">
      <Frame8 />
      <Frame14 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="capitalize content-stretch flex font-['Manrope:SemiBold',sans-serif] font-semibold items-center justify-between leading-[1.2] relative shrink-0 text-[#22282b] text-[20px] text-nowrap w-full">
      <p className="relative shrink-0">03</p>
      <p className="relative shrink-0">Saúde</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[686px] top-[524px] w-[372px]">
      <div className="bg-[rgba(0,0,0,0.2)] h-[498px] rounded-[24px] shrink-0 w-full" data-name="image" />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="capitalize content-stretch flex font-['Manrope:SemiBold',sans-serif] font-semibold items-center justify-between leading-[1.2] relative shrink-0 text-[#22282b] text-[20px] text-nowrap w-full">
      <p className="relative shrink-0">04</p>
      <p className="relative shrink-0">Águas</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[1078px] top-[584px] w-[372px]">
      <div className="bg-[rgba(0,0,0,0.2)] h-[498px] rounded-[24px] shrink-0 w-full" data-name="image" />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="capitalize content-stretch flex font-['Manrope:SemiBold',sans-serif] font-semibold items-center justify-between leading-[1.2] relative shrink-0 text-[#22282b] text-[20px] text-nowrap w-full">
      <p className="relative shrink-0">03</p>
      <p className="relative shrink-0">Minas</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(0,0,0,0.2)] h-[498px] rounded-[24px] shrink-0 w-full" data-name="image" />
      <Frame5 />
    </div>
  );
}

function IconSolidChevronLeft() {
  return (
    <div className="relative size-[24px]" data-name="Icon / solid / chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / solid / chevron-left">
          <path clipRule="evenodd" d={svgPaths.pb524780} fill="var(--fill-0, #22282B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative rounded-[70px] w-[56px]">
      <div aria-hidden="true" className="absolute border border-[#22282b] border-solid inset-0 pointer-events-none rounded-[70px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <IconSolidChevronLeft />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSolidChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / solid / chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / solid / chevron-right">
          <path clipRule="evenodd" d={svgPaths.p32015300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#22282b] relative rounded-[70px] shrink-0 w-[56px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative w-full">
          <IconSolidChevronRight />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[52px] items-end left-[-98px] top-[524px] w-[372px]">
      <Frame12 />
      <Frame6 />
    </div>
  );
}

function IconButton() {
  return (
    <div className="relative shrink-0 size-[52px]" data-name="Icon Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="Icon Button">
          <circle cx="26" cy="26" fill="var(--fill-0, #22282B)" id="Ellipse 4274" r="26" />
          <g id="Icon / solid / plus">
            <path clipRule="evenodd" d={svgPaths.p1f065100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 182 (Stroke)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#22282b] text-[38px] tracking-[-1px] w-[261px]">Educação</p>
      <IconButton />
    </div>
  );
}

function Frame2() {
  return (
    <div className="capitalize content-stretch flex font-['Manrope:SemiBold',sans-serif] font-semibold items-center justify-between leading-[1.2] relative shrink-0 text-[#22282b] text-[20px] text-nowrap w-full">
      <p className="relative shrink-0">02</p>
      <p className="relative shrink-0">Ver mais</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(0,0,0,0.2)] h-[498px] rounded-[24px] shrink-0 w-full" data-name="image" />
      <Frame2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-end left-[294px] top-[524px] w-[372px]">
      <Frame17 />
      <Frame11 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-98px] top-[524px]">
      <Frame9 />
      <Frame10 />
      <Frame13 />
      <Frame16 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute bg-[#fafafa] h-[1312px] left-0 overflow-clip top-0 w-[1440px]" data-name="Main Container">
      <Frame15 />
      <Group />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute h-[1312px] left-0 top-0 w-[1440px]">
      <MainContainer />
    </div>
  );
}

export default function Frame19() {
  return (
    <div className="relative size-full">
      <Frame18 />
    </div>
  );
}