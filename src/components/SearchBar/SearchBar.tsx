import './SearchBar.css';
import * as React from 'react';
import type { SearchBarProps } from './index.ts';

export function SearchBar({
  citySearch,
  setCitySearch,
  handleSearch,
}: SearchBarProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className={'search-container'}>
        <input
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
          onKeyPress={handleKeyPress}
          type="text"
          placeholder={'Search by city name'}
        />
        <button className={'search-btn'} onClick={handleSearch}></button>
      </div>
    </>
  );
}
