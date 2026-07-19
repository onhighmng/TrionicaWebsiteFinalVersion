import React from 'react';
import { LogoCloud } from '../ui/logo-cloud-3';

function makeSvgLogo(abbr: string, full: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="62"><text x="110" y="30" font-family="Arial Black,Arial,sans-serif" font-size="22" font-weight="900" text-anchor="middle" fill="#000">${abbr}</text><text x="110" y="48" font-family="Arial,sans-serif" font-size="8.5" text-anchor="middle" fill="#333">${full}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

const clientLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/8/87/The_World_Bank_logo.svg",                                                                           alt: "World Bank" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_of_the_World_Health_Organization.svg",                                                        alt: "WHO" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/7/71/UNICEF_logo_2016.svg",                                                                              alt: "UNICEF" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/e5/UNDP_Logo_2022.svg",                                                                                alt: "UNDP" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Deutsche_Gesellschaft_f%C3%BCr_Internationale_Zusammenarbeit_%28GIZ%29_GmbH_Logo.svg",             alt: "GIZ" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/MSF_Logo_without_tagline.svg",                                                                      alt: "MSF" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/9e/African_Development_Bank_logo.svg",                                                                 alt: "AfDB" },
  { src: makeSvgLogo("CVM", "Cruz Vermelha de Moçambique"),                      alt: "Cruz Vermelha" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/48/USAID_logo.svg",                                                                                   alt: "USAID" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/EU_flag.svg",                                                                                      alt: "União Europeia" },
  // Universidades moçambicanas
  { src: makeSvgLogo("UEM",        "Universidade Eduardo Mondlane"),          alt: "UEM" },
  { src: makeSvgLogo("UCM",        "Universidade Católica de Moçambique"),    alt: "UCM" },
  { src: makeSvgLogo("UP",         "Universidade Pedagógica"),                alt: "UP" },
  { src: makeSvgLogo("UNIZAMBEZE", "Universidade Zambeze"),                   alt: "UNIZAMBEZE" },
  { src: makeSvgLogo("UNIROVUMA",  "Universidade Rovuma"),                    alt: "UNIROVUMA" },
  { src: makeSvgLogo("UNILICUNGO", "Universidade Licungo"),                   alt: "UNILICUNGO" },
  { src: makeSvgLogo("UNILURIO",   "Universidade Lúrio"),                     alt: "UNILURIO" },
  { src: makeSvgLogo("UNISAVE",    "Universidade Save"),                      alt: "UNISAVE" },
  { src: makeSvgLogo("UNIPUNGUE",  "Universidade Púnguè"),                    alt: "UNIPUNGUE" },
  // Ministérios
  { src: makeSvgLogo("MISAU",  "Ministério da Saúde"),                                  alt: "MISAU" },
  { src: makeSvgLogo("MEC",    "Ministério da Educação e Cultura"),                      alt: "MEC" },
  { src: makeSvgLogo("MIREME", "Ministério dos Recursos Minerais e Energia"),            alt: "MIREME" },
  { src: makeSvgLogo("MDN",    "Ministério da Defesa Nacional"),                         alt: "MDN" },
  { src: makeSvgLogo("MAAP",   "Ministério da Agricultura, Ambiente e Pescas"),          alt: "MAAP" },
  { src: makeSvgLogo("MTL",    "Ministério dos Transportes e Logística"),                alt: "MTL" },
];

export function ClientsSection() {
  return (
    <section className="relative pt-12 md:pt-16 pb-6 md:pb-8 bg-black" data-navbar-section="dark">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">

          {/* Title row */}
          <div className="flex items-center gap-6 w-full max-w-2xl">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-600 to-gray-600" />
            <span className="text-white/70 font-semibold text-lg md:text-xl whitespace-nowrap tracking-wide">
              Nossos Clientes
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gray-600 to-gray-600" />
          </div>

          <LogoCloud
            logos={clientLogos}
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
