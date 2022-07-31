import styled from "styled-components"
import { PlayerHand } from "./components/PlayerHand"
import { PlayerInstruction } from "./components/PlayerInstruction"
import { PlayerPredictions } from "./components/PlayerPredictions"
import { PlayersLobby } from "./components/PlayersLobby"
import { TableCards } from "./components/TableCards"
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
            <TableCards />
            <PlayerInstruction />
            <PlayerPredictions/>
            <PlayerHand />
        </GamePageContainer>
    )     
}