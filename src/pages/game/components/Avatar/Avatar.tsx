import styled from "styled-components"
import { Player } from "../../../../context/socket/types";
import { colors } from "../../../../shared/colors";
import { defaultBoxShadow, StyleFlexCenter } from "../../../../styles";

const AvatarContainer = styled.div`
    ${StyleFlexCenter}
    ${defaultBoxShadow}
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    background: ${colors.default_blue};

`;

const AvatarImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 10px;
    over-flow: none;
`;

const AvatarName = styled.p`
    color: white;
`;

interface AvatarProps {
    player: Player
}

export const Avatar = ({player}: AvatarProps)=> {
    return <AvatarContainer key={player.id}>
                    <AvatarImage alt="avatar" src="./avatar-icon.png" />
                    <AvatarName>{player.name}</AvatarName>
            </AvatarContainer>
} 