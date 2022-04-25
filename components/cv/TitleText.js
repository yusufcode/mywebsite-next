import styles from '../../styles/cv/TitleText.module.scss'

export default function TitleText({title, text, link}) {    
  return (
    <>
    {link ?
      <p className={styles.titleText}>
          <span className={styles.title}>{title}: </span><a href={link} className={styles.link}>{text}</a>
      </p>
      : 
      <p className={styles.titleText}>
          <span className={styles.title}>{title}: </span>{text}
      </p>
    }
    </>
  )
}
