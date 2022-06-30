import React, { useState } from 'react';
import styles from './StyleHeader.module.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Form from '../../Form/Form';
import Order from '../Order/Order';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUser } from '../../store/selectors';
import { logIn, logOut } from '../../store/userSlicer';

const Header = () => {
  const [modal, setModal] = useState(false);

  const ToggleModal = () => setModal(!modal);

  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const logInAction = () => {
    dispatch(logIn());
  };

  const logOutAction = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.header}>
      <Link className={`${styles.link} ${styles.homepage}`} to='/products'>
        Homepage
      </Link>
      <Link className={styles.link} to='/aboutstore'>
        About store
      </Link>

      {user ? (
        <>
          <button
            className={styles.btnLog}
            onClick={() => {
              logOutAction();
            }}
          >
            LOG OUT
          </button>

          <Link className={styles.cart} to='/cart'>
            <Order />
          </Link>
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
            <Form
              logIn={() => {
                logInAction();
              }}
              close={ToggleModal}
            />
          </Modal>
        </>
      )}
    </div>
  );
};

export default Header;
