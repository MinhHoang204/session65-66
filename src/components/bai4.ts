import { configureStore, createSlice } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu cho counter
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// Tạo slice cho counter
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

const bai4 = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof bai4.getState>;
export type AppDispatch = typeof bai4.dispatch;

export default bai4;