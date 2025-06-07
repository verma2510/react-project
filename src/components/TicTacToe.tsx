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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Game Area */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              {!players ? (
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Tic Tac Toe
                  </h1>
                  <PlayerSetup onStart={handleSetup} />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-2xl font-bold text-center text-gray-800 bg-gray-100 rounded-lg py-3 px-6 shadow-md">
                    Turn:{" "}
                    {isXTurn ? (
                      <span className="text-blue-600">{players.player1}</span>
                    ) : (
                      <span className="text-red-600">{players.player2}</span>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-xl transform -rotate-1"></div>
                    <div className="relative grid grid-cols-3 grid-rows-3 gap-2 p-6 bg-gray-800 rounded-xl">
                      {Array.from({ length: size * size }).map((_, i) => (
                        <Block
                          onClick={() => handleClick(i)}
                          key={i}
                          value={board[i]}
                        />
                      ))}
                    </div>
                  </div>
                  {winner && <Winner winner={winner} onRestart={restartGame} />}
                </div>
              )}
            </div>
          </div>

          {/* Leaderboard Area - Always Visible */}
          <div className="lg:w-80 w-full">
            <div className="bg-white rounded-xl shadow-xl p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Leaderboard
              </h2>
              <Leaderboard data={leaderboard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
