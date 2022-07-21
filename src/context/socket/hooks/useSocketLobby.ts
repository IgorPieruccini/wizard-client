import { useEffect, useState } from "react";
import { mainSocket } from "../socketContext";
import { LobbyState, SocketEventTypes } from "../types";

export const useSocketLobby = ()=> {
    const [lobbyState, setLobbyState] = useState<LobbyState>();

    useEffect(()=> {
        mainSocket.on(SocketEventTypes.UPDATE_LOBBY_STATE, (state: LobbyState)=> {
            if (state.users) {
                setLobbyState(state);
            }
        });
    },[])

    const userReady = (id: string)=> {
        mainSocket.emit(SocketEventTypes.USER_READY, { id });
    }
    
    return { lobbyState, userReady }
}