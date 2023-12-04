import styles from "./CharacterImage.module.css";
import Player from "../assets/knightPlayer.svg";

export default function CharacterImage() {
  return (
    <div className={styles.imageBox}>
      <img src={Player} alt="Imagem do Personagem" />
    </div>
  );
}
