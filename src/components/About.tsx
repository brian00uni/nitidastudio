import UseAnimationsRaw from 'react-useanimations'
import visibilityRaw from 'react-useanimations/lib/visibility'
import maximizeMinimizeRaw from 'react-useanimations/lib/maximizeMinimize'
import codepenRaw from 'react-useanimations/lib/codepen'
import settingsRaw from 'react-useanimations/lib/settings'
import shareRaw from 'react-useanimations/lib/share'
import editRaw from 'react-useanimations/lib/edit'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { about } from '../data/content'
import Reveal from './Reveal'

// Per-card animations resolved from src/assets/lottie by filename stem.
// A card's `anim` key (e.g. 'job-01') matches a file like job-01.lottie.
// Drop a file in and it's picked up automatically — no file means the card
// falls back to its react-useanimations line icon. When several formats
// share a stem we prefer richer playback: .lottie > .json > .svg.
const animModules = import.meta.glob('../assets/lottie/job-*.{lottie,json,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const extRank = (url: string) =>
  url.endsWith('.lottie') ? 3 : url.endsWith('.json') ? 2 : 1

const anims: Record<string, string> = {}
for (const [path, url] of Object.entries(animModules)) {
  const stem = path.split('/').pop()!.replace(/\.[^.]+$/, '')
  if (!anims[stem] || extRank(url) > extRank(anims[stem])) anims[stem] = url
}

// react-useanimations is CommonJS; Vite's interop can hand back the wrapped
// module object, so unwrap `.default` when present.
const unwrap = <T,>(m: T): T => (m as { default?: T })?.default ?? m
const UseAnimations = unwrap(UseAnimationsRaw)

// Free Lottie line-icon animations (react-useanimations) mapped per card.
const icons = {
  visibility: unwrap(visibilityRaw),
  maximizeMinimize: unwrap(maximizeMinimizeRaw),
  codepen: unwrap(codepenRaw),
  settings: unwrap(settingsRaw),
  share: unwrap(shareRaw),
  edit: unwrap(editRaw),
}

type ApproachItem = (typeof about.approach.items)[number]

// The illustration that sits on one side of each row: a dotLottie animation
// when present, an animated SVG as <img>, else the line-icon fallback.
function Media({ item }: { item: ApproachItem }) {
  const key = (item as { anim?: string }).anim
  const src = key ? anims[key] : undefined

  if (src && (src.endsWith('.lottie') || src.endsWith('.json'))) {
    return <DotLottieReact className="approach-row__lottie" src={src} loop autoplay />
  }
  if (src) {
    return <img className="approach-row__illust" src={src} alt="" />
  }
  return (
    <UseAnimations
      animation={icons[item.icon as keyof typeof icons]}
      size={120}
      strokeColor="#178bf5"
      loop
      autoplay
    />
  )
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        {/* <Reveal className="about__intro">
          <p className="about__eyebrow">{about.eyebrow}</p>
          <h2 className="about__title">{about.title}</h2>
          <p className="about__lead">{about.lead}</p>
          <div className="about__body">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal> */}

        <div className="about__approach">
          <Reveal className="approach-head" replay>
            <h3 className="approach-head__title">What I Do</h3>
            {/* <span className="approach-head__badge" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path
                    id="approach-badge-path"
                    d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                  />
                </defs>
                <text>
                  <textPath href="#approach-badge-path">
                    NITIDA STUDIO · UX PUBLISHER · NITIDA STUDIO · UX PUBLISHER ·
                  </textPath>
                </text>
              </svg>
              <span className="approach-head__badge-dot" />
            </span> */}
          </Reveal>

          <div className="approach-rows">
            {about.approach.items.map((item, i) => (
              <Reveal key={item.no} className="approach-row" delay={i * 60} replay>
                <div className="approach-row__media">
                  <Media item={item} />
                </div>
                <div className="approach-row__text">
                  <p className="approach-row__eyebrow">
                    <span className="approach-row__no">{item.no}</span>
                    {item.title}
                  </p>
                  <h4 className="approach-row__title">{item.en}</h4>
                  <p className="approach-row__body">{item.body}</p>
                  <ul className="approach-row__tags">
                    {item.tags.map((tag) => (
                      <li key={tag} className="approach-row__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
