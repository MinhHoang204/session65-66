import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Định nghĩa kiểu dữ liệu của user
interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

// Khởi tạo state ban đầu
const initialState: User = {
  id: 1,
  userName: 'Nguyễn Minh Hoàng',
  gender: 'Nam',
  dateBirth: '11/11/2004',
  address: 'Bắc Ninh',
};

// Tạo slice cho user
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

const bai1 = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof bai1.getState>;
export type AppDispatch = typeof bai1.dispatch;

export default bai1;