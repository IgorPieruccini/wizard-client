import './App.css';
import { useConnectSocket } from './hooks/socket/useSocket';

function App() {

  const { isConnected, connect } = useConnectSocket();

  return (
    <div className="App">
      <p>Wizards</p>
      {isConnected && <p>user connected</p>}
      {!isConnected && <button onClick={connect} >connect socket</button>}
    </div>
  );
}

export default App;
