import { useRef, useState } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { getGallery } from '../../services/dataService'
import SectionTitle from '../ui/SectionTitle'
import Lightbox from './Lightbox'
import styles from './Gallery.module.css'

function Gallery() {
  const images = getGallery()
  const sectionRef = useRef(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const col1 = [images[0], images[3]].filter(Boolean)
  const col2 = [images[1], images[4]].filter(Boolean)
  const col3 = [images[2], images[5]].filter(Boolean)

  useGSAP((gsap, ScrollTrigger) => {
    gsap.from(`.${styles.imageWrap}`, {
      y: 60,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power2.out',
      clearProps: 'opacity,transform',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, sectionRef)

  const handleImageClick = (imageId) => {
    const index = images.findIndex(img => img.id === imageId)
    if (index !== -1) setLightboxIndex(index)
  }

  return (
    <section className={styles.section} id="galeria" ref={sectionRef}>
      <SectionTitle
        tag="GALERÍA"
        title="Nuestro trabajo"
      />
      <div className={styles.grid}>
        {[col1, col2, col3].map((col, colIndex) => (
          <div key={colIndex} className={styles.column}>
            {col.map((img, imgIndex) => (
              <div
                key={img.id}
                className={`${styles.imageWrap} ${imgIndex === 0 ? styles.tall : styles.short}`}
                onClick={() => handleImageClick(img.id)}
                role="button"
                tabIndex={0}
                aria-label={`Ver imagen: ${img.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && handleImageClick(img.id)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}

export default Gallery
