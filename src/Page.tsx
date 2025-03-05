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
    const data: Article[] = [
        {
            id: 1,
            title: "Не работает эцп [ГЛОБАЛЬНАЯ ПРОБЛЕМА]",
            keywords: ["технологии", "искусственный интеллект", "инновации"],
            elements: [
                { type: "header", data: "Не работает эцп [ГЛОБАЛЬНАЯ ПРОБЛЕМА]" },
                { type: "paragraph", data: "Google прекращает поддержку расширения КриптоПро Plugin в связи с переходом на новые стандарты Manifest V3. Эти изменения направлены на повышение безопасности и производительности браузера, но, к сожалению, делают невозможным использование некоторых старых расширений, включая КриптоПро." },
                { type: "paragraph", data: `Чтобы продолжить пользоваться всеми функциями плагина, рекомендуем перейти на Яндекс.Браузер. Он поддерживает текущие технологии, что позволит вам без проблем работать с электронной подписью и другими возможностями КриптоПро.` },
                { type: "image", data: { url: "https://rozetked.me/images/uploads/cK18XWCVkFuA.jpg", alt: "Описание изображения 1" } },
                { type: "paragraph", data: "Основной текст статьи." },
                { type: "quote", data: "Цитата из статьи." },
                { type: "paragraph", data: "Заключительный текст." }
            ]
        },
    ];

    const { id } = useParams();
    const article = data.find((item) => item.id === Number(id)); // Используем find вместо filter

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