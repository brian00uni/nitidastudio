import { type CSSProperties } from 'react'
import { nitida } from '../data/content'
import { useInView } from '../hooks/useInView'

// Brand identity band: essence statement + the three core values. The reveal
// replays each time the section re-enters the viewport (useInView).
export default function Nitida() {
  const { ref, inView: visible } = useInView<HTMLDivElement>({ threshold: 0.25 })

  return (
    <section className="nitida">
      <div
        ref={ref}
        className={`nitida__inner${visible ? ' is-visible' : ''}`}
      >
        <div className="nitida__essence">
          {/* <p className="nitida__eyebrow">{nitida.eyebrow}</p> */}
          <h2 className="nitida__tagline">{nitida.tagline}</h2>
          {/* <p className="nitida__lead">{nitida.lead}</p> */}
        </div>

        <div className="nitida__values">
          {nitida.values.map((v, i) => (
            <div
              key={v.en}
              className="nitida__item"
              style={{ '--d': `${i * 140}ms` } as CSSProperties}
            >
              <div className="nitida__value">{v.en}</div>
              {/* <div className="nitida__label">
                <span className="nitida__ko">{v.ko}</span>
                <p className="nitida__desc">{v.desc}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
