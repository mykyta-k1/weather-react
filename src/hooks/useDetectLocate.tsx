import { useEffect, useState } from 'react';

/**
 * Return city name by IP, using service https://ipapi.co/json/ or default value
 */
export function useDetectLocate() {
  const [cityLocate, setCityLocate] = useState(null);
  const [isLoadingLocate, setIsLoadingLocate] = useState(true);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        if (data.city) {
          setCityLocate(data.city);
        }
      })
      .finally(() => {
        setIsLoadingLocate(false);
      });
  }, []);

  return { cityLocate, isLoadingLocate };
}
