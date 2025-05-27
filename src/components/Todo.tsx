import React from "react";
import TodoItem from "./TodoItem";

const Todo: React.FC = () =>{
    return (
      <div className="p-2 border-2 border-dashed border-orange-500 mb-4 w-[150px]">
        <ol>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ol>
      </div>
    );
}

export default Todo;