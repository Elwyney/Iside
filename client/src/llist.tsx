import { NavLink } from "react-router"
import React from 'react';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SearchInput from "./components/searchInput/SearchInput";
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
const List = () => {

    const [prompt, setPrompt] = useState<string>('');
    const [activePrompt, setActivePrompt] = useState<boolean>(false);
    const filterData = data.filter((item) => item.title.toLowerCase().includes(prompt.toLowerCase())).splice(0, 20)
    return (
        <>
            {
                !activePrompt ? <div className="welcome-section">
                    <h2 className="assistant-title">Помощник Изида – ваш проводник к знаниям</h2>
                    <p className="assistant-description">
                        <Typewriter
                            words={['Сложное превращаем в простое.', 'Материал становится понятным и доступным.', 'С Изидой все проще. Всегда рядом!']}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={40}
                            deleteSpeed={30}
                            delaySpeed={1500}
                        />
                    </p>
                </div> : filterData.length > 0 ? (
                    <>
                        {filterData.map((item) => (
                            // Отображаем каждый элемент из filterData
                            <NavLink to={`/${item.id}`} key={item.id} className="answer">
                                <span className="assistant-description">{item.title}</span>
                                <span>РМИАwС</span>
                            </NavLink>
                        ))}
                    </>
                ) : (
                    <span>Ничего не найдено</span> // Сообщение, если ничего не найдено
                )}
        </>
    )
}
export default List;