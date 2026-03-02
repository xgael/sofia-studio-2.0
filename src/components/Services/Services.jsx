import { useRef } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { getServices } from '../../services/dataService'
import SectionTitle from '../ui/SectionTitle'
import ServiceCard from './ServiceCard'
import styles from './Services.module.css'

function Services() {
  const services = getServices()
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
    <section className={styles.section} id="servicios" ref={sectionRef}>
      <SectionTitle
        tag="SERVICIOS"
        title="Lo que hacemos por ti"
        description="Cada servicio diseñado para realzar tu belleza con los mejores productos y técnicas profesionales."
      />
      <div className={styles.grid}>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

export default Services
