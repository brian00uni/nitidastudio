import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/content'
import Reveal from './Reveal'

const AUTOPLAY_MS = 3500

export default function Skills() {
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const [active, setActive] = useState(0)

  const cardStep = (track: HTMLDivElement) => {
    const card = track.querySelector<HTMLElement>('.skills__card')
    return card ? card.offsetWidth + 20 : track.clientWidth * 0.8
  }

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: cardStep(track) * dir, behavior: 'smooth' })
  }

  const scrollToIndex = (i: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: cardStep(track) * i, behavior: 'smooth' })
  }

  // Track which card is closest to the start edge → drives the active dot.
  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    setActive(Math.round(track.scrollLeft / cardStep(track)))
  }

  // Auto-advance one card every AUTOPLAY_MS; loop to start at the end.
  // Pauses while the pointer is over the slider.
  useEffect(() => {
    const id = setInterval(() => {
      const track = trackRef.current
      if (!track || pausedRef.current) return
      const atEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollByCard(1)
      }
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <Reveal className="skills__head">
          <div className="section-head">
            {/* <p className="section-head__eyebrow">{skills.eyebrow}</p> */}
            <h2 className="section-head__title">{skills.eyebrow}</h2>
            <p className="skills__desc">{skills.description}</p>
          </div>
          <div className="skills__nav">
            <button
              type="button"
              className="skills__nav-btn"
              aria-label="이전"
              onClick={() => scrollByCard(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="skills__nav-btn"
              aria-label="다음"
              onClick={() => scrollByCard(1)}
            >
              ›
            </button>
          </div>
        </Reveal>

        <div
          className="skills__track"
          ref={trackRef}
          onScroll={handleScroll}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {skills.groups.map((group, i) => (
            <div key={group.label} className="skills__card">
              <span className="skills__card-no">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="skills__card-label">{group.label}</span>
              <ul className="skills__chips">
                {group.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label} className="skills__chip">
                      <span className="skills__chip-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span className="skills__chip-label">{item.label}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills__dots" role="tablist" aria-label="기술 스택 슬라이드">
          {skills.groups.map((group, i) => (
            <button
              key={group.label}
              type="button"
              className={`skills__dot${i === active ? ' is-active' : ''}`}
              aria-label={`${i + 1}번 슬라이드`}
              aria-selected={i === active}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
