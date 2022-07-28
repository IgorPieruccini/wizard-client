import { PlayerHand } from "./components/PlayerHand"
import { PlayersLobby } from "./components/PlayersLobby"
import { UntieCard } from "./components/UntieCard"

export const GamePage = ()=> {


    return (
        <div>
            <p>Game Page</p>
            <PlayersLobby /> 
            <br/>
            <UntieCard />
            <br/>
            <PlayerHand />
        </div>
    )     
}