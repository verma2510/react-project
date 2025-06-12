import React, { useEffect, useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("Mounting", count);

    return ()=>{
        console.log("Unmounting", count);
    }
  },[])

  useEffect(()=>{
    console.log("Updating", count);

    return () => {
      console.log("Previous Count", count);
    };
  },[count])

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if(count===0) return;
    setCount(count - 1);
  };

  return (
    <div className="flex gap-1 items-center py-2">
      <h1 className="font-bold text-lg">{count}</h1>
      <button
        onClick={handleIncrement}
        className="bg-[lightgreen] rounded-md text-white p-1 "
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        className="bg-[tomato] rounded-md text-white p-1 "
      >
        Decrement
      </button>
      <p className="font-semibold">Number is {count === 0 ? "zero" : count > 0 && count % 2 === 0 ? "even" : "odd"}</p>
    </div>
  );
};
 export default Counter;