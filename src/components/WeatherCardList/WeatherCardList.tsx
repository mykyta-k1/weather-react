import './WeatherCardList.css';
import NoData from '@assets/no_data.svg?react';
import { WeatherCard } from '../WeatherCard';
import type { WeatherCardListProps } from './index.ts';

export function WeatherCardList({ weatherData }: WeatherCardListProps) {
  if (!weatherData || weatherData.length === 0) {
    return (
      <div className="error-fetch">
        <NoData className={'error-icon'} />
        <p>Немає даних для відображення</p>
      </div>
    );
  }

  return (
    <div className="card-slider">
      {weatherData.map((dayWeather, index) => (
        <WeatherCard key={dayWeather.date || index} forecast={dayWeather} />
      ))}
    </div>
  );
}
