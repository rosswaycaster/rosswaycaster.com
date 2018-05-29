import { Textfit } from "react-textfit";
import styles from "./styles.scss";

const Name = props => (
  <div className={styles.wrapper}>
    <Textfit mode="single" className={styles.name}>
      {props.data.name}
    </Textfit>
    <div className={`${styles.position} roboto`}>{props.data.position}</div>
  </div>
);

export default Name;
