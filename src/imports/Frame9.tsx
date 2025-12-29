import svgPaths from "./svg-hkc198tcgj";

function Title() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Title">
      <div className="relative shrink-0 size-[6px]" data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #224433)" id="dot" r="3" />
        </svg>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">SAÚDE PÚBLICA</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[328px]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-full">Soluções avançadas para deteção da tuberculose, incluindo OneStopT</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[805.59px] top-[962.13px] w-[277.266px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[1063.42px] top-[721.39px]" data-name="Btn">
      <Square />
    </div>
  );
}

function Tab5() {
  return (
    <div className="absolute contents left-[780.23px] top-[708.81px]" data-name="Tab06">
      <div className="absolute bg-[#deeae2] h-[427.8px] left-[780.23px] rounded-[20px] top-[708.81px] w-[342.356px]" data-name="Bg-Element" />
      <Text1 />
      <Btn />
      <div className="absolute h-[213.9px] left-[792.91px] top-[721.39px] w-[316.996px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
          <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">SOFTWARE</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[318px]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[364px]">Sistemas automáticos de apoio à decisão clínica</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[442.1px] top-[962.13px] w-[265.432px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[699.93px] top-[721.39px]" data-name="Btn">
      <Square1 />
    </div>
  );
}

function Tab4() {
  return (
    <div className="absolute contents left-[416.74px] top-[708.81px]" data-name="Tab05">
      <div className="absolute bg-[#deeae2] h-[427.8px] left-[416.74px] rounded-[20px] top-[708.81px] w-[342.356px]" data-name="Bg-Element" />
      <Text3 />
      <Btn1 />
      <div className="absolute h-[213.9px] left-[429.42px] top-[721.39px] w-[316.996px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
          <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">DIGITAL HEALTH</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <div className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[243px]">
        <p className="mb-0">Tele-radiologia</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[78.62px] top-[962.13px] w-[246.835px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[336.44px] top-[721.39px]" data-name="Btn">
      <Square2 />
    </div>
  );
}

function Tab3() {
  return (
    <div className="absolute contents left-[53.26px] top-[708.81px]" data-name="Tab04">
      <div className="absolute bg-[#deeae2] h-[427.8px] left-[53.26px] rounded-[20px] top-[708.81px] w-[342.356px]" data-name="Bg-Element" />
      <Text5 />
      <Btn2 />
      <div className="absolute h-[213.9px] left-[65.94px] top-[721.39px] w-[316.996px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
          <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">LABORATÓRIO</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[328px]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[318px]">Equipamentos para Centros de Diagnóstico</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[805.59px] top-[513.36px] w-[277.266px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[1063.42px] top-[272.62px]" data-name="Btn">
      <Square3 />
    </div>
  );
}

function Tab2() {
  return (
    <div className="absolute contents left-[780.23px] top-[260.04px]" data-name="Tab03">
      <div className="absolute bg-[#deeae2] h-[427.8px] left-[780.23px] rounded-[20px] top-[260.03px] w-[342.356px]" data-name="Bg-Element" />
      <Text7 />
      <Btn3 />
      <div className="absolute h-[213.9px] left-[792.91px] top-[272.62px] w-[316.996px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
          <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">DIAGNÓSTICO</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[#1c1716] text-[28px] tracking-[-0.84px] w-[268px]">{` Raio-X, Tomografia Computorizada (CT) e Ressonância Magnética (MRI)`}</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[442.1px] top-[513.36px] w-[246.835px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[699.93px] top-[272.62px]" data-name="Btn">
      <Square4 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="absolute contents left-[416.74px] top-[260.04px]" data-name="Tab02">
      <div className="absolute bg-[#deeae2] h-[427.8px] left-[416.74px] rounded-[20px] top-[260.04px] w-[342.356px]" data-name="Bg-Element" />
      <Text9 />
      <Btn4 />
      <div className="absolute h-[213.9px] left-[429.42px] top-[272.62px] w-[316.996px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
          <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">INFRAESTRUTURA</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col h-[164px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="font-['Manrope:Medium',sans-serif] font-medium h-[87px] leading-[30px] relative shrink-0 text-[#364153] text-[28px] tracking-[-0.3125px] w-[268px]">
        <p className="mb-0">Equipamentos e mobiliário hospitalar</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[78.62px] top-[513.36px] w-[246.835px]" data-name="Text">
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
    <div className="absolute content-stretch flex items-center left-[336.44px] top-[272.62px]" data-name="Btn">
      <Square5 />
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute contents left-[53.26px] top-[260.04px]" data-name="Tab01">
      <div className="absolute bg-[#deeae2] h-[427.8px] left-[53.26px] rounded-[20px] top-[260.04px] w-[342.356px]" data-name="Bg-Element" />
      <Text11 />
      <Btn5 />
      <div className="absolute h-[213.9px] left-[65.94px] top-[272.62px] w-[316.996px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
          <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
        </svg>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Section 03">
      <div className="absolute bg-[#ecf1ee] h-[1197px] left-1/2 rounded-[25px] top-0 translate-x-[-50%] w-[1175px]" data-name="Bg-element" />
      <div className="absolute left-1/2 translate-x-[-50%] top-[260px] w-[1070px]">
        <div className="grid grid-cols-3 gap-[20px]">
          {/* Tab 1 - Row 1, Col 1 */}
          <div className="relative">
            <div className="bg-[#deeae2] h-[427.8px] rounded-[20px] w-full" data-name="Bg-Element" />
            <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.36px] top-[253.32px] w-[246.835px]" data-name="Text">
              <Title5 />
              <Text10 />
            </div>
            <div className="absolute content-stretch flex items-center left-[283.18px] top-[12.58px]" data-name="Btn">
              <Square5 />
            </div>
            <div className="absolute h-[213.9px] left-[12.68px] top-[12.58px] w-[316.996px]" data-name="Image">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
                <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
              </svg>
            </div>
          </div>
          
          {/* Tab 2 - Row 1, Col 2 */}
          <div className="relative">
            <div className="bg-[#deeae2] h-[427.8px] rounded-[20px] w-full" data-name="Bg-Element" />
            <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.36px] top-[253.32px] w-[246.835px]" data-name="Text">
              <Title4 />
              <Text8 />
            </div>
            <div className="absolute content-stretch flex items-center left-[283.18px] top-[12.58px]" data-name="Btn">
              <Square4 />
            </div>
            <div className="absolute h-[213.9px] left-[12.68px] top-[12.58px] w-[316.996px]" data-name="Image">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
                <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
              </svg>
            </div>
          </div>
          
          {/* Tab 3 - Row 1, Col 3 */}
          <div className="relative">
            <div className="bg-[#deeae2] h-[427.8px] rounded-[20px] w-full" data-name="Bg-Element" />
            <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.36px] top-[253.32px] w-[277.266px]" data-name="Text">
              <Title3 />
              <Text6 />
            </div>
            <div className="absolute content-stretch flex items-center left-[283.18px] top-[12.58px]" data-name="Btn">
              <Square3 />
            </div>
            <div className="absolute h-[213.9px] left-[12.68px] top-[12.58px] w-[316.996px]" data-name="Image">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
                <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
          {/* Tab 4 - Row 2, Col 1 */}
          <div className="relative">
            <div className="bg-[#deeae2] h-[427.8px] rounded-[20px] w-full" data-name="Bg-Element" />
            <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.36px] top-[253.32px] w-[246.835px]" data-name="Text">
              <Title2 />
              <Text4 />
            </div>
            <div className="absolute content-stretch flex items-center left-[283.18px] top-[12.58px]" data-name="Btn">
              <Square2 />
            </div>
            <div className="absolute h-[213.9px] left-[12.68px] top-[12.58px] w-[316.996px]" data-name="Image">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
                <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
              </svg>
            </div>
          </div>
          
          {/* Tab 5 - Row 2, Col 2 */}
          <div className="relative">
            <div className="bg-[#deeae2] h-[427.8px] rounded-[20px] w-full" data-name="Bg-Element" />
            <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.36px] top-[253.32px] w-[265.432px]" data-name="Text">
              <Title1 />
              <Text2 />
            </div>
            <div className="absolute content-stretch flex items-center left-[283.18px] top-[12.58px]" data-name="Btn">
              <Square1 />
            </div>
            <div className="absolute h-[213.9px] left-[12.68px] top-[12.58px] w-[316.996px]" data-name="Image">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
                <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
              </svg>
            </div>
          </div>
          
          {/* Tab 6 - Row 2, Col 3 */}
          <div className="relative">
            <div className="bg-[#deeae2] h-[427.8px] rounded-[20px] w-full" data-name="Bg-Element" />
            <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[25.36px] top-[253.32px] w-[277.266px]" data-name="Text">
              <Title />
              <Text />
            </div>
            <div className="absolute content-stretch flex items-center left-[283.18px] top-[12.58px]" data-name="Btn">
              <Square />
            </div>
            <div className="absolute h-[213.9px] left-[12.68px] top-[12.58px] w-[316.996px]" data-name="Image">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 214">
                <path d={svgPaths.p168cbb80} fill="var(--fill-0, #C4C4C4)" id="Image" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium h-[44.678px] leading-[1.12] left-[calc(50%-12.15px)] text-[#1c1716] text-[48px] text-center top-[89px] tracking-[-1.44px] translate-x-[-50%] w-[710.7px]">Inovação hospitalar</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal h-[83.882px] leading-[1.55] left-[calc(50%+0.42px)] text-[#1c1716] text-[16px] text-center top-[155.18px] translate-x-[-50%] w-[455.63px]">Equipamentos de última geração que garantem o prestígio da sua prática.</p>
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