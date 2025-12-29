import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-6 md:py-8 lg:px-8" data-navbar-section="light">
      <div className="container mx-auto max-w-7xl">
        {/* Rounded card container - much larger */}
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[32px] bg-[#1a1a1a] px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20 min-h-[500px] md:min-h-[600px] lg:min-h-[800px] flex flex-col">
          {/* Content */}
          <div className="relative z-10 grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-12 mb-auto">
            {/* Left column - Description and social icons */}
            <div className="lg:col-span-5 pb-4 border-b border-gray-700 md:border-b-0 md:pb-0">
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
            
            {/* Right columns - Navigation links */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:col-span-7">
              {/* Endereço */}
              <div className="pb-6 border-b border-gray-800 md:border-b-0 md:pb-0">
                <h3 className="mb-3 md:mb-4 text-sm md:text-base lg:text-lg uppercase tracking-wider text-white font-semibold">
                  📍 Endereço
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed">
                  Bairro da Costa do Sol<br />
                  Av. Major General Cândido Mondlane, Nº 2007<br />
                  Maputo, Moçambique
                </p>
              </div>
              
              {/* E-mail */}
              <div className="pb-6 border-b border-gray-800 md:border-b-0 md:pb-0">
                <h3 className="mb-3 md:mb-4 text-sm md:text-base lg:text-lg uppercase tracking-wider text-white font-semibold">
                  📧 E-mail
                </h3>
                <a 
                  href="mailto:geral@trionicamz.com"
                  className="text-sm md:text-base lg:text-lg text-gray-200 hover:text-white transition-colors break-all"
                >
                  geral@trionicamz.com
                </a>
              </div>
              
              {/* Contactos */}
              <div>
                <h3 className="mb-3 md:mb-4 text-sm md:text-base lg:text-lg uppercase tracking-wider text-white font-semibold">
                  📞 Contactos
                </h3>
                <a 
                  href="tel:+258846974444"
                  className="block text-sm md:text-base lg:text-lg text-gray-200 hover:text-white transition-colors mb-2"
                >
                  (+258) 84/86 69 74 444
                </a>
                <a 
                  href="tel:+258820660201"
                  className="block text-sm md:text-base lg:text-lg text-gray-200 hover:text-white transition-colors"
                >
                  (+258) 82 06 60 201
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
          
          {/* Newsletter and Copyright at bottom */}
          <div className="relative z-10 mt-auto pt-8 md:pt-8 space-y-4 md:space-y-6">
            {/* Newsletter */}
            <div className="mx-auto max-w-md w-full">
              <h3 className="mb-3 text-center text-xs md:text-sm uppercase tracking-wider text-white">
                Subscreva a nossa newsletter
              </h3>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="O seu email"
                  className="flex-1 rounded-full bg-white/10 px-4 py-2 md:py-2.5 text-xs md:text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white px-5 md:px-6 py-2 md:py-2.5 text-xs md:text-sm text-[#1a1a1a] transition-transform hover:scale-105 whitespace-nowrap"
                >
                  Subscrever
                </button>
              </form>
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