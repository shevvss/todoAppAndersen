import React, { useState, useEffect } from 'react';
import styles from './StylesItems.module.css';
import { Link, useParams } from 'react-router-dom';

const Items = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((item) => {
        console.log(item);
        setItem(item);
      });
  }, [id]);

  return (
    <div>
      <ul>
        <li className={styles.items} key={item.id}>
          {item.images && item.images[0] && (
            <img alt='#' src={item.images[0]} />
          )}
          {item.title} {item.price} {item.description}
        </li>
      </ul>

      <Link className={styles.backLink} to='/index'>
        Back
      </Link>
    </div>
  );
};

export default Items;
