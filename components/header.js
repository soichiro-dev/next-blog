import Link from "next/link";
import styles from "./header.module.css";

const Header = () => (
  <header>
    <p className={styles.title}>soichiroのアウトプット置き場</p>
    <Link href="/">
      <a className={styles.menu_home}>Home</a>
    </Link>
  </header>
);

export default Header;
