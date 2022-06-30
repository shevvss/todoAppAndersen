import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { initialState } from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  initialState,
  devTools: true,
});

export default store;
