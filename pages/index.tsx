import Head from "next/head";
import styles from "../styles/Home.module.scss";
import CryptoTable from "../components/CryptoTable";

export default function WS() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Real-Time Crypto Prices</title>
        <meta name="description" content="Real-Time Crypto Prices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CryptoTable  />
    </div>
  );
}
