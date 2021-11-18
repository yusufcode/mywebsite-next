import styles from '../../styles/cv/Header.module.scss'

export default function Header({title}) {
    return (
        <div className={styles.sectionHeaderCover}>
            <div className={styles.sectionHeaderLine}></div>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionHeaderTitle}>{title}</h2>
            </div>
        </div>
    )
}
