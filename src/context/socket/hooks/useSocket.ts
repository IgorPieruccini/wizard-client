import { useContext } from "react";
import { SocketContext } from "../socketContext"

export const useSocket = ()=> {
    const context = useContext(SocketContext);

    if (!context) new Error ("useSocket must be wrapped inside <SocketProvider/>");
    
    return {...context}
}