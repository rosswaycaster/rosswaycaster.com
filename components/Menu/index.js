import Link from "next/link";
import { withRouter } from "next/router";
import NProgress from "nprogress";
import Router from "next/router";

import styles from "./styles.scss";

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

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
    <ActiveLink href="/experience">Experience</ActiveLink>
    {/* <ActiveLink href="/projects">Projects</ActiveLink> */}
  </div>
);

export default Menu;
