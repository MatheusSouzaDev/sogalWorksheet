import styles from "./MyModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function MyModal({ isOpen, children, setCloseModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={setCloseModal}
      contentLabel="Modal de exemplo"
      className={styles.contentModal}
      overlayClassName={styles.overlayModal}
      closeTimeoutMS={500}
    >
      {children}
      <button className={styles.closeModal} onClick={setCloseModal}>
        x
      </button>
    </Modal>
  );
}
