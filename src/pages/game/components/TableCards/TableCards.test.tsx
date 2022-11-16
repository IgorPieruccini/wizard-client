import { screen } from '@testing-library/react';
import { GameState } from '../../../../context/socket/types';
import { defaultGameStateMock } from '../../../../mock';
import { customRender } from '../../../../test';
import { TableCards } from './TableCards';

describe('<TableCards />', () => {
  it('Should show cards in table', () => {
    const gameStateMock: GameState = {
      ...defaultGameStateMock,
      tableCards: [
        {
          playerId: 'JrEeKNlUwAKk4Qk0AAAB',
          id: 'red1',
          color: 'red',
          value: '1',
        },
        {
          playerId: 'bv2WSrwzJNMjWZ4wAAAD',
          id: 'red2',
          color: 'red',
          value: '2',
        },
      ],
    };

    customRender(<TableCards />, {
      //@ts-ignore ignore since we don't need the entire socket object for testing
      socket: {
        id: 'JrEeKNlUwAKk4Qk0AAAB',
      },
      gameState: gameStateMock,
    });

    expect(screen.getByTestId('card-red1')).toBeInTheDocument();
    expect(screen.getByText('Mr.Json')).toBeInTheDocument();

    expect(screen.getByTestId('card-red2')).toBeInTheDocument();
    expect(screen.getByText('Ms.Java')).toBeInTheDocument();
  });
});
