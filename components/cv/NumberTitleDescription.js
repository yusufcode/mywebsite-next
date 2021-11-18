import styles from '../../styles/cv/NumberTitleDescription.module.scss'

export default function NumberTitleDescription({titlesAndDescription}) {
  return (
    <div className={styles.numberTitleDescription}>
      <ol className={styles.ol}>
        {
          titlesAndDescription.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.title}>{item.title}</h3>
              </div>

              <div className={styles.body}>
                <p className={styles.text}>{item.description}</p>
              </div>
            </li>
          ))
        }
      </ol>
    </div>
  )
}
