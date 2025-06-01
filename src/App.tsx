import React from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";

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
  return (
    <div>
      <Todo items={TodoItems} />
      <Todo items={TodoItems} />
      <Todo items={TodoItems} />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
