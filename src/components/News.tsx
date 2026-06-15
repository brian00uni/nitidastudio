import { news } from '../data/content'

export default function News() {
  return (
    <section id="news" className="news">
      <div className="news__inner">
        <div className="news__head">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <p className="section-head__eyebrow">{news.eyebrow}</p>
            <h2 className="section-head__title">{news.title}</h2>
          </div>
          <a href="#news" className="news__more">
            View all →
          </a>
        </div>

        <div className="news__grid">
          {news.items.map((n) => (
            <a key={n.title} href="#news" className="news__card">
              <img src={n.image} alt="" />
              <div className="news__body">
                <div className="news__meta">
                  <span className="news__tag">{n.tag}</span>
                  <span>{n.date}</span>
                </div>
                <h3 className="news__title">{n.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
