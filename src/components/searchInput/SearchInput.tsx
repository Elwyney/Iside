import './searchInput.scss';

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  return (
    <form action="">
      <input
        placeholder='Поиск'
        className={``}
        onChange={onChange}
        type="text"
      />
    </form>
  );
};

export default SearchInput;
