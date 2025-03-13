import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const useFetchPosts = () => {
    return useQuery({
        queryKey: ['users'], // Здесь мы используем queryKey
        queryFn: fetchData, // Здесь мы указываем функцию для получения данных
    });
};
export default useFetchPosts;