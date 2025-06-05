import React from "react";

const Player: React.FC = () => {
  const players = [
    { id: 1, label: "Player 1", name: "player1" },
    { id: 2, label: "Player 2", name: "player2" },
  ];

  return (
    <div className="p-4 bg-pink-200">
      <form action="" className="flex flex-col">
        {players.map((player) => (
          <div key={player.id}>
            <label htmlFor={player.name}>{player.label}: </label>
            <input
              type="text"
              className="rounded-md px-2 py-1 mb-2 bg-white focus-outline-2 focus:outline-red-400 "
              name={player.name}
              placeholder="your in-game name"
            />
          </div>
        ))}
        <label htmlFor="symbol">Choose your symbol: </label>
        <div className="flex items-center justify-center gap-3 mt-1">
          {["X", "O"].map((symbol, index) => (
            <button
              key={index}
              className={`border px-2 py-1 w-[75px] font-bold rounded-md text-lg cursor-pointer ${
                symbol === "X"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {symbol}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Player;
