import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Định nghĩa kiểu dữ liệu của user
interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

// Khởi tạo state ban đầu với mảng users
const initialState: User[] = [];

// Tạo slice cho users
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      return action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      return state.filter(user => user.id !== action.payload);
    },
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = usersSlice.actions;

const bai2= configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof bai2.getState>;
export type AppDispatch = typeof bai2.dispatch;

export default bai2;