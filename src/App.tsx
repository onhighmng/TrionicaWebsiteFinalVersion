import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/home/HeroSection';
import { AboutSection } from './components/home/AboutSection';
import { LatestPostSection } from './components/home/LatestPostSection';
import { ProductsSection } from './components/home/ProductsSection';
import { WhyChooseUsSection } from './components/home/WhyChooseUsSection';
import { CTAFooterSection } from './components/home/CTAFooterSection';
import { PartnersSection } from './components/home/PartnersSection';

// Pages
import { SobreNos } from './components/pages/SobreNos';
import { Aguas } from './components/pages/Aguas';
import { Ensino } from './components/pages/Ensino';
import { Saude } from './components/pages/Saude';
import { Ambiente } from './components/pages/Ambiente';
import { Minas } from './components/pages/Minas';
import { ContacteNos } from './components/pages/ContacteNos';
import { Blog } from './components/pages/Blog';
import { FAQ } from './components/pages/FAQ';
import { EnsinoPage } from './pages/EnsinoPage';
import { PortfolioDetail } from './components/pages/PortfolioDetail';

import Frame24 from './imports/Frame24';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<string | undefined>();
  const [heroKey, setHeroKey] = useState(0);

  // Set favicon to Trionica logo
  useEffect(() => {
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    favicon.type = 'image/png';
    favicon.rel = 'icon';
    favicon.href = 'https://raw.githubusercontent.com/onhighmng/Trionica/main/wp-content/uploads/2019/05/cropped-LogoTRIONICAmz-002_1-1.png';
    
    if (!document.querySelector("link[rel*='icon']")) {
      document.getElementsByTagName('head')[0].appendChild(favicon);
    }

    // Set Open Graph and meta tags for link previews
    const setMetaTag = (property: string, content: string, isOG = true) => {
      const attr = isOG ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, property);
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
      meta.content = content;
    };

    // Page title
    document.title = 'Trionica - Soluções Integradas para Água, Saúde, Ambiente e Minas';

    // Open Graph tags
    setMetaTag('og:title', 'Trionica - Soluções Integradas para Água, Saúde, Ambiente e Minas');
    setMetaTag('og:description', 'Líder em fornecimento de equipamentos e soluções técnicas especializadas em Moçambique. Oferecemos produtos e serviços de alta qualidade nos setores de água, saúde, ambiente, minas e ensino.');
    setMetaTag('og:image', 'https://raw.githubusercontent.com/onhighmng/Trionica/main/wp-content/uploads/2019/05/cropped-LogoTRIONICAmz-002_1-1.png');
    setMetaTag('og:type', 'website');
    setMetaTag('og:site_name', 'Trionica');

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image', false);
    setMetaTag('twitter:title', 'Trionica - Soluções Integradas para Água, Saúde, Ambiente e Minas', false);
    setMetaTag('twitter:description', 'Líder em fornecimento de equipamentos e soluções técnicas especializadas em Moçambique. Oferecemos produtos e serviços de alta qualidade nos setores de água, saúde, ambiente, minas e ensino.', false);
    setMetaTag('twitter:image', 'https://raw.githubusercontent.com/onhighmng/Trionica/main/wp-content/uploads/2019/05/cropped-LogoTRIONICAmz-002_1-1.png', false);

    // Standard meta tags
    setMetaTag('description', 'Líder em fornecimento de equipamentos e soluções técnicas especializadas em Moçambique. Oferecemos produtos e serviços de alta qualidade nos setores de água, saúde, ambiente, minas e ensino.', false);
  }, []);

  const handleNavigation = (page: string, projectId?: string) => {
    setCurrentPage(page);
    if (projectId) {
      setSelectedProject(projectId);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleMenuClose = () => {
    // Increment heroKey to trigger animation replay
    setHeroKey(prev => prev + 1);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            {/* Navbar - Mobile only for home page */}
            <div className="lg:hidden">
              <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
            </div>
            <HeroSection onNavigate={handleNavigation} currentPage={currentPage} key={heroKey} onMenuClose={handleMenuClose} />
            <AboutSection onNavigate={handleNavigation} />
            <LatestPostSection onNavigate={handleNavigation} />
            <PartnersSection />
            <ProductsSection onNavigate={handleNavigation} />
            <WhyChooseUsSection onNavigate={handleNavigation} />
            <CTAFooterSection onNavigate={handleNavigation} />
          </>
        );
      case 'sobre-nos': return (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
          <SobreNos onNavigate={handleNavigation} />
        </>
      );
      case 'aguas': return (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
          <Aguas onNavigate={handleNavigation} />
        </>
      );
      case 'ensino': return (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
          <EnsinoPage onNavigate={handleNavigation} />
        </>
      );
      case 'saude': return (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
          <Saude onNavigate={handleNavigation} />
        </>
      );
      case 'ambiente': return (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
          <Ambiente onNavigate={handleNavigation} />
        </>
      );
      case 'minas': return (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
          <Minas onNavigate={handleNavigation} />
        </>
      );
      case 'contacte-nos': return (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
          <ContacteNos />
        </>
      );
      case 'blog': return (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
          <Blog onNavigate={handleNavigation} />
        </>
      );
      case 'portfolio': return (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
          <Blog onNavigate={handleNavigation} />
        </>
      );
      case 'portfolio-detail': return (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
          <PortfolioDetail projectId={selectedProject} />
        </>
      );
      case 'faq': return (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
          <FAQ />
        </>
      );
      default: return (
        <>
            <Frame24 currentPage={currentPage} onNavigate={handleNavigation} />
            <AboutSection onNavigate={handleNavigation} />
            <LatestPostSection onNavigate={handleNavigation} />
            <PartnersSection />
            <ProductsSection onNavigate={handleNavigation} />
            <WhyChooseUsSection onNavigate={handleNavigation} />
            <CTAFooterSection onNavigate={handleNavigation} />
        </>
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Main content */}
      <main className="flex-grow">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;