import { useEffect, useState } from 'react';

export function useFetchForecast(city: string | null) {
  const [forecasts, setForecasts] = useState([]);
  const [isLoadingForecasts, setIsLoadingForecasts] = useState(false);
  const [actualCityName, setActualCityName] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    setIsLoadingForecasts(true);

    fetch(import.meta.env.VITE_API_URL + `/forecasts/${city}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setForecasts(data);
          setActualCityName(data[0].city?.name || null);
        }
      })
      .finally(() => {
        setIsLoadingForecasts(false);
      });
  }, [city]);

  return { forecasts, isLoadingForecasts, actualCityName };
}
