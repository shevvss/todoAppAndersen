import React from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../store/selectors';
import Basket from './basket.svg';

const Order = () => {
  const cart = useSelector(getCart);
  return (
    <div>
      <img src={Basket} style={{ width: '14px' }} alt='close' />
      &nbsp;{cart.length} |&nbsp;
      {cart.reduce((prev, item) => {
        return prev + item.price;
      }, 0)}
      $
    </div>
  );
};

export default Order;
