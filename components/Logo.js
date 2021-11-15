import React from 'react'
import Image from 'next/image'
import styles from '../styles/Logo.module.scss'

export default function Logo({width, height, shadow, quality}) {

    let className = styles.logo

    if(shadow === 'lg'){
        className = styles.logo + ' ' + styles.lg
    } else {
        className = styles.logo + ' ' + styles.sm
    }
    
    return (
        <div className={className}>
            <Image 
                src="/img/logo/logo.png"
                alt="yusufcode.com"
                width={width} 
                height={height}
                quality={quality}
            />
        </div>
    )
}
