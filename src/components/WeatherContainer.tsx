import React from "react";
import TextField from "./TextField";
import Button from "./Button";

const WeatherContainer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 bg-blue-50 shadow-md rounded-lg">
      <h1 className="font-bold">Weather Information</h1>
      <div className="flex gap-4 justify-center items-center">
        <TextField placeholder="Enter city name" />
        <Button label="Get Weather" />
      </div>
      <p className="text-gray-700">Temperature: 25°C</p>
      <p className="text-gray-700">Condition: Sunny</p>
    </div>
  );
};

export default WeatherContainer;
