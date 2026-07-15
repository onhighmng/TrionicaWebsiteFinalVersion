"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import ifpelacImg from "figma:asset/d31608eced1506e2b0ab6eaceeee99ad59045336.png"
import ifpelacPhotovoltaicsImg from "figma:asset/09e07fd8540ba2954e373cebd831c261450e9290.png"
import ifpelacNew1 from "../../../imports/ifpelac-1.jpeg"
import ifpelacNew2 from "../../../imports/ifpelac-2.jpeg"
import ifpelacNew3 from "../../../imports/ifpelac-3.jpeg"
import ifpelacNew4 from "../../../imports/ifpelac-4.jpeg"
import ifpelacNew5 from "../../../imports/ifpelac-5.jpeg"
import seetpImg from "figma:asset/c6cbea9045063612fe5c5a15936e04e150fd2999.png"
import seetpCharriotImg from "figma:asset/76f837f3ff9dd9f12752bfe218560ec2b0590de3.png"
import seetpMuanzaImg from "figma:asset/b8b220ca7dc61ebdea5e72635f54722dd3eee016.png"
import seetpMaioImg from "figma:asset/623124a118fa40128a0ac8ecffca42d30d5a6d14.png"
import miremeInamiImg from "figma:asset/ca4fff8b45d7bec0b6435b71d15bb054bc931358.png"
import inamiLabImg from "figma:asset/914ec62016f50e49700817a6e2934f8e80de0bff.png"
import edmChimoioImg from "figma:asset/d8c2f4bd153362248e9a98aca02008fcc82f3634.png"
import kfwAutoImg from "figma:asset/2a99570188868ed389594a2ffcd50d68300547a0.png"
import kfwElectricalImg from "figma:asset/7a6cc51bda1f35be51ac13d61aa2ffa832625975.png"
import kfwSimulatorImg from "figma:asset/caae220e32033cd5256dd242d96655b7dec69c4a.png"
import beiraElectricalImg from "figma:asset/b3f30dd8cd35f1b82e3eb506d8b5fef58233315d.png"
import beiraWorkbenchImg from "figma:asset/fd6611003a9c6c69b3cf38b49c30ed8166bec88a.png"
import beiraLabImg from "figma:asset/92cda19d2391c27f3d4929a37f6b93828a58c571.png"
import beiraWeldingImg from "figma:asset/2341ad20738b3658d08251e2506b5b8c5afa1e90.png"
import beiraWorkshopImg from "figma:asset/d81838a81be2a577384234692bc66e1c3399ae26.png"
import beiraComputerLabImg from "figma:asset/e8f1981e50c1c56a3554a03b4ff74c2d40a5404e.png"
import marreraImg1 from "../../../imports/marrera-1.jpeg"
import marreraImg2 from "../../../imports/marrera-2.jpeg"
import marreraImg4 from "../../../imports/marrera-4.jpeg"
import marreraImg5 from "../../../imports/marrera-5.jpeg"
import marreraImg6 from "../../../imports/marrera-6.jpeg"
import edmImg1 from "../../../imports/portfolio-edm-1.jpg"
import edmImg2 from "../../../imports/portfolio-edm-2.jpg"
import edmImg3 from "../../../imports/portfolio-edm-3.jpg"
import edmImg4 from "../../../imports/portfolio-edm-4.jpg"
import edmImg5 from "../../../imports/portfolio-edm-5.jpg"
import edmImg6 from "../../../imports/portfolio-edm-6.jpg"

import fipagImg1 from "../../../imports/fipag-1.jpeg"
import fipagImg2 from "../../../imports/fipag-2.jpeg"
import fipagImg3 from "../../../imports/fipag-3.jpeg"
import fipagImg4 from "../../../imports/fipag-4.jpeg"
import fipagImg5 from "../../../imports/fipag-5.jpeg"
import fipagImg6 from "../../../imports/fipag-6.jpeg"
import univImg1 from "../../../imports/portfolio-unirovuma-1.jpg"
import univImg2 from "../../../imports/portfolio-unirovuma-2.jpg"
import univImg3 from "../../../imports/portfolio-unirovuma-3.jpg"
import univImg4 from "../../../imports/portfolio-unirovuma-4.jpg"
import incmImg1 from "../../../imports/portfolio-incm-1.jpg"
import incmImg2 from "../../../imports/portfolio-incm-2.jpg"
import incmImg3 from "../../../imports/portfolio-incm-3.jpg"
import politImg1 from "../../../imports/portfolio-politecnica-1.jpg"
import politImg2 from "../../../imports/portfolio-politecnica-2.jpg"
import politImg3 from "../../../imports/portfolio-politecnica-3.jpg"
import inhambaneImg1 from "../../../imports/portfolio-inhambane-1.jpg"
import inhambaneImg2 from "../../../imports/portfolio-inhambane-2.jpg"
import inhambaneImg3 from "../../../imports/portfolio-inhambane-3.jpg"

interface Project {
  id: string
  title: string
  description: string
  category: string
  images: string[]
  project?: string
}

const projects: Project[] = [
  {
    id: "escola-agraria",
    title: "Escola Agrária de Marrera",
    description: "Instalação completa de laboratórios, oficinas e equipamentos agrícolas",
    category: "INSTALAÇÃO",
    project: "Projecto KFW/MCTESTP",
    images: [marreraImg1, marreraImg2, marreraImg5, marreraImg6, marreraImg4],
  },
  {
    id: "instituto-inhambane",
    title: "Instituto Industrial e Comercial Eduardo Mondlane (Inhambane)",
    description: "Equipamentos e Montagem de oficinas e laboratórios nas áreas Electricidade, eletrónica, maquinação, serralharia, soldadura, canalização e construção civil",
    category: "OFICINAS",
    project: "Projecto KFW/MCTESTP",
    images: [inhambaneImg3, inhambaneImg1, inhambaneImg2],
  },
  {
    id: "escola-beira",
    title: "Escola Industrial e Comercial da Beira",
    description: "Equipamentos e montagem para oficinas de mecânica automóvel (chaparia, pintura, equipamentos de ensaio e inspeção de veículos)",
    category: "MECÂNICA",
    project: "Projecto KFW/MCTESTP",
    images: [beiraElectricalImg, beiraWorkbenchImg, beiraWorkshopImg, beiraLabImg, beiraComputerLabImg, beiraWeldingImg],
  },
  {
    id: "geracao-edm",
    title: "Academia EDM",
    description: "Fornecimento e instalação de equipamentos de formação técnica e profissional para a Electricidade de Moçambique",
    category: "FORMAÇÃO TÉCNICA",
    images: [edmChimoioImg, edmImg5, edmImg4, edmImg6, edmImg1, edmImg2, edmImg3],
  },
  {
    id: "unirovuma",
    title: "Universidade Rovuma",
    description: "Registo fotográfico do fornecimento e instalação de mobiliário universitário na Universidade Rovuma",
    category: "MOBILIÁRIO",
    images: [univImg3, univImg2, univImg1, univImg4],
  },
  {
    id: "ginasio-incm",
    title: "Ginásio INCM",
    description: "Fornecimento e instalação de equipamentos desportivos no ginásio do Instituto da Casa da Moeda",
    category: "DESPORTO",
    images: [incmImg2, incmImg1, incmImg3],
  },
  {
    id: "politecnica-desporto",
    title: "Universidade Politécnica",
    description: "Equipamentos desportivos para a Universidade Politécnica de Moçambique",
    category: "DESPORTO",
    images: [politImg2, politImg1, politImg3],
  },
  {
    id: "ifpelac",
    title: "IFPELAC",
    description: "Vários fornecimentos de equipamentos e ferramentas para centros de formação profissional em Maputo, Chimoio, Pemba e Tete.",
    category: "EQUIPAMENTOS",
    images: [ifpelacImg, ifpelacPhotovoltaicsImg, ifpelacNew1, ifpelacNew2, ifpelacNew3, ifpelacNew4, ifpelacNew5],
  },

  {
    id: "seetp",
    title: "SEETP",
    description: "Fornecimento de Equipamentos de frio, Electricidade, Carpintaria e Mobiliário de Dormitório, Oficina de gesso cortado, pintura e Oficina de Carpintaria, instalação, treinamento e assistência as seguintes instituições: Escola Industrial 1º de Maio (Equipamento de Frio); Instituto Industrial e Comercial Engº Filipe Jacinto Nyusi de Namáua; Instituto Médio Politécnico de Murrupula.",
    category: "CLIMATIZAÇÃO",
    images: [seetpMuanzaImg, seetpMaioImg, seetpImg, seetpCharriotImg],
  },
  {
    id: "mireme-inami",
    title: "MIREME & INAMI",
    description: "Fornecimento de equipamento sísmico e de laboratório para geologia.",
    category: "SISMOLOGIA",
    images: [miremeInamiImg, inamiLabImg],
  },
  {
    id: "fipag",
    title: "FIPAG",
    description: "Fornecimento de equipamentos de monitorização e análise de qualidade da água para o Fundo de Investimento e Património do Abastecimento de Água.",
    category: "ÁGUAS",
    images: [fipagImg2, fipagImg6, fipagImg3, fipagImg4, fipagImg5, fipagImg1],
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextImage = () => {
    setDirection(1)
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setDirection(-1)
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Carousel */}
      <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden group">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Navigation Arrows - Only show if multiple images */}
        {project.images.length > 1 && (
          <>
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-[#2354a2] text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
          {project.category}
        </div>

      </div>

      {/* Project Info */}
      <div className="p-6">
        {project.project && (
          <p className="text-sm font-semibold text-[#2354a2] uppercase tracking-wide mb-1">
            {project.project}
          </p>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}

export function PortfolioCarouselGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-[#2354a2] text-sm font-semibold tracking-[8px] uppercase mb-4">
          Nossos Projetos
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Soluções Implementadas em Moçambique
        </h3>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Conheça alguns dos projectos realizados pela TRIÓNICA em instituições de ensino, indústria, energia, mineração e formação técnica profissional
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}