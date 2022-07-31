import React, { useMemo } from "react";
import styled from "styled-components"
import { useSocket } from "../../../../context/socket/hooks/useSocket";
import { mainSocket } from "../../../../context/socket/socketContext";
import { MatchPhase, SocketEventTypes } from "../../../../context/socket/types";
import { StyleBaseButton, StyleBaseModal } from "../../../../styles";

const PlayerPredictionsContainer = styled(StyleBaseModal)``;

const PredictButton = styled(StyleBaseButton)`
    height: 64px;
    width: 64px;
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