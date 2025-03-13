import './ArticlesList.scss';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import SearchInput from '../components/searchInput/SearchInput';
import dataS from '../data'
import { useQuery } from '@tanstack/react-query';
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

const ArticlesList = () => {
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'], // Здесь мы используем queryKey
    queryFn: fetchUsers, // Здесь мы указываем функцию для получения данных
  });
  console.log(data);

  const [prompt, setPrompt] = useState<string>('');

  const filteredArticles = dataS.filter((item) =>
    item.title.toLowerCase().includes(prompt.toLowerCase())
  ).slice(0, 20);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Перезагрузите страницу</div>;
  return (
    <>
      <SearchInput onChange={(e) => setPrompt(e.target.value)} />
      {filteredArticles.length > 0 ? (
        filteredArticles.map((item) => (
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

export default ArticlesList;