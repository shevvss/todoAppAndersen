import React from 'react';
import Basket from './basket.svg';

const Order = ({ cart }) => {
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
