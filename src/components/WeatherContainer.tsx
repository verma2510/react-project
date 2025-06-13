import React, { use } from "react";
import TextField from "./TextField";
import Button from "./Button";
import { useWeatherContext } from "../context/WeatherContext";

const WeatherContainer: React.FC = () => {
  const weatherData = useWeatherContext();
  console.log("weather data: ", weatherData);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 bg-blue-50 shadow-md rounded-lg">
      <h1 className="font-bold text-lg">Weather Information</h1>
      <div className="flex gap-4 justify-center items-center">
        <TextField
          placeholder="Enter city name"
          value={weatherData.searchCity}
          onChange={(e) => weatherData.setSearchCity(e.target.value)}
        />
        <Button
          onClick={() => weatherData.fetchWeather(weatherData.searchCity)}
          label="Get Weather"
        />
      </div>
      <div>
        <img
          src={weatherData.data?.current?.condition?.icon}
          alt="Weather Icon"
        />
        <p className="text-gray-700 font-semibold">
          Temperature: {weatherData.data?.current?.temp_c}°C
        </p>
        <p className="text-gray-700 font-semibold">
          Condition: {weatherData.data?.current?.condition?.text}
        </p>
        <p className="text-gray-700 font-semibold">
          Time: {weatherData.data?.location?.localtime}
        </p>
        <p className="text-gray-700 font-semibold">
          Location: {weatherData.data?.name},{" "}
          {weatherData.data?.location?.region}
        </p>
      </div>
    </div>
  );
};

export default WeatherContainer;
