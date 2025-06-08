import React from "react";

interface TodoButtonProps{
    name:  string
}

const TodoButton: React.FC<TodoButtonProps> = (props) => {
    return(
        <button>{props.name}</button>
    )
}

export default TodoButton;