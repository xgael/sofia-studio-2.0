import { Scissors, Sparkles, Palette, Star } from 'lucide-react'
import styles from './Services.module.css'

const ICON_MAP = {
  scissors: Scissors,
  sparkles: Sparkles,
  palette: Palette,
}

function ServiceCard({ service }) {
  const Icon = ICON_MAP[service.icon] || Star

  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <Icon size={24} color="var(--brand-gold)" />
      </div>
      <h3 className={styles.cardName}>{service.name}</h3>
      <p className={styles.cardDesc}>{service.description}</p>
      <span className={styles.cardPrice}>Desde ${service.price} {service.currency}</span>
    </div>
  )
}

export default ServiceCard
