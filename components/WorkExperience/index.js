import { RichText } from "prismic-reactjs";
import styles from "./styles.scss";

const WorkExperience = ({ item }) => (
  <div className={styles.work}>
    <a className={styles.business} href={item.business_url} target="_blank">
      {item.business_name}
    </a>
    <div className={styles.meta}>
      <div className={styles.position}>{item.position}</div>{" "}
      <div className={styles.pipe}>|</div>{" "}
      <div className={styles.duration}>{item.time}</div>
    </div>
    <div className={styles.responsibilities}>
      {RichText.render(item.description)}
    </div>
  </div>
);

export default WorkExperience;
