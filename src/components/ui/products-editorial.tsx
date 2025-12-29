"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ImageWithFallback } from "../figma/ImageWithFallback"

interface Product {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface ProductsEditorialProps {
  heading?: string;
  items: Product[];
  onNavigate: (page: string) => void;
}

export function ProductsEditorial({ heading = "NOSSOS PRODUTOS", items, onNavigate }: ProductsEditorialProps) {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleChange = (index: number) => {
    if (index === active || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const handlePrev = () => {
    const newIndex = active === 0 ? items.length - 1 : active - 1
    handleChange(newIndex)
  }

  const handleNext = () => {
    const newIndex = active === items.length - 1 ? 0 : active + 1
    handleChange(newIndex)
  }

  const current = items[active]

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      {heading && (
        <div className="flex items-center gap-2 mb-12">
          <span className="text-[#ea3a1c] text-3xl animate-spin">✱</span>
          <h2 className="text-white text-3xl font-medium uppercase">
            {heading}
          </h2>
        </div>
      )}

      {/* Large index number */}
      <div className="flex items-start gap-6 md:gap-8">
        <span
          className="text-[80px] md:text-[120px] font-extralight leading-none text-white/10 select-none transition-all duration-500"
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          {String(active + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 pt-4 md:pt-8">
          {/* Product Title with Navigation Arrows */}
          <div className="flex items-center justify-between mb-4">
            <h3
              className={`text-2xl md:text-4xl font-light leading-tight text-white tracking-tight transition-all duration-300 ${
                isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
              }`}
            >
              {current.title}
            </h3>
            
            {/* Navigation Arrows */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full border-2 border-white/40 text-white/80 hover:text-white hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border-2 border-white/40 text-white/80 hover:text-white hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <span className="text-xs text-white/60 tracking-widest uppercase">
                {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Product Description */}
          <p
            className={`text-base md:text-lg font-light leading-relaxed text-white/80 tracking-tight max-w-2xl transition-all duration-300 delay-75 ${
              isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            {current.summary}
          </p>

          {/* Product Image with hover reveal */}
          <div
            className={`mt-8 group cursor-pointer transition-all duration-300 delay-100 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => onNavigate(current.url)}
          >
            <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden ring-2 ring-white/10 group-hover:ring-white/30 transition-all duration-300">
              <ImageWithFallback
                src={current.image}
                alt={current.title}
                className="object-cover w-full h-full grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2354a2]/80 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
            </div>
            <button className="mt-4 text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300 flex items-center gap-2">
              Ver Mais
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation - vertical line selector */}
      <div className="mt-12 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {items.map((_, index) => (
              <button key={index} onClick={() => handleChange(index)} className="group relative py-4">
                <span
                  className={`block h-px transition-all duration-500 ease-out ${
                    index === active
                      ? "w-12 bg-white"
                      : "w-6 bg-white/20 group-hover:w-8 group-hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-xs text-white/60 tracking-widest uppercase">
            {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}