import { RichText } from "prismic-reactjs";
import styles from "./styles.scss";

const Education = ({ item }) => (
  <div className={styles.education}>
    <a className={styles.school} href={item.school_url} target="_blank">
      {item.school_name}
    </a>
    <div className={styles.meta}>
      <div className={styles.degree}>{item.degree}</div>{" "}
      <div className={styles.pipe}>|</div>{" "}
      <div className={styles.duration}>{item.time}</div>
    </div>
    <div className={styles.description}>
      {RichText.render(item.description)}
    </div>
  </div>
);

export default Education;
