import { useEffect, useState } from "react"
import io from 'socket.io-client';

const URL = "http://localhost:4000";
const socket = io(URL, { autoConnect: false });

export const useSocket = ()=> {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        socket.onAny((event, ...args) => {
            console.log(event, args);
        });

        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });
        return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
        };
  }, []);

  const connect = ()=> socket.connect();

    return {
        isConnected,
        connect
    }
}