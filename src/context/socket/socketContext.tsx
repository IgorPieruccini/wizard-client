import React from "react";
import { defaultSocketContext } from "./help";
import { useConnectSocket } from "./hooks/useConnectSocket";
import { SocketContextType } from "./types";

export const SocketContext = React.createContext<SocketContextType>(defaultSocketContext);

interface SocketProviderProps {
    children: React.ReactNode
}

export const SocketProvider = ({children}: SocketProviderProps)=> {

    const { isConnected, connect, setUsername} = useConnectSocket();


    return( 
        <SocketContext.Provider value={{isConnected, connect, setUsername}} >
            {children}
        </SocketContext.Provider>
    )
}