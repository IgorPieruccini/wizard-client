import { Socket } from "socket.io-client"

export interface SocketUser {
    userID: string,
    username: string,
    ready: boolean,
}

export interface SocketContextType {
    socket: Socket,
    /** useConnectSocket */
    isConnected: boolean,
    connect: ()=> void,
    setUsername: (name: string)=> void,
    
    /** useSocketLobby */
    lobbyState?: LobbyState,
    userReady: (id: string)=> void
}

/**
 * Enum of all the events supported by the server.
 */
export enum SocketEventTypes {
    /** emit all current users in the server */
    USERS = "users", 
    /** mit when user connects in the server */
    USER_CONNECTED = "user connected",
    /** emit when user is ready to play */
    USER_READY = "user ready",
    /** emit when all player are ready and lobby owner pressed start */
    START_GAME = "start game",
    /** emit in any user action */
    USER_ACTION = "user action",
    /**  broadcasted on a lobby state update */
    UPDATE_LOBBY_STATE = "Lobby state update"
}

export interface LobbyState {
    users: SocketUser[];
}