"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const IMG_PADDING = 12;

/* ─── Types ─────────────────────────────────────────────── */

type TextParallaxContentProps = {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: React.ReactNode;
};

type StickyImageProps = {
  imgUrl: string;
};

type OverlayCopyProps = {
  subheading: string;
  heading: string;
};

export type SolutionSectionProps = {
  imgUrl: string;
  subheading: string;
  heading: string;
  description: string;
  items: string[];
  onNavigate?: () => void;
};

/* ─── Core building blocks ───────────────────────────────── */

const StickyImage = ({ imgUrl }: StickyImageProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/60"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white px-4"
    >
      <p className="mb-2 text-center text-lg md:mb-4 md:text-2xl text-white/70 font-medium tracking-widest uppercase">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl tracking-tight">
        {heading}
      </p>
    </motion.div>
  );
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

/* ─── Solution content block ─────────────────────────────── */

const SolutionContent = ({
  description,
  items,
  onNavigate,
}: {
  description: string;
  items: string[];
  onNavigate?: () => void;
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="col-span-1 md:col-span-4">
      <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl leading-snug">
        O que fornecemos
      </h2>
    </div>
    <div className="col-span-1 md:col-span-8 flex flex-col gap-6">
      <p className="text-lg text-neutral-600 md:text-xl leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-neutral-600 text-base md:text-lg">
            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2354a2] shrink-0" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      {onNavigate && (
        <button
          onClick={onNavigate}
          className="group mt-2 w-full md:w-fit inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#2354a2]"
        >
          Ver mais
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      )}
    </div>
  </div>
);

/* ─── Exported full component ────────────────────────────── */

export const TextParallaxSolutions = ({
  solutions,
}: {
  solutions: SolutionSectionProps[];
}) => {
  return (
    <div className="bg-white">
      {solutions.map((s, i) => (
        <TextParallaxContent
          key={i}
          imgUrl={s.imgUrl}
          subheading={s.subheading}
          heading={s.heading}
        >
          <SolutionContent
            description={s.description}
            items={s.items}
            onNavigate={s.onNavigate}
          />
        </TextParallaxContent>
      ))}
    </div>
  );
};
