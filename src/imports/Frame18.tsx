import svgPaths from "./svg-tpr83w14el";
import Tab04 from "./Tab04";

function Title() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Title">
      <div className="relative shrink-0 size-[6px]" data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #224433)" id="dot" r="3" />
        </svg>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">ANÁLISE QUÍMICA</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[328px]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-full">Tecnologia XRF e XRD</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[809.6px] top-[996.69px] w-[278.646px]" data-name="Text">
      <Title />
      <Text />
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[30px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_2047_349)" id="ArrowUpRight">
          <g id="Vector"></g>
          <path d="M9 20.375L21.25 8.125" id="Vector_2" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9.6875 7.5H21.875V19.6875" id="Vector_3" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2047_349">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[55px]" data-name="Square">
      <ArrowUpRight />
    </div>
  );
}

function Btn() {
  return (
    <div className="absolute content-stretch flex items-center left-[1068.71px] top-[747.3px]" data-name="Btn">
      <Square />
    </div>
  );
}

function Tab5() {
  return (
    <div className="absolute contents left-[784.12px] top-[734.27px]" data-name="Tab06">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-[784.12px] rounded-[20px] top-[734.27px] w-[344.06px]" data-name="Bg-Element" />
      <Text1 />
      <Btn />
      <div className="absolute h-[221.584px] left-[796.86px] top-[747.3px] w-[318.574px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
          <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
        </svg>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Title">
      <div className="relative shrink-0 size-[6px]" data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #224433)" id="dot" r="3" />
        </svg>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">GEOTECNIA</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[318px]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[318px]">Equipamentos para análise de rochas e agregados</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[444.3px] top-[996.69px] w-[266.753px]" data-name="Text">
      <Title1 />
      <Text2 />
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[30px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_2047_349)" id="ArrowUpRight">
          <g id="Vector"></g>
          <path d="M9 20.375L21.25 8.125" id="Vector_2" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9.6875 7.5H21.875V19.6875" id="Vector_3" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2047_349">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square1() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[55px]" data-name="Square">
      <ArrowUpRight1 />
    </div>
  );
}

function Btn1() {
  return (
    <div className="absolute content-stretch flex items-center left-[703.41px] top-[747.3px]" data-name="Btn">
      <Square1 />
    </div>
  );
}

function Tab4() {
  return (
    <div className="absolute contents left-[418.82px] top-[734.27px]" data-name="Tab05">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-[418.82px] rounded-[20px] top-[734.27px] w-[344.06px]" data-name="Bg-Element" />
      <Text3 />
      <Btn1 />
      <div className="absolute h-[221.584px] left-[431.56px] top-[747.3px] w-[318.574px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
          <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
        </svg>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Title">
      <div className="relative shrink-0 size-[6px]" data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #224433)" id="dot" r="3" />
        </svg>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">LABORATÓRIO</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[248px]">Microscopia e produção de lâminas</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[79.01px] top-[996.69px] w-[248.063px]" data-name="Text">
      <Title2 />
      <Text4 />
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[30px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_2047_349)" id="ArrowUpRight">
          <g id="Vector"></g>
          <path d="M9 20.375L21.25 8.125" id="Vector_2" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9.6875 7.5H21.875V19.6875" id="Vector_3" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2047_349">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square2() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[55px]" data-name="Square">
      <ArrowUpRight2 />
    </div>
  );
}

function Btn2() {
  return (
    <div className="absolute content-stretch flex items-center left-[338.11px] top-[747.3px]" data-name="Btn">
      <Square2 />
    </div>
  );
}

function Tab3() {
  return (
    <div className="absolute contents left-[53.52px] top-[734.27px]" data-name="Tab04">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-[53.52px] rounded-[20px] top-[734.27px] w-[344.06px]" data-name="Bg-Element" />
      <Text5 />
      <Btn2 />
      <div className="absolute h-[221.584px] left-[66.26px] top-[747.3px] w-[318.574px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
          <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
        </svg>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Title">
      <div className="relative shrink-0 size-[6px]" data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #224433)" id="dot" r="3" />
        </svg>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">INVESTIGAÇÃO</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[328px]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[307px]">AAS, Magnetómetros, Gravimetria, Resistividade e Sísmica</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[809.6px] top-[531.8px] w-[278.646px]" data-name="Text">
      <Title3 />
      <Text6 />
    </div>
  );
}

function ArrowUpRight3() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[30px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_2047_349)" id="ArrowUpRight">
          <g id="Vector"></g>
          <path d="M9 20.375L21.25 8.125" id="Vector_2" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9.6875 7.5H21.875V19.6875" id="Vector_3" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2047_349">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square3() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[55px]" data-name="Square">
      <ArrowUpRight3 />
    </div>
  );
}

function Btn3() {
  return (
    <div className="absolute content-stretch flex items-center left-[1068.71px] top-[282.41px]" data-name="Btn">
      <Square3 />
    </div>
  );
}

function Tab2() {
  return (
    <div className="absolute contents left-[784.12px] top-[269.38px]" data-name="Tab03">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-[784.12px] rounded-[20px] top-[269.38px] w-[344.06px]" data-name="Bg-Element" />
      <Text7 />
      <Btn3 />
      <div className="absolute h-[221.584px] left-[796.86px] top-[282.41px] w-[318.574px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
          <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
        </svg>
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Title">
      <div className="relative shrink-0 size-[6px]" data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #224433)" id="dot" r="3" />
        </svg>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">HIDROGEOLOGIA</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[290px]">Equipamentos de diagrafia para águas subterrâneas</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[444.3px] top-[531.8px] w-[248.063px]" data-name="Text">
      <Title4 />
      <Text8 />
    </div>
  );
}

function ArrowUpRight4() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[30px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_2047_349)" id="ArrowUpRight">
          <g id="Vector"></g>
          <path d="M9 20.375L21.25 8.125" id="Vector_2" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9.6875 7.5H21.875V19.6875" id="Vector_3" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2047_349">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square4() {
  return (
    <div className="bg-[#bbf814] relative rounded-[100px] shrink-0 size-[55px]" data-name="Square">
      <ArrowUpRight4 />
    </div>
  );
}

function Btn4() {
  return (
    <div className="absolute content-stretch flex items-center left-[703.41px] top-[282.41px]" data-name="Btn">
      <Square4 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="absolute contents left-[418.82px] top-[269.38px]" data-name="Tab02">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-[418.82px] rounded-[20px] top-[269.38px] w-[344.06px]" data-name="Bg-Element" />
      <Text9 />
      <Btn4 />
      <div className="absolute h-[221.584px] left-[431.56px] top-[282.41px] w-[318.574px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
          <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
        </svg>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Title">
      <div className="relative shrink-0 size-[6px]" data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #224433)" id="dot" r="3" />
        </svg>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">GEOFÍSICA</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[268px]">Equipamentos de geofísica e estações sísmicas</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[79.01px] top-[531.8px] w-[248.063px]" data-name="Text">
      <Title5 />
      <Text10 />
    </div>
  );
}

function ArrowUpRight5() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] size-[30px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="ArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_2047_349)" id="ArrowUpRight">
          <g id="Vector"></g>
          <path d="M9 20.375L21.25 8.125" id="Vector_2" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9.6875 7.5H21.875V19.6875" id="Vector_3" stroke="var(--stroke-0, #1C1716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2047_349">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square5() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[55px]" data-name="Square">
      <ArrowUpRight5 />
    </div>
  );
}

function Btn5() {
  return (
    <div className="absolute content-stretch flex items-center left-[338.11px] top-[282.41px]" data-name="Btn">
      <Square5 />
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute contents left-[53.52px] top-[269.38px]" data-name="Tab01">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-[53.52px] rounded-[20px] top-[269.38px] w-[344.06px]" data-name="Bg-Element" />
      <Text11 />
      <Btn5 />
      <div className="absolute h-[221.584px] left-[66.26px] top-[282.41px] w-[318.574px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
          <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
        </svg>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative w-full h-[1720px] flex items-start justify-center pt-4" data-name="Section 03">
      <div className="absolute bg-[#ecf1ee] h-[1720px] left-1/2 rounded-[25px] top-0 translate-x-[-50%] w-[1181px]" data-name="Bg-element" />
      
      {/* Header positioned absolutely */}
      <div className="absolute left-1/2 top-[80px] -translate-x-1/2 flex flex-col items-center z-10">
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.12] text-[#1c1716] text-[48px] text-center tracking-[-1.44px] mb-1">Arquitetura de Dados Geofísicos.</p>
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.55] text-[#1c1716] text-[16px] text-center max-w-[458px] mb-4">A oportunidade de dominar a cadeia de valor mineral com tecnologia de autoridade internacional.</p>
      </div>
      
      {/* All 7 cards grouped together maintaining exact positions */}
      <div className="relative w-[1181px]">
        <Tab />
        <Tab1 />
        <Tab2 />
        <Tab3 />
        <Tab4 />
        <Tab5 />
        
        {/* 7th card positioned below Tab3 (Microscopia) */}
        <div className="absolute left-[53.52px] top-[1201.44px]">
          <Tab04 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full flex items-center justify-center">
      <Section />
    </div>
  );
}