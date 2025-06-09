import React from "react";
import { RxCross2 } from "react-icons/rx";

interface TodoListProps{
    onClick?: ()=> void
    listName: string
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return(
        <div className="flex items-center py-3 gap-2">
            <input type="checkbox" className="appearance-none h-5 w-5 rounded-full border-2 border-gray-400 checked:border-blue-400 checked:bg-blue-400"/>
            <span className="flex-1 text-left">{props.listName}</span>
            <span onClick={props.onClick} className="cursor-pointer text-xl bg-red-600 text-white rounded-md"><RxCross2/></span>
        </div>
    )
}

export default TodoList;