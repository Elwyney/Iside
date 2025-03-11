import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Типизация для билета
interface Ticket {
  id: number;
  title: string;
  description: string;
}

// Моковые данные
const response: Ticket[] = [
  {
    id: 1,
    title: "Исправить баг в авторизации",
    description: "Пользователи не могут войти в систему после ввода правильных данных.",
  },
  {
    id: 2,
    title: "Добавить страницу контактов",
    description: "Необходимо создать новую страницу с контактной информацией компании.",
  },
  {
    id: 3,
    title: "Оптимизировать загрузку изображений",
    description: "Изображения на главной странице загружаются слишком медленно.",
  },
  {
    id: 4,
    title: "Реализовать темную тему",
    description: "Пользователи просят добавить возможность переключения на темную тему.",
  },
  {
    id: 5,
    title: "Исправить ошибку в корзине",
    description: "Товары не удаляются из корзины после нажатия кнопки 'Удалить'.",
  },
];

// Асинхронный thunk для получения данных
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      // Здесь можно сделать запрос к API, но мы используем моковые данные
      return new Promise<Ticket[]>((resolve) => {
        setTimeout(() => {
          resolve(response);
        }, 1000); // Имитация задержки
      });
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке данных');
    }
  }
);

// Слайс для управления состоянием
const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [] as Ticket[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Экспорт редюсера
export default ticketSlice.reducer;
