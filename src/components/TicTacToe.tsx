import React, { useEffect, useState } from "react";
import Block from "./Block";
import Winner from "./Winner";
import PlayerSetup from "./Player";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [players, setPlayers] = useState<{
    player1: string;
    player2: string;
    symbol1: "X" | "O";
  } | null>(null);
  const size = 3;

  const symbol2 = players?.symbol1 === "X" ? "O" : "X";

  const handleClick = (index: number) => {
    if (board[index] || !players || !winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? players.symbol1 : symbol2;
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const win = checkWinner(newBoard);
    if (win) setWinner(win);
  };
  const checkWinner = (board: Array<string | null>) => {
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

  const handleSetup = (players: {
    player1: string;
    player2: string;
    symbol1: "X" | "O";
  }) => {
    setPlayers(players);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {!players ? (
          <PlayerSetup onStart={handleSetup} />
        ) : (
          <>
            <div className="mb-4 text-lg font-semibold">
              Turn: {isXTurn ? players.player1 : players.player2}
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-0 p-10 bg-gray-500">
              {Array.from({ length: size * size }).map((_, i) => (
                <Block
                  onClick={() => handleClick(i)}
                  key={i}
                  value={board[i]}
                />
              ))}
            </div>
            <Winner winner={winner} onRestart={restartGame} />
          </>
        )}
      </div>
    </>
  );
};

export default TicTacToe;
