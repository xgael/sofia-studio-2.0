import styles from './SectionTitle.module.css'

function SectionTitle({ tag, title, description, light = false }) {
  return (
    <div className={`${styles.wrapper} ${light ? styles.light : ''}`}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}

export default SectionTitle
