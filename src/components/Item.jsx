import styles from "./Item.module.css";

export default function Item() {
  const items = [];
  const renderItemItem = (item, index) => (
    <li key={index}>
      <p>{item[0]}</p>
      <p>{item[1]}</p>
      <p>{item[2]}kg</p>
    </li>
  );
  const renderDefaultItemItem = () => (
    <li>
      <p>vazio</p>
      <p>sem item</p>
      <p>0kg</p>
    </li>
  );

  return (
    <div className={styles.item}>
      <div className={styles.title}>
        <p>qtd.</p>
        <p>item&#40;descrição&#41;</p>
        <p>peso</p>
      </div>
      <div className={styles.content}>
        <ul>
          {items.map((item, index) => renderItemItem(item, index))}
          {items.length === 0 && renderDefaultItemItem()}
        </ul>
      </div>
    </div>
  );
}
