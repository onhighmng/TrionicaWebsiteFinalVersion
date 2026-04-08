"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

/**
 * Behavior: Only the card that is currently centered in the viewport is "open".
 * As you scroll, the active card expands to reveal its full content. Others stay collapsed.
 */
export default function TimeLine_01({
  title,
  description,
  entries = [],
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Create stable setters for refs inside map
  const setItemRef = (el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el;
  };
  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sentinelRefs.current.length) return;

    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="w-full">
        {title && description && (
          <div className="mx-auto max-w-5xl mb-12 px-4">
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl text-gray-900">
              {title}
            </h1>
            <p className="mb-6 text-base text-gray-600 md:text-lg">
              {description}
            </p>
          </div>
        )}

        <div className="mx-auto mt-8 md:mt-12 max-w-6xl space-y-12 md:space-y-16 px-4">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="relative flex flex-col gap-6 md:flex-row md:gap-12 lg:gap-16"
                ref={(el) => setItemRef(el, index)}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta column */}
                <div className="top-8 flex h-min w-full md:w-72 lg:w-80 shrink-0 items-center gap-4 md:sticky">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                      isActive ? "bg-[#2354a2] text-white" : "bg-gray-100 text-gray-400"
                    }`}>
                      <entry.icon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xl md:text-2xl lg:text-[28px] font-bold text-gray-900 tracking-tight leading-tight">
                        {entry.title}
                      </span>
                      <span className="text-sm md:text-base lg:text-lg text-gray-500 font-medium">
                        {entry.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invisible sentinel near the card title to measure proximity to viewport center */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                />

                {/* Content column */}
                <article
                  className={
                    "flex flex-col rounded-2xl border p-4 md:p-5 transition-all duration-300 flex-1 " +
                    (isActive
                      ? "border-gray-200 bg-gray-50 shadow-lg"
                      : "border-gray-100 bg-white")
                  }
                >
                  {entry.image && (
                    <img
                      src={entry.image}
                      alt={`${entry.title} visual`}
                      className="mb-5 w-full h-80 lg:h-96 rounded-xl object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="space-y-5">
                    {/* Header with improved typography */}
                    <div className="space-y-3">
                      <h2
                        className={
                          "text-lg font-semibold leading-tight tracking-tight md:text-xl transition-colors duration-200 " +
                          (isActive ? "text-gray-900" : "text-gray-700")
                        }
                      >
                        {entry.title}
                      </h2>
                      
                      {/* Improved description with better spacing */}
                      <p
                        className={
                          "text-sm leading-relaxed md:text-base transition-all duration-300 " +
                          (isActive 
                            ? "text-gray-600 line-clamp-none" 
                            : "text-gray-500 line-clamp-2")
                        }
                      >
                        {entry.description}
                      </p>
                    </div>

                    {/* Enhanced expandable content */}
                    <div
                      aria-hidden={!isActive}
                      className={
                        "grid transition-all duration-500 ease-out " +
                        (isActive 
                          ? "grid-rows-[1fr] opacity-100" 
                          : "grid-rows-[0fr] opacity-0")
                      }
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-5 pt-2">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rounded-xl border border-gray-200 bg-white p-5">
                              <ul className="space-y-3">
                                {entry.items.map((item, itemIndex) => (
                                  <li 
                                    key={itemIndex} 
                                    className="flex items-start gap-3 text-sm md:text-base text-gray-600"
                                  >
                                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2354a2] flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {entry.button && (
                            <div className="flex justify-end">
                              <Button 
                                variant="default" 
                                size="default"
                                className="group bg-[#FF6747] hover:bg-[#ff8566] text-white font-medium transition-all duration-200" 
                                onClick={entry.button.onClick}
                                asChild={!!entry.button.url}
                              >
                                {entry.button.url ? (
                                  <a href={entry.button.url} target="_blank" rel="noreferrer">
                                    {entry.button.text} 
                                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                  </a>
                                ) : (
                                  <>
                                    {entry.button.text} 
                                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                  </>
                                )}
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}