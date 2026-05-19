export default function GameBoard({ cards, onChoice, choiceOne, choiceTwo }) {
  return (
    <div id="game-board">
      {cards.map((card) => {
        const isFlipped = card === choiceOne || card === choiceTwo || card.matched;

        return (
          <button
            key={card.id}
            className={`card ${isFlipped ? "flipped" : ""}`}
            onClick={() => onChoice(card)}
            disabled={isFlipped}
          >
            {isFlipped ? card.symbol : "?"}
          </button>
        );
      })}
    </div>
  );
}