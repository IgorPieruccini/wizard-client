import './App.css';
import { SocketProvider } from './context/socket/socketContext';
import { PageRouter } from './pages/router/PageRoutes';

function App() {
  return (
    <div className="App">
      <SocketProvider>
        <PageRouter />
      </SocketProvider>
    </div>
  );
}

export default App;
