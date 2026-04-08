import svgPaths from "./svg-ibf45u2fp8";
import imgImageEquipaTrionica from "figma:asset/3804a766a7521e0a7f2d19d0c3b58b1eafb3c2d6.png";
import imgImageTrionicaLogo from "figma:asset/d93cf643f81c1830c9529a1d38a8671cd0110ae2.png";
import imgImageMicroscope from "figma:asset/4c938511638a83fc20943d41401141f356031574.png";
import imgImageEducacaoVisual from "figma:asset/1ed30bca1c7dacfeb480999ad8e008cd86f66392.png";
import imgImageSaudeVisual from "figma:asset/c3e462d779bb19de3da9b06340a2d1b0429475ea.png";
import imgImageAguasVisual from "figma:asset/9a555059eca3a0e95b663c4837fc54ef7a26e76a.png";
import imgImageAmbienteVisual from "figma:asset/d4a1c3843c3ab947a2fce919c2f975b36328a96f.png";
import imgImageMinasVisual from "figma:asset/f63e17a409d48cc3dad0703b061331bc8219a04e.png";
import imgBciLogo from "figma:asset/82cd405a60a5f350e706ed8d47affe6341ac868f.png";
import imgHcbLogo from "figma:asset/63f97fc06c7d3667f8975059283b6bab246ebc3e.png";
import imgLucasNuelleLogo from "figma:asset/c5c27bc2796462ae8e0a654cff95bf69bcb404a9.png";
import imgHero from "figma:asset/01e953708179a504fc7c0147ad9b0d1eba4f4677.png";
import { AnimatedCounter } from "../components/ui/animated-counter";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronDown } from "lucide-react";

function Text() {
  return (
    <div className="absolute content-stretch flex h-[197.959px] items-start left-0 top-[16.9px] w-[127.515px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[147.504px] relative shrink-0 text-[#050505] text-[156.919px] tracking-[-10.2601px] whitespace-pre">O</p>
    </div>
  );
}

function Text1() {
  return <div className="absolute h-[258.312px] left-[127.52px] top-[-33.19px] w-[26.169px]" data-name="Text" />;
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[197.959px] items-start left-[153.7px] top-[16.9px] w-[440.466px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[147.504px] relative shrink-0 text-[#050505] text-[156.919px] tracking-[-10.2601px] whitespace-pre">Futuro</p>
    </div>
  );
}

function Text3() {
  return <div className="absolute h-[258.312px] left-[594.16px] top-[-33.19px] w-0" data-name="Text" />;
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[258.312px] items-start left-0 top-[159.69px] w-[787.564px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[192.889px] relative shrink-0 text-[205.201px] text-[rgba(5,5,5,0.3)] tracking-[-10.2601px] whitespace-pre">Começa</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[151.882px] relative w-[163.633px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[139.426px] left-[1.13px] not-italic text-[#2354a2] text-[116.188px] top-[0.82px] tracking-[1.5318px] whitespace-pre">✱</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[123.908px] left-[117.45px] top-[7.74px] w-[620.927px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[123.934px] left-0 not-italic text-[#4a5565] text-[92.951px] top-[-0.35px] tracking-[0.2723px] uppercase whitespace-pre">Quem Somos</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[139.43px] left-[61.93px] top-[495.71px] w-[738.365px]" data-name="Container">
      <div className="absolute flex h-[221.644px] items-center justify-center left-[-257.61px] top-[-95.44px] w-[219.037px]" style={{ "--transform-inner-width": "11.90625", "--transform-inner-height": "19" } as React.CSSProperties}>
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
    <div className="absolute content-stretch flex h-[138.044px] items-start left-0 top-[139.43px] w-[929.638px]" data-name="AboutSection">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[139.426px] not-italic relative shrink-0 text-[#101828] text-[116.188px] tracking-[1.5318px] whitespace-pre">desenvolvimento</p>
    </div>
  );
}

function AboutSection1() {
  return (
    <div className="absolute content-stretch flex h-[138.044px] items-start left-0 top-[278.86px] w-[1144.292px]" data-name="AboutSection">
      <p className="font-['Inter:Light_Italic',sans-serif] font-light italic leading-[139.426px] relative shrink-0 text-[#101828] text-[116.188px] tracking-[1.5318px] whitespace-pre">científico e tecnológico</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[557.721px] left-[61.93px] top-[759.05px] w-[1325.59px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[139.426px] left-0 not-italic text-[#101828] text-[116.188px] top-0 tracking-[1.5318px] whitespace-pre">Desde 2010, a apoiar o</p>
      <AboutSection />
      <AboutSection1 />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[139.426px] left-0 not-italic text-[#101828] text-[116.188px] top-[278.86px] tracking-[1.5318px] w-[1309.054px] whitespace-pre-wrap">do país.</p>
    </div>
  );
}

function AboutSection2() {
  return (
    <div className="absolute h-[402.73px] left-0 top-0 w-[1325.59px]" data-name="AboutSection">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[100.696px] left-0 not-italic text-[#4a5565] text-[61.967px] text-justify top-[-3.17px] tracking-[-1.2103px] w-[1328.418px] whitespace-pre-wrap">Somos uma empresa moçambicana sediada em Maputo, especializada no desenvolvimento de soluções tecnológicas e implementação de projetos em áreas estratégicas.</p>
    </div>
  );
}

function AboutSection3() {
  return (
    <div className="absolute h-[503.413px] left-0 top-[464.67px] w-[1325.59px]" data-name="AboutSection">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[100.696px] left-0 not-italic text-[#4a5565] text-[61.967px] text-justify top-[-3.17px] tracking-[-1.2103px] w-[1328.418px] whitespace-pre-wrap">Desde 2010, fornecemos equipamentos laboratoriais e tecnologias avançadas para os sectores de Ensino e Investigação, Saúde, Águas, Ambiente e Minas, com foco na qualidade, inovação e fiabilidade.</p>
    </div>
  );
}

function Text7() {
  return <div className="absolute bg-[#2354a2] left-[253.79px] opacity-0 rounded-[30.967px] size-[61.935px] top-[54.19px]" data-name="Text" />;
}

function Text8() {
  return (
    <div className="absolute h-[77.457px] left-[77.44px] top-[46.45px] w-[321.73px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[77.459px] left-[161.87px] not-italic text-[#2354a2] text-[54.221px] text-center top-[1.06px] tracking-[-0.5825px] translate-x-[-50%] whitespace-pre">SAIBA MAIS</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[-142.36px] size-[61.935px] top-[54.19px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9348 61.9348">
        <g id="Icon">
          <path d="M12.9107 30.9673H49.0394" id="Vector" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
          <path d={svgPaths.p2c8c6ce0} id="Vector_2" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[445.68px] size-[61.935px] top-[54.19px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9348 61.9348">
        <g id="Icon">
          <path d="M12.9106 30.9673H49.0392" id="Vector" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
          <path d={svgPaths.p2b488380} id="Vector_2" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
        </g>
      </svg>
    </div>
  );
}

function FlowButton() {
  return (
    <div className="absolute border-[4.93px] border-[rgba(0,0,0,0.1)] border-solid h-[180.22px] left-0 overflow-clip rounded-[387.294px] top-[1060.98px] w-[579.406px]" data-name="FlowButton">
      <Text7 />
      <Text8 />
      <Icon />
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[1241.2px] left-0 top-0 w-[1325.59px]" data-name="Container">
      <AboutSection2 />
      <AboutSection3 />
      <FlowButton />
    </div>
  );
}

function ImageEquipaTrionica() {
  return (
    <div className="absolute h-[994.192px] left-0 rounded-[61.967px] shadow-[0px_38.729px_58.094px_-11.619px_rgba(0,0,0,0.1),0px_15.492px_23.238px_-15.492px_rgba(0,0,0,0.1)] top-[1365.11px] w-[1325.59px]" data-name="Image (Equipa Trionica)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[61.967px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[61.967px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[61.967px] size-full" src={imgImageEquipaTrionica} />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[61.973px] relative shrink-0 w-[40.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[61.967px] left-0 not-italic text-[46.475px] text-white top-[2.46px] whitespace-pre">✓</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#2354a2] content-stretch flex items-center justify-center left-0 rounded-[82713984px] size-[92.941px] top-[15.48px]" data-name="Container">
      <Text9 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[92.941px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[92.951px] left-0 not-italic text-[#101828] text-[61.967px] top-[-1.76px] tracking-[-1.2103px] whitespace-pre">Equipamentos Científicos</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[154.914px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[77.459px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[1.06px] tracking-[-0.5825px] w-[1022.456px] whitespace-pre-wrap">Soluções completas para laboratórios de ensino e investigação</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.484px] h-[263.339px] items-start left-[139.41px] top-0 w-[1186.198px]" data-name="Container">
      <Heading3 />
      <Paragraph />
    </div>
  );
}

function AboutSection4() {
  return (
    <div className="h-[263.339px] relative shrink-0 w-full" data-name="AboutSection">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[61.973px] relative shrink-0 w-[40.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[61.967px] left-0 not-italic text-[46.475px] text-white top-[2.46px] whitespace-pre">✓</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#2354a2] content-stretch flex items-center justify-center left-0 rounded-[82713984px] size-[92.941px] top-[15.48px]" data-name="Container">
      <Text10 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[92.941px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[92.951px] left-0 not-italic text-[#101828] text-[61.967px] top-[-1.76px] tracking-[-1.2103px] whitespace-pre">Consultoria Técnica</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[154.914px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[77.459px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[1.06px] tracking-[-0.5825px] w-[832.682px] whitespace-pre-wrap">Apoio especializado na escolha e implementação de equipamentos</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.484px] h-[263.339px] items-start left-[139.41px] top-0 w-[1186.198px]" data-name="Container">
      <Heading4 />
      <Paragraph1 />
    </div>
  );
}

function AboutSection5() {
  return (
    <div className="h-[263.339px] relative shrink-0 w-full" data-name="AboutSection">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[61.973px] relative shrink-0 w-[40.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[61.967px] left-0 not-italic text-[46.475px] text-white top-[2.47px] whitespace-pre">✓</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#2354a2] content-stretch flex items-center justify-center left-0 rounded-[82713984px] size-[92.941px] top-[15.48px]" data-name="Container">
      <Text11 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[92.941px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[92.951px] left-0 not-italic text-[#101828] text-[61.967px] top-[-1.76px] tracking-[-1.2103px] whitespace-pre">{`Manutenção & Suporte`}</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[154.914px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[77.459px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[1.06px] tracking-[-0.5825px] w-[948.87px] whitespace-pre-wrap">Atendimento 24/7 com equipa técnica qualificada</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.484px] h-[263.339px] items-start left-[139.41px] top-0 w-[1186.198px]" data-name="Container">
      <Heading5 />
      <Paragraph2 />
    </div>
  );
}

function AboutSection6() {
  return (
    <div className="h-[263.339px] relative shrink-0 w-full" data-name="AboutSection">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[61.973px] relative shrink-0 w-[40.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[61.967px] left-0 not-italic text-[46.475px] text-white top-[2.47px] whitespace-pre">✓</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#2354a2] content-stretch flex items-center justify-center left-0 rounded-[82713984px] size-[92.941px] top-[15.48px]" data-name="Container">
      <Text12 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[92.941px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[92.951px] left-0 not-italic text-[#101828] text-[61.967px] top-[-1.76px] tracking-[-1.2103px] whitespace-pre">Formação Profissional</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[154.914px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[77.459px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[1.06px] tracking-[-0.5825px] w-[1107.661px] whitespace-pre-wrap">Capacitação contínua no uso de tecnologias laboratoriais</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.484px] h-[263.339px] items-start left-[139.41px] top-0 w-[1186.198px]" data-name="Container">
      <Heading6 />
      <Paragraph3 />
    </div>
  );
}

function AboutSection7() {
  return (
    <div className="h-[263.339px] relative shrink-0 w-full" data-name="AboutSection">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute blur-[0px] content-stretch filter flex flex-col gap-[61.935px] h-[1239.158px] items-start left-0 top-[2483.21px] w-[1325.59px]" data-name="Container">
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
      <AboutSection7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[3722.366px] left-[61.93px] top-[1502.65px] w-[1325.59px]" data-name="Container">
      <Container1 />
      <ImageEquipaTrionica />
      <Container10 />
    </div>
  );
}

function CounterComponent() {
  return (
    <div className="h-[154.914px] relative shrink-0 w-[161.231px]" data-name="AnimatedCounter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute font-['Inter:Extra_Light',sans-serif] font-extralight leading-[154.918px] left-0 not-italic text-[#2354a2] text-[139.426px] top-[0.35px] tracking-[-2.056px] w-[162.663px] whitespace-pre-wrap">
          <AnimatedCounter target={100} duration={6000} suffix="+" className="font-['Inter:Extra_Light',sans-serif] font-extralight text-[#2354a2]" />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[58.122px] relative shrink-0 w-[151.64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[58.094px] left-0 not-italic text-[#4a5565] text-[38.729px] top-[1.06px] tracking-[0.4539px] whitespace-pre">Clientes</p>
      </div>
    </div>
  );
}

function AboutSection8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30.967px] h-[244.003px] items-center left-0 top-0 w-[616.305px]" data-name="AboutSection">
      <CounterComponent />
      <Text13 />
    </div>
  );
}

function CounterComponent1() {
  return (
    <div className="h-[154.914px] relative shrink-0 w-[161.231px]" data-name="AnimatedCounter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute font-['Inter:Extra_Light',sans-serif] font-extralight leading-[154.918px] left-0 not-italic text-[#2354a2] text-[139.426px] top-[0.35px] tracking-[-2.056px] w-[162.663px] whitespace-pre-wrap">
          <AnimatedCounter target={15} duration={6000} suffix="+" className="font-['Inter:Extra_Light',sans-serif] font-extralight text-[#2354a2]" />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[58.122px] relative shrink-0 w-[93.673px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[58.094px] left-0 not-italic text-[#4a5565] text-[38.729px] top-[1.06px] tracking-[0.4539px] whitespace-pre">Anos</p>
      </div>
    </div>
  );
}

function AboutSection9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30.967px] h-[244.003px] items-center left-[709.26px] top-0 w-[616.344px]" data-name="AboutSection">
      <CounterComponent1 />
      <Text14 />
    </div>
  );
}

function CounterComponent2() {
  return (
    <div className="h-[154.914px] relative shrink-0 w-[161.231px]" data-name="AnimatedCounter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute font-['Inter:Extra_Light',sans-serif] font-extralight leading-[154.918px] left-0 not-italic text-[#2354a2] text-[139.426px] top-[0.35px] tracking-[-2.056px] w-[162.663px] whitespace-pre-wrap">
          <AnimatedCounter target={10} duration={6000} suffix="+" className="font-['Inter:Extra_Light',sans-serif] font-extralight text-[#2354a2]" />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[58.122px] relative shrink-0 w-[286.564px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[58.094px] left-0 not-italic text-[#4a5565] text-[38.729px] top-[1.06px] tracking-[0.4539px] whitespace-pre">Marcas Globais</p>
      </div>
    </div>
  );
}

function AboutSection10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30.967px] h-[244.003px] items-center left-0 top-[336.94px] w-[616.305px]" data-name="AboutSection">
      <CounterComponent2 />
      <Text15 />
    </div>
  );
}

function CounterComponent3() {
  return (
    <div className="h-[154.914px] relative shrink-0 w-[80.269px]" data-name="AnimatedCounter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute font-['Inter:Extra_Light',sans-serif] font-extralight leading-[154.918px] left-0 not-italic text-[#2354a2] text-[139.426px] top-[0.35px] tracking-[-2.056px] whitespace-pre">
          <AnimatedCounter target={6} duration={6000} suffix="" className="font-['Inter:Extra_Light',sans-serif] font-extralight text-[#2354a2]" />
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[58.122px] relative shrink-0 w-[364.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[58.094px] left-0 not-italic text-[#4a5565] text-[38.729px] top-[1.06px] tracking-[0.4539px] whitespace-pre">Sectores Atendidos</p>
      </div>
    </div>
  );
}

function AboutSection11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30.967px] h-[244.003px] items-center left-[709.26px] top-[336.94px] w-[616.344px]" data-name="AboutSection">
      <CounterComponent3 />
      <Text16 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[580.947px] left-0 top-[123.91px] w-[1325.59px]" data-name="Container">
      <AboutSection8 />
      <AboutSection9 />
      <AboutSection10 />
      <AboutSection11 />
    </div>
  );
}

function Text17() {
  return <div className="absolute bg-[#2354a2] left-[253.78px] opacity-0 rounded-[30.967px] size-[61.935px] top-[54.19px]" data-name="Text" />;
}

function Text18() {
  return (
    <div className="absolute h-[77.457px] left-[77.42px] top-[46.45px] w-[321.73px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[77.459px] left-[161.87px] not-italic text-[#2354a2] text-[54.221px] text-center top-[1.06px] tracking-[-0.5825px] translate-x-[-50%] whitespace-pre">SAIBA MAIS</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[-142.36px] size-[61.935px] top-[54.19px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9348 61.9348">
        <g id="Icon">
          <path d="M12.8959 30.9675H49.0246" id="Vector" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
          <path d={svgPaths.pb7b5280} id="Vector_2" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[445.66px] size-[61.935px] top-[54.19px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9348 61.9348">
        <g id="Icon">
          <path d="M12.9034 30.9675H49.032" id="Vector" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
          <path d={svgPaths.p30471080} id="Vector_2" stroke="var(--stroke-0, #2354A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
        </g>
      </svg>
    </div>
  );
}

function FlowButton1() {
  return (
    <div className="absolute border-[4.93px] border-[rgba(0,0,0,0.1)] border-solid h-[180.22px] left-[373.08px] overflow-clip rounded-[387.294px] top-0 w-[579.406px]" data-name="FlowButton">
      <Text17 />
      <Text18 />
      <Icon2 />
      <Icon3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[180.22px] left-0 top-[828.76px] w-[1325.59px]" data-name="Container">
      <FlowButton1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute border-[#e5e7eb] border-[2.465px_0px_0px] border-solid h-[1011.448px] left-[61.93px] top-[5472.87px] w-[1325.59px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function AboutSection12() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[6670.202px] left-0 top-[1046.11px] w-[1449.459px]" data-name="AboutSection">
      <Container />
      <Heading />
      <Container11 />
      <Container14 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[253.803px] items-start left-0 top-[20.51px] w-[168.772px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[728.113px] relative shrink-0 text-[#050505] text-[774.588px] tracking-[-30.9835px] whitespace-pre">O</p>
    </div>
  );
}

function Text20() {
  return <div className="absolute h-[330.072px] left-[168.77px] top-[-42.3px] w-[38.425px]" data-name="Text" />;
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[253.803px] items-start left-[207.2px] top-[20.51px] w-[595.963px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[728.113px] relative shrink-0 text-[#050505] text-[774.588px] tracking-[-30.9835px] whitespace-pre">Futuro</p>
    </div>
  );
}

function Text22() {
  return <div className="absolute h-[330.072px] left-[803.16px] top-[-42.3px] w-0" data-name="Text" />;
}

function Text23() {
  return (
    <div className="absolute content-stretch flex h-[330.072px] items-start left-0 top-[203.8px] w-[1035.031px]" data-name="Text">
      <p className="capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[946.547px] relative shrink-0 text-[1006.964px] text-[rgba(5,5,5,0.3)] tracking-[-30.9835px] whitespace-pre">Começa</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[492.205px] left-[89.85px] top-[141.97px] w-[812.613px]" data-name="Paragraph">
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
    <div className="h-[53.567px] relative shrink-0 w-[51.654px]" data-name="Image (Trionica Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTrionicaLogo} />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[28.991px] relative shrink-0 w-[87.736px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[111.541px] left-[42.2px] text-[#050505] text-[92.951px] text-center top-[3.23px] tracking-[-1.859px] translate-x-[-50%] whitespace-pre">Triónica</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[53.567px] relative shrink-0 w-[151.467px]" data-name="Frame2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.077px] items-center relative size-full">
        <ImageTrionicaLogo />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container15() {
  return <div className="bg-[#667085] h-[2.514px] rounded-[82713984px] shrink-0 w-[28.19px]" data-name="Container" />;
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[40.278px]" data-name="Frame2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6.039px] items-center justify-center pb-[0.01px] pt-0 px-0 relative size-full">
        {[...Array(3).keys()].map((_, i) => (
          <Container15 key={i} />
        ))}
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch hidden lg:flex h-[53.567px] items-center justify-between left-[56.38px] top-[24.16px] w-[1337.264px]" data-name="Container">
      {/* Frame1 (Trionica logo) hidden - now using Navbar component */}
      <Frame4 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[76.53px] left-0 top-0 w-[1401.686px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[147.172px] left-0 text-[#050505] text-[123.934px] top-[2.59px] w-[1340.037px] whitespace-pre-wrap">A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute contents inset-[18.75%_12.55%_18.75%_12.45%]" data-name="Icon">
      <div className="absolute inset-[18.75%_12.56%_18.75%_12.44%]" data-name="Vector">
        <div className="absolute inset-[-6%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6149 14.0975">
            <path d={svgPaths.p12b59500} id="Vector" stroke="var(--stroke-0, #4278EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.51041" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20.139px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-[20.139px]" data-name="Icon">
      <Icon5 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="absolute bg-white left-[370.64px] rounded-[309.835px] size-[52.345px] top-[20.14px]" data-name="Arrow">
      <div className="absolute flex items-center justify-center left-[-4.04px] size-[20.139px] top-[-4.04px]">
        <div className="flex-none rotate-[180deg]">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[30.213px] relative w-[305.197px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[116.188px] left-[149.85px] text-[116.188px] text-center text-white top-[11.65px] translate-x-[-50%] whitespace-pre">Conheça-nos Melhor</p>
    </div>
  );
}

function Button2() {
  return (
    <motion.div 
      className="bg-[#4278ec] h-[92.623px] relative rounded-[309.835px] w-[439.078px]" 
      data-name="Button2"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
    >
      <Arrow />
      <div className="absolute flex h-[30.213px] items-center justify-center left-[-248.81px] top-[0.99px] w-[305.197px]">
        <div className="flex-none rotate-[180deg]">
          <Paragraph8 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[217.481px] left-[94.65px] top-[956.61px] w-[1401.686px]" data-name="Frame6">
      <Paragraph6 />
      <div className="absolute flex h-[92.623px] items-center justify-center left-[-439.08px] top-[32.24px] w-[439.078px]">
        <div className="flex-none rotate-[180deg]">
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[46.947px] left-[19.52px] top-[15.53px] w-[59.143px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[74.36px] left-[30.31px] text-[#050505] text-[61.967px] text-center top-[3.32px] tracking-[-1.2393px] translate-x-[-50%] whitespace-pre">OnHigh</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#ffb844] h-[78.011px] relative rounded-[271.106px] w-[98.194px]" data-name="Frame4">
      <Paragraph9 />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[#171717] h-[204.413px] left-[-0.29px] top-[1942.43px] w-[1522.529px]" data-name="Container" />;
}

function Vector() {
  return (
    <div className="absolute contents inset-[18%_89.06%_18%_0]" data-name="Vector">
      <div className="absolute inset-[31.27%_97.72%_41.17%_0.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7103 27.7533">
          <path d={svgPaths.p79b1e40} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_96.87%_41.17%_2.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.54413 27.7533">
          <path d={svgPaths.p350a8080} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.28%_94.89%_41.17%_3.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9441 4.58843">
          <path d={svgPaths.p112f4680} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_94.79%_48.25%_3.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.198 20.6182">
          <path d={svgPaths.p2b0f5a70} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_93.15%_41.17%_5.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5996 27.7533">
          <path d={svgPaths.p1c76d400} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_91.21%_41.17%_7.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1333 27.7533">
          <path d={svgPaths.pce4700} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_89.72%_41.17%_9.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.589 27.7533">
          <path d={svgPaths.p329f6b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.15%_94.7%_47.09%_3.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4519 22.9197">
          <path d={svgPaths.p1e0e8700} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18%_89.06%_25.44%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.967 56.953">
          <path d={svgPaths.p29157c00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.34%_89.28%_18%_0.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135.038 62.0907">
          <path d={svgPaths.p2884c000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector2() {
  return (
    <div className="absolute contents inset-[13%_69.12%_13%_24.9%]" data-name="Vector_2">
      <div className="absolute inset-[13%_73.87%_13%_24.9%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6652 74.5137">
          <path d={svgPaths.p32d2ef0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.28%_72.41%_13.27%_26.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6652 73.9605">
          <path d={svgPaths.p35e7ad80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.42%_70.75%_17.41%_27.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8765 65.6281">
          <path d={svgPaths.p22086b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.63%_69.12%_17.62%_29.48%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8765 65.2026">
          <path d={svgPaths.p38d43800} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector3() {
  return (
    <div className="absolute contents inset-[1%_47.29%_1%_44.85%]" data-name="Vector_3">
      <div className="absolute inset-[34.94%_50.02%_19.44%_46.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.8446 45.9419">
          <path d={svgPaths.p2d2bae00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.49%_51.76%_65.25%_48.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.17606 18.3835">
          <path d={svgPaths.p2c213700} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.74%_51.76%_1%_48.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.17606 18.3836">
          <path d={svgPaths.p10700600} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.87%_53.12%_58.21%_46.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.1433 7.98349">
          <path d={svgPaths.p1473cf50} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.72%_49.94%_18.47%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.02299 7.86611">
          <path d={svgPaths.p217eff00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.69%_53.69%_41.19%_44.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7446 2.13396">
          <path d={svgPaths.p313de400} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[41.19%] left-1/2 right-[48.53%] top-[56.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7447 2.13396">
          <path d={svgPaths.p1bacee00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.72%_53.12%_19.44%_46.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.03364 6.89519">
          <path d={svgPaths.pf2c2200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.26%_50.04%_58.21%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.70688 6.57508">
          <path d={svgPaths.p1468d500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.78%_52.71%_89.16%_46.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.24459 8.11575">
          <path d={svgPaths.p3e138100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1%_51.86%_91.15%_47.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49733 7.90825">
          <path d={svgPaths.p3f9a9480} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.16%_50.75%_90.05%_48.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0304 8.85571">
          <path d={svgPaths.p3064f700} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[4.24%_49.68%_85.38%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2599 10.4454">
          <path d={svgPaths.p345d9f00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.74%_48.92%_79.68%_50.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.42118 9.64521">
          <path d={svgPaths.p29fe8000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.77%_48.35%_72.12%_50.94%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1558 10.1787">
          <path d={svgPaths.pffc0780} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32%_47.57%_60.96%_51.74%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.84517 7.0846">
          <path d={svgPaths.p1e363700} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.37%_47.43%_53.7%_51.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97416 3.95838">
          <path d={svgPaths.p3be66e00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.67%_47.29%_41.17%_52.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.24606 9.22924">
          <path d={svgPaths.pb6c66c0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[62.67%_47.32%_30.38%_52.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.52902 6.99921">
          <path d={svgPaths.p107f1c00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.34%_53.88%_67.78%_45.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.01015 4.91056">
          <path d={svgPaths.pc484900} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[85.59%_49.21%_9.53%_50.4%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00992 4.91063">
          <path d={svgPaths.p14c66300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.53%_50.04%_30.86%_46.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.1122 10.6858">
          <path d={svgPaths.p8a85200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.1%_53.69%_28.04%_45.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.79721 5.89801">
          <path d={svgPaths.p105a4300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[82.5%_50.76%_10.91%_48.94%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79861 6.64257">
          <path d={svgPaths.p1de5ba2} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[91.43%_50.52%_3.84%_49.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.15682 4.7608">
          <path d={svgPaths.p3c6d4700} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.69%_48.8%_56.71%_50.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.16061 3.62735">
          <path d={svgPaths.p1b118cc0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[51.66%] left-1/2 right-[49.43%] top-[43.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.27741 4.69433">
          <path d={svgPaths.p13f52700} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector4() {
  return (
    <div className="absolute contents inset-[16.5%_21.2%_16.5%_66.68%]" data-name="Vector_4">
      <div className="absolute inset-[30.48%_29.24%_61.01%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8884 8.5742">
          <path d={svgPaths.p265e4480} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_29.31%_70.93%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94591 7.66471">
          <path d={svgPaths.p28e6e180} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_28.83%_56.69%_69.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2692 26.3619">
          <path d={svgPaths.p1e42d670} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.26%_30.63%_32.33%_66.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.4341 34.6527">
          <path d={svgPaths.p35269480} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.5%_31.92%_65.13%_67.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.42791 17.4911">
          <path d={svgPaths.p36cb1b80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[64.27%_31.92%_16.5%_67.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.42791 19.3628">
          <path d={svgPaths.p34926900} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.33%_23.55%_28.59%_76.16%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.60194 4.11244">
          <path d={svgPaths.p39f39770} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_23.29%_28.52%_76.49%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.72386 3.11061">
          <path d={svgPaths.p150f6e00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.38%_23.04%_28.55%_76.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.44895 3.09097">
          <path d={svgPaths.p28152880} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.43%_22.88%_28.55%_77.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.44094 4.05313">
          <path d={svgPaths.p3fd70d00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_22.62%_28.53%_77.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.71777 3.10406">
          <path d={svgPaths.p2b3bebf0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.45%_22.36%_28.52%_77.45%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.41674 3.04476">
          <path d={svgPaths.p2612a570} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_22.14%_28.6%_77.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.61118 3.03821">
          <path d={svgPaths.pd676400} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_21.89%_28.53%_77.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.71777 3.10406">
          <path d={svgPaths.p141b600} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_21.63%_28.59%_78.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.4026 3.04476">
          <path d={svgPaths.p5673300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.43%_21.45%_28.55%_78.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.44094 4.05313">
          <path d={svgPaths.p3d3001b8} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[74.25%_23.5%_25.27%_76.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.15877 0.481126">
          <path d={svgPaths.p4e9b500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.98%_29.24%_21.51%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8884 8.5742">
          <path d={svgPaths.p18050000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.95%_29.31%_31.44%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94591 7.66471">
          <path d={svgPaths.pb647100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.62%_28.83%_17.2%_69.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2692 26.3618">
          <path d={svgPaths.pb85e300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_28%_56.69%_71.3%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.87332 26.3618">
          <path d={svgPaths.p2d426300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.51%_26.55%_56.01%_72.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6995 27.6734">
          <path d={svgPaths.p1b5c7e80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_25.19%_56.69%_73.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3046 26.3553">
          <path d={svgPaths.p7332400} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_23.86%_66.97%_75.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3607 11.6519">
          <path d={svgPaths.p16b68a80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.12%_23.35%_56.7%_74.92%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1099 26.3618">
          <path d={svgPaths.p61da300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.5%_21.2%_56.02%_76.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.4992 27.6734">
          <path d={svgPaths.p2571a500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_21.59%_60.97%_77.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5846 17.7019">
          <path d={svgPaths.p5e58170} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[61.38%_27.41%_23.47%_71.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.565 15.2504">
          <path d={svgPaths.p2ddc2a40} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.63%_26.84%_17.19%_71.12%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.1499 26.3619">
          <path d={svgPaths.p13d37100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.62%_24.96%_17.2%_73.31%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.11 26.3618">
          <path d={svgPaths.p911b500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.95%_25.47%_27.48%_73.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3607 11.6519">
          <path d={svgPaths.p19a15300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector5() {
  return (
    <div className="absolute contents inset-[0_0_0_92.76%]" data-name="Vector_5">
      <div className="absolute inset-[69.66%_6.8%_7.01%_92.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.56892 23.4992">
          <path d={svgPaths.p3a672d00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.51%_6.25%_7.09%_93.28%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.06195 23.5545">
          <path d={svgPaths.p3ad8ea00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.15%_5.72%_6.89%_93.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.75046 24.1233">
          <path d={svgPaths.p35b83580} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.19%_4.93%_7.26%_94.39%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.68003 23.7198">
          <path d={svgPaths.p1ca55600} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.3%_4.63%_7.38%_95.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.36634 23.4909">
          <path d={svgPaths.p313a5e00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.21%_4.08%_7.14%_95.48%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.68958 23.8149">
          <path d={svgPaths.p143ea100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.94%_3.3%_7.5%_96.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.68003 23.72">
          <path d={svgPaths.p19308f00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.01%_2.59%_7.66%_97.02%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.89383 23.4909">
          <path d={svgPaths.p35547c00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.6%_2.11%_7.57%_97.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54874 23.9889">
          <path d={svgPaths.p21a7cd80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.86%_1.55%_7.81%_98.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.68955 23.4992">
          <path d={svgPaths.p393bd3b0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.42%_0.98%_7.62%_98.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.75053 24.1232">
          <path d={svgPaths.p2a990200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.69%_0.49%_7.98%_99.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.89383 23.4909">
          <path d={svgPaths.p9722d00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.28%_0_7.77%_99.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.63931 24.1232">
          <path d={svgPaths.p12f1df0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.41%_1.17%_38.36%_93.93%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.6124 51.5823">
          <path d={svgPaths.p32f7b400} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.55%_2.47%_52.89%_95.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5645 29.7662">
          <path clipRule="evenodd" d={svgPaths.p3234fe00} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_3.22%_90.36%_95.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1402 9.70892">
          <path clipRule="evenodd" d={svgPaths.p33408700} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.87%_2.58%_87.58%_96.96%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83024 5.58853">
          <path clipRule="evenodd" d={svgPaths.p3508d800} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.87%_4.2%_87.58%_95.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83024 5.58853">
          <path clipRule="evenodd" d={svgPaths.p3508d800} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_7.09%_0_92.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.01704 0.686749">
          <path d={svgPaths.p20c0ab00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_0.31%_0_93.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.6657 0.686749">
          <path d={svgPaths.p3688000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_0.07%_0_99.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.01704 0.686749">
          <path d={svgPaths.p20c0ab00} fill="var(--fill-0, #616161)" id="Vector" />
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
    <div className="h-[100.694px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Frame6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[100.694px] items-start left-[121.55px] top-[1993.78px] w-[1279.842px]" data-name="Frame1">
      <Icon7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute left-[0.29px] size-0 top-[-570.95px]" data-name="Group8">
      <Container17 />
      <Frame />
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-[#eee] h-[337.333px] left-0 top-0 w-[1522.529px]" data-name="Container" />;
}

function Hero() {
  return (
    <div className="absolute h-0 left-0 top-[570.95px] w-[1450.026px]" data-name="Hero">
      <Group2 />
      <Container18 />
    </div>
  );
}

function ImageMicroscope() {
  return (
    <div className="h-[1028.803px] relative shrink-0 w-full" data-name="Image (Microscope)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageMicroscope} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1028.803px] items-start left-[452.31px] overflow-clip top-[129.19px] w-[757.474px]" data-name="Group5">
      <ImageMicroscope />
    </div>
  );
}

function ManufactureLandingPage() {
  return (
    <div className="bg-[#f5f5f5] h-[1352.346px] overflow-clip relative shrink-0 w-full" data-name="ManufactureLandingPage">
      <Paragraph4 />
      <Container16 />
      <Frame5 />
      <div className="absolute flex h-[118.192px] items-center justify-center left-[447.1px] top-[232.33px] w-[124.613px]" style={{ "--transform-inner-width": "58.3125", "--transform-inner-height": "19" } as React.CSSProperties}>
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
    <div className="absolute bg-[#eee] content-stretch flex flex-col h-[1293.968px] items-start left-0 overflow-clip px-[-0.283px] py-0 top-0 w-[1449.459px]" data-name="HeroSection">
      <ManufactureLandingPage />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[65.055px] opacity-0 relative shrink-0 w-[1325.59px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Manrope:Medium',sans-serif] font-medium leading-[65.065px] left-0 text-[#4a5565] text-[54.221px] top-[-1.06px] tracking-[-3.8729px] whitespace-pre">2026</p>
      </div>
    </div>
  );
}

function LatestPostSection() {
  return (
    <div className="h-[138.239px] relative w-[144.837px]" data-name="LatestPostSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[116.188px] left-[-15.68px] text-[#245454] text-[116.188px] top-[11.85px] whitespace-pre">✱</p>
      </div>
    </div>
  );
}

function LatestPostSection1() {
  return (
    <div className="h-[102.223px] relative shrink-0 w-[865.508px]" data-name="LatestPostSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[102.246px] left-0 text-[#101828] text-[92.951px] top-[3.17px] tracking-[-2.3238px] whitespace-pre">NOSSAS SOLUÇÕES</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[116.205px] opacity-0 relative shrink-0 w-[1325.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[17.268px] items-center pl-[-29.183px] pr-0 py-0 relative size-full">
        <div className="flex h-[198.418px] items-center justify-center relative shrink-0 w-[196.954px]" style={{ "--transform-inner-width": "11.90625", "--transform-inner-height": "19" } as React.CSSProperties}>
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
    <div className="h-[302.048px] opacity-0 relative shrink-0 w-[1325.59px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[100.696px] left-0 text-[#4a5565] text-[61.967px] top-[-2.82px] w-[1208.357px] whitespace-pre-wrap">Transformando laboratórios. Capacitando profissionais. Construindo o futuro de Moçambique.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[92.941px] h-[669.189px] items-start pb-0 pt-[77.459px] px-0 relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Container19 />
      <Paragraph11 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[92.941px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.26%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.2545 46.4731">
            <path d={svgPaths.p39bcee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.66%_-3.87px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.74506 30.9827">
            <path d="M3.87253 3.87253V27.1102" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.2154 32.9165">
            <path d={svgPaths.p3f6e2400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#2354a2] relative rounded-[54.221px] shrink-0 size-[185.843px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[46.451px] px-[46.451px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[96.792px] relative shrink-0 w-[923.322px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[96.824px] left-0 not-italic text-[#101828] text-[77.459px] top-[-1.41px] tracking-[-3.6763px] whitespace-pre">Educação</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[77.457px] relative shrink-0 w-[923.322px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[77.459px] left-0 not-italic text-[#6a7282] text-[54.221px] top-[1.06px] tracking-[-0.5825px] whitespace-pre">Ensino • Laboratórios • Investigação</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[189.733px] relative shrink-0 w-[923.322px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.484px] items-start relative size-full">
        <Text24 />
        <Text25 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[61.935px] h-[189.733px] items-center left-0 top-0 w-[1171.099px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function ImageEducacaoVisual() {
  return (
    <div className="h-[1239.313px] relative rounded-[54.221px] shrink-0 w-[1072.92px]" data-name="Image (Educação visual)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[54.221px] size-full" src={imgImageEducacaoVisual} />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[87.125px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[87.141px] left-0 not-italic text-[#101828] text-[69.713px] top-[2.46px] tracking-[-3.4448px] whitespace-pre">Educação</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[264.378px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.12px] tracking-[-0.5825px] w-[1061.186px] whitespace-pre-wrap">Equipamentos didáticos, laboratoriais e de investigação para escolas, centros de formação, laboratórios e universidades.</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[46.451px] h-[397.954px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph12 />
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text26() {
  return (
    <div className="absolute h-[176.252px] left-[69.68px] top-0 w-[843.4px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] w-[844.301px] whitespace-pre-wrap">Equipamentos didáticos de última geração</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[176.252px] relative shrink-0 w-full" data-name="List Item">
      <Container25 />
      <Text26 />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text27() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[827.3px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Soluções laboratoriais completas</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container26 />
      <Text27 />
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text28() {
  return (
    <div className="absolute h-[176.252px] left-[69.68px] top-0 w-[843.4px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] w-[720.367px] whitespace-pre-wrap">Ferramentas de investigação científica</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[176.252px] relative shrink-0 w-full" data-name="List Item">
      <Container27 />
      <Text28 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text29() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[752.924px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Suporte técnico especializado</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container28 />
      <Text29 />
    </div>
  );
}

function Container29() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text30() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[611.067px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Formação e capacitação</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container29 />
      <Text30 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[46.451px] h-[802.687px] items-start relative shrink-0 w-full" data-name="List">
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
    <div className="absolute bg-white content-stretch flex flex-col h-[962.532px] items-start left-0 pb-[2.465px] pt-[79.922px] px-[79.922px] rounded-[54.221px] top-[30.97px] w-[1072.92px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[2.465px] border-solid inset-0 pointer-events-none rounded-[54.221px]" />
      <List />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[312.88px] size-[61.935px] top-[38.71px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9348 61.9348">
        <g id="Icon">
          <path d={svgPaths.p2bd4cc80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
          <path d={svgPaths.p1e7059d0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#ff6747] h-[139.392px] left-[636.18px] rounded-[38.729px] shadow-[0px_3.873px_11.619px_0px_rgba(0,0,0,0.05),0px_3.873px_7.746px_-3.873px_rgba(0,0,0,0.05)] top-[1070.96px] w-[436.741px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[77.459px] left-[171.94px] not-italic text-[54.221px] text-center text-white top-[32.03px] tracking-[-0.5825px] translate-x-[-50%] whitespace-pre">Ver mais</p>
      <Icon9 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[1210.348px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Button />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[1685.759px] relative shrink-0 w-[1072.92px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[77.458px] items-start relative size-full">
        <Container24 />
        <Container31 />
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[77.457px] h-[3131.328px] items-start left-0 pb-[2.465px] pl-[64.4px] pr-[2.465px] pt-[64.4px] rounded-[61.967px] top-[282.67px] w-[1201.72px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[2.465px] border-solid inset-0 pointer-events-none rounded-[61.967px] shadow-[0px_38.729px_58.094px_-11.619px_rgba(0,0,0,0.1),0px_15.492px_23.238px_-15.492px_rgba(0,0,0,0.1)]" />
      <ImageEducacaoVisual />
      <Container32 />
    </div>
  );
}

function Container33() {
  return <div className="absolute left-0 opacity-0 size-[185.881px] top-[-371.8px]" data-name="Container" />;
}

function Container34() {
  return (
    <div className="h-[3414.002px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Article />
      <Container33 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[92.941px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-1/4 right-[41.66%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-3.87px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.7286 7.74506">
            <path d="M3.87253 3.87253H34.8561" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[91.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-3.87px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.4506 7.74506">
            <path d="M3.87253 3.87253H73.5781" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_12.49%_8.33%_54.17%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.7253 61.9605">
            <path d={svgPaths.p28421e60} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_54.16%_41.67%_37.51%]" data-name="Vector">
        <div className="absolute inset-[-3.87px_-49.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4909 7.74506">
            <path d="M3.87253 3.87253H11.6184" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[29.17%] right-[45.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-16.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9827 30.9827">
            <path d={svgPaths.p37899100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.34%] right-[49.99%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2368 23.2368">
            <path d={svgPaths.p3d43d9f0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[54.221px] shrink-0 size-[185.843px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[46.451px] px-[46.451px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[96.792px] relative shrink-0 w-[871.093px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[96.824px] left-0 not-italic text-[#101828] text-[77.459px] top-[-1.41px] tracking-[-3.6763px] whitespace-pre">Saúde</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[77.457px] relative shrink-0 w-[871.093px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[77.459px] left-0 not-italic text-[#6a7282] text-[54.221px] top-[1.06px] tracking-[-0.5825px] whitespace-pre">Hospitais • Clínicas • Laboratórios</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[189.733px] relative shrink-0 w-[871.093px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.484px] items-start relative size-full">
        <Text31 />
        <Text32 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[61.935px] h-[189.733px] items-center left-0 top-0 w-[1118.871px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function ImageSaudeVisual() {
  return (
    <div className="h-[1239.313px] relative rounded-[54.221px] shrink-0 w-[1072.92px]" data-name="Image (Saúde visual)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[54.221px] size-full" src={imgImageSaudeVisual} />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[87.125px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[87.141px] left-0 not-italic text-[#364153] text-[69.713px] top-[2.46px] tracking-[-3.4448px] whitespace-pre">Saúde</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[176.252px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#6a7282] text-[54.221px] top-[2.11px] tracking-[-0.5825px] w-[1061.186px] whitespace-pre-wrap">Equipamentos hospitalares, laboratoriais e de investigação para hospitais, unidades de saúde e laboratórios.</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[46.451px] h-[309.828px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph13 />
    </div>
  );
}

function Container39() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text33() {
  return (
    <div className="absolute h-[176.252px] left-[69.68px] top-0 w-[843.4px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] w-[677.764px] whitespace-pre-wrap">Equipamentos hospitalares certificados</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[176.252px] relative shrink-0 w-full" data-name="List Item">
      <Container39 />
      <Text33 />
    </div>
  );
}

function Container40() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text34() {
  return (
    <div className="absolute h-[176.252px] left-[69.68px] top-0 w-[843.4px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] w-[766.842px] whitespace-pre-wrap">Instrumentação laboratorial de precisão</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[176.252px] relative shrink-0 w-full" data-name="List Item">
      <Container40 />
      <Text34 />
    </div>
  );
}

function Container41() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text35() {
  return (
    <div className="absolute h-[176.252px] left-[69.68px] top-0 w-[843.4px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] w-[611.924px] whitespace-pre-wrap">Soluções de diagnóstico avançadas</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[176.252px] relative shrink-0 w-full" data-name="List Item">
      <Container41 />
      <Text35 />
    </div>
  );
}

function Container42() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text36() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[626.243px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Manutenção e calibração</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container42 />
      <Text36 />
    </div>
  );
}

function Container43() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text37() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[835.08px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Consultoria técnica especializada</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container43 />
      <Text37 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[46.451px] h-[890.814px] items-start relative shrink-0 w-full" data-name="List">
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
    <div className="absolute bg-white content-stretch flex flex-col h-[1050.658px] items-start left-0 pb-[2.465px] pt-[79.922px] px-[79.922px] rounded-[54.221px] top-[30.97px] w-[1072.92px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[2.465px] border-solid inset-0 pointer-events-none rounded-[54.221px]" />
      <List1 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[312.88px] size-[61.935px] top-[38.71px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9348 61.9348">
        <g id="Icon">
          <path d={svgPaths.p7963a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
          <path d={svgPaths.p3f381670} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#ff6747] h-[139.392px] left-[636.18px] rounded-[38.729px] shadow-[0px_3.873px_11.619px_0px_rgba(0,0,0,0.05),0px_3.873px_7.746px_-3.873px_rgba(0,0,0,0.05)] top-[1159.08px] w-[436.741px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[77.459px] left-[171.94px] not-italic text-[54.221px] text-center text-white top-[32.03px] tracking-[-0.5825px] translate-x-[-50%] whitespace-pre">Ver mais</p>
      <Icon11 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[1298.474px] relative shrink-0 w-full" data-name="Container">
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
    <div className="h-[387.285px] relative shrink-0 w-[1072.92px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[77.456px] items-start relative size-full">
        <Container38 />
        <Container46 />
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[77.458px] h-[1832.854px] items-start left-0 pb-[2.465px] pl-[64.4px] pr-[2.465px] pt-[64.4px] rounded-[61.967px] top-[282.67px] w-[1201.72px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[2.465px] border-solid inset-0 pointer-events-none rounded-[61.967px]" />
      <ImageSaudeVisual />
      <Container47 />
    </div>
  );
}

function Container48() {
  return <div className="absolute left-0 opacity-0 size-[185.881px] top-[-371.8px]" data-name="Container" />;
}

function Container49() {
  return (
    <div className="h-[2115.528px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Article1 />
      <Container48 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[92.941px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_20.83%_8.33%_20.84%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9605 81.3231">
            <path d={svgPaths.p21101d00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[54.221px] shrink-0 size-[185.843px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[46.452px] px-[46.451px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[96.792px] relative shrink-0 w-[949.128px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[96.824px] left-0 not-italic text-[#101828] text-[77.459px] top-[-1.41px] tracking-[-3.6763px] whitespace-pre">Águas</p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[77.457px] relative shrink-0 w-[949.128px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[77.459px] left-0 not-italic text-[#6a7282] text-[54.221px] top-[1.06px] tracking-[-0.5825px] whitespace-pre">Tratamento • Análise • Monitorização</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[189.733px] relative shrink-0 w-[949.128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.484px] items-start relative size-full">
        <Text38 />
        <Text39 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex gap-[61.935px] h-[189.733px] items-center left-0 top-0 w-[1196.906px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function ImageAguasVisual() {
  return (
    <div className="h-[1239.313px] relative rounded-[54.221px] shrink-0 w-[1072.92px]" data-name="Image (Águas visual)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[54.221px] size-full" src={imgImageAguasVisual} />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[87.125px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[87.141px] left-0 not-italic text-[#364153] text-[69.713px] top-[2.47px] tracking-[-3.4448px] whitespace-pre">Águas</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[176.252px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#6a7282] text-[54.221px] top-[2.11px] tracking-[-0.5825px] w-[921.76px] whitespace-pre-wrap">Soluções para tratamento, análise e monitorização da qualidade da água, incluindo equipamentos laboratoriais especializados.</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[46.452px] h-[309.828px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Paragraph14 />
    </div>
  );
}

function Container54() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text40() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[809.235px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Sistemas de tratamento de água</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container54 />
      <Text40 />
    </div>
  );
}

function Container55() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text41() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[831.498px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Equipamentos de análise química</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container55 />
      <Text41 />
    </div>
  );
}

function Container56() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text42() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[726.347px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.12px] tracking-[-0.5825px] whitespace-pre">Monitorização em tempo real</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container56 />
      <Text42 />
    </div>
  );
}

function Container57() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text43() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[551.443px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Controlo de qualidade</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container57 />
      <Text43 />
    </div>
  );
}

function Container58() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text44() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[619.387px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.12px] tracking-[-0.5825px] whitespace-pre">Soluções personalizadas</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container58 />
      <Text44 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[46.451px] h-[626.435px] items-start relative shrink-0 w-full" data-name="List">
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
    <div className="absolute bg-white content-stretch flex flex-col h-[786.279px] items-start left-0 pb-[2.465px] pt-[79.923px] px-[79.922px] rounded-[54.221px] top-[30.97px] w-[1072.92px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[2.465px] border-solid inset-0 pointer-events-none rounded-[54.221px]" />
      <List2 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[312.88px] size-[61.935px] top-[38.71px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9348 61.9348">
        <g id="Icon">
          <path d={svgPaths.p2cab2c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
          <path d={svgPaths.p26de1080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#ff6747] h-[139.392px] left-[636.18px] rounded-[38.729px] shadow-[0px_3.873px_11.619px_0px_rgba(0,0,0,0.05),0px_3.873px_7.746px_-3.873px_rgba(0,0,0,0.05)] top-[894.71px] w-[436.741px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[77.459px] left-[171.94px] not-italic text-[54.221px] text-center text-white top-[32.02px] tracking-[-0.5825px] translate-x-[-50%] whitespace-pre">Ver mais</p>
      <Icon13 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[1034.096px] relative shrink-0 w-full" data-name="Container">
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
    <div className="h-[387.285px] relative shrink-0 w-[1072.92px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[77.458px] items-start relative size-full">
        <Container53 />
        <Container61 />
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[77.456px] h-[1832.854px] items-start left-0 pb-[2.465px] pl-[64.4px] pr-[2.465px] pt-[64.4px] rounded-[61.967px] top-[282.68px] w-[1201.72px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[2.465px] border-solid inset-0 pointer-events-none rounded-[61.967px]" />
      <ImageAguasVisual />
      <Container62 />
    </div>
  );
}

function Container63() {
  return <div className="absolute left-0 opacity-0 size-[185.881px] top-[-371.8px]" data-name="Container" />;
}

function Container64() {
  return (
    <div className="h-[2115.528px] relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Article2 />
      <Container63 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[92.941px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_15.48%_20.83%_15.48%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-6.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.9203 69.7055">
            <path d={svgPaths.p7172100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[79.17%]" data-name="Vector">
        <div className="absolute inset-[-33.33%_-3.87px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.74506 19.3639">
            <path d="M3.87253 15.4914V3.87253" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[54.221px] shrink-0 size-[185.843px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[46.451px] px-[46.451px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[96.792px] relative shrink-0 w-[408.354px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[96.824px] left-0 not-italic text-[#101828] text-[77.459px] top-[-1.41px] tracking-[-3.6763px] whitespace-pre">Ambiente</p>
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[77.457px] relative shrink-0 w-[408.354px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[77.459px] left-0 not-italic text-[#6a7282] text-[54.221px] top-[1.06px] tracking-[-0.5825px] whitespace-pre">Água • Solo • Ar</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[189.733px] relative shrink-0 w-[408.354px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.483px] items-start relative size-full">
        <Text45 />
        <Text46 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex gap-[61.935px] h-[189.733px] items-center left-0 top-0 w-[656.132px]" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function ImageAmbienteVisual() {
  return (
    <div className="h-[1239.313px] relative rounded-[54.221px] shrink-0 w-[1072.92px]" data-name="Image (Ambiente visual)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[54.221px] size-full" src={imgImageAmbienteVisual} />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[87.125px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[87.141px] left-0 not-italic text-[#364153] text-[69.713px] top-[2.47px] tracking-[-3.4448px] whitespace-pre">Ambiente</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[176.252px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#6a7282] text-[54.221px] top-[2.12px] tracking-[-0.5825px] w-[1068.931px] whitespace-pre-wrap">Sistemas de monitorização da água, solo e ar, unidades de tratamento de águas e águas residuais, instrumentação e sistemas de aquisição e registo de dados.</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[46.452px] h-[309.828px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Paragraph15 />
    </div>
  );
}

function Container69() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text47() {
  return (
    <div className="absolute h-[176.252px] left-[69.68px] top-0 w-[843.4px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] w-[615.797px] whitespace-pre-wrap">Monitorização ambiental integrada</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[176.252px] relative shrink-0 w-full" data-name="List Item">
      <Container69 />
      <Text47 />
    </div>
  );
}

function Container70() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text48() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[766.79px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Tratamento de águas residuais</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container70 />
      <Text48 />
    </div>
  );
}

function Container71() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text49() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[714.061px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Análise de qualidade do solo</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container71 />
      <Text49 />
    </div>
  );
}

function Container72() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text50() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[802.726px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.12px] tracking-[-0.5825px] whitespace-pre">Sistemas de aquisição de dados</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container72 />
      <Text50 />
    </div>
  );
}

function Container73() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text51() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[585.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Relatórios e consultoria</p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container73 />
      <Text51 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[46.451px] h-[714.561px] items-start relative shrink-0 w-full" data-name="List">
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
    <div className="absolute bg-white content-stretch flex flex-col h-[874.405px] items-start left-0 pb-[2.465px] pt-[79.923px] px-[79.922px] rounded-[54.221px] top-[30.97px] w-[1072.92px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[2.465px] border-solid inset-0 pointer-events-none rounded-[54.221px]" />
      <List3 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[312.88px] size-[61.935px] top-[38.71px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9348 61.9348">
        <g id="Icon">
          <path d={svgPaths.p1b4bd460} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
          <path d={svgPaths.p3e5d5040} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#ff6747] h-[139.392px] left-[636.18px] rounded-[38.729px] shadow-[0px_3.873px_11.619px_0px_rgba(0,0,0,0.05),0px_3.873px_7.746px_-3.873px_rgba(0,0,0,0.05)] top-[982.83px] w-[436.741px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[77.459px] left-[171.94px] not-italic text-[54.221px] text-center text-white top-[32.02px] tracking-[-0.5825px] translate-x-[-50%] whitespace-pre">Ver mais</p>
      <Icon15 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[1122.222px] relative shrink-0 w-full" data-name="Container">
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
    <div className="h-[387.285px] relative shrink-0 w-[1072.92px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[77.458px] items-start relative size-full">
        <Container68 />
        <Container76 />
      </div>
    </div>
  );
}

function Article3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[77.457px] h-[1832.854px] items-start left-0 pb-[2.465px] pl-[64.4px] pr-[2.465px] pt-[64.399px] rounded-[61.967px] top-[282.67px] w-[1201.72px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[2.465px] border-solid inset-0 pointer-events-none rounded-[61.967px]" />
      <ImageAmbienteVisual />
      <Container77 />
    </div>
  );
}

function Container78() {
  return <div className="absolute left-0 opacity-0 size-[185.881px] top-[-371.8px]" data-name="Container" />;
}

function Container79() {
  return (
    <div className="h-[2115.528px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Article3 />
      <Container78 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[92.941px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_12.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.1957 77.4507">
            <path d={svgPaths.p26859900} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.74506" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[54.221px] shrink-0 size-[185.843px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[46.451px] px-[46.451px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[96.792px] relative shrink-0 w-[849.87px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[96.824px] left-0 not-italic text-[#101828] text-[77.459px] top-[-1.41px] tracking-[-3.6763px] whitespace-pre">Minas</p>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[77.457px] relative shrink-0 w-[849.87px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[77.459px] left-0 not-italic text-[#6a7282] text-[54.221px] top-[1.06px] tracking-[-0.5825px] whitespace-pre">Exploração • Análise • Segurança</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[189.733px] relative shrink-0 w-[849.87px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.483px] items-start relative size-full">
        <Text52 />
        <Text53 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex gap-[61.935px] h-[189.733px] items-center left-0 top-0 w-[1097.648px]" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function ImageMinasVisual() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[54.221px] w-[1072.92px]" data-name="Image (Minas visual)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[54.221px] size-full" src={imgImageMinasVisual} />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[87.125px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[87.141px] left-0 not-italic text-[#364153] text-[69.713px] top-[2.46px] tracking-[-3.4448px] whitespace-pre">Minas</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[176.252px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#6a7282] text-[54.221px] top-[2.11px] tracking-[-0.5825px] w-[1053.44px] whitespace-pre-wrap">Equipamentos e soluções para exploração mineira, análise de minerais, monitorização ambiental em minas e segurança no setor mineiro.</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[46.45px] h-[309.828px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Paragraph16 />
    </div>
  );
}

function Container84() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text54() {
  return (
    <div className="absolute h-[176.252px] left-[69.68px] top-0 w-[843.4px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] w-[724.24px] whitespace-pre-wrap">Equipamentos de exploração mineira</p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[176.252px] relative shrink-0 w-full" data-name="List Item">
      <Container84 />
      <Text54 />
    </div>
  );
}

function Container85() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text55() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[817.131px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Análise geológica e mineralógica</p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container85 />
      <Text55 />
    </div>
  );
}

function Container86() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text56() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[707.243px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Monitorização de segurança</p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container86 />
      <Text56 />
    </div>
  );
}

function Container87() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text57() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[690.642px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Gestão ambiental em minas</p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container87 />
      <Text57 />
    </div>
  );
}

function Container88() {
  return <div className="absolute bg-[#2354a2] left-0 rounded-[82713984px] size-[23.226px] top-[30.97px]" data-name="Container" />;
}

function Text58() {
  return (
    <div className="absolute h-[88.126px] left-[69.68px] top-0 w-[814.088px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[88.109px] left-0 not-italic text-[#4a5565] text-[54.221px] top-[2.11px] tracking-[-0.5825px] whitespace-pre">Formação em segurança mineira</p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="h-[88.126px] relative shrink-0 w-full" data-name="List Item">
      <Container88 />
      <Text58 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[46.451px] h-[714.561px] items-start relative shrink-0 w-full" data-name="List">
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
    <div className="absolute bg-white content-stretch flex flex-col h-[874.405px] items-start left-0 pb-[2.465px] pt-[79.923px] px-[79.922px] rounded-[54.221px] top-[30.97px] w-[1072.92px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[2.465px] border-solid inset-0 pointer-events-none rounded-[54.221px]" />
      <List4 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[312.88px] size-[61.935px] top-[38.71px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9348 61.9348">
        <g id="Icon">
          <path d={svgPaths.p2638b180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
          <path d={svgPaths.p145322c8} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.16123" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#ff6747] h-[139.392px] left-[636.18px] rounded-[38.729px] shadow-[0px_3.873px_11.619px_0px_rgba(0,0,0,0.05),0px_3.873px_7.746px_-3.873px_rgba(0,0,0,0.05)] top-[982.83px] w-[436.741px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[77.459px] left-[171.94px] not-italic text-[54.221px] text-center text-white top-[32.02px] tracking-[-0.5825px] translate-x-[-50%] whitespace-pre">Ver mais</p>
      <Icon17 />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[1122.222px] relative shrink-0 w-full" data-name="Container">
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
    <div className="h-[387.285px] relative shrink-0 w-[1072.92px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[77.456px] items-start relative size-full">
        <Container83 />
        <Container91 />
      </div>
    </div>
  );
}

function Article4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[77.459px] h-[1832.854px] items-start left-0 pl-[64.4px] pr-[2.465px] py-[64.399px] rounded-[61.967px] top-[282.67px] w-[1201.72px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[2.465px] border-solid inset-0 pointer-events-none rounded-[61.967px]" />
      <ImageMinasVisual />
      <Container92 />
    </div>
  );
}

function Container93() {
  return <div className="absolute left-0 opacity-0 size-[185.881px] top-[-371.8px]" data-name="Container" />;
}

function Container94() {
  return (
    <div className="h-[2115.528px] relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Article4 />
      <Container93 />
    </div>
  );
}

function TimeLine() {
  return (
    <div className="h-[12619.642px] relative shrink-0 w-full" data-name="TimeLine_01">
      <div className="content-stretch flex flex-col gap-[185.881px] items-start px-[61.935px] py-0 relative size-full">
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
    <div className="h-[13970.382px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[495.671px] items-start px-[61.935px] py-0 relative size-full">
        <Container20 />
        <TimeLine />
      </div>
    </div>
  );
}

function LatestPostSection2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[14342.144px] items-start left-0 overflow-clip pb-0 pt-[185.882px] px-0 top-[7716.31px] w-[1449.459px]" data-name="LatestPostSection">
      <Container95 />
    </div>
  );
}

function Container96() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[3.852px] left-0 to-[#99a1af] top-[106.5px] via-1/2 w-0" data-name="Container" />;
}

function GradientHeading() {
  return (
    <div className="absolute h-[246.083px] left-[92.94px] top-[7.4px] w-[1046.883px]" data-name="GradientHeading">
      <p className="absolute bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[108.442px] left-0 not-italic text-[77.459px] text-[rgba(0,0,0,0)] top-[-7.75px] tracking-[-3.6763px] w-[1049.567px] whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgb(115, 115, 115) 0%, rgb(82, 82, 82) 100%)" }}>
        Marcas líderes que confiam em nós
      </p>
    </div>
  );
}

function Container97() {
  return <div className="absolute bg-gradient-to-l from-[rgba(0,0,0,0)] h-[3.852px] left-[1325.59px] to-[#99a1af] top-[106.5px] via-1/2 w-0" data-name="Container" />;
}

function Container98() {
  return (
    <div className="h-[216.849px] relative shrink-0 w-[1325.59px]" data-name="Container">
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
    <div className="h-[173.479px] relative shrink-0 w-[297.426px]" data-name="BCILogo">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBciLogo} />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute blur-[0px] content-stretch filter flex h-[216.849px] items-center justify-center left-0 overflow-clip pl-0 pr-[0.039px] py-0 top-0 w-[371.801px]" data-name="Container">
      <BciLogo />
    </div>
  );
}

function HcbLogo() {
  return (
    <div className="h-[173.479px] relative shrink-0 w-[297.426px]" data-name="HCBLogo">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgHcbLogo} />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute blur-[0px] content-stretch filter flex h-[216.849px] items-center justify-center left-[433.74px] overflow-clip pl-0 pr-[0.039px] py-0 top-0 w-[371.801px]" data-name="Container">
      <HcbLogo />
    </div>
  );
}

function LucasNuelleLogo() {
  return (
    <div className="h-[173.479px] relative shrink-0 w-[297.426px]" data-name="LucasNuelleLogo">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLucasNuelleLogo} />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute blur-[0px] content-stretch filter flex h-[216.849px] items-center justify-center left-[867.48px] overflow-clip pl-0 pr-[0.039px] py-0 top-0 w-[371.801px]" data-name="Container">
      <LucasNuelleLogo />
    </div>
  );
}

function LogoCarousel() {
  return (
    <div className="h-[216.849px] relative shrink-0 w-[1239.274px]" data-name="LogoCarousel">
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
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[123.909px] h-[1053.315px] items-center left-0 pb-[247.855px] pt-[247.853px] px-0 top-[22058.46px] w-[1449.459px]" data-name="PartnersSection">
      <Container98 />
      <LogoCarousel />
    </div>
  );
}

function Container102() {
  return <div className="absolute border-[#545b5b] border-[2.465px] border-solid left-[439.37px] opacity-20 rounded-[3872.94px] size-[560.492px] top-[23117.36px]" data-name="Container" />;
}

function Container103() {
  return <div className="absolute border-[#545b5b] border-[2.465px] border-solid left-[260.91px] opacity-20 rounded-[3872.94px] size-[917.421px] top-[22938.89px]" data-name="Container" />;
}

function Container104() {
  return <div className="absolute border-[#545b5b] border-[2.465px] border-solid h-[1291.081px] left-[74.06px] opacity-20 rounded-[3872.94px] top-[22752.06px] w-[1291.082px]" data-name="Container" />;
}

function Container105() {
  return <div className="absolute border-[#545b5b] border-[2.465px] border-solid h-[1685.191px] left-[-122.99px] opacity-20 rounded-[3872.94px] top-[22555.01px] w-[1685.19px]" data-name="Container" />;
}

function Container106() {
  return (
    <div className="absolute left-[-55.49px] size-0 top-[-23111.77px]" data-name="Container">
      <Container102 />
      <Container103 />
      <Container104 />
      <Container105 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[25.281px] left-0 top-0 w-[177.531px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[105.344px] left-0 text-[#565656] text-[61.967px] top-[-8.66px] whitespace-pre">Fornecemos soluções</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[50.565px] left-0 top-[25.28px] w-[177.531px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[105.344px] left-0 text-[#565656] text-[61.967px] top-[-8.66px] w-[154.918px] whitespace-pre-wrap">completas para o seu sector.</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute h-[75.847px] left-[130.13px] top-[74.36px] w-[177.531px]" data-name="Container">
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[66.925px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[278.852px] left-[260.47px] text-[#050505] text-[247.868px] text-center top-[15.22px] tracking-[-9.9147px] translate-x-[-50%] whitespace-pre">Pronto Para Iniciar</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[66.928px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute capitalize font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[278.852px] left-[261.08px] text-[#050505] text-[247.868px] text-center top-[15.22px] tracking-[-9.9147px] translate-x-[-50%] whitespace-pre">o Seu Projecto?</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex flex-col h-[133.853px] items-start left-[404.34px] top-[203.55px] w-[519.587px]" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[22.306px] left-0 top-0 w-[314.167px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[92.951px] left-[159.49px] text-[#565656] text-[69.713px] text-center top-[0.59px] translate-x-[-50%] whitespace-pre">Vamos discutir a melhor solução</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[22.306px] left-0 top-[22.3px] w-[314.167px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[92.951px] left-[155.5px] text-[#565656] text-[69.713px] text-center top-[0.59px] translate-x-[-50%] whitespace-pre">para o seu projecto.</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute h-[44.612px] left-[512.16px] top-[359.71px] w-[314.167px]" data-name="Container">
      <Paragraph21 />
      <Paragraph22 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[27.888px] relative w-[90.758px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[116.188px] left-[46.2px] text-[77.459px] text-center text-white top-[-5.97px] translate-x-[-50%] whitespace-pre">Contactar</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[18.59px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[18.75%_12.5%_18.74%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3368 13.013">
            <path d={svgPaths.p39318d80} id="Vector" stroke="var(--stroke-0, #4278EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39422" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col h-[18.589px] items-start relative w-[18.59px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container111() {
  return (
    <div className="bg-white h-[48.319px] relative rounded-[309.835px] shrink-0 w-[48.318px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute flex h-[18.589px] items-center justify-center left-[-3.72px] top-[-3.72px] w-[18.59px]">
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
    <div className="bg-[#4278ec] content-stretch flex gap-[22.306px] h-[59.467px] items-center pl-[42.18px] pr-0 py-0 relative rounded-[309.835px] w-[209.136px]" data-name="Button">
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
    <div className="relative shrink-0 size-[18.59px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5897 18.5897">
        <g id="Icon">
          <path d={svgPaths.p17c57180} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[18.59px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5897 18.5897">
        <g id="Icon">
          <path d={svgPaths.p29e33c72} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[18.59px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5897 18.5897">
        <g id="Icon">
          <path d={svgPaths.p21273b00} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[18.59px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5897 18.5897">
        <g id="Icon">
          <path d={svgPaths.p25632a80} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[18.59px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5897 18.5897">
        <g id="Icon">
          <path d={svgPaths.p2344be00} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex gap-[3.716px] h-[18.592px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon19 />
      <Icon20 />
      <Icon21 />
      <Icon22 />
      <Icon23 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[55.77px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[77.459px] left-0 text-[#050505] text-[54.221px] top-[-3.28px] w-[213.012px] whitespace-pre-wrap">A Triónica forneceu equipamentos de alta qualidade que transformaram nosso laboratório.</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[37.178px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[77.459px] left-0 text-[#050505] text-[54.221px] top-[-3.28px] w-[170.409px] whitespace-pre-wrap">Excelente serviço e suporte técnico.</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[141.267px] relative shrink-0 w-[217.511px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14.864px] items-start relative size-full">
        <Container112 />
        <Paragraph24 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[19.523px] left-0 top-0 w-[217.511px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[81.332px] left-0 text-[#050505] text-[54.221px] top-[-2.69px] whitespace-pre">Dr. João Silva</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[15.337px] left-0 top-[19.52px] w-[217.511px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[63.904px] left-0 text-[#667085] text-[42.602px] top-[-7.15px] tracking-[1.0651px] uppercase whitespace-pre">Universidade de Maputo</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[34.86px] relative shrink-0 w-[217.511px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph26 />
        <Paragraph27 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[295.577px] items-start justify-between left-[130.13px] pb-0 pl-[29.738px] pr-0 pt-[29.737px] rounded-[232.376px] shadow-[0px_38.729px_58.094px_-11.619px_rgba(0,0,0,0.1),0px_15.492px_23.238px_-15.492px_rgba(0,0,0,0.1)] top-[337.4px] w-[276.987px]" data-name="Container">
      <Container113 />
      <Container114 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[18.59px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5897 18.5897">
        <g id="Icon">
          <path d={svgPaths.p2c933700} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[18.59px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5896 18.5896">
        <g id="Icon">
          <path d={svgPaths.p3e011100} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[18.59px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5897 18.5897">
        <g id="Icon">
          <path d={svgPaths.p248f2e00} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[18.59px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5896 18.5896">
        <g id="Icon">
          <path d={svgPaths.p35fd3500} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[18.59px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5897 18.5897">
        <g id="Icon">
          <path d={svgPaths.p27eadb00} fill="var(--fill-0, #FFC046)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex gap-[3.716px] h-[18.589px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon24 />
      <Icon25 />
      <Icon26 />
      <Icon27 />
      <Icon28 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[92.948px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[77.459px] left-0 text-[#050505] text-[54.221px] top-[-3.28px] w-[216.885px] whitespace-pre-wrap">Trabalhamos com a Triónica há mais de 5 anos. A equipa deles é sempre disponível e resolve qualquer problema rapidamente. Confiamos plenamente nos seus serviços.</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[126.402px] relative shrink-0 w-[217.511px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14.864px] items-start relative size-full">
        <Container116 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[19.523px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[81.332px] left-0 text-[#050505] text-[54.221px] top-[-2.69px] whitespace-pre">Eng. Maria Couto</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[15.337px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[63.904px] left-0 text-[#667085] text-[42.602px] top-[-7.16px] tracking-[1.0651px] uppercase whitespace-pre">EDM - Electricidade de Moçambique</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[34.86px] relative shrink-0 w-[217.511px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph29 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[295.577px] items-start justify-between left-[931.37px] pb-0 pl-[29.738px] pr-0 pt-[29.737px] rounded-[232.376px] shadow-[0px_38.729px_58.094px_-11.619px_rgba(0,0,0,0.1),0px_15.492px_23.238px_-15.492px_rgba(0,0,0,0.1)] top-[74.36px] w-[276.987px]" data-name="Container">
      <Container117 />
      <Container118 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[28.38px] left-[39.01px] top-0 w-[32.169px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[118.251px] left-0 text-[#050505] text-[78.834px] top-[-9.84px] whitespace-pre">5.0</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[28.379px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.17%_12.82%_12.62%_12.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1001 20.2075">
          <path d={svgPaths.p19431900} fill="var(--fill-0, #FFC046)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28.38px] items-start left-0 top-0 w-[28.379px]" data-name="Container">
      <Icon29 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute h-[28.38px] left-[1035.47px] top-[589.05px] w-[71.188px]" data-name="Container">
      <Paragraph31 />
      <Container120 />
    </div>
  );
}

function Container122() {
  return <div className="absolute bg-white h-[641.358px] left-[83.38px] rounded-[154.918px] top-[23885.12px] w-[1282.716px]" data-name="Container" />;
}

function Paragraph32() {
  return (
    <div className="absolute h-[200.761px] left-[350.21px] top-[24194.64px] w-[747.165px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[836.555px] left-[370.52px] text-[697.129px] text-[rgba(35,84,162,0.89)] text-center top-[17.91px] tracking-[-34.8565px] translate-x-[-50%] uppercase whitespace-pre">Triónica</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[18.628px] left-0 top-[0.72px] w-[42.707px]" data-name="Button">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[77.614px] left-[23.65px] text-[#4278ec] text-[69.713px] text-center top-[6.56px] tracking-[-0.6971px] translate-x-[-50%] whitespace-pre">Início</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[20.077px] relative shrink-0 w-[83.778px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[83.656px] left-[43.31px] text-[#667085] text-[69.713px] text-center top-[3.28px] translate-x-[-50%] whitespace-pre">Sobre Nós</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20.077px] items-start justify-center left-[109.06px] top-0 w-[83.778px]" data-name="Button">
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[20.077px] relative shrink-0 w-[75.255px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[83.656px] left-[40.8px] text-[#667085] text-[69.713px] text-center top-[3.28px] translate-x-[-50%] whitespace-pre">Soluções</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20.077px] items-start justify-center left-[259.2px] top-0 w-[75.255px]" data-name="Button">
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[20.077px] relative shrink-0 w-[69.996px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[83.656px] left-[33.68px] text-[#667085] text-[69.713px] text-center top-[3.28px] translate-x-[-50%] whitespace-pre">Portfolio</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20.077px] items-start justify-center left-[400.8px] top-0 w-[69.996px]" data-name="Button">
      <Paragraph35 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[6.878px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0.01%_-0.01%_-0.03%_-0.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.87835 6.87835">
          <path d={svgPaths.p286cbbf0} fill="var(--fill-0, #050505)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[72.44px] size-[6.878px] top-[6.6px]" data-name="Container">
      <Icon30 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-[6.878px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0.01%_0_-0.03%_-0.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.87833 6.87833">
          <path d={svgPaths.p30077d00} fill="var(--fill-0, #050505)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[222.56px] size-[6.878px] top-[6.6px]" data-name="Container">
      <Icon31 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[6.878px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0.01%_-0.04%_-0.03%_0.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.87833 6.87833">
          <path d={svgPaths.p30077d00} fill="var(--fill-0, #050505)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[364.19px] size-[6.878px] top-[6.6px]" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute h-[20.077px] left-[169.22px] top-[24113.78px] w-[470.797px]" data-name="Container">
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

function Icon33() {
  return (
    <div className="h-[0.924px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[49.55%_0_50.44%_0]" data-name="Vector">
        <div className="absolute inset-[-0.46px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1078.22 0.926995">
            <path d={svgPaths.p230cfd00} id="Vector" stroke="var(--stroke-0, #EDEDED)" strokeWidth="0.926902" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex flex-col h-[0.924px] items-start left-0 top-[-0.92px] w-[1078.22px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[19.523px] left-[418.72px] top-[12.08px] w-[375.168px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[81.332px] left-0 not-italic text-[54.221px] text-black top-[-5.97px] whitespace-pre">© 2025 Triónica Moçambique. Todos os direitos reservados.</p>
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[44.612px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.05%_1.04%_1.04%_1.05%]" data-name="Vector">
        <div className="absolute inset-[-1.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.6116 44.6116">
            <path d={svgPaths.pa841400} id="Vector" stroke="var(--stroke-0, #1877F2)" strokeOpacity="0.3" strokeWidth="0.929407" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[25.3%] left-[24.98%] right-[25.02%] top-1/4" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3058 22.1703">
          <path d={svgPaths.p3ec0f380} fill="var(--fill-0, #1877F2)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44.61px] items-start left-0 top-0 w-[44.612px]" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[44.612px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.05%_1.04%_1.04%_1.04%]" data-name="Vector">
        <div className="absolute inset-[-1.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.6115 44.6115">
            <path d={svgPaths.p220d42c0} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.3" strokeWidth="0.929407" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[31.25%_31.25%_31.25%_27.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5881 16.7293">
          <path d={svgPaths.p183e6f80} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44.61px] items-start left-[63.2px] top-0 w-[44.612px]" data-name="Container">
      <Icon35 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[44.612px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.05%_1.04%_1.04%_1.04%]" data-name="Vector">
        <div className="absolute inset-[-1.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.6115 44.6115">
            <path d={svgPaths.p220d42c0} id="Vector" stroke="var(--stroke-0, #E4405F)" strokeOpacity="0.3" strokeWidth="0.929407" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44.61px] items-start left-0 top-0 w-[44.612px]" data-name="Container">
      <Icon36 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[22.306px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_-0.01%_0_0.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2965 22.3058">
          <path d={svgPaths.p1f923130} fill="var(--fill-0, #E4405F)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.33%_24.22%_24.3%_24.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4599 11.4602">
          <path d={svgPaths.pa875380} fill="var(--fill-0, #E4405F)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.32%_17.18%_70.69%_70.82%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.67521 2.67524">
          <path d={svgPaths.p1a28a00} fill="var(--fill-0, #E4405F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.306px] items-start left-[11.15px] overflow-clip top-[11.15px] w-[22.297px]" data-name="Container">
      <Icon37 />
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute h-[44.61px] left-[126.41px] top-0 w-[44.612px]" data-name="Container">
      <Container130 />
      <Container131 />
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute h-[44.61px] left-0 top-0 w-[171.023px]" data-name="Container">
      <Container128 />
      <Container129 />
      <Container132 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="h-[44.612px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.05%_1.04%_1.04%_1.04%]" data-name="Vector">
        <div className="absolute inset-[-1.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.6115 44.6115">
            <path d={svgPaths.p220d42c0} id="Vector" stroke="var(--stroke-0, #0A66C2)" strokeOpacity="0.3" strokeWidth="0.929407" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44.61px] items-start left-0 top-0 w-[44.612px]" data-name="Container">
      <Icon38 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="h-[22.306px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3058 22.3058">
        <path d={svgPaths.pc1c6a00} fill="var(--fill-0, #0A66C2)" id="Vector" />
      </svg>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11.15px] overflow-clip size-[22.306px] top-[11.15px]" data-name="Container">
      <Icon39 />
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute h-[44.61px] left-[189.6px] top-0 w-[44.612px]" data-name="Container">
      <Container134 />
      <Container135 />
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute h-[44.61px] left-0 top-0 w-[233.3px]" data-name="Container">
      <Container133 />
      <Container136 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute h-[44.61px] left-[142.15px] top-[22.31px] w-[793.903px]" data-name="Container">
      <Paragraph36 />
      <Container137 />
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute h-[66.915px] left-[185.61px] top-[24430.74px] w-[1078.22px]" data-name="Container">
      <Container127 />
      <Container138 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[18.589px] relative shrink-0 w-[153.543px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[77.459px] left-0 text-[#6b7280] text-[77.459px] top-[8.66px] whitespace-pre">Digite o seu email</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="bg-[#f5f5f5] h-[66.918px] relative rounded-[77.459px] shrink-0 w-[301.151px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-0 pl-[29.738px] pr-0 pt-[22.305px] relative size-full">
        <Paragraph37 />
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="h-[22.306px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[37.51%_24.99%_37.49%_25.01%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0117 7.43525">
            <path d={svgPaths.p8f4c280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.85881" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[22.3px] size-[22.306px] top-[22.29px]" data-name="Container">
      <Icon40 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#4278ec] h-[66.918px] relative rounded-[77.459px] w-[66.917px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container141 />
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute content-stretch flex gap-[7.432px] h-[66.918px] items-center left-[888.31px] top-[24090.54px] w-[375.501px]" data-name="Container">
      <Container140 />
      <div className="flex h-[66.917px] items-center justify-center relative shrink-0 w-[66.918px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="content-stretch flex h-[35.693px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[148.721px] not-italic relative shrink-0 text-[#050505] text-[123.934px] whitespace-pre">Subscreva a</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="content-stretch flex h-[35.691px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[148.721px] not-italic relative shrink-0 text-[#050505] text-[123.934px] whitespace-pre">nossa newsletter</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[0.001px] h-[71.383px] items-start left-[888.31px] top-[23982.71px] w-[241.666px]" data-name="Container">
      <Paragraph38 />
      <Paragraph39 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[59.487px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[247.868px] left-0 text-[#050505] text-[247.868px] top-[27.17px] whitespace-pre">Construindo o Sucesso</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[59.484px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[247.868px] left-0 text-[#050505] text-[247.868px] top-[27.16px] whitespace-pre">de Moçambique</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[0.001px] h-[118.971px] items-start left-[132.63px] top-[23952.04px] w-[667.38px]" data-name="Container">
      <Paragraph40 />
      <Paragraph41 />
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute left-[-55.49px] size-0 top-[-23111.77px]" data-name="Container">
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
    <div className="h-[1442.591px] relative shrink-0 w-full" data-name="Container">
      <Container106 />
      <Container107 />
      <Container108 />
      <Container109 />
      <div className="absolute flex h-[59.467px] items-center justify-center left-[351.36px] top-[368.1px] w-[209.136px]">
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
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[1495.448px] items-start left-0 overflow-clip px-[55.487px] py-0 top-[23111.78px] w-[1449.459px]" data-name="CTAFooterSection">
      <Container146 />
    </div>
  );
}

function TrionicaCopy() {
  return (
    <div className="absolute bg-white h-[24604.787px] left-[4647.52px] top-[704.88px] w-[1448.479px]" data-name="Trionica (Copy)">
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
    <div className="absolute h-[387.294px] left-[92.96px] top-[178.16px] w-[941.124px]" data-name="Paragraph">
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
    <div className="absolute h-[92.951px] left-0 top-0 w-[89.633px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTrionicaLogo} />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[62.904px] items-start left-[-1114.48px] top-[3.32px] w-[197.095px]" data-name="Paragraph7">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[62.904px] relative shrink-0 text-[48.926px] text-center text-white whitespace-pre">Spark AI</p>
    </div>
  );
}

function ImageTrionica() {
  return (
    <div className="absolute h-[92.951px] left-[-33.1px] overflow-clip top-[-8.65px] w-[89.633px]" data-name="ImageTrionica2">
      <Image />
      <Paragraph7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[28.966px] left-[63.67px] top-[12.27px] w-[87.662px]" data-name="Frame3">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[57.793px] left-[88.05px] text-[#050505] text-[48.161px] text-center top-[2.32px] tracking-[-0.9632px] translate-x-[-50%] whitespace-pre">Triónica</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute h-[53.509px] left-[56.33px] top-[24.14px] w-[151.331px]" data-name="Container">
      <ImageTrionica />
      <Frame2 />
    </div>
  );
}

function ManufactureLandingPage1() {
  return (
    <div className="h-[40.236px] relative shrink-0 w-full" data-name="ManufactureLandingPage">
      <p className="absolute capitalize font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20.118px] left-0 text-[#050505] text-[16.094px] top-0 w-[259.519px] whitespace-pre-wrap">Ensino, Saúde, Águas, Ambiente e Minas.</p>
    </div>
  );
}

function ManufactureLandingPage2() {
  return (
    <div className="h-[40.236px] relative shrink-0 w-full" data-name="ManufactureLandingPage">
      <p className="absolute capitalize font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20.118px] left-0 text-[#050505] text-[16.094px] top-0 w-[237.39px] whitespace-pre-wrap">Soluções de referência desde 2010.</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute content-stretch flex flex-col h-[105.618px] items-start left-[1239.26px] opacity-0 top-[207.21px] w-[278.631px]" data-name="Container">
      <ManufactureLandingPage1 />
      <ManufactureLandingPage2 />
    </div>
  );
}

function Container149() {
  return <div className="absolute bg-[#171717] h-[204.195px] left-0 top-[1370.02px] w-[1520.904px]" data-name="Container" />;
}

function Vector1() {
  return (
    <div className="absolute contents inset-[18%_89.06%_18%_0]" data-name="Vector">
      <div className="absolute inset-[31.27%_97.72%_41.17%_0.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6871 27.7236">
          <path d={svgPaths.p12ee200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_96.86%_41.17%_2.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53928 27.7236">
          <path d={svgPaths.p21790900} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.28%_94.88%_41.17%_3.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9249 4.58353">
          <path d={svgPaths.p177df000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_94.79%_48.25%_3.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1764 20.5962">
          <path d={svgPaths.p6145f00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_93.15%_41.17%_5.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.584 27.7236">
          <path d={svgPaths.p331aff00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_91.21%_41.17%_7.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1139 27.7236">
          <path d={svgPaths.p3cbba1e0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.27%_89.72%_41.17%_9.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5745 27.7236">
          <path d={svgPaths.p30a71770} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.15%_94.7%_47.09%_3.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4279 22.8952">
          <path d={svgPaths.p36fa5200} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18%_89.06%_25.44%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.818 56.8935">
          <path d={svgPaths.p1ac2100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.34%_89.28%_18%_0.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.895 62.0258">
          <path d={svgPaths.p18d0b040} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector6() {
  return (
    <div className="absolute contents inset-[13%_69.12%_13%_24.9%]" data-name="Vector_2">
      <div className="absolute inset-[13%_73.87%_13%_24.9%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6486 74.4358">
          <path d={svgPaths.p1caad2c0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.28%_72.41%_13.27%_26.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6486 73.8831">
          <path d={svgPaths.p2ed89080} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.42%_70.75%_17.41%_27.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8576 65.5595">
          <path d={svgPaths.p1b326500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.63%_69.12%_17.62%_29.49%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8575 65.1344">
          <path d={svgPaths.p1490a780} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector7() {
  return (
    <div className="absolute contents inset-[1%_47.29%_1%_44.85%]" data-name="Vector_3">
      <div className="absolute inset-[34.94%_50.01%_19.44%_46.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.7949 45.8939">
          <path d={svgPaths.p3b447f80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.49%_51.76%_65.25%_48.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.17374 18.3639">
          <path d={svgPaths.p78c8600} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.74%_51.76%_1%_48.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.17374 18.364">
          <path d={svgPaths.p2dfb7a80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.87%_53.12%_58.21%_46.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.1346 7.97496">
          <path d={svgPaths.p2d47270} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.72%_49.93%_18.47%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.01442 7.8577">
          <path d={svgPaths.p39b17f00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.69%_53.69%_41.19%_44.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7246 2.13168">
          <path d={svgPaths.p1e402b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[41.19%] left-1/2 right-[48.53%] top-[56.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7247 2.13168">
          <path d={svgPaths.p26877f80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.72%_53.12%_19.44%_46.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.02612 6.88782">
          <path d={svgPaths.p1a4e2b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.26%_50.04%_58.21%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69971 6.56805">
          <path d={svgPaths.peb644f0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.78%_52.71%_89.16%_46.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.23685 8.10708">
          <path d={svgPaths.p79bb780} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1%_51.85%_91.15%_47.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.48932 7.8998">
          <path d={svgPaths.p2d638310} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.16%_50.75%_90.05%_48.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0197 8.84624">
          <path d={svgPaths.p244a83f0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[4.24%_49.68%_85.38%_49.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2479 10.4343">
          <path d={svgPaths.p37d20a00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.74%_48.92%_79.68%_50.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.41111 9.6349">
          <path d={svgPaths.p16b63e80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.77%_48.34%_72.12%_50.94%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.14602 10.1678">
          <path d={svgPaths.p22799e00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32%_47.57%_60.96%_51.74%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.83572 7.07703">
          <path d={svgPaths.p2fdf9600} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.37%_47.42%_53.7%_51.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.96564 3.95415">
          <path d={svgPaths.p1623db00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.67%_47.29%_41.17%_52.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.23725 9.21937">
          <path d={svgPaths.p36ca8380} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[62.67%_47.32%_30.38%_52.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.51991 6.99173">
          <path d={svgPaths.p130c5100} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.34%_53.88%_67.79%_45.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00479 4.90532">
          <path d={svgPaths.pf001300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[85.59%_49.21%_9.53%_50.4%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00456 4.90539">
          <path d={svgPaths.p20d8c800} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.53%_50.04%_30.86%_46.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.064 10.6744">
          <path d={svgPaths.p221b0170} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.1%_53.69%_28.04%_45.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.78674 5.89171">
          <path d={svgPaths.p3af22430} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[82.5%_50.76%_10.91%_48.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.79455 6.63547">
          <path d={svgPaths.p26b86900} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[91.43%_50.52%_3.84%_49.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.15345 4.75572">
          <path d={svgPaths.p298c4300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.68%_48.8%_56.71%_50.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.1551 3.62348">
          <path d={svgPaths.pda16000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[51.66%] left-1/2 right-[49.43%] top-[43.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.26964 4.68932">
          <path d={svgPaths.p2bcf0470} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector8() {
  return (
    <div className="absolute contents inset-[16.5%_21.2%_16.5%_66.68%]" data-name="Vector_4">
      <div className="absolute inset-[30.48%_29.24%_61.01%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.87783 8.56504">
          <path d={svgPaths.p127ae500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_29.31%_70.93%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.93635 7.65652">
          <path d={svgPaths.p1b565a00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_28.83%_56.69%_69.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2475 26.3338">
          <path d={svgPaths.p3fd81e00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.26%_30.63%_32.33%_66.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.3974 34.6156">
          <path d={svgPaths.p129cf170} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.5%_31.92%_65.13%_67.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.42638 17.4724">
          <path d={svgPaths.p253b7cf2} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[64.27%_31.92%_16.5%_67.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.42638 19.3421">
          <path d={svgPaths.p4171c80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.33%_23.55%_28.59%_76.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.59809 4.10805">
          <path d={svgPaths.p17354b00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_23.29%_28.52%_76.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.72095 3.10729">
          <path d={svgPaths.pa811110} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.38%_23.04%_28.55%_76.77%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.44633 3.08767">
          <path d={svgPaths.pfa301b2} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.43%_22.88%_28.55%_77.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.4394 4.0488">
          <path d={svgPaths.p1cff2730} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_22.62%_28.53%_77.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.71487 3.10075">
          <path d={svgPaths.p1f47a300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.45%_22.35%_28.52%_77.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.41416 3.0415">
          <path d={svgPaths.p810b800} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_22.14%_28.6%_77.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.60946 3.03496">
          <path d={svgPaths.p14c7bc80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_21.89%_28.53%_77.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.71487 3.10075">
          <path d={svgPaths.p25f0400} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.39%_21.63%_28.59%_78.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.40004 3.0415">
          <path d={svgPaths.p6523d00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.43%_21.45%_28.55%_78.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.4394 4.0488">
          <path d={svgPaths.p36e6cb00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[74.25%_23.49%_25.27%_76.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.15432 0.480612">
          <path d={svgPaths.p1c6efb40} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.98%_29.24%_21.51%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.87783 8.56504">
          <path d={svgPaths.p25924580} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.95%_29.31%_31.44%_69.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.93635 7.65652">
          <path d={svgPaths.p16712680} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.62%_28.83%_17.2%_69.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2475 26.3337">
          <path d={svgPaths.p3a7b000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_28%_56.69%_71.3%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.86384 26.3337">
          <path d={svgPaths.p1960bec0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.51%_26.54%_56.01%_72.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6816 27.6438">
          <path d={svgPaths.p2628a000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_25.18%_56.69%_73.39%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.285 26.3271">
          <path d={svgPaths.p13f8cf00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_23.86%_66.97%_75.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3496 11.6394">
          <path d={svgPaths.p209914f0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.12%_23.35%_56.7%_74.92%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0863 26.3337">
          <path d={svgPaths.p396c79f0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.5%_21.2%_56.02%_76.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.4698 27.6438">
          <path d={svgPaths.p1109d900} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.45%_21.59%_60.97%_77.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5658 17.683">
          <path d={svgPaths.pe867d00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[61.38%_27.41%_23.47%_71.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5526 15.2341">
          <path d={svgPaths.p2d7ea080} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.63%_26.84%_17.19%_71.12%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.1219 26.3338">
          <path d={svgPaths.p33a7a900} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.62%_24.96%_17.2%_73.31%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0863 26.3337">
          <path d={svgPaths.p1ea55800} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.95%_25.47%_27.48%_73.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3496 11.6394">
          <path d={svgPaths.p837a8f0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Vector9() {
  return (
    <div className="absolute contents inset-[0_0_0_92.76%]" data-name="Vector_5">
      <div className="absolute inset-[69.66%_6.8%_7.01%_92.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.56297 23.4741">
          <path d={svgPaths.p1cbaa280} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.51%_6.25%_7.09%_93.28%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.05547 23.5293">
          <path d={svgPaths.pcaa24f0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.15%_5.72%_6.89%_93.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.74431 24.0975">
          <path d={svgPaths.p35c51000} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.19%_4.93%_7.26%_94.39%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.67075 23.6945">
          <path d={svgPaths.p10095c80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.3%_4.63%_7.38%_95.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.36381 23.4658">
          <path d={svgPaths.p122cc580} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.21%_4.08%_7.14%_95.48%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.6835 23.7894">
          <path d={svgPaths.p3557c3e0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.94%_3.29%_7.5%_96.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.67075 23.6947">
          <path d={svgPaths.p200ce500} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.01%_2.59%_7.66%_97.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8886 23.4658">
          <path d={svgPaths.p17e9f880} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.6%_2.1%_7.57%_97.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54281 23.9632">
          <path d={svgPaths.p20d8ec00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.86%_1.55%_7.81%_98.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.68347 23.4741">
          <path d={svgPaths.p1b9e7d80} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.42%_0.98%_7.62%_98.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.74438 24.0974">
          <path d={svgPaths.p2c4a2cf0} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.69%_0.49%_7.98%_99.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8886 23.4658">
          <path d={svgPaths.p92b1880} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.28%_0_7.77%_99.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.63328 24.0975">
          <path d={svgPaths.p3ab55300} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.41%_1.17%_38.36%_93.93%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.546 51.5284">
          <path d={svgPaths.p3cd36c00} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.55%_2.47%_52.89%_95.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5329 29.7344">
          <path clipRule="evenodd" d={svgPaths.p1a27e700} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_3.22%_90.36%_95.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1294 9.69855">
          <path clipRule="evenodd" d={svgPaths.p3d4c4600} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.87%_2.58%_87.58%_96.96%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.82401 5.58256">
          <path clipRule="evenodd" d={svgPaths.p1bb1aa00} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.87%_4.2%_87.58%_95.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.82401 5.58256">
          <path clipRule="evenodd" d={svgPaths.p1bb1aa00} fill="var(--fill-0, #616161)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_7.09%_0_92.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.01596 0.686015">
          <path d={svgPaths.p1ae81780} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_0.31%_0_93.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.5752 0.686015">
          <path d={svgPaths.p284c64f8} fill="var(--fill-0, #616161)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[99.32%_0.07%_0_99.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.01596 0.686015">
          <path d={svgPaths.p1ae81780} fill="var(--fill-0, #616161)" id="Vector" />
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

function Icon41() {
  return (
    <div className="h-[100.589px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[100.589px] items-start left-[121.7px] top-[1421.32px] w-[1278.484px]" data-name="Frame12">
      <Icon41 />
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
    <div className="absolute h-[116.188px] left-[336.95px] top-[134.54px] w-[689.383px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[131.68px] leading-[46.475px] left-[85.2px] text-[#050505] text-[38.729px] top-[-65.84px] w-[577.068px] whitespace-pre-wrap">A Triónica impulsiona soluções tecnológicas que apoiam o desenvolvimento científico e institucional do país</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute bg-[#eee] h-[336.973px] left-0 top-[570.34px] w-[1520.904px]" data-name="Container">
      <Paragraph43 />
    </div>
  );
}

function Hero1() {
  return (
    <div className="h-[50.294px] relative shrink-0 w-full" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBciLogo} />
    </div>
  );
}

function Container151() {
  return (
    <motion.div 
      className="absolute content-stretch flex flex-col items-start left-[120.71px] overflow-clip rounded-[16875994px] size-[50.294px] top-[706.13px]" 
      data-name="Container"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      <Hero1 />
    </motion.div>
  );
}

function Hero2() {
  return (
    <div className="h-[50.294px] relative shrink-0 w-full" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
    </div>
  );
}

function Container152() {
  return (
    <motion.div 
      className="absolute bg-white content-stretch flex flex-col items-start left-[156.91px] overflow-clip rounded-[16875994px] size-[50.294px] top-[706.13px]" 
      data-name="Container"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <Hero2 />
    </motion.div>
  );
}

function Hero3() {
  return (
    <div className="h-[50.294px] relative shrink-0 w-full" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHcbLogo} />
    </div>
  );
}

function Container153() {
  return (
    <motion.div 
      className="absolute bg-white content-stretch flex flex-col items-start left-[193.14px] overflow-clip rounded-[16875994px] size-[50.294px] top-[706.13px]" 
      data-name="Container"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <Hero3 />
    </motion.div>
  );
}

function CounterDisplay() {
  return (
    <motion.div 
      className="absolute content-stretch flex h-[24.644px] items-start left-[256.51px] top-[709.15px] w-[39.929px]" 
      data-name="Counter"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#171717] text-[20.118px] whitespace-pre">84+</p>
    </motion.div>
  );
}

function Hero4() {
  return (
    <div className="h-[24.141px] relative shrink-0 w-full" data-name="Hero">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[16.094px] top-[0.5px] whitespace-pre">parceiros de</p>
    </div>
  );
}

function Hero5() {
  return (
    <div className="h-[24.141px] relative shrink-0 w-full" data-name="Hero">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[16.094px] top-[0.5px] whitespace-pre">confiança</p>
    </div>
  );
}

function Container154() {
  return (
    <motion.div 
      className="absolute content-stretch flex flex-col h-[48.283px] items-start left-[258.53px] top-[733.29px] w-[101.335px]" 
      data-name="Container"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    >
      <Hero4 />
      <Hero5 />
    </motion.div>
  );
}

function Counter1() {
  return (
    <div className="absolute h-[48.786px] left-[1304.63px] opacity-0 top-[639.74px] w-[52.793px]" data-name="Counter">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-0 not-italic text-[#171717] text-[40.236px] top-0 w-[53.312px] whitespace-pre-wrap">0+</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute h-[24.141px] left-[1306.65px] opacity-0 top-[687.02px] w-[160.981px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[16.094px] top-[0.5px] whitespace-pre">Anos de Experiência</p>
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
    <div className="absolute h-[48.786px] left-[1304.63px] opacity-0 top-[748.38px] w-[59.324px]" data-name="Counter">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-0 not-italic text-[#171717] text-[40.236px] top-0 w-[59.347px] whitespace-pre-wrap">0%</p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[24.141px] left-[1306.65px] opacity-0 top-[795.66px] w-[158.294px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[16.094px] top-[0.5px] whitespace-pre">Cobertura Nacional</p>
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
      <CounterDisplay />
      <Container154 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function ImageMicroscope1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotate: -5, x: 100 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0, x: 0 } : { opacity: 0, scale: 0.8, rotate: -5, x: 100 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        scale: { duration: 1.2 },
        rotate: { duration: 1.4 },
        x: { duration: 1 }
      }}
      className="h-[1290.913px] relative shrink-0 w-[950.459px]" 
      data-name="Image (Microscope)"
    >
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageMicroscope} />
    </motion.div>
  );
}

function Group1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[991.98px] items-start left-[743.6px] overflow-clip top-[325.07px] w-[812.757px]" data-name="Group5">
      <ImageMicroscope1 />
    </div>
  );
}

function Counter3() {
  return (
    <motion.div 
      className="absolute content-stretch flex h-[93.919px] items-start left-[1111.53px] top-[178.16px] w-[136.249px]" 
      data-name="Counter"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#171717] text-[77.459px] whitespace-pre">15+</p>
    </motion.div>
  );
}

function Paragraph46() {
  return (
    <motion.div 
      className="absolute h-[46.475px] left-[1115.4px] top-[269.17px] w-[309.911px]" 
      data-name="Paragraph"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[30.984px] top-[0.97px] whitespace-pre">Anos de Experiência</p>
    </motion.div>
  );
}

function Icon42() {
  return (
    <div className="relative size-[29.047px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.047 29.047">
        <g id="Icon">
          <path d={svgPaths.p1e5f8300} id="Vector" stroke="var(--stroke-0, #4278EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.17853" />
        </g>
      </svg>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="bg-white content-stretch flex items-center p-[23.238px] relative rounded-[116.188px] shrink-0" data-name="Arrow">
      <div className="flex items-center justify-center relative shrink-0 size-[39.679px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[210deg] scale-y-[-100%]">
          <Icon42 />
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <motion.div 
      className="bg-[#4278ec] content-stretch flex gap-[34.856px] items-center pl-[8.714px] pr-[46.475px] py-[8.714px] relative rounded-[116.188px] w-[450.229px]" 
      data-name="Button"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
    >
      <Arrow1 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[43.571px] relative text-[29.047px] text-white whitespace-pre">{` Conheça-nos Melhor`}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Container155({ isOpen, index }: { isOpen: boolean; index: number }) {
  return (
    <motion.div 
      className="bg-[#667085] h-[6.838px] rounded-[225030384px] shrink-0 w-[76.694px]" 
      data-name="Container"
      animate={{
        rotate: isOpen ? (index === 0 ? 45 : index === 2 ? -45 : 0) : 0,
        y: isOpen ? (index === 0 ? 23.267 : index === 2 ? -23.267 : 0) : 0,
        opacity: isOpen && index === 1 ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  );
}

function Frame8({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <button 
      onClick={onClick}
      className="absolute content-stretch flex flex-col gap-[16.429px] items-center justify-center left-[1310px] pb-[0.027px] pt-0 px-0 size-[109.579px] top-[28px] cursor-pointer bg-transparent border-none z-50" 
      data-name="Frame2"
      aria-label="Toggle menu"
    >
      {[0, 1, 2].map((i) => (
        <Container155 key={i} isOpen={isOpen} index={i} />
      ))}
    </button>
  );
}

function MobileMenuOverlay({ isOpen, onClose, onNavigate }: { isOpen: boolean; onClose: () => void; onNavigate?: (page: string) => void }) {
  const [solucoesOpen, setSolucoesOpen] = useState(false);
  
  const handleNavigation = (page: string) => {
    onClose();
    onNavigate?.(page);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Use portal to render at document root level
  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 z-[9999]"
            onClick={onClose}
          />
          
          {/* Menu Panel - Full Screen */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-screen w-full bg-white shadow-2xl z-[10000] overflow-y-auto"
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Centered Content */}
            <div className="flex items-center justify-center min-h-screen px-8 py-20">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 w-full max-w-md">
                <button
                  onClick={() => handleNavigation('home')}
                  className="text-center font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[28px] text-[#2354a2] hover:text-[#FF6747] transition-colors"
                >
                  Início
                </button>
                
                <button
                  onClick={() => handleNavigation('sobre-nos')}
                  className="text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[24px] text-[#667085] hover:text-[#2354a2] transition-colors"
                >
                  Sobre Nós
                </button>
                
                {/* Soluções Dropdown */}
                <div>
                  <button
                    onClick={() => setSolucoesOpen(!solucoesOpen)}
                    className="w-full text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[24px] text-[#667085] hover:text-[#2354a2] transition-colors flex items-center justify-center gap-2"
                  >
                    Soluções
                    <ChevronDown className={`w-5 h-5 transition-transform ${solucoesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {solucoesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-3 mt-4 pl-4"
                    >
                      <button
                        onClick={() => handleNavigation('saude')}
                        className="text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] text-[#667085] hover:text-[#2354a2] transition-colors"
                      >
                        Saúde
                      </button>
                      <button
                        onClick={() => handleNavigation('aguas')}
                        className="text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] text-[#667085] hover:text-[#2354a2] transition-colors"
                      >
                        Águas
                      </button>
                      <button
                        onClick={() => handleNavigation('ambiente')}
                        className="text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] text-[#667085] hover:text-[#2354a2] transition-colors"
                      >
                        Ambiente
                      </button>
                      <button
                        onClick={() => handleNavigation('minas')}
                        className="text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] text-[#667085] hover:text-[#2354a2] transition-colors"
                      >
                        Minas
                      </button>
                      <button
                        onClick={() => handleNavigation('ensino')}
                        className="text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] text-[#667085] hover:text-[#2354a2] transition-colors"
                      >
                        Ensino
                      </button>
                    </motion.div>
                  )}
                </div>
                
                <button
                  onClick={() => handleNavigation('portfolio')}
                  className="text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[24px] text-[#667085] hover:text-[#2354a2] transition-colors"
                >
                  Portfólio
                </button>
                
                <button
                  onClick={() => handleNavigation('contacte-nos')}
                  className="text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[24px] text-[#667085] hover:text-[#2354a2] transition-colors"
                >
                  Contacto
                </button>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

function ManufactureLandingPage3({ isMenuOpen, onMenuToggle, onNavigate }: { isMenuOpen: boolean; onMenuToggle: () => void; onNavigate?: (page: string) => void }) {
  return (
    <div className="absolute bg-[#f5f5f5] h-[1350.908px] left-0 overflow-clip top-0 w-[1448.479px]" data-name="ManufactureLandingPage">
      <Paragraph42 />
      <div className="hidden"><Container147 /></div>
      <Container148 />
      <Hero6 />
      <Group1 />
      <Counter3 />
      <Paragraph46 />
      <div className="absolute flex items-center justify-center left-[183.47px] top-[1055.21px] w-[450.229px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] cursor-pointer" onClick={() => onNavigate?.('sobre-nos')}>
          <Button12 />
        </div>
      </div>
      {/* Frame8 burger menu removed - now using Navbar component's burger menu */}
    </div>
  );
}

function Counter4() {
  return (
    <motion.div 
      className="absolute content-stretch flex h-[93.919px] items-start left-0 top-0 w-[200.848px]" 
      data-name="Counter"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#171717] text-[77.459px] whitespace-pre">100%</p>
    </motion.div>
  );
}

function Paragraph47() {
  return (
    <motion.div 
      className="absolute h-[46.475px] left-[3.88px] top-[91.01px] w-[304.737px]" 
      data-name="Paragraph"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3f3f3f] text-[30.984px] top-[0.97px] whitespace-pre">Cobertura Nacional</p>
    </motion.div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[137.489px] left-[-37.43px] top-[69.71px] w-[308.61px]">
      <Counter4 />
      <Paragraph47 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[137.489px] left-[1141.21px] top-[255.61px] w-[313.784px]">
      <Frame10 />
    </div>
  );
}

export default function Frame11({ onNavigate, onMenuClose }: { onNavigate?: (page: string) => void; onMenuClose?: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // Trigger animation replay
    onMenuClose?.();
  };

  return (
    <div className="relative size-full">
      <ManufactureLandingPage3 isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} onNavigate={onNavigate} />
      <Frame12 />
      {/* MobileMenuOverlay removed - now using Navbar component's mobile menu */}
    </div>
  );
}