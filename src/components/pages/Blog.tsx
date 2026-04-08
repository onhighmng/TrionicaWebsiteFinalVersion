import React from 'react';
import { ProjectShowcase } from '../ui/project-showcase';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { CTAFooterSection } from '../home/CTAFooterSection';
import imgUnion from "figma:asset/96f96b17c5fcf5f0537a7577cb0341d10c0558e2.png";
import imgUnion1 from "figma:asset/6a22570eeac45c73383df24364a1f8a0b34dc74d.png";
import imgUnion2 from "figma:asset/92a7f61b249712ca60bec2ba142e35515aae7b0a.png";
import imgUnion3 from "figma:asset/1b38e673a1e839e28a809a1a80db2c541b9236e9.png";
import mozambiqueFlag from "figma:asset/13696806984cbb3d9f84c25ed209563ac4ea660b.png";
import LinearCard from '../ui/linear-card';
import ifpelacImg from "figma:asset/d31608eced1506e2b0ab6eaceeee99ad59045336.png";
import ifpelacPhotovoltaicsImg from "figma:asset/09e07fd8540ba2954e373cebd831c261450e9290.png";
import ifpelacAuditoriumImg from "figma:asset/a3f0a572434404c45f72420548a95089fa2c26b8.png";
import ifpelacLabImg from "figma:asset/911431dab07427c6c5e254f22141277304068c3d.png";
import seetpImg from "figma:asset/c6cbea9045063612fe5c5a15936e04e150fd2999.png";
import seetpCharriotImg from "figma:asset/76f837f3ff9dd9f12752bfe218560ec2b0590de3.png";
import seetpMuanzaImg from "figma:asset/b8b220ca7dc61ebdea5e72635f54722dd3eee016.png";
import seetpMaioImg from "figma:asset/623124a118fa40128a0ac8ecffca42d30d5a6d14.png";
import miremeInamiImg from "figma:asset/ca4fff8b45d7bec0b6435b71d15bb054bc931358.png";
import inamiLabImg from "figma:asset/914ec62016f50e49700817a6e2934f8e80de0bff.png";
import edmChimoioImg from "figma:asset/d8c2f4bd153362248e9a98aca02008fcc82f3634.png";
import kfwAutoImg from "figma:asset/2a99570188868ed389594a2ffcd50d68300547a0.png";
import kfwElectricalImg from "figma:asset/7a6cc51bda1f35be51ac13d61aa2ffa832625975.png";
import kfwSimulatorImg from "figma:asset/caae220e32033cd5256dd242d96655b7dec69c4a.png";

interface BlogProps {
  onNavigate: (page: string, projectId?: string) => void;
}

// Portfolio items for mobile linear card view
const portfolioItems = [
  {
    id: 1,
    url: { src: kfwAutoImg },
    title: "Projecto KFW / MCTESTP",
    description: "Fornecimento, instalação e pós-venda de sistemas de formação técnica e profissional (TVET) na Escola Profissional Familiar e Rural de Marrera",
    tags: ["FORMAÇÃO", "TVET"],
  },
  {
    id: 2,
    url: { src: "https://images.unsplash.com/photo-1757609908191-8924793da9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBzY2hvb2wlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNjY2Njc1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    title: "Escola Agrária de Marrera",
    description: "Instalação completa de laboratórios, oficinas e equipamentos agrícolas",
    tags: ["INSTALAÇÃO"],
  },
  {
    id: 3,
    url: { src: "https://images.unsplash.com/photo-1764114440403-4dd539cb582a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya3Nob3AlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzY2Njc1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    title: "Instituto Industrial de Inhambane",
    description: "Equipamentos e Montagem de oficinas e laboratórios nas áreas Electricidade, eletrónica, maquinação, serralharia, soldadura, canalização e construção civil",
    tags: ["OFICINAS"],
  },
  {
    id: 4,
    url: { src: "https://images.unsplash.com/photo-1672844825476-66737d85bfce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY2NTU3OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    title: "Escola Industrial e Comercial da Beira",
    description: "Equipamentos e montagem para oficinas de mecânica automóvel (chaparia, pintura, equipamentos de ensaio e inspeção de veículos)",
    tags: ["MECÂNICA"],
  },
  {
    id: 5,
    url: { src: "https://images.unsplash.com/photo-1750306957820-f778b67c4e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY2NjYyNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    title: "TOTAL",
    description: "Fornecimento e instalação de mobiliário de escritório em Muxara e Afungi",
    tags: ["FORNECIMENTO"],
  },
  {
    id: 6,
    url: { src: ifpelacImg },
    title: "IFPELAC",
    description: "Vários fornecimentos de equipamentos e ferramentas para centros de formação profissional em Maputo, Chimoio, Pemba e Tete.",
    tags: ["EQUIPAMENTOS"],
  },
  {
    id: 7,
    url: { src: edmChimoioImg },
    title: "EDM",
    description: "Instalação de oficinas e laboratórios de eletricidade, mecânica e testes de óleo.",
    tags: ["TESTES DE ÓLEO"],
  },
  {
    id: 8,
    url: { src: seetpImg },
    title: "SEETP",
    description: "Fornecimento de Equipamentos de frio, Electricidade, Carpintaria e Mobiliário de Dormitório, Oficina de gesso cortado, pintura e Oficina de Carpintaria, instalação, treinamento e assistência as seguintes instituições: Escola Industrial 1º de Maio (Equipamento de Frio); Instituto Industrial e Comercial Engº Filipe Jacinto Nyusi de Namáua; Instituto Médio Politécnico de Murrupula.",
    tags: ["CLIMATIZAÇÃO"],
  },
  {
    id: 9,
    url: { src: miremeInamiImg },
    title: "MIREME & INAMI",
    description: "Fornecimento de equipamento sísmico e de laboratório para geologia.",
    tags: ["SISMOLOGIA"],
  },
];

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
        {/* Mobile View - Linear Cards */}
        <motion.div 
          className="block md:hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <LinearCard items={portfolioItems} />
        </motion.div>
        
        {/* Desktop/Tablet View - Project Showcase */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "0px 0px -100px 0px" }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <ProjectShowcase onNavigate={onNavigate} />
        </motion.div>
      </section>
      
      {/* Footer */}
      <CTAFooterSection onNavigate={onNavigate} />
    </div>
  );
}