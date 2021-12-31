import {useState} from 'react'   
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import Logo from './Logo'
import Button from './Button'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function Navbar() {

    const [menu, setMenu] = useState(0)

    function menuTrigger(){
        return !menu
    }

    function closeMenu(){

        if(window.innerWidth < 768){
            setTimeout(function (){
                setMenu(false)
            }, 40)
        } else{
            setMenu(false)
        }
        
    }

    const menuItems = [
        {title: "Home", link: "/"},
        // {title: "Crypto Calculator", link: "crypto-calculator"},
        {title: "Improve Language", link: "improve-language"}
        // {title: "CV (Resume)", link: "cv-resume"}
    ]

    let menuContainerClasses = menu ? `${styles.menuContainer} ${styles.menuContainerShow}` : styles.menuContainer
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link href="/" >
                    <a onClick={() => closeMenu()}>
                        <Logo width="60" height="60" shadow="sm"/>
                    </a>
                </Link>

                <Button 
                    title={menu ? <CloseIcon/> : <MenuIcon/>}
                    buttonType="icon"
                    color="dark"
                    onClick={() => setMenu(menuTrigger())} 
                />

                <div className={menuContainerClasses}>
                    <ul className={styles.ul} onClick={() => closeMenu()}>
                        {
                            menuItems.map((item, index) => (
                                <li key={index} className={styles.li}>
                                    <Link href={item.link}>
                                        <a className={styles.link}>{item.title}</a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
            </div>
        </div>
    )
}



