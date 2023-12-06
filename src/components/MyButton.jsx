import styles from "./MyButton.module.css";

export default function MyButton({ image, handleClick }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      <img src={image} alt="imagem fornecida pelo usuário" />
    </button>
  );
}
