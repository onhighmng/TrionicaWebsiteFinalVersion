import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import madeInMozambique from "../../imports/made_in_mozambique.png";
import isoInno from "../../imports/footer_iso_inno.png";

export function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-6 md:py-8 lg:px-8" data-navbar-section="light">
      <div className="container mx-auto max-w-7xl">
        {/* Rounded card container - much larger */}
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[32px] bg-[#1a1a1a] px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20 min-h-[500px] md:min-h-[600px] lg:min-h-[800px] flex flex-col">
          {/* Content */}
          <div className="relative z-10 grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-1 mb-auto">
            {/* Description and social icons */}
            <div className="pb-4 border-b border-gray-700 md:border-b-0 md:pb-0">
              <p className="mb-6 md:mb-8 text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                Soluções tecnológicas inovadoras em automação, segurança e energia para transformar o seu negócio. Líder em Moçambique com qualidade internacional.
              </p>
              
              {/* Social icons */}
              <div className="flex gap-2 md:gap-3">
                <a 
                  href="#" 
                  className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white transition-transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a 
                  href="#" 
                  className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a 
                  href="#" 
                  className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a 
                  href="#" 
                  className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white transition-transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Large "Trionica" text - centered and massive */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="text-[120px] sm:text-[160px] md:text-[220px] lg:text-[300px] xl:text-[400px] font-bold leading-none tracking-tighter text-[#2354a2] opacity-20">
              Trionica
            </div>
          </div>
          
          {/* Copyright at bottom */}
          <div className="relative z-10 mt-auto pt-8 md:pt-8 space-y-4 md:space-y-6">
            {/* Badges */}
            <div className="flex items-center justify-center gap-6">
              <img
                src={madeInMozambique}
                alt="Made in Mozambique"
                className="h-16 md:h-20 w-auto object-contain"
              />
              <img
                src={isoInno}
                alt="Empresa Certificada NM ISO 9001 / 14001 / 45001"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            {/* Copyright */}
            <p className="text-center text-[10px] md:text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Trionica Moçambique. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}