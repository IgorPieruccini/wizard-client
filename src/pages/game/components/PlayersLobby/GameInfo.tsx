import { useMemo } from 'react';
import styled from 'styled-components';
import { useSocket } from '../../../../context/socket/hooks/useSocket';
import { colors } from '../../../../shared/colors';

export const GameInfoContainer = styled.div`
  align-items: start;
  height: 100px;
  margin: 0px;
  color: white;
  padding: 20px;
  line-height: 0.5em;
  text-align: start;
`;

export const TextHighlight = styled.span`
  color: ${(props) => props.color};
  font-weight: bold;
`;

interface GameInfoProps {
  playerId: string;
}

export const GameInfo = ({ playerId }: GameInfoProps) => {
  const { gameState } = useSocket();
  const predictions = useMemo(() => {
    const prediction = gameState?.predictedWins.find(
      (prediction) => prediction.playerId === playerId,
    );
    if (!prediction) return null;
    return prediction?.wins;
  }, [gameState, playerId]);

  const points = useMemo(() => {
    const player = gameState?.players.find((player) => player.id === playerId);
    return player?.points || 0;
  }, [gameState, playerId]);

  return (
    <GameInfoContainer>
      <p>
        I have{' '}
        <TextHighlight color={colors.success_green}>{points}</TextHighlight>{' '}
        points.
      </p>
      {predictions !== null && (
        <p>
          I think i will win{' '}
          <TextHighlight color={colors.success_green}>
            {predictions}
          </TextHighlight>{' '}
          times.
        </p>
      )}
      {predictions !== null && (
        <p>
          and i have won{' '}
          <TextHighlight color={colors.success_green}>0</TextHighlight> times.
        </p>
      )}
    </GameInfoContainer>
  );
};
