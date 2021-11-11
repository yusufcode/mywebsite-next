import React from 'react'
import styles from '../styles/Logo.module.scss'


export default function Logo({width, height, shadow}) {

    let className = styles.logo

    if(shadow === 'lg'){
        className = styles.logo + ' ' + styles.lg
    } else {
        className = styles.logo + ' ' + styles.sm
    }
    
    return (
        <div className={className}>
            <img 
                src="/img/logo/logo1.png"
                alt="yusufcode.com"
                width={width} 
                height={height}
            />
        </div>
    )
}
