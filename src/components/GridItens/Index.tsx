import { Level } from "../../helpers/imc";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";
import styles from "./GridItem.module.css";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img src={item.icon === "up" ? upImage : downImage} alt="" width="30" />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      {item.yourImc && (
        <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m</div>
      )}

      <div className={styles.gridInfo}>
        <>
          BMI is between <strong>{item.imc[0]}</strong> and{" "}
          <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};
