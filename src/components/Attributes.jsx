import styles from "./Attributes.module.css";

export default function Attributes({ attributesPoints }) {
  return (
    <div className={styles.attribute}>
      {attributesPoints.map((attribute, index) => (
        <div key={index} className={styles.box}>
          <div className={styles.circle}>
            <span>{attribute}</span>
          </div>
          {(() => {
            switch (index) {
              case 0: 
                return <span>vig</span>;
              case 1: 
                return <span>hab</span>;
              case 2: 
                return <span>per</span>;
              case 3: 
                return <span>int</span>;
              case 4: 
                return <span>dom</span>;
              default:
                return null;
            }
          })()}
        </div>
      ))}
    </div>
  );
}
