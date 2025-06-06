import React from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";
import TicTacToe from "./components/TicTacToe";
import { useState } from "react";
import Leaderboard from "./components/Leaderboard";
import Player from "./components/Player";

const TodoItems = [
  {
    id: 1,
    title: "Eat",
  },
  {
    id: 2,
    title: "Code",
  },
  {
    id: 3,
    title: "Sleep",
  },
  {
    id: 4,
    title: "Repeat",
  },
];

const App: React.FC = () => {
  const [state, setState] = useState<boolean>(true);
  return (
    <>
      <div className="p-4 flex gap-6 items-center">
        <Todo items={TodoItems} />
        <Todo items={TodoItems} />
        <Todo items={TodoItems} />
        <button
          onClick={(e) => setState(!state)}
          className="text-white bg-gray-500 p-1 rounded-md"
        >
          Toggle
        </button>
        {state ? <Counter /> : ""}
      </div>
      <div className="p-4 flex gap-8 items-center justify-center">
        <TicTacToe />
        <Leaderboard />
        <Player />
      </div>
    </>
  );
};

export default App;
