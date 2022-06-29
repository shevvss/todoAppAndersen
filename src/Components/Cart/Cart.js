import React from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../store/selectors';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch({ type: 'clearCart' });
  };

  return (
    <div>
      <table>
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
                <td>{item.count}</td>
                <td>{item.price * item.count}</td>
                <td></td>
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
      <button onClick={clearCart}>Clear cart</button>
    </div>
  );
};

export default Cart;
