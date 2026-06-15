import { mission } from '../data/content'

export default function Mission() {
  return (
    <section id="mission" className="mission">
      <div className="mission__inner">
        <p className="mission__eyebrow">{mission.eyebrow}</p>
        <p className="mission__statement">{mission.statement}</p>
        <p className="mission__desc">{mission.description}</p>
      </div>
    </section>
  )
}
