import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Real-Time Crypto Prices</title>
        <meta name="description" content="Real-Time Crypto Prices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/ws">
        <span style={{ cursor: "pointer", color: "white" }}>go to ws page</span>
      </Link>
    </div>
  )
}
