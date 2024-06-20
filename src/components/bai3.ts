import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Định nghĩa kiểu dữ liệu của product
interface Product {
  id: number;
  productName: string;
  price: string;
  quantity: number;
}

// Khởi tạo state ban đầu với mảng products
const initialState: Product[] = [];

// Tạo slice cho products
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      return action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      return state.filter(product => product.id !== action.payload);
    },
  },
});

export const { setProducts, addProduct, updateProduct, deleteProduct } = productsSlice.actions;

const bai3 = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof bai3.getState>;
export type AppDispatch = typeof bai3.dispatch;

export default bai3;
