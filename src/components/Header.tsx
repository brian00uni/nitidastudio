import { useEffect, useState } from 'react'
import { nav } from '../data/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#top" className="header__brand">
          {nav.brand}
        </a>

        <nav className="header__nav">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="header__link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <div className="header__lang">
            {nav.languages.map((lng, i) => (
              <span key={lng} style={{ display: 'flex', gap: '0.35rem' }}>
                {i > 0 && <span>/</span>}
                <button className={i === 0 ? 'is-active' : ''}>{lng}</button>
              </span>
            ))}
          </div>
          <button
            className="header__toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="header__mobile">
          <nav>
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
