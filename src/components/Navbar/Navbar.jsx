import { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { gsap, ScrollTrigger } from '../../animations/gsapConfig'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const isDark = theme === 'dark'
    const scrolledBg = isDark ? 'rgba(30, 27, 24, 0.95)' : 'rgba(250, 247, 242, 0.95)'
    const scrolledShadow = isDark ? '0 2px 20px rgba(0, 0, 0, 0.2)' : '0 2px 20px rgba(44, 40, 37, 0.08)'

    const trigger = ScrollTrigger.create({
      start: 'top -80',
      onEnter: () => {
        gsap.to(nav, {
          backgroundColor: scrolledBg,
          backdropFilter: 'blur(10px)',
          boxShadow: scrolledShadow,
          duration: 0.3,
        })
      },
      onLeaveBack: () => {
        gsap.to(nav, {
          backgroundColor: 'transparent',
          backdropFilter: 'none',
          boxShadow: 'none',
          duration: 0.3,
        })
      },
    })

    return () => trigger.kill()
  }, [theme])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={styles.navbar} id="navbar" ref={navRef}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo} onClick={(e) => handleNavClick(e, '#hero')}>
            Sofia Studio
          </a>

          <ul className={styles.links}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className={styles.link} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <Button href="#reservar" className={styles.cta} onClick={(e) => handleNavClick(e, '#reservar')}>Reservar</Button>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — fuera del nav para evitar el containing block de backdrop-filter */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <X size={24} />
        </button>
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className={styles.mobileLink} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileActions}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button href="#reservar" onClick={(e) => handleNavClick(e, '#reservar')}>Reservar</Button>
        </div>
      </div>
    </>
  )
}

export default Navbar
