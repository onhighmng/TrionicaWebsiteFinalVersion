"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
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
  link: string
  image: string | string[]
}

const projects: Project[] = [
  {
    id: "kfw-mctestp",
    title: "Projecto KFW / MCTESTP",
    description: "Fornecimento, instalação e pós-venda de sistemas de formação técnica e profissional (TVET) na Escola Profissional Familiar e Rural de Marrera",
    category: "FORMAÇÃO (TVET)",
    link: "#",
    image: [kfwAutoImg, kfwElectricalImg, kfwSimulatorImg],
  },
  {
    id: "escola-agraria",
    title: "Escola Agrária de Marrera",
    description: "Instalação completa de laboratórios, oficinas e equipamentos agrícolas",
    category: "INSTALAÇÃO",
    link: "#",
    image: [marreraMicroscopeLabImg, marreraGreenLabImg, marreraComputerRoomImg, marreraKitchenImg],
  },
  {
    id: "instituto-inhambane",
    title: "Instituto Industrial de Inhambane",
    description: "Equipamentos e Montagem de oficinas e laboratórios nas áreas Electricidade, eletrónica, maquinação, serralharia, soldadura, canalização e construção civil",
    category: "OFICINAS",
    link: "#",
    image: "https://images.unsplash.com/photo-1764114440403-4dd539cb582a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya3Nob3AlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzY2Njc1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "escola-beira",
    title: "Escola Industrial e Comercial da Beira",
    description: "Equipamentos e montagem para oficinas de mecânica automóvel (chaparia, pintura, equipamentos de ensaio e inspeção de veículos)",
    category: "MECÂNICA",
    link: "#",
    image: [beiraElectricalImg, beiraWorkbenchImg, beiraLabImg, beiraWeldingImg, beiraWorkshopImg, beiraComputerLabImg],
  },
  {
    id: "total",
    title: "TOTAL",
    description: "Fornecimento e instalação de mobiliário de escritório em Muxara e Afungi",
    category: "FORNECIMENTO",
    link: "#",
    image: "https://images.unsplash.com/photo-1750306957820-f778b67c4e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY2NjYyNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ifpelac",
    title: "IFPELAC",
    description: "Vários fornecimentos de equipamentos e ferramentas para centros de formação profissional em Maputo, Chimoio, Pemba e Tete.",
    category: "EQUIPAMENTOS",
    link: "#",
    image: [ifpelacImg, ifpelacPhotovoltaicsImg, ifpelacAuditoriumImg, ifpelacLabImg],
  },
  {
    id: "edm",
    title: "EDM",
    description: "Instalação de oficinas e laboratórios de eletricidade, mecânica e testes de óleo.",
    category: "TESTES DE ÓLEO",
    link: "#",
    image: edmChimoioImg,
  },
  {
    id: "seetp",
    title: "SEETP",
    description: "Fornecimento de Equipamentos de frio, Electricidade, Carpintaria e Mobiliário de Dormitório, Oficina de gesso cortado, pintura e Oficina de Carpintaria, instalação, treinamento e assistência as seguintes instituições: Escola Industrial 1º de Maio (Equipamento de Frio); Instituto Industrial e Comercial Engº Filipe Jacinto Nyusi de Namáua; Instituto Médio Politécnico de Murrupula.",
    category: "CLIMATIZAÇÃO",
    link: "#",
    image: [seetpImg, seetpCharriotImg, seetpMuanzaImg, seetpMaioImg],
  },
  {
    id: "mireme-inami",
    title: "MIREME & INAMI",
    description: "Fornecimento de equipamento sísmico e de laboratório para geologia.",
    category: "SISMOLOGIA",
    link: "#",
    image: [miremeInamiImg, inamiLabImg],
  },
  {
    id: "marrera-labs",
    title: "Laboratórios de Marrera",
    description: "Laboratórios de Microscópio, Laboratório Verde e Sala de Computadores na Escola de Marrera",
    category: "LABORATÓRIOS",
    link: "#",
    image: [marreraMicroscopeLabImg, marreraGreenLabImg, marreraComputerRoomImg],
  },
  {
    id: "marrera-kitchen",
    title: "Cozinha de Marrera",
    description: "Instalação de cozinha na Escola de Marrera",
    category: "INSTALAÇÃO",
    link: "#",
    image: marreraKitchenImg,
  },
]

interface ProjectShowcaseProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function ProjectShowcase({ onNavigate }: ProjectShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const imageRotationRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  // Rotate images for projects with multiple images
  useEffect(() => {
    if (hoveredIndex !== null && imageRotationRef.current === null) {
      const project = projects[hoveredIndex]
      if (Array.isArray(project.image) && project.image.length > 1) {
        imageRotationRef.current = setInterval(() => {
          setCurrentImageIndex((prev) => (prev + 1) % project.image.length)
        }, 2500) // Change image every 2.5 seconds
      }
    }

    return () => {
      if (imageRotationRef.current) {
        clearInterval(imageRotationRef.current)
        imageRotationRef.current = null
      }
    }
  }, [hoveredIndex])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
    setCurrentImageIndex(0)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
    setCurrentImageIndex(0)
    if (imageRotationRef.current) {
      clearInterval(imageRotationRef.current)
      imageRotationRef.current = null
    }
  }

  const handleClick = (projectId: string) => {
    onNavigate('portfolio-detail', projectId);
  }

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <h2 className="text-[#2d2d2d]/60 text-sm font-medium tracking-[10.88px] uppercase mb-12">O Nosso Método</h2>

      <div className="mb-12">
        <h3 className="text-[#2d2d2d] text-5xl leading-[1.1] font-normal mb-6">
          Marcos de Impacto Estratégico.
        </h3>
        <p className="text-[#2d2d2d]/70 text-lg leading-relaxed max-w-3xl">
          A Triónica Moçambique Lda. tem participado em diversos projetos nacionais de grande impacto, incluindo:
        </p>
      </div>

      {/* Floating image preview */}
      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[280px] h-[180px] bg-gray-200 rounded-xl overflow-hidden">
          {projects.map((project, index) => (
            <img
              key={project.id}
              src={Array.isArray(project.image) ? project.image[currentImageIndex] : project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.1,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group block w-full text-left"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-6 border-t border-gray-200 transition-all duration-300 ease-out">
              {/* Background highlight on hover */}
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-gray-50 rounded-lg
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  {/* Category badge */}
                  <span className="text-[#A9C22F] text-xs tracking-[2px] uppercase mb-2 block">
                    {project.category}
                  </span>

                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2 mb-2">
                    <h4 className="text-[#2d2d2d] text-2xl tracking-tight">
                      <span className="relative">
                        {project.title}
                        {/* Animated underline */}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-px bg-[#FF6200]
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h4>

                    {/* Arrow that slides in */}
                    <ArrowUpRight
                      className={`
                        w-5 h-5 text-[#A9C22F]
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                    />
                  </div>

                  {/* Description with fade effect */}
                  <p
                    className={`
                      text-[#2d2d2d]/60 text-base leading-relaxed
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-[#2d2d2d]/80" : "text-[#2d2d2d]/60"}
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Project number badge */}
                <span
                  className={`
                    text-sm font-mono text-[#A9C22F] tabular-nums
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "text-[#A9C22F]" : "text-[#A9C22F]/60"}
                  `}
                >
                  [{String(index + 1).padStart(2, '0')}]
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom border for last item */}
        <div className="border-t border-gray-200" />
      </div>
    </section>
  )
}