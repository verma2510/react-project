import React, { useEffect, useState } from "react";
import Block from "./Block";
import Winner from "./Winner";
import PlayerSetup from "./Player";
import Leaderboard from "./Leaderboard";



const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [players, setPlayers] = useState<{
    player1: string;
    player2: string;
    symbol1: "X" | "O";
  } | null>(null);
  const [leaderboard, setLeaderboard] = useState<
    { name: string; points: number; matches: number }[]
  >([]);

  const size = 3;

  const updateLeaderboard = (result: string) => {
    if(!players) return;

    const player1 = {
      name: players.player1,
      symbol: players.symbol1,
    };
    const player2 = {
      name: players.player2,
      symbol: symbol2!,
    };
    let updated = [...leaderboard];

    const updatePlayer = (name: string, point: number) => {
      const existing = updated.find((p)=> p.name === name);
      if(existing){
        existing.points += point;
        existing.points += 1;        
      } else{
        updated.push({name, points: point, matches: 1});
      }
    };

    if (result === "Draw") {
      updatePlayer(player1.name, 0.5);
      updatePlayer(player2.name, 0.5);
    } else {
      const winnerName =
        result === player1.symbol ? player1.name : player2.name;
      const loserName = result === player1.symbol ? player2.name : player1.name;

      updatePlayer(winnerName, 1);
      updatePlayer(loserName, 0);
    }

    setLeaderboard(updated);
  };

  const symbol2 = players?.symbol1 === "X" ? "O" : "X";

  const handleClick = (index: number) => {
    if (board[index] || !players || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? players.symbol1 : symbol2;
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const win = checkWinner(newBoard);
    if (win !== null) {
      setWinner(win);
      updateLeaderboard(win); // also update leaderboard here
    };

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
      {winner && leaderboard.length > 0 && (
        <div className="mt-4">
          <Leaderboard data={leaderboard} />
        </div>
      )}
    </>
  );
};

export default TicTacToe;
