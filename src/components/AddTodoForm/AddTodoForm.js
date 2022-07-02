import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';
import './StylesForm.module.css';

const AddTodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) return;
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue('');
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
