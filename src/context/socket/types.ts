
export interface SocketUser {
    userID: string,
    username: string,
    ready: boolean,
}

export interface SocketContextType {
    isConnected: boolean,
    connect: ()=> void,
    setUsername: (name: string)=> void,
    user?: SocketUser
}