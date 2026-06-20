import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { projects } from '../data/content'
import Reveal from './Reveal'

type Project = (typeof projects.items)[number]

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <Reveal className="section-head" replay>
          {/* <p className="section-head__eyebrow">{projects.title}</p> */}
          <h2 className="section-head__title">{projects.eyebrow}</h2>
        </Reveal>

        <div className="projects__grid">
          {projects.items.map((p, i) => (
            <Reveal key={p.no} className="projects__card" delay={i * 120} replay>
              <button
                type="button"
                className="projects__card-btn"
                onClick={() => setActive(p)}
                aria-haspopup="dialog"
              >
                <span className="projects__ci">
                  {p.logos?.length ? (
                    p.logos.map((src) => (
                      <span
                        key={src}
                        className="projects__ci-img"
                        style={{ backgroundImage: `url(${src})` }}
                        role="img"
                        aria-label={p.brand}
                      />
                    ))
                  ) : (
                    <span className="projects__ci-text">{p.brand}</span>
                  )}
                </span>
                <h3 className="projects__name">{p.name}</h3>
                <span className="projects__more">
                  자세히 보기
                  <span aria-hidden="true">→</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return createPortal(
    <div
      className="projects-modal"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      onClick={onClose}
    >
      <div className="projects-modal__panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="projects-modal__close"
          onClick={onClose}
          aria-label="닫기"
        >
          ✕
        </button>

        <div className="projects-modal__ci">
          {project.logos?.length ? (
            project.logos.map((src) => (
              <span
                key={src}
                className="projects-modal__ci-img"
                style={{ backgroundImage: `url(${src})` }}
                role="img"
                aria-label={project.brand}
              />
            ))
          ) : (
            <span className="projects-modal__ci-text">{project.brand}</span>
          )}
        </div>

        <h3 className="projects-modal__title">{project.name}</h3>

        {(() => {
          const meta = [
            project.org,
            project.period,
            project.team,
            project.role,
            project.contribution ? `기여도 ${project.contribution}` : undefined,
          ].filter(Boolean)
          if (meta.length === 0) return null
          return (
            <div className="projects-modal__meta">
              {meta.map((m, i) => (
                <span key={m} className="projects-modal__meta-item">
                  {i > 0 && <span className="projects-modal__dot">·</span>}
                  {m}
                </span>
              ))}
            </div>
          )
        })()}

        {project.summary && (
          <p className="projects-modal__summary">{project.summary}</p>
        )}

        {project.stack && project.stack.length > 0 && (
          <ul className="projects-modal__stack">
            {project.stack.map((tech) => (
              <li key={tech} className="projects-modal__tech">
                {tech}
              </li>
            ))}
          </ul>
        )}

        {project.responsibilities && project.responsibilities.length > 0 && (
          <div className="projects-modal__roles">
            <p className="projects-modal__roles-label">수행 업무 및 역할</p>
            <ul className="projects-modal__roles-list">
              {project.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div className="projects-modal__achievements">
            {/* <p className="projects-modal__achievements-label">주요 성과</p> */}
            <ul className="projects-modal__highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}
