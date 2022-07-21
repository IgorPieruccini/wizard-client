import { useContext } from "react";
import { SocketContext } from "../socketContext"

/**
 * Easy way of having access to the socket context
 * @returns returns socket context
 */
export const useSocket = ()=> {
    const context = useContext(SocketContext);

    if (!context) new Error ("useSocket must be wrapped inside <SocketProvider/>");
    
    return {...context}
}