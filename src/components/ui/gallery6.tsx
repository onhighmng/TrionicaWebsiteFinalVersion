"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

import { Button } from "./button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
  onNavigate?: (page: string) => void;
}

const Gallery6 = ({
  heading = "Gallery",
  demoUrl = "https://www.shadcnblocks.com",
  items = [],
  onNavigate,
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };
    
    updateSelection();
    carouselApi.on("select", updateSelection);
    
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003A8C] to-[#0A65C0]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 md:mb-20 lg:mb-24 flex flex-col justify-between">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wider uppercase text-white/80 mb-3">
              Soluções
            </p>
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-4xl lg:mb-6 text-white">
              {heading}
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-full px-0">
        <div className="relative flex items-center justify-center py-12">
          {/* Left Arrow - Glassmorphic */}
          <Button
            size="icon"
            onClick={() => {
              carouselApi?.scrollPrev();
            }}
            disabled={!canScrollPrev}
            className="absolute left-4 md:left-8 z-30 h-16 w-16 rounded-full bg-white/15 backdrop-blur-[10px] hover:bg-white/40 text-white border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft className="size-6" />
          </Button>

          {/* Right Arrow - Glassmorphic */}
          <Button
            size="icon"
            onClick={() => {
              carouselApi?.scrollNext();
            }}
            disabled={!canScrollNext}
            className="absolute right-4 md:right-8 z-30 h-16 w-16 rounded-full bg-white/15 backdrop-blur-[10px] hover:bg-white/40 text-white border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ArrowRight className="size-6" />
          </Button>

          {/* Carousel Container */}
          <div className="w-full overflow-visible">
            <Carousel
              setApi={setCarouselApi}
              opts={{
                align: "center",
                loop: true,
                slidesToScroll: 1,
                duration: 45,
              }}
              className="w-full"
            >
              <CarouselContent className="flex items-center -ml-3">
                {items.map((item, index) => {
                  const isCenter = index === currentIndex;
                  const isLeft = index === (currentIndex - 1 + items.length) % items.length;
                  const isRight = index === (currentIndex + 1) % items.length;
                  const isVisible = isCenter || isLeft || isRight;
                  
                  // Z-index layering: left = 1, center = 3, right = 2
                  const zIndex = isCenter ? 3 : isLeft ? 1 : isRight ? 2 : 0;
                  
                  return (
                    <CarouselItem 
                      key={item.id} 
                      className="flex justify-center pl-3 basis-auto"
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigate && item.url) {
                            onNavigate(item.url);
                          }
                        }}
                        className="group block"
                        style={{
                          width: isCenter ? 'min(50vw, 650px)' : 'min(42vw, 550px)',
                          transform: isCenter 
                            ? 'scale(1) rotateY(0deg)' 
                            : isLeft 
                            ? 'scale(0.95) rotateY(1.5deg)' 
                            : isRight
                            ? 'scale(0.95) rotateY(-1.5deg)'
                            : 'scale(0.95)',
                          transformStyle: 'preserve-3d',
                          transformOrigin: 'center center',
                          perspective: '1000px',
                          opacity: isVisible ? 1 : 0,
                          pointerEvents: isVisible ? 'auto' : 'none',
                          zIndex: zIndex,
                          willChange: 'transform, opacity, width',
                          transition: 'transform 900ms cubic-bezier(0.4, 0, 0.2, 1) 50ms, opacity 900ms cubic-bezier(0.4, 0, 0.2, 1) 50ms, width 900ms cubic-bezier(0.4, 0, 0.2, 1) 50ms',
                        }}
                      >
                        <div 
                          className="relative w-full overflow-hidden"
                          style={{
                            aspectRatio: isCenter ? '16/10' : '16/9',
                            borderRadius: '24px',
                            boxShadow: isCenter 
                              ? '0 32px 60px rgba(0, 0, 0, 0.25)' 
                              : 'none',
                            transformOrigin: 'center center',
                            willChange: 'box-shadow',
                            transition: 'aspect-ratio 900ms cubic-bezier(0.4, 0, 0.2, 1) 50ms, box-shadow 900ms cubic-bezier(0.4, 0, 0.2, 1) 50ms',
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                            style={{
                              filter: isCenter ? 'none' : 'blur(4px)',
                              opacity: isCenter ? 1 : 0.6,
                              transformOrigin: 'center center',
                              willChange: 'filter, opacity',
                              transition: 'filter 900ms cubic-bezier(0.4, 0, 0.2, 1) 50ms, opacity 900ms cubic-bezier(0.4, 0, 0.2, 1) 50ms',
                            }}
                          />
                          
                          {/* Blue overlay gradient for side cards only */}
                          {!isCenter && (
                            <div 
                              className="absolute inset-0 transition-opacity duration-300 ease-out"
                              style={{
                                background: 'linear-gradient(180deg, rgba(0,58,140,0.35) 0%, rgba(0,58,140,0.75) 100%)',
                              }}
                            />
                          )}
                          
                          {/* Bottom gradient overlay - different for center vs sides */}
                          <div 
                            className="absolute inset-0"
                            style={{
                              background: isCenter 
                                ? 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.65) 100%)'
                                : 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)',
                            }}
                          />
                          
                          {/* Text content - bottom left */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <h3 
                              className="text-white mb-2 transition-all duration-300 ease-out"
                              style={{ 
                                fontFamily: 'Inter, sans-serif', 
                                fontWeight: 700,
                                fontSize: '24px',
                                lineHeight: '1.3',
                                textShadow: isCenter ? '0 2px 4px rgba(0,0,0,0.25)' : 'none',
                              }}
                            >
                              {item.title}
                            </h3>
                            <p 
                              className="text-white/85 transition-all duration-300 ease-out"
                              style={{ 
                                fontFamily: 'Inter, sans-serif', 
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '1.5',
                                textShadow: isCenter ? '0 1px 2px rgba(0,0,0,0.25)' : 'none',
                              }}
                            >
                              {item.summary}
                            </p>
                          </div>
                        </div>
                      </a>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery6 };