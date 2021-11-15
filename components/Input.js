import styles from '../styles/Input.module.scss'

export default function Input({ label, id, type, placeholder }) {
    return (
        <div className={styles.inputCover}>
            {label && <label className={styles.label}>{label}</label>}
            <input className={styles.input} id={id} type={type} placeholder={placeholder}></input>
        </div>
    )
}