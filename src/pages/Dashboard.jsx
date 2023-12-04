import styles from "./Dashboard.module.css";
import Skills from "../components/Skills.jsx";
import MySwiper from "../components/MySwiper.jsx";
import MyButton from "../components/MyButton.jsx";
import Attributes from "../components/Attributes.jsx";
import DiceOne from "../assets/diceTwentyFacesOne.svg";
import Note from "../assets/Attributes.svg";
import Status from "../assets/Character.svg";
import Proficiency from "../components/Proficiency.jsx";
import CharacterImage from "../components/CharacterImage.jsx";
import Wallet from "../components/Wallet.jsx";

export default function Dashboard() {
  const character = ["Ogriff Body", "Elfo", "Bardo"];
  const points = ["Life", "Armor", "Energy"];
  const data = ["Masc", "45A", "0L"];
  const attributes = [12, 13, 8, 8, 9];
  const maxLife = attributes[0] * 2 + attributes[4];
  const maxArmor = 0;
  const maxEnergy = attributes[2] + attributes[3] + attributes[4];

  return (
    <section className={styles.wrapperCard}>
      <header className={styles.headerCard}>
        <MySwiper slides={character} type="h3" />
        <MySwiper
          slides={points}
          type="span"
          life={maxLife}
          armor={maxArmor}
          energy={maxEnergy}
        />
        <MySwiper slides={data} type="span" />
        <div className={styles.buttonBox}>
          <MyButton image={Status}/>
          <MyButton image={Note}/>
          <MyButton image={DiceOne}/>
        </div>
      </header>
      <main className={styles.mainCard}>
        <CharacterImage />
        <Attributes attributesPoints={attributes} />
        <Proficiency attributesPoints={attributes} />
        <Skills />
        <Wallet attributesPoints={attributes} />
      </main>
    </section>
  );
}
