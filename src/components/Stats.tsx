import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__inner">
        {stats.items.map((s) => (
          <div key={s.label} className="stats__item">
            <div className="stats__value">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
