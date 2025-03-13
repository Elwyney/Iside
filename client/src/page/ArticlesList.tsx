import './ArticlesList.scss';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import SearchInput from '../components/searchInput/SearchInput';
import dataS from '../data'
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

const ResultList = () => {
  const [articles, setArticles] = useState<Article[]>([{
    "id": 1,
    "title": "Путешествие по миру программирования",
    "keywords": ["программирование", "путешествие", "технологии", "разработка"],
    "elements": [
      {
        "type": "header",
        "data": "Введение в программирование"
      },
      {
        "type": "paragraph",
        "data": "Программирование — это искусство создания программ, которые решают задачи и автоматизируют процессы."
      },
      {
        "type": "image",
        "data": {
          "url": "https://example.com/programming.jpg",
          "alt": "Изображение программирования"
        }
      },
      {
        "type": "quote",
        "data": "Программирование — это не просто работа, это стиль жизни."
      },
      {
        "type": "video",
        "data": {
          "url": "https://example.com/programming-intro.mp4",
          "title": "Введение в программирование"
        }
      },
      {
        "type": "paragraph",
        "data": "В этом видео мы рассмотрим основные концепции программирования и его важность в современном мире."
      },
      {
        "type": "header",
        "data": "Заключение"
      },
      {
        "type": "paragraph",
        "data": "Программирование открывает множество возможностей для творчества и инноваций."
      }
    ]
  }]);

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

export default ResultList;