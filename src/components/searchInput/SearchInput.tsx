import React from 'react';
import './searchInput.scss';

interface SearchInputProps {
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onClick, onChange }) => {
  return (
    <form action="">
      <input 
        placeholder='Поиск' 
        className={``} 
        onClick={onClick} 
        onChange={onChange} 
        type="text"
      />
    </form>
  );
};

export default SearchInput;
