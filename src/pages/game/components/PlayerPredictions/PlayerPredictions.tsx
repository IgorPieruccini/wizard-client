import React, { useMemo } from "react";
import styled from "styled-components"
import { useSocket } from "../../../../context/socket/hooks/useSocket";
import { mainSocket } from "../../../../context/socket/socketContext";
import { MatchPhase, SocketEventTypes } from "../../../../context/socket/types";
import { cardColors } from "../../../../shared/colors";

const PlayerPredictionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    padding: 20px;
    border-radius: 20px;
    margin: 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
    backgroundColor: #4A525A;
`;

const PredictButton = styled.button`
    border: none;
    height: 64px;
    width: 64px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
    margin: 15px;
    &:hover {
    background-color: ${cardColors.green};
    cursor: pointer;
  }
`

const ButtonText = styled.p`
    color: black;
    font-size: 2em;
    font-weight: bold;
    line-height: 0px;
    margin: 0px;
`

export const PlayerPredictions = ()=> {

    const { gameState, socket } = useSocket();

    const hand = useMemo(()=> {
         return gameState?.players.find(player => player.id === socket.id)?.hand || [];
    }, [gameState?.players, socket.id]);

    const isCurrentPlayerTurn = gameState?.playersTurn === socket.id;

    const predict = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
        const wins = Number(e.currentTarget.value);
        mainSocket.emit(SocketEventTypes.PREDICT_WIN, {playerId: socket.id, wins});
    }

    if (!isCurrentPlayerTurn || gameState.matchPhase !== MatchPhase.PREDICT) return null;

    return (
        <div>
            <h3>Pick how many times you think you can win!</h3>
            <PlayerPredictionsContainer>
                <PredictButton onClick={predict}><ButtonText>0</ButtonText></PredictButton>
                { hand.map((_, i)=> <PredictButton key={i + 1} onClick={predict}><ButtonText>{i + 1}</ButtonText></PredictButton>) }
            </PlayerPredictionsContainer>
        </div>
        
    )
}