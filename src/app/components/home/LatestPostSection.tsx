import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Droplet, TreePine, Mountain, GraduationCap } from 'lucide-react';
import TimeLine_01, { TimeLine_01Entry } from '../ui/release-time-line';
import saudeImage from "figma:asset/c3e462d779bb19de3da9b06340a2d1b0429475ea.png";
import aguasImage from "../../../imports/image-21.png";
import ambienteImage from "figma:asset/d4a1c3843c3ab947a2fce919c2f975b36328a96f.png";
import minasImage from "figma:asset/f63e17a409d48cc3dad0703b061331bc8219a04e.png";
import educacaoImage from "../../../imports/image-22.png";

export function LatestPostSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const timelineEntries: TimeLine_01Entry[] = [
    {
      icon: GraduationCap,
      title: "Educação",
      subtitle: "Ensino • Laboratórios • Investigação",
      description: "Equipamentos didáticos, laboratoriais e de investigação para escolas, centros de formação, laboratórios e universidades.",
      items: [
        "Equipamentos didáticos de última geração",
        "Soluções laboratoriais completas",
        "Ferramentas de investigação científica",
        "Suporte técnico especializado",
        "Formação e capacitação"
      ],
      image: educacaoImage,
      button: {
        url: "",
        text: "Ver mais",
        onClick: () => onNavigate("ensino")
      }
    },
    {
      icon: Microscope,
      title: "Saúde",
      subtitle: "Hospitais • Clínicas • Laboratórios",
      description: "Equipamentos hospitalares, laboratoriais e de investigação para hospitais, unidades de saúde e laboratórios.",
      items: [
        "Equipamentos hospitalares certificados",
        "Instrumentação laboratorial de precisão",
        "Soluções de diagnóstico avançadas",
        "Manutenção e calibração",
        "Consultoria técnica especializada"
      ],
      image: saudeImage,
      button: {
        url: "",
        text: "Ver mais",
        onClick: () => onNavigate("saude")
      }
    },
    {
      icon: Droplet,
      title: "Águas",
      subtitle: "Tratamento • Análise • Monitorização",
      description: "Equipamento de medição, análise e controlo da qualidade da água para consumo e residuais",
      items: [
        "Medição de caudais e consumos",
        "Sistemas de controlo de perdas",
        "Medição e controlo da qualidade da água",
        "Telemetria"
      ],
      image: aguasImage,
      button: {
        url: "",
        text: "Ver mais",
        onClick: () => onNavigate("aguas")
      }
    },
    {
      icon: TreePine,
      title: "Ambiente",
      subtitle: "Água • Solo • Ar",
      description: "Sistemas de monitorização da água, solo e ar, unidades de tratamento de águas e águas residuais, instrumentação e sistemas de aquisição e registo de dados.",
      items: [
        "Medição e controlo da qualidade da Ar",
        "Medição e controlo da qualidade da Água",
        "Medição e controlo da qualidade dos Solos",
        "Medição e controlo do ruído e vibração",
        "Tratamento de água para consumo e residuais"
      ],
      image: ambienteImage,
      button: {
        url: "",
        text: "Ver mais",
        onClick: () => onNavigate("ambiente")
      }
    },
    {
      icon: Mountain,
      title: "Minas e Sismologia",
      subtitle: "Exploração • Análise • Segurança",
      description: "Equipamentos para prospeção, processamento mineiro, análise geológica e sísmica",
      items: [
        "Análise geológica e mineralógica",
        "Prospeção Geofísica",
        "Estações Sísmicas",
        "Equipamentos de processamento à escala laboratorial"
      ],
      image: minasImage,
      button: {
        url: "",
        text: "Ver mais",
        onClick: () => onNavigate("minas")
      }
    }
  ];

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20 overflow-hidden" data-navbar-section="light">
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Header Section */}
        <div className="flex flex-col gap-6 mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="capitalize font-['Manrope'] font-medium leading-[1.2] text-gray-600 text-sm md:text-base lg:text-[16px] tracking-[-1px]"
          >
            2026
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-['Manrope'] font-bold leading-[1.1] text-gray-900 text-2xl md:text-3xl lg:text-[36px] flex items-center gap-3 md:gap-4"
          >
            <span className="inline-block animate-spin text-[#245454] text-3xl md:text-4xl lg:text-[44px] leading-none">✱</span>
            <p className="mb-0 font-['Manrope'] tracking-tight">NOSSAS SOLUÇÕES</p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="font-['Manrope'] text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl font-medium"
          >
            Transformando laboratórios. Capacitando profissionais. Construindo o futuro de Moçambique.
          </motion.p>
        </div>

        {/* Timeline Component */}
        <TimeLine_01 entries={timelineEntries} />
      </div>
    </section>
  );
}