import React from "react";

interface BlockProps {
  value?: string | null;
  onClick?: () => void;
}

const Block: React.FC<BlockProps> = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        w-20 
        h-20 
        border-4 
        border-gray-800 
        bg-gradient-to-br 
        from-orange-50 
        to-orange-100 
        font-bold 
        text-4xl 
        text-gray-800
        cursor-pointer 
        flex 
        items-center 
        justify-center
        transition-all
        duration-200
        hover:shadow-lg
        hover:scale-105
        hover:bg-gradient-to-br
        hover:from-orange-100
        hover:to-orange-200
        active:scale-95
      "
    >
      {value}
    </div>
  );
};

export default Block;
