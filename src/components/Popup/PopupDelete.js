import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todoSlice';
import styles from './StylesPopup.module.css';

const PopupDelete = ({ show, close, todo }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    fetch(`https://62bf3495be8ba3a10d65ed0b.mockapi.io/todos/${todo.id}`, {
      method: 'DELETE',
    }).then(dispatch(deleteTodo({ id: todo.id })));
  };

  return ReactDOM.createPortal(
    <>
      {show && (
        <div
          className={`${styles.modalContainer} ${styles.show}`}
          onClick={() => close()}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            Are you sure you want to delete?
            <br /> <br />
            <button onClick={handleDeleteClick}>Yes</button>
            <button className={styles.close} onClick={() => close()}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>,
    document.getElementById('modal')
  );
};

export default PopupDelete;
