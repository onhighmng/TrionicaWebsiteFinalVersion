import { useState, useEffect } from "react";
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
    onNavigate(page);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    // Scroll to top when navigating
    if (page !== 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Check if we're on home page for white pill navbar
  const isHomePage = currentPage === 'home';

  // Don't render navbar on home page
  if (isHomePage) {
    return null;
  }

  return (
    <>
      {/* Fixed Navigation Wrapper */}
      <div className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 flex justify-center`}>
        {/* Navigation Container - Transparent wrapper */}
        <nav className={`relative mt-3 md:mt-4 lg:mt-6 transition-all duration-300 w-[1280px] h-[72px] flex items-center justify-between`} style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
          
          {/* Desktop Layout for non-home pages - Exact Figma structure */}
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
                className="h-[50.4px] w-[48.6px] shrink-0 cursor-pointer ml-[124px]" 
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

              {/* Middle section with dark background - Only for navigation buttons */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.96, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.9, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05
                }}
                className="absolute left-[360px] top-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-md rounded-[16px] h-[72px] w-[541px] flex items-center px-[40px] overflow-visible"
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
                          : 'h-[20.011px] w-[40px] flex items-center cursor-pointer'
                      }`}
                      onClick={() => handleNavClick('home')}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <p className={`font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] text-[19.455px] whitespace-nowrap ${
                        currentPage === 'home' ? 'text-[#6549f6]' : 'text-white'
                      }`} style={{ fontVariationSettings: "'opsz' 14" }}>
                        Home
                      </p>
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
                      className="[grid-area:1_/_1] h-[20.011px] ml-[122px] flex items-center cursor-pointer"
                      onClick={() => handleNavClick('sobre-nos')}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <p className={`font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] text-[19.455px] whitespace-nowrap ${
                        currentPage === 'sobre-nos' ? 'text-[#FF6747]' : 'text-white'
                      }`} style={{ fontVariationSettings: "'opsz' 14" }}>
                        Sobre Nós
                      </p>
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
                      onMouseEnter={() => setIsDropdownHovered(true)}
                      onMouseLeave={() => setIsDropdownHovered(false)}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <div className="flex gap-[7.2px] items-center h-[20.011px] cursor-pointer">
                        <p className={`font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] text-[19.455px] whitespace-nowrap ${
                          ['ensino', 'saude', 'aguas', 'ambiente', 'minas'].includes(currentPage) ? 'text-[#FF6747]' : 'text-white'
                        }`} style={{ fontVariationSettings: "'opsz' 14" }}>
                          Soluções
                        </p>
                        <ChevronDown className="w-[17.1px] h-[17.1px] text-white" strokeWidth={1.425} />
                      </div>
                      
                      {/* Dropdown menu */}
                      <AnimatePresence>
                        {isDropdownHovered && (
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
                            className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 z-[10000]"
                          >
                            <div className="bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-black/[0.1]">
                              <div className="w-max h-full p-4">
                                <div className="grid grid-cols-2 gap-3">
                                  {[
                                    { id: 'ensino', label: 'Ensino', description: 'Equipamentos e soluções educacionais para laboratórios de ensino', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop' },
                                    { id: 'saude', label: 'Saúde', description: 'Equipamentos hospitalares e soluções para diagnóstico médico', image: imgSaude },
                                    { id: 'aguas', label: 'Águas', description: 'Equipamentos para tratamento e análise de qualidade de água', image: imgAguas },
                                    { id: 'ambiente', label: 'Ambiente', description: 'Soluções sustentáveis para monitorização ambiental', image: imgAmbiente },
                                    { id: 'minas', label: 'Minas', description: 'Equipamentos para exploração mineira e análise geológica', image: imgMinas }
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
                      onClick={() => handleNavClick('blog')}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <p className={`font-['DM_Sans:Bold',sans-serif] font-bold leading-[22.234px] text-[19.455px] whitespace-nowrap ${
                        currentPage === 'blog' ? 'text-[#FF6747]' : 'text-white'
                      }`} style={{ fontVariationSettings: "'opsz' 14" }}>
                        Portfolio
                      </p>
                    </motion.div>

                  </div>
                </div>
              </motion.div>

              {/* Contactar button - Outside background, positioned on the right */}
              <motion.button 
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05
                }}
                onClick={() => handleNavClick('contacte-nos')}
                className="absolute bg-white h-[40px] right-[40px] top-[16px] w-[114px] rounded-[16777216px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                style={{ willChange: 'transform, opacity' }}
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#101828] text-[14px] text-center whitespace-nowrap tracking-[-0.1504px]">
                  Contactar
                </p>
              </motion.button>
            </>
          )}

          {/* Mobile Layout - Original flexbox */}
          <div className="flex lg:hidden items-center justify-between w-full">
            {/* Logo section */}
            <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <img 
                src={getImageUrl("wp-content/uploads/2019/05/cropped-LogoTRIONICAmz-002_1-1.png")}
                alt="Trionica" 
                className={isHomePage ? "h-7 md:h-9 w-auto" : "h-8 md:h-10 w-auto"}
              />
              <span className={`text-base md:text-lg lg:text-xl font-semibold ${isHomePage ? 'text-gray-900' : 'text-white'}`}>Trionica</span>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${isHomePage ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isHomePage ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col p-4 bg-black/95 md:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
                <img 
                  src={getImageUrl("wp-content/uploads/2019/05/cropped-LogoTRIONICAmz-002_1-1.png")}
                  alt="Trionica" 
                  className="h-10 w-auto"
                />
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
              <MobileNavItem 
                label="Home" 
                isActive={currentPage === 'home'}
                onClick={() => handleNavClick('home')}
              />
              <MobileNavItem 
                label="Sobre Nós" 
                isActive={currentPage === 'sobre-nos'}
                onClick={() => handleNavClick('sobre-nos')}
              />
              
              {/* Mobile Soluções Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'solucoes' ? null : 'solucoes')}
                  className={`w-full flex items-center justify-between border-b border-gray-800 pb-3 text-lg ${
                    ['ensino', 'saude', 'aguas', 'ambiente', 'minas'].includes(currentPage)
                      ? 'text-[#d65050]'
                      : 'text-white'
                  }`}
                >
                  <span>Soluções</span>
                  <motion.div
                    animate={{ rotate: openDropdown === 'solucoes' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openDropdown === 'solucoes' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 ml-4 space-y-2"
                    >
                      {[
                        { id: 'ensino', label: 'Ensino' },
                        { id: 'saude', label: 'Saúde' },
                        { id: 'aguas', label: 'Águas' },
                        { id: 'ambiente', label: 'Ambiente' },
                        { id: 'minas', label: 'Minas' }
                      ].map(item => (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                            currentPage === item.id
                              ? 'bg-gradient-to-r from-[#2354a2] to-[#d65050] text-white'
                              : 'text-gray-300 hover:bg-gray-800'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <MobileNavItem 
                label="Portfolio" 
                isActive={currentPage === 'blog'}
                onClick={() => handleNavClick('blog')}
              />
            </div>
          </motion.div>
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