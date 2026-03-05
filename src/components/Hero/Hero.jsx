import { useRef } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { getHero } from '../../services/dataService'
import Button from '../ui/Button'
import styles from './Hero.module.css'

function Hero() {
  const data = getHero()
  const sectionRef = useRef(null)

  useGSAP((gsap) => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.from(`.${styles.badge}`, { y: -20, opacity: 0, duration: 0.5, clearProps: 'opacity,transform' })
      .from(`.${styles.titleLine1}`, { y: 60, opacity: 0, duration: 0.8, clearProps: 'opacity,transform' }, '-=0.2')
      .from(`.${styles.titleLine2}`, { y: 60, opacity: 0, duration: 0.8, clearProps: 'opacity,transform' }, '-=0.5')
      .from(`.${styles.description}`, { y: 30, opacity: 0, duration: 0.6, clearProps: 'opacity,transform' }, '-=0.4')
      .from(`.${styles.buttons} > *`, { y: 20, opacity: 0, duration: 0.5, stagger: 0.15, clearProps: 'opacity,transform' }, '-=0.3')
      .from(`.${styles.imageWrap}`, { y: 40, opacity: 0, scale: 0.98, duration: 1, ease: 'power2.out', clearProps: 'opacity,transform' }, '-=0.4')
  }, sectionRef)

  return (
    <section className={styles.hero} id="hero" ref={sectionRef}>
      <div className={styles.content}>
        <span className={styles.badge}>{data.badge}</span>

        <div className={styles.titleWrap}>
          <h1 className={styles.titleLine1}>{data.titleLine1}</h1>
          <h1 className={styles.titleLine2}>{data.titleLine2}</h1>
        </div>

        <p className={styles.description}>{data.description}</p>

        <div className={styles.buttons}>
          <Button href={data.ctaPrimary.link}>{data.ctaPrimary.text}</Button>
          <Button href={data.ctaSecondary.link} variant="secondary">{data.ctaSecondary.text}</Button>
        </div>
      </div>

      <div className={styles.imageWrap}>
        <img
          src={data.image}
          alt="Sofia Studio - espacio de belleza profesional"
          className={styles.image}
          loading="eager"
          fetchpriority="high"
        />
      </div>
    </section>
  )
}

export default Hero
