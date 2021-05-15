import styles from "../styles/Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>EVENTS FINDER</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
