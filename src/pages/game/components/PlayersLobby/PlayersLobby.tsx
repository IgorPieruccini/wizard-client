import { useMemo } from 'react';
import styled from 'styled-components';
import { useSocket } from '../../../../context/socket/hooks/useSocket';
import { colors } from '../../../../shared/colors';
import { defaultBoxShadow, StyleFlexCenter } from '../../../../styles';
import { Avatar } from '../Avatar';
import { GameInfo } from './GameInfo';

const PlayersLobbyContainer = styled.div`
  ${StyleFlexCenter}
`;

const PlayerArea = styled.div`
  ${StyleFlexCenter}
  ${defaultBoxShadow}
    justify-content: start;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background: ${colors.default_blue};
  border-style: solid;
  border-color: ${(props) => props.color};
  border-width: 5px;
`;

export const PlayersLobby = () => {
  const { gameState, socket } = useSocket();

  const playersInTheRoom = useMemo(() => {
    return gameState?.players.filter((player) => player.id !== socket.id);
  }, [gameState?.players, socket.id]);

  return (
    <PlayersLobbyContainer>
      {playersInTheRoom?.map((player) => {
        const isPlayerTurn = gameState?.playersTurn === player.id;
        return (
          <PlayerArea
            color={isPlayerTurn ? colors.yellow_border : colors.default_blue}
          >
            <Avatar key={player.id} player={player} />
            <GameInfo playerId={player.id} />
          </PlayerArea>
        );
      })}
    </PlayersLobbyContainer>
  );
};
