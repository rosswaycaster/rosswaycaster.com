import styles from "./styles.scss";

const Button = props => {
  if (props.href) {
    return (
      <a
        href={props.href}
        target={props.target || "_self"}
        className={styles.button}
      >
        {props.children}
      </a>
    );
  }

  if (props.onClick) {
    return (
      <div onClick={props.onClick} className={styles.button}>
        {props.children}
      </div>
    );
  }

  return <div className={styles.button}>{props.children}</div>;
};

export default Button;
