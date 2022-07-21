import {  SocketContextType } from "./types";

const WARN_OUT_OF_CONTEXT = "context not initialized";

const initializedContext = ()=> console.warn(WARN_OUT_OF_CONTEXT);

// @ts-ignore
export const defaultSocketContext: SocketContextType = {
    isConnected: false,
    connect: initializedContext,
    setUsername: initializedContext,
    userReady: initializedContext,
    lobbyState: { users: [] },
}