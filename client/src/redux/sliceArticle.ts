import { createSlice } from '@reduxjs/toolkit';

const ArticleSlice = createSlice({
  name: 'article', // Имя слайса
  initialState: {
    value: 0, // Начальное состояние
  },
  reducers: {

  },
});

// Экспортируем действия
export const { } = ArticleSlice.actions;

// Экспортируем редьюсер
export default ArticleSlice.reducer;