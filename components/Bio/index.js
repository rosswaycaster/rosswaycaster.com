import Name from "@components/Name";
import styles from "./styles.scss";

const Bio = props => (
  <div>
    <Name data={props.data} />
    <div className={styles.description}>{props.data.bio[0].text}</div>
    <a className={styles.email} href={`mailto:${props.data.email}`}>
      {props.data.email}
    </a>
  </div>
);

export default Bio;
