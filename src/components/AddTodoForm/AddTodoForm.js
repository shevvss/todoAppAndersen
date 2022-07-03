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
    fetch('https://62bf3495be8ba3a10d65ed0b.mockapi.io/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        title: value,
        completed: false,
        favourite: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => dispatch(addTodo(data)));
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
