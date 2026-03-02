import styles from './About.module.css'

function Counter({ value, suffix = '', label, decimals = 0 }) {
  const display = decimals > 0 ? value.toFixed(decimals) : value

  return (
    <div className={styles.stat}>
      <span className={styles.statNumber}>{display}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default Counter
