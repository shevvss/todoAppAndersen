import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleComplete,
  deleteTodo,
  toggleFavourite,
} from '../../redux/todoSlice';
import Popup from '../Popup/Popup';
import styles from './StyleItem.module.css';
import Menu from '../../icons/menu.svg';
import Star from '../../icons/star.svg';

const TodoItem = ({ id, title, completed, favourite }) => {
  const [popup, setPopup] = useState(false);

  const ToggleModal = () => setPopup(!popup);
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
    setPopup(false);
  };

  const handleFavouriteClick = () => {
    dispatch(toggleFavourite({ id: id, favourite: !favourite }));
    setPopup(false);
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
    setPopup(false);
  };

  return (
    <li className={`${completed ? styles.completed : ''} `}>
      <span>
        <input
          type='checkbox'
          checked={completed}
          onChange={handleCompleteClick}
        />
        &nbsp;
        {title}
      </span>
      {favourite && (
        <button onClick={() => handleFavouriteClick()}>
          <img src={Star} style={{ width: '14px' }} alt='#'></img>
        </button>
      )}

      <button onClick={() => ToggleModal()}>
        <img src={Menu} style={{ width: '14px' }} alt='#'></img>
      </button>
      <Popup
        show={popup}
        del={handleDeleteClick}
        close={ToggleModal}
        completed={completed}
        favourite={favourite}
        handleComplete={handleCompleteClick}
        handleFavourite={handleFavouriteClick}
      />
      {/* <button onClick={handleDeleteClick}>&times;</button> */}
    </li>
  );
};

export default TodoItem;
