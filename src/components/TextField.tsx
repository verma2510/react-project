import React from "react";

interface TextFieldProps {
  placeholder?: string;
  title?: string
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  title,
  onChange,
  onKeyDown,
}) => {
  return (
    <div>
      <p>{title}</p>
      <input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
        className="border border-gray-300 rounded-lg bg-white p-2 w-full"
        placeholder={placeholder}
      />
    </div>
  );
};
export default TextField;
