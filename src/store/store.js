import { createStore } from 'redux';

const initialState = [];

const addItemToCart = (state, item, count = 1) => {
  let index = state.findIndex((el) => {
    return el.id === item.id;
  });
  if (index === -1) {
    state.push({ ...item, count: count });
  } else {
    state[index].count += count;
  }
  return state;
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'addItem':
      const { item, count } = action.payload;
      return [...addItemToCart(state, item, count)];
    case 'fullRemoveItem':
      return state;
    case 'clearCart':
      state = initialState;
      return [];
    default:
      return state;
  }
}
const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
