'use client'

import { motion, useInView, Variant } from "motion/react"
import { createElement, RefObject, useRef } from "react"

interface TimelineContentProps {
  children: React.ReactNode
  animationNum: number
  timelineRef: RefObject<HTMLDivElement>
  customVariants?: {
    visible: (i: number) => Variant
    hidden: Variant
  }
  as?: keyof JSX.IntrinsicElements
  className?: string
  [key: string]: any
}

// Globally cap animation speed and remove expensive blur() filters so page
// reveals feel snappy. Pages pass slow variants (duration ~1.2s, blur(10px));
// this normalizes them in one place instead of editing dozens of files.
const FAST_DURATION = 0.45
const FAST_DELAY_CAP = 0.18

function speedUpState(state: any) {
  if (!state || typeof state !== "object") return state
  const next: any = { ...state }
  // Drop blur/filter animation — it's the main source of jank/sluggishness.
  if (typeof next.filter === "string" && next.filter.includes("blur")) {
    delete next.filter
  }
  if (next.transition && typeof next.transition === "object") {
    next.transition = {
      ...next.transition,
      duration:
        typeof next.transition.duration === "number"
          ? Math.min(next.transition.duration, FAST_DURATION)
          : FAST_DURATION,
      delay:
        typeof next.transition.delay === "number"
          ? Math.min(next.transition.delay, FAST_DELAY_CAP)
          : next.transition.delay,
    }
  }
  return next
}

function speedUpVariants(variants: any) {
  if (!variants) return variants
  const wrap = (v: any) =>
    typeof v === "function" ? (i: number) => speedUpState(v(i)) : speedUpState(v)
  return { visible: wrap(variants.visible), hidden: wrap(variants.hidden) }
}

export const TimelineContent = ({
  children,
  animationNum,
  timelineRef,
  customVariants,
  as = "div",
  className = "",
  ...props
}: TimelineContentProps) => {
  const ref = useRef(null)
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 })

  const defaultVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: Math.min(i * 0.12, FAST_DELAY_CAP),
        duration: FAST_DURATION,
      },
    }),
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  const variants = speedUpVariants(customVariants) || defaultVariants

  return createElement(
    motion[as as keyof typeof motion] as any,
    {
      ref,
      custom: animationNum,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      variants,
      className,
      ...props,
    },
    children
  )
}