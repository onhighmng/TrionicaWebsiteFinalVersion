"use client"

import React from 'react';
import { getImageUrl } from '../../utils/images';
import auxilabLogo from "../../../imports/auxilab_logo.png";
import valuestekLogo from "../../../imports/valuestek_logo.webp";
import { LogoCloud } from '../ui/logo-cloud-3';

const logos = [
  { src: getImageUrl('wp-content/uploads/2019/03/lucas_nuelle_en-us.svg'),                                                    alt: "Lucas-Nülle" },
  { src: getImageUrl('wp-content/uploads/2019/03/logo_optika_italy_black.png'),                                               alt: "Optika Italy" },
  { src: getImageUrl('wp-content/uploads/2019/03/Logo_Matest_def-01-e1508228789861-1024x232.jpg'),                            alt: "Matest" },
  { src: "https://www.gunt.de/templates/gunt/img/gunt-hamburg.png",                                                           alt: "Gunt" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/PHYWE_Logo_mit_Claim_CMYK.svg",                                 alt: "Phywe" },
  { src: "https://www.kern-sohn.com/cosmoshop/shared/pix/logo.svg",                                                           alt: "Kern" },
  { src: "https://www.drapertools.com/content/draper-tools.png",                                                              alt: "Draper" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Rev_Official_Company_Logo.svg",                                 alt: "REV Robotics" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Canon_logo.svg",                                                alt: "Canon" },
  { src: valuestekLogo,                                                                                                        alt: "ValueStek" },
  { src: "https://dl.svgcdn.com/svg/cbi/xtool.svg",                                                                           alt: "xTool" },
  { src: "https://www.stuermer-machines.com/typo3conf/ext/stuermer_theme/Resources/Public/Images/swdm.svg",                    alt: "Stürmer" },
  { src: "https://seaberyat.com/wp-content/uploads/2025/09/Logo_2-Color-RGB_Seabery.png",                                     alt: "Seabery" },
  { src: "https://www.bedrunka-hirth.de/typo3conf/ext/bedrunka_hirth/Resources/Public/Images/bedrunka_hirth_logo.svg",        alt: "Bedrunka+Hirth" },
  { src: "https://www.gimaitaly.com/images/logo/logo-gima_footer.png",                                                        alt: "Gima" },
  { src: auxilabLogo,                                                                                                          alt: "Auxilab" },
];

export function PartnersSection() {
  return (
    <section className="relative pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 bg-black" data-navbar-section="dark">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">

          {/* Title row */}
          <div className="flex items-center gap-6 w-full max-w-2xl">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-600 to-gray-600" />
            <span className="text-white/70 font-semibold text-lg md:text-xl whitespace-nowrap tracking-wide">
              Nossas Marcas
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gray-600 to-gray-600" />
          </div>

          <LogoCloud
            logos={logos}
            gap={56}
            speed={60}
            speedOnHover={20}
            className="w-full [&_img]:brightness-0 [&_img]:invert [&_img]:opacity-60 [&_img:hover]:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}
