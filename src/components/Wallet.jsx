import styles from "./wallet.module.css";

export default function Wallet({ attributesPoints }) {
  const maxWeigth = attributesPoints[0] + attributesPoints[1]
  const combatWeigth = attributesPoints[0]

  return (
    <div className={styles.change}>
      <div className={styles.left}>
        <div className={styles.valueBox}>
          <p>0sg</p>
          <p>SG</p>
        </div>
        <div className={styles.valueBox}>
          <p>0xp</p>
          <p>xp</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.valueBox}>
          <p>0kg</p>
          <p>atual</p>
        </div>
        <div className={styles.valueBox}>
          <p>{maxWeigth}kg</p>
          <p>max</p>
        </div>
        <div className={styles.valueBox}>
          <p>{combatWeigth}kg</p>
          <p>combat</p>
        </div>
      </div>
    </div>
  );
}
