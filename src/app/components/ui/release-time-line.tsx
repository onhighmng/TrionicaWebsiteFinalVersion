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

export default function TimeLine_01({ entries = [] }: TimeLine_01Props) {
  return (
    <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
      {entries.map((entry, i) => {
        const isEven = i % 2 === 0;
        const num = String(i + 1).padStart(2, "0");

        const textBlock = (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center gap-6 py-4"
          >
            {/* Number + icon row */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-gray-400 tracking-widest">{num}</span>
              <div className="p-2 rounded-lg bg-gray-100 text-gray-500">
                <entry.icon className="h-4 w-4" />
              </div>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{entry.subtitle}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-gray-900 text-3xl md:text-4xl lg:text-[42px] leading-tight tracking-tight">
              {entry.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-md">
              {entry.description}
            </p>

            {/* Bullet items */}
            {entry.items && entry.items.length > 0 && (
              <ul className="space-y-2">
                {entry.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-500">
                    <div className="mt-[7px] h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Button */}
            {entry.button && (
              <div className="pt-2">
                <button
                  onClick={entry.button.onClick}
                  className="group inline-flex items-center gap-2 bg-[#0d1b2a] hover:bg-[#1a3040] text-white font-semibold text-sm md:text-base px-6 py-3.5 rounded-2xl transition-all duration-200"
                >
                  {entry.button.text}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            )}
          </motion.div>
        );

        const imageBlock = (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative w-full rounded-3xl overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            {entry.image ? (
              <img
                src={entry.image}
                alt={entry.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <entry.icon className="h-16 w-16 text-gray-400" />
              </div>
            )}
            {/* Subtle label overlay */}
            <div className="absolute bottom-4 left-4">
              <span className="bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {entry.title}
              </span>
            </div>
          </motion.div>
        );

        return (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
          >
            {isEven ? (
              <>
                <div>{textBlock}</div>
                <div>{imageBlock}</div>
              </>
            ) : (
              <>
                <div className="md:order-first order-last">{imageBlock}</div>
                <div>{textBlock}</div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
