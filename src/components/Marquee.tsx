import { marquee } from '../data/content'

// One tileable wave (two full periods over 1440); start/end y match so two
// copies laid side by side scroll seamlessly.
const WAVE_PATH =
  'M0,40 C120,10 240,10 360,40 C480,70 600,70 720,40 C840,10 960,10 1080,40 C1200,70 1320,70 1440,40 L1440,100 L0,100 Z'

// One white wave layer: two tiles side by side so sliding by half loops.
function WaveLayer({ variant }: { variant: 'back' | 'mid' | 'front' }) {
  return (
    <div className={`marquee__wave-layer marquee__wave-layer--${variant}`}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d={WAVE_PATH} fill="#fff" />
      </svg>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d={WAVE_PATH} fill="#fff" />
      </svg>
    </div>
  )
}

// A colored band whose bottom edge is three white waves flowing at different
// speeds/opacities, blending down into the white items area below.
function Wave() {
  return (
    <div className="marquee__wave" aria-hidden="true">
      <WaveLayer variant="back" />
      <WaveLayer variant="mid" />
      <WaveLayer variant="front" />
    </div>
  )
}

// A light "logo strip" ticker: plain icon + word items (no boxes) scrolling
// in opposite directions on a white background, with a flowing wave on top.
// Each track is repeated so the CSS shift-by-half loops seamlessly.
function Track({ items }: { items: typeof marquee }) {
  return (
    <ul className="marquee__track" aria-hidden="true">
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <li key={i} className="marquee__item">
            <span className="marquee__icon" aria-hidden="true">
              <Icon />
            </span>
            <span className="marquee__label">{item.label}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default function Marquee() {
  const mid = Math.ceil(marquee.length / 2)
  const rows = [marquee.slice(0, mid), marquee.slice(mid)]

  return (
    <section className="marquee" aria-label="Tech stack & standards">
      <Wave />
      {rows.map((items, r) => (
        <div
          key={r}
          className={`marquee__row marquee__row--${r % 2 ? 'reverse' : 'forward'}`}
        >
          <Track items={items} />
          <Track items={items} />
          <Track items={items} />
          <Track items={items} />
        </div>
      ))}
    </section>
  )
}
