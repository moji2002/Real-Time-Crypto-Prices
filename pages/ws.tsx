import Head from 'next/head'
import useWebSocket from '../hooks/useWebSocket'
import styles from '../styles/Home.module.css'

export default function WS() {
    const URL = "wss://stream.binance.com:9443/ws/btcusdt@bookTicker"
    const [price, previousPrice] = useWebSocket(URL)

    const ask = parseFloat(price?.a)
    const bid = parseFloat(price?.b)

    const previousAsk = parseFloat(previousPrice?.a)
    const previousBid = parseFloat(previousPrice?.b)

    return (
        <div className={styles.container}>
            <Head>
                <title>Real-Time Crypto Prices</title>
                <meta name="description" content="Real-Time Crypto Prices" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <span style={{ color: "white" }}>BTCUSD</span>
            <br/>
            <span style={{ color: "white", backgroundColor: ask === previousAsk ? 'dimgray' : ask < previousAsk ? "red" : "green" }}>ask = {ask}</span>
            <br/>
            <span style={{ color: "white", backgroundColor: bid === previousBid ? 'dimgray' : bid < previousBid ? "red" : "green" }}>bid = {bid}</span>
        </div>
    )
}
