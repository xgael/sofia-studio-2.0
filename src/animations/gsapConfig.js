import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.defaults({
  ease: 'power3.out',
  duration: 0.8,
})

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(20)
  ScrollTrigger.config({ limitCallbacks: true })
}

export { gsap, ScrollTrigger, prefersReducedMotion }
