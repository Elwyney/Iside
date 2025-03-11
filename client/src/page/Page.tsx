import React from 'react';
import { useParams } from 'react-router-dom';

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
const Page = () => {
    //нужны данные
    const { id } = useParams();
    const article = data.find((item) => item.id === id); // Используем find вместо filter

    // Рендер элемента
    const renderElement = (element: ArticleElement, index: number) => {
        switch (element.type) {
            case 'header':
                return <h1 className='pagetitle' key={index}>{element.data}</h1>;
            case 'paragraph':
                return <p key={index}>{element.data}</p>;
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
                return <blockquote key={index}>{element.data}</blockquote>;
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
            <a className='close' href="">Назад к списку</a>
            {article.elements.map((item, index) => renderElement(item, index))}
        </div>
    );
};

export default Page;