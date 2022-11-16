import styled from 'styled-components';
import { StyleFlexCenter } from '../../styles';
import { PlayerHand } from './components/PlayerHand';
import { PlayerInstruction } from './components/PlayerInstruction';
import { PlayerPredictions } from './components/PlayerPredictions';
import { PlayersLobby } from './components/PlayersLobby';
import { TableCards } from './components/TableCards';
import { UntieCard } from './components/UntieCard';

const GamePageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  ${StyleFlexCenter}
  min-width: 280px;
  align-items: flex-start;
  background-color: #14405a;
`;

const RightColumn = styled.div`
  ${StyleFlexCenter}
  flex-direction: column;
  padding: 20px;
`;

export const GamePage = () => {
  return (
    <GamePageContainer>
      <LeftColumn>
        <PlayersLobby />
      </LeftColumn>

      <RightColumn>
        <UntieCard />
        <TableCards />
        <PlayerInstruction />
        <PlayerPredictions />
        <PlayerHand />
      </RightColumn>
    </GamePageContainer>
  );
};
