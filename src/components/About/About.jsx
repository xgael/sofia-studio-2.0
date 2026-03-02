import { useRef } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { getAbout } from '../../services/dataService'
import Counter from './Counter'
import styles from './About.module.css'

function About() {
  const data = getAbout()
  const sectionRef = useRef(null)

  useGSAP((gsap, ScrollTrigger) => {
    // Image parallax
    gsap.to(`.${styles.image}`, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })

    // Content fade-in
    gsap.from(`.${styles.content} > *`, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    })
  }, sectionRef)

  return (
    <section className={styles.section} id="nosotros" ref={sectionRef}>
      <div className={styles.imageWrap}>
        <img
          src={data.image}
          alt="Interior de Sofia Studio"
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <span className={styles.tag}>{data.tag}</span>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>

        <div className={styles.stats}>
          {data.stats.map((stat, i) => (
            <Counter
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals || 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
