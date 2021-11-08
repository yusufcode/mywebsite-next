import '../styles/globals.css'
import React from 'react'
import Router from 'next/router'
import nProgress from 'nprogress'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    const start = () => nProgress.start()
    const done = () => nProgress.done()

    Router.events.on("routeChangeStart", start)
    Router.events.on('routeChangeComplate', done)
    Router.events.on('routeChangeError', done)

    console.log('worked pb')

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplate', done)
      Router.events.off('routeChangeError', done)

    console.log('worked bp')


    }
  }, [])
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
