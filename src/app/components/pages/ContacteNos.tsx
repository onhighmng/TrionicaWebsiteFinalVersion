import React from 'react';
import { getImageUrl } from '../../utils/images';
import { MapPin, Mail, Phone } from 'lucide-react';
import Frame27 from '../../imports/Frame27';
import Frame160 from '../../imports/Frame160';
import Frame162 from '../../imports/Frame162';

export function ContacteNos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - All Devices */}
      <section className="relative w-full bg-[#0046a2] pt-24 md:pt-32 pb-12 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h1 className="font-['Epilogue:Medium',sans-serif] font-medium text-white text-[32px] md:text-[48px] lg:text-[56px] leading-[1.2] mb-6 md:mb-8">
            Vamos Construir o Futuro Juntos
          </h1>
          
          {/* Description */}
          <p className="font-['Public_Sans:Regular',sans-serif] text-[#d4d4d4] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.3] mb-12 md:mb-16 max-w-3xl">
            Entre em contacto connosco para explorar soluções tecnológicas personalizadas para as necessidades da sua instituição.
          </p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {/* Address */}
            <div className="flex flex-col gap-2">
              <p className="font-['DM_Sans:Regular',sans-serif] text-[#fdfdfd] text-[14px] md:text-[16px] mb-1">
                Endereço
              </p>
              <p className="font-['Epilogue:Medium',sans-serif] font-medium text-[#d4d4d4] text-[18px] md:text-[20px] lg:text-[22px] leading-[1.3]">
                Bairro da Costa do Sol<br />
                Av. Major General Cândido Mondlane, Nº 2007<br />
                Maputo, Moçambique
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <p className="font-['DM_Sans:Regular',sans-serif] text-[#fdfdfd] text-[14px] md:text-[16px] mb-1">
                E-mail
              </p>
              <a 
                href="mailto:geral@trionicamz.com"
                className="font-['Epilogue:Medium',sans-serif] font-medium text-[#d4d4d4] text-[18px] md:text-[20px] lg:text-[22px] hover:text-white transition-colors break-words"
              >
                geral@trionicamz.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <p className="font-['DM_Sans:Regular',sans-serif] text-[#fdfdfd] text-[14px] md:text-[16px] mb-1">
                Telefone
              </p>
              <div className="space-y-2">
                <a 
                  href="tel:+258846974444"
                  className="block font-['Epilogue:Medium',sans-serif] font-medium text-[#d4d4d4] text-[18px] md:text-[20px] lg:text-[22px] hover:text-white transition-colors"
                >
                  (+258) 84/86 69 74 444
                </a>
                <a 
                  href="tel:+258820660201"
                  className="block font-['Epilogue:Medium',sans-serif] font-medium text-[#d4d4d4] text-[18px] md:text-[20px] lg:text-[22px] hover:text-white transition-colors"
                >
                  (+258) 82 06 60 201
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-2">
              <p className="font-['DM_Sans:Regular',sans-serif] text-[#fdfdfd] text-[14px] md:text-[16px] mb-1">
                Horário
              </p>
              <p className="font-['Epilogue:Medium',sans-serif] font-medium text-[#d4d4d4] text-[18px] md:text-[20px] lg:text-[22px] leading-[1.3]">
                Segunda - Sexta<br />
                08:00 - 17:00<br />
                Sábado<br />
                09:00 - 13:00
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px] rounded-[20px] md:rounded-[32px] lg:rounded-[40px] overflow-hidden">
            <Frame162 />
          </div>
        </div>
      </section>
      
    </div>
  );
}