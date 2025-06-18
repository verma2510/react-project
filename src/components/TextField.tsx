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
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">{title}</label>
      <input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:ring-opacity-50 focus:border-[#1a365d] transition-colors duration-200"
        placeholder={placeholder}
      />
    </div>
  );
};
export default TextField;
