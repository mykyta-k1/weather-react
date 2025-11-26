import './App.css';
import { useDetectLocate } from './hooks/useDetectLocate.tsx';
import { Header } from './components/Header';
import { useFetchForecast } from './hooks/useFetchForecast.tsx';
import { SearchBar } from './components/SearchBar';
import { WeatherCardList } from './components/WeatherCardList/WeatherCardList.tsx';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';

export function App() {
  const { cityLocate } = useDetectLocate();

  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    if (cityLocate) {
      setCity(cityLocate);
    }
  }, [cityLocate]);

  const { forecasts, isLoadingForecasts, actualCityName } = useFetchForecast(
    city || null
  );

  const [citySearch, setCitySearch] = useState<string>('');

  const handleSearch = () => {
    if (citySearch.trim()) {
      setCity(citySearch.trim());
    }
  };

  useEffect(() => {
    if (actualCityName && actualCityName !== city) {
      setCity(actualCityName);
    }
  }, [actualCityName]);

  return (
    <>
      <Header />
      <h1>{city != null && city != '' ? city : cityLocate}</h1>
      <div className={'main-container'}>
        <main>
          {isLoadingForecasts ? (
            <div>No fetch data...</div>
          ) : (
            <WeatherCardList weatherData={forecasts} />
          )}
        </main>
        <SearchBar
          citySearch={citySearch ?? ''}
          setCitySearch={setCitySearch}
          handleSearch={handleSearch}
        />
      </div>
      <Footer />
    </>
  );
}
