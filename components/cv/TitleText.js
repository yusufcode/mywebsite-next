import styles from '../../styles/cv/TitleText.module.scss'

export default function TitleText({title, text, linkMail, linkTel}) {    
  return (
    <>
    {linkMail ?
      <p className={styles.titleText}>
          <span className={styles.title}>{title}: </span><a href={`mailto:${text}`} className={styles.link}>{text}</a>
      </p>
      : linkTel ?
      <p className={styles.titleText}>
          <span className={styles.title}>{title}: </span><a href={`tel:${text}`} className={styles.link}>{text}</a>
      </p>
      : 
      <p className={styles.titleText}>
          <span className={styles.title}>{title}: </span>{text}
      </p>
    }
    </>
  )
}
