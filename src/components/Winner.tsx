import React from "react";

interface winnerProps {
  winner?: string | null;
  onRestart?: () => void;
}

const Winner: React.FC<winnerProps> = (props) => {
  return (
    <div className="mt-2 border-1 bg-black px-2 py-2 flex flex-col items-center rounded-md ">
      {props.winner ? (
        <>
          <h2 className="font-bold text-2xl text-[lightgreen] mb-2">
            {props.winner === "Draw"
              ? "It's a Draw!"
              : `Winner: ${props.winner}`}
          </h2>
          <button className="bg-[tomato] font-semibold text-white rounded-md px-2 py-1" onClick={props.onRestart}>Play Again</button>
        </>
      ) : null}
    </div>
  );
};

export default Winner;
