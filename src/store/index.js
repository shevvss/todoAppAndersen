import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlicer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
  devTools: true,
});

export default store;
