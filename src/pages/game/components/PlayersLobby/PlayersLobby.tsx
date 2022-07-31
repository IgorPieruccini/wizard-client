import { useMemo } from "react";
import styled from "styled-components"
import { useSocket } from "../../../../context/socket/hooks/useSocket";
import { StyleFlexCenter } from "../../../../styles";
import { Avatar } from "../Avatar";

const PlayersLobbyContainer = styled.div`
    ${StyleFlexCenter}
    height: 100px;
`;

export const PlayersLobby = ()=> {

    const { gameState, socket } = useSocket();

    const playersInTheRoom = useMemo(()=> {
        return gameState?.players.filter((player) => player.id !== socket.id);
    }, [gameState?.players, socket.id]);

    return (
        <PlayersLobbyContainer>
            {playersInTheRoom?.map((player)=> {
                return <Avatar key={player.id} player={player}/>
            })}
        </PlayersLobbyContainer>
    );
}