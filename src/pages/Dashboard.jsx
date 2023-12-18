import { useState } from "react";
import styles from "./Dashboard.module.css";
import ImageAttributes from "../assets/Attributes.svg";
import MyModal from "../components/MyModal.jsx";
import ImageCharacter from "../assets/Character.svg";
import Skills from "../components/Skills.jsx";
import Wallet from "../components/Wallet.jsx";
import MySwiper from "../components/MySwiper.jsx";
import CharacterForm from "../components/CharacterForm.jsx";
import MyButton from "../components/MyButton.jsx";
import Attributes from "../components/Attributes.jsx";
import ImageDiceOne from "../assets/diceTwentyFacesOne.svg";
import Proficiency from "../components/Proficiency.jsx";
import CharacterImage from "../components/CharacterImage.jsx";

export default function Dashboard() {
  const [openModalCharacter, setOpenModalCharacter] = useState(false);
  const [openModalAttribute, setOpenModalAttribute] = useState(false);
  const [openModalTest, setOpenModalTest] = useState(false);
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
          <MyButton
            image={ImageCharacter}
            handleClick={() => setOpenModalCharacter(true)}
          />
          <MyButton
            image={ImageAttributes}
            handleClick={() => setOpenModalAttribute(true)}
          />
          <MyButton
            image={ImageDiceOne}
            handleClick={() => setOpenModalTest(true)}
          />
          <MyModal
            isOpen={openModalCharacter}
            setCloseModal={() => setOpenModalCharacter(!openModalCharacter)}
          >
            <CharacterForm/>
          </MyModal>
          <MyModal
            isOpen={openModalAttribute}
            setCloseModal={() => setOpenModalAttribute(!openModalAttribute)}
          >
            <h2>Eu sou o modal attributes</h2>
            <br />
            <br />
            <p>
              Aqui ficará a história do personagem, sua descrição fisica, seus
              traços de estado e suas anotações da campanha.
            </p>
            <br />
            <span>Próxima atualização chega em breve!!!</span>
          </MyModal>
          <MyModal
            isOpen={openModalTest}
            setCloseModal={() => setOpenModalTest(!openModalTest)}
          >
            <h2>Eu sou o modal test</h2>
            <br />
            <br />
            <p>
              Aqui é onde será feito os testes proposto pelo mestre da campanha.
            </p>
            <br />
            <span>Próxima atualização chega em breve!!!</span>
          </MyModal>
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
