import styles from '../../styles/cv/NumberLiList.module.scss'

export default function NumberLiList({title, liArray}) {
  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        <h3 className={styles.listTitle}>{title}</h3>
      </div>

      <ol className={styles.listOl}>

        {
          liArray.map((li, index) => (
            <li key={index} className={styles.listLi}>{li}</li>
          ))
        }
        
      </ol>
    </div>
  )
}
