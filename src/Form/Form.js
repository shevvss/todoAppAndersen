import React, { useState } from 'react';
import styles from './StylesForm.module.css';
import Input from '../Components/Input/Input';

const Form = ({ close, logIn }) => {
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      event.target.userName.value === 'admin' &&
      event.target.password.value === '1234'
    ) {
      logIn();
      setError(null);
    } else {
      setError('!!  login or password incorrect');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Username'
        labelFor='login'
        type='text'
        id='userName'
        placeholder='admin'
      />

      <Input
        label='Password'
        labelFor='password'
        type='password'
        id='password'
        placeholder='1234'
      />

      <p>{error}</p>

      <div>
        <button className={styles.btn} onClick={() => close()} type='button'>
          Cancel
        </button>
        <button className={styles.btn} type='submit'>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Form;
