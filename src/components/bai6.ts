import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu với giá trị company
interface CompanyState {
  name: string;
}

const initialState: CompanyState = {
  name: "Rikkei Academy",
};

// Tạo slice cho company
const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    changeCompany: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { changeCompany } = companySlice.actions;

const bai6 = configureStore({
  reducer: {
    company: companySlice.reducer,
  },
});

export type RootState = ReturnType<typeof bai6.getState>;
export type AppDispatch = typeof bai6.dispatch;

export default bai6;
