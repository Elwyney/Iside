import './resultList.scss';
import { NavLink, Routes, Route } from "react-router";
import data from '../../data';
import { useState } from 'react';
import SearchInput from '../searchInput/SearchInput';
interface Item {
  id: number;
  title: string;
}

interface ResultListProps {
  data: Item[];
}

const ResultList: React.FC<ResultListProps> = () => {
  const [prompt, setPrompt] = useState<string>('');
  const filterData = data.filter((item) => item.title.toLowerCase().includes(prompt.toLowerCase())).splice(0, 20)
  return (
    <>
      <SearchInput onChange={(e) => setPrompt(e.target.value)} />
      {data.length > 0 ? (
        data.map((item) => (
          <NavLink to={`/${item.id}`} className='answer' key={item.id}>
            <span className='assistant-description'>{item.title}</span>
            <span>РМИАС</span>
          </NavLink>
        ))
      ) : (
        <span>Ничего не найдено</span>
      )}
    </>
  );
};

export default ResultList;
