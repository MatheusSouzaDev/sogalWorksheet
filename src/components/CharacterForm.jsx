import { useState } from "react";
import styles from "./CharacterForm.module.css";

export default function CharacterForm() {
  const breeds = [
    "anão",
    "elfo",
    "gnomo",
    "halfling",
    "humano",
    "meio-elfo",
    "meio-orc",
  ];
  const ranks = [
    "barbaro",
    "bardo",
    "bruxo",
    "druida",
    "feiticeiro",
    "guerreiro",
    "ladino",
    "monge",
    "paladino",
    "patrulheiro",
  ];
  const [pointsAttributes, setPointsAttributes] = useState(50);
  const [pointsVig, setPointsVig] = useState(0);
  const [pointsHab, setPointsHab] = useState(0);
  const [pointsPer, setPointsPer] = useState(0);
  const [pointsInt, setPointsInt] = useState(0);
  const [pointsDom, setPointsDom] = useState(0);
  
  const AttributeBox = ({ attributeName, points, setPoints }) => {
    const increase = () => {
      if (pointsAttributes > 0) {
        if (points < 15) {
          setPointsAttributes((prevPoints) => prevPoints - 1);
          setPoints((prevPoints) => prevPoints + 1);
        } else {
          const pointsAbove15 = points - 15;
          const additionalPoints = pointsAbove15 + 2;
          if (pointsAttributes >= additionalPoints) {
            setPointsAttributes((prevPoints) => prevPoints - additionalPoints);
            setPoints((prevPoints) => prevPoints + 1);
          }
        }
      }
    };

    const decrease = () => {
      if (pointsAttributes < 50 && points > 0) {
        if (points > 15) {
          const additionalPoints = points - 15 + 1;
          setPointsAttributes((prevPoints) => prevPoints + additionalPoints);
          setPoints((prevPoints) => prevPoints - 1);
        } else {
          setPointsAttributes((prevPoints) => prevPoints + 1);
          setPoints((prevPoints) => prevPoints - 1);
        }
      }
    };

    return (
      <div className={styles.setAttributesBox}>
        <p onClick={decrease}>
          <span>-</span>
        </p>
        <div>
          <p>{attributeName}</p>
          <span>{points}</span>
        </div>
        <p onClick={increase}>
          <span>+</span>
        </p>
      </div>
    );
  };

  return (
    <form>
      <fieldset>
        <legend>personagem</legend>
        <div className={styles.topBox}>
          <div className={styles.inputBox}>
            <input
              type="text"
              name="nameCharacter"
              id="nameCharacter"
              required
            />
            <label htmlFor="nameCharacter">nome:</label>
          </div>
          <div className={styles.selectBox}>
            <select name="breedCharacter" id="breedCharacter" required>
              <option value=""></option>
              {breeds.map((breed, index) => (
                <option key={index} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
            <label htmlFor="breedCharacter">raça:</label>
          </div>
          <div className={styles.radioBox}>
            <input
              type="radio"
              name="genderCharacter"
              id="genderMCharacter"
              value="masc"
              required
            />
            <label htmlFor="genderMCharacter">m</label>
            <input
              type="radio"
              name="genderCharacter"
              id="genderFCharacter"
              value="masc"
              required
            />
            <label htmlFor="genderFCharacter">f</label>
          </div>
          <div className={styles.selectBox}>
            <select name="rankCharacter" id="rankCharacter" required>
              <option value=""></option>
              {ranks.map((rank, index) => (
                <option key={index} value={rank}>
                  {rank}
                </option>
              ))}
            </select>
            <label htmlFor="rankCharacter">classe:</label>
          </div>
          <div className={styles.inputBox}>
            <input
              type="number"
              name="ageCharacter"
              id="ageCharacter"
              className="ageCharacter"
              required
            />
            <label htmlFor="ageCharacter">idade:</label>
          </div>
          <div className={styles.inputBox}>
            <input
              type="number"
              name="levelCharacter"
              id="levelCharacter"
              required
            />
            <label htmlFor="levelCharacter">level:</label>
          </div>
        </div>
        <div className={styles.attributesBox}>
          <h4> pontos de atributos: {pointsAttributes}</h4>
          <AttributeBox
            attributeName="Vig"
            points={pointsVig}
            setPoints={setPointsVig}
          />
          <AttributeBox
            attributeName="Hab"
            points={pointsHab}
            setPoints={setPointsHab}
          />
          <AttributeBox
            attributeName="Per"
            points={pointsPer}
            setPoints={setPointsPer}
          />
          <AttributeBox
            attributeName="Int"
            points={pointsInt}
            setPoints={setPointsInt}
          />
          <AttributeBox
            attributeName="Dom"
            points={pointsDom}
            setPoints={setPointsDom}
          />
        </div>
        <div className={styles.bottomBox}>
          <div className={styles.selectBox}>
            <select name="magicCharacter" id="magicCharacter" required>
              <option value=""></option>
              {ranks.map((magic, index) => (
                <option key={index} value={magic}>
                  {magic}
                </option>
              ))}
            </select>
            <label htmlFor="magicCharacter">magia:</label>
          </div>
          <div className={styles.selectBox}>
            <select name="weaponCharacter" id="weaponCharacter" required>
              <option value=""></option>
              {ranks.map((weapon, index) => (
                <option key={index} value={weapon}>
                  {weapon}
                </option>
              ))}
            </select>
            <label htmlFor="weaponCharacter">arma:</label>
          </div>
          <div className={styles.selectBox}>
            <select name="equipmentCharacter" id="equipmentCharacter" required>
              <option value=""></option>
              {ranks.map((equipment, index) => (
                <option key={index} value={equipment}>
                  {equipment}
                </option>
              ))}
            </select>
            <label htmlFor="equipmentCharacter">equip.:</label>
          </div>
          <div className={styles.selectBox}>
            <select name="inventoryCharacter" id="inventoryCharacter" required>
              <option value=""></option>
              {ranks.map((inventory, index) => (
                <option key={index} value={inventory}>
                  {inventory}
                </option>
              ))}
            </select>
            <label htmlFor="inventoryCharacter">invent.:</label>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
