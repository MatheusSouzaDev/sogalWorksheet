import styles from "./Magic.module.css";

export default function Magic() {
  const magics = [];
  const renderMagicItem = (magic, index) => (
    <li key={index}>
      <p>{magic[0]}</p>
      <p>{magic[1]}</p>
    </li>
  );
  const renderDefaultMagicItem = () => (
    <li>
      <p>vazio</p>
      <p>sem magia</p>
    </li>
  );

  return (
    <div className={styles.magic}>
      <div className={styles.title}>
        <p>classe</p>
        <p>magia</p>
      </div>
      <div className={styles.content}>
        <ul>
          {magics.map((magic, index) => renderMagicItem(magic,index))}
          {magics.length === 0 && renderDefaultMagicItem()}
        </ul>
      </div>
    </div>
  );
}
