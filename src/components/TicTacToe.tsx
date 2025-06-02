import React from "react";
import Block from "./Block";

const TicTacToe: React.FC = () => {
  const size = 3;

  return (
    <div>
      {Array.from({ length: size * size }).map((_, i) => (
        <Block key={i} />
      ))}
    </div>
  );
};

export default TicTacToe;
