import React from "react";
import TextField from "./TextField";
import Button from "./Button";

const WeatherContainer: React.FC = () => {
    
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 bg-blue-50 shadow-md rounded-lg">
      <h1 className="font-bold text-lg">Weather Information</h1>
      <div className="flex gap-4 justify-center items-center">
        <TextField placeholder="Enter city name" />
        <Button label="Get Weather" />
      </div>
      <img src="weather-icon.png" alt="Weather Icon" />
      <p className="text-gray-700 font-semibold">Temperature: 25°C</p>
      <p className="text-gray-700 font-semibold">Condition: Sunny</p>
      <p className="text-gray-700 font-semibold">Time: 12:00 PM</p>
      <p className="text-gray-700 font-semibold">Location: India</p>
    </div>
  );
};

export default WeatherContainer;
