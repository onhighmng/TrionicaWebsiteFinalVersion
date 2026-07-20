"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
} from "react"
import { AnimatePresence, motion } from "motion/react"

interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
  url?: string
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  // Distribute round-robin across columns — no logo ever appears twice
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])
  shuffled.forEach((logo, i) => {
    columns[i % columnCount].push(logo)
  })
  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000
    const columnDelay = index * 200
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])
    const currentUrl = logos[currentIndex].url

    return (
      <motion.div
        className="relative h-20 w-36 overflow-hidden md:h-32 md:w-56"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }}
          >
            {currentUrl ? (
              <a href={currentUrl} target="_blank" rel="noopener noreferrer" aria-label={logos[currentIndex].name}>
                <CurrentLogo className="h-28 w-28 max-h-[85%] max-w-[85%] object-contain md:h-44 md:w-44" />
              </a>
            ) : (
              <CurrentLogo className="h-28 w-28 max-h-[85%] max-w-[85%] object-contain md:h-44 md:w-44" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

LogoColumn.displayName = "LogoColumn"

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const logoSets = useMemo(() => distributeLogos(logos, columnCount), [logos, columnCount])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

export { LogoColumn }
