import Head from "next/head";
import styles from "../styles/Index.module.scss";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yusuf Code</title>
        <meta name="description" content="Hello! I'm Yusuf, full-stack web developer."/>
        <meta name="keywords" content="yusufcode, yusuf code, web developer, full stack web developer, freelance web developer"/>
      </Head>

      <div className={styles.centeredLogo}>
        <Logo width="225" height="225" shadow="lg" className={styles.indexPageLogo}/>
      </div>

    </>
  );
}
