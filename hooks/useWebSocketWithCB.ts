import { useEffect } from "react";

const useWebSocketWithCB = (url: string, callback: any) => {
  useEffect(() => {
    const ws = new WebSocket(url);
    ws.onmessage = (e: { data: string }) => {
      const data = JSON.parse(e.data);
      callback(data);
    };

    return () => ws.close();
  }, [url]);
};

export default useWebSocketWithCB;
