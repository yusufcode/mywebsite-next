import '../styles/globals.css'
import React from 'react'
import Layout from '../components/Layout'
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      <Script strategy="lazyOnLoad" src={`https://www.googletagmanager.com/gtag/js?id=G-E4S3SMK9KN`}/>
      <Script strategy="lazyOnLoad">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-E4S3SMK9KN');
        `}
      </Script>
      
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
