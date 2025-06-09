import React, { useState } from "react";

interface TodoTextfieldProps {
  placeholder: string;
  onSubmit: (value: string) => void;
}

const TodoTextfield: React.FC<TodoTextfieldProps> = (props) => {
  const [addList, setAddList] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddList(e.target.value);
  };

  const handleSubmit = () => {
    if (addList.trim()) {
      props.onSubmit(addList.trim());
      setAddList("")
    }
  };

  return (
    <input
      value={addList}
      onChange={handleChange}
      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      className="bg-white px-2 my-2 rounded-2xl focus:outline-red-200"
      type="text"
      placeholder={props.placeholder}
    />
  );
};

export default TodoTextfield;
