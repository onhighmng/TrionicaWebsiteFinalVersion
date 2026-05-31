"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, FlaskConical, Wrench, Building2, Trophy, Cpu, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

export type TimeLineEntry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface TimeLineProps {
  title?: string;
  description?: string;
  entries?: TimeLineEntry[];
  className?: string;
}

export default function EnsinoTimeLine({
  title,
  description,
  entries = [],
}: TimeLineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <section className="pb-20">
      <div className="container mx-auto px-4">
        {title && (
          <div className="mx-auto max-w-3xl mb-12">
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl text-[#2354a2]">
              {title}
            </h2>
            {description && (
              <p className="mb-6 text-base text-gray-600 md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="mx-auto mt-16 max-w-4xl space-y-16 md:mt-24 md:space-y-24">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:gap-16"
                ref={(el) => setItemRef(el, index)}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta column */}
                <div className="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${
                      isActive ? "bg-[#2354a2] text-white" : "bg-gray-100 text-gray-600"
                    }`}>
                      <entry.icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-[#2354a2]" : "text-gray-700"
                      }`}>
                        {entry.title}
                      </span>
                      <span className="text-xs text-gray-500">
                        {entry.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invisible sentinel */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                />

                {/* Content column */}
                <article
                  className={
                    "flex flex-col rounded-2xl border p-4 transition-all duration-300 " +
                    (isActive
                      ? "border-[#2354a2]/20 bg-white shadow-lg"
                      : "border-gray-200 bg-white")
                  }
                >
                  {entry.image && (
                    <img
                      src={entry.image}
                      alt={`${entry.title} visual`}
                      className="mb-4 w-full h-72 rounded-lg object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <h3
                        className={
                          "text-lg font-bold leading-tight tracking-tight md:text-xl transition-colors duration-200 " +
                          (isActive ? "text-[#2354a2]" : "text-gray-700")
                        }
                      >
                        {entry.title}
                      </h3>
                      
                      {/* Description */}
                      <p
                        className={
                          "text-sm leading-relaxed transition-all duration-300 text-gray-600 " +
                          (isActive 
                            ? "line-clamp-none" 
                            : "line-clamp-2")
                        }
                      >
                        {entry.description}
                      </p>
                    </div>

                    {/* Expandable content */}
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
                        <div className="space-y-4 pt-2">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                              <ul className="space-y-2">
                                {entry.items.map((item, itemIndex) => (
                                  <li 
                                    key={itemIndex} 
                                    className="flex items-start gap-2 text-sm text-gray-600"
                                  >
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#ea3a1c] flex-shrink-0" />
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
                                size="sm"
                                className="group bg-[#2354a2] hover:bg-[#1a4080] text-white font-normal transition-all duration-200" 
                                asChild
                              >
                                <a href={entry.button.url} target="_blank" rel="noreferrer">
                                  {entry.button.text} 
                                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
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
