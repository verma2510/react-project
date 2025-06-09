import React from "react";

interface TodoButtonProps {
  name: string;
  onClick: ()=> void;
}

const TodoButton: React.FC<TodoButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className="bg-green-400 px-2 text-white cursor-pointer font-semibold rounded-2xl">
      {props.name}
    </button>
  );
};

export default TodoButton;
