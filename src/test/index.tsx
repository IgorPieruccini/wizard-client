import { render } from '@testing-library/react';
import { defaultSocketContext } from '../context/socket/help';
import { SocketContext } from '../context/socket/socketContext';
import { SocketContextType } from '../context/socket/types';

/**
 * Exports the testing library render method wrapped in the socket context
 * @param ui
 * @param value
 * @returns
 */
export const customRender = (
  ui: JSX.Element,
  value: Partial<SocketContextType>,
) => {
  return render(
    <SocketContext.Provider value={{ ...defaultSocketContext, ...value }}>
      {ui}
    </SocketContext.Provider>,
  );
};
