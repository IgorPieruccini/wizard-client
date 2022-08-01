import styled from "styled-components";
import { useSocket } from "../../../../context/socket/hooks/useSocket";
import { StyleFlexCenter } from "../../../../styles";
import { Avatar } from "../Avatar";
import { Card } from "../Card";

export const TableCardsContainer = styled.div`
    ${StyleFlexCenter}
`;

export const AvatarContainer = styled.div``

export const TableCards = ()=> {
    const { gameState } = useSocket();

    return <TableCardsContainer>
        {
            gameState?.tableCards.map((tableCard)=> {
                const player = gameState.players.find(player => player.id === tableCard.playerId);
                return <div key={tableCard.id}>
                    <Card card={tableCard} />
                    {player && 
                    (<AvatarContainer>
                        <Avatar player={player} />
                    </AvatarContainer>)
                    }
                </div>
            })
        }
    </TableCardsContainer>
};