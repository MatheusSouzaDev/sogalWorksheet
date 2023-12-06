import styles from "./wallet.module.css";

export default function Wallet({ attributesPoints }) {
  const maxWeigth = attributesPoints[0] + attributesPoints[1]
  const combatWeigth = attributesPoints[0]

  return (
    <div className={styles.change}>
      <div className={styles.left}>
        <div className={styles.valueBox}>
          <p className={styles.paragraph}>0sg</p>
          <p className={styles.paragraph}>SG</p>
        </div>
        <div className={styles.valueBox}>
          <p className={styles.paragraph}>0xp</p>
          <p className={styles.paragraph}>xp</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.valueBox}>
          <p className={styles.paragraph}>0kg</p>
          <p className={styles.paragraph}>atual</p>
        </div>
        <div className={styles.valueBox}>
          <p className={styles.paragraph}>{maxWeigth}kg</p>
          <p className={styles.paragraph}>max</p>
        </div>
        <div className={styles.valueBox}>
          <p className={styles.paragraph}>{combatWeigth}kg</p>
          <p className={styles.paragraph}>combat</p>
        </div>
      </div>
    </div>
  );
}
