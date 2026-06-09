"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
    onClick?: () => void;
  };
};

export interface TimeLine_01Props {
  title?: string;
  description?: string;
  entries?: TimeLine_01Entry[];
  className?: string;
}

function SolutionCard({
  entry,
  index,
  delay,
  tall,
}: {
  entry: TimeLine_01Entry;
  index: number;
  delay?: number;
  tall?: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: delay ?? 0 }}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
        tall ? "h-[360px] md:h-[500px]" : "h-[280px] md:h-[340px]"
      }`}
      onClick={entry.button?.onClick}
    >
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

      {/* Top row */}
      <div className="absolute top-4 left-5 right-5 flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
          <entry.icon className="h-3 w-3 text-white" />
          <span className="text-white text-[10px] font-semibold uppercase tracking-widest leading-none">
            {entry.title}
          </span>
        </div>
        <span className="text-white/40 font-mono text-xs">{num}</span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className={`text-white font-bold leading-tight mb-1 ${tall ? "text-xl md:text-2xl lg:text-3xl" : "text-lg md:text-xl"}`}>
          {entry.title}
        </h3>
        <p className="text-white/60 text-xs md:text-sm leading-snug line-clamp-1">
          {entry.subtitle}
        </p>

        {/* Hover reveal */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
          <div className="overflow-hidden">
            <div className="mt-4 flex items-end justify-between gap-4">
              <p className="text-white/75 text-xs md:text-sm leading-relaxed line-clamp-3 flex-1">
                {entry.description}
              </p>
              {entry.button && (
                <button
                  className="shrink-0 flex items-center justify-center w-9 h-9 bg-white rounded-xl hover:bg-gray-100 transition-colors"
                  onClick={e => { e.stopPropagation(); entry.button?.onClick?.(); }}
                >
                  <ArrowUpRight className="h-4 w-4 text-gray-900" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TimeLine_01({ entries = [] }: TimeLine_01Props) {
  const row1 = entries.slice(0, 2);
  const row2 = entries.slice(2);

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      {/* Row 1: two equal tall cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {row1.map((entry, i) => (
          <SolutionCard key={i} entry={entry} index={i} delay={i * 0.08} tall />
        ))}
      </div>

      {/* Row 2: three equal shorter cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {row2.map((entry, i) => (
          <SolutionCard key={i} entry={entry} index={i + 2} delay={i * 0.08} />
        ))}
      </div>
    </div>
  );
}
