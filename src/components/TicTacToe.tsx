import React, { useState } from "react";
import Block from "./Block";

const TicTacToe: React.FC = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const size = 3;

    const handleClick = (index: number) => {
        if(board[index]) return;

        const newBoard  = [...board];
        newBoard[index] = isXTurn ? "X" : "0";
        setBoard(newBoard);
        setIsXTurn(!isXTurn);

        const win = checkWinner(newBoard);
        if(win) setWinner(win);
    }
    // const checkWinner = (board) =>{
    //     const
    // }

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-0 border-4 p-10 border-gray-900">
      {Array.from({ length: size * size }).map((_, i) => (
        <Block onClick={()=> handleClick(i)} key={i} value={board[i]}/>
      ))}
    </div>
  );
};

export default TicTacToe;
