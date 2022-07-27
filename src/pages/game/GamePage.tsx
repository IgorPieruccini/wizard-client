import { useSocket } from "../../context/socket/hooks/useSocket"

export const GamePage = ()=> {

    const { gameState } = useSocket()

    return (
        <div>
            <p>Game</p>
            {JSON.stringify(gameState)}
        </div>
    )     
}