import React, { useState } from 'react';
import styles from './StyleHeader.module.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Form from '../../Form/Form';

import Order from '../Order/Order';

const Header = (props) => {
  const [modal, setModal] = useState(false);

  const ToggleModal = () => setModal(!modal);

  return (
    <div className={styles.header}>
      <Link className={styles.link + ' ' + styles.homepage} to='/index'>
        Homepage
      </Link>
      <Link className={styles.link} to='/aboutstore'>
        About store
      </Link>

      {props.loggedIn ? (
        <>
          <button className={styles.btnLog} onClick={props.logOut}>
            LOG OUT
          </button>

          <button className={styles.cart}>
            <Order cart={props.cart} />
          </button>
        </>
      ) : (
        <>
          <button className={styles.btnLog} onClick={() => ToggleModal()}>
            LOG IN
          </button>
          <Modal
            className={styles.modal}
            show={modal}
            close={ToggleModal}
            title='LOGIN'
          >
            <Form logIn={props.logIn} close={ToggleModal} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default Header;
