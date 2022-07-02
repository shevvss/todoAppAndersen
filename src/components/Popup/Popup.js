import ReactDOM from 'react-dom';
import styles from './StylesPopup.module.css';

const Popup = ({
  show,
  close,
  del,
  children,
  completed,
  favourite,
  handleComplete,
  handleFavourite,
}) => {
  return ReactDOM.createPortal(
    <>
      {show ? (
        <div
          className={`${styles.modalContainer} ${styles.show}`}
          onClick={() => close()}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {favourite ? (
              <button onClick={handleFavourite}>Remove from favourites</button>
            ) : (
              <button onClick={handleFavourite}>Add to favourites</button>
            )}

            {completed ? (
              <button onClick={handleComplete}>Return to list</button>
            ) : (
              <button onClick={handleComplete}>Done</button>
            )}

            <button>Edit</button>
            <button onClick={del}>Delete</button>
            {/* <button className={styles.close} onClick={() => close()}>
              close
            </button> */}
            <main className={styles.modal_content}>{children}</main>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById('modal')
  );
};

export default Popup;
