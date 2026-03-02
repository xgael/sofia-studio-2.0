import styles from './Testimonials.module.css'

function TestimonialCard({ testimonial }) {
  return (
    <div className={styles.card}>
      <span className={styles.stars} aria-label={`${testimonial.stars} de 5 estrellas`} role="img">{'★'.repeat(testimonial.stars)}</span>
      <blockquote className={styles.quote}>«{testimonial.quote}»</blockquote>
      <div className={styles.divider} />
      <span className={styles.name}>{testimonial.name}</span>
      <span className={styles.role}>{testimonial.role}</span>
    </div>
  )
}

export default TestimonialCard
