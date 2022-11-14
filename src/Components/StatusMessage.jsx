import React from "react";

function StatusMessage({ winner, current }) {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next player is ${current.isXNext ? "X" : "O"}`;
  const nomoveLeft = current.board.every((el) => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !nomoveLeft && (
        <>
          Next player is{" "}
          <span className={current === "X" ? "text-green" : "text-orange"}>
            {" "}
            {current.isXNext ? "X" : "O"}
          </span>{" "}
        </>
      )}
      {!winner && nomoveLeft && (
        <>
          <span className="text-green">X</span> and{" "}
          <span className="text-orange">O</span>
        </>
      )}
    </div>
  );
}

export default StatusMessage;
