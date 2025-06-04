import React from "react";

const Player: React.FC = () => {
    return (
      <div className="border p-4">
        <form action="" className="flex flex-col">
          <label htmlFor="igname">Player 1: </label>
          <input
            type="text"
            className="border rounded-md px-2 py-1 mb-2"
            name="igname"
            placeholder="your in-game name"
          />
          <label htmlFor="igname">Player 2: </label>
          <input
            type="text"
            className="border rounded-md px-2 py-1 mb-2"
            name="igname"
            placeholder="your in-game name"
          />

          <label htmlFor="symbol">Choose your symbol: </label>
          <div className="border">
            {["X", "O"].map((symbol, index) => (
              <button key={index} className="border px-2 py-1 w-[100px] font-bold text-lg">
                {symbol}
              </button>
            ))}
          </div>
        </form>
      </div>
    );
};

export default Player;