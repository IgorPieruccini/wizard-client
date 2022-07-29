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
    UPDATE_GAME_STATE = "Game state update",
    /** emit when user predicts the amount of time they gonna win in the current round */
    PREDICT_WIN = "predict win"
}

export interface LobbyState {
    users: SocketUser[];
}

export type CardColor = "red" | "green" | "yellow" | "blue"
export interface CardType {
    id: string,
    color: CardColor,
    value: string
}
export interface Player {
    id: string,
    name: string,
    /** The cards the player has in his hands */
    hand: CardType[],
    points: number
}

export interface PredictedPlayerWins {
    playerId: string,
    wins: number
}

export enum MatchPhase {
    PREDICT = "predict",
    PLAY_CARDS = "play cards"
}
export interface GameState {
    /** stack of cards */
    deck: CardType[]
    /** the max number of rounds calculated by the number of player x number of cards */
    maxRounds: number,
    /** the number of the current round */
    currentRound: number,
    /** the id of the player who has to play in this round */
    playersTurn: string,
    /** the first card in the table to be used in case of tie (color base)*/
    untieCard?: CardType,
    /** all the cards that has been discarded in this round */
    cemeteryCards: CardType[],
    /** players in the room */
    players: Player[],
    /** the amount of wins each player bets it's going to win with their set of cards */
    predictedWins: PredictedPlayerWins[],
    /** the current phase of the match */
    matchPhase: MatchPhase
}