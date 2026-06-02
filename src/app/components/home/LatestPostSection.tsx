import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Droplet, TreePine, Mountain, GraduationCap } from 'lucide-react';
import TimeLine_01, { TimeLine_01Entry } from '../ui/release-time-line';
import saudeImage from "figma:asset/c3e462d779bb19de3da9b06340a2d1b0429475ea.png";
import aguasImage from "../../../imports/image-21.png";
import ambienteImage from "../../../imports/card-ambiente.jpg";
import minasImage from "../../../imports/card-minas.jpg";
import educacaoImage from "../../../imports/image-22.png";

export function LatestPostSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const timelineEntries: TimeLine_01Entry[] = [
    {
      icon: GraduationCap,
      title: "Ensino & Investigação",
      subtitle: "Soluções tecnológicas para instituições públicas, privadas e centros de formação",
      description: "Fornecimento de equipamentos didáticos, laboratoriais, oficinais, científicos, de investigação e de simulação para instituições públicas, privadas, centros de formação, laboratórios e universidades em Moçambique.",
      items: [
        "Equipamentos didáticos e científicos",
        "Equipamentos e Ferramentas para Ciências Naturais, Eletrotecnia/Electrónica, Mecânica, Geofísica, Engenharia Civil e Agricultura",
        "Equipamentos Tecnológicos para Petróleo & Gás",
        "Simulação e treinamento avançado",
        "Quadros e painéis interativos",
        "Mobiliário escolar, universitário, laboratorial e oficinal",
        "Soluções para Desporto"
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
      description: "Fornecimento de Equipamentos hospitalares, laboratoriais e de investigação para instituições da área da saúde.",
      items: [
        "Equipamentos e mobiliário hospitalar",
        "Raio-X, Tomografia Computorizada (CT) e Ressonância Magnética (MRI)",
        "Equipamentos para Centros de Diagnóstico",
        "Tele-radiologia",
        "Sistemas automáticos de apoio à decisão clínica",
        "Soluções avançadas para deteção da tuberculose, incluindo OneStopTB"
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
      description: "Fornecimento de Equipamentos e soluções para análise, monitorização e tratamento da qualidade da água",
      items: [
        "Caudalímetros (controlo de perdas)",
        "Contadores mecânicos, eletrónicos e pré-pagos",
        "Kits de análise da qualidade da água",
        "Data loggers e telemetria",
        "Sistemas de monitorização de recursos hídricos",
        "Sistemas de tratamento — desinfeção, dessalinização, ETARs",
        "Instrumentação e medidores de nível e precipitação"
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
      subtitle: "Controlo Ambiental • Solo • Ar",
      description: "Equipamentos e soluções para monitorização da qualidade do solo, ar e gestão de dados ambientais",
      items: [
        "Estações meteorológicas",
        "Equipamentos de análise da qualidade do ar",
        "Medição e controlo da qualidade dos Solos",
        "Medição e controlo do ruído e vibração (Sonómetro e vibrómetros)",
        "Data loggers",
        "Sondas oceanográficas"
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
        "Equipamentos de geofísica e estações sísmicas",
        "Equipamentos de diagrafia para águas subterrâneas",
        "AAS, Magnetómetros, Gravimetria, Resistividade e Sísmica",
        "Microscopia e produção de lâminas",
        "Equipamentos para análise de rochas e agregados",
        "Tecnologia XRF e XRD",
        "Sistemas de processamento"
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
            Fornecemos Soluções Tecnológicas Integradas para o Desenvolvimento de Moçambique
          </motion.p>
        </div>

        {/* Timeline Component */}
        <TimeLine_01 entries={timelineEntries} />
      </div>
    </section>
  );
}