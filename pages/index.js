import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Azocar</title>
        <meta name="description" content="Coding for fun and money C:" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.homeContainer}>
        <div className={styles.infoSide}>
          <div className={styles.infoContainer}>
          <h2 className={styles.nameTitle}>Daniel Azocar</h2>
          <div>
            <h2 className={styles.coming}>coming</h2>
            <h2 className={styles.zoom}>soom</h2>

            <p className={styles.infoText}>Site under construction. Soon you will be able to see the works and services that I offer. I hope soon we can work together and help you in your adventure in the web world</p>
          </div>
          </div>
        </div>
        <div className={styles.imgSide}>

        </div>
      </section>
    </div>
  )
}
