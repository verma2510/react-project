import React from "react";
import TodoTextfield from "./TodoTextfield";
import TodoButton from "./TodoButton";
import TodoList from "./TodoList";

const TodoContainer: React.FC = () => {
    return (
        <div className="bg-gray-200 max-w-max rounded-md p-4">
            <p className="font-bold py-2" >Todo List</p>
            <TodoTextfield placeholder="Add your task"/>
            <TodoButton name="Add"/>
            <TodoList listName="Learn JS"/>
        </div>
    )
}

export default TodoContainer;