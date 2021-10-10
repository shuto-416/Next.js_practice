import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>

      <Head>
        <title>Hamachan</title>
        <meta name="title-tab" content="template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hone-body">
        <div className="main-page">
          <h1>Do you enjoy</h1>
          <h1>your LIFE ?</h1>
        </div>
      </div>

    </div>
  )
}

export default Home
