import React from "react";
import TodoTextfield from "./TodoTextfield";
import TodoButton from "./TodoButton";

const TodoContainer: React.FC = () => {
    return (
        <div>
            <p>Todo List</p>
            <TodoTextfield placeholder="Add your task"/>
            <TodoButton name="Add"/>
        </div>
    )
}

export default TodoContainer;