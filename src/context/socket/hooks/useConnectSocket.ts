import { useEffect, useState } from 'react';
import { mainSocket } from '../socketContext';

/**
 * useConnectSocket manages the initial socket connection status.
 * @returns isConnected
 * @returns connect method to connect the client with the server
 * @returns setUsername in order to connect to the socket a user name needs to
 * be provide through this method
 */
export const useConnectSocket = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    mainSocket.onAny((event, ...args) => {
      console.log('event', event, args);
    });

    mainSocket.on('connect', () => {
      setIsConnected(true);
    });

    mainSocket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      mainSocket.off('connect');
      mainSocket.off('disconnect');
      mainSocket.off('pong');
    };
  }, []);

  const connect = () => mainSocket.connect();
  const setUsername = (username: string) => (mainSocket.auth = { username });

  return {
    isConnected,
    connect,
    setUsername,
  };
};
