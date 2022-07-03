import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, toggleFavourite } from '../../redux/todoSlice';
import PopupMenu from '../Popup/PopupMenu';
import styles from './StyleItem.module.css';
import Menu from '../../icons/menu.svg';
import Star from '../../icons/star.svg';

const TodoItem = ({ todo }) => {
  const { id, title, completed, favourite } = todo;
  const [popupMenu, setPopupMenu] = useState(false);

  const TogglePopupMenu = () => setPopupMenu(!popupMenu);

  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
    setPopupMenu(false);
  };

  const handleFavouriteClick = () => {
    dispatch(toggleFavourite({ id: id, favourite: !favourite }));
    setPopupMenu(false);
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

      <button onClick={() => TogglePopupMenu()}>
        <img src={Menu} style={{ width: '14px' }} alt='#'></img>
      </button>
      <PopupMenu
        show={popupMenu}
        close={TogglePopupMenu}
        todo={todo}
        handleComplete={handleCompleteClick}
        handleFavourite={handleFavouriteClick}
      />
      {/* <button onClick={handleDeleteClick}>&times;</button> */}
    </li>
  );
};

export default TodoItem;
