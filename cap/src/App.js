import './App.css';
import react from 'react';
import Game from './components/startPage';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Flip Cards Game</h1>
        <button onClick>Let's Play</button>
        <button>Instructions</button>
        <div>
          <Game/>
        </div>
      </header>
    </div>
  );
}

export default App;
