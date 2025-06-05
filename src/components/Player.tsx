import React, { useState } from "react";

type PlayerSetupProps = {
  onStart: (players: {
    player1: string;
    player2: string;
    symbol1: "X" | "O";
  }) => void;
};

const Player: React.FC<PlayerSetupProps> = ({ onStart }) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [symbol1, setSymbol1] = useState<"X" | "O">("X");

  const players = [
    { id: 1, label: "Player 1", name: "player1" },
    { id: 2, label: "Player 2", name: "player2" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!player1 || !player2 || player1 === player2) return;
    onStart({ player1, player2, symbol1 });
  };

  return (
    <div className="p-4 bg-pink-200">
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        {players.map((player) => (
          <div key={player.id}>
            <label htmlFor={player.name}>{player.label}: </label>
            <input
              type="text"
              className="rounded-md px-2 py-1 mb-2 bg-white focus-outline-2 focus:outline-red-400 "
              value={player.name === "player1" ? player1 : player2}
              onChange={(e) => {
                if (player.name === "player1") {
                  setPlayer1(e.target.value);
                } else {
                  setPlayer2(e.target.value);
                }
              }}
              required
              placeholder={`${player.label} Name`}
            />
          </div>
        ))}
        <label htmlFor="symbol">Choose your symbol Player1: </label>
        <div className="flex gap-4">
          {["X", "O"].map((symbol) => (
            <label key={symbol}>
              <input
                type="radio"
                name="symbol"
                value={symbol}
                checked={symbol1 === symbol}
                onChange={() => setSymbol1(symbol as "X" | "O")}
              />{" "}
              {symbol}
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold cursor-pointer px-4 py-2 rounded mt-2"
        >
          Start Game
        </button>
      </form>
    </div>
  );
};

export default Player;
