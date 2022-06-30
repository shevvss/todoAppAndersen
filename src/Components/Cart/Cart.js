import React from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../store/selectors';
import { useDispatch } from 'react-redux';
import {
  addItem,
  removeItem,
  clearCart,
  fullRemoveItem,
} from '../../store/cartSlice';
import styles from './StylesCart.module.css';

const Cart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const addItemAction = (item, countItem = 1) => {
    dispatch(addItem({ item: item, count: countItem }));
  };

  const removeItemAction = (item, countItem = 1) => {
    dispatch(removeItem({ item: item, count: countItem }));
  };

  const clearCartAction = () => {
    dispatch(clearCart());
  };

  const fullRemoveItemAction = (item) => {
    dispatch(fullRemoveItem({ id: item.id }));
  };

  return (
    <div>
      <table class={styles.styledTable}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Sum</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      addItemAction(item);
                    }}
                  >
                    +
                  </button>
                  &nbsp;{item.count}&nbsp;
                  <button
                    onClick={() => {
                      removeItemAction(item);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{item.price * item.count}</td>
                <td>
                  <button
                    onClick={() => {
                      fullRemoveItemAction(item);
                    }}
                  >
                    Remove product from cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2>
        Total:
        {cart.reduce(
          (prev_val, item) => (prev_val += item.price * item.count),
          0
        )}
      </h2>
      <button onClick={clearCartAction}>Clear cart</button>
      <button disabled={cart.length === 0}>Pay</button>
    </div>
  );
};

export default Cart;
