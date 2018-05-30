import styles from "./styles.scss";

const RightContainer = props => (
  <div className={styles.rightContainer}>
    {props.children}
    <a
      href="https://github.com/rosswaycaster/rosswaycaster.com"
      className={styles.github}
    >
      <img src="/static/github.png" />View website code on GitHub.
    </a>
  </div>
);

export default RightContainer;
