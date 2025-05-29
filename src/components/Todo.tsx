import React from "react";
import TodoItem from "./TodoItem";


interface TodoProps {
  id: number;
  title?: string;
}

interface TodoItemProps {
  items: TodoProps[];
}

const Todo: React.FC<TodoItemProps> = ({items}) =>{
    return (
      <div className="p-2 border-2 border-dashed border-orange-500 mb-4 w-[150px]">
        <ol>
          {items.map((item)=>{
            return(
              <TodoItem key={item.id} title={item.title} />
            )
          })}
        </ol>
      </div>
    );
}

export default Todo;