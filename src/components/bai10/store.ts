import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  password: string;
}

interface AuthState {
  registeredUser: User | null;
  loggedInUser: string | null;
}

const initialState: AuthState = {
  registeredUser: null,
  loggedInUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      state.registeredUser = action.payload;
    },
    login: (state, action: PayloadAction<string>) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { register, login } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
