import styled from "styled-components"
import { Player } from "../../../../context/socket/types";
import { StyleFlexCenter } from "../../../../styles";

const AvatarContainer = styled.div`
    ${StyleFlexCenter}
    flex-direction: column;
    margin: 10px;
`;

const AvatarImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    over-flow: none;
`;

const AvatarName = styled.p``;

interface AvatarProps {
    player: Player
}

export const Avatar = ({player}: AvatarProps)=> {
    return <AvatarContainer key={player.id}>
                    <AvatarImage alt="avatar" src="./avatar-icon.png" />
                    <AvatarName>{player.name}</AvatarName>
            </AvatarContainer>
} 