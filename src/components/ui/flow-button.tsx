'use client';
import { ArrowRight } from 'lucide-react';

interface FlowButtonProps {
  text?: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

export function FlowButton({ 
  text = "Modern Button",
  onClick,
  bgColor = "#111111",
  textColor = "#111111",
  borderColor = "#333333"
}: FlowButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] bg-transparent px-8 py-3 md:px-12 md:py-4 text-sm md:text-base font-semibold cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:rounded-[12px] active:scale-[0.95]"
      style={{
        borderColor: `${borderColor}/40`,
      }}
    >
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className="absolute w-4 h-4 md:w-5 md:h-5 left-[-25%] fill-none z-[9] group-hover:left-4 md:group-hover:left-6 group-hover:!stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ stroke: textColor }}
      />

      {/* Text */}
      <span 
        className="relative z-[1] -translate-x-3 group-hover:translate-x-3 md:group-hover:translate-x-4 transition-all duration-[800ms] ease-out group-hover:!text-white font-bold"
        style={{ color: textColor }}
      >
        {text}
      </span>

      {/* Circle */}
      <span 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] md:group-hover:w-[280px] md:group-hover:h-[280px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
        style={{ backgroundColor: bgColor }}
      ></span>

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className="absolute w-4 h-4 md:w-5 md:h-5 right-4 md:right-6 fill-none z-[9] group-hover:right-[-25%] group-hover:!stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ stroke: textColor }}
      />
    </button>
  );
}