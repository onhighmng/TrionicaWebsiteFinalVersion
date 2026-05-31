import svgPaths from "./svg-lra9game7e";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#fdfdfd] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Endereço
      </p>
      <div className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[#d4d4d4] text-[24px] w-[min-content]">
        <p className="mb-0">Av. Julius Nyerere, nº 3680,</p>
        <p>Maputo, Moçambique</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#fdfdfd] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        E-mail
      </p>
      <p className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[#d4d4d4] text-[24px] w-[min-content]">info@trionica.co.mz</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#fdfdfd] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Telefone
      </p>
      <p className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[#d4d4d4] text-[24px] w-[min-content]">(+258) 84/86 69 74 444</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#fdfdfd] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Horário
      </p>
      <div className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[#d4d4d4] text-[24px] w-[min-content]">
        <p className="mb-0">Segunda - Sexta</p>
        <p className="mb-0">08:00 - 17:00</p>
        <p className="mb-0 mt-2">Sábado</p>
        <p>09:00 - 13:00</p>
      </div>
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="facebook">
          <rect fill="var(--fill-0, #EE701F)" height="42" rx="12" width="42" />
          <path d={svgPaths.p21edbe00} fill="var(--fill-0, #FDFDFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="youtube">
          <path d={svgPaths.p1ab73e00} fill="var(--fill-0, #FDFDFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="X">
          <path d={svgPaths.p2df420a0} fill="var(--fill-0, #FDFDFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="instagram">
          <path d={svgPaths.p14feed00} fill="var(--fill-0, #FDFDFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Social Media">
      <Facebook />
      <Youtube />
      <X />
      <Instagram />
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-[#0046a2] content-stretch flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] items-start p-[20px] md:p-[28px] lg:p-[32px] relative rounded-[24px] md:rounded-[32px] lg:rounded-[40px] shrink-0 w-full md:w-[350px] lg:w-[408px]" data-name="Contact">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <SocialMedia />
    </div>
  );
}

function Name() {
  return (
    <div className="bg-[#f3f3f3] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[112px] items-center p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#242424] text-[16px] text-nowrap">Rometheme STD</p>
        </div>
      </div>
    </div>
  );
}

function EMail() {
  return (
    <div className="basis-0 bg-[#e2e2e2] grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="E-mail">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[112px] items-center p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#575757] text-[16px] text-nowrap">hello@domainsite.com</p>
        </div>
      </div>
    </div>
  );
}

function PhoneNumber() {
  return (
    <div className="basis-0 bg-[#f3f3f3] grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Phone Number">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[112px] items-center p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d4d4d4] text-[16px] text-nowrap">Phone Number</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <EMail />
      <PhoneNumber />
    </div>
  );
}

function Subject() {
  return (
    <div className="bg-[#f3f3f3] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Subject">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[112px] items-center p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d4d4d4] text-[16px] text-nowrap">Subject</p>
        </div>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="bg-[#f3f3f3] h-[116px] relative rounded-[12px] shrink-0 w-full" data-name="Message">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[112px] items-start p-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#d4d4d4] text-[16px] text-nowrap">Message</p>
        </div>
      </div>
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
    <div className="bg-[#0046a2] content-stretch flex gap-[16px] items-center justify-center pl-[20px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#fdfdfd] text-[18px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Enviar Mensagem
      </p>
      <Icon />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form">
      <Name />
      <Frame />
      <Subject />
      <Message />
      <Button />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] md:gap-[20px] items-start relative shrink-0 w-full md:w-[600px] lg:w-[714px]" data-name="Form">
      <p className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#d4d4d4] text-[28px] md:text-[38px] lg:text-[48px]">Engenharia, Tecnologia e Inovação ao Serviço de Moçambique</p>
      <p className="font-['Public_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#a3a3a3] text-[14px] md:text-[16px]">Entre em contacto connosco para explorar soluções tecnológicas personalizadas para as necessidades da sua instituição.</p>
      <Form />
    </div>
  );
}

function GetInTouch() {
  return (
    <div className="relative w-full flex flex-col md:flex-row gap-[30px] md:gap-[50px] lg:gap-[78px] items-start" data-name="Get In Touch">
      <Contact />
      <Form1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:h-[546px]">
      <GetInTouch />
    </div>
  );
}

function Group() {
  return (
    <div className="relative w-full">
      <Frame1 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}