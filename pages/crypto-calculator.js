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
          <link rel="icon" href="/img/logo/logo-circle.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
        </Head>
  
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Input
                    label="Budget"
                    id="budget"
                    type="number"
                    placeholder="Type your budget. Exp: 100"
                ></Input>
                <Input
                    label="Starting Price"
                    id="startingPrice"
                    type="number"
                    placeholder="Cost of the coin when you want to start to trade. Exp: 0.5"
                ></Input>
                <Input
                    label="Exchange Price"
                    id="exchangePrice"
                    type="number"
                    placeholder="Cost of the coin when you want to exchange it. Exp: 0.75"
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