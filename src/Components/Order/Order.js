import React from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../store/selectors';
import Basket from './basket.svg';

const Order = () => {
  const cart = useSelector(getCart);
  console.log(cart);
  return (
    <div>
      <img src={Basket} style={{ width: '14px' }} alt='close' />
      &nbsp; {cart.reduce((prev_val, item) => (prev_val += item.count), 0)}{' '}
      |&nbsp;
      {cart.reduce(
        (prev_val, item) => (prev_val += item.price * item.count),
        0
      )}
      $
    </div>
  );
};

export default Order;
