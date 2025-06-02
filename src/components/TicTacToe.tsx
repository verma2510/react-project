import React from "react";
import Block from "./Block";

const TicTacToe: React.FC = () => {
  const size = 3;

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-0 border-4 p-6 border-amber-300">
      {Array.from({ length: size * size }).map((_, i) => (
        <Block key={i} />
      ))}
    </div>
  );
};

export default TicTacToe;
