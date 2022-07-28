import { useMemo } from "react";
import styled from "styled-components"
import { useSocket } from "../../../../context/socket/hooks/useSocket";
import { Card } from "../Card"

const HandContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    width: auto;
`;

export const PlayerHand = ()=> {
    const { gameState, socket } = useSocket();

    const player = useMemo(()=> {
        return gameState?.players.find(player => player.id === socket.id);
    },[gameState?.players, socket.id])

    return (
        <HandContainer>
            {
                player?.hand.map(card=> <Card key={card.id} card={card}/>)
            }
        </HandContainer>
    )
}