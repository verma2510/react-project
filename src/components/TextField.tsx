import React from "react";

interface TextFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type="text"
      className="border border-gray-300 rounded-lg bg-white p-2"
      placeholder={placeholder}
    />
  );
};
export default TextField;
