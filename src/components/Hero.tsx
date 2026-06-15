import { hero } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="hero">
      {/* Sample background media (replace with real video/image) */}
      <img src={hero.poster} alt="" className="hero__media" />
      <div className="hero__overlay" />

      <div className="hero__inner">
        <p className="hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>

        <div className="hero__actions">
          <a href={hero.primaryCta.href} className="btn btn--light">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn btn--ghost">
            <span className="hero__play">▶</span>
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="hero__scroll">SCROLL</div>
    </section>
  )
}
