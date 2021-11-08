import styles from '../styles/Button.module.scss'

export function Button({ title, onClick }) {
    return <button className={styles.btn} onClick={onClick}>{title}</button>
}

export function PrimaryButton({ title, onClick }) {
    return <button className={styles.btn + ' ' + styles.primary} onClick={onClick}>{title}</button>
}

export function OutlineButton({ title, onClick }) {
    return <button className={styles.btn  + ' ' + styles.outline} onClick={onClick}>{title}</button>
}

export function IconButton({ icon, onClick }) {
    return <button className={styles.btn + ' ' + styles.icon} onClick={onClick}>{icon}</button>
}