import styles from "./Equipment.module.css";

export default function Equipment() {
  const equipments = [];
  const renderEquipmentItem = (equipment, index) => (
    <li key={index}>
      <p>{equipment[0]}</p>
      <p>{equipment[1]}</p>
      <p>{equipment[2]}kg</p>
    </li>
  );
  const renderDefaultEquipmentItem = () => (
    <li>
      <p>sem equip.</p>
      <p>vazio</p>
      <p>0kg</p>
    </li>
  );

  return (
    <div className={styles.equipment}>
      <div className={styles.title}>
        <p>equipamento</p>
        <p>pdA</p>
        <p>peso</p>
      </div>
      <div className={styles.content}>
        <ul>
          {equipments.map((equipment, index) => renderEquipmentItem(equipment, index))}
          {equipments.length === 0 && renderDefaultEquipmentItem()}
        </ul>
      </div>
    </div>
  );
}
