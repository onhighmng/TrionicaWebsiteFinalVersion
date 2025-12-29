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
  const isInView = useInView(timelineRef, { once: true, amount: 0.3 })

  const defaultVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  const variants = customVariants || defaultVariants

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
