import svgPaths from "./svg-hc5m8j2plg";
import imgImageSaude from "figma:asset/5387dac094734b07fbea93a0716344069eaf78fc.png";
import imgImageTrionica from "figma:asset/d93cf643f81c1830c9529a1d38a8671cd0110ae2.png";

function Navbar() {
  return <div className="absolute bg-[rgba(0,0,0,0.8)] h-[72px] left-0 rounded-[16px] top-0 w-[541px]" data-name="Navbar" />;
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Navbar />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[72px] left-[-13.59px] top-[-26.2px] w-[541px]">
      <Group1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[22.234px] left-[34px] top-[-1.11px] w-[55.766px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[19.455px] text-nowrap text-white top-[-1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Home
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[22.234px] left-[156px] top-[-1.11px] w-[96.859px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[#ff6747] text-[19.455px] text-nowrap top-[-1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sobre Nós
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[22.234px] left-[409px] top-[-1.11px] w-[80.797px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[19.455px] text-nowrap text-white top-[-1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Portfolio
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="basis-0 grow h-[22.234px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] left-0 text-[19.455px] text-nowrap text-white top-[-1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Soluções
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[17.094px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0938 17.0938">
        <g id="Icon">
          <path d={svgPaths.pf62f180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.01494" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[7.195px] h-[20.008px] items-center left-0 top-0 w-[110.82px]" data-name="Container">
      <Paragraph3 />
      <Icon />
    </div>
  );
}

function ImageEnsino() {
  return <div className="bg-[rgba(255,255,255,0)] h-[61.632px] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[85px]" data-name="Image (Ensino)" />;
}

function Heading() {
  return (
    <div className="h-[17px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.27px] tracking-[-0.1504px]">Ensino</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[40.8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#525252] text-[12px] top-[0.85px] w-[123px]">Equipamentos e soluções educacionais para laboratórios de ensino</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[61.632px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.4px] items-start relative size-full">
        <Heading />
        <Paragraph4 />
      </div>
    </div>
  );
}

function ProductItem() {
  return (
    <div className="absolute content-stretch flex gap-[10.2px] h-[75.232px] items-start left-0 pb-0 pt-[6.8px] px-[6.8px] rounded-[10px] top-0 w-[244.8px]" data-name="ProductItem">
      <ImageEnsino />
      <Container1 />
    </div>
  );
}

function ImageSaude() {
  return (
    <div className="h-[61.632px] relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[85px]" data-name="Image (Saúde)">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[8px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImageSaude} />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[17px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.27px] tracking-[-0.1504px]">Saúde</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[40.8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#525252] text-[12px] top-[0.85px] w-[135px]">Equipamentos hospitalares e soluções para diagnóstico médico</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[61.632px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.4px] items-start relative size-full">
        <Heading1 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function ProductItem1() {
  return (
    <div className="absolute content-stretch flex gap-[10.2px] h-[75.232px] items-start left-[255px] pb-0 pt-[6.8px] px-[6.8px] rounded-[10px] top-0 w-[244.8px]" data-name="ProductItem">
      <ImageSaude />
      <Container2 />
    </div>
  );
}

function ImageAguas() {
  return <div className="bg-[rgba(255,255,255,0)] h-[61.2px] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[85px]" data-name="Image (Águas)" />;
}

function Heading2() {
  return (
    <div className="h-[17px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.27px] tracking-[-0.1504px]">Águas</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[40.8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#525252] text-[12px] top-[0.85px] w-[113px]">Equipamentos para tratamento e análise de qualidade de água</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[61.2px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.4px] items-start relative size-full">
        <Heading2 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function ProductItem2() {
  return (
    <div className="absolute content-stretch flex gap-[10.2px] h-[74.8px] items-start left-0 pb-0 pt-[6.8px] px-[6.8px] rounded-[10px] top-[85.43px] w-[244.8px]" data-name="ProductItem">
      <ImageAguas />
      <Container3 />
    </div>
  );
}

function ImageAmbiente() {
  return <div className="bg-[rgba(255,255,255,0)] h-[61.2px] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[85px]" data-name="Image (Ambiente)" />;
}

function Heading3() {
  return (
    <div className="h-[17px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.27px] tracking-[-0.1504px]">Ambiente</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[27.2px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#525252] text-[12px] top-[0.85px] w-[132px]">Soluções sustentáveis para monitorização ambiental</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[61.2px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.4px] items-start relative size-full">
        <Heading3 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function ProductItem3() {
  return (
    <div className="absolute content-stretch flex gap-[10.2px] h-[74.8px] items-start left-[255px] pb-0 pt-[6.8px] px-[6.8px] rounded-[10px] top-[85.43px] w-[244.8px]" data-name="ProductItem">
      <ImageAmbiente />
      <Container4 />
    </div>
  );
}

function ImageMinas() {
  return <div className="bg-[rgba(255,255,255,0)] h-[61.2px] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[85px]" data-name="Image (Minas)" />;
}

function Heading4() {
  return (
    <div className="h-[17px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.27px] tracking-[-0.1504px]">Minas</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[40.8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#525252] text-[12px] top-[0.85px] w-[136px]">Equipamentos para exploração mineira e análise geológica</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-[61.2px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.4px] items-start relative size-full">
        <Heading4 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function ProductItem4() {
  return (
    <div className="absolute content-stretch flex gap-[10.2px] h-[74.8px] items-start left-0 pb-0 pt-[6.8px] px-[6.8px] rounded-[10px] top-[170.43px] w-[244.8px]" data-name="ProductItem">
      <ImageMinas />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[245.232px] relative shrink-0 w-full" data-name="Container">
      <ProductItem />
      <ProductItem1 />
      <ProductItem2 />
      <ProductItem3 />
      <ProductItem4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] h-[274.132px] left-[-208.94px] opacity-0 rounded-[16px] top-[62.2px] w-[528.7px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pt-[14.45px] px-[14.45px] relative rounded-[inherit] size-full">
        <Container6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[20.008px] left-[282px] top-0 w-[110.82px]" data-name="Container">
      <Container />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[20.008px] left-[263.59px] top-[15.2px] w-[489.797px]" data-name="Container">
      <Frame />
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Container8 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[263.59px] top-[15.2px]">
      <Container9 />
    </div>
  );
}

function ImageTrionica() {
  return (
    <div className="absolute h-[50.398px] left-0 top-0 w-[48.594px]" data-name="Image (Trionica)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageTrionica} />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65.43px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[33px] not-italic text-[#101828] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">Contactar</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white content-stretch flex h-[40px] items-center justify-center left-[982px] pl-0 pr-[0.008px] py-0 rounded-[1.67772e+07px] top-[5.2px] w-[114px]" data-name="Button">
      <Paragraph9 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <ImageTrionica />
      <Button />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[50.398px] left-0 top-0 w-[1096px]">
      <Group4 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Group2 />
      <Frame2 />
    </div>
  );
}