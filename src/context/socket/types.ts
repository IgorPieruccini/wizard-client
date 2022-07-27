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

    /** useSocketGame */
    gameState?: GameState
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
    UPDATE_LOBBY_STATE = "Lobby state update",
    /**  broadcasted on a game state update */
    UPDATE_GAME_STATE = "Game state update"
}

export interface LobbyState {
    users: SocketUser[];
}

export type CardColor = "red" | "green" | "yellow" | "blue"
export interface Card {
    id: string,
    color: CardColor,
    value: string
}
export interface Player {
    id: string,
    /** The cards the player has in his hands */
    hand: Card[],
    points: number
}
export interface GameState {
    /** stack of cards */
    deck: Card[]
    /** the max number of rounds calculated by the number of player x number of cards */
    maxRounds: number,
    /** the number of the current round */
    currentRound: number,
    /** the id of the player who has to play in this round */
    playersTurn: string,
    /** the first card in the table to be used in case of tie (color base)*/
    untieCard?: Card,
    /** all the cards that has been discarded in this round */
    cemeteryCards: Card[],
    /** players in the room */
    players: Player[]
}