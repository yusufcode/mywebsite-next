import Link from 'next/link'
import styles from '../styles/NavbarMenu.module.scss'

const menuItems = [
    {title: "Home", link: "/"},
    {title: "Crypto Calculator", link: "crypto-calculator"}
]

export default function NavbarMenu({onClick}) {
    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                {
                    menuItems.map((item, index) => (
                        <li key={index} className={styles.li} onClick={onClick}>
                            <Link href={item.link}>
                                <a className={styles.link}>{item.title}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}