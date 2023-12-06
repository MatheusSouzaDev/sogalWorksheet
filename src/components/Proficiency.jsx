import styles from "./Proficiency.module.css";

export default function Proficiency({ attributesPoints }) {
  const proficiencyPoints = [
    attributesPoints[0] + attributesPoints[1],
    attributesPoints[0] + attributesPoints[2],
    attributesPoints[0] + attributesPoints[3],
    attributesPoints[0] + attributesPoints[4],
    attributesPoints[1] + attributesPoints[2],
    attributesPoints[1] + attributesPoints[4],
    attributesPoints[3] + attributesPoints[1],
    attributesPoints[3] + attributesPoints[2],
    attributesPoints[3] + attributesPoints[4],
    attributesPoints[4] + attributesPoints[2]
  ];

  return (
    <div className={styles.proficiency}>
      {proficiencyPoints.map((proficiency, index) => (
        <div key={index} className={styles.box}>
          <div>
            <span>{proficiency}</span>
          </div>
          {(() => {
            switch (index) {
              case 0:
                return <span>for</span>;
              case 1:
                return <span>r. f.</span>;
              case 2:
                return <span>r. m.</span>;
              case 3:
                return <span>sob</span>;
              case 4:
                return <span>agi</span>;
              case 5:
                return <span>des</span>;
              case 6:
                return <span>com</span>;
              case 7:
                return <span>cri</span>;
              case 8:
                return <span>man</span>;
              case 9:
                return <span>sor</span>;
              default:
                return null;
            }
          })()}
        </div>
      ))}
    </div>
  );
}
