import { useEffect, useState, useRef } from 'react'

const useWebSocket = (url: string) => {
    const [data, setData] = useState()
    const previousData = useRef()

    const onMessageHandler = (e: { data: string }) => {
        const data = JSON.parse(e.data)
        setData(data)
        previousData.current = data
    }

    useEffect(() => {
        const ws = new WebSocket(url)
        ws.onmessage = onMessageHandler
        
        return () => ws.close()
    }, [url])

    return [data, previousData.current]
}

export default useWebSocket