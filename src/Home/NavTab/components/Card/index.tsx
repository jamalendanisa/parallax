import styles from './styles.module.scss'

interface CardProps {
  src: string,
  link: string
}

export const Card = ({ src, link }: CardProps) => (
  <span className={styles.card}>
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <img className={styles.card__blur} src={src} alt="" />
      <img className={styles.card__img} src={src} alt="" />
    </a>
  </span>
)
