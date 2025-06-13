import React from "react";

interface TextFieldProps {
  placeholder?: string; 
}

const TextField: React.FC<TextFieldProps> = ({ placeholder }) => {
    return(
        <input type="text" className="border border-gray-300 rounded-lg bg-white p-2" placeholder={placeholder} />
    )
}
export default TextField;