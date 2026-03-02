import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsapConfig'

export function useGSAP(animationFn, containerRef, deps = []) {
  const ctx = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    ctx.current = gsap.context(() => {
      animationFn(gsap, ScrollTrigger)
    }, containerRef.current)

    return () => ctx.current?.revert()
  }, deps)

  return ctx
}
