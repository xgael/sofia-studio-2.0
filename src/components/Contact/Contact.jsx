import { useRef } from 'react'
import { MapPin, Phone, Calendar, Instagram, Facebook } from 'lucide-react'
import { useGSAP } from '../../hooks/useGSAP'
import { getContact } from '../../services/dataService'
import SectionTitle from '../ui/SectionTitle'
import styles from './Contact.module.css'

function ContactBlock({ icon: Icon, label, children }) {
  return (
    <div className={styles.block}>
      <div className={styles.iconWrap}>
        <Icon size={20} color="var(--brand-gold)" />
      </div>
      <div className={styles.blockText}>
        <span className={styles.blockLabel}>{label}</span>
        {children}
      </div>
    </div>
  )
}

function Contact() {
  const data = getContact()
  const sectionRef = useRef(null)

  useGSAP((gsap, ScrollTrigger) => {
    gsap.from(`.${styles.block}, .${styles.social}`, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
      clearProps: 'opacity,transform',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from(`.${styles.mapWrap}`, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      clearProps: 'opacity',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })
  }, sectionRef)

  return (
    <section className={styles.section} id="contacto" ref={sectionRef}>
      <SectionTitle tag="CONTACTO" title="Encuéntranos" />

      <div className={styles.row}>
        <div className={styles.info}>
          <ContactBlock icon={MapPin} label="Dirección">
            <p className={styles.blockValue}>
              {data.address.street},<br />
              {data.address.area},<br />
              {data.address.city}
            </p>
          </ContactBlock>

          <ContactBlock icon={Phone} label="Teléfono">
            <a href={`tel:${data.phone}`} className={styles.blockValue}>{data.phone}</a>
          </ContactBlock>

          <ContactBlock icon={Calendar} label="Horario">
            {data.hours.map((h, i) => (
              <p key={i} className={styles.blockValue}>{h.days}: {h.time}</p>
            ))}
          </ContactBlock>

          <div className={styles.social}>
            <a href={data.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <Instagram size={20} color="var(--brand-gold)" />
            </a>
            <a href={data.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <Facebook size={20} color="var(--brand-gold)" />
            </a>
          </div>
        </div>

        <div className={styles.mapWrap}>
          <span className={styles.mapLabel}>Google Maps</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
