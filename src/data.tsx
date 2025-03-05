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
const data: Article[] = [
  {
    id: 1,
    title: "Не работает эцп [ГЛОБАЛЬНАЯ ПРОБЛЕМА]❗️❗️❗️",
    keywords: ["технологии", "искусственный интеллект", "инновации"],
    elements: [
      { type: "header", data: "Введение" },
      { type: "paragraph", data: "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations." },
      { type: "image", data: { url: "https://res.cloudinary.com/hl8zoliad/raw/upload/npm/@types/react-router-dom.png", alt: "Описание изображения 1" } },
      { type: "paragraph", data: "Основной текст статьи." },
      { type: "quote", data: "Цитата из статьи." },
      { type: "paragraph", data: "Заключительный текст." }
    ]
  },
  {
    id: 2,
    title: "Если у вас возникла проблема с подписыванием сертификата, это может быть связано с различными причинами",
    keywords: ["технологии", "искусственный интеллект", "инновации"],
    elements: [
      { type: "header", data: "Введение" },
      { type: "paragraph", data: "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations." },
      { type: "image", data: { url: "https://res.cloudinary.com/hl8zoliad/raw/upload/npm/@types/react-router-dom.png", alt: "Описание изображения 1" } },
      { type: "paragraph", data: "Основной текст статьи." },
      { type: "quote", data: "Цитата из статьи." },
      { type: "paragraph", data: "Заключительный текст." }
    ]
  },
  {
    id: 3,
    title: "Если у вас возникла проблема с подписыванием сертификата, это может быть связано с различными причинами",
    keywords: ["технологии", "искусственный интеллект", "инновации"],
    elements: [
      { type: "header", data: "Введение" },
      { type: "paragraph", data: "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations." },
      { type: "image", data: { url: "https://res.cloudinary.com/hl8zoliad/raw/upload/npm/@types/react-router-dom.png", alt: "Описание изображения 1" } },
      { type: "paragraph", data: "Основной текст статьи." },
      { type: "quote", data: "Цитата из статьи." },
      { type: "paragraph", data: "Заключительный текст." }
    ]
  },
];

export default data;