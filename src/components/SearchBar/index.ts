export { SearchBar } from './SearchBar.tsx';

export interface SearchBarProps {
  citySearch: string;
  setCitySearch: (value: string) => void;
  handleSearch: () => void;
}
