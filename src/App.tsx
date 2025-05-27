import React from "react";
import Todo from "./components/Todo";

const TodoItems = [
  {
    id: 1,
    title: "Eat",
  },
  {
    id: 2,
    title: "Sleep",
  },
  {
    id: 3,
    title: "Codes",
  },
];


const App: React.FC = () => {
  return (
    <div>
      <Todo items={TodoItems} />
      <Todo items={TodoItems} />
      <Todo items={TodoItems} />
    </div>
  );
};

export default App;
