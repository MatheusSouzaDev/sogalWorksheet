import styles from './MyButton.module.css'

export default function MyButton({image}) {
  return (
    <button className={styles.button}>
        <img src={image} alt="imagem fornecida pelo usuário" />
    </button>
  )
}
