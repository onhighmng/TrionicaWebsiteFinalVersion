function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-right">
          <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 3.75L14.25 9L9 14.25" id="Vector_2" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#bbf814] content-stretch flex gap-[10px] h-[50px] items-center justify-center left-[169.42px] px-[33px] py-[15px] rounded-[35px] top-[269px] w-[198.145px]" data-name="Button">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1c1716] text-[16px] text-nowrap">Contactar</p>
      <ArrowRight />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Section 9">
      <Button />
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[1.55] left-[calc(50%+0.5px)] text-[#1c1716] text-[16px] text-center top-[124px] translate-x-[-50%] w-[534px]">Apostamos em equipamentos de elevada durabilidade, precisão e tecnologia de ponta, promovendo parcerias sólidas com instituições educacionais.</p>
      <div className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[1.12] left-[calc(50%-10px)] text-[#1c1716] text-[48px] text-center top-0 tracking-[-1.44px] translate-x-[-50%] w-[515px]">
        <p className="mb-0">Tecnologia que Transforma a Educação</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Section />
    </div>
  );
}