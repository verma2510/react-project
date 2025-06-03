import React, { useState } from "react";
import Block from "./Block";
import Winner from "./Winner";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const size = 3;

  const handleClick = (index: number) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const win = checkWinner(newBoard);
    if (win) setWinner(win);
  };
  const checkWinner = (board) => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i of combos) {
      const [a, b, c] = i;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : "Draw";
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-0 border-4 p-10 bg-gray-500">
          {Array.from({ length: size * size }).map((_, i) => (
            <Block onClick={() => handleClick(i)} key={i} value={board[i]} />
          ))}
        </div>
        <Winner winner={winner} onRestart={restartGame} />
      </div>
    </>
  );
};

export default TicTacToe;
