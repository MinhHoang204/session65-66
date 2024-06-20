import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu với chế độ sáng
interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

// Tạo slice cho theme
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

const bai7 = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof bai7.getState>;
export type AppDispatch = typeof bai7.dispatch;

export default bai7;
