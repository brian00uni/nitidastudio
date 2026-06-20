import { useEffect, useRef, useState } from 'react'

// Like useReveal but it keeps observing: `inView` toggles true/false every
// time the element enters or leaves the viewport, so the driven animation can
// replay on each re-entry. Reduced-motion users get a steady `true`.
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.45 },
) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setInView(entry.isIntersecting))
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}
