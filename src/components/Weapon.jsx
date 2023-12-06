import styles from "./Weapon.module.css";

export default function Weapon() {
  const weapons = [];
  const renderWeaponItem = (weapon, index) => (
    <li key={index}>
      <p>{weapon[0]}</p>
      <p>+{weapon[1]}</p>
      <p>{weapon[2]}</p>
      <p>{weapon[3]}kg</p>
    </li>
  );
  const renderDefaultWeaponItem = () => (
    <li>
      <p>sem arma</p>
      <p>+0</p>
      <p>vazio</p>
      <p>0kg</p>
    </li>
  );

  return (
    <div className={styles.weapon}>
      <div className={styles.title}>
        <p>arma</p>
        <p>dano</p>
        <p>teste</p>
        <p>peso</p>
      </div>
      <div className={styles.content}>
        <ul>
          {weapons.map((weapon, index) => renderWeaponItem(weapon, index))}
          {weapons.length === 0 && renderDefaultWeaponItem()}
        </ul>
      </div>
    </div>
  );
}
