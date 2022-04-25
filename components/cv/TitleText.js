import styles from '../../styles/cv/TitleText.module.scss'

export default function TitleText({title, text, linkMail, linkTel, linkLinkedin}) {    
  return (
    <>
    {linkMail ?
      <p className={styles.titleText}>
          <span className={styles.title}>{title}: </span><a href={`mailto:${linkMail}`} className={styles.link}>{text}</a>
      </p>
      : linkTel ?
      <p className={styles.titleText}>
          <span className={styles.title}>{title}: </span><a href={`tel:${linkTel}`} className={styles.link}>{text}</a>
      </p>
      : linkLinkedin ?
      <p className={styles.titleText}>
          <span className={styles.title}>{title}: </span><a href={`www.linkedin.com/in/${linkLinkedin}`} className={styles.link}>{text}</a>
      </p>
      : 
      <p className={styles.titleText}>
          <span className={styles.title}>{title}: </span>{text}
      </p>
    }
    </>
  )
}
