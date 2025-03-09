import './resultList.scss';
import React, { useEffect } from 'react';
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
interface ArticleElement {
  type: "header" | "paragraph" | "image" | "quote" | "video";
  data: string | { url: string; alt: string } | { url: string; title: string };
}

interface Article {
  id: number;
  title: string;
  keywords: string[];
  elements: ArticleElement[];
}

const ResultList: React.FC<ResultListProps> = () => {
  const [data, setData] = useState<Article[]>([])
  const [prompt, setPrompt] = useState<string>('');
  const filterData = data.filter((item) => item.title.toLowerCase().includes(prompt.toLowerCase())).splice(0, 20)
  useEffect(() => {
    fetch('http://localhost:7000/api/list')
      .then((response) => response.json())
      .then((responce) => setData(responce))
  }, [])
  console.log(data);
  
  return (
    <>
      <SearchInput onChange={(e) => setPrompt(e.target.value)} />
      {data.length > 0 ? (
        filterData.map((item) => (
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
