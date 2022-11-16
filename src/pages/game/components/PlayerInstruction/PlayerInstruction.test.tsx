import { screen } from '@testing-library/react';
import { MatchPhase } from '../../../../context/socket/types';
import { defaultGameStateMock } from '../../../../mock';
import { customRender } from '../../../../test';
import { PlayerInstruction } from './PlayerInstruction';

describe('<PlayerInstruction/>', () => {
  it('Match Prediction + Player turn', () => {
    customRender(<PlayerInstruction />, {
      //@ts-ignore ignore since we don't need the entire socket object for testing
      socket: {
        id: 'bv2WSrwzJNMjWZ4wAAAD', // the current player turn
      },
      gameState: defaultGameStateMock,
    });

    expect(
      screen.getByText('Pick the number of times you can win the table.'),
    ).toBeInTheDocument();
  });

  it('Match Prediction + not Player turn', () => {
    customRender(<PlayerInstruction />, {
      //@ts-ignore ignore since we don't need the entire socket object for testing
      socket: {
        id: 'JrEeKNlUwAKk4Qk0AAAB',
      },
      gameState: defaultGameStateMock,
    });

    expect(
      screen.getByText('Player Ms.Java is predicting their win.'),
    ).toBeInTheDocument();
  });

  it('Match Play cards + Player turn', () => {
    customRender(<PlayerInstruction />, {
      //@ts-ignore ignore since we don't need the entire socket object for testing
      socket: {
        id: 'bv2WSrwzJNMjWZ4wAAAD',
      },
      gameState: { ...defaultGameStateMock, matchPhase: MatchPhase.PLAY_CARDS },
    });

    expect(screen.getByText('Please pick a card.')).toBeInTheDocument();
  });

  it('Match Play cards + not Player turn', () => {
    customRender(<PlayerInstruction />, {
      //@ts-ignore ignore since we don't need the entire socket object for testing
      socket: {
        id: 'JrEeKNlUwAKk4Qk0AAAB',
      },
      gameState: { ...defaultGameStateMock, matchPhase: MatchPhase.PLAY_CARDS },
    });

    expect(
      screen.getByText('Player Ms.Java is piking a card.'),
    ).toBeInTheDocument();
  });
});
