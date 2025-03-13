import './NewsDashboards.scss'
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import dataS from '../data'
// Интерфейсы
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

// Компонент страницы
const NewsDashboard = () => {
    const { id } = useParams<{ id: string }>();
    const article = dataS.find((item) => item.id === Number(id)); // Преобразуем id в число

    const renderElement = (element: ArticleElement, index: number) => {
        switch (element.type) {
            case 'header':
                return <h1 className='pagetitle' key={index}>{element.data as string}</h1>; // Приведение типа к строке
            case 'paragraph':
                return <p key={index}>{element.data as string}</p>; // Приведение типа к строке
            case 'image':
                return (
                    <img
                        key={index}
                        src={(element.data as { url: string; alt: string }).url}
                        alt={(element.data as { url: string; alt: string }).alt}
                    />
                );
            case 'video':
                return (
                    <iframe
                        key={index}
                        width="560"
                        height="315"
                        src={(element.data as { url: string; title: string }).url}
                        title={(element.data as { url: string; title: string }).title}
                        frameBorder="0"
                        allowFullScreen
                    />
                );
            case 'quote':
                return <blockquote key={index}>{element.data as string}</blockquote>; // Приведение типа к строке
            default:
                return null;
        }
    };

    // Если статья не найдена
    if (!article) {
        return <div>Статья не найдена</div>;
    }

    return (
        <div className='content'>
            <Link className='close' to="/">Назад к списку</Link>
            {article.elements.map((item, index) => renderElement(item, index))}
        </div>
    );
};

export default NewsDashboard;