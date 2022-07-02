import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleComplete,
  deleteTodo,
  toggleFavourite,
} from '../../redux/todoSlice';
import Popup from '../Popup/Popup';
import './StyleItem.module.css';
import Menu from '../../icons/menu.svg';
import Star from '../../icons/star.svg';

const TodoItem = ({ id, title, completed, favourite }) => {
  const [popup, setPopup] = useState(false);

  const ToggleModal = () => setPopup(!popup);
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
    return popup ? setPopup(!popup) : setPopup(popup);
  };

  const handleFavouriteClick = () => {
    dispatch(toggleFavourite({ id: id, favourite: !favourite }));
    return popup ? setPopup(!popup) : setPopup(popup);
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
    ToggleModal();
  };

  return (
    <li>
      <span>
        <input
          type='checkbox'
          checked={completed}
          onChange={handleCompleteClick}
        />
        &nbsp;
        {title}
      </span>
      {favourite ? (
        <button onClick={() => handleFavouriteClick()}>
          <img src={Star} style={{ width: '14px' }} alt='#'></img>
        </button>
      ) : null}

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
