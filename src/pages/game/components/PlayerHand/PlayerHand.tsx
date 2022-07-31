import { useMemo } from "react";
import styled from "styled-components"
import { useSocket } from "../../../../context/socket/hooks/useSocket";
import { mainSocket } from "../../../../context/socket/socketContext";
import { CardType, MatchPhase, SocketEventTypes } from "../../../../context/socket/types";
import { StyleBaseButton, StyleFlexCenter } from "../../../../styles";
import { Card } from "../Card"

const HandContainer = styled.div`
    ${StyleFlexCenter}
    height: 130px;
    width: auto;
`;

const PickButton = styled(StyleBaseButton)`
    width: 80px;
`;

export const PlayerHand = ()=> {
    const { gameState, socket } = useSocket();

    const player = useMemo(()=> {
        return gameState?.players.find(player => player.id === socket.id);
    },[gameState?.players, socket.id])

    const pickable = useMemo(()=> {
        return gameState?.playersTurn === socket.id && gameState.matchPhase === MatchPhase.PLAY_CARDS;
    },[gameState, socket])

    const onPick = (card: CardType)=> {
        mainSocket.emit(SocketEventTypes.PICK_CARD, {...card, playerId: socket.id});
    }

    return (
        <HandContainer>
            {
                player?.hand.map(card=> <div key={card.id}>
                    <Card key={card.id} card={card}/>
                    {pickable && <PickButton onClick={()=> onPick(card)} >Pick</PickButton>}
                </div> )
            }
        </HandContainer>
    )
}