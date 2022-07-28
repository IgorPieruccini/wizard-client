import { useSocket } from "../../context/socket/hooks/useSocket"
import { PlayerHand } from "./components/PlayerHand"

export const GamePage = ()=> {

    const { gameState} = useSocket()

    return (
        <div>
            <p>Game</p>
            {JSON.stringify(gameState)}
            <div>
            <PlayerHand />
            </div>
        </div>
    )     
}