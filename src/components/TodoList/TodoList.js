import React, { useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../../redux/todoSlice';
import './StyleList.module.css';

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
