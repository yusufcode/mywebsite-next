import Head from 'next/head'
import styles from '../styles/Index.module.scss'
import Logo from '../components/Logo'
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Yusuf Code</title>
        <meta name="description" content="Hello! I'm Yusuf, full-stack web developer." />
        <meta name="keywords" content="yusufcode, yusuf code, web developer, full stack web developer, freelance web developer"></meta>
        <link rel="icon" href="/img/logo/logo1.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
      </Head>

      <div className={styles.mainContainer}>  
        <div className={styles.container}>
          <Logo width="225" height="225" shadow="lg"/>
        </div>
      </div>
      
    </>
  )
}
