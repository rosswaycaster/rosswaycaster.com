import Name from "@components/Name";
import { RichText } from "prismic-reactjs";
import styles from "./styles.scss";

const Bio = props => (
  <div>
    <Name data={props.data} />
    <div className={styles.description}>{RichText.render(props.data.bio)}</div>
    <a className={styles.email} href={`mailto:${props.data.email}`}>
      {props.data.email}
    </a>
  </div>
);

export default Bio;
