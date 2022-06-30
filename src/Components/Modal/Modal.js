import ReactDOM from 'react-dom';
import styles from './StylesModal.module.css';
import Close from './close.svg';

const Modal = ({ show, close, title, message, children }) => {
  return ReactDOM.createPortal(
    <>
      {show ? (
        <div
          className={`${styles.modalContainer} ${styles.show}`}
          onClick={() => close()}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <header className={styles.modal_header}>
              <h2 className={styles.modal_headerTitle}>{title}</h2>
              <button className={styles.close} onClick={() => close()}>
                <img src={Close} alt='close' />
              </button>
            </header>
            <main className={styles.modal_content}>{children}</main>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
