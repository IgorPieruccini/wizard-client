import styled from "styled-components"
import { PlayerHand } from "./components/PlayerHand"
import { PlayerPredictions } from "./components/PlayerPredictions"
import { PlayersLobby } from "./components/PlayersLobby"
import { UntieCard } from "./components/UntieCard"


const GamePageContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`


export const GamePage = ()=> {


    return (
        <GamePageContainer>
            <PlayersLobby /> 
            <UntieCard />
            <PlayerPredictions/>
            <PlayerHand />
        </GamePageContainer>
    )     
}