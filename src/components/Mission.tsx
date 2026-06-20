import { useEffect, useState } from 'react'
import { mission } from '../data/content'
import { useInView } from '../hooks/useInView'

// Counts 0 → target with an ease-out once `active`, after a short delay so it
// fires roughly when the stat fades in. Respects reduced-motion.
function Counter({
  target,
  active,
  duration = 1600,
  delay = 1100,
}: {
  target: number
  active: boolean
  duration?: number
  delay?: number
}) {
  const [n, setN] = useState(0)

  useEffect(() => {
    // Reset to 0 when out of view so the next entry counts up again.
    if (!active) {
      setN(0)
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target)
      return
    }
    let raf = 0
    let start = 0
    const tick = (now: number) => {
      if (!start) start = now
      const t = Math.min(1, (now - start) / duration)
      setN(Math.round((1 - (1 - t) ** 3) * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    const to = window.setTimeout(() => {
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(to)
      cancelAnimationFrame(raf)
    }
  }, [active, target, duration, delay])

  return <>{n}</>
}

export default function Mission() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.45 })

  return (
    <section
      id="mission"
      ref={ref}
      className={`impact${inView ? ' is-active' : ''}`}
    >
      <div className="impact__stage">
        <h2 className="impact__label">{mission.label}</h2>

        <div className="impact__content">
          <p className="impact__lead">{mission.lead}</p>
          <p className="impact__note">{mission.note}</p>

          <div className="impact__stats">
            {mission.stats.map((s, i) => (
              <div
                key={s.label}
                className="impact__stat"
                style={{ '--i': i } as React.CSSProperties}
              >
                <p className="impact__value">
                  <Counter target={Number(s.value)} active={inView} />
                  <span className="impact__unit">{s.unit}</span>
                </p>
                <p className="impact__stat-label">{s.label}</p>
                <p className="impact__stat-note">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
