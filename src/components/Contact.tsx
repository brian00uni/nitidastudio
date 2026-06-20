import { contact } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <Reveal as="p" className="contact__eyebrow" replay>
          {contact.eyebrow}
        </Reveal>
        <Reveal as="h2" className="contact__title" delay={100} replay>
          {contact.title}
        </Reveal>
        <Reveal as="p" className="contact__desc" delay={200} replay>
          {contact.description}
        </Reveal>
        <Reveal delay={300} replay>
          <a href={contact.cta.href} className="btn btn--light contact__cta">
            {contact.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
