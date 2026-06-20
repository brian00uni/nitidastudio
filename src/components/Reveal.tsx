import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useInView } from '../hooks/useInView'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Stagger delay in ms, applied as an inline transition-delay. */
  delay?: number
  /**
   * Replay the reveal every time the element re-enters the viewport (the
   * Stats-style interaction). Defaults to a one-shot reveal.
   */
  replay?: boolean
}

// Wraps content so it fades/slides up when scrolled into view.
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  replay = false,
}: RevealProps) {
  // Both hooks run, but only the attached ref creates an observer — the
  // other's ref stays null and its effect early-returns.
  const once = useReveal<HTMLElement>()
  const repeat = useInView<HTMLElement>({ threshold: 0.15 })
  const ref = replay ? repeat.ref : once.ref
  const visible = replay ? repeat.inView : once.visible

  return (
    <Tag
      ref={ref}
      className={`reveal ${replay ? 'reveal--replay ' : ''}${
        visible ? 'is-visible' : ''
      } ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
