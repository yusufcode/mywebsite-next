import styles from '../../styles/cv/SectionDescription.module.scss'

export default function SectionDescription({text}) {
  return (
    <div className={styles.description}>
      <p className={styles.descriptionText}>{text}</p>
    </div>
  )
}
