import React, { useState, useEffect } from 'react';
import styles from './StylesItems.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';

const Item = () => {
  const dispatch = useDispatch();

  const addItemAction = (item, countItem = 1) => {
    dispatch(addItem({ item: item, count: countItem }));
  };

  const [item, setItem] = useState({});
  const { id } = useParams();

  const [countItem, setCountItem] = useState(0);

  const incCount = () => {
    setCountItem(countItem + 1);
  };

  const decCount = () => {
    // if (countItem > 0) {
    //   setCountItem(countItem - 1);
    // } else {
    //   setCountItem(0);
    // }
    return countItem > 0 ? setCountItem(countItem - 1) : setCountItem(0);
  };

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((item) => {
        setItem(item);
      });
  }, [id]);

  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.item} key={item.id}>
          {item.images && item.images[0] && (
            <img className={styles.img} alt='#' src={item.images[0]} />
          )}
          <div className={styles.despriptItem}>
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.price}>{item.price}$</div>
            <div className={styles.description}>{item.description}</div>

            <button onClick={incCount}>+</button>
            <button
              onClick={() => {
                addItemAction(item, countItem);
              }}
            >
              Add to cart: {countItem}
            </button>
            <button onClick={decCount}>-</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Item;
