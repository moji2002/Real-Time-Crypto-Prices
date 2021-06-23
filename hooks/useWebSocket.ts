import { useEffect, useState } from 'react'

const useWebSocket = (url: string) => {
    const [data, setData] = useState()

    const onMessageHandler = (e: { data: string }) => {
        const data = JSON.parse(e.data)
        setData(data)
    }

    useEffect(() => {
        const ws = new WebSocket(url)
        ws.onmessage = onMessageHandler
        return () => ws.close()
    }, [url])

    return [data]
}


export default useWebSocket