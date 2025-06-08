import React from "react";

interface TodoTextfieldProps{
    placeholder: string
}

const TodoTextfield: React.FC<TodoTextfieldProps> = (props) => {
    return(
        <input type="text" placeholder={props.placeholder}/>
    )
}

export default TodoTextfield;