import React from 'react';
import styles from './StylesForm.module.css';
import Input from '../Components/Input/Input';

const Form = ({ close }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({ userState });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Username'
        labelFor='login'
        type='text'
        id='userName'
        placeholder='Enter your login'
      />

      <Input
        label='Password'
        labelFor='password'
        type='password'
        id='password'
        placeholder='Enter your password'
      />

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
