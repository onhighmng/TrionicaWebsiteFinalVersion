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
  const rowCount = Math.ceil(shuffled.length / columnCount)

  // Build a matrix where each row has `columnCount` distinct logos.
  // Rows past the end of the logo list reuse logos, keeping each row unique.
  const matrix: Logo[][] = []
  let idx = 0

  for (let row = 0; row < rowCount; row++) {
    const rowLogos: Logo[] = []
    const usedInRow = new Set<number>()

    for (let col = 0; col < columnCount; col++) {
      if (idx < shuffled.length) {
        rowLogos.push(shuffled[idx])
        usedInRow.add(shuffled[idx].id)
        idx++
      } else {
        // Reuse any logo not already in this row
        const candidate = shuffled.find(l => !usedInRow.has(l.id)) ?? shuffled[0]
        rowLogos.push(candidate)
        usedInRow.add(candidate.id)
      }
    }
    matrix.push(rowLogos)
  }

  // Transpose matrix to per-column arrays
  return Array.from({ length: columnCount }, (_, col) =>
    matrix.map(row => row[col])
  )
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
        className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
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
                <CurrentLogo className="h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32" />
              </a>
            ) : (
              <CurrentLogo className="h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32" />
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
