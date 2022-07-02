import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';
import './StylesForm.module.css';

const AddTodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type=' '
        placeholder='Add todo...'
        value={value}
        maxLength='160'
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type='submit'>Add todo</button>
    </form>
  );
};

export default AddTodoForm;
