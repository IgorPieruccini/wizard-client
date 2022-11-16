import React from 'react';
import io from 'socket.io-client';
import { defaultSocketContext } from './help';
import { useConnectSocket } from './hooks/useConnectSocket';
import { useSocketGame } from './hooks/useSocketGame';
import { useSocketLobby } from './hooks/useSocketLobby';
import { SocketContextType } from './types';

export const SocketContext =
  React.createContext<SocketContextType>(defaultSocketContext);

interface SocketProviderProps {
  children: React.ReactNode;
}

export const mainSocket = io(`${process.env.REACT_APP_LOCAL_URL}:4000`, {
  autoConnect: false,
});

/**
 * Provides to children components the socket context with all the functionalities
 */
export const SocketProviderComponent = ({ children }: SocketProviderProps) => {
  const { isConnected, connect, setUsername } = useConnectSocket();
  const { lobbyState, userReady } = useSocketLobby();
  const { gameState } = useSocketGame();

  return (
    <SocketContext.Provider
      value={{
        socket: mainSocket,
        /** useConnectSocket */
        isConnected,
        connect,
        setUsername,
        /** useSocketLobby */
        lobbyState,
        userReady,
        /** use game state */
        gameState,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const SocketProvider = React.memo(
  SocketProviderComponent,
  (prev, next) => false,
);
