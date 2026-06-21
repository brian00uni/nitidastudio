import { useEffect, useState } from 'react'
import { nav } from '../data/content'
import logo from '../assets/nitida-studio-logo.svg'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Smooth-scroll to the target section without writing the hash to the URL.
  const handleNavClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith('#')) return
      e.preventDefault()
      setOpen(false)
      const id = href.slice(1)
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a
          href="#top"
          className="header__brand"
          aria-label={nav.brand}
          onClick={handleNavClick('#top')}
        >
          <img src={logo} alt={nav.brand} className="header__logo" />
        </a>

        <nav className="header__nav">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="header__link"
              onClick={handleNavClick(l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* <div className="header__actions">
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
        </div> */}
      </div>

      {open && (
        <div className="header__mobile">
          <nav>
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} onClick={handleNavClick(l.href)}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
