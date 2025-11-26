import './WeatherCard.css';
import type { WeatherCardProps } from './index.ts';

export function WeatherCard({ forecast }: WeatherCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('uk-UA', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  };

  const getWeatherIcon = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="card">
      <div className="card-main">
        <div className="card-date">{formatDate(forecast.date)}</div>
        <img
          className="weather-icon"
          src={getWeatherIcon(forecast.weather.icon)}
          alt={forecast.weather.description}
        />
        <div className="temperature-main">
          {Math.round(forecast.temperature)}°
        </div>
        <div className="weather-description">
          {forecast.weather.description}
        </div>
      </div>

      <div className="card-divider"></div>

      <div className="card-details">
        <div className="detail-item">
          <svg
            className="detail-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M12 2v10m0 0l4-4m-4 4L8 8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M4 14h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="detail-label">Мін:</span>
          <span className="detail-value">
            {Math.round(forecast.minTemperature)}°
          </span>
        </div>

        <div className="detail-item">
          <svg
            className="detail-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M12 22v-10m0 0l4 4m-4-4l-4 4"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M4 10h16M4 6h16" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="detail-label">Макс:</span>
          <span className="detail-value">
            {Math.round(forecast.maxTemperature)}°
          </span>
        </div>

        <div className="detail-item">
          <svg
            className="detail-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M12 2v6m0 0L9 5m3 3l3-3"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 12h18M3 12l3-3m-3 3l3 3m12-3l-3-3m3 3l-3 3"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="detail-label">Вітер:</span>
          <span className="detail-value">
            {Math.round(forecast.wind.speed)} м/с
          </span>
        </div>

        <div className="detail-item">
          <svg
            className="detail-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="detail-label">Вологість:</span>
          <span className="detail-value">{Math.round(forecast.humidity)}%</span>
        </div>

        <div className="detail-item">
          <svg
            className="detail-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="3" strokeWidth="2" />
            <path
              d="M12 5v2m0 10v2m7-7h-2M7 12H5"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="detail-label">Тиск:</span>
          <span className="detail-value">
            {Math.round(forecast.pressure)} гПа
          </span>
        </div>

        <div className="detail-item">
          <svg
            className="detail-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="detail-label">Видимість:</span>
          <span className="detail-value">
            {(forecast.visibility / 1000).toFixed(1)} км
          </span>
        </div>

        <div className="detail-item">
          <svg
            className="detail-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M14.828 14.828a4 4 0 1 0-5.656-5.656"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 2v2m0 16v2m10-10h-2M4 12H2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="detail-label">Відчувається:</span>
          <span className="detail-value">
            {Math.round(forecast.feelsLike)}°
          </span>
        </div>
      </div>
    </div>
  );
}
