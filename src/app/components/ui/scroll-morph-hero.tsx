import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "motion/react";
import { TextGenerateEffect } from "./text-generate-effect";
import { getImageUrl } from "../../utils/images";
import heroImage1 from "figma:asset/a135dfc826692e66d167cf1f321b959cd2e1300f.png";
import heroImage2 from "figma:asset/f31402187d2926c2c11f301315713df697c3adea.png";
import heroImage3 from "figma:asset/8ae09486ad053cac7aa261251d18f34d0098a19d.png";
import heroImage4 from "figma:asset/b7cec798c9d4dafbd9de59d0bccdfaead60130aa.png";
import heroImage5 from "figma:asset/81ba0e6d7a3d4e307157a04ad07c9f80a78953e1.png";
import heroImage6 from "figma:asset/53358abd96349c17872d0744d03060d989036444.png";
import heroImage7 from "figma:asset/8159d976ce4c68c6656d9d286824dd1f2aca90a7.png";
import heroImage8 from "figma:asset/6f0e867068a6f6f329cefa9385048a64b624f1da.png";
import heroImage9 from "figma:asset/be259c0f22fea2fdf75583dfb7d5a24251417099.png";
import heroImage10 from "figma:asset/41767299a05eccea15d50c2b368db977aa2e86d1.png";
import heroImage11 from "figma:asset/6ac0e78760238fd8f4ab3139b6fa4f6e48a1cd38.png";
import heroImage12 from "figma:asset/c229a57d949789c02688aefca62215d05ac92fe2.png";
import heroImage13 from "figma:asset/9d7ea9563692f8b61094f34dfd3e70e3c3ca2a2f.png";
import heroImage14 from "figma:asset/a7b5b0057b794fc8f7e0e7c1885df41602213f9f.png";
import heroImage15 from "figma:asset/3ded69e85e2f3513bc74f9fb1e0d97be331c87de.png";
import heroImage16 from "figma:asset/a7f6a4e4f8b1c0085bc57b005324e369804e3218.png";
import heroImage17 from "figma:asset/0dc5b6b5a3f7caafdf05f897376b289ec48916c4.png";
import heroImage18 from "figma:asset/184fecbe60f0309bf0a0d6587616d1a03384e64f.png";
import heroImage19 from "figma:asset/4e0a7f72e8cfb758d9e8e7e7324ce939980368c5.png";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 60;  // Reduced from 100
const IMG_HEIGHT = 85; // Reduced from 140

function FlipCard({
    src,
    index,
    total,
    phase,
    target,
}: FlipCardProps) {
    return (
        <motion.div
            // Smoothly animate to the coordinates defined by the parent
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 35,
                mass: 0.5,
            }}

            // Initial style
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d", // Essential for the 3D hover effect
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-900 flex flex-col items-center justify-center p-4 border border-gray-700"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-blue-400 uppercase tracking-widest mb-1">Ver</p>
                        <p className="text-xs font-medium text-white">Detalhes</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000; // Optimized for ultra-smooth scrolling

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

interface IntroAnimationProps {
    images?: string[];
    title?: string;
    subtitle?: string;
}

export default function IntroAnimation({ 
    images, 
    title = "Sobre Nós",
    subtitle = "Soluções inovadoras para o desenvolvimento sustentável de Moçambique"
}: IntroAnimationProps) {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Use provided images or defaults
    const IMAGES = images || [
        heroImage1,
        heroImage2,
        heroImage3,
        heroImage4,
        heroImage5,
        heroImage6,
        heroImage7,
        heroImage8,
        heroImage9,
        heroImage10,
        heroImage11,
        heroImage12,
        heroImage13,
        heroImage14,
        heroImage15,
        heroImage16,
        heroImage17,
        heroImage18,
        heroImage19,
        getImageUrl("wp-content/uploads/2019/05/cropped-LogoTRIONICAmz-002_1-1.png"),
    ];

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        // Initial set
        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Virtual Scroll Logic ---
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0); // Keep track of scroll value without re-renders
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            // Check if we've reached the end of animations
            const atMaxScroll = scrollRef.current >= MAX_SCROLL;
            const scrollingDown = e.deltaY > 0;
            const scrollingUp = e.deltaY < 0;
            
            // If at max scroll and scrolling down, allow page scroll to continue
            if (atMaxScroll && scrollingDown) {
                setIsAnimationComplete(true);
                return; // Don't prevent default - allow natural page scroll
            }
            
            // If at beginning and scrolling up, allow page scroll
            if (scrollRef.current <= 0 && scrollingUp) {
                return; // Don't prevent default
            }
            
            // Otherwise, trap scroll inside this component
            e.preventDefault();
            e.stopPropagation();

            // Reduce scroll sensitivity for smoother control
            const newScroll = Math.min(Math.max(scrollRef.current + (e.deltaY * 0.8), 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
            
            // Mark as incomplete if user scrolls back
            if (newScroll < MAX_SCROLL) {
                setIsAnimationComplete(false);
            }
        };

        // Touch support
        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            touchStartY = touchY;
            
            const atMaxScroll = scrollRef.current >= MAX_SCROLL;
            const scrollingDown = deltaY > 0;
            
            if (atMaxScroll && scrollingDown) {
                setIsAnimationComplete(true);
                return;
            }
            
            if (scrollRef.current <= 0 && deltaY < 0) {
                return;
            }
            
            e.preventDefault();

            const newScroll = Math.min(Math.max(scrollRef.current + (deltaY * 0.4), 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
            
            if (newScroll < MAX_SCROLL) {
                setIsAnimationComplete(false);
            }
        };

        // Attach listeners to container instead of window for portability
        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll]);

    // 1. Morph Progress: 0 (Circle) -> 1 (Bottom Arc)
    const morphProgress = useTransform(virtualScroll, [0, 1200], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 80, damping: 40, mass: 0.5 });

    // 2. Scroll Rotation (Shuffling): Starts after morph
    const scrollRotate = useTransform(virtualScroll, [1200, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 80, damping: 40, mass: 0.5 });

    // --- Mouse Parallax ---
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 20, damping: 25 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;

            // Normalize -1 to 1
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            // Move +/- 100px
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // --- Intro Sequence ---
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    // --- Random Scatter Positions ---
    const scatterPositions = useMemo(() => {
        return IMAGES.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, [IMAGES]);

    // --- Render Loop (Manual Calculation for Morph) ---
    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    // --- Content Opacity ---
    // Fade in content when arc is formed (morphValue > 0.8)
    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-gradient-to-br from-[#1a4080] via-[#2354a2] to-[#1a4080] overflow-hidden">
            {/* Container */}
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">

                {/* Intro Text (Fades out) */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.7 - morphValue * 1.4 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-4 text-xs font-bold tracking-[0.2em] text-white/80"
                    >
                        ROLE PARA EXPLORAR
                    </motion.p>
                </div>

                {/* Arc Active Content (Fades in) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[18%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4 max-w-5xl"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8 uppercase">
                        {title}
                    </h2>
                    <div className="space-y-6 w-full">
                        <TextGenerateEffect
                            words="A Triónica Moçambique Lda. é uma empresa moçambicana sediada em Maputo, especializada no desenvolvimento de soluções tecnológicas e na implementação de projetos em áreas estratégicas."
                            className="text-sm md:text-base !font-normal text-white/90 leading-relaxed text-justify"
                            duration={0.8}
                            filter={true}
                        />
                        <TextGenerateEffect
                            words="Desde 2010, fornecemos equipamentos de laboratório e tecnologias avançadas para os sectores de Ensino e Investigação, Saúde, Águas, Ambiente e Minas, com foco na qualidade, inovação e fiabilidade."
                            className="text-sm md:text-base !font-normal text-white/90 leading-relaxed text-justify"
                            duration={0.8}
                            filter={true}
                        />
                        <TextGenerateEffect
                            words="Com uma equipa de profissionais altamente qualificados, acumulamos 15 anos de experiência que se refletem na excelência dos nossos serviços, na formação contínua dos nossos parceiros e na manutenção rigorosa dos equipamentos fornecidos. O reconhecimento dos nossos clientes é um dos nossos maiores indicadores de sucesso."
                            className="text-sm md:text-base !font-normal text-white/90 leading-relaxed text-justify"
                            duration={0.8}
                            filter={true}
                        />
                        <p className="mt-8 text-xs font-bold tracking-[0.2em] text-white/70">
                            ROLE PARA EXPLORAR
                        </p>
                    </div>
                </motion.div>

                {/* Main Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        // 1. Intro Phases (Scatter -> Line)
                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 70; // Adjusted for smaller images (60px width + 10px gap)
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            // 2. Circle Phase & Morph Logic

                            // Responsive Calculations
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width, containerSize.height);

                            // A. Calculate Circle Position
                            const circleRadius = Math.min(minDimension * 0.35, 350);

                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            // B. Calculate Bottom Arc Position
                            // "Rainbow" Arch: Convex up. Center is highest point.

                            // Radius:
                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);

                            // Position:
                            const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                            const arcCenterY = arcApexY + arcRadius;

                            // Spread angle:
                            const spreadAngle = isMobile ? 100 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (TOTAL_IMAGES - 1);

                            // Apply Scroll Rotation (Shuffle) with Bounds
                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);

                            const maxRotation = spreadAngle * 0.8;
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.4 : 1.8, // Increased scale for active state
                            };

                            // C. Interpolate (Morph)
                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        // Render logo (last image) without card effect
                        if (i === TOTAL_IMAGES - 1) {
                            return (
                                <motion.div
                                    key={i}
                                    animate={{
                                        x: target.x,
                                        y: target.y,
                                        rotate: 0, // No rotation for logo
                                        scale: target.scale,
                                        opacity: target.opacity,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 35,
                                        mass: 0.5,
                                    }}
                                    style={{
                                        position: "absolute",
                                        width: IMG_WIDTH,
                                        height: IMG_HEIGHT,
                                    }}
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src={src}
                                        alt="Trionica Logo"
                                        className="w-full h-full object-contain drop-shadow-2xl"
                                    />
                                </motion.div>
                            );
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={introPhase}
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}