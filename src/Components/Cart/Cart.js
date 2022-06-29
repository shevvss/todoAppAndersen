import React from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../store/selectors';

const Cart = () => {
  const cart = useSelector(getCart);
  return (
    <div>
      <table>
        <tr>
          <th>Product ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Count</th>
          <th>Sum</th>
          <th>Remove</th>
        </tr>
        {cart.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Cart;
