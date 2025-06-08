import React from "react";

interface TodoButtonProps {
  name: string;
  onClick: ()=> void;
}

const TodoButton: React.FC<TodoButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className="bg-red-400 px-2 text-white cursor-pointer font-bold rounded-2xl">
      {props.name}
    </button>
  );
};

export default TodoButton;
