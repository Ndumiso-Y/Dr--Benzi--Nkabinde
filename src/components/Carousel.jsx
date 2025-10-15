import React, { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Carousel with:
 * - Mobile swipe (touch) support
 * - Autoplay (default true) with pause on hover/touch/focus
 * - Smooth snap-scrolling
 */
export default function Carousel({ images = [], autoplay = true, interval = 3000, stepPx = 400 }){
  const trackRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const getStep = useCallback(() => {
    const track = trackRef.current
    if (!track || track.children.length === 0) return stepPx
    const first = track.children[0]
    const style = window.getComputedStyle(first)
    const marginRight = parseFloat(style.marginRight || "0")
    return first.getBoundingClientRect().width + marginRight
  }, [stepPx])

  const scrollBy = useCallback((dx) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: dx, behavior: 'smooth' })
  }, [])

  const next = useCallback(() => scrollBy(getStep()), [scrollBy, getStep])
  const prev = useCallback(() => scrollBy(-getStep()), [scrollBy, getStep])

  useEffect(() => {
    if (!autoplay) return
    if (typeof window === 'undefined') return
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    let timer = null
    const start = () => {
      if (timer) clearInterval(timer)
      timer = setInterval(() => { if (!isPaused) next() }, interval)
    }
    const stop = () => { if (timer) { clearInterval(timer); timer = null } }
    start(); return () => stop()
  }, [autoplay, interval, isPaused, next])

  const pause = () => setIsPaused(true)
  const resume = () => setIsPaused(false)

  const touchData = useRef({ x: 0, active: false })
  const onTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return
    const t = e.touches[0]
    touchData.current = { x: t.clientX, active: true }
    pause()
  }
  const onTouchEnd = (e) => {
    if (!touchData.current.active) return
    const changed = e.changedTouches && e.changedTouches[0]
    const dx = changed ? (changed.clientX - touchData.current.x) : 0
    const threshold = 40
    if (dx < -threshold) next(); else if (dx > threshold) prev()
    touchData.current.active = false
    setTimeout(resume, 600)
  }

  return (
    <div className="relative" onMouseEnter={pause} onMouseLeave={resume} onFocus={pause} onBlur={resume}>
      <button aria-label="Prev" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full px-3 py-2 border hover:bg-white">‹</button>
      <div ref={trackRef} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
           onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {images.map((src,i)=>(<img key={i} src={src} alt={`gallery-${i}`} className="h-48 md:h-64 rounded-xl object-cover snap-start select-none" draggable={false}/>))}
      </div>
      <button aria-label="Next" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full px-3 py-2 border hover:bg-white">›</button>
    </div>
  )
}
