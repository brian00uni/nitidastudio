import { useEffect, useState, type CSSProperties } from 'react'
import { stats } from '../data/content'
import { useInView } from '../hooks/useInView'

// Counts the numeric prefix up from 0 when scrolled into view (e.g. "20년+").
// Re-counts every time the element re-enters the viewport.
function CountUp({ value }: { value: string }) {
  const { ref, inView: visible } = useInView<HTMLSpanElement>({ threshold: 0.5 })
  // Derived once from the stable `value` prop — kept out of effect deps.
  const match = value.match(/^(\d+)(.*)$/)
  const isNumeric = match !== null
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  const [n, setN] = useState(0)

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (!isNumeric || reduced) return
    // Reset to 0 when out of view so the next entry re-counts from scratch.
    if (!visible) {
      const r = requestAnimationFrame(() => setN(0))
      return () => cancelAnimationFrame(r)
    }
    let raf = 0
    const duration = 1400
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, isNumeric, target, reduced])

  if (!isNumeric) return <span ref={ref}>{value}</span>
  return (
    <span ref={ref}>
      {reduced ? target : n}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const { ref, inView: visible } = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section className="stats">
      <div
        ref={ref}
        className={`stats__inner${visible ? ' is-visible' : ''}`}
      >
        {stats.items.map((s, i) => (
          <div
            key={s.value}
            className="stats__item"
            style={{ '--d': `${i * 120}ms` } as CSSProperties}
          >
            <div className="stats__value">
              <CountUp value={s.value} />
            </div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
