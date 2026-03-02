import { getContact } from '../../services/dataService'
import styles from './Footer.module.css'

function Footer() {
  const contact = getContact()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <span className={styles.logo}>Sofia Studio</span>
          <span className={styles.tagline}>Tu espacio de belleza y bienestar</span>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <span className={styles.colTitle}>Navegación</span>
            <a href="#hero" className={styles.colLink} onClick={(e) => handleNavClick(e, '#hero')}>Inicio</a>
            <a href="#servicios" className={styles.colLink} onClick={(e) => handleNavClick(e, '#servicios')}>Servicios</a>
            <a href="#nosotros" className={styles.colLink} onClick={(e) => handleNavClick(e, '#nosotros')}>Nosotros</a>
            <a href="#galeria" className={styles.colLink} onClick={(e) => handleNavClick(e, '#galeria')}>Galería</a>
          </div>

          <div className={styles.column}>
            <span className={styles.colTitle}>Contacto</span>
            <a href={`tel:${contact.phone}`} className={styles.colLink}>{contact.phone}</a>
            <a href={contact.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.colLink}>Instagram</a>
            <a href={contact.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.colLink}>Facebook</a>
            <a href={contact.freshaUrl} target="_blank" rel="noopener noreferrer" className={styles.colLink}>Fresha</a>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <span className={styles.copy}>&copy; {new Date().getFullYear()} Sofia Studio 2.0. Todos los derechos reservados.</span>
        <span className={styles.madeWith}>Hecho con ♥ en Milpa Alta</span>
      </div>
    </footer>
  )
}

export default Footer
