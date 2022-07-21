import './App.css';
import { useSocket } from './hooks/socket/useSocket';

function App() {

  const { isConnected, connect } = useSocket();

  return (
    <div className="App">
      <p>Wizards</p>
      {isConnected && <p>user connected</p>}
      {!isConnected && <button onClick={connect} >connect socket</button>}
    </div>
  );
}

export default App;
