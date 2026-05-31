"use client"

import React, { type SVGProps } from 'react';
import { getImageUrl } from '../../utils/images';
import svgPaths from '../../imports/svg-i8xoygbqna';
import { GradientHeading } from '../ui/gradient-heading';
import { LogoCarousel } from '../ui/logo-carousel';
import bciLogo from 'figma:asset/82cd405a60a5f350e706ed8d47affe6341ac868f.png';
import bancoMocambiqueLogo from 'figma:asset/9a022757e30ce3c577aefadff9e3365c1c7f3247.png';
import bancoMocambiqueLogoAlt from 'figma:asset/e133c49b2bb044a53ff227009b59429e04ba1ca4.png';
import hcbLogo from 'figma:asset/63f97fc06c7d3667f8975059283b6bab246ebc3e.png';
import sasolLogo from 'figma:asset/c19e1a75049fa31e068752e215bce95bc0f51d91.png';

// Partner Logo Components - Using actual images from repository
function InadeLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={getImageUrl('wp-content/uploads/2019/05/inade-360x304.png')} 
      alt="INADE"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function AnepLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={getImageUrl('wp-content/uploads/2019/05/header-logo-anep.png')} 
      alt="ANEP"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function HCBLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={hcbLogo} 
      alt="HCB"
      className="max-w-full max-h-full object-contain scale-[12]"
      {...props}
    />
  );
}

function BCILogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={bciLogo} 
      alt="BCI"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function BancoLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={bancoMocambiqueLogo} 
      alt="Banco"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function BancoLogoAlt(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={bancoMocambiqueLogoAlt} 
      alt="Banco de Moçambique"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function UnizambezeLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={getImageUrl('wp-content/uploads/2019/05/Unizambeze-360x385.jpg')} 
      alt="Unizambeze"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function SasolLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={sasolLogo} 
      alt="Sasol"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function CPLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={getImageUrl('wp-content/uploads/2019/03/cp-40.png')} 
      alt="CP"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function DISLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={getImageUrl('wp-content/uploads/2019/03/logo_DIS-1024x252.png')} 
      alt="DIS"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function MatestLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={getImageUrl('wp-content/uploads/2019/03/Logo_Matest_def-01-e1508228789861-1024x232.jpg')} 
      alt="Matest"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function OptikaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={getImageUrl('wp-content/uploads/2019/03/logo_optika_italy_black.png')} 
      alt="Optika"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function LucasNuelleLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={getImageUrl('wp-content/uploads/2019/03/lucas_nuelle_en-us.svg')} 
      alt="Lucas Nuelle"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

function ConchemLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <img 
      src={getImageUrl('wp-content/uploads/2019/03/Conchem_Logo-1024x580.png')} 
      alt="Conchem"
      className="max-w-full max-h-full object-contain"
      {...props}
    />
  );
}

// All partner logos array
const allLogos = [
  { name: "INADE", id: 1, img: InadeLogo as any },
  { name: "ANEP", id: 2, img: AnepLogo as any },
  { name: "HCB", id: 3, img: HCBLogo as any },
  { name: "BCI", id: 4, img: BCILogo as any },
  { name: "Banco", id: 5, img: BancoLogo as any },
  { name: "Banco de Moçambique", id: 6, img: BancoLogoAlt as any },
  { name: "Unizambeze", id: 7, img: UnizambezeLogo as any },
  { name: "Sasol", id: 8, img: SasolLogo as any },
  { name: "CP", id: 9, img: CPLogo as any },
  { name: "DIS", id: 10, img: DISLogo as any },
  { name: "Matest", id: 11, img: MatestLogo as any },
  { name: "Optika", id: 12, img: OptikaLogo as any },
  { name: "Lucas Nuelle", id: 13, img: LucasNuelleLogo as any },
  { name: "Conchem", id: 14, img: ConchemLogo as any },
];

export function PartnersSection() {
  const [columnCount, setColumnCount] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setColumnCount(6); // Desktop: 6 logos
      } else if (window.innerWidth >= 768) {
        setColumnCount(4); // Tablet: 4 logos
      } else {
        setColumnCount(3); // Mobile: 3 logos
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[#e2e2e2]" data-navbar-section="light">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with gradient text */}
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
          <div className="flex items-center gap-6 w-full max-w-2xl">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-400 to-gray-400"></div>
            <GradientHeading variant="secondary" size="sm" weight="semi">
              Marcas líderes que confiam em nós
            </GradientHeading>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gray-400 to-gray-400"></div>
          </div>

          {/* New Logo Carousel */}
          <LogoCarousel columnCount={columnCount} logos={allLogos} />
        </div>
      </div>
    </section>
  );
}