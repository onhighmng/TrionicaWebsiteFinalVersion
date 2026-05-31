import React from 'react';
import { getImageUrl } from '../utils/images';

export function Header({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" onClick={(e) => handleNavClick('home', e)} className="block">
              <img 
                src={getImageUrl("wp-content/uploads/2019/05/cropped-LogoTRIONICAmz-002_1-1.png")}
                alt="Trionica" 
                className="h-auto max-w-[250px]"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#" onClick={(e) => handleNavClick('home', e)} className="text-xs lg:text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase transition-colors">
              Home
            </a>
            <a href="#" onClick={(e) => handleNavClick('quem-somos', e)} className="text-xs lg:text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase transition-colors">
              Quem Somos
            </a>
            <a href="#" onClick={(e) => handleNavClick('ensino', e)} className="text-xs lg:text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase transition-colors">
              Ensino
            </a>
            <a href="#" onClick={(e) => handleNavClick('saude', e)} className="text-xs lg:text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase transition-colors">
              Saúde
            </a>
            <a href="#" onClick={(e) => handleNavClick('aguas', e)} className="text-xs lg:text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase transition-colors">
              Águas
            </a>
            <a href="#" onClick={(e) => handleNavClick('ambiente', e)} className="text-xs lg:text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase transition-colors">
              Ambiente
            </a>
            <a href="#" onClick={(e) => handleNavClick('minas', e)} className="text-xs lg:text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase transition-colors">
              Minas
            </a>
            <a href="#" onClick={(e) => handleNavClick('contacte-nos', e)} className="text-xs lg:text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase transition-colors">
              Contacte-nos
            </a>
            <a href="#" onClick={(e) => handleNavClick('blog', e)} className="text-xs lg:text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase transition-colors">
              Blog
            </a>
            <a href="#" onClick={(e) => handleNavClick('faq', e)} className="text-xs lg:text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase transition-colors">
              FAQ
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#2354a2] focus:outline-none p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isOpen ? <line x1="18" y1="6" x2="6" y2="18"></line> : <line x1="3" y1="12" x2="21" y2="12"></line>}
                {isOpen ? <line x1="6" y1="6" x2="18" y2="18"></line> : <line x1="3" y1="6" x2="21" y2="6"></line>}
                {!isOpen && <line x1="3" y1="18" x2="21" y2="18"></line>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" onClick={(e) => handleNavClick('home', e)} className="text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase">Home</a>
              <a href="#" onClick={(e) => handleNavClick('quem-somos', e)} className="text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase">Quem Somos</a>
              <a href="#" onClick={(e) => handleNavClick('ensino', e)} className="text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase">Ensino</a>
              <a href="#" onClick={(e) => handleNavClick('saude', e)} className="text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase">Saúde</a>
              <a href="#" onClick={(e) => handleNavClick('aguas', e)} className="text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase">Águas</a>
              <a href="#" onClick={(e) => handleNavClick('ambiente', e)} className="text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase">Ambiente</a>
              <a href="#" onClick={(e) => handleNavClick('minas', e)} className="text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase">Minas</a>
              <a href="#" onClick={(e) => handleNavClick('contacte-nos', e)} className="text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase">Contacte-nos</a>
              <a href="#" onClick={(e) => handleNavClick('blog', e)} className="text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase">Blog</a>
              <a href="#" onClick={(e) => handleNavClick('faq', e)} className="text-sm font-bold text-gray-700 hover:text-[#d65050] uppercase">FAQ</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
