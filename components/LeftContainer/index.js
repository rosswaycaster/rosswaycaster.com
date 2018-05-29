import styles from "./styles.scss";

const LeftContainer = props => (
  <div className={styles.leftContainer}>{props.children}</div>
);

export default LeftContainer;
