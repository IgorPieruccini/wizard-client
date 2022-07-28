import { PlayerHand } from "./components/PlayerHand"
import { PlayersLobby } from "./components/PlayersLobby"

export const GamePage = ()=> {


    return (
        <div>
            <p>Game Page</p>
           <PlayersLobby /> 
            <br/>
            <PlayerHand />
        </div>
    )     
}