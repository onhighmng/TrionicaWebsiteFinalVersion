import * as React from "react";
import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedUnderlineTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  textClassName?: string;
  underlineClassName?: string;
  underlinePath?: string;
  underlineHoverPath?: string;
  underlineDuration?: number;
  onClick?: () => void;
}

const AnimatedUnderlineText = React.forwardRef<HTMLSpanElement, AnimatedUnderlineTextProps>(
  (
    {
      text,
      textClassName,
      underlineClassName,
      underlinePath = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
      underlineHoverPath = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
      underlineDuration = 1.5,
      onClick,
      ...props
    },
    ref
  ) => {
    const pathVariants: Variants = {
      animate: {
        pathLength: [0, 1, 1, 0],
        opacity: [0, 1, 1, 0],
        d: [
          underlinePath,
          underlinePath,
          underlineHoverPath,
          underlineHoverPath,
        ],
        transition: {
          duration: underlineDuration * 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      },
    };

    return (
      <span
        ref={ref}
        className={cn("relative inline-block cursor-pointer", props.className)}
        onClick={onClick}
      >
        <span className={cn(textClassName)}>
          {text}
        </span>

        <motion.svg
          width="100%"
          height="8"
          viewBox="0 0 300 20"
          className={cn("absolute -bottom-1 left-0", underlineClassName)}
          preserveAspectRatio="none"
        >
          <motion.path
            d={underlinePath}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            variants={pathVariants}
            animate="animate"
          />
        </motion.svg>
      </span>
    );
  }
);

AnimatedUnderlineText.displayName = "AnimatedUnderlineText";

export { AnimatedUnderlineText };
