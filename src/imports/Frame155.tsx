import svgPaths from "./svg-bg96r2jxpz";
import imgImage from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import imgImage1 from "figma:asset/5cd53d28a4e3044df5dc6521a55aee0e8149cfd0.png";

function Headline() {
  return (
    <div className="relative w-full px-4 md:px-8 lg:absolute lg:left-[246.07px] lg:top-[124.39px] lg:w-[640.828px] py-8 lg:py-0 text-center" data-name="Headline">
      <div className="flex flex-col gap-[8px] font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] text-[#fdfdfd]">
        <p className="text-[16px] md:text-[18px] lg:text-[20px] uppercase">Inovar. Edificar. Liderar.</p>
        <p className="text-[36px] md:text-[52px] lg:text-[72px] leading-tight">Construímos o Futuro Nacional.</p>
      </div>
    </div>
  );
}

function Subheadline() {
  return (
    <div className="hidden lg:flex absolute gap-[24px] items-start left-[491.84px] text-[#fdfdfd] text-[16px] top-[461.49px] w-[262.923px] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3]" data-name="Subheadline">
      <p className="shrink-0 text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {" "}
        //
      </p>
      <p className="shrink-0 w-[282px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Onde a alta tecnologia edifica o futuro do nosso país.
      </p>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-up-right">
          <path d={svgPaths.p354a80} fill="var(--fill-0, #242424)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Icon">
      <ArrowUpRight />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[43.38px] items-center justify-center left-[953.5px] pl-[20px] pr-[8px] py-[8px] rounded-[12px] top-[472.77px] w-[145.976px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#fdfdfd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#fdfdfd] text-[18px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contactar
      </p>
      <Icon />
    </div>
  );
}

function CardCta() {
  return (
    <div className="relative md:absolute bg-[#0046a2] flex flex-col md:flex-row gap-[20px] md:gap-[28px] items-center md:left-0 p-[16px] md:p-[20px] rounded-[24px] md:rounded-[32px] md:top-[387.75px] w-full md:w-[427.976px] mx-4 md:mx-0 mt-6 md:mt-0" data-name="Card CTA">
      <div className="h-[150px] md:h-full relative rounded-[12px] w-full md:w-[161.617px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage} />
      </div>
      <div className="flex flex-col gap-[8px] w-full">
        <p className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] text-[#fdfdfd] text-[20px] md:text-[24px]">Excelência em Equipamento.</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] text-[#d4d4d4] text-[14px] md:text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Um portfólio de tecnologia de vanguarda ao serviço das instituições que lideram Moçambique.
        </p>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:h-[549.21px]" data-name="Banner">
      <div className="absolute inset-0 w-full h-full" data-name="Image">
        <img alt="" className="w-full h-full object-cover" src={imgImage1} />
      </div>
      <Headline />
      <Subheadline />
      <div className="hidden lg:block">
        <Button />
      </div>
      <CardCta />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative w-full">
      <Banner />
    </div>
  );
}