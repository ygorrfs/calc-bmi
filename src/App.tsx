import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import leftArrowImage from "./assets/leftarrow.png";
import { GridItem } from "./components/GridItens/Index";
import { levels, calculateIMC, Level } from "./helpers/imc";

const App = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateImc = () => {
    if (height && weight) {
      setToShow(calculateIMC(height, weight));
    } else {
      alert("enter a valid number");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeight(0);
    setWeight(0);
  };

  return (
    <div className={styles.page}>
      <header>
        <div className={styles.pageHeader}>
          <img src={poweredImage} alt="poweredImage" />
        </div>
      </header>
      <div className={styles.pageBody}>
        <div className={styles.pageBodyLeft}>
          <h1>Calculate your BMI.</h1>
          <p>
            BMI is the acronym for Body Mass Index, a parameter adopted by World
            Health Organization to calculate the ideal weight of each person.
          </p>
          <input
            type="number"
            placeholder="Enter your height. Ex: 1.5 (in Meters)"
            value={height > 0 ? height : ""}
            onChange={(e) => {
              setHeight(parseFloat(e.target.value));
            }}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Enter your weight. Ex: 75.5 (in kg)"
            value={weight > 0 ? weight : ""}
            onChange={(e) => {
              setWeight(parseFloat(e.target.value));
            }}
            disabled={toShow ? true : false}
          />
          <div className={styles.pageButton}>
            <button
              className={styles.pageButtonCalc}
              onClick={handleCalculateImc}
              disabled={toShow ? true : false}
            >
              Calculate
            </button>
          </div>
        </div>
        <div className={styles.pageBodyRight}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
