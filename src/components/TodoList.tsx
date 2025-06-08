import React from "react";
import { RxCross2 } from "react-icons/rx";

interface TodoListProps{
    listName: string
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return(
        <div className="flex items-center py-3 gap-2">
            <input type="checkbox"/>
            <span className="flex-1 text-left">{props.listName}</span>
            <span className="cursor-pointer"><RxCross2/></span>
        </div>
    )
}

export default TodoList;