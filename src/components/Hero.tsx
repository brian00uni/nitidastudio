import { useLayoutEffect, useRef, useState } from 'react'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { hero, heroRotating } from '../data/content'
import { useRotatingWord } from '../hooks/useRotatingWord'
// import bgLottie from '../assets/lottie/bg.lottie?url'

export default function Hero() {
  const { word, index } = useRotatingWord(heroRotating)
  const pillRef = useRef<HTMLSpanElement>(null)
  const wordRef = useRef<HTMLSpanElement>(null)
  const [pillWidth, setPillWidth] = useState<number>()

  // Measure each word and drive the pill to an explicit width so the
  // horizontal resize can transition smoothly instead of snapping.
  useLayoutEffect(() => {
    const wordEl = wordRef.current
    const pillEl = pillRef.current
    if (!wordEl || !pillEl) return
    const padX = parseFloat(getComputedStyle(pillEl).paddingLeft) * 2
    setPillWidth(Math.ceil(wordEl.offsetWidth + padX))
  }, [index])

  return (
    <section id="top" className="hero">
      {/* <span className="hero__bg" aria-hidden="true">
        <DotLottieReact className="hero__bg-lottie" src={bgLottie} loop autoplay />
      </span> */}
      <span className="hero__circle" />

      <div className="hero__inner">
        <p className="hero__eyebrow">{hero.eyebrow}</p>

        <h1 className="hero__headline">
          <span className="hero__static">지금</span>
          <span
            ref={pillRef}
            className="hero__pill"
            style={pillWidth ? { width: `${pillWidth}px` } : undefined}
          >
            <span ref={wordRef} className="hero__pill-word" key={index}>
              {word}
            </span>
          </span>
          <span className="hero__static">을 함께 만들어요</span>
        </h1>

        <p className="hero__subtitle">{hero.subtitle}</p>

        <div className="hero__actions">
          <a href={hero.primaryCta.href} className="hero__btn">
            {hero.primaryCta.label}
            <span className="hero__arrow">→</span>
          </a>
          <a href={hero.secondaryCta.href} className="hero__btn">
            {hero.secondaryCta.label}
            <span className="hero__arrow">→</span>
          </a>
        </div>
      </div>

      {/* <div className="hero__scroll">SCROLL</div> */}
    </section>
  )
}
