import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getImageUrl } from "../utils/images";
import { MenuItem, ProductItem } from "./ui/navbar-menu";
import imgSaude from "figma:asset/5387dac094734b07fbea93a0716344069eaf78fc.png";
import imgAguas from "figma:asset/e5338e4f7a6437afa17dbc009c762e48754173a4.png";
import imgAmbiente from "figma:asset/c1b1db6c514cff25caa0cecbe74fea6016b4cc73.png";
import imgMinas from "figma:asset/f7f09a1149bfa2062668c63ecb8f8d1f941ca029.png";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true); // Track if navbar is over dark background
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isNavbarReady, setIsNavbarReady] = useState(false);
  const [highlightSolucoes, setHighlightSolucoes] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoverBlockRef = useRef(false);

  // Prevent dropdown from showing during initial animation and page changes
  useEffect(() => {
    // BLOCK ALL HOVER EVENTS IMMEDIATELY
    hoverBlockRef.current = true;
    
    // Force close everything immediately
    setIsDropdownHovered(false);
    setOpenDropdown(null);
    setIsNavbarReady(false);
    
    // Clear any pending timeouts
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    
    const timer = setTimeout(() => {
      setIsNavbarReady(true);
      // Unblock hover events after animations complete
      hoverBlockRef.current = false;
    }, 1200);
    
    return () => {
      clearTimeout(timer);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      hoverBlockRef.current = true; // Block on cleanup
    };
  }, [currentPage]);

  // Listen for custom event to open Soluções dropdown
  useEffect(() => {
    const handleOpenSolucoes = () => {
      if (isNavbarReady && !hoverBlockRef.current) {
        setOpenDropdown('solucoes');
        setIsDropdownHovered(true);
        setHighlightSolucoes(true);
        // Auto-close after 5 seconds
        dropdownTimeoutRef.current = setTimeout(() => {
          setIsDropdownHovered(false);
          setOpenDropdown(null);
          setHighlightSolucoes(false);
        }, 5000);
      }
    };

    window.addEventListener('openSolucoesDropdown', handleOpenSolucoes);
    return () => window.removeEventListener('openSolucoesDropdown', handleOpenSolucoes);
  }, [isNavbarReady]);

  // Listen for custom event to open mobile menu with Soluções dropdown
  useEffect(() => {
    const handleOpenMobileSolucoes = () => {
      // Open mobile menu
      setMobileMenuOpen(true);
      setHighlightSolucoes(true);
      // Open Soluções dropdown after a short delay
      setTimeout(() => {
        setOpenDropdown('solucoes');
      }, 300);
    };

    window.addEventListener('openMobileSolucoesMenu', handleOpenMobileSolucoes);
    return () => window.removeEventListener('openMobileSolucoesMenu', handleOpenMobileSolucoes);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Detect if navbar is over a light or dark section
    const detectBackground = () => {
      const navbarHeight = 100; // Approximate navbar height
      const sections = document.querySelectorAll('[data-navbar-section]');
      
      let foundDark = true; // Default to dark
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if section overlaps with navbar area
        if (rect.top < navbarHeight && rect.bottom > 0) {
          const bgType = section.getAttribute('data-navbar-section');
          if (bgType === 'light') {
            foundDark = false;
          }
        }
      });
      
      setIsDarkBg(foundDark);
    };

    detectBackground();
    window.addEventListener('scroll', detectBackground);
    
    return () => window.removeEventListener('scroll', detectBackground);
  }, [currentPage]); // Re-run when page changes

  const handleNavClick = (page: string) => {
    // Scroll to top when navigating to any page
    window.scrollTo({ top: 0, behavior: 'instant' });
    onNavigate(page);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Check if we're on home page for white pill navbar
  const isHomePage = currentPage === 'home';

  return (
    <>
      {/* Fixed Navigation Wrapper */}
      <div className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 flex justify-center`}>
        {/* Navigation Container - Transparent wrapper */}
        <nav className={`relative ${isHomePage ? '-mt-1 md:mt-4 lg:mt-6' : 'mt-1 md:mt-4 lg:mt-6'} transition-all duration-300 w-full lg:w-[1280px] h-[72px] flex items-center justify-between px-4 lg:px-0`} style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
          
          {/* Desktop Layout - Exact Figma structure - HIDDEN ON MOBILE */}
          {!isHomePage && (
            <>
              {/* Logo section - Outside background */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0
                }}
                className="hidden lg:block h-[50.4px] w-[48.6px] shrink-0 cursor-pointer lg:ml-[124px]" 
                onClick={() => handleNavClick('home')}
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
              >
                <img 
                  src={getImageUrl("wp-content/uploads/2019/05/cropped-LogoTRIONICAmz-002_1-1.png")}
                  alt="Trionica" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>

              {/* Middle section with dark background - Only for navigation buttons - HIDDEN ON MOBILE */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.96, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.9, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05
                }}
                className="hidden lg:flex absolute left-[360px] top-0 bg-white/90 backdrop-blur-md rounded-[16px] h-[72px] w-[541px] items-center px-[40px] overflow-visible"
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
              >
                {/* Navigation buttons group with grid layout */}
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start shrink-0">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start">
                    
                    {/* Home button - active state with background */}
                    <motion.div 
                      initial={{ opacity: 0, y: 3, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 1.0, 
                        delay: 0.25,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className={`[grid-area:1_/_1] ml-0 ${
                        currentPage === 'home' 
                          ? 'bg-[rgba(101,73,246,0.15)] h-[50.006px] w-[80.184px] rounded-[33.352px] flex items-center justify-center cursor-pointer'
                          : 'h-[20.011px] w-[50px] flex items-center cursor-pointer'
                      }`}
                      onClick={() => handleNavClick('home')}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <p className={`font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] text-[19.455px] whitespace-nowrap ${
                        currentPage === 'home' ? 'text-[#6549f6]' : 'text-black'
                      }`} style={{ fontVariationSettings: "'opsz' 14" }}>
                        Início
                      </p>
                    </motion.div>

                    {/* Dot separator 1 */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.28,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="[grid-area:1_/_1] ml-[70px] relative shrink-0 size-[7.4px]"
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                        <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
                      </svg>
                    </motion.div>

                    {/* Sobre Nós button */}
                    <motion.div 
                      initial={{ opacity: 0, y: 3, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 1.0, 
                        delay: 0.32,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="[grid-area:1_/_1] h-[20.011px] ml-[95px] flex items-center cursor-pointer"
                      onClick={() => handleNavClick('sobre-nos')}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <p className={`font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] text-[19.455px] whitespace-nowrap ${
                        currentPage === 'sobre-nos' ? 'text-[#2354a2]' : 'text-black'
                      }`} style={{ fontVariationSettings: "'opsz' 14" }}>
                        Sobre Nós
                      </p>
                    </motion.div>

                    {/* Dot separator 2 */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.35,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="[grid-area:1_/_1] ml-[220px] relative shrink-0 size-[7.4px]"
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                        <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
                      </svg>
                    </motion.div>

                    {/* Soluções button with dropdown */}
                    <motion.div 
                      initial={{ opacity: 0, y: 3, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 1.0, 
                        delay: 0.39,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="[grid-area:1_/_1] ml-[248px] flex items-center relative"
                      onMouseEnter={() => {
                        if (isNavbarReady && !hoverBlockRef.current) {
                          setIsDropdownHovered(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (isNavbarReady && !hoverBlockRef.current) {
                          setIsDropdownHovered(false);
                        }
                      }}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <div className="flex gap-[7.2px] items-center h-[20.011px] cursor-pointer">
                        <p className={`font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] text-[19.455px] whitespace-nowrap ${
                          ['ensino', 'saude', 'aguas', 'ambiente', 'minas'].includes(currentPage) ? 'text-[#2354a2]' : 'text-black'
                        }`} style={{ fontVariationSettings: "'opsz' 14" }}>
                          Soluções
                        </p>
                        <ChevronDown className="w-[17.1px] h-[17.1px] text-black" strokeWidth={1.425} />
                      </div>
                      
                      {/* Dropdown menu */}
                      <AnimatePresence>
                        {isDropdownHovered && isNavbarReady && !hoverBlockRef.current && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 10 }}
                            transition={{
                              type: "spring",
                              mass: 0.5,
                              damping: 11.5,
                              stiffness: 100,
                            }}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 z-[10000] pt-2"
                            onMouseEnter={() => {
                              if (isNavbarReady && !hoverBlockRef.current) {
                                setIsDropdownHovered(true);
                              }
                            }}
                            onMouseLeave={() => {
                              if (isNavbarReady && !hoverBlockRef.current) {
                                setIsDropdownHovered(false);
                              }
                            }}
                          >
                            <div className="bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-black/[0.1]">
                              <div className="w-max h-full p-4">
                                <div className="grid grid-cols-2 gap-3">
                                  {[
                                    { id: 'ensino', label: 'Ensino', description: 'Equipamentos e soluções educacionais para laboratórios de ensino', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop' },
                                    { id: 'saude', label: 'Saúde', description: 'Equipamentos hospitalares e soluções para diagnóstico médico', image: imgSaude },
                                    { id: 'aguas', label: 'Águas', description: 'Equipamento de medição, análise e tratamento de água para consumo e residuais', image: imgAguas },
                                    { id: 'ambiente', label: 'Ambiente', description: 'Soluções sustentáveis para monitorização ambiental', image: imgAmbiente },
                                    { id: 'minas', label: 'Minas', description: 'Equipamentos para prospeção, exploração mineira e análise geológica', image: imgMinas }
                                  ].map((item) => (
                                    <ProductItem
                                      key={item.id}
                                      title={item.label}
                                      description={item.description}
                                      onClick={() => handleNavClick(item.id)}
                                      src={item.image}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Dot separator 3 */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.42,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="[grid-area:1_/_1] ml-[352px] relative shrink-0 size-[7.4px]"
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 7.4">
                        <circle cx="3.7" cy="3.7" fill="#050505" r="3.7" />
                      </svg>
                    </motion.div>

                    {/* Portfolio button */}
                    <motion.div 
                      initial={{ opacity: 0, y: 3, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 1.0, 
                        delay: 0.46,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="[grid-area:1_/_1] h-[20.011px] ml-[375px] flex items-center cursor-pointer"
                      onClick={() => handleNavClick('portfolio')}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <p className={`font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] text-[19.455px] whitespace-nowrap ${
                        currentPage === 'portfolio' ? 'text-[#2354a2]' : 'text-black'
                      }`} style={{ fontVariationSettings: "'opsz' 14" }}>
                        Portfolio
                      </p>
                    </motion.div>

                  </div>
                </div>
              </motion.div>

              {/* Contactar button - Outside background, positioned on the right - HIDDEN ON MOBILE */}
              <motion.button 
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05
                }}
                onClick={() => handleNavClick('contacte-nos')}
                className="hidden lg:flex absolute bg-white h-[40px] right-[40px] top-[16px] w-[114px] rounded-[16777216px] items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                style={{ willChange: 'transform, opacity' }}
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#101828] text-[14px] text-center whitespace-nowrap tracking-[-0.1504px]">
                  Contactar
                </p>
              </motion.button>
            </>
          )}

          {/* Mobile Layout - Original flexbox - VISIBLE ON MOBILE ONLY */}
          <div className="flex lg:hidden items-center justify-between w-full">
            {/* Logo section */}
            <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <img 
                src={getImageUrl("wp-content/uploads/2019/05/cropped-LogoTRIONICAmz-002_1-1.png")}
                alt="Trionica" 
                className="h-8 md:h-10 w-auto"
              />
              <span className={`text-base md:text-lg font-semibold ${currentPage === 'contacte-nos' ? 'text-white' : 'text-gray-900'}`}>Trionica</span>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${currentPage === 'contacte-nos' ? 'text-white' : 'text-gray-900'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${currentPage === 'contacte-nos' ? 'text-white' : 'text-gray-900'}`} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-[9998]"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel - Full Screen */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-screen w-full bg-white shadow-2xl z-[9999] overflow-y-auto"
            >
              {/* Close Button */}
              <div className="absolute top-6 right-6 z-10">
                <button
                  onClick={() => setMobileMenuOpen(false)}
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
                    onClick={() => handleNavClick('home')}
                    className={`text-center transition-colors ${
                      currentPage === 'home'
                        ? "font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[28px] text-[#2354a2]"
                        : "font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[24px] text-[#667085] hover:text-[#FF6747]"
                    }`}
                  >
                    Início
                  </button>
                  
                  <button
                    onClick={() => handleNavClick('sobre-nos')}
                    className={`text-center transition-colors ${
                      currentPage === 'sobre-nos'
                        ? "font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[28px] text-[#2354a2]"
                        : "font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[24px] text-[#667085] hover:text-[#2354a2]"
                    }`}
                  >
                    Sobre Nós
                  </button>
                  
                  {/* Soluções Dropdown */}
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === 'solucoes' ? null : 'solucoes')}
                      className={`w-full text-center transition-colors flex items-center justify-center gap-2 ${
                        (highlightSolucoes || ['saude', 'aguas', 'ambiente', 'minas', 'ensino'].includes(currentPage))
                          ? "font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[28px] text-[#2354a2]"
                          : "font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[24px] text-[#667085] hover:text-[#2354a2]"
                      }`}
                    >
                      Soluções
                      <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'solucoes' ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {openDropdown === 'solucoes' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col gap-3 mt-4 pl-4"
                      >
                        <button
                          onClick={() => handleNavClick('saude')}
                          className={`text-center transition-colors ${
                            currentPage === 'saude'
                              ? "font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[22px] text-[#2354a2]"
                              : "font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] text-[#667085] hover:text-[#2354a2]"
                          }`}
                        >
                          Saúde
                        </button>
                        <button
                          onClick={() => handleNavClick('aguas')}
                          className={`text-center transition-colors ${
                            currentPage === 'aguas'
                              ? "font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[22px] text-[#2354a2]"
                              : "font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] text-[#667085] hover:text-[#2354a2]"
                          }`}
                        >
                          Águas
                        </button>
                        <button
                          onClick={() => handleNavClick('ambiente')}
                          className={`text-center transition-colors ${
                            currentPage === 'ambiente'
                              ? "font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[22px] text-[#2354a2]"
                              : "font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] text-[#667085] hover:text-[#2354a2]"
                          }`}
                        >
                          Ambiente
                        </button>
                        <button
                          onClick={() => handleNavClick('minas')}
                          className={`text-center transition-colors ${
                            currentPage === 'minas'
                              ? "font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[22px] text-[#2354a2]"
                              : "font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] text-[#667085] hover:text-[#2354a2]"
                          }`}
                        >
                          Minas
                        </button>
                        <button
                          onClick={() => handleNavClick('ensino')}
                          className={`text-center transition-colors ${
                            currentPage === 'ensino'
                              ? "font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[22px] text-[#2354a2]"
                              : "font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] text-[#667085] hover:text-[#2354a2]"
                          }`}
                        >
                          Ensino
                        </button>
                      </motion.div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleNavClick('portfolio')}
                    className={`text-center transition-colors ${
                      currentPage === 'portfolio'
                        ? "font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[28px] text-[#2354a2]"
                        : "font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[24px] text-[#667085] hover:text-[#2354a2]"
                    }`}
                  >
                    Portfolio
                  </button>
                  
                  <button
                    onClick={() => handleNavClick('contacte-nos')}
                    className={`text-center transition-colors ${
                      currentPage === 'contacte-nos'
                        ? "font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[28px] text-[#2354a2]"
                        : "font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[24px] text-[#667085] hover:text-[#2354a2]"
                    }`}
                  >
                    Contacto
                  </button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

function MobileNavItem({ 
  label, 
  isActive,
  onClick 
}: { 
  label: string;
  isActive?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between border-b border-gray-800 pb-3 text-lg ${
        isActive ? 'text-[#d65050]' : 'text-white'
      }`}
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 text-gray-400" />
    </button>
  );
}