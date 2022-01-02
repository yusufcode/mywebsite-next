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

      <Script id="gad" strategy="lazyOnload" src={`${process.env.NEXT_PUBLIC_API_GOOGLE_ADSENSE}`}/>

      <Script id="ga1" strategy="lazyOnload" src={`${process.env.NEXT_PUBLIC_API_GOOGLE_ANALYTICS}`}/>
      <Script id="ga2" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_API_GOOGLE_ANALYTICS2}');
        `}
      </Script>
      
      <Navbar />
      <div className="mainContainer">
        <div className="container">{children}</div>
      </div>
    </>
  )
}
