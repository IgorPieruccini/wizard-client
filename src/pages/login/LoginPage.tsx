import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../../context/socket/hooks/useSocket';
import { PAGES } from '../router/PageRoutes';

export const LoginPage = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const { isConnected, connect, setUsername } = useSocket();

  const connectSocket = () => {
    setUsername(nickname);
    connect();
  };

  useEffect(() => {
    if (isConnected) {
      navigate(PAGES.lobby);
    }
  }, [isConnected, navigate]);

  return (
    <div className="App">
      {isConnected && <p>user connected</p>}
      {!isConnected && (
        <div>
          <input
            type="text"
            id="username"
            placeholder="Your nickname"
            value={nickname}
            onChange={(ev) => setNickname(ev.target.value)}
          />

          <button onClick={connectSocket}>connect socket</button>
        </div>
      )}
    </div>
  );
};
