import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  password: string;
}

interface AuthState {
  registeredUser: User | null;
}

const initialState: AuthState = {
  registeredUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      state.registeredUser = action.payload;
    },
  },
});

export const { register } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;