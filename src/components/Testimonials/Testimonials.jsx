import { useRef } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { getTestimonials } from '../../services/dataService'
import SectionTitle from '../ui/SectionTitle'
import TestimonialCard from './TestimonialCard'
import styles from './Testimonials.module.css'

function Testimonials() {
  const testimonials = getTestimonials()
  const sectionRef = useRef(null)

  useGSAP((gsap, ScrollTrigger) => {
    gsap.from(`.${styles.card}`, {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, sectionRef)

  return (
    <section className={styles.section} id="testimonios" ref={sectionRef}>
      <SectionTitle
        tag="TESTIMONIOS"
        title="Lo que dicen nuestras clientas"
      />
      <div className={styles.grid}>
        {testimonials.map(t => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
