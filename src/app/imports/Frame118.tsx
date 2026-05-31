import svgPaths from "./svg-demwt5vn45";
import imgImageEquipaTrionica from "figma:asset/3804a766a7521e0a7f2d19d0c3b58b1eafb3c2d6.png";
import imgImageTrionicaLogo from "figma:asset/d93cf643f81c1830c9529a1d38a8671cd0110ae2.png";
import imgImageMicroscope from "../../imports/trionica_new_banner_for_hero-1.png";
import imgImageEducacaoVisual from "../../imports/image-15.png";
import imgImageSaudeVisual from "figma:asset/c3e462d779bb19de3da9b06340a2d1b0429475ea.png";
import imgImageAguasVisual from "figma:asset/9a555059eca3a0e95b663c4837fc54ef7a26e76a.png";
import imgImageAmbienteVisual from "figma:asset/d4a1c3843c3ab947a2fce919c2f975b36328a96f.png";
import imgImageMinasVisual from "figma:asset/f63e17a409d48cc3dad0703b061331bc8219a04e.png";
import imgBciLogo from "figma:asset/82cd405a60a5f350e706ed8d47affe6341ac868f.png";
import imgHcbLogo from "figma:asset/63f97fc06c7d3667f8975059283b6bab246ebc3e.png";
import imgLucasNuelleLogo from "figma:asset/c5c27bc2796462ae8e0a654cff95bf69bcb404a9.png";
import imgHero from "figma:asset/01e953708179a504fc7c0147ad9b0d1eba4f4677.png";

function Text() {
  return (
    <div className="absolute content-stretch flex h-[51.113px] items-start left-0 top-[4.36px] w-[32.925px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[38.086px] relative shrink-0 text-[#050505] text-[40.517px] tracking-[-2.6492px] whitespace-pre">O</p>
    </div>
  );
}

function Text1() {
  return <div className="absolute h-[66.697px] left-[32.93px] top-[-8.57px] w-[6.757px]" data-name="Text" />;
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[51.113px] items-start left-[39.69px] top-[4.36px] w-[113.729px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[38.086px] relative shrink-0 text-[#050505] text-[40.517px] tracking-[-2.6492px] whitespace-pre">Futuro</p>
    </div>
  );
}

function Text3() {
  return <div className="absolute h-[66.697px] left-[153.41px] top-[-8.57px] w-0" data-name="Text" />;
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[66.697px] items-start left-0 top-[41.23px] w-[203.35px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[49.804px] relative shrink-0 text-[52.983px] text-[rgba(5,5,5,0.3)] tracking-[-2.6492px] whitespace-pre">Começa</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[39.216px] relative w-[42.25px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[36px] left-[0.29px] not-italic text-[#2354a2] text-[30px] top-[0.21px] tracking-[0.3955px] whitespace-pre">✱</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute blur-[0px] filter h-[31.993px] left-[30.32px] top-[2px] w-[160.325px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#4a5565] text-[24px] top-[-0.09px] tracking-[0.0703px] uppercase whitespace-pre">Quem Somos</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[36.001px] left-[15.99px] top-[127.99px] w-[190.647px]" data-name="Container">
      <div className="absolute flex h-[57.229px] items-center justify-center left-[-66.52px] top-[-24.64px] w-[56.556px]" style={{ "--transform-inner-width": "11.90625", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[125.974deg]">
          <Text5 />
        </div>
      </div>
      <Text6 />
    </div>
  );
}

function AboutSection() {
  return (
    <div className="absolute content-stretch flex h-[35.643px] items-start left-0 top-[36px] w-[240.034px]" data-name="AboutSection">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#101828] text-[30px] tracking-[0.3955px] whitespace-pre">desenvolvimento</p>
    </div>
  );
}

function AboutSection1() {
  return (
    <div className="absolute content-stretch flex h-[35.643px] items-start left-0 top-[72px] w-[295.458px]" data-name="AboutSection">
      <p className="font-['Inter:Light_Italic',sans-serif] font-light italic leading-[36px] relative shrink-0 text-[#101828] text-[30px] tracking-[0.3955px] whitespace-pre">científico e tecnológico</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute blur-[0px] filter h-[144.005px] left-[15.99px] top-[195.99px] w-[342.27px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#101828] text-[30px] top-0 tracking-[0.3955px] whitespace-pre">Desde 2010, a apoiar o</p>
      <AboutSection />
      <AboutSection1 />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#101828] text-[30px] top-[72px] tracking-[0.3955px] w-[338px] whitespace-pre-wrap">do país.</p>
    </div>
  );
}

function AboutSection2() {
  return (
    <div className="absolute h-[103.986px] left-0 top-0 w-[342.27px]" data-name="AboutSection">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] text-justify top-[-0.82px] tracking-[-0.3125px] w-[343px] whitespace-pre-wrap">Somos uma empresa moçambicana sediada em Maputo, especializada no desenvolvimento de soluções tecnológicas e implementação de projetos em áreas estratégicas.</p>
    </div>
  );
}

function AboutSection3() {
  return (
    <div className="absolute h-[129.982px] left-0 top-[119.98px] w-[342.27px]" data-name="AboutSection">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] text-justify top-[-0.82px] tracking-[-0.3125px] w-[343px] whitespace-pre-wrap">Desde 2010, fornecemos equipamentos laboratoriais e tecnologias avançadas para os sectores de Ensino e Investigação, Saúde, Águas, Ambiente e Minas, com foco na qualidade, inovação e fiabilidade.</p>
    </div>
  );
}

function Text7() {
  return <div className="absolute bg-[#2354a2] left-[65.53px] opacity-0 rounded-[7.996px] size-[15.992px] top-[13.99px]" data-name="Text" />;
}

function Text8() {
  return (
    <div className="absolute h-[20px] left-[19.99px] top-[11.99px] w-[83.071px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[42px] not-italic text-[#2354a2] text-[14px] text-center top-[0.27px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">SAIBA MAIS</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[-36.76px] size-[15.992px] top-[13.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9917 15.9917">
        <g id="Icon">
          <path d="M3.3316 7.99584H12.6601" id="Vector" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
          <path d={svgPaths.pb983200} id="Vector_2" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[115.07px] size-[15.992px] top-[13.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9917 15.9917">
        <g id="Icon">
          <path d="M3.3316 7.99584H12.6601" id="Vector" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
          <path d={svgPaths.pb983200} id="Vector_2" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
        </g>
      </svg>
    </div>
  );
}

function FlowButton() {
  return (
    <div className="absolute border-[1.273px] border-[rgba(0,0,0,0.1)] border-solid h-[46.533px] left-0 overflow-clip rounded-[100px] top-[273.95px] w-[149.604px]" data-name="FlowButton">
      <Text7 />
      <Text8 />
      <Icon />
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute blur-[0px] filter h-[320.48px] left-0 top-0 w-[342.27px]" data-name="Container">
      <AboutSection2 />
      <AboutSection3 />
      <FlowButton />
    </div>
  );
}

function ImageEquipaTrionica() {
  return (
    <div className="absolute blur-[0px] filter h-[256.702px] left-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[352.47px] w-[342.27px]" data-name="Image (Equipa Trionica)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgImageEquipaTrionica} />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16.002px] relative shrink-0 w-[10.393px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-white top-[0.64px] whitespace-pre">✓</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#2354a2] content-stretch flex items-center justify-center left-0 rounded-[21356900px] size-[23.997px] top-[4px]" data-name="Container">
      <Text9 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.45px] tracking-[-0.3125px] whitespace-pre">Equipamentos Científicos</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[39.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.27px] tracking-[-0.1504px] w-[264px] whitespace-pre-wrap">Soluções completas para laboratórios de ensino e investigação</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[67.994px] items-start left-[35.99px] top-0 w-[306.278px]" data-name="Container">
      <Heading3 />
      <Paragraph />
    </div>
  );
}

function AboutSection4() {
  return (
    <div className="h-[67.994px] relative shrink-0 w-full" data-name="AboutSection">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16.002px] relative shrink-0 w-[10.393px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-white top-[0.64px] whitespace-pre">✓</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#2354a2] content-stretch flex items-center justify-center left-0 rounded-[21356900px] size-[23.997px] top-[4px]" data-name="Container">
      <Text10 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.45px] tracking-[-0.3125px] whitespace-pre">Consultoria Técnica</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[39.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.27px] tracking-[-0.1504px] w-[215px] whitespace-pre-wrap">Apoio especializado na escolha e implementação de equipamentos</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[67.994px] items-start left-[35.99px] top-0 w-[306.278px]" data-name="Container">
      <Heading4 />
      <Paragraph1 />
    </div>
  );
}

function AboutSection5() {
  return (
    <div className="h-[67.994px] relative shrink-0 w-full" data-name="AboutSection">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16.002px] relative shrink-0 w-[10.393px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-white top-[0.64px] whitespace-pre">✓</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#2354a2] content-stretch flex items-center justify-center left-0 rounded-[21356900px] size-[23.997px] top-[4px]" data-name="Container">
      <Text11 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.45px] tracking-[-0.3125px] whitespace-pre">{`Manutenção & Suporte`}</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[39.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.27px] tracking-[-0.1504px] w-[245px] whitespace-pre-wrap">Atendimento 24/7 com equipa técnica qualificada</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[67.994px] items-start left-[35.99px] top-0 w-[306.278px]" data-name="Container">
      <Heading5 />
      <Paragraph2 />
    </div>
  );
}

function AboutSection6() {
  return (
    <div className="h-[67.994px] relative shrink-0 w-full" data-name="AboutSection">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16.002px] relative shrink-0 w-[10.393px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-white top-[0.64px] whitespace-pre">✓</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#2354a2] content-stretch flex items-center justify-center left-0 rounded-[21356900px] size-[23.997px] top-[4px]" data-name="Container">
      <Text12 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.45px] tracking-[-0.3125px] whitespace-pre">Formação Profissional</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[39.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.27px] tracking-[-0.1504px] w-[286px] whitespace-pre-wrap">Capacitação contínua no uso de tecnologias laboratoriais</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[67.994px] items-start left-[35.99px] top-0 w-[306.278px]" data-name="Container">
      <Heading6 />
      <Paragraph3 />
    </div>
  );
}

function AboutSection7() {
  return (
    <div className="h-[67.994px] relative shrink-0 w-full" data-name="AboutSection">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute blur-[0px] content-stretch filter flex flex-col gap-[15.992px] h-[319.953px] items-start left-0 top-[641.17px] w-[342.27px]" data-name="Container">
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
      <AboutSection7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[961.122px] left-[15.99px] top-[387.99px] w-[342.27px]" data-name="Container">
      <Container1 />
      <ImageEquipaTrionica />
      <Container10 />
    </div>
  );
}

function AnimatedCounter() {
  return (
    <div className="h-[39.999px] relative shrink-0 w-[41.63px]" data-name="AnimatedCounter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Extra_Light',sans-serif] font-extralight leading-[40px] left-0 not-italic text-[#2354a2] text-[36px] top-[0.09px] tracking-[-0.5309px] w-[42px] whitespace-pre-wrap">0+</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[39.154px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#4a5565] text-[10px] top-[0.27px] tracking-[0.1172px] whitespace-pre">Clientes</p>
      </div>
    </div>
  );
}

function AboutSection8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.996px] h-[63.002px] items-center left-0 top-0 w-[159.131px]" data-name="AboutSection">
      <AnimatedCounter />
      <Text13 />
    </div>
  );
}

function AnimatedCounter1() {
  return (
    <div className="h-[39.999px] relative shrink-0 w-[41.63px]" data-name="AnimatedCounter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Extra_Light',sans-serif] font-extralight leading-[40px] left-0 not-italic text-[#2354a2] text-[36px] top-[0.09px] tracking-[-0.5309px] w-[42px] whitespace-pre-wrap">0+</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[24.186px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#4a5565] text-[10px] top-[0.27px] tracking-[0.1172px] whitespace-pre">Anos</p>
      </div>
    </div>
  );
}

function AboutSection9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.996px] h-[63.002px] items-center left-[183.13px] top-0 w-[159.141px]" data-name="AboutSection">
      <AnimatedCounter1 />
      <Text14 />
    </div>
  );
}

function AnimatedCounter2() {
  return (
    <div className="h-[39.999px] relative shrink-0 w-[41.63px]" data-name="AnimatedCounter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Extra_Light',sans-serif] font-extralight leading-[40px] left-0 not-italic text-[#2354a2] text-[36px] top-[0.09px] tracking-[-0.5309px] w-[42px] whitespace-pre-wrap">0+</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[73.991px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#4a5565] text-[10px] top-[0.27px] tracking-[0.1172px] whitespace-pre">Marcas Globais</p>
      </div>
    </div>
  );
}

function AboutSection10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.996px] h-[63.002px] items-center left-0 top-[87px] w-[159.131px]" data-name="AboutSection">
      <AnimatedCounter2 />
      <Text15 />
    </div>
  );
}

function AnimatedCounter3() {
  return (
    <div className="h-[39.999px] relative shrink-0 w-[20.726px]" data-name="AnimatedCounter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Extra_Light',sans-serif] font-extralight leading-[40px] left-0 not-italic text-[#2354a2] text-[36px] top-[0.09px] tracking-[-0.5309px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[94.23px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#4a5565] text-[10px] top-[0.27px] tracking-[0.1172px] whitespace-pre">Sectores Atendidos</p>
      </div>
    </div>
  );
}

function AboutSection11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.996px] h-[63.002px] items-center left-[183.13px] top-[87px] w-[159.141px]" data-name="AboutSection">
      <AnimatedCounter3 />
      <Text16 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute blur-[0px] filter h-[150.002px] left-0 top-[31.99px] w-[342.27px]" data-name="Container">
      <AboutSection8 />
      <AboutSection9 />
      <AboutSection10 />
      <AboutSection11 />
    </div>
  );
}

function Text17() {
  return <div className="absolute bg-[#2354a2] left-[65.53px] opacity-0 rounded-[7.996px] size-[15.992px] top-[13.99px]" data-name="Text" />;
}

function Text18() {
  return (
    <div className="absolute h-[20px] left-[19.99px] top-[11.99px] w-[83.071px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[42px] not-italic text-[#2354a2] text-[14px] text-center top-[0.27px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">SAIBA MAIS</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[-36.76px] size-[15.992px] top-[13.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9917 15.9917">
        <g id="Icon">
          <path d="M3.3316 7.99584H12.6601" id="Vector" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
          <path d={svgPaths.pb983200} id="Vector_2" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[115.07px] size-[15.992px] top-[13.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9917 15.9917">
        <g id="Icon">
          <path d="M3.3316 7.99584H12.6601" id="Vector" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
          <path d={svgPaths.pb983200} id="Vector_2" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
        </g>
      </svg>
    </div>
  );
}

function FlowButton1() {
  return (
    <div className="absolute border-[1.273px] border-[rgba(0,0,0,0.1)] border-solid h-[46.533px] left-[96.33px] overflow-clip rounded-[100px] top-0 w-[149.604px]" data-name="FlowButton">
      <Text17 />
      <Text18 />
      <Icon2 />
      <Icon3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute blur-[0px] filter h-[46.533px] left-0 top-[213.99px] w-[342.27px]" data-name="Container">
      <FlowButton1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0.636px_0px_0px] border-solid h-[261.158px] left-[15.99px] top-[1413.11px] w-[342.27px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function AboutSection12() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[1722.258px] left-0 top-[270.11px] w-[374.253px]" data-name="AboutSection">
      <Container />
      <Heading />
      <Container11 />
      <Container14 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[65.532px] items-start left-0 top-[5.3px] w-[43.577px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[188px] relative shrink-0 text-[#050505] text-[200px] tracking-[-8px] whitespace-pre">O</p>
    </div>
  );
}

function Text20() {
  return <div className="absolute h-[85.225px] left-[43.58px] top-[-10.92px] w-[9.921px]" data-name="Text" />;
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[65.532px] items-start left-[53.5px] top-[5.3px] w-[153.879px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[188px] relative shrink-0 text-[#050505] text-[200px] tracking-[-8px] whitespace-pre">Futuro</p>
    </div>
  );
}

function Text22() {
  return <div className="absolute h-[85.225px] left-[207.38px] top-[-10.92px] w-0" data-name="Text" />;
}

function Text23() {
  return (
    <div className="absolute content-stretch flex h-[85.225px] items-start left-0 top-[52.62px] w-[267.247px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[244.4px] relative shrink-0 text-[260px] text-[rgba(5,5,5,0.3)] tracking-[-8px] whitespace-pre">Começa</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[127.088px] left-[23.2px] top-[36.66px] w-[209.818px]" data-name="Paragraph">
      <Text19 />
      <Text20 />
      <Text21 />
      <Text22 />
      <Text23 />
    </div>
  );
}

function ImageTrionicaLogo() {
  return (
    <div className="h-[13.831px] relative shrink-0 w-[13.337px]" data-name="Image (Trionica Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTrionicaLogo} />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[7.486px] relative shrink-0 w-[22.653px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28.8px] left-[11px] text-[#050505] text-[24px] text-center top-[0.83px] tracking-[-0.48px] translate-x-[-50%] whitespace-pre">Triónica</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[13.831px] relative shrink-0 w-[39.109px]" data-name="Frame2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.118px] items-center relative size-full">
        <ImageTrionicaLogo />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container15() {
  return <div className="bg-[#667085] h-[0.649px] rounded-[21356900px] shrink-0 w-[7.279px]" data-name="Container" />;
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[10.4px]" data-name="Frame2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.559px] items-center justify-center pb-[0.003px] pt-0 px-0 relative size-full">
        {[...Array(3).keys()].map((_, i) => (
          <Container15 key={i} />
        ))}
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch hidden h-[13.831px] items-center justify-between left-[14.56px] top-[6.24px] w-[345.284px]" data-name="Container">
      {/* Frame1 (Trionica logo) and Frame4 (burger menu) hidden - now using Navbar component */}
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[19.76px] left-0 top-0 w-[361.918px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[38px] left-0 text-[#050505] text-[32px] top-[0.67px] w-[346px] whitespace-pre-wrap">A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute contents inset-[18.75%_12.5%]" data-name="Icon">
      <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.29 3.64">
            <path d={svgPaths.p219e1700} id="Vector" stroke="var(--stroke-0, #4278EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.389991" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[5.2px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[5.2px]" data-name="Icon">
      <Icon5 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="absolute bg-white left-[95.7px] rounded-[80px] size-[13.516px] top-[5.2px]" data-name="Arrow">
      <div className="absolute flex items-center justify-center left-[-1.04px] size-[5.2px] top-[-1.04px]">
        <div className="flex-none rotate-[180deg]">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[7.801px] relative w-[78.802px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30px] left-[39px] text-[30px] text-center text-white top-[3.01px] translate-x-[-50%] whitespace-pre">Conheça-nos Melhor</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#4278ec] h-[23.915px] relative rounded-[80px] w-[113.371px]" data-name="Button2">
      <Arrow />
      <div className="absolute flex h-[7.801px] items-center justify-center left-[-64.24px] top-[0.26px] w-[78.802px]">
        <div className="flex-none rotate-[180deg]">
          <Paragraph8 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[56.154px] left-[24.44px] top-[247px] w-[361.918px]" data-name="Frame6">
      <Paragraph6 />
      <div className="absolute flex h-[23.915px] items-center justify-center left-[-113.37px] top-[8.32px] w-[113.371px]">
        <div className="flex-none rotate-[180deg]">
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[12.122px] left-[5.04px] top-[4.01px] w-[15.271px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[19.2px] left-[7.91px] text-[#050505] text-[16px] text-center top-[0.86px] tracking-[-0.32px] translate-x-[-50%] whitespace-pre">OnHigh</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#ffb844] h-[20.143px] relative rounded-[70px] w-[25.354px]" data-name="Frame4">
      <Paragraph9 />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[#171717] h-[52.78px] left-[-0.07px] top-[501.54px] w-[393.12px]" data-name="Container" />;
}

function Vector() {
  return (
    <div className="absolute contents inset-[18%_89.06%_18%_0]" data-name="Vector">
      <div className="absolute inset-[31.27%_97.72%_41.17%_0.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.60565 7.16594">
          <path d={svgPaths.p9aee180} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_96.86%_41.17%_2.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.1733 7.16594">
          <path d={svgPaths.p3013e7f0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.28%_94.89%_41.17%_3.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6332 1.18474">
          <path d={svgPaths.p28efac80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_94.79%_48.25%_3.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.21516 5.32366">
          <path d={svgPaths.p2d7b0500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_93.15%_41.17%_5.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.76964 7.16594">
          <path d={svgPaths.p2d11f300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_91.21%_41.17%_7.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.68205 7.16594">
          <path d={svgPaths.p14793000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_89.72%_41.17%_9.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5087 7.16594">
          <path d={svgPaths.p2bbc7c00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.15%_94.7%_47.09%_3.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.79712 5.91791">
          <path d={svgPaths.p238e48c0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18%_89.06%_25.44%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.1397 14.7054">
          <path d={svgPaths.p2f6d2200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.34%_89.28%_18%_0.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.867 16.0319">
          <path d={svgPaths.p15654c80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector2() {
  return (
    <div className="absolute contents inset-[13%_69.12%_13%_24.9%]" data-name="Vector_2">
      <div className="absolute inset-[13%_73.87%_13%_24.9%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.04479 19.2396">
          <path d={svgPaths.p71b9170} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.28%_72.41%_13.27%_26.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.04479 19.0967">
          <path d={svgPaths.p2609a000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.42%_70.75%_17.41%_27.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.61575 16.9453">
          <path d={svgPaths.p3a20100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.63%_69.12%_17.62%_29.48%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.61574 16.8354">
          <path d={svgPaths.p53f8600} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector3() {
  return (
    <div className="absolute contents inset-[1%_47.29%_1%_44.85%]" data-name="Vector_3">
      <div className="absolute inset-[34.94%_50.01%_19.44%_46.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0954 11.8623">
          <path d={svgPaths.p8901080} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.49%_51.76%_65.25%_48.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.561863 4.74667">
          <path d={svgPaths.p3b3b3540} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.74%_51.76%_1%_48.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.561863 4.74669">
          <path d={svgPaths.p1c8eae00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.87%_53.12%_58.21%_46.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.10262 2.06135">
          <path d={svgPaths.p174c8280} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.72%_49.94%_18.47%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.07155 2.03104">
          <path d={svgPaths.p14381b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.69%_53.69%_41.19%_44.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8399 0.550992">
          <path d={svgPaths.p288b6b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[41.19%] left-1/2 right-[48.53%] top-[56.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83991 0.550992">
          <path d={svgPaths.p24208d80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.72%_53.12%_19.44%_46.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.8161 1.78035">
          <path d={svgPaths.p2430d480} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.26%_50.04%_58.21%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.73173 1.6977">
          <path d={svgPaths.p16d6f600} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.78%_52.71%_89.16%_46.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.87057 2.0955">
          <path d={svgPaths.p21990c20} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1%_51.86%_91.15%_47.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.93582 2.04193">
          <path d={svgPaths.p31f4fec0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.16%_50.75%_90.05%_48.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.58986 2.28656">
          <path d={svgPaths.p48bac80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[4.24%_49.68%_85.38%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.90732 2.69703">
          <path d={svgPaths.peaeab00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.74%_48.92%_79.68%_50.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43257 2.49041">
          <path d={svgPaths.p269fd400} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.77%_48.35%_72.12%_50.94%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.36404 2.62816">
          <path d={svgPaths.p6b6ba00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32%_47.57%_60.96%_51.74%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.28384 1.82926">
          <path d={svgPaths.p3e751700} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.37%_47.43%_53.7%_51.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05894 1.02206">
          <path d={svgPaths.p329ae100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.67%_47.29%_41.17%_52.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.12915 2.38301">
          <path d={svgPaths.pe28a980} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[62.67%_47.32%_30.38%_52.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.20221 1.80721">
          <path d={svgPaths.p21c75680} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.34%_53.88%_67.78%_45.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.29363 1.26792">
          <path d={svgPaths.p2d203b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[85.59%_49.21%_9.53%_50.4%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.29357 1.26793">
          <path d={svgPaths.p2d6b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.53%_50.04%_30.86%_46.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.648 2.7591">
          <path d={svgPaths.p2e2e7711} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.1%_53.69%_28.04%_45.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.52966 1.52288">
          <path d={svgPaths.p1b674300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[82.5%_50.76%_10.91%_48.94%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.980809 1.71512">
          <path d={svgPaths.p16592200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[91.43%_50.52%_3.84%_49.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.815098 1.22925">
          <path d={svgPaths.p2547d6c0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.69%_48.8%_56.71%_50.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33248 0.936589">
          <path d={svgPaths.p714f200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[51.66%] left-1/2 right-[49.43%] top-[43.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.87904 1.21209">
          <path d={svgPaths.p22296d00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector4() {
  return (
    <div className="absolute contents inset-[16.5%_21.2%_16.5%_66.68%]" data-name="Vector_4">
      <div className="absolute inset-[30.48%_29.24%_61.01%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5532 2.21387">
          <path d={svgPaths.p3f13a100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_29.31%_70.93%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.30985 1.97904">
          <path d={svgPaths.p27f1e200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_28.83%_56.69%_69.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.23353 6.8067">
          <path d={svgPaths.p23b0f980} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.26%_30.63%_32.32%_66.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.89096 8.94738">
          <path d={svgPaths.p3cabbf00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.5%_31.92%_65.13%_67.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.368688 4.51623">
          <path d={svgPaths.p2ce9e500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[64.27%_31.92%_16.5%_67.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.368688 4.99951">
          <path d={svgPaths.p1aff900} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.33%_23.55%_28.59%_76.16%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.930027 1.06184">
          <path d={svgPaths.p1c9d21c0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_23.29%_28.52%_76.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.703305 0.803165">
          <path d={svgPaths.p2b5ca00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.38%_23.04%_28.55%_76.77%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.632322 0.798095">
          <path d={svgPaths.p22d3da80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.43%_22.88%_28.55%_77.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.372052 1.04653">
          <path d={svgPaths.p39a8f480} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_22.62%_28.53%_77.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.701734 0.801475">
          <path d={svgPaths.p2e2df080} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.45%_22.36%_28.52%_77.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.624007 0.786161">
          <path d={svgPaths.p25073100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_22.14%_28.59%_77.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.41601 0.784471">
          <path d={svgPaths.p35bc8700} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_21.89%_28.53%_77.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.701734 0.801475">
          <path d={svgPaths.p1daa3000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_21.63%_28.59%_78.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.620357 0.786161">
          <path d={svgPaths.p28430f00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.43%_21.45%_28.55%_78.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.372052 1.04653">
          <path d={svgPaths.p1e9c9e80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[74.25%_23.49%_25.27%_76.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.0738 0.124228">
          <path d={svgPaths.p14a4be00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.98%_29.24%_21.51%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5532 2.21387">
          <path d={svgPaths.p20a64af0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.95%_29.31%_31.44%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.30985 1.97904">
          <path d={svgPaths.pdc6b880} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.62%_28.83%_17.2%_69.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.23353 6.80667">
          <path d={svgPaths.p1a0d9780} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_28%_56.69%_71.3%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.29111 6.80667">
          <path d={svgPaths.p17f9c180} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.51%_26.55%_56.01%_72.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31184 7.14532">
          <path d={svgPaths.p35c9a00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_25.19%_56.69%_73.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.72628 6.80498">
          <path d={svgPaths.p1e65eb00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_23.86%_66.97%_75.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.67514 3.00854">
          <path d={svgPaths.p6e40280} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.12%_23.35%_56.7%_74.92%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.70881 6.80667">
          <path d={svgPaths.pfc14680} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.5%_21.2%_56.02%_76.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.10035 7.14532">
          <path d={svgPaths.p30b14d00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_21.59%_60.97%_77.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.54038 4.57067">
          <path d={svgPaths.p1ba73080} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[61.38%_27.41%_23.47%_71.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.9861 3.93768">
          <path d={svgPaths.p1bf0b680} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.63%_26.84%_17.19%_71.12%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75194 6.8067">
          <path d={svgPaths.p1844af00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.62%_24.96%_17.2%_73.31%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.70883 6.80667">
          <path d={svgPaths.p24f5a180} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.95%_25.47%_27.48%_73.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.67514 3.00854">
          <path d={svgPaths.p1c289d80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector5() {
  return (
    <div className="absolute contents inset-[0_0_0_92.76%]" data-name="Vector_5">
      <div className="absolute inset-[69.66%_6.8%_7.01%_92.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.43791 6.06754">
          <path d={svgPaths.p1002900} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.51%_6.25%_7.09%_93.28%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.56521 6.08181">
          <path d={svgPaths.p3328ab80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.15%_5.72%_6.89%_93.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.48478 6.22868">
          <path d={svgPaths.p168d9b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.19%_4.93%_7.26%_94.39%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.2412 6.1245">
          <path d={svgPaths.p34e2ba00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.3%_4.63%_7.38%_95.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.610994 6.06539">
          <path d={svgPaths.p2b378580} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.21%_4.08%_7.14%_95.48%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.46906 6.14904">
          <path d={svgPaths.p102e0d80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.94%_3.3%_7.5%_96.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.2412 6.12456">
          <path d={svgPaths.p3ffbd300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.01%_2.59%_7.66%_97.02%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.2636 6.06539">
          <path d={svgPaths.p3a870000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.6%_2.1%_7.57%_97.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.43269 6.19397">
          <path d={svgPaths.p3cd40700} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.86%_1.55%_7.81%_98.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.46905 6.06754">
          <path d={svgPaths.p3af51600} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.42%_0.98%_7.62%_98.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.4848 6.22865">
          <path d={svgPaths.p3a4b6e80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.69%_0.49%_7.98%_99.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.2636 6.06539">
          <path d={svgPaths.p3de1bb00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.28%_0_7.77%_99.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45608 6.22866">
          <path d={svgPaths.p235df600} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.41%_1.17%_38.36%_93.93%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1666 13.3186">
          <path d={svgPaths.p208d4380} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.55%_2.47%_52.89%_95.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.6336 7.68568">
          <path clipRule="evenodd" d={svgPaths.p3fd74000} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_3.22%_90.36%_95.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.61822 2.50686">
          <path clipRule="evenodd" d={svgPaths.p1753d100} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.87%_2.58%_87.58%_96.96%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.50538 1.44297">
          <path clipRule="evenodd" d={svgPaths.p2acbae00} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.87%_4.2%_87.58%_95.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.50538 1.44297">
          <path clipRule="evenodd" d={svgPaths.p2acbae00} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_7.09%_0_92.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.262603 0.17732">
          <path d={svgPaths.p1409b200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_0.31%_0_93.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8608 0.17732">
          <path d={svgPaths.p10c68e00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_0.07%_0_99.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.262603 0.17732">
          <path d={svgPaths.p1409b200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute contents inset-0">
      <Vector />
      <Vector2 />
      <Vector3 />
      <Vector4 />
      <Vector5 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[25.999px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Frame6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.999px] items-start left-[31.38px] top-[514.8px] w-[330.457px]" data-name="Frame1">
      <Icon7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute left-[0.07px] size-0 top-[-147.42px]" data-name="Group8">
      <Container17 />
      <Frame />
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-[#eee] h-[87.1px] left-0 top-0 w-[393.12px]" data-name="Container" />;
}

function Hero() {
  return (
    <div className="absolute h-0 left-0 top-[147.42px] w-[374.399px]" data-name="Hero">
      <Group2 />
      <Container18 />
    </div>
  );
}

function ImageMicroscope() {
  return (
    <div className="h-[265.639px] relative shrink-0 w-full" data-name="Image (Microscope)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageMicroscope} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute content-stretch flex flex-col h-[265.639px] items-start left-[116.79px] overflow-clip top-[33.36px] w-[195.581px]" data-name="Group5">
      <ImageMicroscope />
    </div>
  );
}

function ManufactureLandingPage() {
  return (
    <div className="bg-[#f5f5f5] h-[349.178px] overflow-clip relative shrink-0 w-full" data-name="ManufactureLandingPage">
      <Paragraph4 />
      <Container16 />
      <Frame5 />
      <div className="absolute flex h-[30.517px] items-center justify-center left-[115.44px] top-[59.99px] w-[32.175px]" style={{ "--transform-inner-width": "58.3125", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[328deg]">
          <Frame3 />
        </div>
      </div>
      <Hero />
      <Group />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute bg-[#eee] content-stretch flex flex-col h-[334.105px] items-start left-0 overflow-clip px-[-0.073px] py-0 top-0 w-[374.253px]" data-name="HeroSection">
      <ManufactureLandingPage />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[16.797px] opacity-0 relative shrink-0 w-[342.27px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Manrope:Medium',sans-serif] font-medium leading-[16.8px] left-0 text-[#4a5565] text-[14px] top-[-0.27px] tracking-[-1px] whitespace-pre">2026</p>
      </div>
    </div>
  );
}

function LatestPostSection() {
  return (
    <div className="h-[35.694px] relative w-[37.397px]" data-name="LatestPostSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[30px] left-[-4.05px] text-[#245454] text-[30px] top-[3.06px] whitespace-pre">✱</p>
      </div>
    </div>
  );
}

function LatestPostSection1() {
  return (
    <div className="h-[26.394px] relative shrink-0 w-[223.476px]" data-name="LatestPostSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[26.4px] left-0 text-[#101828] text-[24px] top-[0.82px] tracking-[-0.6px] whitespace-pre">NOSSAS SOLUÇÕES</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[30.004px] opacity-0 relative shrink-0 w-[342.27px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.459px] items-center pl-[-7.535px] pr-0 py-0 relative size-full">
        <div className="flex h-[51.232px] items-center justify-center relative shrink-0 w-[50.854px]" style={{ "--transform-inner-width": "11.90625", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[125.974deg]">
            <LatestPostSection />
          </div>
        </div>
        <LatestPostSection1 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[77.989px] opacity-0 relative shrink-0 w-[342.27px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[26px] left-0 text-[#4a5565] text-[16px] top-[-0.73px] w-[312px] whitespace-pre-wrap">Transformando laboratórios. Capacitando profissionais. Construindo o futuro de Moçambique.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[23.997px] h-[172.786px] items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Container19 />
      <Paragraph11 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[23.997px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0129 11.9994">
            <path d={svgPaths.pcfa5900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.66%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99979 7.99979">
            <path d="M0.999894 0.999894V6.99989" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9985 8.4991">
            <path d={svgPaths.p26d71300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#2354a2] relative rounded-[14px] shrink-0 size-[47.985px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[11.994px] px-[11.994px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[24.992px] relative shrink-0 w-[238.403px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25px] left-0 not-italic text-[#101828] text-[20px] top-[-0.36px] tracking-[-0.9492px] whitespace-pre">Educação</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[238.403px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.27px] tracking-[-0.1504px] whitespace-pre">Ensino • Laboratórios • Investigação</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[48.989px] relative shrink-0 w-[238.403px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.998px] items-start relative size-full">
        <Text24 />
        <Text25 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[15.992px] h-[48.989px] items-center left-0 top-0 w-[302.38px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function ImageEducacaoVisual() {
  return (
    <div className="h-[319.993px] relative rounded-[14px] shrink-0 w-[277.03px]" data-name="Image (Educação visual)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageEducacaoVisual} />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[22.496px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[#101828] text-[18px] top-[0.64px] tracking-[-0.8895px] whitespace-pre">EDUCAÇÃO-ENGENHARIAS</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[68.263px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[274px] whitespace-pre-wrap">Equipamentos didáticos, laboratoriais e de investigação para escolas, centros de formação, laboratórios e universidades.</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[102.752px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph12 />
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text26() {
  return (
    <div className="absolute h-[45.509px] left-[17.99px] top-0 w-[217.767px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[218px] whitespace-pre-wrap">Equipamentos didácticos e científicos</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[45.509px] relative shrink-0 w-full" data-name="List Item">
      <Container25 />
      <Text26 />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text27() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[213.61px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Soluções laboratoriais completas</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container26 />
      <Text27 />
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text28() {
  return (
    <div className="absolute h-[45.509px] left-[17.99px] top-0 w-[217.767px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[186px] whitespace-pre-wrap">Ferramentas de investigação científica</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[45.509px] relative shrink-0 w-full" data-name="List Item">
      <Container27 />
      <Text28 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text29() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[194.406px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Suporte técnico especializado</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container28 />
      <Text29 />
    </div>
  );
}

function Container29() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text30() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[157.779px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Formação e capacitação</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container29 />
      <Text30 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[207.255px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[248.527px] items-start left-0 pb-[0.636px] pt-[20.636px] px-[20.636px] rounded-[14px] top-[8px] w-[277.03px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.636px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <List />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[80.78px] size-[15.992px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9917 15.9917">
        <g id="Icon">
          <path d={svgPaths.p3486600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
          <path d={svgPaths.p23836400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#ff6747] h-[35.991px] left-[164.26px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05),0px_1px_2px_-1px_rgba(0,0,0,0.05)] top-[276.52px] w-[112.767px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44.49px] not-italic text-[14px] text-center text-white top-[8.27px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Ver mais</p>
      <Icon9 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[312.514px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Button />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[435.266px] relative shrink-0 w-[277.03px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <Container24 />
        <Container31 />
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[20px] h-[808.515px] items-start left-0 pb-[0.636px] pl-[16.628px] pr-[0.636px] pt-[16.628px] rounded-[16px] top-[72.99px] w-[310.286px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.636px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <ImageEducacaoVisual />
      <Container32 />
    </div>
  );
}

function Container33() {
  return <div className="absolute left-0 opacity-0 size-[47.995px] top-[-96px]" data-name="Container" />;
}

function Container34() {
  return (
    <div className="h-[881.501px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Article />
      <Container33 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[23.997px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-1/4 right-[41.66%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-1px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99979 1.99979">
            <path d="M0.999894 0.999894H8.99989" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[91.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9979 1.99979">
            <path d="M0.999894 0.999894H18.998" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_12.5%_8.33%_54.17%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99894 15.9983">
            <path d={svgPaths.p29897180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_54.17%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-1px_-49.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99979 1.99979">
            <path d="M0.999894 0.999894H2.99989" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[29.17%] right-[45.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-16.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99979 7.99979">
            <path d={svgPaths.p35655e70} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-1/2 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99979 5.99979">
            <path d={svgPaths.p11f3d2e0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[14px] shrink-0 size-[47.985px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[11.994px] px-[11.994px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[24.992px] relative shrink-0 w-[224.918px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25px] left-0 not-italic text-[#101828] text-[20px] top-[-0.36px] tracking-[-0.9492px] whitespace-pre">Saúde</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[224.918px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.27px] tracking-[-0.1504px] whitespace-pre">Hospitais • Clínicas • Laboratórios</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[48.989px] relative shrink-0 w-[224.918px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.998px] items-start relative size-full">
        <Text31 />
        <Text32 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[15.992px] h-[48.989px] items-center left-0 top-0 w-[288.894px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function ImageSaudeVisual() {
  return (
    <div className="h-[319.993px] relative rounded-[14px] shrink-0 w-[277.03px]" data-name="Image (Saúde visual)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageSaudeVisual} />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[22.496px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[#364153] text-[18px] top-[0.64px] tracking-[-0.8895px] whitespace-pre">Saúde</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[45.509px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[274px] whitespace-pre-wrap">Equipamentos hospitalares, laboratoriais e de investigação para hospitais, unidades de saúde e laboratórios.</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[79.998px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph13 />
    </div>
  );
}

function Container39() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text33() {
  return (
    <div className="absolute h-[45.509px] left-[17.99px] top-0 w-[217.767px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[175px] whitespace-pre-wrap">Equipamentos hospitalares certificados</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[45.509px] relative shrink-0 w-full" data-name="List Item">
      <Container39 />
      <Text33 />
    </div>
  );
}

function Container40() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text34() {
  return (
    <div className="absolute h-[45.509px] left-[17.99px] top-0 w-[217.767px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[198px] whitespace-pre-wrap">Instrumentação laboratorial de precisão</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[45.509px] relative shrink-0 w-full" data-name="List Item">
      <Container40 />
      <Text34 />
    </div>
  );
}

function Container41() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text35() {
  return (
    <div className="absolute h-[45.509px] left-[17.99px] top-0 w-[217.767px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[158px] whitespace-pre-wrap">Soluções de diagnóstico avançadas</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[45.509px] relative shrink-0 w-full" data-name="List Item">
      <Container41 />
      <Text35 />
    </div>
  );
}

function Container42() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text36() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[161.697px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Manutenção e calibração</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container42 />
      <Text36 />
    </div>
  );
}

function Container43() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text37() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[215.619px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Consultoria técnica especializada</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container43 />
      <Text37 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[230.01px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[271.282px] items-start left-0 pb-[0.636px] pt-[20.636px] px-[20.636px] rounded-[14px] top-[8px] w-[277.03px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.636px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <List1 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[80.78px] size-[15.992px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9917 15.9917">
        <g id="Icon">
          <path d={svgPaths.p3486600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
          <path d={svgPaths.p23836400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#ff6747] h-[35.991px] left-[164.26px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05),0px_1px_2px_-1px_rgba(0,0,0,0.05)] top-[299.28px] w-[112.767px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44.49px] not-italic text-[14px] text-center text-white top-[8.27px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Ver mais</p>
      <Icon11 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[335.268px] relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Button1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col h-0 items-start opacity-0 overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[99.998px] relative shrink-0 w-[277.03px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[19.999px] items-start relative size-full">
        <Container38 />
        <Container46 />
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] h-[473.246px] items-start left-0 pb-[0.636px] pl-[16.628px] pr-[0.636px] pt-[16.628px] rounded-[16px] top-[72.99px] w-[310.286px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.636px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ImageSaudeVisual />
      <Container47 />
    </div>
  );
}

function Container48() {
  return <div className="absolute left-0 opacity-0 size-[47.995px] top-[-96px]" data-name="Container" />;
}

function Container49() {
  return (
    <div className="h-[546.233px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Article1 />
      <Container48 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[23.997px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_20.83%_8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9983 20.9978">
            <path d={svgPaths.p3173ab80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[14px] shrink-0 size-[47.985px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[11.994px] px-[11.994px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[24.992px] relative shrink-0 w-[245.066px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25px] left-0 not-italic text-[#101828] text-[20px] top-[-0.36px] tracking-[-0.9492px] whitespace-pre">Águas</p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[245.066px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.27px] tracking-[-0.1504px] whitespace-pre">Tratamento • Análise • Monitorização</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[48.989px] relative shrink-0 w-[245.066px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.998px] items-start relative size-full">
        <Text38 />
        <Text39 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex gap-[15.992px] h-[48.989px] items-center left-0 top-0 w-[309.043px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function ImageAguasVisual() {
  return (
    <div className="h-[319.993px] relative rounded-[14px] shrink-0 w-[277.03px]" data-name="Image (Águas visual)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageAguasVisual} />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[22.496px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[#364153] text-[18px] top-[0.64px] tracking-[-0.8895px] whitespace-pre">Águas</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[45.509px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[238px] whitespace-pre-wrap">Soluções para tratamento, análise e monitorização da qualidade da água, incluindo equipamentos laboratoriais especializados.</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[79.998px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Paragraph14 />
    </div>
  );
}

function Container54() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text40() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[208.946px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Sistemas de tratamento de água</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container54 />
      <Text40 />
    </div>
  );
}

function Container55() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text41() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[214.694px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Equipamentos de análise química</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container55 />
      <Text41 />
    </div>
  );
}

function Container56() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text42() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[187.544px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Monitorização em tempo real</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container56 />
      <Text42 />
    </div>
  );
}

function Container57() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text43() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[142.384px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Controlo de qualidade</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container57 />
      <Text43 />
    </div>
  );
}

function Container58() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text44() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[159.927px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Soluções personalizadas</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container58 />
      <Text44 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[161.747px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[203.019px] items-start left-0 pb-[0.636px] pt-[20.636px] px-[20.636px] rounded-[14px] top-[8px] w-[277.03px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.636px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <List2 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[80.78px] size-[15.992px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9917 15.9917">
        <g id="Icon">
          <path d={svgPaths.p3486600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
          <path d={svgPaths.p23836400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#ff6747] h-[35.991px] left-[164.26px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05),0px_1px_2px_-1px_rgba(0,0,0,0.05)] top-[231.01px] w-[112.767px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44.49px] not-italic text-[14px] text-center text-white top-[8.27px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Ver mais</p>
      <Icon13 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[267.005px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Button3 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col h-0 items-start opacity-0 overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[99.998px] relative shrink-0 w-[277.03px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <Container53 />
        <Container61 />
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[19.999px] h-[473.246px] items-start left-0 pb-[0.636px] pl-[16.628px] pr-[0.636px] pt-[16.628px] rounded-[16px] top-[72.99px] w-[310.286px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.636px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ImageAguasVisual />
      <Container62 />
    </div>
  );
}

function Container63() {
  return <div className="absolute left-0 opacity-0 size-[47.995px] top-[-96px]" data-name="Container" />;
}

function Container64() {
  return (
    <div className="h-[546.233px] relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Article2 />
      <Container63 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[23.997px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_15.48%_20.83%_15.48%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-6.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5699 17.9982">
            <path d={svgPaths.p12aaf00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[79.17%]" data-name="Vector">
        <div className="absolute inset-[-33.33%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99979 4.99979">
            <path d="M0.999894 3.99989V0.999894" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[14px] shrink-0 size-[47.985px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[11.994px] px-[11.994px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[24.992px] relative shrink-0 w-[105.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25px] left-0 not-italic text-[#101828] text-[20px] top-[-0.36px] tracking-[-0.9492px] whitespace-pre">Ambiente</p>
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[105.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.27px] tracking-[-0.1504px] whitespace-pre">Água • Solo • Ar</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[48.989px] relative shrink-0 w-[105.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.998px] items-start relative size-full">
        <Text45 />
        <Text46 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex gap-[15.992px] h-[48.989px] items-center left-0 top-0 w-[169.414px]" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function ImageAmbienteVisual() {
  return (
    <div className="h-[319.993px] relative rounded-[14px] shrink-0 w-[277.03px]" data-name="Image (Ambiente visual)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageAmbienteVisual} />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[22.496px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[#364153] text-[18px] top-[0.64px] tracking-[-0.8895px] whitespace-pre">Ambiente</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[45.509px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[276px] whitespace-pre-wrap">Sistemas de monitorização da água, solo e ar, unidades de tratamento de águas e águas residuais, instrumentação e sistemas de aquisição e registo de dados.</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[79.998px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Paragraph15 />
    </div>
  );
}

function Container69() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text47() {
  return (
    <div className="absolute h-[45.509px] left-[17.99px] top-0 w-[217.767px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[159px] whitespace-pre-wrap">Monitorização ambiental integrada</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[45.509px] relative shrink-0 w-full" data-name="List Item">
      <Container69 />
      <Text47 />
    </div>
  );
}

function Container70() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text48() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[197.987px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Tratamento de águas residuais</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container70 />
      <Text48 />
    </div>
  );
}

function Container71() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text49() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[184.372px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Análise de qualidade do solo</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container71 />
      <Text49 />
    </div>
  );
}

function Container72() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text50() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[207.265px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Sistemas de aquisição de dados</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container72 />
      <Text50 />
    </div>
  );
}

function Container73() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text51() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[151.165px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Relatórios e consultoria</p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container73 />
      <Text51 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[184.501px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem15 />
      <ListItem16 />
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[225.773px] items-start left-0 pb-[0.636px] pt-[20.636px] px-[20.636px] rounded-[14px] top-[8px] w-[277.03px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.636px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <List3 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[80.78px] size-[15.992px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9917 15.9917">
        <g id="Icon">
          <path d={svgPaths.p3486600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
          <path d={svgPaths.p23836400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#ff6747] h-[35.991px] left-[164.26px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05),0px_1px_2px_-1px_rgba(0,0,0,0.05)] top-[253.77px] w-[112.767px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44.49px] not-italic text-[14px] text-center text-white top-[8.27px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Ver mais</p>
      <Icon15 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[289.76px] relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Button4 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col h-0 items-start opacity-0 overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[99.998px] relative shrink-0 w-[277.03px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <Container68 />
        <Container76 />
      </div>
    </div>
  );
}

function Article3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] h-[473.246px] items-start left-0 pb-[0.636px] pl-[16.628px] pr-[0.636px] pt-[16.627px] rounded-[16px] top-[72.99px] w-[310.286px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.636px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ImageAmbienteVisual />
      <Container77 />
    </div>
  );
}

function Container78() {
  return <div className="absolute left-0 opacity-0 size-[47.995px] top-[-96px]" data-name="Container" />;
}

function Container79() {
  return (
    <div className="h-[546.233px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Article3 />
      <Container78 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[23.997px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9977 19.9979">
            <path d={svgPaths.p2dae1a00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99979" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[14px] shrink-0 size-[47.985px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[11.994px] px-[11.994px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[24.992px] relative shrink-0 w-[219.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25px] left-0 not-italic text-[#101828] text-[20px] top-[-0.36px] tracking-[-0.9492px] whitespace-pre">Minas</p>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[20px] relative shrink-0 w-[219.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.27px] tracking-[-0.1504px] whitespace-pre">Exploração • Análise • Segurança</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[48.989px] relative shrink-0 w-[219.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.998px] items-start relative size-full">
        <Text52 />
        <Text53 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex gap-[15.992px] h-[48.989px] items-center left-0 top-0 w-[283.415px]" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function ImageMinasVisual() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] w-[277.03px]" data-name="Image (Minas visual)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageMinasVisual} />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[22.496px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[#364153] text-[18px] top-[0.64px] tracking-[-0.8895px] whitespace-pre">Minas</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[45.509px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[272px] whitespace-pre-wrap">Equipamentos e soluções para exploração mineira, análise de minerais, monitorização ambiental em minas e segurança no setor mineiro.</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[79.998px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Paragraph16 />
    </div>
  );
}

function Container84() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text54() {
  return (
    <div className="absolute h-[45.509px] left-[17.99px] top-0 w-[217.767px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] w-[187px] whitespace-pre-wrap">Equipamentos de exploração mineira</p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[45.509px] relative shrink-0 w-full" data-name="List Item">
      <Container84 />
      <Text54 />
    </div>
  );
}

function Container85() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text55() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[210.985px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Análise geológica e mineralógica</p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container85 />
      <Text55 />
    </div>
  );
}

function Container86() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text56() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[182.611px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Monitorização de segurança</p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container86 />
      <Text56 />
    </div>
  );
}

function Container87() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text57() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[178.325px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Gestão ambiental em minas</p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container87 />
      <Text57 />
    </div>
  );
}

function Container88() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[21356900px] size-[5.997px] top-[8px]" data-name="Container" />;
}

function Text58() {
  return (
    <div className="absolute h-[22.754px] left-[17.99px] top-0 w-[210.199px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.55px] tracking-[-0.1504px] whitespace-pre">Formação em segurança mineira</p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full" data-name="List Item">
      <Container88 />
      <Text58 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[184.501px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem20 />
      <ListItem21 />
      <ListItem22 />
      <ListItem23 />
      <ListItem24 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[225.773px] items-start left-0 pb-[0.636px] pt-[20.636px] px-[20.636px] rounded-[14px] top-[8px] w-[277.03px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.636px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <List4 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[80.78px] size-[15.992px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9917 15.9917">
        <g id="Icon">
          <path d={svgPaths.p3486600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
          <path d={svgPaths.p23836400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33264" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#ff6747] h-[35.991px] left-[164.26px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05),0px_1px_2px_-1px_rgba(0,0,0,0.05)] top-[253.77px] w-[112.767px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44.49px] not-italic text-[14px] text-center text-white top-[8.27px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Ver mais</p>
      <Icon17 />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[289.76px] relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Button5 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col h-0 items-start opacity-0 overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container90 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[99.998px] relative shrink-0 w-[277.03px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[19.999px] items-start relative size-full">
        <Container83 />
        <Container91 />
      </div>
    </div>
  );
}

function Article4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] h-[473.246px] items-start left-0 pl-[16.628px] pr-[0.636px] py-[16.627px] rounded-[16px] top-[72.99px] w-[310.286px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.636px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ImageMinasVisual />
      <Container92 />
    </div>
  );
}

function Container93() {
  return <div className="absolute left-0 opacity-0 size-[47.995px] top-[-96px]" data-name="Container" />;
}

function Container94() {
  return (
    <div className="h-[546.233px] relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Article4 />
      <Container93 />
    </div>
  );
}

function TimeLine() {
  return (
    <div className="h-[3258.414px] relative shrink-0 w-full" data-name="TimeLine_01">
      <div className="content-stretch flex flex-col gap-[47.995px] items-start px-[15.992px] py-0 relative size-full">
        <Container34 />
        <Container49 />
        <Container64 />
        <Container79 />
        <Container94 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[3607.177px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[127.983px] items-start px-[15.992px] py-0 relative size-full">
        <Container20 />
        <TimeLine />
      </div>
    </div>
  );
}

function LatestPostSection2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[3703.167px] items-start left-0 overflow-clip pb-0 pt-[47.995px] px-0 top-[1992.37px] w-[374.253px]" data-name="LatestPostSection">
      <Container95 />
    </div>
  );
}

function Container96() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[0.995px] left-0 to-[#99a1af] top-[27.5px] via-1/2 w-0" data-name="Container" />;
}

function GradientHeading() {
  return (
    <div className="absolute h-[63.539px] left-[24px] top-[1.91px] w-[270.307px]" data-name="GradientHeading">
      <p className="absolute bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[20px] text-[rgba(0,0,0,0)] top-[-2px] tracking-[-0.9492px] w-[271px] whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgb(115, 115, 115) 0%, rgb(82, 82, 82) 100%)" }}>
        Marcas líderes que confiam em nós
      </p>
    </div>
  );
}

function Container97() {
  return <div className="absolute bg-gradient-to-l from-[rgba(0,0,0,0)] h-[0.995px] left-[342.27px] to-[#99a1af] top-[27.5px] via-1/2 w-0" data-name="Container" />;
}

function Container98() {
  return (
    <div className="h-[55.991px] relative shrink-0 w-[342.27px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container96 />
        <GradientHeading />
        <Container97 />
      </div>
    </div>
  );
}

function BciLogo() {
  return (
    <div className="h-[44.793px] relative shrink-0 w-[76.796px]" data-name="BCILogo">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBciLogo} />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute blur-[0px] content-stretch filter flex h-[55.991px] items-center justify-center left-0 overflow-clip pl-0 pr-[0.01px] py-0 top-0 w-[96px]" data-name="Container">
      <BciLogo />
    </div>
  );
}

function HcbLogo() {
  return (
    <div className="h-[44.793px] relative shrink-0 w-[76.796px]" data-name="HCBLogo">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgHcbLogo} />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute blur-[0px] content-stretch filter flex h-[55.991px] items-center justify-center left-[111.99px] overflow-clip pl-0 pr-[0.01px] py-0 top-0 w-[96px]" data-name="Container">
      <HcbLogo />
    </div>
  );
}

function LucasNuelleLogo() {
  return (
    <div className="h-[44.793px] relative shrink-0 w-[76.796px]" data-name="LucasNuelleLogo">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLucasNuelleLogo} />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute blur-[0px] content-stretch filter flex h-[55.991px] items-center justify-center left-[223.98px] overflow-clip pl-0 pr-[0.01px] py-0 top-0 w-[96px]" data-name="Container">
      <LucasNuelleLogo />
    </div>
  );
}

function LogoCarousel() {
  return (
    <div className="h-[55.991px] relative shrink-0 w-[319.983px]" data-name="LogoCarousel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container99 />
        <Container100 />
        <Container101 />
      </div>
    </div>
  );
}

function PartnersSection() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[31.994px] h-[271.968px] items-center left-0 pb-[63.997px] pt-[63.996px] px-0 top-[5695.53px] w-[374.253px]" data-name="PartnersSection">
      <Container98 />
      <LogoCarousel />
    </div>
  );
}

function Container102() {
  return <div className="absolute border-[#545b5b] border-[0.636px] border-solid left-[113.45px] opacity-20 rounded-[1000px] size-[144.72px] top-[5968.94px]" data-name="Container" />;
}

function Container103() {
  return <div className="absolute border-[#545b5b] border-[0.636px] border-solid left-[67.37px] opacity-20 rounded-[1000px] size-[236.88px] top-[5922.86px]" data-name="Container" />;
}

function Container104() {
  return <div className="absolute border-[#545b5b] border-[0.636px] border-solid h-[333.359px] left-[19.13px] opacity-20 rounded-[1000px] top-[5874.62px] w-[333.36px]" data-name="Container" />;
}

function Container105() {
  return <div className="absolute border-[#545b5b] border-[0.636px] border-solid left-[-31.76px] opacity-20 rounded-[1000px] size-[435.119px] top-[5823.74px]" data-name="Container" />;
}

function Container106() {
  return (
    <div className="absolute left-[-14.33px] size-0 top-[-5967.5px]" data-name="Container">
      <Container102 />
      <Container103 />
      <Container104 />
      <Container105 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[6.528px] left-0 top-0 w-[45.839px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[27.2px] left-0 text-[#565656] text-[16px] top-[-2.24px] whitespace-pre">Fornecemos soluções</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[13.056px] left-0 top-[6.53px] w-[45.839px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[27.2px] left-0 text-[#565656] text-[16px] top-[-2.24px] w-[40px] whitespace-pre-wrap">completas para o seu sector.</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute h-[19.584px] left-[33.6px] top-[19.2px] w-[45.839px]" data-name="Container">
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[17.28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[72px] left-[67.57px] text-[#050505] text-[64px] text-center top-[3.93px] tracking-[-2.56px] translate-x-[-50%] whitespace-pre">Pronto Para Iniciar</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[17.281px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[72px] left-[67.72px] text-[#050505] text-[64px] text-center top-[3.93px] tracking-[-2.56px] translate-x-[-50%] whitespace-pre">o Seu Projecto?</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex flex-col h-[34.561px] items-start left-[104.4px] top-[52.56px] w-[134.158px]" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[5.759px] left-0 top-0 w-[81.118px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[41.35px] text-[#565656] text-[18px] text-center top-[0.15px] translate-x-[-50%] whitespace-pre">Vamos discutir a melhor solução</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[5.759px] left-0 top-[5.76px] w-[81.118px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[40.2px] text-[#565656] text-[18px] text-center top-[0.15px] translate-x-[-50%] whitespace-pre">para o seu projecto.</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute h-[11.519px] left-[132.24px] top-[92.88px] w-[81.118px]" data-name="Container">
      <Paragraph21 />
      <Paragraph22 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[7.201px] relative w-[23.434px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30px] left-[12px] text-[20px] text-center text-white top-[-1.54px] translate-x-[-50%] whitespace-pre">Contactar</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[4.8px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.95999 3.35999">
            <path d={svgPaths.p79b0280} id="Vector" stroke="var(--stroke-0, #4278EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.359991" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[4.8px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container111() {
  return (
    <div className="bg-white relative rounded-[80px] shrink-0 size-[12.476px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute flex items-center justify-center left-[-0.96px] size-[4.8px] top-[-0.96px]">
          <div className="flex-none rotate-[180deg]">
            <Container110 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#4278ec] content-stretch flex gap-[5.759px] h-[15.355px] items-center pl-[10.891px] pr-0 py-0 relative rounded-[80px] w-[53.999px]" data-name="Button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Paragraph23 />
        </div>
      </div>
      <Container111 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[4.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79989 4.79989">
        <g clipPath="url(#clip0_2667_1894)" id="Icon">
          <path d={svgPaths.p11bc4580} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2667_1894">
            <rect fill="white" height="4.79989" width="4.79989" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[4.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79989 4.79989">
        <g clipPath="url(#clip0_2667_2081)" id="Icon">
          <path d={svgPaths.p28b03b80} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2667_2081">
            <rect fill="white" height="4.79989" width="4.79989" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[4.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79989 4.79989">
        <g clipPath="url(#clip0_2667_2008)" id="Icon">
          <path d={svgPaths.pd663d00} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2667_2008">
            <rect fill="white" height="4.79989" width="4.79989" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[4.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79989 4.79989">
        <g clipPath="url(#clip0_2667_1879)" id="Icon">
          <path d={svgPaths.p19843000} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2667_1879">
            <rect fill="white" height="4.79989" width="4.79989" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex gap-[0.96px] h-[4.8px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon19 />
      <Icon20 />
      {[...Array(2).keys()].map((_, i) => (
        <Icon21 key={i} />
      ))}
      <Icon22 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#050505] text-[14px] top-[-0.85px] w-[55px] whitespace-pre-wrap">A Triónica forneceu equipamentos de alta qualidade que transformaram nosso laboratório.</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[9.599px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#050505] text-[14px] top-[-0.85px] w-[44px] whitespace-pre-wrap">Excelente serviço e suporte técnico.</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[36.475px] relative shrink-0 w-[56.162px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.838px] items-start relative size-full">
        <Container112 />
        <Paragraph24 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[5.041px] left-0 top-0 w-[56.162px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#050505] text-[14px] top-[-0.69px] whitespace-pre">Dr. João Silva</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[3.96px] left-0 top-[5.04px] w-[56.162px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#667085] text-[11px] top-[-1.85px] tracking-[0.275px] uppercase whitespace-pre">Universidade de Maputo</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[9.001px] relative shrink-0 w-[56.162px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph26 />
        <Paragraph27 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[76.318px] items-start justify-between left-[33.6px] pb-0 pl-[7.678px] pr-0 pt-[7.678px] rounded-[60px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[87.12px] w-[71.519px]" data-name="Container">
      <Container113 />
      <Container114 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[4.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.7999 4.7999">
        <g clipPath="url(#clip0_2667_1850)" id="Icon">
          <path d={svgPaths.p36650e00} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2667_1850">
            <rect fill="white" height="4.7999" width="4.7999" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[4.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79988 4.79988">
        <g clipPath="url(#clip0_2667_1991)" id="Icon">
          <path d={svgPaths.p15640b00} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2667_1991">
            <rect fill="white" height="4.79988" width="4.79988" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex gap-[0.96px] h-[4.8px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon23 />
      <Icon24 />
      <Icon23 />
      <Icon24 />
      <Icon23 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#050505] text-[14px] top-[-0.85px] w-[56px] whitespace-pre-wrap">Trabalhamos com a Triónica há mais de 5 anos. A equipa deles é sempre disponível e resolve qualquer problema rapidamente. Confiamos plenamente nos seus serviços.</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[32.637px] relative shrink-0 w-[56.162px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.838px] items-start relative size-full">
        <Container116 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[5.041px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#050505] text-[14px] top-[-0.69px] whitespace-pre">Eng. Maria Couto</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[3.96px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#667085] text-[11px] top-[-1.85px] tracking-[0.275px] uppercase whitespace-pre">EDM - Electricidade de Moçambique</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[9.001px] relative shrink-0 w-[56.162px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph29 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[76.318px] items-start justify-between left-[240.48px] pb-0 pl-[7.678px] pr-0 pt-[7.678px] rounded-[60px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[19.2px] w-[71.519px]" data-name="Container">
      <Container117 />
      <Container118 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[7.328px] left-[10.07px] top-0 w-[8.306px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.532px] left-0 text-[#050505] text-[20.355px] top-[-2.54px] whitespace-pre">5.0</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[7.328px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.17%_12.82%_12.62%_12.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.44807 5.21761">
          <path d={svgPaths.p38cb7dc0} fill="var(--fill-0, #FFC046)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[7.328px] top-0" data-name="Container">
      <Icon25 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute h-[7.328px] left-[267.36px] top-[152.09px] w-[18.381px]" data-name="Container">
      <Paragraph31 />
      <Container120 />
    </div>
  );
}

function Container122() {
  return <div className="absolute bg-white h-[165.6px] left-[21.53px] rounded-[40px] top-[6167.18px] w-[331.2px]" data-name="Container" />;
}

function Paragraph32() {
  return (
    <div className="absolute h-[51.837px] left-[90.42px] top-[6247.1px] w-[192.919px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[216px] left-[96px] text-[180px] text-[rgba(35,84,162,0.89)] text-center top-[4.63px] tracking-[-9px] translate-x-[-50%] uppercase whitespace-pre">Triónica</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[4.81px] left-0 top-[0.19px] w-[11.027px]" data-name="Button">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20.04px] left-[6.5px] text-[#4278ec] text-[18px] text-center top-[1.69px] tracking-[-0.18px] translate-x-[-50%] whitespace-pre">Início</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[5.184px] relative shrink-0 w-[21.632px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21.6px] left-[11.5px] text-[#667085] text-[18px] text-center top-[0.85px] translate-x-[-50%] whitespace-pre">Sobre Nós</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5.184px] items-start justify-center left-[28.16px] top-0 w-[21.632px]" data-name="Button">
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[5.184px] relative shrink-0 w-[19.431px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21.6px] left-[10.5px] text-[#667085] text-[18px] text-center top-[0.85px] translate-x-[-50%] whitespace-pre">Soluções</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5.184px] items-start justify-center left-[66.92px] top-0 w-[19.431px]" data-name="Button">
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[5.184px] relative shrink-0 w-[18.073px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21.6px] left-[9px] text-[#667085] text-[18px] text-center top-[0.85px] translate-x-[-50%] whitespace-pre">Portfolio</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5.184px] items-start justify-center left-[103.49px] top-0 w-[18.073px]" data-name="Button">
      <Paragraph35 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[1.776px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_-0.01%_-0.01%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.776 1.776">
          <path d={svgPaths.p3153ef00} fill="var(--fill-0, #050505)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.71px] size-[1.776px] top-[1.7px]" data-name="Container">
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[1.776px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_-0.01%_-0.01%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.776 1.776">
          <path d={svgPaths.p3bf6c00} fill="var(--fill-0, #050505)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[57.47px] size-[1.776px] top-[1.7px]" data-name="Container">
      <Icon27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[1.776px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_-0.01%_-0.01%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.776 1.776">
          <path d={svgPaths.p3bf6c00} fill="var(--fill-0, #050505)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[94.03px] size-[1.776px] top-[1.7px]" data-name="Container">
      <Icon28 />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute h-[5.184px] left-[43.69px] top-[6226.22px] w-[121.561px]" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Container123 />
      <Container124 />
      <Container125 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[0.239px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[49.98%_0_50.01%_0]" data-name="Vector">
        <div className="absolute inset-[-0.12px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 278.398 0.239352">
            <path d={svgPaths.p3bb8bb80} id="Vector" stroke="var(--stroke-0, #EDEDED)" strokeWidth="0.239328" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.239px] items-start left-0 top-[-0.24px] w-[278.398px]" data-name="Container">
      <Icon29 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[5.041px] left-[108.12px] top-[3.12px] w-[96.869px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-black top-[-1.54px] whitespace-pre">© 2025 Triónica Moçambique. Todos os direitos reservados.</p>
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[11.519px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.04%]" data-name="Vector">
        <div className="absolute inset-[-1.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5188 11.5188">
            <path d={svgPaths.p34f065c0} id="Vector" stroke="var(--stroke-0, #1877F2)" strokeOpacity="0.3" strokeWidth="0.239975" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[25.3%] left-1/4 right-1/4 top-1/4" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.75939 5.7244">
          <path d={svgPaths.p1d931c0} fill="var(--fill-0, #1877F2)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.518px] items-start left-0 top-0 w-[11.519px]" data-name="Container">
      <Icon30 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-[11.519px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.04%]" data-name="Vector">
        <div className="absolute inset-[-1.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5188 11.5188">
            <path d={svgPaths.p1f349780} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.3" strokeWidth="0.239974" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[31.25%_31.25%_31.25%_27.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79949 4.31954">
          <path d={svgPaths.p3936f400} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.518px] items-start left-[16.32px] top-0 w-[11.519px]" data-name="Container">
      <Icon31 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[11.519px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.04%]" data-name="Vector">
        <div className="absolute inset-[-1.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5188 11.5188">
            <path d={svgPaths.p1f349780} id="Vector" stroke="var(--stroke-0, #E4405F)" strokeOpacity="0.3" strokeWidth="0.239974" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.518px] items-start left-0 top-0 w-[11.519px]" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[5.759px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.757 5.7594">
        <path d={svgPaths.p27e068f0} fill="var(--fill-0, #E4405F)" id="Vector" />
      </svg>
      <div className="absolute inset-[24.32%_24.27%_24.3%_24.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.95896 2.95903">
          <path d={svgPaths.p34cc2d00} fill="var(--fill-0, #E4405F)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.32%_17.26%_70.68%_70.74%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.690745 0.690752">
          <path d={svgPaths.p12594f80} fill="var(--fill-0, #E4405F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5.759px] items-start left-[2.88px] overflow-clip top-[2.88px] w-[5.757px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute h-[11.518px] left-[32.64px] top-0 w-[11.519px]" data-name="Container">
      <Container130 />
      <Container131 />
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute h-[11.518px] left-0 top-0 w-[44.159px]" data-name="Container">
      <Container128 />
      <Container129 />
      <Container132 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[11.519px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.04%]" data-name="Vector">
        <div className="absolute inset-[-1.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5188 11.5188">
            <path d={svgPaths.p1f349780} id="Vector" stroke="var(--stroke-0, #0A66C2)" strokeOpacity="0.3" strokeWidth="0.239974" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.518px] items-start left-0 top-0 w-[11.519px]" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[5.759px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.75939 5.75939">
        <path d={svgPaths.p27bf7e40} fill="var(--fill-0, #0A66C2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2.88px] overflow-clip size-[5.759px] top-[2.88px]" data-name="Container">
      <Icon35 />
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute h-[11.518px] left-[48.96px] top-0 w-[11.519px]" data-name="Container">
      <Container134 />
      <Container135 />
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute h-[11.518px] left-0 top-0 w-[60.239px]" data-name="Container">
      <Container133 />
      <Container136 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute h-[11.518px] left-[36.7px] top-[5.76px] w-[204.987px]" data-name="Container">
      <Paragraph36 />
      <Container137 />
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute h-[17.278px] left-[47.93px] top-[6308.06px] w-[278.398px]" data-name="Container">
      <Container127 />
      <Container138 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[4.8px] relative shrink-0 w-[39.645px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6b7280] text-[20px] top-[2.24px] whitespace-pre">Digite o seu email</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="bg-[#f5f5f5] h-[17.278px] relative rounded-[20px] shrink-0 w-[77.758px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-0 pl-[7.678px] pr-0 pt-[5.759px] relative size-full">
        <Paragraph37 />
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[5.759px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.35964 1.91979">
            <path d={svgPaths.p29b92400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.479949" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[5.76px] size-[5.759px] top-[5.76px]" data-name="Container">
      <Icon36 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#4278ec] relative rounded-[20px] size-[17.278px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container141 />
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute content-stretch flex gap-[1.919px] h-[17.278px] items-center left-[229.36px] top-[6220.22px] w-[96.955px]" data-name="Container">
      <Container140 />
      <div className="flex items-center justify-center relative shrink-0 size-[17.278px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="content-stretch flex h-[9.216px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[38.4px] not-italic relative shrink-0 text-[#050505] text-[32px] whitespace-pre">Subscreva a</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="content-stretch flex h-[9.215px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[38.4px] not-italic relative shrink-0 text-[#050505] text-[32px] whitespace-pre">nossa newsletter</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute content-stretch flex flex-col h-[18.431px] items-start left-[229.36px] top-[6192.38px] w-[62.399px]" data-name="Container">
      <Paragraph38 />
      <Paragraph39 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[15.36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[64px] left-0 text-[#050505] text-[64px] top-[7.01px] whitespace-pre">Construindo o Sucesso</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[15.359px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[64px] left-0 text-[#050505] text-[64px] top-[7.01px] whitespace-pre">de Moçambique</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30.718px] items-start left-[34.24px] top-[6184.46px] w-[172.319px]" data-name="Container">
      <Paragraph40 />
      <Paragraph41 />
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute left-[-14.33px] size-0 top-[-5967.5px]" data-name="Container">
      <Container122 />
      <Paragraph32 />
      <Container126 />
      <Container139 />
      <Container142 />
      <Container143 />
      <Container144 />
    </div>
  );
}

function Container146() {
  return (
    <div className="h-[372.48px] relative shrink-0 w-full" data-name="Container">
      <Container106 />
      <Container107 />
      <Container108 />
      <Container109 />
      <div className="absolute flex h-[15.355px] items-center justify-center left-[90.72px] top-[95.04px] w-[53.999px]">
        <div className="flex-none rotate-[180deg]">
          <Button6 />
        </div>
      </div>
      <Container115 />
      <Container119 />
      <Container121 />
      <Container145 />
    </div>
  );
}

function CtaFooterSection() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[386.127px] items-start left-0 overflow-clip px-[14.327px] py-0 top-[5967.5px] w-[374.253px]" data-name="CTAFooterSection">
      <Container146 />
    </div>
  );
}

function TrionicaCopy() {
  return (
    <div className="absolute bg-white h-[6353px] left-[1200px] top-[182px] w-[374px]" data-name="Trionica (Copy)">
      <AboutSection12 />
      <HeroSection />
      <LatestPostSection2 />
      <PartnersSection />
      <CtaFooterSection />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute h-[100px] left-[24px] top-[46px] w-[243px]" data-name="Paragraph">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
      <TrionicaCopy />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[23.143px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTrionicaLogo} />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[16.242px] items-start left-[-287.76px] top-[0.86px] w-[50.89px]" data-name="Paragraph7">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[16.242px] relative shrink-0 text-[12.633px] text-center text-white whitespace-pre">Spark AI</p>
    </div>
  );
}

function ImageTrionica() {
  return (
    <div className="absolute h-[24px] left-[-8.54px] overflow-clip top-[-2.23px] w-[23.143px]" data-name="ImageTrionica2">
      <Image />
      <Paragraph7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[7.479px] left-[16.44px] top-[3.17px] w-[22.634px]" data-name="Frame3">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[14.922px] left-[23.02px] text-[#050505] text-[12.435px] text-center top-[0.6px] tracking-[-0.2487px] translate-x-[-50%] whitespace-pre">Triónica</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute hidden h-[13.816px] left-[14.54px] top-[6.23px] w-[39.074px]" data-name="Container">
      {/* ImageTrionica and Frame2 (Trionica logo + text) hidden - now using Navbar component */}
    </div>
  );
}

function ManufactureLandingPage1() {
  return (
    <div className="h-[10.389px] relative shrink-0 w-full" data-name="ManufactureLandingPage">
      <p className="absolute capitalize font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[5.194px] left-0 text-[#050505] text-[4.156px] top-0 w-[67.008px] whitespace-pre-wrap">Ensino, Saúde, Águas, Ambiente e Minas.</p>
    </div>
  );
}

function ManufactureLandingPage2() {
  return (
    <div className="h-[10.389px] relative shrink-0 w-full" data-name="ManufactureLandingPage">
      <p className="absolute capitalize font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[5.194px] left-0 text-[#050505] text-[4.156px] top-0 w-[61.294px] whitespace-pre-wrap">Soluções de referência desde 2010.</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27.271px] items-start left-[319.98px] opacity-0 top-[53.5px] w-[71.943px]" data-name="Container">
      <ManufactureLandingPage1 />
      <ManufactureLandingPage2 />
    </div>
  );
}

function Container149() {
  return <div className="absolute bg-[#171717] h-[52.724px] left-0 top-[353.74px] w-[392.7px]" data-name="Container" />;
}

function Vector1() {
  return (
    <div className="absolute contents inset-[18%_89.06%_18%_0]" data-name="Vector">
      <div className="absolute inset-[31.27%_97.72%_41.17%_0.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.59966 7.15828">
          <path d={svgPaths.p1cb8db00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_96.86%_41.17%_2.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.17205 7.15828">
          <path d={svgPaths.pd06a000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.28%_94.88%_41.17%_3.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.62825 1.18348">
          <path d={svgPaths.p4ab4ec0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_94.79%_48.25%_3.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.20959 5.31797">
          <path d={svgPaths.p35bbcd00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_93.15%_41.17%_5.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.76561 7.15828">
          <path d={svgPaths.p1070b270} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_91.21%_41.17%_7.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.67705 7.15828">
          <path d={svgPaths.pf5ce6c0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_89.72%_41.17%_9.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50495 7.15828">
          <path d={svgPaths.p26821580} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.15%_94.7%_47.09%_3.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.79092 5.91159">
          <path d={svgPaths.p2d3dd000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18%_89.06%_25.44%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.1014 14.69">
          <path d={svgPaths.p30e19900} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.34%_89.28%_18%_0.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.83 16.0152">
          <path d={svgPaths.p32b7a400} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector6() {
  return (
    <div className="absolute contents inset-[13%_69.12%_13%_24.9%]" data-name="Vector_2">
      <div className="absolute inset-[13%_73.87%_13%_24.9%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.0405 19.2194">
          <path d={svgPaths.p26a42c00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.28%_72.41%_13.27%_26.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.0405 19.0768">
          <path d={svgPaths.p9120000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.42%_70.75%_17.41%_27.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.61085 16.9276">
          <path d={svgPaths.p34e0a7c0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.63%_69.12%_17.62%_29.48%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.61085 16.8178">
          <path d={svgPaths.pddf1ac0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector7() {
  return (
    <div className="absolute contents inset-[1%_47.29%_1%_44.85%]" data-name="Vector_3">
      <div className="absolute inset-[34.94%_50.01%_19.44%_46.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0825 11.8499">
          <path d={svgPaths.p208e2580} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.49%_51.76%_65.25%_48.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.561262 4.74159">
          <path d={svgPaths.p20f9bd00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.74%_51.76%_1%_48.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.561262 4.74162">
          <path d={svgPaths.p1354ae00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.87%_53.12%_58.21%_46.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.10037 2.05915">
          <path d={svgPaths.p28ad7f0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.72%_49.94%_18.47%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.06934 2.02887">
          <path d={svgPaths.p180ea480} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.69%_53.69%_41.19%_44.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83473 0.550403">
          <path d={svgPaths.p21a30b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[41.19%] left-1/2 right-[48.53%] top-[56.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83474 0.550403">
          <path d={svgPaths.p3f4f3d00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.72%_53.12%_19.44%_46.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81416 1.77845">
          <path d={svgPaths.p38fa6300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.26%_50.04%_58.21%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.72988 1.69588">
          <path d={svgPaths.p1816b080} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.78%_52.71%_89.16%_46.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.86857 2.09326">
          <path d={svgPaths.p13977300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1%_51.86%_91.15%_47.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.93376 2.03974">
          <path d={svgPaths.p11f88800} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.16%_50.75%_90.05%_48.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.58709 2.28412">
          <path d={svgPaths.p2021bbc0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[4.24%_49.68%_85.38%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.90422 2.69415">
          <path d={svgPaths.p3b2fdb00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.74%_48.92%_79.68%_50.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.42997 2.48775">
          <path d={svgPaths.p11087ac0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.77%_48.35%_72.12%_50.94%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.36152 2.62535">
          <path d={svgPaths.p27d7ed00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32%_47.57%_60.96%_51.74%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.2814 1.8273">
          <path d={svgPaths.p3450c80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.37%_47.43%_53.7%_51.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05674 1.02097">
          <path d={svgPaths.p260e4040} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.67%_47.29%_41.17%_52.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.12687 2.38046">
          <path d={svgPaths.pfce7a80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[62.67%_47.32%_30.38%_52.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.19986 1.80528">
          <path d={svgPaths.p3a482100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.34%_53.88%_67.78%_45.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.29225 1.26656">
          <path d={svgPaths.p2dba67c0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[85.59%_49.21%_9.53%_50.4%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.29219 1.26658">
          <path d={svgPaths.p77f6b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.53%_50.04%_30.86%_46.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6356 2.75615">
          <path d={svgPaths.p37053500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.1%_53.69%_28.04%_45.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.52695 1.52125">
          <path d={svgPaths.p3aee4000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[82.5%_50.76%_10.91%_48.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.97976 1.71329">
          <path d={svgPaths.p2b3b8c80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[91.43%_50.52%_3.84%_49.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.814227 1.22793">
          <path d={svgPaths.p2a9b2300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.69%_48.8%_56.71%_50.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33106 0.935588">
          <path d={svgPaths.p30604a00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[51.66%] left-1/2 right-[49.43%] top-[43.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.87703 1.21079">
          <path d={svgPaths.p25be9680} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector8() {
  return (
    <div className="absolute contents inset-[16.5%_21.2%_16.5%_66.68%]" data-name="Vector_4">
      <div className="absolute inset-[30.48%_29.24%_61.01%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.55047 2.21151">
          <path d={svgPaths.p31a65d80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_29.31%_70.93%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.30738 1.97693">
          <path d={svgPaths.p3315e100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_28.83%_56.69%_69.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.22794 6.79942">
          <path d={svgPaths.p28954c80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.26%_30.63%_32.33%_66.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88146 8.93782">
          <path d={svgPaths.p2896d600} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.5%_31.92%_65.13%_67.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.368294 4.5114">
          <path d={svgPaths.pb6b6200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[64.27%_31.92%_16.5%_67.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.368294 4.99417">
          <path d={svgPaths.p37f3f800} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.33%_23.55%_28.59%_76.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.929033 1.06071">
          <path d={svgPaths.p2f161300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_23.29%_28.52%_76.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.702553 0.802307">
          <path d={svgPaths.p385e8780} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.38%_23.04%_28.55%_76.77%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.631646 0.797242">
          <path d={svgPaths.p1f97ae00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.43%_22.88%_28.55%_77.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.371655 1.04541">
          <path d={svgPaths.p287bb600} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_22.62%_28.53%_77.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.700984 0.800619">
          <path d={svgPaths.p193dc800} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.45%_22.35%_28.52%_77.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.62334 0.785321">
          <path d={svgPaths.p8dd1100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_22.14%_28.59%_77.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.415565 0.783633">
          <path d={svgPaths.p38fb1480} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_21.89%_28.53%_77.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.700984 0.800619">
          <path d={svgPaths.p2c640480} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_21.63%_28.59%_78.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.619694 0.785321">
          <path d={svgPaths.p14eb0170} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.43%_21.45%_28.55%_78.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.371655 1.04541">
          <path d={svgPaths.p158960b0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[74.25%_23.49%_25.27%_76.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.07265 0.124095">
          <path d={svgPaths.p8e81b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.98%_29.24%_21.51%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.55047 2.21151">
          <path d={svgPaths.p20c0ce00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.95%_29.31%_31.44%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.30738 1.97693">
          <path d={svgPaths.p3d806b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.62%_28.83%_17.2%_69.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.22794 6.7994">
          <path d={svgPaths.p1c23fc00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_28%_56.69%_71.3%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.28866 6.7994">
          <path d={svgPaths.p8226b80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.51%_26.55%_56.01%_72.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.30723 7.13769">
          <path d={svgPaths.p12983380} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_25.18%_56.69%_73.39%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.72122 6.79771">
          <path d={svgPaths.p38d54500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_23.86%_66.97%_75.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.67228 3.00532">
          <path d={svgPaths.p39bed400} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.12%_23.35%_56.7%_74.92%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.70271 6.7994">
          <path d={svgPaths.p1f3f0b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.5%_21.2%_56.02%_76.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.09276 7.13769">
          <path d={svgPaths.p33b5e890} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_21.59%_60.97%_77.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53553 4.56579">
          <path d={svgPaths.pb4d3480} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[61.38%_27.41%_23.47%_71.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.98291 3.93347">
          <path d={svgPaths.p3a5237b0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.63%_26.84%_17.19%_71.12%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74472 6.79942">
          <path d={svgPaths.p8851b70} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.62%_24.96%_17.2%_73.31%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.70273 6.7994">
          <path d={svgPaths.p33cd400} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.95%_25.47%_27.48%_73.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.67228 3.00532">
          <path d={svgPaths.p1fe47d00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector9() {
  return (
    <div className="absolute contents inset-[0_0_0_92.76%]" data-name="Vector_5">
      <div className="absolute inset-[69.66%_6.8%_7.01%_92.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.43637 6.06106">
          <path d={svgPaths.p1c135500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.51%_6.25%_7.09%_93.28%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.56353 6.07531">
          <path d={svgPaths.p2b019f80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.15%_5.72%_6.89%_93.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.48319 6.22202">
          <path d={svgPaths.p374d6f80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.19%_4.93%_7.26%_94.39%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.2388 6.11796">
          <path d={svgPaths.p192c8c00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.3%_4.63%_7.38%_95.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.610341 6.0589">
          <path d={svgPaths.p307cd000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.21%_4.08%_7.14%_95.48%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.46749 6.14247">
          <path d={svgPaths.p27421b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.94%_3.3%_7.5%_96.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.2388 6.11801">
          <path d={svgPaths.p33f8ce00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.01%_2.59%_7.66%_97.02%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.26225 6.0589">
          <path d={svgPaths.p28f9ae00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.61%_2.11%_7.57%_97.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.43116 6.18735">
          <path d={svgPaths.p16a19900} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.86%_1.55%_7.81%_98.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.46748 6.06105">
          <path d={svgPaths.p244e9340} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.42%_0.98%_7.62%_98.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.48321 6.22199">
          <path d={svgPaths.pfff2d00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.69%_0.49%_7.98%_99.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.26225 6.0589">
          <path d={svgPaths.p264ee500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.28%_0_7.77%_99.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45452 6.22201">
          <path d={svgPaths.p21f33800} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.41%_1.17%_38.36%_93.93%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1495 13.3047">
          <path d={svgPaths.p1efe0f00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.55%_2.47%_52.89%_95.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.62544 7.67747">
          <path clipRule="evenodd" d={svgPaths.p105cb500} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_3.22%_90.36%_95.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.61542 2.50418">
          <path clipRule="evenodd" d={svgPaths.pc0c8300} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.87%_2.58%_87.58%_96.96%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.50377 1.44143">
          <path clipRule="evenodd" d={svgPaths.p722bc80} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.87%_4.2%_87.58%_95.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.50377 1.44143">
          <path clipRule="evenodd" d={svgPaths.p722bc80} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_7.09%_0_92.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.262322 0.17713">
          <path d={svgPaths.pec3ea00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_0.31%_0_93.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8375 0.17713">
          <path d={svgPaths.p177b2000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_0.07%_0_99.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.262322 0.17713">
          <path d={svgPaths.pec3ea00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute contents inset-0">
      <Vector1 />
      <Vector6 />
      <Vector7 />
      <Vector8 />
      <Vector9 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[25.972px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.972px] items-start left-[31.43px] top-[366.99px] w-[330.107px]" data-name="Frame12">
      <Icon37 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute left-0 size-0 top-0" data-name="Group8">
      <Container149 />
      <Frame9 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute h-[30px] left-[87px] top-[34.74px] w-[178px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[34px] leading-[12px] left-[22px] text-[#050505] text-[10px] top-[-17px] w-[149px] whitespace-pre-wrap">A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute bg-[#eee] h-[87.007px] left-0 top-[147.26px] w-[392.7px]" data-name="Container">
      <Paragraph43 />
    </div>
  );
}

function Hero1() {
  return (
    <div className="h-[12.986px] relative shrink-0 w-full" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBciLogo} />
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[31.17px] overflow-clip rounded-[4357412px] size-[12.986px] top-[182.32px]" data-name="Container">
      <Hero1 />
    </div>
  );
}

function Hero2() {
  return (
    <div className="h-[12.986px] relative shrink-0 w-full" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
    </div>
  );
}

function Container152() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[40.52px] overflow-clip rounded-[4357412px] size-[12.986px] top-[182.32px]" data-name="Container">
      <Hero2 />
    </div>
  );
}

function Hero3() {
  return (
    <div className="h-[12.986px] relative shrink-0 w-full" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHcbLogo} />
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[49.87px] overflow-clip rounded-[4357412px] size-[12.986px] top-[182.32px]" data-name="Container">
      <Hero3 />
    </div>
  );
}

function Counter() {
  return (
    <div className="absolute content-stretch flex h-[6.363px] items-start left-[66.23px] top-[183.1px] w-[10.31px]" data-name="Counter">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#171717] text-[5.194px] whitespace-pre">84+</p>
    </div>
  );
}

function Hero4() {
  return (
    <div className="h-[6.233px] relative shrink-0 w-full" data-name="Hero">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[4.156px] top-[0.13px] whitespace-pre">parceiros de</p>
    </div>
  );
}

function Hero5() {
  return (
    <div className="h-[6.233px] relative shrink-0 w-full" data-name="Hero">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[4.156px] top-[0.13px] whitespace-pre">confiança</p>
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12.467px] items-start left-[66.75px] top-[189.34px] w-[26.165px]" data-name="Container">
      <Hero4 />
      <Hero5 />
    </div>
  );
}

function Counter1() {
  return (
    <div className="absolute h-[12.597px] left-[336.86px] opacity-0 top-[165.18px] w-[13.631px]" data-name="Counter">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-0 not-italic text-[#171717] text-[10.389px] top-0 w-[13.765px] whitespace-pre-wrap">0+</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute h-[6.233px] left-[337.38px] opacity-0 top-[177.39px] w-[41.566px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[4.156px] top-[0.13px] whitespace-pre">Anos de Experiência</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute left-0 size-0 top-0" data-name="Group12">
      <Counter1 />
      <Paragraph44 />
    </div>
  );
}

function Counter2() {
  return (
    <div className="absolute h-[12.597px] left-[336.86px] opacity-0 top-[193.23px] w-[15.318px]" data-name="Counter">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-0 not-italic text-[#171717] text-[10.389px] top-0 w-[15.324px] whitespace-pre-wrap">0%</p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[6.233px] left-[337.38px] opacity-0 top-[205.44px] w-[40.872px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[4.156px] top-[0.13px] whitespace-pre">Cobertura Nacional</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute left-0 size-0 top-0" data-name="Group22">
      <Counter2 />
      <Paragraph45 />
    </div>
  );
}

function Hero6() {
  return (
    <div className="absolute left-0 size-0 top-0" data-name="Hero">
      <Group3 />
      <Container150 />
      <Container151 />
      <Container152 />
      <Container153 />
      <Counter />
      <Container154 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function ImageMicroscope1() {
  return (
    <div className="h-[333.316px] relative shrink-0 w-[245.41px]" data-name="Image (Microscope)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageMicroscope} />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[256.131px] items-start left-[192px] overflow-clip top-[83.93px] w-[209.855px]" data-name="Group5">
      <ImageMicroscope1 />
    </div>
  );
}

function Counter3() {
  return (
    <div className="absolute content-stretch flex h-[24.25px] items-start left-[287px] top-[46px] w-[35.18px]" data-name="Counter">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#171717] text-[20px] whitespace-pre">15+</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute h-[12px] left-[288px] top-[69.5px] w-[80.02px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[8px] top-[0.25px] whitespace-pre">Anos de Experiência</p>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative size-[7.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
        <g id="Icon">
          <path d={svgPaths.p1ee910c0} id="Vector" stroke="var(--stroke-0, #4278EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5625" />
        </g>
      </svg>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="bg-white content-stretch flex items-center p-[6px] relative rounded-[30px] shrink-0" data-name="Arrow">
      <div className="flex items-center justify-center relative shrink-0 size-[10.245px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[210deg] scale-y-[-100%]">
          <Icon38 />
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#4278ec] content-stretch flex gap-[9px] items-center pl-[2.25px] pr-[12px] py-[2.25px] relative rounded-[30px] w-[116.25px]" data-name="Button">
      <Arrow1 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[11.25px] relative text-[7.5px] text-white whitespace-pre">{` Conheça-nos Melhor`}</p>
        </div>
      </div>
    </div>
  );
}

function Container155() {
  return <div className="bg-[#667085] h-[1.123px] rounded-[36964672px] shrink-0 w-[12.598px]" data-name="Container" />;
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.699px] items-center justify-center left-[344px] pb-[0.004px] pt-0 px-0 size-[18px] top-[8px]" data-name="Frame2">
      {[...Array(3).keys()].map((_, i) => (
        <Container155 key={i} />
      ))}
    </div>
  );
}

function ManufactureLandingPage3() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[348.807px] left-0 overflow-clip top-0 w-[374px]" data-name="ManufactureLandingPage">
      <Paragraph42 />
      <Container147 />
      <Container148 />
      <Hero6 />
      <Group1 />
      <Counter3 />
      <Paragraph46 />
      <div className="absolute flex items-center justify-center left-[47.38px] top-[272.46px] w-[116.25px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Button12 />
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Counter4() {
  return (
    <div className="absolute content-stretch flex h-[24.25px] items-start left-0 top-0 w-[51.859px]" data-name="Counter">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#171717] text-[20px] whitespace-pre">100%</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[12px] left-px top-[23.5px] w-[78.684px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[8px] top-[0.25px] whitespace-pre">Cobertura Nacional</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[35.5px] left-[-9.66px] top-[18px] w-[79.684px]">
      <Counter4 />
      <Paragraph47 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[35.5px] left-[294.66px] top-[66px] w-[81.02px]">
      <Frame10 />
    </div>
  );
}

export default function Frame11() {
  return (
    <div className="relative size-full">
      <ManufactureLandingPage3 />
      <Frame12 />
    </div>
  );
}