# React Memory Match Game

A two-player memory card matching game built with **React** and **Vite**.
Players take turns flipping cards to find matching emoji pairs — the player with the most matches wins.

I built this project as part of my learning process to practice **React fundamentals**: components, props, state, hooks, and lifting state up.

**Live Demo:** [memory-match-game-f.netlify.app](https://memory-match-game-f.netlify.app/)

---

## How to Play

1. The board shows 16 face-down cards (8 emoji pairs, shuffled).
2. **Player 1** starts. Click any two cards to flip them.
3. If the two cards **match**, that player scores a point and gets another turn.
4. If they **don't match**, the cards flip back and it becomes the other player's turn.
5. When every pair is matched, the **Game Over** screen shows the winner (or a draw).
6. Click **Rematch!** to reshuffle and play again.

You can also rename each player by clicking the **Edit** button next to their name.

---

## Features

- Two-player turn-based gameplay
- Cards are shuffled randomly at the start of every game
- Score tracking and automatic winner detection
- Editable player names
- Restart / rematch without reloading the page

---

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) — build tool and dev server
- ESLint — code linting

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Memory-Match-Game

# Install dependencies
npm install
```

### Running the App

```bash
# Start the development server
npm run dev
```

---

## Project Structure

```
Memory-Match-Game/
├── index.html
├── src/
│   ├── main.jsx              # App entry point
│   ├── App.jsx               # Main game logic and state
│   ├── cards.js              # Card data (emoji symbols)
│   ├── App.css               # Styling
│   ├── index.css
│   └── components/
│       ├── GameBoard.jsx     # Renders the grid of cards
│       ├── Player.jsx        # Player name, score, edit name
│       └── GameOver.jsx      # Winner screen and rematch button
└── package.json
```

---

## What I Learned

While building this project I practiced:

- Managing multiple pieces of **state** with the `useState` hook
- Handling side effects (checking for matches) with the `useEffect` hook
- **Lifting state up** so `App` controls the game and passes data down via props
- Passing data and event handlers between **parent and child components**
- Rendering lists with `.map()` and using `key` props
- Conditional rendering (showing the Game Over screen only when the game ends)
- Immutable state updates using the spread operator

---

## Possible Improvements

- Add a single-player mode with a move counter
- Add sound effects and card flip animations
- Track high scores using local storage
- Make the board size or theme configurable
