import React, { createContext, useContext, ReactNode } from "react";

// Context value type
interface WeatherData {
  temperature: number;
  condition: string;
  location: string;
  time: string;
}

// Provider props type
interface WeatherProviderProps {
  value: WeatherData;
  children: ReactNode;
}

// Create context with proper type
const WeatherContext = createContext<WeatherData | null>(null);

// Weather Provider
export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  value,
  children,
}) => {
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

// Hook to use context
export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};
