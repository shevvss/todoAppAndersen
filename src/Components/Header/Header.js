import React, { useState } from 'react';
import styles from './StyleHeader.module.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Form from '../../Form/Form';

const Header = () => {
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

      <button class={styles.login} onClick={() => ToggleModal()}>
        LOG IN
      </button>

      <Modal
        className={styles.modal}
        show={modal}
        close={ToggleModal}
        title='LOGIN'
      >
        <Form close={ToggleModal} />
      </Modal>
    </div>
  );
};

export default Header;
