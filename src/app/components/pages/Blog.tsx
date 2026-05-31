import React from 'react';
import { PortfolioCarouselGrid } from '../ui/portfolio-carousel-grid';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { CTAFooterSection } from '../home/CTAFooterSection';
import imgUnion from "figma:asset/96f96b17c5fcf5f0537a7577cb0341d10c0558e2.png";
import imgUnion1 from "figma:asset/6a22570eeac45c73383df24364a1f8a0b34dc74d.png";
import imgUnion2 from "figma:asset/92a7f61b249712ca60bec2ba142e35515aae7b0a.png";
import imgUnion3 from "figma:asset/1b38e673a1e839e28a809a1a80db2c541b9236e9.png";
import mozambiqueFlag from "figma:asset/13696806984cbb3d9f84c25ed209563ac4ea660b.png";

interface BlogProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function Blog({ onNavigate }: BlogProps) {
  return (
    <div className="min-h-screen bg-[#eeeeee]">
      {/* Hero Section with Decorative Images */}
      <section className="relative bg-[#eeeeee] py-16 md:py-20 lg:py-28 overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center" data-navbar-section="light">
        {/* Decorative Corner Images */}
        {/* Top Left - Animate from left */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.8 }
          }}
          className="absolute left-0 top-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
        >
          <img 
            src={imgUnion} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Top Right - Animate from right */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.8 }
          }}
          className="absolute right-0 top-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
        >
          <img 
            src={imgUnion3} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Bottom Left - Animate from left */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.8 },
            delay: 0.15
          }}
          className="absolute left-0 bottom-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
        >
          <img 
            src={imgUnion1} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Bottom Right - Animate from right */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.8 },
            delay: 0.15
          }}
          className="absolute right-0 bottom-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
        >
          <img 
            src={imgUnion2} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -100px 0px" }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3
            }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Title with "Nacional" highlighted */}
            <h1 className="font-['Manrope'] font-medium text-[#0c1313] text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-10 lg:mb-12 tracking-tight flex items-center justify-center gap-3 md:gap-4 flex-wrap">
              <span>Construímos o Futuro</span>
              <img 
                src={mozambiqueFlag} 
                alt="Mozambique Flag" 
                className="inline-block h-8 md:h-10 lg:h-12 w-auto rounded-lg shadow-md"
              />
              <span className="text-[#2354a2] relative inline-block">
                Nacional
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#2354a2] transform -rotate-1 origin-left" style={{ top: 'calc(100% + 4px)' }}></span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="font-['Manrope'] text-[#5c6161] text-base md:text-lg lg:text-xl leading-relaxed mb-10 md:mb-12 lg:mb-16">
              Um portfólio de tecnologia de vanguarda ao serviço das instituições que lideram Moçambique.
            </p>

            {/* Scroll Indicator */}
            <motion.div
              className="inline-flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1
              }}
            >
              <span className="font-['Inter'] font-medium text-[#2354a2] text-sm tracking-wider uppercase">
                Role para Explorar
              </span>
              <ChevronDown className="w-6 h-6 text-[#2354a2]" strokeWidth={2.5} />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Projects Section */}
      <section className="relative w-full bg-[#eeeeee] py-12 md:py-16 lg:py-20">
        <PortfolioCarouselGrid />
      </section>
      
      {/* Footer */}
      <CTAFooterSection onNavigate={onNavigate} />
    </div>
  );
}