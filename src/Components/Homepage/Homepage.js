import React, { useState, useEffect } from 'react';
import styles from './StylesHomepage.module.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=10&limit=10')
      .then((response) => response.json())
      .then((items) => {
        console.log(items);
        setItems(items);
      });
  }, []);

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li className={styles.wrapper} key={item.id}>
              <img className={styles.img} alt='#' src={item.images[0]} />
              <Link to={`/descriptionitem/${item.id}`}>{item.title}</Link>
              {item.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Homepage;
