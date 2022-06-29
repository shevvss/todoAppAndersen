import { createStore } from 'redux';

const initialState = [];

// const addItemToCart = (state, item, count = 1) => {
//   let items = [];
//     for (let i = 0; i < count; i++) {
//       items.push(item);
//     }
//   return [...state, ...items];
// };

const addItemToCart = (state, item, count = 1) => {
  debugger;

  let index = state.findIndex((el) => {
    return el.id === item.id;
  });
  if (index === -1) {
    state.push(item);
  } else {
    state[index].count += count;
  }
  return state;
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'addItem':
      const { item, count } = action.payload;
      return addItemToCart(state, item, count);
    case 'removeItem':
      return state;
    default:
      return state;
  }
}
const store = createStore(cartReducer);

export default store;
