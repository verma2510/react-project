import React from "react";

interface TextFieldProps {
  placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  
  return (
    <input
      value={inputValue}
      onChange={handleChange}
      type="text"
      className="border border-gray-300 rounded-lg bg-white p-2"
      placeholder={placeholder}
    />
  );
};
export default TextField;
