import { useEffect, useState } from "react";
import { mainSocket } from "../socketContext";
import { GameState, SocketEventTypes } from "../types";

export const useSocketGame = ()=> {
    const [gameState, setGameState] = useState<GameState>();

    useEffect(()=> {
        mainSocket.on(SocketEventTypes.UPDATE_GAME_STATE, (state: GameState)=> {
            setGameState(state);
        });
    },[])
    
    return { gameState }
}