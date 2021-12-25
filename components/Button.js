import styles from '../styles/Button.module.scss'

export default function Button({ title, className, buttonType, disabled, onClick, color, size }) {

    let buttonTypeClass = styles.btn
    let colorClass = 'dark'
    let sizeClass = 'm'

    if(buttonType == 'primary'){
        buttonTypeClass = styles.btn +' '+ styles.primary
    } else if(buttonType == 'outline'){
        buttonTypeClass = styles.btn +' '+ styles.outline
    } else if(buttonType == 'icon'){
        buttonTypeClass = styles.btn +' '+ styles.icon
    } 

    if(disabled){
        buttonTypeClass = buttonTypeClass + ' ' + styles.disabled
    }

    if(color == 'dark'){
        colorClass = styles.dark
    } else if (color == 'light'){
        colorClass = styles.light
    } else if (color == 'white'){
        colorClass = styles.white
    } 

    if(size == 's'){
        sizeClass = styles.small
    } else if (size == 'm'){
        sizeClass = styles.medium
    } else if (size == 'l'){
        sizeClass = styles.large
    } 
    
    return <button className={buttonTypeClass + ' ' + colorClass + ' ' + sizeClass + ' ' + className} onClick={onClick}>{title}</button>
}
