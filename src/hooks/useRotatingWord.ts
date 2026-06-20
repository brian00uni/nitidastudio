import { useEffect, useState } from 'react'

// Cycles through a list of words on an interval (for animated headlines).
export function useRotatingWord(words: string[], interval = 2200) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (words.length <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return { word: words[index], index }
}
