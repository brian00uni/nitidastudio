import { contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <p className="contact__eyebrow">{contact.eyebrow}</p>
        <h2 className="contact__title">{contact.title}</h2>
        <p className="contact__desc">{contact.description}</p>
        <a href={contact.cta.href} className="btn btn--light contact__cta">
          {contact.cta.label}
        </a>
      </div>
    </section>
  )
}
