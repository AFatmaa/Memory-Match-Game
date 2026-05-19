import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";

import { CARD_DATA } from "./cards";

function shuffleCards() {
  const duplicatedCards = [...CARD_DATA, ...CARD_DATA]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
  
  return duplicatedCards;
}

function App() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [scores, setScores] = useState({ 1: 0, 2: 0 });
  const [cards, setCards] = useState(shuffleCards());
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const isGameOver = cards.length > 0 && cards.every(card => card.matched);

  let winner = null;
  if (isGameOver) {
    if (scores[1] > scores[2]) winner = "Player 1";
    else if (scores[2] > scores[1]) winner = "Player 2";
    else winner = "Draw";
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.symbol === choiceTwo.symbol) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.symbol === choiceOne.symbol) {
              return { ...card, matched: true };
            } 
            return card; 
          });
        });

        setScores(prevScores => ({
          ...prevScores,
          [activePlayer]: prevScores[activePlayer] + 1
        }));

        resetTurn();
      } else {
        setTimeout(() => {
          setActivePlayer((prev) => (prev === 1 ? 2 : 1));
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo, activePlayer]);

  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);
  }

  function handleChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  function handleRestart() {
    setCards(shuffleCards());
    setChoiceOne(null);
    setChoiceTwo(null);
    setScores({ 1: 0, 2: 0 });
    setActivePlayer(1);
  }

  return (
    <main>
      <h1>Memory Match</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName='Player 1'
            score={scores[1]}
            isActive={activePlayer === 1}
          />
          <Player
            initialName='Player 2'
            score={scores[2]}
            isActive={activePlayer === 2}
          />         
        </ol>

        {isGameOver && <GameOver winner={winner} onRestart={handleRestart} />}
        
        <GameBoard 
          cards={cards} 
          onChoice={handleChoice}
          choiceOne={choiceOne}
          choiceTwo={choiceTwo}
        />
      </div>
    </main>
  );
}

export default App;