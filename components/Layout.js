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
      <Navbar />
      <div className="mainContainer">
        <div className="container">{children}</div>
      </div>
    </>
  )
}
