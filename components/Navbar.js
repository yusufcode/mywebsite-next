import {useState} from 'react'   
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import Logo from './Logo'
import {IconButton} from './Button'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavbarMenu from './NavbarMenu'


export default function Navbar() {

    const [menu, setMenu] = useState(0)

    function menuTrigger(){
        return !menu
    }

    function closeMenu(){

        if(window.innerWidth < 768){
            setTimeout(function (){
                setMenu(false)
            }, 400)
        } else{
            setMenu(false)
        }
        
    }
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link href="/">
                    <a>
                        <Logo width="60" height="60" shadow="sm"/>
                    </a>
                </Link>

                <IconButton 
                    onClick={() => setMenu(menuTrigger())} 
                    icon={menu ? <CloseIcon/> : <MenuIcon/>}
                />

                {menu ? <NavbarMenu onClick={() => closeMenu()}/> : ''}
                
            </div>
        </div>
    )
}



