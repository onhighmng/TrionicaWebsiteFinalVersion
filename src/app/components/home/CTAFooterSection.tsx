import React from 'react';
import svgPaths from '../../imports/svg-a0w0pmyyr1';

interface CTAFooterSectionProps {
  onNavigate?: (page: string) => void;
}

export function CTAFooterSection({ onNavigate }: CTAFooterSectionProps) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <>
      {/* Responsive flow-based layout (used at all breakpoints) */}
      <section className="relative bg-[#e2e2e2] py-12 md:py-16 lg:py-20 w-full overflow-hidden" data-navbar-section="light">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Top left text */}
          <div className="font-['Plus_Jakarta_Sans'] font-medium leading-[1.7] text-[#565656] text-sm md:text-base mb-8 md:mb-12 text-center md:text-left">
            <p className="mb-0">Fornecemos soluções</p>
            <p>completas para o seu sector.</p>
          </div>

          {/* Center heading */}
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="capitalize font-['Plus_Jakarta_Sans'] font-bold text-[32px] md:text-[48px] leading-tight md:leading-[72px] text-[#050505] tracking-tight md:tracking-[-2.56px]">
              <p className="mb-0">Pronto Para Desenvolver</p>
              <p>o Seu Próximo Projecto?</p>
            </h2>
          </div>

          {/* Center subtext */}
          <div className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] text-[#565656] text-base md:text-[18px] text-center mb-8 md:mb-12 px-4">
            <p className="mb-0">A nossa equipa está preparada para identificar e implementar</p>
            <p>a solução mais adequada às necessidades da sua instituição.</p>
          </div>

          {/* Center button */}
          <div className="flex items-center justify-center mb-12 md:mb-16">
            <button 
              onClick={() => handleNavigation('contacte-nos')}
              className="bg-[#4278ec] hover:bg-[#3562c9] transition-all duration-300 flex gap-4 md:gap-[24px] items-center pl-[6px] pr-6 md:pr-[32px] py-[6px] rounded-[80px] w-[200px] md:w-[225px]"
            >
              <div className="bg-white flex items-center p-3 md:p-[16px] rounded-[80px] shrink-0">
                <div className="flex items-center justify-center shrink-0">
                  <div className="relative size-4 md:size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p18e73b00} stroke="#4278EC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] font-medium leading-[30px] text-base md:text-[20px] text-nowrap text-white">Contactar-nos</p>
            </button>
          </div>

          {/* Footer Group */}
          <div className="bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-12">
            {/* Main heading */}
            <div className="font-['Plus_Jakarta_Sans'] font-medium text-[32px] md:text-[48px] leading-tight text-[#050505] text-center md:text-left mb-8 md:mb-12">
              <p className="mb-0">Triónica — Tecnologia e Soluções</p>
              <p>para o Desenvolvimento de Moçambique</p>
            </div>

            {/* Large Trionica text */}
            <p className="font-['Plus_Jakarta_Sans'] font-bold text-[50px] sm:text-[70px] md:text-[120px] leading-[1.2] text-[rgba(35,84,162,0.89)] text-center uppercase mb-8 md:mb-12">
              Triónica
            </p>

            {/* Navigation links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-[32px] items-center mb-8 md:mb-12">
              <button 
                onClick={() => handleNavigation('home')}
                className="font-['Plus_Jakarta_Sans'] font-bold text-base md:text-[18px] text-[#4278ec] tracking-tight md:tracking-[-0.18px]"
              >
                Início
              </button>
              <div className="size-[7.4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                  <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
                </svg>
              </div>
              <button 
                onClick={() => handleNavigation('sobre-nos')}
                className="capitalize font-['Plus_Jakarta_Sans'] font-medium text-base md:text-[18px] text-[#667085] hover:text-[#4278ec] transition-colors"
              >
                Sobre Nós
              </button>
              <div className="size-[7.4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                  <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
                </svg>
              </div>
              <button 
                onClick={() => handleNavigation('portfolio')}
                className="capitalize font-['Plus_Jakarta_Sans'] font-medium text-base md:text-[18px] text-[#667085] hover:text-[#4278ec] transition-colors"
              >
                Soluções
              </button>
              <div className="size-[7.4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                  <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
                </svg>
              </div>
              <button 
                onClick={() => handleNavigation('portfolio')}
                className="capitalize font-['Plus_Jakarta_Sans'] font-medium text-base md:text-[18px] text-[#667085] hover:text-[#4278ec] transition-colors"
              >
                Portfolio
              </button>
            </div>

            {/* Bottom section with line, social icons, and copyright */}
            <div className="flex flex-col gap-6 md:gap-[24px] items-center">
              <div className="h-0 w-full">
                <svg className="block w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1160 1.0001">
                  <line stroke="#EDEDED" x1="4.37114e-08" x2="1160" y1="0.5" y2="0.500101" />
                </svg>
              </div>
              
              {/* Social and copyright container */}
              <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-6">
                {/* Social icons row */}
                <div className="flex gap-4 md:gap-[20px] items-center">
                  {/* Facebook */}
                  <div className="size-10 md:size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="23.5" stroke="#1877F2" strokeOpacity="0.3" />
                      <path d={svgPaths.p2b5c400} fill="#1877F2" />
                    </svg>
                  </div>
                  
                  {/* X (formerly Twitter) */}
                  <div className="size-10 md:size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="23.5" stroke="#000000" strokeOpacity="0.3" />
                      <path d="M 28.9 15 L 32 15 L 24.5 23.8 L 33 33 L 28.3 33 L 22.5 26.1 L 16 33 L 13 33 L 20.9 23.7 L 13 15 L 17.8 15 L 23.2 21.4 L 28.9 15 Z M 27.8 31.2 L 29.4 31.2 L 18.3 16.7 L 16.6 16.7 L 27.8 31.2 Z" fill="#000000" />
                    </svg>
                  </div>
                  
                  {/* Instagram */}
                  <div className="relative size-10 md:size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="23.5" stroke="#E4405F" strokeOpacity="0.3" />
                    </svg>
                    <div className="absolute left-[12px] overflow-clip size-[20px] md:size-[24px] top-[10px] md:top-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9859 23.9953">
                        <path d={svgPaths.p2029900} fill="#E4405F" />
                        <path d={svgPaths.p90dcd40} fill="#E4405F" />
                        <path d={svgPaths.p110e5500} fill="#E4405F" />
                      </svg>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="relative size-10 md:size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="23.5" stroke="#0A66C2" strokeOpacity="0.3" />
                    </svg>
                    <div className="absolute left-[10px] md:left-[12px] overflow-clip size-[20px] md:size-[24px] top-[10px] md:top-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p2ccee40} fill="#0A66C2" />
                      </svg>
                    </div>
                  </div>
                </div>

                <p className="font-['Inter'] font-medium text-xs md:text-[14px] text-black text-center md:text-left">
                  © 2025 Triónica Moçambique. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy desktop absolute-positioned layout — disabled (caused overlapping
          sections). The responsive flow layout above is now used on all screens. */}
      <section className="hidden" aria-hidden="true" data-navbar-section="light">
        {/* Decorative circles - right side */}
        <div className="absolute bottom-[338px] contents right-[-181px]">
          <div className="absolute border border-[#545b5b] border-dashed bottom-[943px] opacity-20 right-[424px] rounded-[1000px] size-[603px]" />
          <div className="absolute border border-[#545b5b] border-dashed bottom-[751px] opacity-20 right-[232px] rounded-[1000px] size-[987px]" />
          <div className="absolute border border-[#545b5b] border-dashed bottom-[550px] opacity-20 right-[31px] rounded-[1000px] size-[1389px]" />
          <div className="absolute border border-[#545b5b] border-dashed bottom-[338px] opacity-20 right-[-181px] rounded-[1000px] size-[1813px]" />
        </div>

        {/* Top left text */}
        <div className="absolute font-['Plus_Jakarta_Sans'] font-medium leading-[1.7] left-[140px] text-[#565656] text-[16px] top-[80px] w-[191px]">
          <p className="mb-0">Fornecemos soluções</p>
          <p>completas para o seu sector.</p>
        </div>

        {/* Center heading */}
        <div className="absolute capitalize font-['Plus_Jakarta_Sans'] font-bold leading-[72px] left-[calc(50%-5.5px)] text-[#050505] text-[64px] text-center top-[219px] tracking-[-2.56px] translate-x-[-50%] w-[559px]">
          <p className="mb-0">Pronto Para Desenvolver</p>
          <p>o Seu Próximo Projecto?</p>
        </div>

        {/* Center subtext */}
        <div className="absolute font-['Plus_Jakarta_Sans'] font-normal leading-[24px] left-1/2 text-[#565656] text-[18px] text-center top-[387px] translate-x-[-50%] w-[338px]">
          <p className="mb-0">A nossa equipa está preparada para identificar e implementar</p>
          <p>a solução mais adequada às necessidades da sua instituição.</p>
        </div>

        {/* Center button */}
        <div className="absolute flex items-center justify-center left-[603px] top-[460px] w-[225px]">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <button 
              onClick={() => handleNavigation('contacte-nos')}
              className="bg-[#4278ec] hover:bg-[#3562c9] transition-all duration-300 flex gap-[24px] items-center pl-[6px] pr-[32px] py-[6px] rounded-[80px] w-[225px]"
            >
              <div className="bg-white flex items-center p-[16px] rounded-[80px] shrink-0">
                <div className="flex items-center justify-center shrink-0">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative size-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p18e73b00} stroke="#4278EC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <p className="font-['Plus_Jakarta_Sans'] font-medium leading-[30px] text-[20px] text-nowrap text-white">Contactar-nos</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Footer Group */}
        <div className="absolute contents left-[30px] top-[580px]">
          {/* White footer container */}
          <div className="absolute bg-white h-[690px] left-[30px] rounded-[40px] top-[580px] w-[1380px]" />
          
          {/* Large Trionica text */}
          <p className="absolute font-['Plus_Jakarta_Sans'] font-bold leading-[1.2] left-[calc(50%-1px)] text-[180px] text-[rgba(35,84,162,0.89)] text-center text-nowrap top-[913px] tracking-[-9px] translate-x-[-50%] uppercase">
            Triónica
          </p>

          {/* Navigation links */}
          <div className="absolute flex gap-[32px] items-center left-[calc(50%-344.4px)] top-[826px] translate-x-[-50%]">
            <button 
              onClick={() => handleNavigation('home')}
              className="font-['Plus_Jakarta_Sans'] font-bold leading-[20.04px] shrink-0 text-[#4278ec] text-[18px] text-nowrap tracking-[-0.18px]"
            >
              Início
            </button>
            <div className="relative shrink-0 size-[7.4px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
              </svg>
            </div>
            <button 
              onClick={() => handleNavigation('sobre-nos')}
              className="capitalize flex flex-col font-['Plus_Jakarta_Sans'] font-medium justify-center leading-[0] shrink-0 text-[#667085] text-[18px] text-nowrap hover:text-[#4278ec] transition-colors"
            >
              <p className="leading-[1.2]">Sobre Nós</p>
            </button>
            <div className="relative shrink-0 size-[7.4px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
              </svg>
            </div>
            <button 
              onClick={() => handleNavigation('portfolio')}
              className="capitalize flex flex-col font-['Plus_Jakarta_Sans'] font-medium justify-center leading-[0] shrink-0 text-[#667085] text-[18px] text-nowrap hover:text-[#4278ec] transition-colors"
            >
              <p className="leading-[1.2]">Soluções</p>
            </button>
            <div className="relative shrink-0 size-[7.4px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
              </svg>
            </div>
            <button 
              onClick={() => handleNavigation('portfolio')}
              className="capitalize flex flex-col font-['Plus_Jakarta_Sans'] font-medium justify-center leading-[0] shrink-0 text-[#667085] text-[18px] text-nowrap hover:text-[#4278ec] transition-colors"
            >
              <p className="leading-[1.2]">Portfolio</p>
            </button>
          </div>

          {/* Bottom section with line, social icons, and copyright */}
          <div className="absolute flex flex-col gap-[24px] items-center justify-center left-[140px] top-[1167px] w-[1160px]">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1160 1.0001">
                  <line stroke="#EDEDED" x1="4.37114e-08" x2="1160" y1="0.5" y2="0.500101" />
                </svg>
              </div>
            </div>
            
            {/* Social and copyright container */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <p className="[grid-area:1_/_1] font-['Inter'] font-medium leading-[1.5] ml-[450.5px] mt-[13px] not-italic relative text-[14px] text-black text-nowrap">
                © 2025 Triónica Moçambique. Todos os direitos reservados.
              </p>
              
              {/* Social icons row */}
              <div className="[grid-area:1_/_1] flex gap-[20px] items-start ml-0 mt-0 relative w-[251px]">
                {/* First group of 3 icons */}
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  {/* Facebook */}
                  <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="23.5" stroke="#1877F2" strokeOpacity="0.3" />
                      <path d={svgPaths.p2b5c400} fill="#1877F2" />
                    </svg>
                  </div>
                  
                  {/* X (formerly Twitter) */}
                  <div className="[grid-area:1_/_1] ml-[68px] mt-0 relative size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="23.5" stroke="#000000" strokeOpacity="0.3" />
                      <path d="M 28.9 15 L 32 15 L 24.5 23.8 L 33 33 L 28.3 33 L 22.5 26.1 L 16 33 L 13 33 L 20.9 23.7 L 13 15 L 17.8 15 L 23.2 21.4 L 28.9 15 Z M 27.8 31.2 L 29.4 31.2 L 18.3 16.7 L 16.6 16.7 L 27.8 31.2 Z" fill="#000000" />
                    </svg>
                  </div>
                  
                  {/* Instagram */}
                  <div className="[grid-area:1_/_1] flex gap-[10px] items-start ml-[136px] mt-0 relative">
                    <div className="relative shrink-0 size-[48px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="23.5" stroke="#E4405F" strokeOpacity="0.3" />
                      </svg>
                    </div>
                    <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]">
                      <div className="absolute inset-[0_0.06%_0.02%_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9859 23.9953">
                          <path d={svgPaths.p2029900} fill="#E4405F" />
                          <path d={svgPaths.p90dcd40} fill="#E4405F" />
                          <path d={svgPaths.p110e5500} fill="#E4405F" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex gap-[10px] items-start relative shrink-0">
                  <div className="relative shrink-0 size-[48px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="23.5" stroke="#0A66C2" strokeOpacity="0.3" />
                    </svg>
                  </div>
                  <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p2ccee40} fill="#0A66C2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div className="absolute font-['Plus_Jakarta_Sans'] font-medium leading-none left-[83px] text-[#050505] text-[64px] top-[652px] w-[718px]">
            <p className="mb-0">Triónica — Tecnologia e Soluções</p>
            <p>para o Desenvolvimento de Moçambique</p>
          </div>
        </div>
      </section>
    </>
  );
}
