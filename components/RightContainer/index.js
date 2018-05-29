import styles from "./styles.scss";

const RightContainer = props => (
  <div className={styles.rightContainer}>{props.children}</div>
);

export default RightContainer;
