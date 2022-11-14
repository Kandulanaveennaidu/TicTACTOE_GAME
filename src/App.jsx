import React, { useState } from "react";
import Border from "./Components/Border";
import "./styles/root.css";
import { calculateWinner } from "./helpers";
import History from "./Components/History";
import StatusMessage from "./Components/StatusMessage";
const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  // const [isXNext, setNext] = useState(false);
  const { winner, winnerSquare } = calculateWinner(current.board);

  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "0";
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };
  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>
        TIC<span className="text-green">TAC</span>TAC
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Border
        board={current.board}
        handleSquareClick={handleSquareClick}
        winnerSquare={winnerSquare}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? "active" : ""} `}
      >
        Start new Game
      </button>
      <h2 style={{ fontWeight: "normal" }}>Current game history</h2>
      <History history={history} moveTo={moveTo} currenetmove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
}

export default App;
