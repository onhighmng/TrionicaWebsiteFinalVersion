import React, { useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* LOCAL styles only — no external requests, no globals */
const LocalStyles = () => (
  <style>{`
    /* small decorative underline used in hero (keeps things self-contained) */
    .hero-underline { position: absolute; left: 0; width: 100%; top: 100%; margin-top: -5px; pointer-events: none; }

    /* fade-up animation */
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up { animation: fade-in-up 0.6s ease-out both; }
    .animate-fade-in-up-delay-1 { animation-delay: 0.2s; }
    .animate-fade-in-up-delay-2 { animation-delay: 0.4s; }

    /* Button baseline - NO hover effects */
    .btn-base {
      transition: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Keyboard-style bounce animation */
    @keyframes btn-bounce {
      0% { transform: scale(1); }
      50% { transform: scale(0.95); }
      100% { transform: scale(1); }
    }
    .btn-bounce-anim {
      animation: btn-bounce 0.3s cubic-bezier(0.36, 0, 0.66, -0.56);
    }

    .btn-focus-ring:focus-visible { outline: 2px solid hsl(var(--foreground)); outline-offset: 3px; }

    /* fallback focus outline */
    .focus-outline:focus-visible { outline: 2px solid hsl(var(--foreground)); outline-offset: 2px; }
  `}</style>
);

/* cva for button - using Trionica dark blue */
const buttonVariants = cva(
  "btn-base inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#2354a2] text-white hover:bg-[#1a4080]",
        outline: "border-2 border-foreground bg-background text-foreground hover:bg-accent",
        ghost: "bg-transparent text-foreground hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, onClick, ...props }, ref) => {
  const localRef = useRef<HTMLButtonElement | null>(null);
  const mergedRef = (node: HTMLButtonElement | null) => {
    localRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = localRef.current;
    if (!btn) return;

    // Add bounce animation
    btn.classList.add("btn-bounce-anim");
    window.setTimeout(() => btn.classList.remove("btn-bounce-anim"), 300);

    if (onClick) onClick(e);
  };

  const classes = cn(buttonVariants({ variant, size }), className ?? "");
  return <button ref={mergedRef} onClick={handleClick} className={classes} {...props} />;
});
Button.displayName = "Button";

interface UnderlineHeroProps {
  heroClassName?: string;
  title?: string;
  subtitle?: string;
  highlightedWord?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const UnderlineHero: React.FC<UnderlineHeroProps> = ({ 
  heroClassName, 
  title = "Construímos o Futuro",
  subtitle = "Um portfólio de tecnologia de vanguarda ao serviço das instituições que lideram Moçambique.",
  highlightedWord = "Nacional",
  ctaText = "Contactar",
  onCtaClick 
}) => {
  return (
    <>
      <LocalStyles />
      <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-24 md:pt-40 md:pb-32 bg-white" aria-labelledby="hero-heading">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight animate-fade-in-up mb-6 text-[#222]">
            {title}{" "}
            <span className="relative inline-block">
              <span className={cn(heroClassName ?? "", "font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2354a2]")}>
                {highlightedWord}
              </span>
              <svg className="hero-underline text-[#2354a2]" viewBox="0 0 170 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 9C32.8203 5.34032 108.769 -0.881146 166 3.51047" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.9" />
              </svg>
            </span>.
          </h1>

          <div className="max-w-2xl mx-auto mb-9 animate-fade-in-up animate-fade-in-up-delay-1">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="animate-fade-in-up animate-fade-in-up-delay-2 flex flex-col items-center gap-4">
            <Button size="lg" variant="default" className="px-8 py-6 text-base rounded-lg focus-outline" onClick={onCtaClick}>
              {ctaText}
            </Button>
            <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
              Role para explorar
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnderlineHero;