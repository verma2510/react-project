import React from "react";

interface blockProps {
  value?: string | null;
  onClick?: () => void;
}

const Block: React.FC<blockProps> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="border-3 border-gray-800 w-20 h-20  bg-orange-100 font-bold text-3xl cursor-pointer flex items-center justify-center"
    >
      {props.value}
    </div>
  );
};

export default Block;
