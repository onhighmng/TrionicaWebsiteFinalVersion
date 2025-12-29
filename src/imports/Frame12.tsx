import svgPaths from "./svg-widzfferv8";
import Frame125 from "./Frame125";

function Title() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Title">
      <div className="relative shrink-0 size-[6px]" data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #224433)" id="dot" r="3" />
        </svg>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">TRATAMENTO</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[328px]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-full">Sistemas de tratamento — desinfeção, dessalinização, ETARs</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.49px] top-[262.42px] w-[278.646px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[284.6px] top-[13.03px]" data-name="Btn">
      <Square />
    </div>
  );
}

function Tab5() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Tab06">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-[730.6px] rounded-[20px] top-[464.89px] w-[344.06px]" data-name="Bg-Element" />
      <div className="absolute left-[730.6px] top-[464.89px]">
        <Text1 />
        <Btn />
        <div className="absolute h-[221.584px] left-[12.74px] top-[13.03px] w-[318.574px]" data-name="Image">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
            <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
          </svg>
        </div>
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">HIDROLOGIA</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[318px]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[318px]">Sistemas de monitorização de recursos hídricos</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.49px] top-[262.42px] w-[266.753px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[284.6px] top-[13.03px]" data-name="Btn">
      <Square1 />
    </div>
  );
}

function Tab4() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Tab05">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-[365.3px] rounded-[20px] top-[464.89px] w-[344.06px]" data-name="Bg-Element" />
      <div className="absolute left-[365.3px] top-[464.89px]">
        <Text3 />
        <Btn1 />
        <div className="absolute h-[221.584px] left-[12.74px] top-[13.03px] w-[318.574px]" data-name="Image">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
            <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
          </svg>
        </div>
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">CONTROLO REMOTO</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[170px]">Data loggers e telemetria</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.49px] top-[262.42px] w-[248.063px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[284.6px] top-[13.03px]" data-name="Btn">
      <Square2 />
    </div>
  );
}

function Tab3() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Tab04">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-0 rounded-[20px] top-[464.89px] w-[344.06px]" data-name="Bg-Element" />
      <div className="absolute left-0 top-[464.89px]">
        <Text5 />
        <Btn2 />
        <div className="absolute h-[221.584px] left-[12.74px] top-[13.03px] w-[318.574px]" data-name="Image">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
            <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
          </svg>
        </div>
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">QUALIDADE</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[328px]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[208px]">Kits de análise de água</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.49px] top-[262.42px] w-[278.646px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[284.6px] top-[13.03px]" data-name="Btn">
      <Square3 />
    </div>
  );
}

function Tab2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Tab03">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-[730.6px] rounded-[20px] top-0 w-[344.06px]" data-name="Bg-Element" />
      <div className="absolute left-[730.6px] top-0">
        <Text7 />
        <Btn3 />
        <div className="absolute h-[221.584px] left-[12.74px] top-[13.03px] w-[318.574px]" data-name="Image">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
            <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
          </svg>
        </div>
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">MEDIÇÃO</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[290px]">Contadores mecânicos, eletrónicos e pré-pagos</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.49px] top-[262.42px] w-[248.063px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[284.6px] top-[13.03px]" data-name="Btn">
      <Square4 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Tab02">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-[365.3px] rounded-[20px] top-0 w-[344.06px]" data-name="Bg-Element" />
      <div className="absolute left-[365.3px] top-0">
        <Text9 />
        <Btn4 />
        <div className="absolute h-[221.584px] left-[12.74px] top-[13.03px] w-[318.574px]" data-name="Image">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
            <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
          </svg>
        </div>
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">GESTÃO</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col h-[164px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="font-['Manrope:Medium',sans-serif] font-medium h-[87px] leading-[30px] relative shrink-0 text-[#364153] text-[28px] tracking-[-0.3125px] w-[268px]">
        <p className="mb-0">Caudalímetros (controlo de perdas)</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.49px] top-[262.42px] w-[248.063px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[284.6px] top-[13.03px]" data-name="Btn">
      <Square5 />
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Tab01">
      <div className="absolute bg-[#deeae2] h-[443.167px] left-0 rounded-[20px] top-0 w-[344.06px]" data-name="Bg-Element" />
      <div className="absolute left-0 top-0">
        <Text11 />
        <Btn5 />
        <div className="absolute h-[221.584px] left-[12.74px] top-[13.03px] w-[318.574px]" data-name="Image">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 222">
            <path d={svgPaths.p33926000} fill="var(--fill-0, #C4C4C4)" id="Image" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Section 03">
      <div className="absolute bg-[#ecf1ee] h-[1750px] left-1/2 rounded-[25px] top-0 translate-x-[-50%] w-[1181px]" data-name="Bg-element" />
      
      {/* Cards Container - Centered and Aligned */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[1074.66px]">
        {/* Headings */}
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.12] text-[#1c1716] text-[48px] text-center tracking-[-1.44px] mx-auto w-[714.238px] mb-[28px]">Equipamentos para gestão hídrica.</p>
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.55] text-[#1c1716] text-[16px] text-center mx-auto w-[457.898px] mb-[72px]">Soluções de telemetria e análise que posicionam qualquer rede na vanguarda tecnológica.</p>
        
        {/* Cards Grid */}
        <div className="relative w-full h-[1600px]">
          <Tab5 />
          <Tab4 />
          <Tab3 />
          <Tab2 />
          <Tab1 />
          <Tab />
          {/* 7th Card - HIDROMETRIA positioned below third row on the left */}
          <div className="absolute left-0 top-[929.717px]">
            <Frame125 />
          </div>
        </div>
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