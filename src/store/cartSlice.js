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

const removeItemFromCart = (cart, item, count) => {
  let index = cart.findIndex((el) => {
    return el.id === item.id;
  });
  if (index === -1) {
    cart.push({ ...item, count: count });
  } else {
    cart[index].count > 0
      ? (cart[index].count -= count)
      : (cart[index].count = 0);
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
      const { item, count } = action.payload;
      state = removeItemFromCart(state, item, count);
    },
    fullRemoveItem(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart() {
      return initialState;
    },
  },
});

export const { addItem, removeItem, fullRemoveItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
