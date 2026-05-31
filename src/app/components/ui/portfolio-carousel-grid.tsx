"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import ifpelacImg from "figma:asset/d31608eced1506e2b0ab6eaceeee99ad59045336.png"
import ifpelacPhotovoltaicsImg from "figma:asset/09e07fd8540ba2954e373cebd831c261450e9290.png"
import ifpelacAuditoriumImg from "figma:asset/a3f0a572434404c45f72420548a95089fa2c26b8.png"
import ifpelacLabImg from "figma:asset/911431dab07427c6c5e254f22141277304068c3d.png"
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
import marreraMicroscopeLabImg from "figma:asset/df2b8dd20bbf5f2fe20efb3edc47e9a41f00dd68.png"
import marreraGreenLabImg from "figma:asset/3e4a1e8e86ce36c4df56c8835c50af2c71e61eb8.png"
import marreraComputerRoomImg from "figma:asset/c4cffa4a696d8e0e939513daf8b06af4bdf3f09c.png"
import marreraKitchenImg from "figma:asset/7c0ef6560415d15cf19e405480f124b0deee80ff.png"

interface Project {
  id: string
  title: string
  description: string
  category: string
  images: string[]
}

const projects: Project[] = [
  {
    id: "kfw-mctestp",
    title: "Projecto KFW / MCTESTP",
    description: "Fornecimento, instalação e pós-venda de sistemas de formação técnica e profissional (TVET) na Escola Profissional Familiar e Rural de Marrera",
    category: "FORMAÇÃO (TVET)",
    images: [kfwAutoImg, kfwElectricalImg, kfwSimulatorImg],
  },
  {
    id: "escola-agraria",
    title: "Escola Agrária de Marrera",
    description: "Instalação completa de laboratórios, oficinas e equipamentos agrícolas",
    category: "INSTALAÇÃO",
    images: [marreraMicroscopeLabImg, marreraGreenLabImg, marreraComputerRoomImg, marreraKitchenImg],
  },
  {
    id: "instituto-inhambane",
    title: "Instituto Industrial de Inhambane",
    description: "Equipamentos e Montagem de oficinas e laboratórios nas áreas Electricidade, eletrónica, maquinação, serralharia, soldadura, canalização e construção civil",
    category: "OFICINAS",
    images: ["https://images.unsplash.com/photo-1764114440403-4dd539cb582a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya3Nob3AlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzY2Njc1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
  },
  {
    id: "escola-beira",
    title: "Escola Industrial e Comercial da Beira",
    description: "Equipamentos e montagem para oficinas de mecânica automóvel (chaparia, pintura, equipamentos de ensaio e inspeção de veículos)",
    category: "MECÂNICA",
    images: [beiraElectricalImg, beiraWorkbenchImg, beiraLabImg, beiraWeldingImg, beiraWorkshopImg, beiraComputerLabImg],
  },
  {
    id: "total",
    title: "TOTAL",
    description: "Fornecimento e instalação de mobiliário de escritório em Muxara e Afungi",
    category: "FORNECIMENTO",
    images: ["https://images.unsplash.com/photo-1750306957820-f778b67c4e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY2NjYyNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"],
  },
  {
    id: "ifpelac",
    title: "IFPELAC",
    description: "Vários fornecimentos de equipamentos e ferramentas para centros de formação profissional em Maputo, Chimoio, Pemba e Tete.",
    category: "EQUIPAMENTOS",
    images: [ifpelacImg, ifpelacPhotovoltaicsImg, ifpelacAuditoriumImg, ifpelacLabImg],
  },
  {
    id: "edm",
    title: "EDM",
    description: "Instalação de oficinas e laboratórios de eletricidade, mecânica e testes de óleo.",
    category: "TESTES DE ÓLEO",
    images: [edmChimoioImg],
  },
  {
    id: "seetp",
    title: "SEETP",
    description: "Fornecimento de Equipamentos de frio, Electricidade, Carpintaria e Mobiliário de Dormitório, Oficina de gesso cortado, pintura e Oficina de Carpintaria, instalação, treinamento e assistência as seguintes instituições: Escola Industrial 1º de Maio (Equipamento de Frio); Instituto Industrial e Comercial Engº Filipe Jacinto Nyusi de Namáua; Instituto Médio Politécnico de Murrupula.",
    category: "CLIMATIZAÇÃO",
    images: [seetpImg, seetpCharriotImg, seetpMuanzaImg, seetpMaioImg],
  },
  {
    id: "mireme-inami",
    title: "MIREME & INAMI",
    description: "Fornecimento de equipamento sísmico e de laboratório para geologia.",
    category: "SISMOLOGIA",
    images: [miremeInamiImg, inamiLabImg],
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