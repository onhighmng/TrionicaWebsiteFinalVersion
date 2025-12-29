import { useState } from 'react';
import svgPaths from "./svg-nyvka57xjj";
import imgBackground from "figma:asset/2596b1e1ea2c8e0c0797e5ab9d0c8d0e48d26b7e.png";

interface Frame24Props {
  currentPage: string;
  onNavigate: (page: string) => void;
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
    <div className="bg-[#fdfdfd] flex items-center justify-center p-2 rounded-lg shrink-0" data-name="Icon">
      <ArrowUpRight />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0046a2] flex gap-4 items-center justify-center pl-5 pr-2 py-2 rounded-xl shrink-0 hover:bg-[#003580] transition-colors cursor-pointer" data-name="Button">
      <p className="text-[#fdfdfd] text-lg whitespace-nowrap font-normal">
        Contactar
      </p>
      <Icon />
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-6" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-up-right">
          <path d={svgPaths.p1542ed00} fill="var(--fill-0, #FDFDFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#fdfdfd] flex items-center justify-center p-2 rounded-lg shrink-0" data-name="Icon">
      <ArrowUpRight1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="border border-[#fdfdfd] flex gap-4 items-center justify-center pl-5 pr-2 py-2 rounded-xl shrink-0 hover:bg-white/10 transition-colors cursor-pointer" data-name="Button">
      <p className="text-[#fdfdfd] text-lg whitespace-nowrap font-normal">
        Soluções
      </p>
      <Icon1 />
    </div>
  );
}

function Content({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="flex flex-col gap-8 items-start max-w-[588px]" data-name="Content">
      <div className="flex flex-col gap-5 items-start w-full" data-name="Text">
        <p className="font-medium leading-tight text-5xl md:text-6xl lg:text-7xl text-white">
          <span className="text-[#d40303]">✱</span>
          <span> Onde o Futuro Começa</span>
        </p>
        <p className="text-[#e5e5e5] text-base md:text-lg leading-relaxed">
          Descubra soluções inovadoras que transformam desafios em oportunidades. Juntos, construímos um amanhã melhor com tecnologia, confiança e excelência.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 items-start">
        <div onClick={() => onNavigate('contacte-nos')}>
          <Button />
        </div>
        <div onClick={() => onNavigate('aguas')}>
          <Button1 />
        </div>
      </div>
    </div>
  );
}

export default function Frame24({ currentPage, onNavigate }: Frame24Props) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolucoesOpen, setIsSolucoesOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Sobre Nós', page: 'sobre-nos' },
    { 
      label: 'Soluções', 
      page: 'solucoes',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Águas', page: 'aguas', icon: '💧' },
        { label: 'Ensino', page: 'ensino', icon: '📚' },
        { label: 'Saúde', page: 'saude', icon: '⚕️' },
        { label: 'Ambiente', page: 'ambiente', icon: '🌱' },
        { label: 'Minas', page: 'minas', icon: '⛏️' }
      ]
    },
    { label: 'Portfolio', page: 'blog' }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden" data-name="Frame-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          alt="Hero Background" 
          className="absolute inset-0 object-cover size-full" 
          src={imgBackground} 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="w-full px-6 md:px-12 lg:px-24 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="text-white text-2xl md:text-3xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onNavigate('home')}
            >
              TRIONICA
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              {navItems.map((item) => (
                <div key={item.page} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setHoveredItem(item.page)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <button
                        className={`px-4 py-2 rounded-full text-white transition-all ${
                          currentPage === item.page || item.dropdownItems?.some(d => d.page === currentPage)
                            ? 'bg-white/20'
                            : 'hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </button>
                      
                      {/* Dropdown Menu */}
                      {hoveredItem === item.page && item.dropdownItems && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl overflow-hidden z-50">
                          {item.dropdownItems.map((dropdownItem) => (
                            <button
                              key={dropdownItem.page}
                              onClick={() => {
                                onNavigate(dropdownItem.page);
                                setHoveredItem(null);
                              }}
                              className="w-full px-6 py-3 text-left hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-800"
                            >
                              <span className="text-xl">{dropdownItem.icon}</span>
                              <span>{dropdownItem.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => onNavigate(item.page)}
                      className={`px-4 py-2 rounded-full text-white transition-all ${
                        currentPage === item.page
                          ? 'bg-white/20'
                          : 'hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              {navItems.map((item) => (
                <div key={item.page}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsSolucoesOpen(!isSolucoesOpen)}
                        className="w-full px-4 py-3 text-left text-white hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform ${isSolucoesOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isSolucoesOpen && item.dropdownItems && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <button
                              key={dropdownItem.page}
                              onClick={() => {
                                onNavigate(dropdownItem.page);
                                setIsMobileMenuOpen(false);
                                setIsSolucoesOpen(false);
                              }}
                              className="w-full px-4 py-2 text-left text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-3"
                            >
                              <span className="text-lg">{dropdownItem.icon}</span>
                              <span>{dropdownItem.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        onNavigate(item.page);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-white rounded-lg transition-colors ${
                        currentPage === item.page ? 'bg-white/20' : 'hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center px-6 md:px-12 lg:px-24 pb-24">
          <Content onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}
