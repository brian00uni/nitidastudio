import { technology } from '../data/content'

export default function Technology() {
  return (
    <section id="technology" className="technology">
      <div className="technology__inner">
        <div className="section-head">
          <p className="section-head__eyebrow">{technology.eyebrow}</p>
          <h2 className="section-head__title">{technology.title}</h2>
        </div>

        <div className="technology__list">
          {technology.items.map((item) => (
            <div key={item.title} className="technology__row">
              <div className="technology__media">
                <img src={item.image} alt="" />
              </div>
              <div className="technology__body">
                <p className="technology__kicker">{item.kicker}</p>
                <h3 className="technology__title">{item.title}</h3>
                <p className="technology__text">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
