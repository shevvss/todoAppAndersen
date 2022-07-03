import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../redux/todoSlice';
import styles from './StylesPopup.module.css';

const PopupEdit = ({ show, close, todo }) => {
  const dispatch = useDispatch();

  const handleEditClick = (event) => {
    event.preventDefault();
    const title = event.target.title.value.trim();
    if (title.length === 0) return;

    fetch(`https://62bf3495be8ba3a10d65ed0b.mockapi.io/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ title: title }),
    }).then(dispatch(editTodo({ id: todo.id, title: title })));
    close();
  };

  return ReactDOM.createPortal(
    <>
      {show && (
        <div
          className={`${styles.modalContainer} ${styles.show}`}
          onClick={() => close()}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleEditClick}>
              <input
                type='text'
                name='title'
                defaultValue={todo.title}
                maxLength='160'
              ></input>

              <button type='submit'>Edit</button>
            </form>
            <button className={styles.close} onClick={() => close()}>
              close
            </button>
          </div>
        </div>
      )}
    </>,
    document.getElementById('modal')
  );
};

export default PopupEdit;
