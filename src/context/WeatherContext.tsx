import React, { createContext, useContext, ReactNode, useState } from "react";
import { getCityWeather } from "../api";

// Define shape of context value
interface WeatherContextType {
  searchCity: string;
  setSearchCity: React.Dispatch<React.SetStateAction<string>>;
  data: any; // Or define a proper interface if you know the structure
  fetchWeather: (city: string) => Promise<void>;
}

// Create context
const WeatherContext = createContext<WeatherContextType | null>(null);

// Props for Provider
interface WeatherProviderProps {
  children: ReactNode;
}

// Weather Provider
export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState<string>("");

  const fetchWeather = async (city: string) => {
    try {
      const response = await getCityWeather(city);
      setData(response);
    } catch (error) {
      console.error("Failed to fetch weather:", error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ searchCity, setSearchCity, data, fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};
