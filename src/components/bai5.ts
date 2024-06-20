import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu với mảng các số ngẫu nhiên
interface RandomNumberState {
  numbers: number[];
}

const initialState: RandomNumberState = {
  numbers: [],
};

// Tạo slice cho randomNumbers
const randomNumbersSlice = createSlice({
  name: 'randomNumbers',
  initialState,
  reducers: {
    addRandomNumber: (state, action: PayloadAction<number>) => {
      state.numbers.push(action.payload);
    },
  },
});

export const { addRandomNumber } = randomNumbersSlice.actions;

const bai5 = configureStore({
  reducer: {
    randomNumbers: randomNumbersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof bai5.getState>;
export type AppDispatch = typeof bai5.dispatch;

export default bai5;
