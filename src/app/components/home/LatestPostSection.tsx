import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import saudeImage from "../../../imports/card-saude.jpg";
import aguasImage from "../../../imports/image-21.png";
import ambienteImage from "../../../imports/card-ambiente.jpg";
import minasImage from "../../../imports/card-minas.jpg";
import educacaoImage from "../../../imports/image-22.png";

const solutions = [
  {
    id: "ensino",
    image: educacaoImage,
    title: "Ensino & Investigação",
    description: "Equipamentos didáticos, laboratoriais e científicos para instituições públicas, privadas e centros de formação em Moçambique.",
    tags: ["Laboratórios", "Universidades", "Formação"],
  },
  {
    id: "saude",
    image: saudeImage,
    title: "Saúde",
    description: "Equipamentos hospitalares e de diagnóstico para clínicas, hospitais e centros de saúde em todo o território nacional.",
    tags: ["Hospitais", "Diagnóstico", "Imagiologia"],
  },
  {
    id: "aguas",
    image: aguasImage,
    title: "Águas",
    description: "Soluções completas para análise, monitorização e tratamento da qualidade da água.",
    tags: ["Monitorização", "Tratamento", "Telemetria"],
  },
  {
    id: "ambiente",
    image: ambienteImage,
    title: "Ambiente",
    description: "Equipamentos para monitorização da qualidade do solo, ar e gestão de dados ambientais.",
    tags: ["Qualidade do Ar", "Solo", "Meteorologia"],
  },
  {
    id: "minas",
    image: minasImage,
    title: "Minas & Sismologia",
    description: "Equipamentos para prospeção, processamento mineiro, análise geológica e sísmica.",
    tags: ["Geofísica", "Sísmica", "XRF / XRD"],
  },
];

export function LatestPostSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white" data-navbar-section="light">

      {/* ── Header ─────────────────────────────────────────── */}
      <div className="px-6 md:px-10 lg:px-14 pt-16 md:pt-20 pb-8 md:pb-10">
        <p className="text-[#2354a2] text-[11px] font-bold uppercase tracking-[0.22em] mb-3">
          Áreas de Actuação
        </p>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-bold text-gray-900 text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
            Nossas Soluções
          </h2>
          <p className="text-gray-400 text-sm hidden md:block shrink-0 pb-1">
            Clique para explorar
          </p>
        </div>
      </div>

      {/* ── Desktop filmstrip ───────────────────────────────── */}
      <div className="hidden md:block px-6 md:px-10 lg:px-14 pb-16 md:pb-20">
        <div className="flex gap-2.5 lg:gap-3" style={{ height: '66vh' }}>
          {solutions.map((s, i) => {
            const isActive = i === active;
            return (
              <div
                key={s.id}
                onClick={() => setActive(i)}
                className="relative overflow-hidden rounded-2xl cursor-pointer min-w-0 select-none"
                style={{
                  flex: isActive ? 5 : 1,
                  transition: 'flex 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {/* Background image */}
                <img
                  src={s.image}
                  alt={s.title}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{
                    transform: isActive ? 'scale(1)' : 'scale(1.1)',
                    transition: 'transform 0.7s ease',
                  }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: isActive
                      ? 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)'
                      : 'rgba(0,0,0,0.52)',
                    transition: 'background 0.5s ease',
                  }}
                />

                {/* Number badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span
                    className="font-mono text-xs font-bold tracking-widest"
                    style={{
                      color: isActive ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.35)',
                      transition: 'color 0.4s ease',
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Collapsed: vertical label */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center z-10"
                    >
                      <p
                        className="text-white font-bold text-[11px] tracking-[0.18em] uppercase whitespace-nowrap"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        {s.title}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded: content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.38, delay: 0.22, ease: 'easeOut' }}
                      className="absolute bottom-0 left-0 right-0 z-10 p-8 lg:p-10"
                    >
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {s.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold uppercase tracking-widest text-white/55 border border-white/18 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-[2.2rem] leading-tight mb-2.5">
                        {s.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-[28rem]">
                        {s.description}
                      </p>

                      {/* CTA */}
                      <button
                        onClick={e => { e.stopPropagation(); onNavigate(s.id); }}
                        className="inline-flex items-center gap-2 bg-white text-[#0d0d0d] text-sm font-bold px-5 py-2.5 rounded-full hover:bg-white/88 active:scale-95 transition-all duration-200"
                      >
                        Ver mais <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: horizontal scroll cards ────────────────── */}
      <div className="md:hidden pb-16">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-6 pb-2"
          style={{ scrollbarWidth: 'none' }}>
          {solutions.map((s, i) => (
            <div
              key={s.id}
              onClick={() => onNavigate(s.id)}
              className="relative shrink-0 overflow-hidden rounded-2xl cursor-pointer snap-center"
              style={{ width: '78vw', height: '68vw' }}
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 55%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white/40 font-mono text-[10px] mb-1">0{i + 1}</p>
                <h3 className="text-white font-bold text-lg leading-tight mb-2">{s.title}</h3>
                <span className="inline-flex items-center gap-1 text-white/70 text-xs font-semibold">
                  Ver mais <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
