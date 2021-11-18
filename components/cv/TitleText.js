import styles from '../../styles/cv/TitleText.module.scss'

export default function TitleText({title, text, linkMail, linkTel}) {  
  return (
    <p className={styles.titleText}>
      <span className={styles.title}>{title}: </span>{text}
    </p>
  )
}
