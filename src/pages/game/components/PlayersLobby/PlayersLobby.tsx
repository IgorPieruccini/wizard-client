import { useMemo } from "react";
import styled from "styled-components"
import { useSocket } from "../../../../context/socket/hooks/useSocket";
import { StyleFlexCenter } from "../../../../styles";

const PlayersLobbyContainer = styled.div`
    ${StyleFlexCenter}
    height: 100px;
`;

const AvatarContainer = styled.div`
    ${StyleFlexCenter}
    flex-direction: column;
    margin: 10px;
`;

const Avatar = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    over-flow: none;
`;

const AvatarName = styled.p``;

export const PlayersLobby = ()=> {

    const { gameState, socket } = useSocket();

    const playersInTheRoom = useMemo(()=> {
        return gameState?.players.filter((player) => player.id !== socket.id);
    }, [gameState?.players, socket.id]);

    return (
        <PlayersLobbyContainer>
            {playersInTheRoom?.map((player)=> {
                return <AvatarContainer key={player.id}>
                    <Avatar alt="avatar" src="./avatar-icon.png" />
                    <AvatarName>{player.name}</AvatarName>
                </AvatarContainer>
            })}
        </PlayersLobbyContainer>
    );
}