import { useMemo } from "react";
import styled from "styled-components";
import { useSocket } from "../../../../context/socket/hooks/useSocket";
import { MatchPhase } from "../../../../context/socket/types";


const InstructionContainer = styled.div`
    padding: 20px;
    border-radius: 20px;
    margin: 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
    backgroundColor: #4A525A;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InstructionText = styled.p`
    font-size: 3em;
`;

export const PlayerInstruction = ()=> {

    const { gameState, socket } = useSocket();

    const instruction = useMemo(()=> {
        if(!gameState) return null;
        
        const currentPlayer = gameState.players.find(player => player.id === gameState.playersTurn)
        const isCurrentPlayerTurn = currentPlayer?.id === socket.id;
        
        switch (gameState?.matchPhase) {
            case MatchPhase.PLAY_CARDS:
                if(isCurrentPlayerTurn) return "Please pick a card.";
                return `Player ${currentPlayer?.name} is piking a card.`

            
            case MatchPhase.PREDICT:
                if (isCurrentPlayerTurn) return "Pick the number of times you can win the table."
                return `Player ${currentPlayer?.name} is predicting their win.`
            
            default:
                return null
        }
    }, [gameState, socket.id]);

    if (!instruction) return null;

    return <InstructionContainer>
        <InstructionText>{instruction}</InstructionText>
    </InstructionContainer>
}