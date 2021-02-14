import Link from 'next/link'
import styles from './header.module.css'

const Header = () => (
  <header>
    <h1 className={styles.title}>soichiroのアウトプット置き場</h1>
    <Link href="/">
      <a className={styles.menu_home}>Home</a>
    </Link>
  </header>
)

export default Header