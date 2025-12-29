"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  category: string
  link: string
  image: string
}

const projects: Project[] = [
  {
    id: "kfw-mctestp",
    title: "Projecto KFW / MCTESTP",
    description: "Fornecimento, instalação e pós-venda de sistemas de formação técnica e profissional (TVET) na Escola Profissional Familiar e Rural de Marrera",
    category: "FORMAÇÃO (TVET)",
    link: "#",
    image: "https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBlZHVjYXRpb24lMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2NjY3NTUyOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "escola-agraria",
    title: "Escola Agrária de Marrera",
    description: "Instalação completa de laboratórios, oficinas e equipamentos agrícolas",
    category: "INSTALAÇÃO",
    link: "#",
    image: "https://images.unsplash.com/photo-1757609908191-8924793da9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBzY2hvb2wlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY2Njc1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1672844825476-66737d85bfce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY2NTU3OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1722312770621-e19e81430ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbmluZyUyMGNlbnRlcnxlbnwxfHx8fDE3NjY2NzU1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "edm",
    title: "EDM",
    description: "Instalação de oficinas e laboratórios de eletricidade, mecânica e testes de óleo.",
    category: "TESTES DE ÓLEO",
    link: "#",
    image: "https://images.unsplash.com/photo-1761071176091-7da66403d24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjY2NzU1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "seetp",
    title: "SEETP",
    description: "Fornecimento de Equipamentos de frio, Electricidade, Carpintaria e Mobiliário de Dormitório para várias instituições educacionais",
    category: "CLIMATIZAÇÃO",
    link: "#",
    image: "https://images.unsplash.com/photo-1590880795696-20c7dfadacde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50cnklMjB3b3Jrc2hvcCUyMHRvb2xzfGVufDF8fHx8MTc2NjY2NjM2OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "mireme-inami",
    title: "MIREME & INAMI",
    description: "Fornecimento de equipamento sísmico e de laboratório para geologia.",
    category: "SISMOLOGIA",
    link: "#",
    image: "https://images.unsplash.com/photo-1666536343362-e2b78d2490fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9sb2d5JTIwc2Vpc21pYyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjY2NzU1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

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
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  const handleClick = (projectId: string) => {
    onNavigate('portfolio-detail', projectId);
  }

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-[#2d2d2d]/60 text-sm font-medium tracking-[10.88px] uppercase mb-12">O Nosso Método</h2>

      <div className="mb-12">
        <h3 className="text-[#2d2d2d] text-5xl leading-[1.1] font-normal">
          Marcos de Impacto Estratégico.
        </h3>
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
              src={project.image}
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