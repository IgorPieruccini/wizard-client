import {  SocketContextType } from "./types";

const WARN_OUT_OF_CONTEXT = "context not initialized";

const initializedContext = ()=> console.warn(WARN_OUT_OF_CONTEXT);

export const defaultSocketContext: SocketContextType = {
    isConnected: false,
    user: undefined,
    connect: initializedContext,
    setUsername: initializedContext,
}