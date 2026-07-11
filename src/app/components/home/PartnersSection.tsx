"use client"

import React from 'react';
import auxilabLogo from "../../../imports/auxilab_logo.png";
import valueSTekLogo from "../../../imports/valuestek_logo.webp";
import guntLogo from "../../../imports/gunt_logo.png";
import phyweLogo from "../../../imports/phywe_logo.svg";
import seaberyLogo from "../../../imports/seabery_logo.png";
import bedrunkaLogo from "../../../imports/bedrunka_logo.svg";
import sturmerLogo from "../../../imports/sturmer_logo.svg";
import gimaLogo from "../../../imports/gima_logo.png";
import kernLogo from "../../../imports/kern_logo.svg";
import revLogo from "../../../imports/rev_logo.svg";
import canonLogo from "../../../imports/canon_logo.svg";
import lucasNulleLogo from "../../../imports/lucasnulle_logo.svg";
import { LogoCloud } from '../ui/logo-cloud-3';

const logos = [
  { src: lucasNulleLogo, alt: "Lucas-Nülle", boost: true },
  { src: phyweLogo,      alt: "Phywe" },
  { src: guntLogo,       alt: "Gunt", darkBg: true },
  { src: seaberyLogo,    alt: "Seabery" },
  { src: bedrunkaLogo,   alt: "Bedrunka+Hirth" },
  { src: sturmerLogo,    alt: "Stürmer", boost: true },
  { src: auxilabLogo,    alt: "Auxilab", boost: true },
  { src: gimaLogo,       alt: "Gima" },
  { src: valueSTekLogo,  alt: "ValueSTek" },
  { src: kernLogo,       alt: "Kern" },
  { src: revLogo,        alt: "REV Robotics" },
  { src: canonLogo,      alt: "Canon" },
];

export function PartnersSection() {
  return (
    <section className="relative pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 bg-[#2354a2]" data-navbar-section="dark">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">

          {/* Title row */}
          <div className="flex items-center gap-3 md:gap-6 w-full max-w-2xl">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/30 to-white/30" />
            <span className="text-white/70 font-semibold text-lg md:text-xl whitespace-nowrap tracking-wide">
              Nossas Marcas
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/30 to-white/30" />
          </div>

          <LogoCloud
            logos={logos}
            gap={56}
            speed={60}
            speedOnHover={60}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
