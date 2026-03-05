import { useRef } from 'react'
import { MessageCircle } from 'lucide-react'
import { useGSAP } from '../../hooks/useGSAP'
import { getContact } from '../../services/dataService'
import Button from '../ui/Button'
import styles from './CTA.module.css'

function CTA() {
  const contact = getContact()
  const sectionRef = useRef(null)

  useGSAP((gsap, ScrollTrigger) => {
    const children = sectionRef.current?.children
    if (!children) return

    gsap.from(children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      clearProps: 'opacity,transform',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }, sectionRef)

  return (
    <section className={styles.section} id="reservar" ref={sectionRef}>
      <h2 className={styles.title}>¿Lista para verte increíble?</h2>
      <p className={styles.description}>
        Agenda tu cita hoy y descubre por qué somos el espacio de belleza preferido en Milpa Alta.
      </p>

      <div className={styles.buttons}>
        <Button href={contact.freshaUrl}>Reservar en Fresha</Button>
        <Button
          href={`https://wa.me/${contact.whatsapp}`}
          variant="ghost"
        >
          <MessageCircle size={18} />
          WhatsApp
        </Button>
      </div>

      <span className={styles.phone}>{contact.phone}</span>
    </section>
  )
}

export default CTA
