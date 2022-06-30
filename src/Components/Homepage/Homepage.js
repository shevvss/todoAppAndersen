import React, { useState, useEffect } from 'react';
import styles from './StylesHomepage.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { useSelector } from 'react-redux';
import { getUser } from '../../store/selectors';

const Homepage = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=10&limit=10')
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
      });
  }, []);

  const addItemAction = (item) => {
    dispatch(addItem({ item: item, count: 1 }));
  };

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li className={styles.productItem} key={item.id}>
              <img className={styles.img} alt='#' src={item.images[0]} />
              <div className={styles.productList}>
                <Link className={styles.title} to={`/product/${item.id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <div className={styles.price}>{item.price}$</div>

                {user ? (
                  <>
                    <button
                      className={styles.bttn}
                      onClick={() => {
                        addItemAction(item);
                      }}
                    >
                      Add to cart
                    </button>
                  </>
                ) : (
                  <>
                    <button>Log in to add an item to your cart</button>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Homepage;
