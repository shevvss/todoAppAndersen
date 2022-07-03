import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import PopupDelete from './PopupDelete';
import styles from './StylesPopup.module.css';
import PopupEdit from './PopupEdit';

const PopupMenu = ({ show, close, todo, handleComplete, handleFavourite }) => {
  const { completed, favourite } = todo;

  const [popupDelete, setPopupDelete] = useState(false);
  const [popupEdit, setPopupEdit] = useState(false);

  const TogglePopupDelete = () => setPopupDelete(!popupDelete);
  const TogglePopupEdit = () => setPopupEdit(!popupEdit);

  return ReactDOM.createPortal(
    <>
      {show && (
        <div
          className={`${styles.modalContainer} ${styles.show}`}
          onClick={() => close()}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <li className={styles.li}>
              {favourite ? (
                <button onClick={handleFavourite}>
                  Remove from favourites
                </button>
              ) : (
                <button onClick={handleFavourite}>Add to favourites</button>
              )}

              {completed ? (
                <button onClick={handleComplete}>Return to list</button>
              ) : (
                <button onClick={handleComplete}>Done</button>
              )}

              <button onClick={() => TogglePopupEdit()}>Edit</button>
              <button onClick={() => TogglePopupDelete()}>Delete</button>
            </li>
            <PopupEdit show={popupEdit} todo={todo} close={TogglePopupEdit} />
            <PopupDelete
              show={popupDelete}
              todo={todo}
              close={TogglePopupDelete}
            />
            {/* <button className={styles.close} onClick={() => close()}>
              close
            </button> */}
          </div>
        </div>
      )}
    </>,
    document.getElementById('modal')
  );
};

export default PopupMenu;
