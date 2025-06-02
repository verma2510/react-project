import React from "react";

interface winnerProps {
  winner?: string | null;
  onRestart?: () => void;
}

const Winner: React.FC<winnerProps> = (props) => {
  return (
    <div>
      {props.winner ? (
        <>
          <h2>
            {props.winner === "Draw"
              ? "It's a Draw!"
              : `Winner: ${props.winner}`}
          </h2>
          <button onClick={props.onRestart}>Play Again</button>
        </>
      ) : null}
    </div>
  );
};

export default Winner;
