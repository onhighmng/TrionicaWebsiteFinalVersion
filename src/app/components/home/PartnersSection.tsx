"use client"

import React, { type SVGProps } from 'react';
import { getImageUrl } from '../../utils/images';
import { GradientHeading } from '../ui/gradient-heading';
import { LogoCarousel } from '../ui/logo-carousel';

function Img({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = React.useState(false);
  if (failed) {
    return (
      <span style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(13px, 1.4vw, 18px)',
        color: '#1a1a2e',
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}>
        {alt}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="max-w-full max-h-full object-contain"
      onError={() => setFailed(true)}
    />
  );
}

function TextLogo({ name, color = '#1a1a2e' }: { name: string; color?: string }) {
  return (
    <span style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: 'clamp(13px, 1.6vw, 20px)',
      color,
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap',
      userSelect: 'none',
    }}>
      {name}
    </span>
  );
}

// ── Logos with repo images ────────────────────────────────────────────────────

function LucasNuelleLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src={getImageUrl('wp-content/uploads/2019/03/lucas_nuelle_en-us.svg')} alt="Lucas-Nülle" />;
}
function OptikaLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src={getImageUrl('wp-content/uploads/2019/03/logo_optika_italy_black.png')} alt="Optika Italy" />;
}
function MatestLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src={getImageUrl('wp-content/uploads/2019/03/Logo_Matest_def-01-e1508228789861-1024x232.jpg')} alt="Matest" />;
}

// ── Logos fetched from brand websites ────────────────────────────────────────

function GuntLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://www.gunt.de/templates/gunt/img/gunt-hamburg.png" alt="Gunt" />;
}
function PhyweLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/PHYWE_Logo_mit_Claim_CMYK.svg" alt="Phywe" />;
}
function KernLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://www.kern-sohn.com/cosmoshop/shared/pix/logo.svg" alt="Kern" />;
}
function DrapperLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://www.drapertools.com/content/draper-tools.png" alt="Drapper" />;
}
function RevRoboticsLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Rev_Official_Company_Logo.svg" alt="REV Robotics" />;
}
function CanonLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Canon_logo.svg" alt="Canon" />;
}
function ValueStekLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://www.valuestek.com/wp-content/uploads/2025/05/Valuestek-logo-c.webp" alt="valueStek" />;
}
function XtoolsLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://dl.svgcdn.com/svg/cbi/xtool.svg" alt="xTool" />;
}
function SturmerLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://www.stuermer-machines.com/typo3conf/ext/stuermer_theme/Resources/Public/Images/swdm.svg" alt="Stürmer" />;
}
function SeaberyLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://seaberyat.com/wp-content/uploads/2025/09/Logo_2-Color-RGB_Seabery.png" alt="Seabery" />;
}
function BedrunkaHirthLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://www.bedrunka-hirth.de/typo3conf/ext/bedrunka_hirth/Resources/Public/Images/bedrunka_hirth_logo.svg" alt="Bedrunka+Hirth" />;
}
function GimaLogo(props: SVGProps<SVGSVGElement>) {
  return <Img src="https://www.gimaitaly.com/images/logo/logo-gima_footer.png" alt="Gima" />;
}
function DataboxLogo(props: SVGProps<SVGSVGElement>) {
  return <TextLogo name="Databox" color="#1a1a2e" />;
}
function AuxilabLogo(props: SVGProps<SVGSVGElement>) {
  return <TextLogo name="Auxilab" color="#e2001a" />;
}

// ── All brand logos ────────────────────────────────────────────────────────────

const allLogos = [
  { name: "Lucas-Nülle",    id: 1,  img: LucasNuelleLogo as any, url: "https://www.lucas-nuelle.com" },
  { name: "Optika Italy",   id: 2,  img: OptikaLogo as any,      url: "https://www.optika-italy.com" },
  { name: "Matest",         id: 3,  img: MatestLogo as any,      url: "https://www.matest.com" },
  { name: "Gunt",           id: 4,  img: GuntLogo as any,        url: "https://www.gunt.de" },
  { name: "Phywe",          id: 5,  img: PhyweLogo as any,       url: "https://www.phywe.com" },
  { name: "Kern",           id: 6,  img: KernLogo as any,        url: "https://www.kern-sohn.com" },
  { name: "Drapper",        id: 7,  img: DrapperLogo as any,     url: "https://www.drapertools.com" },
  { name: "REV Robotics",   id: 8,  img: RevRoboticsLogo as any, url: "https://www.revrobotics.com" },
  { name: "Canon",          id: 9,  img: CanonLogo as any,       url: "https://www.canon.com" },
  { name: "valueStek",      id: 10, img: ValueStekLogo as any,   url: "https://www.valuestek.com" },
  { name: "Xtools",         id: 11, img: XtoolsLogo as any,      url: "https://www.xtool.com" },
  { name: "Stürmer",        id: 12, img: SturmerLogo as any,     url: "https://www.stuermer-machines.com" },
  { name: "Seabery",        id: 13, img: SeaberyLogo as any,     url: "https://seaberyat.com" },
  { name: "Bedrunka+Hirth", id: 14, img: BedrunkaHirthLogo as any, url: "https://www.bedrunka-hirth.de/en-de" },
  { name: "Gima",           id: 15, img: GimaLogo as any,        url: "https://www.gimaitaly.com" },
  { name: "Databox",        id: 16, img: DataboxLogo as any },
  { name: "Auxilab",        id: 17, img: AuxilabLogo as any,     url: "https://www.auxilab.es/en" },
];

export function PartnersSection() {
  const [columnCount, setColumnCount] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setColumnCount(4);
      } else {
        setColumnCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 bg-[#e2e2e2]" data-navbar-section="light">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
          <div className="flex items-center gap-6 w-full max-w-2xl">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-400 to-gray-400"></div>
            <GradientHeading variant="secondary" size="sm" weight="semi">
              Nossas Marcas
            </GradientHeading>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gray-400 to-gray-400"></div>
          </div>

          <LogoCarousel columnCount={columnCount} logos={allLogos} />
        </div>
      </div>
    </section>
  );
}
