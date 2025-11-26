export { WeatherCard } from './WeatherCard.tsx';

export interface WeatherCardProps {
  forecast: WeatherCardData;
}

export interface WeatherCardData {
  date: string;
  temperature: number;
  feelsLike: number;
  minTemperature: number;
  maxTemperature: number;
  pressure: number;
  visibility: number;
  humidity: number;
  weather: {
    type: string;
    description: string;
    icon: string;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  city: {
    name: string;
    country: string;
    population: number;
    timezone: string;
    sunset: string;
    sunrise: string;
  };
}
