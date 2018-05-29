import Link from "next/link";
import { withRouter } from "next/router";

import "./styles.scss";

const ActiveLink = withRouter(({ children, router, href }) => {
  return (
    <Link href={href} prefetch>
      <a href={href} className={router.pathname === href ? "selected" : null}>
        {children}
      </a>
    </Link>
  );
});

const Menu = props => (
  <div id="Menu">
    <ActiveLink href="/">Home</ActiveLink>
    <ActiveLink href="/resume">Resume</ActiveLink>
  </div>
);

export default Menu;
