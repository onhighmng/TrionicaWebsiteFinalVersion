import svgPaths from "./svg-y5pqd7y92t";
import imgImageTrionica from "figma:asset/d93cf643f81c1830c9529a1d38a8671cd0110ae2.png";

function Container() {
  return (
    <div className="absolute blur-[0px] filter h-[30px] left-[832px] top-[840px] w-[305px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[330.95px] not-italic text-[#fb2c36] text-[24px] text-nowrap text-right top-0 tracking-[0.0703px] translate-x-[-100%]">TRIONICA</p>
    </div>
  );
}

function VerticalCutReveal() {
  return <div className="h-[105.594px] shrink-0 w-full" data-name="VerticalCutReveal" />;
}

function Ensino() {
  return (
    <div className="h-[130px] relative shrink-0 w-full" data-name="Ensino">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] text-justify top-[-0.59px] tracking-[-0.3125px] w-[701px]">Disponibilizamos uma vasta gama de equipamentos destinados ao Ensino Superior, Instituições Técnico-Profissionais, Escolas Secundárias e Primárias, bem como Laboratórios de Investigação.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_1] blur-[0px] content-stretch filter flex flex-col items-start relative shrink-0 w-[571px]" data-name="Container">
      <Ensino />
    </div>
  );
}

function Ensino1() {
  return <div className="[grid-area:1_/_2] blur-[0px] filter shrink-0 w-[273px]" data-name="Ensino" />;
}

function Container2() {
  return (
    <div className="blur-[0px] filter gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[182px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Ensino1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[299px] items-start left-[52px] top-[804px] w-[639px]" data-name="Container">
      <VerticalCutReveal />
      <Container2 />
    </div>
  );
}

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
    <div className="absolute bg-[#bbf814] content-stretch flex gap-[10px] h-[46.357px] items-center justify-center left-[799.92px] px-[33px] py-[15px] rounded-[35px] top-[833.37px] w-[184.652px]" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#010101] text-[16px] text-nowrap tracking-[-0.3125px]">CONTACTAR</p>
      <ArrowRight />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[56px] relative shrink-0 w-[130px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 56">
        <g id="Image">
          <circle cx="28" cy="28" fill="var(--fill-0, #C4C4C4)" id="Image_2" r="26.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
          <circle cx="65" cy="28" fill="var(--fill-0, #C4C4C4)" id="Image_3" r="26.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
          <circle cx="102" cy="28" fill="var(--fill-0, #C4C4C4)" id="Image_4" r="26.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function People() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="People">
      <Image />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[172px]" data-name="Content">
      <People />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.15] relative shrink-0 text-[#1c1716] text-[20px] w-[188px]">Junte-se ao Futuro da Educação</p>
    </div>
  );
}

function People1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[183.79px] items-center justify-center left-[67.78px] px-[20px] py-[21px] rounded-[15px] top-[668.22px] w-[203.117px]" data-name="People">
      <Content />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute contents left-[17px] top-[240px]" data-name="Section 01">
      <Button />
      <div className="absolute h-[662.907px] left-[17px] top-[240px] w-[1167px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1167 663">
          <path d={svgPaths.p6458a00} fill="var(--fill-0, #C4C4C4)" id="Image" />
        </svg>
      </div>
      <People1 />
      <div className="absolute font-['Manrope:Medium',sans-serif] font-medium h-[133.509px] leading-[1.12] left-[17px] text-[#1c1716] text-[64px] top-[240px] tracking-[-1.92px] w-[536.414px]">
        <p className="mb-0">{`Equipando o `}</p>
        <p>Futuro</p>
      </div>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[69px] leading-[40px] left-[21px] text-[#1c1716] text-[32px] top-[386px] w-[572px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Eduque com a tecnologia que as melhores universidades do mundo utilizam.
      </p>
    </div>
  );
}

function ImageTrionica() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Image (Trionica)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageTrionica} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-0 tracking-[-0.4492px]">Trionica</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <ImageTrionica />
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.1504px]">Home</p>
    </div>
  );
}

function NavItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.992px]" data-name="NavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[1.5px] px-0 relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.1504px]">Sobre Nós</p>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68.727px]" data-name="NavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[1.5px] px-0 relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[30.5px] not-italic text-[#d65050] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">Soluções</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #D65050)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function DropdownNavItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80.453px]" data-name="DropdownNavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text3 />
        <Icon />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.1504px]">Blog</p>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[29.625px]" data-name="NavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[1.5px] px-0 relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-white grow h-[40px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[57px] not-italic text-[#101828] text-[14px] text-center text-nowrap top-[10.5px] tracking-[-0.1504px] translate-x-[-50%]">Contactar</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40px] relative shrink-0 w-[475.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <NavItem />
        <NavItem1 />
        <DropdownNavItem />
        <NavItem2 />
        <Button1 />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] content-stretch flex h-[72px] items-center justify-between left-[71px] px-[40px] py-0 rounded-[16px] top-0 w-[1024px]" data-name="Navbar">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[30.48px] relative w-[30.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[28px] left-[1.39px] not-italic text-[#fb2c36] text-[32px] text-nowrap top-[-0.56px] tracking-[-0.4492px]">✱</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="blur-[0px] filter h-[20px] relative shrink-0 w-[52.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[32px] text-nowrap top-[0.5px] tracking-[-0.1504px]">ENSINO</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[0.364px] h-[97px] items-center left-0 pl-[-7.636px] pr-0 py-0 top-[126px] w-[160px]" data-name="Container">
      <div className="flex h-[42.874px] items-center justify-center relative shrink-0 w-[42.866px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[316.003deg]">
          <Text5 />
        </div>
      </div>
      <Text6 />
    </div>
  );
}

function ArrowRight1() {
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

function Button2() {
  return (
    <div className="absolute bg-[#bbf814] content-stretch flex gap-[10px] h-[50px] items-center justify-center left-[503.42px] px-[33px] py-[15px] rounded-[35px] top-[2767px] w-[198.145px]" data-name="Button">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1c1716] text-[16px] text-nowrap">Contactar</p>
      <ArrowRight1 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute contents left-[334px] top-[2498px]" data-name="Section 9">
      <Button2 />
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[1.55] left-[calc(50%+10px)] text-[#1c1716] text-[16px] text-center top-[2622px] translate-x-[-50%] w-[534px]">Apostamos em equipamentos de elevada durabilidade, precisão e tecnologia de ponta, promovendo parcerias sólidas com instituições educacionais.</p>
      <div className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[1.12] left-[calc(50%-0.5px)] text-[#1c1716] text-[48px] text-center top-[2498px] tracking-[-1.44px] translate-x-[-50%] w-[515px]">
        <p className="mb-0">Tecnologia que Transforma a Educação</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Title">
      <div className="relative shrink-0 size-[6px]" data-name="dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #224433)" id="dot" r="3" />
        </svg>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">Data</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 text-[#1c1716] w-[328px]" data-name="Text">
      <div className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[28px] tracking-[-0.84px] w-full">
        <p className="mb-0">Soluções para Agricultura e Desporto</p>
        <p>&nbsp;</p>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[14px] w-full">We provide data-driven insights using mapping, crop analysis, and forecasting tools to help farmers make smarter decisions.</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[815.84px] top-[2162.91px] w-[275.973px]" data-name="Text">
      <Title />
      <Text7 />
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
    <div className="absolute content-stretch flex items-center left-[1072.46px] top-[1922.98px]" data-name="Btn">
      <Square />
    </div>
  );
}

function Tab5() {
  return (
    <div className="absolute contents left-[790.6px] top-[1910.44px]" data-name="Tab06">
      <div className="absolute bg-[#deeae2] h-[426.37px] left-[790.6px] rounded-[20px] top-[1910.44px] w-[340.76px]" data-name="Bg-Element" />
      <Text8 />
      <Btn />
      <div className="absolute h-[213.185px] left-[803.22px] top-[1922.98px] w-[315.518px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316 214">
          <path d={svgPaths.p599e100} fill="var(--fill-0, #C4C4C4)" id="Image" />
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">Machinery</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 text-[#1c1716] w-[318px]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[28px] tracking-[-0.84px] w-[364px]">Mobiliário escolar, universitário e laboratorial</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.55] min-w-full relative shrink-0 text-[14px] w-[min-content]">Access advanced machinery and tools designed to simplify tasks, improve efficiency, and support large-scale farming operations.</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[454.04px] top-[2162.91px] w-[264.194px]" data-name="Text">
      <Title1 />
      <Text9 />
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
    <div className="absolute content-stretch flex items-center left-[710.66px] top-[1922.98px]" data-name="Btn">
      <Square1 />
    </div>
  );
}

function Tab4() {
  return (
    <div className="absolute contents left-[428.8px] top-[1910.44px]" data-name="Tab05">
      <div className="absolute bg-[#deeae2] h-[426.37px] left-[428.8px] rounded-[20px] top-[1910.44px] w-[340.76px]" data-name="Bg-Element" />
      <Text10 />
      <Btn1 />
      <div className="absolute h-[213.185px] left-[441.42px] top-[1922.98px] w-[315.518px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316 214">
          <path d={svgPaths.p599e100} fill="var(--fill-0, #C4C4C4)" id="Image" />
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">Organic</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 text-[#1c1716] w-full" data-name="Text">
      <div className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[28px] tracking-[-0.84px] w-[243px]">
        <p className="mb-0">Quadros e painéis interativos</p>
        <p>&nbsp;</p>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.55] min-w-full relative shrink-0 text-[14px] w-[min-content]">Our natural methods prioritize soil health, organic practices, and reduced chemicals to produce safer, healthier food.</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[92.25px] top-[2162.91px] w-[245.683px]" data-name="Text">
      <Title2 />
      <Text11 />
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
    <div className="absolute content-stretch flex items-center left-[348.87px] top-[1922.98px]" data-name="Btn">
      <Square2 />
    </div>
  );
}

function Tab3() {
  return (
    <div className="absolute contents left-[67.01px] top-[1910.44px]" data-name="Tab04">
      <div className="absolute bg-[#deeae2] h-[426.37px] left-[67.01px] rounded-[20px] top-[1910.44px] w-[340.76px]" data-name="Bg-Element" />
      <Text12 />
      <Btn2 />
      <div className="absolute h-[213.185px] left-[79.63px] top-[1922.98px] w-[315.518px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316 214">
          <path d={svgPaths.p599e100} fill="var(--fill-0, #C4C4C4)" id="Image" />
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">Community</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 text-[#1c1716] w-[328px]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[28px] tracking-[-0.84px] w-[197px]">{`Tecnologia para Petróleo & Gás`}</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.55] min-w-full relative shrink-0 text-[14px] w-[min-content]">We support farmers through training, shared knowledge, and collaborative programs that build stronger, more connected communities.</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[815.84px] top-[1715.64px] w-[275.973px]" data-name="Text">
      <Title3 />
      <Text13 />
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
    <div className="absolute content-stretch flex items-center left-[1072.46px] top-[1475.71px]" data-name="Btn">
      <Square3 />
    </div>
  );
}

function Tab2() {
  return (
    <div className="absolute contents left-[790.6px] top-[1463.17px]" data-name="Tab03">
      <div className="absolute bg-[#deeae2] h-[426.37px] left-[790.6px] rounded-[20px] top-[1463.17px] w-[340.76px]" data-name="Bg-Element" />
      <Text14 />
      <Btn3 />
      <div className="absolute h-[213.185px] left-[803.22px] top-[1475.71px] w-[315.518px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316 214">
          <path d={svgPaths.p599e100} fill="var(--fill-0, #C4C4C4)" id="Image" />
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">Irrigation</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 text-[#1c1716] w-full" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.15] relative shrink-0 text-[28px] tracking-[-0.84px] w-[197px]">Ferramentas para Ciências</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.55] min-w-full relative shrink-0 text-[14px] w-[min-content]">Ferramentas para Ciências Naturais, Eletrotecnia/Electrónica, Mecânica, Geofísica e Engenharia Civil</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[454.04px] top-[1715.64px] w-[245.683px]" data-name="Text">
      <Title4 />
      <Text15 />
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
    <div className="absolute content-stretch flex items-center left-[710.66px] top-[1475.71px]" data-name="Btn">
      <Square4 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="absolute contents left-[428.8px] top-[1463.17px]" data-name="Tab02">
      <div className="absolute bg-[#deeae2] h-[426.37px] left-[428.8px] rounded-[20px] top-[1463.17px] w-[340.76px]" data-name="Bg-Element" />
      <Text16 />
      <Btn4 />
      <div className="absolute h-[213.185px] left-[441.42px] top-[1475.71px] w-[315.518px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316 214">
          <path d={svgPaths.p599e100} fill="var(--fill-0, #C4C4C4)" id="Image" />
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.55] relative shrink-0 text-[#1c1716] text-[14px] text-nowrap">Technology</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[164px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="font-['Manrope:Medium',sans-serif] font-medium h-[87px] leading-[30px] relative shrink-0 text-[#364153] text-[28px] tracking-[-0.3125px] w-[257px]">
        <p className="mb-0">Equipamentos didáticos e científicos</p>
        <p>&nbsp;</p>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.55] min-w-full relative shrink-0 text-[#1c1716] text-[14px] w-[min-content]">Use sensors, automation, and precision tools to track crop conditions, increase yields, and support data-driven decisions.</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[92.25px] top-[1715.64px] w-[245.683px]" data-name="Text">
      <Title5 />
      <Text17 />
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
    <div className="absolute content-stretch flex items-center left-[348.87px] top-[1475.71px]" data-name="Btn">
      <Square5 />
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute contents left-[67.01px] top-[1463.17px]" data-name="Tab01">
      <div className="absolute bg-[#deeae2] h-[426.37px] left-[67.01px] rounded-[20px] top-[1463.17px] w-[340.76px]" data-name="Bg-Element" />
      <Text18 />
      <Btn5 />
      <div className="absolute h-[213.185px] left-[79.63px] top-[1475.71px] w-[315.518px]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316 214">
          <path d={svgPaths.p599e100} fill="var(--fill-0, #C4C4C4)" id="Image" />
        </svg>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute contents left-[14px] top-[1204px]" data-name="Section 03">
      <div className="absolute bg-[#ecf1ee] h-[1193px] left-[calc(50%+6.76px)] rounded-[25px] top-[1204px] translate-x-[-50%] w-[1169.521px]" data-name="Bg-element" />
      <Tab5 />
      <Tab4 />
      <Tab3 />
      <Tab2 />
      <Tab1 />
      <Tab />
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium h-[45.145px] leading-[1.12] left-[calc(50%+7.08px)] text-[#1c1716] text-[48px] text-center top-[1241px] tracking-[-1.44px] translate-x-[-50%] w-[540.167px]">Infraestrutura de classe mundial.</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal h-[83.602px] leading-[1.55] left-[calc(50%+7.18px)] text-[#1c1716] text-[16px] text-center top-[1358.66px] translate-x-[-50%] w-[453.505px]">Ferramentas de elite que elevam o prestígio e o rigor do seu ensino.</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Container />
      <Container3 />
      <Section1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[19px] leading-[20px] left-[1134px] not-italic text-[#4a5565] text-[14px] text-right top-[894px] tracking-[-0.1504px] translate-x-[-100%] w-[300px]">Equipamentos Educacionais | Soluções Científicas</p>
      <Navbar />
      <Container6 />
      <Section />
      <Section2 />
    </div>
  );
}