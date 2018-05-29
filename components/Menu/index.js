import Link from "next/link";
import { withRouter } from "next/router";

import styles from "./styles.scss";

const ActiveLink = withRouter(({ children, router, href }) => {
  return (
    <Link href={href} prefetch>
      <a
        href={href}
        className={router.pathname === href ? styles.selected : null}
      >
        {children}
      </a>
    </Link>
  );
});

const Menu = props => (
  <div className={styles.menu}>
    <ActiveLink href="/">Home</ActiveLink>
    <ActiveLink href="/resume">Resume</ActiveLink>
  </div>
);

export default Menu;
