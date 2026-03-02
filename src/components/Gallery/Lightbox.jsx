import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Lightbox.module.css'

function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  const image = images[currentIndex]

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1)
    if (e.key === 'ArrowRight' && currentIndex < images.length - 1) onNavigate(currentIndex + 1)
  }, [currentIndex, images.length, onClose, onNavigate])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-label="Visor de imagen">
      <button className={styles.close} onClick={onClose} aria-label="Cerrar">
        <X size={24} />
      </button>

      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {currentIndex > 0 && (
          <button className={`${styles.nav} ${styles.prev}`} onClick={() => onNavigate(currentIndex - 1)} aria-label="Imagen anterior">
            <ChevronLeft size={28} />
          </button>
        )}

        <img src={image.src} alt={image.alt} className={styles.image} />

        {currentIndex < images.length - 1 && (
          <button className={`${styles.nav} ${styles.next}`} onClick={() => onNavigate(currentIndex + 1)} aria-label="Imagen siguiente">
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      <span className={styles.counter}>{currentIndex + 1} / {images.length}</span>
    </div>
  )
}

export default Lightbox
