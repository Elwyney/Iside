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

  const [prompt, setPrompt] = useState<string>('');

  const filteredArticles = dataS.filter((item) =>
    item.title.toLowerCase().includes(prompt.toLowerCase())
  ).slice(0, 20);

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