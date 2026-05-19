import { useState } from "react";
import Player from "./components/Player";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Memory Match</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName='Player 1'
            score={0}
            isActive={true}
          />
          <Player
            initialName='Player 2'
            score={0}
            isActive={false}
          />         
        </ol>
      </div>
    </main>
  );
}

export default App;