import React from "react";

interface TodoTextfieldProps{
    placeholder: string
}

const TodoTextfield: React.FC<TodoTextfieldProps> = (props) => {
    return(
        <input className="bg-white px-2 rounded-2xl focus:outline-red-200" type="text" placeholder={props.placeholder}/>
    )
}

export default TodoTextfield;