import { features } from '../data/content'

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="features__inner">
        <div className="section-head">
          <p className="section-head__eyebrow">{features.eyebrow}</p>
          <h2 className="section-head__title">{features.title}</h2>
        </div>

        <div className="features__grid">
          {features.items.map((f, i) => (
            <div key={f.title} className="features__card">
              <div className="features__num">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="features__title">{f.title}</h3>
              <p className="features__text">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
