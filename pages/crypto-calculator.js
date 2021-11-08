import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/CryptoCalculator.module.scss'
import Navbar from "../components/Navbar"
import Input from "../components/Input"
import {PrimaryButton} from "../components/Button"

export default function Home() {

    const [earned, setEarned] = useState(0)

    function calculateEarned() {
        const budget = document.getElementById("budget").value
        const startingPrice = document.getElementById("startingPrice").value
        const exchangePrice = document.getElementById("exchangePrice").value

        const final = (budget / startingPrice) * exchangePrice

        if(final) return final
        else return 0
    }
    
    return (
      <>
        <Head>
          <title>Crypto Calculator - Yusuf Code</title>
          <meta name="description" content="You can calculate your crypto coin gain or lose." />
          <meta name="keywords" content="yusufcode, yusuf code, crypto calculator"></meta>
          <link rel="icon" href="/img/logo/logo1.png" />
        </Head>
  
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Input
                    label="Budget"
                    id="budget"
                    placeholder="Type your budget"
                ></Input>
                <Input
                    label="Starting Price"
                    id="startingPrice"
                    placeholder="Cost of the coin when you want to start trade"
                ></Input>
                <Input
                    label="Exchange Price"
                    id="exchangePrice"
                    placeholder="Cost of the coin when you want to exchange it"
                ></Input>

                <PrimaryButton
                    title="Calculate"
                    onClick={() => setEarned(calculateEarned())}
                ></PrimaryButton>

                <p>{earned}</p>
            </div>
        </div>
        
      </>
    )
  }