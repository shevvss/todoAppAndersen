import { createSlice } from '@reduxjs/toolkit';

export const initialState = [];

const addItemToCart = (cart, item, count = 1) => {
  let index = cart.findIndex((el) => {
    return el.id === item.id;
  });
  if (index === -1) {
    cart.push({ ...item, count: count });
  } else {
    cart[index].count += count;
  }
  return cart;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { item, count } = action.payload;
      state = addItemToCart(state, item, count);
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart(state) {
      return initialState;
    },
  },
});
console.log(cartSlice);
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
