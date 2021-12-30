import Navbar from "./Navbar";
import Head from "next/head";
import Script from "next/script"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/logo/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
      </Head>

      <Script id="gad" strategy="lazyOnload" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9732757580085068`}/>

      <Script id="ga1" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-E4S3SMK9KN`}/>
      <Script id="ga2" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-E4S3SMK9KN');
        `}
      </Script>
      
      <Navbar />
      <div className="mainContainer">
        <div className="container">{children}</div>
      </div>
    </>
  )
}
