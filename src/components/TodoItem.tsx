import React from "react";

interface TodoItemProps {
  title: string;
}

const TodoItem: React.FC<TodoItemProps> = ({title}) => {
  return <li className="bg-teal-300 rounded-md px-1 py-0.5 mb-1">{title}</li>;
};

export default TodoItem;
