import React from "react";
import TextField from "./TextField";
import Button from "./Button";
import { useWeatherContext } from "../context/WeatherContext";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const WeatherContainer: React.FC = () => {
  const weatherData = useWeatherContext();

  return (
    <div
      className="min-h-[500px] w-[400px] flex flex-col items-center gap-6 p-8 
                    bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 
                    shadow-2xl rounded-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0" />

      <div className="z-10 w-full space-y-6">
        <h1 className="font-bold text-3xl text-white text-center drop-shadow-lg">
          Weather Forecast
        </h1>

        <div className="flex items-center justify-center gap-2 w-full">
          <TextField
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                weatherData.fetchWeather(weatherData.searchCity);
              }
            }}
            placeholder="Search city..."
            value={weatherData.searchCity}
            onChange={(e) => weatherData.setSearchCity(e.target.value)}
          />
          <Button
            onClick={() => weatherData.fetchWeather(weatherData.searchCity)}
            label="Search"
          />
        </div>

        {weatherData.data && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-center flex-col">
              <img
                src={weatherData.data?.current?.condition?.icon}
                alt="Weather Icon"
                className="w-16 h-16 drop-shadow-xl"
              />
              <p className="text-3xl font-bold text-white mb-2">
                {weatherData.data?.current?.temp_c}°C
              </p>
              <p className="text-xl text-gray-500 font-medium">
                {weatherData.data?.current?.condition?.text}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white/90">
                  <WiHumidity className="text-2xl" />
                  <span>Humidity: {weatherData.data?.current?.humidity}%</span>
                </div>
              </div>
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white/90">
                  <WiStrongWind className="text-2xl" />
                  <span>Wind: {weatherData.data?.current?.wind_kph} km/h</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/90">
                <FaMapMarkerAlt />
                <span>
                  {weatherData.data?.location?.name},{" "}
                  {weatherData.data?.location?.region}
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <FaClock />
                <span>{weatherData.data?.location?.localtime}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherContainer;
